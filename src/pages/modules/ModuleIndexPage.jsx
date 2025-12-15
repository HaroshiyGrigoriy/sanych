import { useParams } from "react-router-dom";
import { getModule } from "../../content/sanych/registry.js";
import UiButton from "../../components/ui/UiButton.jsx";
import { toSection } from "../../utils/routes.js";

export default function ModuleIndexPage() {
  const { moduleId } = useParams();
  const mod = getModule(moduleId);

  if (!mod) return <p>Модуль не найден.</p>;

  return (
    <main className="sn-container sn-module-page">
      <header className="sn-module-page__head">
        <p className="sn-module-page__category">{mod.category}</p>
        <h1 className="sn-module-page__title">{mod.title}</h1>
        <p className="sn-module-page__lead">{mod.description}</p>
      </header>

      <section className="sn-module-page__section">
        <h2 className="sn-module-page__subtitle">Разделы модуля</h2>

        <div className="sn-module-page__sections">
          {mod.sections.map((s) => (
            <article key={s.id} className="sn-section-card">
              <h3 className="sn-section-card__title">{s.title}</h3>
              <p className="sn-section-card__teaser">{s.teaser}</p>
              <UiButton to={toSection(mod.id, s.id)} variant="primary" size="sm">
                Открыть раздел →
              </UiButton>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
