window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const teamsList = document.querySelectorAll(".js-team");

        if (!teamsList.length) return;

        const gs = [];

        if (!document.querySelector(".js-hero__text")) {
            teamAnimation();
            return;
        }

        globalTl.to(".js-hero__word", {
            onComplete: () => teamAnimation(),
        });

        window.addEventListener("resize", () => teamAnimation(true));

        /** teamAnimation() init */
        function teamAnimation(resize = false) {
            teamsList.forEach((team, index) => {
                const imageWrappers = team.querySelectorAll(".js-team__image-wrapper");
                let timeout = 0;

                if (resize) {
                    timeout = 200;

                    if (isGSAPInstance(gs[index])) gs[index].scrollTrigger.kill();
                    imageWrappers.forEach((wrapper) => wrapper.removeAttribute("style"));
                }

                setTimeout(() => {
                    const teamTitle = team.querySelector(".js-team__title");
                    const scroll = team.querySelector(".js-team__scroll");
                    const teamItems = team.querySelectorAll(".js-team__item");
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

                    gs[index] = gsap.to(scroll, {
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
                }, timeout);
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
