// src/components/SanychModulesSection.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { MODULES, modulePath } from "../modules/modules.js";

export default function SanychModulesSection() {
  const [activeId, setActiveId] = useState(null);

  function toggle(id) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
    <section
      id="sn-modules"
      className="sn-modules sn-container"
      aria-labelledby="sn-modules-title"
    >
      <header className="sn-modules__head">
        <h2 id="sn-modules-title" className="sn-modules__title">
          Модули системы «Саныч»
        </h2>
        <p className="sn-modules__subtitle">
          По умолчанию — коротко. Нажимаешь на карточку — раскрывается смысл и появляется вход.
        </p>
      </header>

      <div className="sn-modules__grid">
        {MODULES.map((mod) => {
          const isActive = activeId === mod.id;
          const to = modulePath(mod);

          return (
            <article
              key={mod.id}
              className={`sn-modules__card ${isActive ? "sn-modules__card--active" : ""}`}
            >
              {/* Кнопка-тогглер (внутри карточки), Link отдельно */}
              <button
                type="button"
                className="sn-modules__card-toggle"
                onClick={() => toggle(mod.id)}
                aria-expanded={isActive}
              >
                <div className="sn-modules__card-tag">{mod.category}</div>
                <h3 className="sn-modules__card-title">{mod.title}</h3>

                <p className="sn-modules__card-desc">
                  {isActive ? mod.description : mod.teaser}
                </p>

                {isActive && (
                  <ul className="sn-modules__card-list">
                    {mod.points.map((p, i) => (
                      <li key={i} className="sn-modules__card-item">
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </button>

              {isActive && (
                <Link to={to} className="sn-modules__card-link sn-modules__card-cta">
                  Перейти в модуль →
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
