window.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".js-project");

    if (!projects.length) return;

    if (!document.querySelector(".js-hero-text")) {
        projectsAnimation();
        return;
    }

    globalTl.to(".js-hero-text span", {
        onComplete: () => projectsAnimation(),
    });

    /** projectsAnimation() init */
    function projectsAnimation() {
        projects.forEach((project) => {
            const content = project.querySelector(".js-project__content");

            gsap.to(content, {
                scrollTrigger: {
                    trigger: project,
                    start: "top bottom",
                    end: "10% bottom",
                    scrub: true,
                },
                onComplete: () => {
                    gsap.to(content, {
                        y: 0,
                        opacity: 1,
                    });
                },
            });
        });
    }
});
