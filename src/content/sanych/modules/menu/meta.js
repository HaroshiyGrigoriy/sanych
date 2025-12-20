// src/content/sanych/modules/menu/meta.js
import aVitrina from "./sections/a-vitrina/a_vitrina.js";
import bProduct from "./sections/product.js";
import cStandards from "./sections/standards.js";
import dConstructor from "./sections/constructor.js";
import eMoney from "./sections/money.js";
import fAssortment from "./sections/assortment.js";

export default {
  id: "menu",
  title: "Меню кофейни: продукт, витрина, деньги",
  category: "Продукт",
  teaser: "6 блоков, чтобы меню было понятным гостю и управляемым для тебя.",
  description:
    "Модуль про то, как превратить меню из списка позиций в систему: витрина, продукт, стандарты, конструктор, деньги и управление ассортиментом.",
  points: [
    "Как меню продаёт и направляет взгляд",
    "Как собрать ассортимент без хаоса",
    "Стандарты, техкарты, скорость и стабильность",
    "Как расширять меню без путаницы",
    "Как считать себестоимость и ставить цену",
    "Как обновлять ассортимент без развала структуры",
  ],
  sections: [aVitrina, bProduct, cStandards, dConstructor, eMoney, fAssortment],
};
