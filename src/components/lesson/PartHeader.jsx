export default function PartHeader({ index, total, title, teaser }) {
  return (
    <section className="sn-part-head" aria-label="Текущая часть урока">
      <div className="sn-part-head__top">
        <span className="sn-lesson__label sn-lesson__label--part">
          Часть {index}{total ? ` из ${total}` : ""}
        </span>
      </div>

      <h2 className="sn-part-head__title">{title}</h2>
      {teaser ? <p className="sn-part-head__teaser">{teaser}</p> : null}
    </section>
  );
}
