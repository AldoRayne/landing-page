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
      teamsList.forEach(function (team) {
        var scroll = team.querySelector(".js-team__scroll");
        var teamItems = team.querySelectorAll(".js-team__item");
        var totalWidth = 0;
        teamItems.forEach(function (item) {
          totalWidth += getTotalWidthWithMargin(item);
        });
        gsap.to(scroll, {
          x: function x() {
            return -(totalWidth - window.innerWidth);
          },
          ease: "none",
          scrollTrigger: {
            trigger: team,
            pin: true,
            scrub: 1,
            start: "bottom bottom",
            end: function end() {
              return "+=".concat(totalWidth);
            }
          }
        });
      });
    }

    /** getTotalWidthWithMargin() init */
    function getTotalWidthWithMargin(element) {
      var itemWidth = element.getBoundingClientRect().width;
      var itemStyles = window.getComputedStyle(element);
      var marginRight = parseFloat(itemStyles.marginRight);
      return itemWidth + marginRight;
    }
  }, 500);
});
/******/ })()
;