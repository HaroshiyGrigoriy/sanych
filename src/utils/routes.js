export function toModule(moduleId) {
  return `/${moduleId}`;
}

export function toSection(moduleId, sectionId) {
  return `/${moduleId}/${sectionId}`;
}
export function toTopic(moduleId, sectionId, topicId) {
  return `/${moduleId}/${sectionId}/${topicId}`;
}

export const toTopicPart = (moduleId, sectionId, topicId, partId) =>
  `/${moduleId}/${sectionId}/${topicId}/${partId}`;