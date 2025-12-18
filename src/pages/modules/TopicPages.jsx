// src/pages/modules/TopicPage.jsx
import { useParams } from "react-router-dom";
import { getModule, getSection, getTopic } from "../../content/sanych/registry.js";
import BlockRenderer from "../../components/content/BlockRenderer.jsx";

export default function TopicPage() {
  const { moduleId, sectionId, topicId } = useParams();

  const mod = getModule(moduleId);
  const sec = getSection(moduleId, sectionId);
  const top = getTopic(moduleId, sectionId, topicId);

  if (!mod || !sec || !top) return <main className="sn-container"><p>Тема не найдена.</p></main>;

  return (
    <main className="sn-container sn-module-page">
      <header className="sn-module-page__head">
        <p className="sn-module-page__category">{sec.title}</p>
        <h1 className="sn-module-page__title">{top.title}</h1>
        <p className="sn-module-page__lead">{top.teaser}</p>
      </header>

      <section className="sn-module-page__section">
        <BlockRenderer blocks={top.blocks} />
      </section>
    </main>
  );
}
