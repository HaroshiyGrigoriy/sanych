import { Link } from "react-router-dom";
import UiButton from "../ui/UiButton.jsx";
import { toTopic } from "../../utils/routes.js";

export default function TopicCard({ moduleId, sectionId, topic }) {
  const style = topic.cover ? { "--sn-card-bg-image": `url(${topic.cover})` } : undefined;
  const go = toTopic(moduleId, sectionId, topic.id);

  return (
    <article className="sn-modcard sn-modcard--topic" style={style}>
      {/* Вся “шапка” карточки кликабельна */}
      <Link to={go} className="sn-modcard__toggle sn-modcard__link">
        <span className="sn-modcard__tag">Тема</span>
        <h3 className="sn-modcard__title">{topic.title}</h3>
        <p className="sn-modcard__teaser">{topic.teaser}</p>
        <span className="sn-modcard__hint">Открыть и читать</span>
      </Link>

      <div className="sn-modcard__details sn-modcard__details--static">
        <UiButton to={go} variant="primary" size="sm">
          Открыть тему →
        </UiButton>
      </div>
    </article>
  );
}
