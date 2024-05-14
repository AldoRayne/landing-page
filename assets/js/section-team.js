/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/scripts/section/team.js ***!
  \*************************************/
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var teamsList = document.querySelectorAll(".js-team");
    if (!teamsList.length) return;
    if (!document.querySelector(".js-hero__text")) {
      teamAnimation();
      return;
    }
    globalTl.to(".js-hero__word", {
      onComplete: function onComplete() {
        return teamAnimation();
      }
    });

    /** teamAnimation() init */
    function teamAnimation() {
      console.log("team");
      teamsList.forEach(function (team) {
        var scroll = team.querySelector(".js-team__scroll");
        gsap.to(scroll, {
          xPercent: -200,
          ease: "none",
          scrollTrigger: {
            trigger: team,
            pin: true,
            scrub: 1,
            start: "bottom bottom",
            end: function end() {
              return "+=" + scroll.offsetWidth;
            },
            markers: true
          }
        });
      });
    }
  }, 500);
});
/******/ })()
;