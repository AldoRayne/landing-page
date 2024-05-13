window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.querySelector("body").classList.add("overflow-hidden");
        gsap.registerPlugin(ScrollTrigger);

    }, 500);
});
