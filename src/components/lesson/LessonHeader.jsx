import { Link } from "react-router-dom";
import LessonMetaBadges from "./LessonMetaBadges.jsx";

export default function LessonHeader({
  moduleTitle, sectionTitle, title, teaser, minutes, level, kind, toTopics
}) {
  return (
    <header className="sn-lesson__head">
      <h1 className="sn-lesson__title">{title} </h1>
      {teaser ? <p className="sn-lesson__lead">{teaser}</p> : null}
      <LessonMetaBadges minutes={minutes} level={level} kind={kind} />

  
    </header>
  );
}
