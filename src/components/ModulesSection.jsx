// src/components/SanychModulesSection.jsx
import { Link } from "react-router-dom";

export const MODULES = [
  {
    id: "legal",
    title: "Фундамент: требования и документы",
    category: "Фундамент",
    description:
      "Что от кофейни требуется по закону: СанПиН, МЧС, товарный уголок, проверки и базовые документы.",
    points: [
      "Чек-лист по требованиям к помещению и оборудованию",
      "СанПиН, МЧС, уголок потребителя — по полочкам",
      "Что будет, если не выполнить, и как минимизировать риск",
      "Куда обращаться: порталы, телефоны, типовые формы"
    ],
    path: "/modules/legal"
  },
  {
    id: "menu",
    title: "Меню: логика и структура",
    category: "Продукт",
    description:
      "Как превратить меню из списка слов в систему, которая продаёт и не ломает кухню.",
    points: [
      "Разделы: классика, авторские, холодные, чай/матча, безкофеин",
      "Связь меню с концепцией кофейни и гостями",
      "Названия и описания без стыда и путаницы",
      "Форматы: печать, QR, сезонные вклейки"
    ],
    path: "/modules/menu"
  },
  {
    id: "drinks",
    title: "Напитки и техкарты",
    category: "Продукт",
    description:
      "Пирамидальная логика напитков, техкарты, объёмы, себестоимость и варианты объёмов.",
    points: [
      "От эспрессо к латте, капучино, рафу и холодным формам",
      "Техкарты: состав, граммовки, посуда, допы",
      "Себестоимость и маржа: базовая логика расчётов",
      "Авторские напитки и их тестирование"
    ],
    path: "/modules/drinks"
  },
  {
    id: "team",
    title: "Команда и сервис",
    category: "Люди",
    description:
      "Как сделать так, чтобы люди не сгорали и гость чувствовал себя нормально, а не лишним.",
    points: [
      "Роли и зоны ответственности на смене",
      "Чек-листы: открытие, день, закрытие",
      "Стандарты общения с гостями",
      "Базовая адаптация и мотивация персонала"
    ],
    path: "/modules/team"
  },
  {
    id: "money",
    title: "Касса, налоги и учёт",
    category: "Деньги",
    description:
      "Онлайн-касса, режим налогообложения, учёт денег и минимальный порядок в финансах.",
    points: [
      "Онлайн-касса, эквайринг, QR и чаевые",
      "Режимы налогообложения на уровне смысла",
      "Разделение личных и бизнес-денег",
      "Когда пора звать бухгалтера"
    ],
    path: "/modules/money"
  }
];

export default function SanychModulesSection() {
  return (
    <section
      id="sn-modules"
      className="sn-modules sn-container"
      aria-labelledby="sn-modules-title"
    >
      <header className="sn-modules__head">
        <h2 id="sn-modules-title" className="sn-modules__title">
          Модули системы «Саныч»
        </h2>
        <p className="sn-modules__subtitle">
          Ниже — ключевые блоки, из которых собирается кофейня: от документов и
          меню до команды и денег. Можно идти по порядку или точечно брать то,
          что болит.
        </p>
      </header>

      <div className="sn-modules__grid">
        {MODULES.map((mod) => (
          <article key={mod.id} className="sn-modules__card">
            <div className="sn-modules__card-tag">{mod.category}</div>
            <h3 className="sn-modules__card-title">{mod.title}</h3>
            <p className="sn-modules__card-desc">{mod.description}</p>

            <ul className="sn-modules__card-list">
              {mod.points.map((p, i) => (
                <li key={i} className="sn-modules__card-item">
                  {p}
                </li>
              ))}
            </ul>

            <Link to={mod.path} className="sn-modules__card-link">
              Перейти в модуль →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
