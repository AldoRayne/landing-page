window.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".js-project");

    if (!projects.length) return;

    globalTl.to(".js-hero-text span", {
        onComplete: () => {
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
        },
    });
});
