/* =========================================================
   STACKLY AUDIT & ASSURANCE
   BLOG HERO - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {

        console.warn(
            "GSAP is not loaded."
        );

        return;
    }


    const hero =
        document.querySelector(
            "#blog-hero"
        );


    if (!hero) return;


    const background =
        hero.querySelector(
            ".audit-blog-hero-bg img"
        );


    const label =
        hero.querySelector(
            ".audit-blog-hero-label"
        );


    const title =
        hero.querySelector(
            ".audit-blog-hero-title"
        );


    const description =
        hero.querySelector(
            ".audit-blog-hero-description"
        );


    const button =
        hero.querySelector(
            ".audit-blog-hero-button-wrap"
        );


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(background, {

        scale: 1.1

    });


    gsap.set(label, {

        y: 25,

        opacity: 0

    });


    gsap.set(title, {

        y: 45,

        opacity: 0

    });


    gsap.set(description, {

        y: 35,

        opacity: 0

    });


    gsap.set(button, {

        y: 30,

        opacity: 0

    });


    /* =====================================================
       HERO REVEAL
    ===================================================== */

    const tl =
        gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });


    /* BACKGROUND */

    tl.to(background, {

        scale: 1,

        duration: 1.5,

        ease: "power3.out"

    });


    /* LABEL */

    tl.to(label, {

        y: 0,

        opacity: 1,

        duration: 0.55

    }, "-=0.85");


    /* TITLE */

    tl.to(title, {

        y: 0,

        opacity: 1,

        duration: 0.85

    }, "-=0.25");


    /* DESCRIPTION */

    tl.to(description, {

        y: 0,

        opacity: 1,

        duration: 0.7

    }, "-=0.35");


    /* BUTTON */

    tl.to(button, {

        y: 0,

        opacity: 1,

        duration: 0.6

    }, "-=0.3");


    /* =====================================================
       SLOW BACKGROUND MOVEMENT
    ===================================================== */

    gsap.to(background, {

        scale: 1.035,

        duration: 9,

        ease: "sine.inOut",

        repeat: -1,

        yoyo: true

    });


    /* =====================================================
       BUTTON ARROW
    ===================================================== */

    const arrow =
        hero.querySelector(
            ".audit-blog-hero-arrow"
        );


    const heroButton =
        hero.querySelector(
            ".audit-blog-hero-button"
        );


    if (heroButton && arrow) {

        heroButton.addEventListener(
            "mouseenter",
            () => {

                gsap.to(arrow, {

                    x: 5,

                    duration: 0.25,

                    ease: "power2.out"

                });

            }
        );


        heroButton.addEventListener(
            "mouseleave",
            () => {

                gsap.to(arrow, {

                    x: 0,

                    duration: 0.25,

                    ease: "power2.out"

                });

            }
        );

    }


    /* =====================================================
       SUBTLE DESKTOP PARALLAX
    ===================================================== */

    if (window.innerWidth > 768) {

        hero.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (event.clientX -
                        rect.left) /
                    rect.width -
                    0.5;


                const y =
                    (event.clientY -
                        rect.top) /
                    rect.height -
                    0.5;


                gsap.to(background, {

                    x: x * 10,

                    y: y * 7,

                    duration: 0.8,

                    ease: "power2.out",

                    overwrite: "auto"

                });

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                gsap.to(background, {

                    x: 0,

                    y: 0,

                    duration: 0.8,

                    ease: "power3.out"

                });

            }
        );

    }

});

