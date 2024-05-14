/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/scripts/section/projects.js ***!
  \*****************************************/
window.addEventListener("DOMContentLoaded", function () {
  var projects = document.querySelectorAll(".js-project");
  if (!projects.length) return;
  if (!document.querySelector(".js-hero-text")) {
    projectsAnimation();
    return;
  }
  globalTl.to(".js-hero-word", {
    onComplete: function onComplete() {
      return projectsAnimation();
    }
  });

  /** projectsAnimation() init */
  function projectsAnimation() {
    projects.forEach(function (project) {
      var content = project.querySelector(".js-project__content");
      gsap.to(content, {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: project,
          start: "top bottom",
          end: "10% bottom",
          toggleActions: "play none none none"
        }
      });
    });
  }
});
/******/ })()
;