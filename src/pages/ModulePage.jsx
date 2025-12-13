// src/pages/ModulePage.jsx
import { useParams, Link } from "react-router-dom";
import { getModule } from "../data/modules.js";

export default function ModulePage() {
  const { moduleId } = useParams();
  const moduleData = getModule(moduleId);

  if (!moduleData) {
    return (
      <main className="sn-container">
        <p>Такого модуля нет или ссылка устарела.</p>
        <Link to="/">← На главную</Link>
      </main>
    );
  }

  const { title, category, description, points } = moduleData;

  return (
    <main className="sn-container sn-module-page">
      <header className="sn-module-page__head">
        <p className="sn-module-page__category">{category}</p>
        <h1 className="sn-module-page__title">{title}</h1>
        <p className="sn-module-page__lead">{description}</p>
      </header>

      <section className="sn-module-page__section">
        <h2 className="sn-module-page__subtitle">Что входит в модуль</h2>
        <ul className="sn-module-page__list">
          {points.map((p, i) => (
            <li key={i} className="sn-module-page__item">
              {p}
            </li>
          ))}
        </ul>
      </section>

      <footer className="sn-module-page__footer">
        <Link to="/" className="sn-module-page__back">
          ← Вернуться к карте модулей
        </Link>
      </footer>
    </main>
  );
}
