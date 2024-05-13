/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/scripts/common.js ***!
  \*******************************/
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
    document.querySelector("body").classList.add("overflow-hidden");
    gsap.registerPlugin(ScrollTrigger);
    customCursor();
    headerShowing();

    /** customCursor() init */
    function customCursor() {
      var cursor = document.querySelector(".js-cursor");
      document.addEventListener("mousemove", function (event) {
        var x = event.clientX;
        var y = event.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
      });
    }

    /** headerShowing() init */
    function headerShowing() {
      var header = document.querySelector(".js-header");
      if (!header) return;
      gsap.set(".js-header", {
        opacity: 1
      });
    }
  }, 500);
});
/******/ })()
;