/* =========================================================
   STACKLY AUDIT & ASSURANCE
   BLOG INSIGHT SECTION - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {

        console.warn("GSAP is not loaded.");

        return;
    }


    const section =
        document.querySelector(
            "#blog-insight"
        );


    if (!section) return;


    const visual =
        section.querySelector(
            ".audit-blog-insight-visual"
        );


    const image =
        section.querySelector(
            ".audit-blog-insight-image img"
        );


    const content =
        section.querySelector(
            ".audit-blog-insight-content"
        );


    const counters =
        section.querySelectorAll(
            ".audit-blog-counter-number"
        );


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(visual, {

        x: -100,

        opacity: 0

    });


    gsap.set(content, {

        x: 100,

        opacity: 0

    });


    gsap.set(image, {

        scale: 1.08

    });


    /* =====================================================
       COUNTER FUNCTION
    ===================================================== */

    function animateCounter(element) {

        const target =
            Number(
                element.dataset.count
            );


        const suffix =
            element.dataset.suffix || "";


        const counter = {
            value: 0
        };


        gsap.to(counter, {

            value: target,

            duration: 2.2,

            ease: "power2.out",

            onUpdate: () => {

                element.textContent =
                    Math.floor(
                        counter.value
                    ).toLocaleString() +
                    suffix;

            },

            onComplete: () => {

                element.textContent =
                    target.toLocaleString() +
                    suffix;

            }

        });

    }


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    let played = false;


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting ||
                            played
                        ) {
                            return;
                        }


                        played = true;


                        /* =================================
                           MAIN TIMELINE
                        ================================= */

                        const tl =
                            gsap.timeline({
                                defaults: {
                                    ease:
                                        "power3.out"
                                }
                            });


                        /* IMAGE */

                        tl.to(visual, {

                            x: 0,

                            opacity: 1,

                            duration: 1.05

                        });


                        /* IMAGE ZOOM */

                        tl.to(image, {

                            scale: 1,

                            duration: 1.25,

                            ease: "power3.out"

                        }, "-=0.95");


                        /* CONTENT */

                        tl.to(content, {

                            x: 0,

                            opacity: 1,

                            duration: 1

                        }, "-=0.75");


                        /* COUNTERS */

                        counters.forEach(
                            (counter, index) => {

                                gsap.delayedCall(
                                    0.7 + index * 0.15,
                                    () => {

                                        animateCounter(
                                            counter
                                        );

                                    }
                                );

                            }
                        );

                    }
                );

            },
            {
                threshold: 0.22
            }
        );


    observer.observe(section);


    /* =====================================================
       SUBTLE IMAGE MOVEMENT
    ===================================================== */

    gsap.to(image, {

        scale: 1.025,

        duration: 7,

        ease: "sine.inOut",

        repeat: -1,

        yoyo: true,

        delay: 2

    });

});



