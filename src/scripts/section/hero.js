window.addEventListener("DOMContentLoaded", async () => {
    await heroTextAnimation();
    document.querySelector("body").classList.remove("overflow-hidden");

    /** heroTextAnimation() init */
    async function heroTextAnimation() {
        const heroTexts = document.querySelectorAll(".js-hero-text");

        if (!heroTexts.length) return;

        const splitText = new SplitText(".js-hero-text", { type: "words" });

        splitText.words.forEach((word) => {
            word.classList.add("hero__word", "js-hero-word");
        });

        await globalTl.to(splitText.words, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
        });
    }
});
