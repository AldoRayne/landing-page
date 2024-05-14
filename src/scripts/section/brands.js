window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const brands = document.querySelectorAll(".js-brand");

        if (!brands.length) return;

        if (!document.querySelector(".js-hero__text")) {
            brandsAnimation();
            return;
        }

        globalTl.to(".js-hero__word", {
            onComplete: () => brandsAnimation(),
        });

        /** brandsAnimation() init */
        function brandsAnimation() {
            brands.forEach((brand) => {
                const image = brand.querySelector(".js-brand__image");

                gsap.to(image, {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: brand,
                        start: "50% bottom",
                        end: "bottom bottom",
                        toggleActions: "play none none none",
                    },
                });
            });
        }
    }, 500);
});
