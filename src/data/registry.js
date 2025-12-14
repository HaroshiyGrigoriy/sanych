import { MODULES_BY_ID } from "../modules/modules";

const metaFiles = import.meta.meta.glob("./modules/*/meta.js", {eager: true});

export const MODULES = Object.values(metaFiles).map((m) => m.default);
export const MODULES_BY_ID = Object.fromEntries(MODULES.map((m) => [m.id, m]));

export function getModule (id) {
  return MODULES_BY_ID[id] ?? null;
}

export function modulePAth(moduleId) {
  return `/module/${moduleId}`;
}

export function moduleSectionPath (moduleId, sectionId) {
  return `/modules/${moduleId}/${sectionId}`;
}