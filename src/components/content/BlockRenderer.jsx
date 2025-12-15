export default function BlockRenderer({ blocks = [] }) {
  return (
    <div className="sn-blocks">
      {blocks.map((b, i) => {
        if (b.type === "lead") return <p key={i} className="sn-block sn-block--lead">{b.text}</p>;

        if (b.type === "list") {
          return (
            <section key={i} className="sn-block">
              {b.title && <h3 className="sn-block__title">{b.title}</h3>}
              <ul className="sn-block__list">
                {b.items.map((x, idx) => <li key={idx}>{x}</li>)}
              </ul>
            </section>
          );
        }

        if (b.type === "note") {
          return (
            <div key={i} className={`sn-block sn-note sn-note--${b.tone ?? "info"}`}>
              {b.text}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