/* =========================================================
   STACKLY AUDIT & ASSURANCE
   BLOG STORIES - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {

        console.warn("GSAP is not loaded.");

        return;
    }


    const section =
        document.querySelector(
            "#blog-stories"
        );


    if (!section) return;


    const heading =
        section.querySelector(
            ".audit-blog-stories-heading"
        );


    const cards =
        Array.from(
            section.querySelectorAll(
                ".audit-story-card"
            )
        );


    if (!cards.length) return;


    /* =====================================================
       INITIAL CARD STATE
    ===================================================== */

    gsap.set(heading, {

        y: 45,

        opacity: 0

    });


    gsap.set(cards, {

        y: 70,

        opacity: 0

    });


    /* =====================================================
       SECTION REVEAL
    ===================================================== */

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        observer.disconnect();


                        const tl =
                            gsap.timeline({
                                defaults: {
                                    ease:
                                        "power3.out"
                                }
                            });


                        /* HEADING */

                        tl.to(heading, {

                            y: 0,

                            opacity: 1,

                            duration: 0.8

                        });


                        /* CARDS */

                        tl.to(cards, {

                            y: 0,

                            opacity: 1,

                            duration: 0.85,

                            stagger: 0.12

                        }, "-=0.4");


                    }
                );

            },
            {
                threshold: 0.18
            }
        );


    observer.observe(section);


    /* =====================================================
       CARD ELEMENTS
    ===================================================== */

    cards.forEach((card) => {

        const image =
            card.querySelector("img");


        const content =
            card.querySelector(
                ".audit-story-content"
            );


        /* =================================================
           DESKTOP HOVER
        ================================================= */

        card.addEventListener(
            "mouseenter",
            () => {

                if (
                    window.innerWidth <= 768
                ) {
                    return;
                }


                activateCard(card);


                gsap.to(image, {

                    scale: 1.09,

                    duration: 0.9,

                    ease: "power3.out",

                    overwrite: "auto"

                });


                gsap.to(content, {

                    y: 0,

                    opacity: 1,

                    duration: 0.45,

                    ease: "power3.out",

                    overwrite: "auto"

                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                if (
                    window.innerWidth <= 768
                ) {
                    return;
                }


                gsap.to(image, {

                    scale: 1.05,

                    duration: 0.8,

                    ease: "power3.out",

                    overwrite: "auto"

                });

            }
        );


        /* =================================================
           MOBILE TAP
        ================================================= */

        card.addEventListener(
            "click",
            () => {

                if (
                    window.innerWidth > 768
                ) {
                    return;
                }


                activateCard(card);

            }
        );

    });


    /* =====================================================
       ACTIVATE CARD
    ===================================================== */

    function activateCard(activeCard) {

        cards.forEach((card) => {

            const image =
                card.querySelector("img");

            const content =
                card.querySelector(
                    ".audit-story-content"
                );


            if (card === activeCard) {

                card.classList.add(
                    "active"
                );


                gsap.to(card, {

                    flex:
                        window.innerWidth > 768
                            ? 2.8
                            : "none",

                    duration: 0.8,

                    ease: "power3.inOut",

                    overwrite: "auto"

                });


                gsap.to(image, {

                    scale: 1.09,

                    duration: 0.8,

                    ease: "power3.out",

                    overwrite: "auto"

                });


                gsap.fromTo(
                    content,

                    {
                        y: 22,
                        opacity: 0
                    },

                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: "power3.out",
                        overwrite: "auto"
                    }
                );

            } else {

                card.classList.remove(
                    "active"
                );


                gsap.to(card, {

                    flex:
                        window.innerWidth > 768
                            ? 1
                            : "none",

                    duration: 0.8,

                    ease: "power3.inOut",

                    overwrite: "auto"

                });


                gsap.to(image, {

                    scale: 1.04,

                    duration: 0.8,

                    ease: "power3.out",

                    overwrite: "auto"

                });


                gsap.to(content, {

                    y: 20,

                    opacity: 0,

                    duration: 0.35,

                    ease: "power2.out",

                    overwrite: "auto"

                });

            }

        });

    }


    /* =====================================================
       INITIAL ACTIVE IMAGE ZOOM
    ===================================================== */

    const initialCard =
        cards.find(
            card =>
                card.classList.contains(
                    "active"
                )
        ) || cards[0];


    gsap.to(
        initialCard.querySelector("img"),
        {

            scale: 1.08,

            duration: 5,

            ease: "sine.inOut",

            repeat: -1,

            yoyo: true

        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

 /*   window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth <= 768
            ) {

                cards.forEach(
                    (card) => {

                        card.style.flex =
                            "none";

                    }
                );

            }

        }
    );*/

});

/* =====================================================
   RESIZE - MOBILE / DESKTOP FIX
===================================================== */

let resizeTimer;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

        const isMobile =
            window.innerWidth <= 768;

        /* Stop old card animations */
        gsap.killTweensOf(cards);

        cards.forEach((card) => {

            const image =
                card.querySelector("img");

            const content =
                card.querySelector(
                    ".audit-story-content"
                );

            /* Stop old animations */
            gsap.killTweensOf(image);
            gsap.killTweensOf(content);

            /* ALWAYS SHOW CARD */
            gsap.set(card, {
                opacity: 1,
                y: 0
            });

            /* ALWAYS SHOW IMAGE */
            gsap.set(image, {
                opacity: 1,
                visibility: "visible"
            });

            if (isMobile) {

                /* MOBILE */
                card.style.flex = "none";

                if (card.classList.contains("active")) {

                    gsap.set(card, {
                        height: ""
                    });

                    gsap.set(image, {
                        scale: 1.08
                    });

                    gsap.set(content, {
                        opacity: 1,
                        y: 0
                    });

                } else {

                    gsap.set(image, {
                        scale: 1.05
                    });

                    gsap.set(content, {
                        opacity: 0,
                        y: 20
                    });

                }

            } else {

                /* DESKTOP */

                card.style.height = "";
                
                card.style.flex =
                    card.classList.contains("active")
                        ? "2.8 1 0"
                        : "1 1 0";

                gsap.set(image, {
                    scale:
                        card.classList.contains("active")
                            ? 1.08
                            : 1.05
                });

                gsap.set(content, {
                    opacity:
                        card.classList.contains("active")
                            ? 1
                            : 0,

                    y:
                        card.classList.contains("active")
                            ? 0
                            : 20
                });

            }

        });

    }, 100);

});


