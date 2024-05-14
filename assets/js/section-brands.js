/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./src/scripts/section/brands.js ***!
  \***************************************/
window.addEventListener("DOMContentLoaded", function () {
  var brands = document.querySelectorAll(".js-brand");
  if (!brands.length) return;
  if (!document.querySelector(".js-hero-text")) {
    brandsAnimation();
    return;
  }
  globalTl.to(".js-hero-text span", {
    onComplete: function onComplete() {
      return brandsAnimation();
    }
  });

  /** brandsAnimation() init */
  function brandsAnimation() {
    brands.forEach(function (brand) {
      var image = brand.querySelector(".js-brand__image");
      gsap.to(image, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: brand,
          start: "50% bottom",
          end: "bottom bottom",
          toggleActions: "play none none none"
        }
      });
    });
  }
});
/******/ })()
;