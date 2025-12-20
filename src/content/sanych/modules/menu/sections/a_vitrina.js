// src/content/sanych/modules/menu/sections/a_vitrina.js
import menuIntro from "../topics/what_is_menu.js";
import menuFormats from "../topics/menu_formats.js";
import menuMap from "../topics/menu_map.js";
import menu_streen from "../topics/menu_streen.js";
import menu_entrance_group from "../topics/menu_entrance_group.js"

export default {
  id: "vitrina",
  order: 1,
  title: "Блок A. Меню как витрина продаж",
  teaser: "Как меню направляет внимание гостя и упрощает выбор.",
  description:
    "Форматы и точки размещения (улица/витрина/касса/стол/QR/онлайн), внешний вид, порядок блоков, размер меню, акценты (хиты/новинки/якоря), система размеров, цены, добавки и короткие описания.",
  topics: [menuIntro,menuFormats,menuMap,menu_streen, menu_entrance_group
], // можешь оставить только whatIsMenu, если che был тестовый
};
