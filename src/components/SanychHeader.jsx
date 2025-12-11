// src/components/SanychHeader.jsx
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SanychHeader() {

  

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Закрывать меню при смене маршрута
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
  <header className="sn-header " role="banner">
      <div className="sn-header__inner sn-container ">
        <NavLink to="/" end className="sn-header__brand" aria-label="На главную">
          <img
            src="/images/coffee-machine.svg"            // <-- файл лежит в public/images/logo.svg
            alt="ForYou — логотип"
            className="sn-header__logo-img"
          />
          <span className="sn-header__title">ForYou</span>
        </NavLink>

        <div className="sn-header__tagline">Путеводитель по кофейне</div>
      </div>
    </header>
  );
}
