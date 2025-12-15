import UiButton from "../ui/UiButton.jsx";
import { toModule } from "../../utils/routes.js";

export default function ModuleCard({ module, active, onToggle }) {
  const go = toModule(module.id);

  return (
    <article className={`sn-modcard ${active ? "is-active" : ""}`}>
      <button
        type="button"
        className="sn-modcard__toggle"
        aria-expanded={active}
        onClick={() => onToggle(module.id)}
      >
        <span className="sn-modcard__tag">{module.category}</span>
        <h3 className="sn-modcard__title">{module.title}</h3>
        <p className="sn-modcard__teaser">{module.teaser}</p>
        <span className="sn-modcard__hint">{active ? "Свернуть" : "Нажми, чтобы раскрыть"}</span>
      </button>

      <div className="sn-modcard__details" hidden={!active}>
        <p className="sn-modcard__desc">{module.description}</p>

        <ul className="sn-modcard__list">
          {module.points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>

        <UiButton to={go} variant="primary" size="sm">
          Перейти в модуль →
        </UiButton>
      </div>
    </article>
  );
}
