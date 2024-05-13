/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/scripts/section/preloader.js ***!
  \******************************************/
window.addEventListener("DOMContentLoaded", function () {
  var preloader = document.querySelector(".js-preloader");
  if (!preloader) return;
  var imagesIds = [1, 2, 3, 4, 5, 6, 7, 8];
  var randomIds = [];
  while (randomIds.length < 3) {
    var randomIndex = Math.floor(Math.random() * imagesIds.length);
    randomIds.push(imagesIds[randomIndex]);
    var index = imagesIds.indexOf(imagesIds[randomIndex]);
    imagesIds.splice(index, 1);
  }
  var rootUrl = "".concat(window.location.protocol, "//").concat(window.location.host);
  var subDomain = window.location.href.replace(rootUrl, "").split("/")[1];
  var preloaderInner = document.querySelector(".js-preloader__inner");
  randomIds.forEach(function (id) {
    var imgElement = document.createElement("img");
    imgElement.src = "".concat(rootUrl, "/").concat(subDomain, "/wp-content/themes/general/frontend/assets/img/preloaders/preloader-").concat(id, "-min.png");
    imgElement.classList.add("preloader__image", "js-preloader__image");
    preloaderInner.append(imgElement);
  });
  globalTl.to(".js-preloader__inner", {
    opacity: 1,
    delay: 0.1
  }).to(".js-preloader__image", {
    y: 0,
    stagger: 0.1
  }, "-=75%").to(".js-preloader__image", {
    yPercent: -100,
    ease: "circ.in",
    duration: 1.2,
    stagger: 1
  }).to(".js-preloader", {
    yPercent: -100
  });
});
/******/ })()
;