window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.querySelector("body").classList.add("overflow-hidden");
        gsap.registerPlugin(ScrollTrigger);

        customCursor();
        headerShowing();

        /** customCursor() init */
        function customCursor() {
            const cursor = document.querySelector(".js-cursor");

            document.addEventListener("mousemove", (event) => {
                const x = event.clientX;
                const y = event.clientY;
                cursor.style.left = x + "px";
                cursor.style.top = y + "px";
            });
        }

        /** headerShowing() init */
        function headerShowing() {
            const header = document.querySelector(".js-header");

            if (!header) return;

            gsap.set(".js-header", {
                opacity: 1,
            });
        }
    }, 500);
});
