import menu from "./modules/menu/meta.js";
import legal from "./modules/legal/meta.js";
import team from "./modules/team/meta.js";
import money from "./modules/money/meta.js";

export const MODULES = [legal, menu, team, money];

export const MODULES_BY_ID = Object.fromEntries(MODULES.map((m) => [m.id, m]));

export function getModule(moduleId) {
  return MODULES_BY_ID[moduleId] ?? null;
}

export function getSection(moduleId, sectionId) {
  const mod = getModule(moduleId);
  if (!mod) return null;
  return mod.sections.find((s) => s.id === sectionId) ?? null;
}
