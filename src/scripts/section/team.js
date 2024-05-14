window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const teamsList = document.querySelectorAll(".js-team");

        if (!teamsList.length) return;

        if (!document.querySelector(".js-hero__text")) {
            teamAnimation();
            return;
        }

        globalTl.to(".js-hero__word", {
            onComplete: () => teamAnimation(),
        });

        /** teamAnimation() init */
        function teamAnimation() {
            teamsList.forEach((team) => {
                const scroll = team.querySelector(".js-team__scroll");
                const teamItems = team.querySelectorAll(".js-team__item");

                let totalWidth = 0;
                teamItems.forEach((item) => {
                    totalWidth += getTotalWidthWithMargin(item);
                });

                gsap.to(scroll, {
                    x: () => -(totalWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: team,
                        pin: true,
                        scrub: 1,
                        start: "bottom bottom",
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
    }, 500);
});
