window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const teamsList = document.querySelectorAll(".js-team");

        if (!teamsList.length) return;

        let gs = null;

        if (!document.querySelector(".js-hero__text")) {
            teamAnimation();
            return;
        }

        globalTl.to(".js-hero__word", {
            onComplete: () => teamAnimation(),
        });

        let defaultWidth = window.innerWidth;

        window.addEventListener("resize", () => {
            const currentWidth = window.innerWidth;

            if (defaultWidth === currentWidth) return;

            defaultWidth = currentWidth;
            teamAnimation(true);
        });

        /** teamAnimation() init */
        function teamAnimation(resize = false) {
            teamsList.forEach((team) => {
                console.log(isGSAPInstance(gs));

                if (resize && isGSAPInstance(gs)) {
                    gs.scrollTrigger.kill();
                }

                const scroll = team.querySelector(".js-team__scroll");
                const teamItems = team.querySelectorAll(".js-team__item");

                const scrollStyles = window.getComputedStyle(scroll);
                const scrollPaddingLeft = parseFloat(scrollStyles.paddingLeft);

                const totalWidth = Array.from(teamItems).reduce(
                    (accumulatedWidth, item) => accumulatedWidth + getTotalWidthWithMargin(item),
                    scrollPaddingLeft
                );

                gs = gsap.to(scroll, {
                    x: () => -(totalWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: team,
                        pin: true,
                        scrub: 1,
                        start: "top top",
                        end: () => `+=${totalWidth}`,
                    },
                });
            });
        }

        /** getTotalWidthWithMargin() init */
        function getTotalWidthWithMargin(element) {
            const itemWidth = element.getBoundingClientRect().width;
            const itemStyles = window.getComputedStyle(element);
            const marginRight = parseFloat(itemStyles.marginRight);

            return itemWidth + marginRight;
        }

        /** isGSAPInstance() init */
        function isGSAPInstance(value) {
            return value && typeof value.play === "function" && typeof value.pause === "function";
        }
    }, 500);
});
