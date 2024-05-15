window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const servicesList = document.querySelectorAll(".js-services");

        if (!servicesList.length) return;

        servicesList.forEach((service) => {
            const scroll = service.querySelector(".js-services__scroll");
            const servicesItems = service.querySelectorAll(".js-services__item");
            const servicesImages = service.querySelectorAll(".js-services__image");

            const scrollStyles = window.getComputedStyle(scroll);
            const startValue = parseFloat(scrollStyles.paddingLeft);

            const itemsArray = [...Array.from(servicesItems)];
            itemsArray.pop();

            const totalWidth = itemsArray.reduce(
                (accumulatedWidth, item) => accumulatedWidth + getTotalWidthWithMargin(item),
                startValue
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: service,
                    pin: true,
                    scrub: true,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                },
            });

            servicesItems.forEach((item, index) => {
                tl.to(servicesItems, {
                    xPercent: -120 * (index + 1),
                    ease: "none",
                    onUpdate: () => {
                        servicesItems.forEach((s, i) => {
                            if (i === Math.round(tl.progress() * (servicesItems.length - 1))) {
                                s.classList.add("services__item_active");
                                servicesImages[i].classList.add("services__images_active");
                            } else {
                                s.classList.remove("services__item_active");
                                servicesImages[i].classList.remove("services__images_active");
                            }
                        });
                    },
                });
            });
        });

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
