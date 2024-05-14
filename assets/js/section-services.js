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
      var serviceWrapper = service.querySelector(".js-service__wrapper");
      var swiper = new Swiper(serviceSlider, {
        slidesPerView: "auto",
        spaceBetween: 256,
        allowTouchMove: false
      });

      // ScrollTrigger.create({
      //     trigger: serviceSlider,
      //     start: "top top",
      //     end: () => "+=" + document.querySelectorAll(".swiper-slide").length * window.innerHeight,
      //     pin: true,
      //     scrub: true,
      //     onUpdate: (self) => {
      //         const progress = self.progress;
      //         const totalSlides = swiper.slides.length - 1;
      //         swiper.slideTo(Math.round(progress * totalSlides), 0, false);
      //     },
      // });

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceSlider,
          start: "top top",
          end: function end() {
            return "+=".concat(serviceWrapper.scrollHeight);
          },
          pin: true,
          scrub: true
        }
      });
      swiper.slides.forEach(function (slide, index) {
        tl.to(swiper.slides, {
          xPercent: -100 * (index + 1),
          duration: 1,
          ease: "none"
        });
      });
    });
  }, 500);
});
/******/ })()
;