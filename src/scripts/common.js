window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.querySelector("body").classList.add("overflow-hidden");
        gsap.registerPlugin(ScrollTrigger, SplitText);

        customCursor();
        headerShowing();

        /** customCursor() init */
        function customCursor() {
            const cursor = document.querySelector(".js-cursor");

            if (!cursor) return;

            document.addEventListener("mousemove", (event) => {
                cursor.style.left = `${event.clientX - 7}px`;
                cursor.style.top = `${event.clientY - 7}px`;
            });
        }

        /** headerShowing() init */
        function headerShowing() {
            const header = document.querySelector(".js-header");

            if (!header) return;
        }
    }, 500);
});
