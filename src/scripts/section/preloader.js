window.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".js-preloader");

    if (!preloader) return;

    const imagesIds = [1, 2, 3, 4, 5, 6, 7, 8];
    const randomIds = [];

    while (randomIds.length < 3) {
        const randomIndex = Math.floor(Math.random() * imagesIds.length);
        randomIds.push(imagesIds[randomIndex]);

        const index = imagesIds.indexOf(imagesIds[randomIndex]);
        imagesIds.splice(index, 1);
    }

    const rootUrl = `${window.location.protocol}//${window.location.host}`;
    const subDomain = window.location.href.replace(rootUrl, "").split("/")[1];

    const preloaderInner = document.querySelector(".js-preloader__inner");

    randomIds.forEach((id) => {
        const imgElement = document.createElement("img");

        imgElement.src = `${rootUrl}/${subDomain}/wp-content/themes/general/frontend/assets/img/preloaders/preloader-${id}-min.png`;
        imgElement.classList.add("preloader__image", "js-preloader__image");

        preloaderInner.append(imgElement);
    });

    gsap.timeline()
        .to(".js-preloader__inner", {
            opacity: 1,
            delay: 0.1,
        })
        .to(
            ".js-preloader__image",
            {
                y: 0,
                stagger: 0.1,
            },
            "-=75%"
        )
        .to(".js-preloader__image", {
            yPercent: -100,
            ease: "circ.in",
            duration: 1.2,
            stagger: 1,
        })
        .to(".js-preloader", {
            yPercent: -100,
        });
});
