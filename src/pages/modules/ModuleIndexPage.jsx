// src/pages/modules/ModuleIndexPage.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getModule } from "../../content/sanych/registry.js";
import SectionCard from "../../components/modules/SectionCard.jsx";

export default function ModuleIndexPage() {
  const { moduleId } = useParams();
  const mod = getModule(moduleId);

  const [activeSectionId, setActiveSectionId] = useState(null);
  function toggle(id) {
    setActiveSectionId((prev) => (prev === id ? null : id));
  }

  if (!mod) return <main className="sn-container"><p>Модуль не найден.</p></main>;

  return (
    <main className="sn-container sn-modules">
      <header className="sn-module-page__head">
        <p className="sn-module-page__category">{mod.category}</p>
        <h1 className="sn-module-page__title">{mod.title}</h1>
        <p className="sn-module-page__lead">{mod.description}</p>
      </header>

      <section className="sn-module">
        <h2 className="sn-module-page__subtitle">Разделы модуля</h2>

        <div className="sn-section-grid">
          {mod.sections.map((sec) => (
            <SectionCard
              key={sec.id}
              moduleId={mod.id}
              section={sec}
              active={activeSectionId === sec.id}
              onToggle={toggle}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
