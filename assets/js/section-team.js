/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/scripts/section/team.js ***!
  \*************************************/
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var teamsList = document.querySelectorAll(".js-team");
    if (!teamsList.length) return;
    var gs = null;
    if (!document.querySelector(".js-hero__text")) {
      teamAnimation();
      return;
    }
    globalTl.to(".js-hero__word", {
      onComplete: function onComplete() {
        return teamAnimation();
      }
    });
    var defaultWidth = window.innerWidth;
    window.addEventListener("resize", function () {
      var currentWidth = window.innerWidth;
      if (defaultWidth === currentWidth) return;
      defaultWidth = currentWidth;
      teamAnimation(true);
    });

    /** teamAnimation() init */
    function teamAnimation() {
      var resize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      teamsList.forEach(function (team) {
        console.log(isGSAPInstance(gs));
        if (resize && isGSAPInstance(gs)) {
          gs.scrollTrigger.kill();
        }
        var scroll = team.querySelector(".js-team__scroll");
        var teamItems = team.querySelectorAll(".js-team__item");
        var scrollStyles = window.getComputedStyle(scroll);
        var scrollPaddingLeft = parseFloat(scrollStyles.paddingLeft);
        var totalWidth = Array.from(teamItems).reduce(function (accumulatedWidth, item) {
          return accumulatedWidth + getTotalWidthWithMargin(item);
        }, scrollPaddingLeft);
        gs = gsap.to(scroll, {
          x: function x() {
            return -(totalWidth - window.innerWidth);
          },
          ease: "none",
          scrollTrigger: {
            trigger: team,
            pin: true,
            scrub: 1,
            start: "top top",
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

    /** isGSAPInstance() init */
    function isGSAPInstance(value) {
      return value && typeof value.play === "function" && typeof value.pause === "function";
    }
  }, 500);
});
/******/ })()
;