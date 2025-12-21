import { Outlet, useParams } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs.jsx";
import { getModule, getSection, getTopic } from "../content/sanych/registry.js";
import { toModule,toSection } from "../utils/routes.js";
export default function ModuleLayout() {
  const { moduleId, sectionId, topicId } = useParams();
  const mod = getModule(moduleId);
  const sec = sectionId ? getSection(moduleId, sectionId) : null;
  const top = sectionId && topicId ? getTopic(moduleId,sectionId,topicId) : null;

  const crumbs = [
    { label: "Главная", to: "/" },
    { label: "Модули", to: "/" },
  ];

  if (mod) crumbs.push({ label: mod.title, to: toModule(mod.id) });
  if (sec) crumbs.push({ label: sec.title, to: toSection(mod.id, sec.id) });
  if (top) crumbs.push( {label: top.title});

  return (
    <div className="sn-module-shell sn-container">
      <Breadcrumbs items={crumbs} />
      <Outlet />
    </div>
  );
}
