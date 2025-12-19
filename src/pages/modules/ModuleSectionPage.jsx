// src/pages/modules/ModuleSectionIndexPage.jsx
import { useParams } from "react-router-dom";
import { getModule, getSection } from "../../content/sanych/registry.js";
import TopicCard from "../../components/modules/TopicCard.jsx";

export default function ModuleSectionIndexPage() {
  const { moduleId, sectionId } = useParams();
  const mod = getModule(moduleId);
  const sec = getSection(moduleId, sectionId);

  if (!mod || !sec) return <main className="sn-container"><p>Раздел не найден.</p></main>;

  return (
    <main className="sn-container sn-module-page">
      <header className="sn-module-page__head">
        <p className="sn-module-page__category">{mod.title}</p>
        <h1 className="sn-module-page__title">{sec.title}</h1>
        <p className="sn-module-page__lead">{sec.description}</p>
      </header>

      <section className="sn-module-page">
        <h2 className="sn-module-page__subtitle">Темы блока</h2>

        <div className="sn-topic-grid">
          {sec.topics.map((t) => (
            <TopicCard key={t.id} moduleId={mod.id} sectionId={sec.id} topic={t} />
          ))}
        </div>
      </section>
    </main>
  );
}

