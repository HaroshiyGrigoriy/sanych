import { useState } from "react";
import { MODULES } from "../content/sanych/registry.js";
import ModuleCard from "./modules/ModuleCard.jsx";

export default function SanychModulesSection() {
  const [activeId, setActiveId] = useState(null);

  function toggle(id) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
    <section id="sn-modules" className="sn-modules sn-container" aria-labelledby="sn-modules-title">
      <header className="sn-modules__head">
        <h2 id="sn-modules-title" className="sn-modules__title">Модули системы «Саныч»</h2>
        <p className="sn-modules__subtitle">
          Карта модулей. Нажми на карточку — раскроется подробное описание и кнопка перехода.
        </p>
      </header>

      <div className="sn-modules__grid">
        {MODULES.map((m) => (
          <ModuleCard
            key={m.id}
            module={m}
            active={activeId === m.id}
            onToggle={toggle}
          />
        ))}
      </div>
    </section>
  );
}
