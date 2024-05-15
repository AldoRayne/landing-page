window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.querySelector("body").classList.add("overflow-hidden");
        gsap.registerPlugin(ScrollSmoother, SplitText, ScrollTrigger);

        customCursor();
        // smoothScrole();

        /** customCursor() init */
        function customCursor() {
            const cursor = document.querySelector(".js-cursor");

            if (!cursor) return;

            document.addEventListener("mousemove", (event) => {
                cursor.style.left = `${event.clientX - 7.5}px`;
                cursor.style.top = `${event.clientY - 7.5}px`;
            });
        }

        /** smoothScrole() init */
        function smoothScrole() {
            ScrollSmoother.create({
                wrapper: "#smooth__wrapper",
                content: "#smooth__content",
                smooth: 1.2,
                effects: true,
            });
        }
    }, 500);
});
