/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/scripts/section/projects.js ***!
  \*****************************************/
window.addEventListener("DOMContentLoaded", function () {
  var projects = document.querySelectorAll(".js-project");
  if (!projects.length) return;
  setTimeout(function () {
    projects.forEach(function (project) {
      var content = project.querySelector(".js-project__content");
      gsap.to(content, {
        scrollTrigger: {
          trigger: project,
          start: "top bottom",
          end: "10% bottom",
          scrub: true
        },
        onComplete: function onComplete() {
          gsap.to(content, {
            y: 0,
            opacity: 1
          });
        }
      });
    });
  }, 8000);
});
/******/ })()
;