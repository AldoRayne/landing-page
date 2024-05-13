/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/scripts/section/hero.js ***!
  \*************************************/
window.addEventListener("DOMContentLoaded", function () {
  var heroTexts = document.querySelectorAll(".js-hero-text");
  if (!heroTexts.length) return;
  heroTexts.forEach(function (text) {
    var words = text.textContent.trim().split(" ");
    text.textContent = "";
    words.forEach(function (word) {
      var span = document.createElement("span");
      span.textContent = word;
      text.append(span);
      text.innerHTML += " ";
    });
  });
  globalTl.to(".js-hero-text span", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1
  });
});
/******/ })()
;