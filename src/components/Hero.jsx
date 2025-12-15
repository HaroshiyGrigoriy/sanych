// src/components/HeroSanych.jsx
import UiButton from "./ui/UiButton.jsx";
import { toModule } from "../utils/routes.js";

export default function HeroSanych() {
  const menuPath = toModule("menu");

  return (
    <section
      className="sn-hero"
      role="region"
      aria-labelledby="sn-hero-title"
    >
      <div className="sn-hero__grid sn-container">
        {/* Левая колонка: смысл и CTA */}
        <div className="sn-hero__main">
          <div className="sn-hero__eyebrow">модульная система для кофейни</div>

          <h1 id="sn-hero-title" className="sn-hero__title">
            Собираем кофейню по модулям, а не по хаосу
          </h1>

          <p className="sn-hero__lead">
            Здесь «Саныч» собирает опыт по открытию и управлению кофейней
            в набор модулей: от требований государства и документов до меню,
            команды, закупок и денег. Сейчас главный фокус —{" "}
            <strong>модуль «Меню»</strong>, но ниже на странице ты увидишь
            всю карту модулей.
          </p>

          <ul className="sn-hero__points" aria-label="Что даёт модульный подход">
            <li>
              <span>Понимание структуры:</span> какие блоки вообще нужны кофейне
              (документы, меню, команда, деньги, оборудование).
            </li>
            <li>
              <span>Последовательность:</span> в каком порядке вводить модули,
              чтобы не утонуть в задачах.
            </li>
            <li>
              <span>Глубина:</span> в каждом модуле есть логика, чек-листы,
              примеры и заготовки под твой формат.
            </li>
          </ul>

          <div className="sn-hero__cta">
            {/* Переход на страницу с меню (то, что ты уже делал) */}
            <UiButton to={menuPath} variant="primary">Открыть модуль «Меню»</UiButton>
            <UiButton href="#sn-modules" variant="ghost">Посмотреть все модули ниже</UiButton>
          </div>
        </div>

        {/* Правая колонка: профайл модуля «Меню» */}
        <aside
          className="sn-hero__aside"
          aria-label="Краткий профайл модуля «Меню»"
        >
          <article className="sn-hero-card">
            <div className="sn-hero-card__badge">главный модуль сейчас</div>
            <h2 className="sn-hero-card__title">Модуль «Меню кофейни»</h2>

            <p className="sn-hero-card__text">
              Не просто перечень напитков, а ясная конструкция продукта:
            </p>
            <ol className="sn-hero-card__list">
              <li>
                <strong>Смысловой слой.</strong> Роль напитка в меню и в опыте
                гостя.
              </li>
              <li>
                <strong>Основа и вариации.</strong> Эспрессо, молоко, сиропы,
                холодные формы.
              </li>
              <li>
                <strong>Экономика.</strong> Техкарты, объёмы, себестоимость,
                наценка и финальный прайс.
              </li>
            </ol>

            <p className="sn-hero-card__text">
              Стабильный вкус, понятные объёмы и цены, которые не стреляются
              себе в ногу. Меню, которое можно масштабировать.
            </p>

          <UiButton to={menuPath} variant="subtle" size="sm">
              Перейти в модуль
            </UiButton>
          </article>
        </aside>
      </div>
    </section>
  );
}
