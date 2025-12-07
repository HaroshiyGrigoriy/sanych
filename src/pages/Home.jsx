import { Link } from "react-router-dom";

export default function HeroSanych() {
  return (
    <section className="sn-hero" role="region" aria-labelledby="sn-hero-title">
      <div className="sn-hero__grid sn-container">
        {/* Левая колонка: смысл и CTA */}
        <div className="sn-hero__main">
          <div className="sn-hero__eyebrow">стартовая площадка</div>

          <h1 id="sn-hero-title" className="sn-hero__title">
            Запускаем кофейню без хаоса
          </h1>

          <p className="sn-hero__lead">
            Здесь собраны модули, которые превращают бардак, связанный с открытием кофейни,
            в ясный план. Сейчас главный фокус на <strong>модуль «Меню»</strong>: структура напитков,
            рецептуры, объёмы, себестоимость и итоговые цены.
          </p>

          <ul className="sn-hero__points" aria-label="Что даёт модуль «Меню»">
            <li><span>Логика групп:</span> классика, авторские, чай/матча, холодные, молочные.</li>
            <li><span>Техкарты и объёмы:</span> единые граммовки, понятные порции, стабильный вкус.</li>
            <li><span>Экономика:</span> калькуляция ингредиентов, себестоимость, наценка и прайс.</li>
          </ul>

          <div className="sn-hero__cta">
            <Link to="/menu" className="sn-btn sn-btn--primary">Открыть модуль «Меню»</Link>
            <Link to="/docs" className="sn-btn sn-btn--ghost">Документы</Link>
          </div>
        </div>

        {/* Правая колонка: смысловой профайл */}
        <aside className="sn-hero__aside" aria-label="Краткий профайл модуля «Меню»">
          <article className="sn-hero-card">
            <div className="sn-hero-card__badge">главный модуль</div>
            <h2 className="sn-hero-card__title">Меню кофейни</h2>

            <p className="sn-hero-card__text">
              Не просто список названий — это конструкция напитка:
            </p>
            <ol className="sn-hero-card__list">
              <li><strong>Смысловой слой.</strong> Роль напитка в меню.</li>
              <li><strong>Главный компонент.</strong> Основа и варианты.</li>
              <li><strong>Вариации.</strong> Авторские, сезонные, холодные формы.</li>
            </ol>

            <p className="sn-hero-card__text">
              Техкарты, состав, калькуляция. Понимаем влияние объёмов на стоимость
              и как продавать больше за счёт грамотной линейки.
            </p>

            <Link to="/menu" className="sn-hero-card__link">Перейти в «Меню»</Link>
          </article>
        </aside>
      </div>
    </section>
  );
}
