// src/components/modules/SectionCard.jsx
import UiButton from "../ui/UiButton.jsx";
import { toSection, toTopic } from "../../utils/routes.js";

export default function SectionCard({ moduleId, section }) {
  return (
    <article className="sn-card sn-container">
      <div className="sn-card__head">
        <h3 className="sn-card__title">{section.title}</h3>
        <p className="sn-card__teaser">{section.teaser}</p>
      </div>

      {/* Список тем внутри блока */}
      {section.topics?.length ? (
        <ul className="sn-card__list">
          {section.topics.map((t) => (
            <li key={t.id} className="sn-card__item">
              <UiButton to={toTopic(moduleId, section.id, t.id)} variant="ghost" size="sm">
                {t.title}
              </UiButton>
            </li>
          ))}
        </ul>
      ) : (
        <p className="sn-card__empty">Темы скоро появятся.</p>
      )}

      <div className="sn-card__footer">
        <UiButton to={toSection(moduleId, section.id)} variant="primary" size="sm">
          Открыть блок →
        </UiButton>
      </div>
    </article>
  );
}
