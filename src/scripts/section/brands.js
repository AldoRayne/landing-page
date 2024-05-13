window.addEventListener("DOMContentLoaded", () => {
    const brands = document.querySelectorAll(".js-brand");

    if (!brands.length) return;

    brands.forEach((brand) => {
        const image = brand.querySelector(".js-brand__image");

        gsap.to(image, {
            scrollTrigger: {
                trigger: brand,
                start: "50% bottom",
                end: "bottom bottom",
                scrub: true,
            },
            onComplete: () => {
                gsap.to(image, {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                });
            },
        });
    });
});
