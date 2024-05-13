window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.querySelector("body").classList.add("overflow-hidden");
        gsap.registerPlugin(ScrollTrigger);

        headerShowing();

        /** Header */
        function headerShowing() {
            const header = document.querySelector(".js-header");

            if (!header) return;

            gsap.set(".js-header", {
                opacity: 1,
            });
        }
    }, 500);
});
