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
    headerShowing();

    /** Header */
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