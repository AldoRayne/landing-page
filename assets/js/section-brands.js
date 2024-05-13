/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./src/scripts/section/brands.js ***!
  \***************************************/
window.addEventListener("DOMContentLoaded", function () {
  var brands = document.querySelectorAll(".js-brand");
  if (!brands.length) return;
  brands.forEach(function (brand) {
    var image = brand.querySelector(".js-brand__image");
    gsap.to(image, {
      scrollTrigger: {
        trigger: brand,
        start: "50% bottom",
        end: "bottom bottom",
        scrub: true
      },
      onComplete: function onComplete() {
        gsap.to(image, {
          y: 0,
          opacity: 1,
          stagger: 0.2
        });
      }
    });
  });
});
/******/ })()
;