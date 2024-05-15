/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/scripts/section/team.js ***!
  \*************************************/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
        if (resize && isGSAPInstance(gs)) gs.scrollTrigger.kill();
        var teamTitle = team.querySelector(".js-team__title");
        var scroll = team.querySelector(".js-team__scroll");
        var teamItems = team.querySelectorAll(".js-team__item");
        var imageWrappers = team.querySelectorAll(".js-team__image-wrapper");
        var teamDescription = team.querySelector(".js-team__description");
        var titleStyles = window.getComputedStyle(teamTitle);
        var titleMarginBottom = parseFloat(titleStyles.marginBottom);
        var wrapperStyles = window.getComputedStyle(imageWrappers[0]);
        var wrapperMarginBottom = parseFloat(wrapperStyles.marginBottom);
        var imageWrapperHeight = "".concat(window.innerHeight - teamTitle.offsetHeight - titleMarginBottom - teamDescription.offsetHeight - wrapperMarginBottom, "px");
        imageWrappers.forEach(function (wrapper) {
          wrapper.style.height = imageWrapperHeight;
        });
        var scrollStyles = window.getComputedStyle(scroll);
        var startValue = parseFloat(scrollStyles.paddingLeft);
        var itemsArray = _toConsumableArray(Array.from(teamItems));
        itemsArray.pop();
        var totalWidth = itemsArray.reduce(function (accumulatedWidth, item) {
          return accumulatedWidth + getTotalWidthWithMargin(item);
        }, startValue);
        gs = gsap.to(scroll, {
          x: function x() {
            return -totalWidth;
          },
          ease: "none",
          scrollTrigger: {
            trigger: team,
            pin: true,
            scrub: true,
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