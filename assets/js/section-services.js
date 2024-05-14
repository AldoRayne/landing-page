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
      var serviceSlider = service.querySelector(".js-service__swiper");
      var swiper = new Swiper(serviceSlider, {
        slidesPerView: "auto",
        spaceBetween: 256,
        allowTouchMove: false
      });
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: service,
          start: "top top",
          end: function end() {
            return "+=" + serviceSlider.querySelectorAll(".js-service__item").length * window.innerHeight;
          },
          pin: true,
          scrub: true
        }
      });
      swiper.slides.forEach(function (slide, index) {
        tl.to(swiper.slides, {
          xPercent: -100 * (index + 1),
          duration: 1,
          ease: "none",
          onUpdate: function onUpdate() {
            swiper.slides.forEach(function (s, i) {
              if (i === Math.round(tl.progress() * (swiper.slides.length - 1))) {
                s.classList.add("swiper-slide-active");
              } else {
                s.classList.remove("swiper-slide-active");
              }
            });
          }
        });
      });
    });
  }, 500);
});
/******/ })()
;