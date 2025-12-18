// src/components/modules/TopicCard.jsx
import UiButton from "../ui/UiButton.jsx";
import { toTopic } from "../../utils/routes.js";

export default function TopicCard({ moduleId, sectionId, topic }) {
  return (
    <article className="sn-card">
      <h3 className="sn-card__title">{topic.title}</h3>
      <p className="sn-card__teaser">{topic.teaser}</p>

      <div className="sn-card__footer">
        <UiButton to={toTopic(moduleId, sectionId, topic.id)} variant="primary" size="sm">
          Открыть тему →
        </UiButton>
      </div>
    </article>
  );
}
