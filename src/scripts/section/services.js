window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const servicesList = document.querySelectorAll(".js-service");

        if (!servicesList.length) return;

        servicesList.forEach((service) => {
            const serviceSlider = service.querySelector(".js-service__swiper");
            const serviceWrapper = service.querySelector(".js-service__wrapper");

            const swiper = new Swiper(serviceSlider, {
                slidesPerView: "auto",
                spaceBetween: 256,
                allowTouchMove: false,
            });

            // ScrollTrigger.create({
            //     trigger: serviceSlider,
            //     start: "top top",
            //     end: () => "+=" + document.querySelectorAll(".swiper-slide").length * window.innerHeight,
            //     pin: true,
            //     scrub: true,
            //     onUpdate: (self) => {
            //         const progress = self.progress;
            //         const totalSlides = swiper.slides.length - 1;
            //         swiper.slideTo(Math.round(progress * totalSlides), 0, false);
            //     },
            // });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: serviceSlider,
                    start: "top top",
                    end: () => `+=${serviceWrapper.scrollHeight}`,
                    pin: true,
                    scrub: true,
                },
            });

            swiper.slides.forEach((slide, index) => {
                tl.to(swiper.slides, {
                    xPercent: -100 * (index + 1),
                    duration: 1,
                    ease: "none",
                });
            });
        });
    }, 500);
});
