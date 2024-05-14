/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/scripts/common.js ***!
  \*******************************/
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
    document.querySelector("body").classList.add("overflow-hidden");
    gsap.registerPlugin(ScrollTrigger, SplitText);
    customCursor();
    headerShowing();

    /** customCursor() init */
    function customCursor() {
      var cursor = document.querySelector(".js-cursor");
      if (!cursor) return;
      document.addEventListener("mousemove", function (event) {
        cursor.style.left = "".concat(event.clientX - 7, "px");
        cursor.style.top = "".concat(event.clientY - 7, "px");
      });
    }

    /** headerShowing() init */
    function headerShowing() {
      var header = document.querySelector(".js-header");
      if (!header) return;
    }
  }, 500);
});
/******/ })()
;