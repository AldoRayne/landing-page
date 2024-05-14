/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/scripts/section/services.js ***!
  \*****************************************/
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var servicesList = document.querySelectorAll(".js-service");
    if (!servicesList.length) return;
    servicesList.forEach(function (service) {
      new Swiper(service, {
        slidesPerView: "auto",
        spaceBetween: 256,
        mousewheel: true,
        allowTouchMove: false
      });
    });
  }, 500);
});
/******/ })()
;