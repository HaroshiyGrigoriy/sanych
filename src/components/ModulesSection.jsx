// src/components/SanychModulesSection.jsx
import { Link } from "react-router-dom";
import { MODULES } from "../data/modules.js";

export default function SanychModulesSection() {
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
          Ниже — ключевые блоки, из которых собирается кофейня: от документов и
          меню до команды и денег. Можно идти по порядку или точечно брать то,
          что болит.
        </p>
      </header>

      <div className="sn-modules__grid">
        {MODULES.map((mod) => (
          <article key={mod.id} className="sn-modules__card">
            <div className="sn-modules__card-tag">{mod.category}</div>
            <h3 className="sn-modules__card-title">{mod.title}</h3>
            <p className="sn-modules__card-desc">{mod.description}</p>

            <ul className="sn-modules__card-list">
              {mod.points.map((p, i) => (
                <li key={i} className="sn-modules__card-item">
                  {p}
                </li>
              ))}
            </ul>

            <Link to={mod.path} className="sn-modules__card-link">
              Перейти в модуль →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
