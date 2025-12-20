const LEVEL = { beginner: "Базовый", intermediate: "Средний", advanced: "Продвинутый" };
const KIND = { theory: "Теория", practice: "Практика", checklist: "Чек-лист" };

export default function LessonMetaBadges({ minutes, level, kind }) {
  return (
    <div className="sn-badges">
      {minutes ? <span className="sn-badge">⏱ {minutes} минут</span> : null}
      {level ? <span className="sn-badge">⚡ {LEVEL[level] ?? level}</span> : null}
      {kind ? <span className="sn-badge">📌 {KIND[kind] ?? kind}</span> : null}
    </div>
  );
}
