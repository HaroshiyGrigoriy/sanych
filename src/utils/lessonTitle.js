export function splitLessonPrefix(title = "") {
  // "Урок 5: Текст" -> { label: "Урок 5", text: "Текст" }
  const m = title.match(/^(Урок\s*\d+)\s*:\s*(.+)$/i);
  if (!m) return { label: null, text: title };
  return { label: m[1], text: m[2] };
}

export function splitPartPrefix(title = "") {
  // "4) Текст" -> { label: "4", text: "Текст" }
  const m = title.match(/^(\d+)\)\s*(.+)$/);
  if (!m) return { label: null, text: title };
  return { label: m[1], text: m[2] };
}
