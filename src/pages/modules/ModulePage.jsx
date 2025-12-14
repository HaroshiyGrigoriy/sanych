import { useParams } from "react-router-dom";
import { getModule, moduleSectionPath } from "../../data/registry.js";
import UiButton from "../../components/ui/UiButton.jsx";

export default function ModulePage() {
  const { moduleId } = useParams();
  const mod = getModule(moduleId);

  if (!mod) return null;

  return (
    <div className="sn-module-overview">
      <p style={{ marginTop: 0, opacity: 0.9 }}>{mod.description}</p>

      {mod.sections?.length ? (
        <div className="sn-module-overview__grid" role="list">
          {mod.sections.map((s) => (
            <article key={s.id} className="sn-module-overview__card" role="listitem">
              <h3 style={{ margin: "0 0 0.25rem" }}>{s.title}</h3>
              <p style={{ margin: 0, opacity: 0.85 }}>{s.teaser}</p>

              <div style={{ marginTop: "0.75rem" }}>
                <UiButton to={moduleSectionPath(mod.id, s.id)} variant="primary">
                  Открыть секцию
                </UiButton>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="sn-module-overview__empty">
          <p style={{ margin: 0 }}>
            Этот модуль пока в заготовке. Скоро тут появятся секции.
          </p>
        </div>
      )}
    </div>
  );
}
