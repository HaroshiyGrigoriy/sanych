import { Link } from "react-router-dom";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="sn-bc" aria-label="Хлебные крошки">
      <ol className="sn-bc__list">
        {items.map((it, i) => (
          <li key={i} className="sn-bc__item">
            {it.to ? <Link to={it.to}>{it.label}</Link> : <span>{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
