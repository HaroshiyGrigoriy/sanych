import { Link } from "react-router-dom";
import LessonMetaBadges from "./LessonMetaBadges.jsx";

export default function LessonHeader({
  moduleTitle,
  sectionTitle,
  lessonLabel,
  partLabel,
  title,
  subtitle,
  teaser,
  minutes,
  level,
  kind,
  toTopics,
}) {
  return (
    <header className="sn-lesson__head">

      {(lessonLabel || partLabel) ? (
        <div className="sn-lesson__labels">
          {lessonLabel ? <span className="sn-lesson__label sn-lesson__label--lesson">{lessonLabel}</span> : null}
          {partLabel ? <span className="sn-lesson__label sn-lesson__label--part">Часть {partLabel}</span> : null}
        </div>
      ) : null}

      <h1 className="sn-lesson__title">{title}</h1>

      {subtitle ? <p className="sn-lesson__subtitle">{subtitle}</p> : null}
      {teaser ? <p className="sn-lesson__lead">{teaser}</p> : null}

      <LessonMetaBadges minutes={minutes} level={level} kind={kind} />

     
    </header>
  );
}
