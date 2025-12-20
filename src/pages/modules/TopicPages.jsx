import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getModule, getSection, getTopic } from "../../content/sanych/registry.js";
import LessonHeader from "../../components/lesson/LessonHeader.jsx";
import LessonContent from "../../components/lesson/LessonContent.jsx";
import LessonNav from "../../components/lesson/LessonNav.jsx";
import { toSection, toTopic, toTopicPart } from "../../utils/routes.js";

export default function ModuleTopicPage() {
  const { moduleId, sectionId, topicId, partId } = useParams();

  const mod = getModule(moduleId);
  const sec = getSection(moduleId, sectionId);
  const top = getTopic(moduleId, sectionId, topicId);

  if (!mod || !sec) return <main className="sn-lesson"><p>Раздел не найден.</p></main>;
  if (!top) return <main className="sn-lesson"><p>Тема не найдена.</p></main>;

  const hasParts = Array.isArray(top.parts) && top.parts.length > 0;

  // текущая “страница” темы
  const currentPart = hasParts
    ? (partId ? top.parts.find((p) => p.id === partId) : top.parts[0])
    : null;

  // блоки, которые реально надо рендерить
  const blocks = hasParts ? (currentPart?.blocks ?? []) : (top.blocks ?? []);

  // навигация: если parts — листаем части, иначе — темы
  const { prevTo, nextTo } = useMemo(() => {
    if (hasParts) {
      const list = top.parts ?? [];
      const currentId = currentPart?.id ?? list[0]?.id;
      const idx = list.findIndex((p) => p.id === currentId);

      const prevPart = idx > 0 ? list[idx - 1] : null;
      const nextPart = idx < list.length - 1 ? list[idx + 1] : null;

      return {
        prevTo: prevPart ? toTopicPart(mod.id, sec.id, top.id, prevPart.id) : null,
        nextTo: nextPart ? toTopicPart(mod.id, sec.id, top.id, nextPart.id) : null,
      };
    }

    const list = sec.topics ?? [];
    const idx = list.findIndex((t) => t.id === top.id);
    const prev = idx > 0 ? list[idx - 1] : null;
    const next = idx < list.length - 1 ? list[idx + 1] : null;

    return {
      prevTo: prev ? toTopic(mod.id, sec.id, prev.id) : null,
      nextTo: next ? toTopic(mod.id, sec.id, next.id) : null,
    };
  }, [hasParts, top, currentPart, mod.id, sec.id, sec.topics]);

  // заголовок/тизер: если parts — показываем часть
  const pageTitle = hasParts
    ? `${top.title} · ${currentPart?.title ?? ""}`
    : top.title;

  const pageTeaser = hasParts
    ? (currentPart?.teaser ?? top.teaser)
    : top.teaser;

  return (
  <main className="sn-lesson">
    <section className="sn-surface sn-surface--header">
      <LessonHeader
        moduleTitle={mod.title}
        sectionTitle={sec.title}
        title={pageTitle}
        teaser={pageTeaser}
        minutes={top.estimatedMinutes}
        level={top.level}
        kind={top.kind}
        toTopics={toSection(mod.id, sec.id)}
      />
    </section>

    <section className="sn-surface sn-surface--content">
      <LessonContent blocks={blocks} />
    </section>

    <div className="sn-lesson__navBar">
      <LessonNav toTopics={toSection(mod.id, sec.id)} prevTo={prevTo} nextTo={nextTo} />
    </div>
  </main>
);
}
