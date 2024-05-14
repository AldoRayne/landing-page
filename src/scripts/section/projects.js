window.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".js-project");

    if (!projects.length) return;

    if (!document.querySelector(".js-hero__text")) {
        projectsAnimation();
        return;
    }

    globalTl.to(".js-hero__word", {
        onComplete: () => projectsAnimation(),
    });

    /** projectsAnimation() init */
    function projectsAnimation() {
        projects.forEach((project) => {
            const content = project.querySelector(".js-project__content");

            gsap.to(content, {
                y: 0,
                opacity: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: project,
                    start: "top bottom",
                    end: "10% bottom",
                    toggleActions: "play none none none",
                },
            });
        });
    }
});
