window.addEventListener("DOMContentLoaded", () => {
    setTimeout(async () => {
        globalTl.set(".js-hidden", {
            opacity: 1,
        });

        await heroTextAnimation();
        document.querySelector("body").classList.remove("overflow-hidden");

        /** heroTextAnimation() init */
        async function heroTextAnimation() {
            const heroTexts = document.querySelectorAll(".js-hero__text");

            if (!heroTexts.length) return;

            const splitText = new SplitText(".js-hero__text", { type: "words" });

            splitText.words.forEach((word) => {
                word.classList.add("hero__word", "js-hero__word");
            });

            await globalTl.to(splitText.words, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.1,
            });
        }
    }, 500);
});