/* =========================================================
   AUDIT VIDEO CTA
   GSAP + PLAY BUTTON
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    const section = document.querySelector("#audit-video-cta");

    if (!section) return;


    const label = section.querySelector(".audit-video-cta-label");
    const title = section.querySelector(".audit-video-cta-title");
    const description = section.querySelector(".audit-video-cta-description");
    const button = section.querySelector(".audit-video-cta-button");
    const video = section.querySelector(".audit-video-cta-background");
    const playButton = section.querySelector(".audit-video-play-btn");


    /* =====================================================
       GSAP INITIAL STATES
    ===================================================== */

    gsap.set(label, {
        y: 30,
        opacity: 0
    });

    gsap.set(title, {
        y: 45,
        opacity: 0
    });

    gsap.set(description, {
        y: 30,
        opacity: 0
    });

    gsap.set(button, {
        y: 25,
        opacity: 0
    });

    gsap.set(playButton, {
        opacity: 0,
        scale: 0.75,
        xPercent: -50,
        yPercent: -50
    });


    /* =====================================================
       SECTION REVEAL
    ===================================================== */

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;


                const tl = gsap.timeline({
                    defaults: {
                        ease: "power3.out"
                    }
                });


                tl.to(video, {
                    scale: 1,
                    duration: 1.4
                })

                .to(label, {
                    y: 0,
                    opacity: 1,
                    duration: 0.55
                }, "-=0.9")

                .to(title, {
                    y: 0,
                    opacity: 1,
                    duration: 0.75
                }, "-=0.25")

                .to(description, {
                    y: 0,
                    opacity: 1,
                    duration: 0.65
                }, "-=0.3")

                .to(button, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6
                }, "-=0.25")

                .to(playButton, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.65,
                    ease: "back.out(1.7)"
                }, "-=0.3");


                observerInstance.unobserve(section);

            });

        },
        {
            threshold: 0.2
        }
    );


    observer.observe(section);


    /* =====================================================
       PLAY BUTTON - CONTINUOUS SOFT ZOOM
    ===================================================== */

    gsap.to(playButton, {
        scale: 1.08,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        paused: true
    });


    /* =====================================================
       PLAY BUTTON HOVER
    ===================================================== */

    playButton.addEventListener("mouseenter", () => {

        gsap.killTweensOf(playButton);

        gsap.to(playButton, {
            scale: 1.12,
            duration: 0.3,
            ease: "power2.out"
        });

    });


    playButton.addEventListener("mouseleave", () => {

        gsap.to(playButton, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });

    });


    /* =====================================================
       IMPORTANT:
       CLICK -> 404.HTML
    ===================================================== */

    playButton.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        window.location.href = "404.html";

    });


    /* =====================================================
       CONTACT BUTTON ARROW
    ===================================================== */

    const arrow = button
        ? button.querySelector(".audit-video-cta-arrow")
        : null;


    if (button && arrow) {

        button.addEventListener("mouseenter", () => {

            gsap.to(arrow, {
                x: 5,
                duration: 0.3,
                ease: "power2.out"
            });

        });


        button.addEventListener("mouseleave", () => {

            gsap.to(arrow, {
                x: 0,
                duration: 0.3,
                ease: "power2.out"
            });

        });

    }


    /* =====================================================
       VIDEO SLOW ZOOM
    ===================================================== */

    gsap.to(video, {
        scale: 1.035,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5
    });

});


