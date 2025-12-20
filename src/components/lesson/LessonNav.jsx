import { Link } from "react-router-dom";

export default function LessonNav({ toTopics, prevTo, nextTo }) {
  return (
    <nav className="sn-lesson-nav" aria-label="Навигация урока">
      <div className="sn-lesson-nav__inner">
        {prevTo ? <Link className="sn-btn sn-btn--ghost" to={prevTo}>← Назад</Link>
               : <span className="sn-btn sn-btn--ghost sn-btn--disabled">← Назад</span>}

        <Link className="sn-btn sn-btn--primary" to={toTopics}>К темам блока</Link>

        {nextTo ? <Link className="sn-btn sn-btn--accent" to={nextTo}>Дальше →</Link>
               : <span className="sn-btn sn-btn--accent sn-btn--disabled">Дальше →</span>}
      </div>
    </nav>
  );
}
