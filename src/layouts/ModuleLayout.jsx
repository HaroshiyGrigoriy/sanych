import { Outlet, useParams } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs.jsx";
import { getModule, modulePath } from "../data/sanych/registry.js";

export default function ModuleLayout() {
  const { moduleId, sectionId } = useParams();
  const mod = getModule(moduleId);

  if (!mod) {
    return (
      <div className="sn-container" style={{ paddingBlock: "2rem" }}>
        <h1>Модуль не найден</h1>
        <p>Возможно ссылка устарела или модуль переименовали.</p>
      </div>
    );
  }

  const section =
    sectionId ? mod.sections?.find((s) => s.id === sectionId) : null;

  const crumbs = [
    { label: "Главная", to: "/" },
    { label: mod.title, to: modulePath(mod.id) },
  ];

  if (sectionId) crumbs.push({ label: section?.title ?? sectionId });

  return (
    <div className="sn-container" style={{ paddingBlock: "1.25rem" }}>
      <Breadcrumbs items={crumbs} />

      <header style={{ marginTop: "0.75rem", marginBottom: "1rem" }}>
        <div style={{ opacity: 0.8, fontSize: "0.85rem" }}>{mod.category}</div>
        <h1 style={{ margin: 0 }}>{section ? section.title : mod.title}</h1>
      </header>

      <Outlet />
    </div>
  );
}
