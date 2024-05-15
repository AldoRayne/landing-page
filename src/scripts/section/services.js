window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const servicesList = document.querySelectorAll(".js-services");

        if (!servicesList.length) return;

        const tl = [];

        if (!document.querySelector(".js-hero__text")) {
            servicesAnimation();
            return;
        }

        globalTl.to(".js-hero__word", {
            onComplete: () => servicesAnimation(),
        });

        window.addEventListener("resize", () => servicesAnimation(true));

        /** servicesAnimation() init */
        function servicesAnimation(resize = false) {
            servicesList.forEach((service, index) => {
                let timeout = 0;

                const imagesWrapper = service.querySelector(".js-services__images-wrapper");

                if (resize) {
                    timeout = 200;

                    if (isGSAPInstance(tl[index])) {
                        tl[index].scrollTrigger.kill();
                        tl[index].kill();
                    }

                    imagesWrapper.removeAttribute("style");
                }

                setTimeout(() => {
                    const servicesContent = service.querySelector(".js-services__content");
                    const scroll = service.querySelector(".js-services__scroll");
                    const servicesItems = service.querySelectorAll(".js-services__item");
                    const servicesImages = service.querySelectorAll(".js-services__image");

                    const wrapperStyles = window.getComputedStyle(imagesWrapper);
                    const wrapperMarginTop = parseFloat(wrapperStyles.marginTop);

                    imagesWrapper.style.height = `${
                        window.innerHeight - servicesContent.offsetHeight - wrapperMarginTop
                    }px`;

                    const scrollStyles = window.getComputedStyle(scroll);
                    const startValue = parseFloat(scrollStyles.paddingLeft) + imagesWrapper.offsetHeight;

                    const itemsArray = [...Array.from(servicesItems)];
                    itemsArray.pop();

                    const totalWidth = itemsArray.reduce(
                        (accumulatedWidth, item) => accumulatedWidth + getTotalWidthWithMargin(item),
                        startValue
                    );

                    tl[index] = gsap.timeline({
                        scrollTrigger: {
                            trigger: service,
                            pin: true,
                            scrub: true,
                            start: "top top",
                            end: () => `+=${totalWidth}`,
                        },
                    });

                    servicesItems.forEach((item, idx) => {
                        tl[index].to(servicesItems, {
                            xPercent: -110 * (idx + 1),
                            ease: "none",
                            onUpdate: () => {
                                servicesItems.forEach((s, i) => {
                                    if (i === Math.round(tl[index].progress() * (servicesItems.length - 1))) {
                                        s.classList.add("services__item_active");
                                        if (servicesImages.length)
                                            servicesImages[i].classList.add("services__image_active");
                                    } else {
                                        s.classList.remove("services__item_active");
                                        if (servicesImages.length)
                                            servicesImages[i].classList.remove("services__image_active");
                                    }
                                });
                            },
                        });
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
