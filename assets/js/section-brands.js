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
    gsap.set(".js-brand__title", {
      opacity: 1
    });
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
  }
});
/******/ })()
;