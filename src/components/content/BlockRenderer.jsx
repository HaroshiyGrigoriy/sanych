import { Link } from "react-router-dom";

export default function BlockRenderer({ block }) {
  switch (block.type) {
    case "lead":
      return <p className="sn-block sn-block--lead">{block.text}</p>;

    case "list":
      return (
        <section className="sn-block sn-block--list">
          <div className="sn-block__head">
            <span className="sn-block__icon" aria-hidden>≡</span>
            {block.title ? <h2 className="sn-block__title">{block.title}</h2> : null}
          </div>
          <ul className="sn-block__ul">
            {(block.items ?? []).map((it, idx) => <li key={idx}>{it}</li>)}
          </ul>
        </section>
      );

    case "callout": {
      const tone = block.tone ?? "info";
      const icon = tone === "warning" ? "!" : "i";

      return (
        <aside className={`sn-block sn-block--callout sn-tone-${tone}`}>
          <div className="sn-block__head">
            <span className="sn-block__icon" aria-hidden>{icon}</span>
            {block.title ? <div className="sn-callout__title">{block.title}</div> : null}
          </div>
          <p className="sn-callout__text">{block.text}</p>
        </aside>
      );
    }

    case "image":
      return (
        <figure className="sn-block sn-block--image">
          <img className="sn-img" src={block.src} alt={block.alt ?? ""} loading="lazy" />
          {block.caption ? <figcaption className="sn-img__cap">{block.caption}</figcaption> : null}
        </figure>
      );

    case "cta":
      if (block.action?.kind === "link") {
        return (
          <div className="sn-block sn-block--cta">
            <Link className={`sn-btn sn-btn--${block.variant ?? "primary"} sn-btn--wide`} to={block.action.to}>
              {block.label}
            </Link>
          </div>
        );
      }
      return null;

    default:
      return null;
  }
}
