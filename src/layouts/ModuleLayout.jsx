import { Outlet, useParams } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs.jsx";
import { getModule, getSection } from "../content/sanych/registry.js";
import { toModule } from "../utils/routes.js";

export default function ModuleLayout() {
  const { moduleId, sectionId } = useParams();
  const mod = getModule(moduleId);
  const sec = sectionId ? getSection(moduleId, sectionId) : null;

  const crumbs = [
    { label: "Главная", to: "/" },
    { label: "Модули", to: "/" },
  ];

  if (mod) crumbs.push({ label: mod.title, to: toModule(mod.id) });
  if (sec) crumbs.push({ label: sec.title });

  return (
    <div className="sn-module-shell">
      <Breadcrumbs items={crumbs} />
      <Outlet />
    </div>
  );
}
