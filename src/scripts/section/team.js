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
                if (resize && isGSAPInstance(gs)) gs.scrollTrigger.kill();

                const teamTitle = team.querySelector(".js-team__title");
                const scroll = team.querySelector(".js-team__scroll");
                const teamItems = team.querySelectorAll(".js-team__item");
                const imageWrappers = team.querySelectorAll(".js-team__image-wrapper");
                const teamDescription = team.querySelector(".js-team__description");

                const titleStyles = window.getComputedStyle(teamTitle);
                const titleMarginBottom = parseFloat(titleStyles.marginBottom);

                const wrapperStyles = window.getComputedStyle(imageWrappers[0]);
                const wrapperMarginBottom = parseFloat(wrapperStyles.marginBottom);

                const imageWrapperHeight = `${
                    window.innerHeight -
                    teamTitle.offsetHeight -
                    titleMarginBottom -
                    teamDescription.offsetHeight -
                    wrapperMarginBottom
                }px`;

                imageWrappers.forEach((wrapper) => {
                    wrapper.style.height = imageWrapperHeight;
                });

                const scrollStyles = window.getComputedStyle(scroll);
                const startValue = parseFloat(scrollStyles.paddingLeft);

                const itemsArray = [...Array.from(teamItems)];
                itemsArray.pop();

                const totalWidth = itemsArray.reduce(
                    (accumulatedWidth, item) => accumulatedWidth + getTotalWidthWithMargin(item),
                    startValue
                );

                gs = gsap.to(scroll, {
                    x: () => -totalWidth,
                    ease: "none",
                    scrollTrigger: {
                        trigger: team,
                        pin: true,
                        scrub: true,
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
