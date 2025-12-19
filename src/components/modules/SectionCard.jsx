// src/components/modules/SectionCard.jsx
import UiButton from "../ui/UiButton.jsx";
import { toSection } from "../../utils/routes.js";

export default function SectionCard({ moduleId, section }) {
  const go = toSection(moduleId, section.id);

  const style = section.cover
    ? { "--sn-card-bg-image": `url(${section.cover})` }
    : undefined;

  const topicsCount = Array.isArray(section.topics) ? section.topics.length : 0;

  return (
    <article className="sn-modcard sn-modcard--static" style={style}>
      <div className="sn-modcard__toggle">
        <span className="sn-modcard__tag">Раздел · {topicsCount} тем</span>
        <h3 className="sn-modcard__title">{section.title}</h3>
        <p className="sn-modcard__teaser">{section.teaser}</p>
        <span className="sn-modcard__hint">Внутри — темы и материалы</span>
      </div>

      <div className="sn-modcard__details">
        <UiButton to={go} variant="primary" size="sm">
          Перейти в раздел →
        </UiButton>
      </div>
    </article>
  );
}
