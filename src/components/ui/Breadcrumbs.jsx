import { NavLink } from "react-router-dom";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="sn-bc" aria-label="Хлебные крошки">
      <ol className="sn-bc__list">
        {items.map((it, idx) => (
          <li key={idx} className="sn-bc__item">
            {it.to ? <NavLink to={it.to}>{it.label}</NavLink> : <span>{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
