window.addEventListener("DOMContentLoaded", () => {
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

    gsap.timeline().to(".js-hero-text span", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        // delay: 3,
        stagger: 0.1,
    });
});