/* =========================================================
   AUDIT INSIGHTS
   GSAP REVEAL + HOVER IMAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section = document.querySelector("#audit-insights");

    if (!section) return;


    const heading = section.querySelector(".audit-insights-heading");

    const rows = section.querySelectorAll(".audit-insight-row");


    /* =====================================================
       INITIAL HEADING
    ===================================================== */

    gsap.set(heading, {
        y: 45,
        opacity: 0
    });


    /* =====================================================
       INITIAL ROWS
    ===================================================== */

    gsap.set(rows, {
        y: 50,
        opacity: 0
    });


    /* =====================================================
       SECTION REVEAL
    ===================================================== */

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;


                const tl = gsap.timeline({
                    defaults: {
                        ease: "power3.out"
                    }
                });


                /* Heading */

                tl.to(heading, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8
                });


                /* Blog rows */

                tl.to(rows, {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.14
                }, "-=0.35");


                observerInstance.unobserve(section);

            });

        },
        {
            threshold: 0.15
        }
    );


    observer.observe(section);


    /* =====================================================
       IMAGE HOVER ANIMATION
    ===================================================== */

    rows.forEach((row) => {

        const imageWrap =
            row.querySelector(".audit-insight-image-wrap");

        const image =
            row.querySelector(".audit-insight-image-wrap img");


        if (!imageWrap || !image) return;


        /* ---------------------------------------------
           DESKTOP HOVER IN
        --------------------------------------------- */

        row.addEventListener("mouseenter", () => {

            if (window.innerWidth <= 768) return;


            gsap.killTweensOf([
                imageWrap,
                image
            ]);


            gsap.to(imageWrap, {
                autoAlpha: 1,
                scale: 1,
                y: 0,

                duration: 0.65,

                ease: "power3.out"
            });


            gsap.to(image, {
                scale: 1,

                duration: 0.9,

                ease: "power3.out"
            });

        });


        /* ---------------------------------------------
           DESKTOP HOVER OUT
        --------------------------------------------- */

        row.addEventListener("mouseleave", () => {

            if (window.innerWidth <= 768) return;


            gsap.killTweensOf([
                imageWrap,
                image
            ]);


            gsap.to(imageWrap, {
                autoAlpha: 0,
                scale: 0.72,
                y: 35,

                duration: 0.45,

                ease: "power3.inOut"
            });


            gsap.to(image, {
                scale: 1.12,

                duration: 0.45,

                ease: "power2.out"
            });

        });


        /* =================================================
           MOBILE TAP
        ================================================= */

        row.addEventListener("click", (event) => {

            if (window.innerWidth > 768) return;


            /*
               Don't interfere with Read More button.
            */

            if (
                event.target.closest(
                    ".audit-insight-button"
                )
            ) {
                return;
            }


            const isOpen =
                imageWrap.classList.contains(
                    "audit-insight-mobile-open"
                );


            /* Close all other images */

            rows.forEach((otherRow) => {

                if (otherRow === row) return;


                const otherImage =
                    otherRow.querySelector(
                        ".audit-insight-image-wrap"
                    );

                if (!otherImage) return;


                otherImage.classList.remove(
                    "audit-insight-mobile-open"
                );


                gsap.to(otherImage, {
                    autoAlpha: 0,
                    scale: 0.85,
                    y: 25,

                    duration: 0.4,

                    ease: "power3.inOut"
                });

            });


            /* Close current */

            if (isOpen) {

                imageWrap.classList.remove(
                    "audit-insight-mobile-open"
                );


                gsap.to(imageWrap, {
                    autoAlpha: 0,
                    scale: 0.85,
                    y: 25,

                    duration: 0.4,

                    ease: "power3.inOut"
                });

                return;
            }


            /* Open current */

            imageWrap.classList.add(
                "audit-insight-mobile-open"
            );


            gsap.to(imageWrap, {
                autoAlpha: 1,
                scale: 1,
                y: 0,

                duration: 0.65,

                ease: "power3.out"
            });


            gsap.to(image, {
                scale: 1,

                duration: 0.8,

                ease: "power3.out"
            });

        });

    });


    /* =====================================================
       BUTTON HOVER
    ===================================================== */

    const buttons =
        section.querySelectorAll(
            ".audit-insight-button"
        );


    buttons.forEach((button) => {

        button.addEventListener("mouseenter", () => {

            gsap.to(button, {
                y: -2,

                duration: 0.25,

                ease: "power2.out"
            });

        });


        button.addEventListener("mouseleave", () => {

            gsap.to(button, {
                y: 0,

                duration: 0.25,

                ease: "power2.out"
            });

        });

    });

});