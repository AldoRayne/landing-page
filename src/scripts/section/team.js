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
            console.log("team");

            teamsList.forEach((team) => {
                const scroll = team.querySelector(".js-team__scroll");

                gsap.to(scroll, {
                    xPercent: -200,
                    ease: "none",
                    scrollTrigger: {
                        trigger: team,
                        pin: true,
                        scrub: 1,
                        start: "bottom bottom",
                        end: () => "+=" + scroll.offsetWidth,
                        markers: true,
                    },
                });
            });
        }
    }, 500);
});
