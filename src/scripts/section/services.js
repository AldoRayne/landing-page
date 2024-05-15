window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const servicesList = document.querySelectorAll(".js-service");

        if (!servicesList.length) return;

        servicesList.forEach((service) => {
            const serviceSlider = service.querySelector(".js-service__swiper");

            const swiper = new Swiper(serviceSlider, {
                slidesPerView: "auto",
                spaceBetween: 256,
                allowTouchMove: false,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: service,
                    start: "top top",
                    end: () => "+=" + (serviceSlider.querySelectorAll(".js-service__item").length) * window.innerHeight,
                    pin: true,
                    scrub: true,
                },
            });

            swiper.slides.forEach((slide, index) => {
                tl.to(swiper.slides, {
                    xPercent: -100 * (index + 1),
                    ease: "none",
                    onUpdate: () => {
                        swiper.slides.forEach((s, i) => {
                            if (i === Math.round(tl.progress() * (swiper.slides.length - 1))) {
                                s.classList.add("swiper-slide-active");
                            } else {
                                s.classList.remove("swiper-slide-active");
                            }
                        });
                    },
                });
            });
        });
    }, 500);
});
