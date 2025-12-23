import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getModule, getSection, getTopic } from "../../content/sanych/registry.js";
import LessonHeader from "../../components/lesson/LessonHeader.jsx";
import LessonContent from "../../components/lesson/LessonContent.jsx";
import LessonNav from "../../components/lesson/LessonNav.jsx";
import { toSection, toTopic, toTopicPart } from "../../utils/routes.js";
import { splitLessonPrefix, splitPartPrefix } from "../../utils/lessonTitle.js";
import PartHeader from "../../components/lesson/PartHeader.jsx";
export default function ModuleTopicPage() {
  const { moduleId, sectionId, topicId, partId } = useParams();

  const mod = getModule(moduleId);
  const sec = getSection(moduleId, sectionId);
  const top = getTopic(moduleId, sectionId, topicId);

  if (!mod || !sec) return <main className="sn-lesson"><p>Раздел не найден.</p></main>;
  if (!top) return <main className="sn-lesson"><p>Тема не найдена.</p></main>;

  const hasParts = Array.isArray(top.parts) && top.parts.length > 0;

  const currentPart = hasParts
    ? (partId ? top.parts.find((p) => p.id === partId) : top.parts[0])
    : null;

  const blocks = hasParts ? (currentPart?.blocks ?? []) : (top.blocks ?? []);

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

  // 🔥 Вот тут магия: режем заголовки на “ярлык” и “текст”
  const lessonSplit = splitLessonPrefix(top.title);
  const partSplit = hasParts ? splitPartPrefix(currentPart?.title ?? "") : { label: null, text: "" };

  // Что будет крупным H1:
  // - если parts есть: крупно показываем смысл части (без "4)")
  // - если parts нет: крупно показываем смысл урока (без "Урок 5:")
const pageTitle = lessonSplit.text;

// Подзаголовок = текущая часть (без "1)")
const pageSubtitle = hasParts ? (partSplit.text || currentPart?.title) : null;

// Тизер: если parts — тизер части, иначе — тизер темы
const pageTeaser = hasParts ? (currentPart?.teaser ?? top.teaser) : top.teaser;



  return (
    <main className="sn-lesson">
      <LessonHeader
        lessonLabel={lessonSplit.label}        // "Урок 5"
        partLabel={hasParts ? partSplit.label : null} // "4"
        subtitle={pageSubtitle}               // "Надкассовое меню — ..."
        
        title={pageTitle}                     // "Что показывать..."
        teaser={pageTeaser}
        minutes={top.estimatedMinutes}
        level={top.level}
        kind={top.kind}
        toTopics={toSection(mod.id, sec.id)}
      />

          {hasParts ? (
      <PartHeader
                 
        title={partSplit.text || currentPart?.title}   // "Главная мысль..."
        teaser={currentPart?.teaser}        // ✅ тизер ЧАСТИ
      />
    ) : null}

      <LessonContent blocks={blocks} />

      <LessonNav
        toTopics={toSection(mod.id, sec.id)}
        prevTo={prevTo}
        nextTo={nextTo}
      />
    </main>
  );
}
