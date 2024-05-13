window.addEventListener("DOMContentLoaded", async () => {
    await heroTextAnimation();
    document.querySelector("body").classList.remove("overflow-hidden");

    /** heroTextAnimation() init */
    async function heroTextAnimation() {
        const heroTexts = document.querySelectorAll(".js-hero-text");

        if (!heroTexts.length) return;

        heroTexts.forEach((text) => {
            const words = text.textContent.trim().split(" ");
            text.textContent = "";

            words.forEach((word) => {
                const span = document.createElement("span");
                span.textContent = word;

                text.append(span);
                text.innerHTML += " ";
            });
        });

        gsap.set(".js-hero-text", {
            opacity: 1,
        });

        await globalTl.to(".js-hero-text span", {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
            });
    }
});
