import { useParams } from "react-router-dom";
import { getModule, getSection } from "../../content/sanych/registry.js";
import BlockRenderer from "../../components/content/BlockRenderer.jsx";

export default function ModuleSectionPage() {
  const { moduleId, sectionId } = useParams();
  const mod = getModule(moduleId);
  const sec = getSection(moduleId, sectionId);

  if (!mod || !sec) return <p>Раздел не найден.</p>;

  return (
    <main className="sn-container sn-module-page">
      <header className="sn-module-page__head">
        <p className="sn-module-page__category">{mod.title}</p>
        <h1 className="sn-module-page__title">{sec.title}</h1>
        <p className="sn-module-page__lead">{sec.teaser}</p>
      </header>

      <section className="sn-module-page__section">
        <BlockRenderer blocks={sec.blocks} />
      </section>
    </main>
  );
}
