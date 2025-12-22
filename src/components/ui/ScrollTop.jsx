import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function uniq(arr) {
  return Array.from(new Set(arr.filter(Boolean)));
}

function getCandidates() {
  return uniq([
    document.scrollingElement,                 // <html> обычно
    document.documentElement,
    document.body,

    // твои потенциальные контейнеры (если вдруг они скроллятся)
    document.querySelector(".sn-main"),
    document.querySelector(".sn-module-shell"),
    document.querySelector(".sn-lesson"),
    document.querySelector("[data-scroll-container]"),
  ]);
}

function scrollAllToTop() {
  const els = getCandidates();
  els.forEach((el) => {
    try {
      el.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch {
      // на всякий — если это не элемент с scrollTo
      el.scrollTop = 0;
      el.scrollLeft = 0;
    }
  });

  // и отдельно пнём window (если скроллится он)
  try {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  } catch {}
}

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    scrollAllToTop();

    // двойной кадр — помогает, когда страница/картинки дорисовываются после перехода
    requestAnimationFrame(() => {
      scrollAllToTop();
    });
  }, [pathname, search, hash]);

  return null;
}
