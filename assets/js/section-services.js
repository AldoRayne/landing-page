/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/scripts/section/services.js ***!
  \*****************************************/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var servicesList = document.querySelectorAll(".js-services");
    if (!servicesList.length) return;
    var tl = new Array(servicesList.length);
    if (!document.querySelector(".js-hero__text")) {
      servicesAnimation();
      return;
    }
    globalTl.to(".js-hero__word", {
      onComplete: function onComplete() {
        return servicesAnimation();
      }
    });
    var resizeTimer = null;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        servicesAnimation(true);
      }, 500);
    });

    /** servicesAnimation() init */
    function servicesAnimation() {
      var resize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      servicesList.forEach(function (service, index) {
        var timeout = 0;
        var imagesWrapper = service.querySelector(".js-services__images-wrapper");
        if (resize) {
          timeout = 500;
          if (tl[index]) {
            if (tl[index].scrollTrigger) tl[index].scrollTrigger.kill(true);
            tl[index].kill(true);
            imagesWrapper.removeAttribute("style");
          }
        }
        setTimeout(function () {
          var servicesContent = service.querySelector(".js-services__content");
          var scroll = service.querySelector(".js-services__scroll");
          var servicesItems = service.querySelectorAll(".js-services__item");
          var servicesImages = service.querySelectorAll(".js-services__image");
          var wrapperStyles = window.getComputedStyle(imagesWrapper);
          var wrapperMarginTop = parseFloat(wrapperStyles.marginTop);
          imagesWrapper.style.height = "".concat(window.innerHeight - servicesContent.offsetHeight - wrapperMarginTop, "px");
          var scrollStyles = window.getComputedStyle(scroll);
          var startValue = parseFloat(scrollStyles.paddingLeft) + imagesWrapper.offsetHeight;
          var itemsArray = _toConsumableArray(Array.from(servicesItems));
          itemsArray.pop();
          var totalWidth = itemsArray.reduce(function (accumulatedWidth, item) {
            return accumulatedWidth + getTotalWidthWithMargin(item);
          }, startValue);
          tl[index] = gsap.timeline({
            scrollTrigger: {
              trigger: service,
              pin: true,
              scrub: true,
              start: "top top",
              end: function end() {
                return "+=".concat(totalWidth);
              }
            }
          });
          servicesItems.forEach(function (item, idx) {
            tl[index].to(servicesItems, {
              xPercent: -110 * (idx + 1),
              ease: "none",
              onUpdate: function onUpdate() {
                servicesItems.forEach(function (s, i) {
                  if (i === Math.round(tl[index].progress() * (servicesItems.length - 1))) {
                    s.classList.add("services__item_active");
                    if (servicesImages.length) servicesImages[i].classList.add("services__image_active");
                  } else {
                    s.classList.remove("services__item_active");
                    if (servicesImages.length) servicesImages[i].classList.remove("services__image_active");
                  }
                });
              }
            });
          });
        }, timeout);
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