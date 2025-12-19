// src/components/modules/TopicCard.jsx
import UiButton from "../ui/UiButton.jsx";
import { toTopic } from "../../utils/routes.js";

export default function TopicCard({ moduleId, sectionId, topic }) {
  const style = topic.cover ? { "--sn-card-bg-image": `url(${topic.cover})` } : undefined;

  return (
    <article className="sn-modcard sn-modcard--topic" style={style}>
      <div className="sn-modcard__toggle">
        <span className="sn-modcard__tag">Тема</span>
        <h3 className="sn-modcard__title">{topic.title}</h3>
        <p className="sn-modcard__teaser">{topic.teaser}</p>
        <span className="sn-modcard__hint">Открыть и читать</span>
      </div>

      <div className="sn-modcard__details sn-modcard__details--static">
        <UiButton to={toTopic(moduleId, sectionId, topic.id)} variant="primary" size="sm">
          Открыть тему →
        </UiButton>
      </div>
    </article>
  );
}
