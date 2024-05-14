window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const servicesList = document.querySelectorAll(".js-service");

        if (!servicesList.length) return;

        servicesList.forEach((service) => {
            new Swiper(service, {
                slidesPerView: "auto",
                spaceBetween: 256,
                mousewheel: true,
                allowTouchMove: false,
            });
        });
    }, 500);
});
