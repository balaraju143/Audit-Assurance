/* =========================================================
   STACKLY AUDIT & ASSURANCE
   SERVICES HERO - GSAP
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
            "#services-hero"
        );


    if (!hero) return;


    const background =
        hero.querySelector(
            ".audit-services-hero-bg img"
        );


    const content =
        hero.querySelector(
            ".audit-services-hero-content"
        );


    const label =
        hero.querySelector(
            ".audit-services-hero-label"
        );


    const title =
        hero.querySelector(
            ".audit-services-hero-title"
        );


    const description =
        hero.querySelector(
            ".audit-services-hero-description"
        );


    const button =
        hero.querySelector(
            ".audit-services-hero-button-wrap"
        );


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(background, {

        scale: 1.12

    });


    gsap.set(content, {

        x: 90,

        opacity: 0

    });


    gsap.set(label, {

        y: 25,

        opacity: 0

    });


    gsap.set(title, {

        y: 40,

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


    /* =====================================================
       MAIN TIMELINE
    ===================================================== */

    const tl =
        gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });


    /* BACKGROUND IMAGE */

    tl.to(background, {

        scale: 1,

        duration: 1.5,

        ease: "power3.out"

    });


    /* RIGHT CONTENT */

    tl.to(content, {

        x: 0,

        opacity: 1,

        duration: 0.85,

        ease: "power3.out"

    }, "-=0.9");


    /* LABEL */

    tl.to(label, {

        y: 0,

        opacity: 1,

        duration: 0.5

    }, "-=0.5");


    /* TITLE */

    tl.to(title, {

        y: 0,

        opacity: 1,

        duration: 0.75

    }, "-=0.25");


    /* DESCRIPTION */

    tl.to(description, {

        y: 0,

        opacity: 1,

        duration: 0.65

    }, "-=0.3");


    /* BUTTON */

    tl.to(button, {

        y: 0,

        opacity: 1,

        duration: 0.6

    }, "-=0.25");


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
       BUTTON ARROW HOVER
    ===================================================== */

    const cta =
        hero.querySelector(
            ".audit-services-hero-button"
        );


    const arrow =
        hero.querySelector(
            ".audit-services-hero-arrow"
        );


    if (cta && arrow) {

        cta.addEventListener(
            "mouseenter",
            () => {

                gsap.to(arrow, {

                    x: 5,

                    duration: 0.25,

                    ease: "power2.out"

                });

            }
        );


        cta.addEventListener(
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

});


/* =========================================================
   STACKLY AUDIT & ASSURANCE
   SERVICE CARDS - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {

        console.warn(
            "GSAP is not loaded."
        );

        return;
    }


    const section =
        document.querySelector(
            "#services"
        );


    if (!section) return;


    const label =
        section.querySelector(
            ".audit-service-solutions-label"
        );


    const heading =
        section.querySelector(
            ".audit-service-solutions-heading h2"
        );


    const cards =
        section.querySelectorAll(
            ".audit-solution-card"
        );


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(label, {

        y: -25,

        opacity: 0

    });


    gsap.set(heading, {

        y: -35,

        opacity: 0

    });


    gsap.set(cards, {

        y: -90,

        opacity: 0

    });


    /* =====================================================
       SCROLL REVEAL
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


                        const tl =
                            gsap.timeline();


                        /* LABEL */

                        tl.to(label, {

                            y: 0,

                            opacity: 1,

                            duration: 0.55,

                            ease:
                                "power3.out"

                        });


                        /* HEADING */

                        tl.to(heading, {

                            y: 0,

                            opacity: 1,

                            duration: 0.8,

                            ease:
                                "power3.out"

                        }, "-=0.25");


                        /* CARDS */

                        tl.to(cards, {

                            y: 0,

                            opacity: 1,

                            duration: 0.8,

                            stagger: 0.16,

                            ease:
                                "power3.out"

                        }, "-=0.25");

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    observer.observe(section);


    /* =====================================================
       MOBILE CLICK / TOUCH HOVER
    ===================================================== */

    cards.forEach((card) => {

        const arrow =
            card.querySelector(
                ".audit-solution-arrow"
            );


        if (!arrow) return;


        arrow.addEventListener(
            "click",
            () => {

                /*
                   The href already sends the user
                   to 404.html.
                */

            }
        );


        /*
           On mobile there is no real hover.
           Tapping the card gives the same
           green visual effect.
        */

        card.addEventListener(
            "touchstart",
            () => {

                cards.forEach(
                    (item) => {

                        if (
                            item !== card
                        ) {

                            item.classList.remove(
                                "mobile-active"
                            );

                        }

                    }
                );


                card.classList.toggle(
                    "mobile-active"
                );

            },
            {
                passive: true
            }
        );

    });

});


/* =========================================================
   AUDIT MISSION - GSAP ANIMATIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector("#audit-mission");

    if (!section) return;


    const image =
        section.querySelector(
            ".audit-mission-image-reveal"
        );


    const imageElement =
        section.querySelector(
            ".audit-mission-image img"
        );


    const content =
        section.querySelectorAll(
            ".mission-reveal"
        );


    /* =====================================================
       INITIAL IMAGE STATE
    ===================================================== */

    gsap.set(image, {
        x: -100,
        opacity: 0
    });


    gsap.set(imageElement, {
        scale: 1.08
    });


    /* =====================================================
       INITIAL CONTENT STATE
    ===================================================== */

    gsap.set(content, {
        x: 90,
        opacity: 0
    });


    /* =====================================================
       SCROLL ANIMATION
    ===================================================== */

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;


                    const timeline =
                        gsap.timeline();


                    /* IMAGE FROM LEFT */

                    timeline.to(image, {

                        x: 0,

                        opacity: 1,

                        duration: 1.05,

                        ease: "power3.out"

                    });


                    /* IMAGE ZOOM */

                    timeline.to(imageElement, {

                        scale: 1,

                        duration: 1.25,

                        ease: "power3.out"

                    }, "-=1");


                    /* CONTENT FROM RIGHT */

                    timeline.to(content, {

                        x: 0,

                        opacity: 1,

                        duration: 0.75,

                        stagger: 0.12,

                        ease: "power3.out"

                    }, "-=0.75");


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.18
            }
        );


    observer.observe(section);


    /* =====================================================
       SUBTLE IMAGE MOVEMENT
    ===================================================== */

    gsap.to(imageElement, {

        y: -5,

        duration: 4,

        ease: "sine.inOut",

        repeat: -1,

        yoyo: true

    });


});


/* =========================================================
   STACKLY AUDIT & ASSURANCE
   SERVICES TIMELINE - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {

        console.warn(
            "GSAP is not loaded."
        );

        return;
    }


    const section =
        document.querySelector(
            "#audit-process"
        );


    if (!section) return;


    const label =
        section.querySelector(
            ".audit-services-timeline-label"
        );


    const title =
        section.querySelector(
            ".audit-services-timeline-header h2"
        );


    const description =
        section.querySelector(
            ".audit-services-timeline-header p"
        );


    const cards =
        section.querySelectorAll(
            ".audit-services-timeline-card"
        );


    const numbers =
        section.querySelectorAll(
            ".audit-services-timeline-number"
        );


    const icons =
        section.querySelectorAll(
            ".audit-services-timeline-icon"
        );


    const progress =
        section.querySelector(
            ".audit-services-timeline-line span"
        );


    let played = false;


    /* =====================================================
       INITIAL HEADER
    ===================================================== */

    gsap.set(label, {

        y: -25,

        opacity: 0

    });


    gsap.set(title, {

        y: 35,

        opacity: 0

    });


    gsap.set(description, {

        y: 30,

        opacity: 0

    });


    /* =====================================================
       INITIAL CARDS
    ===================================================== */

    cards.forEach((card) => {

        const item =
            card.closest(
                ".audit-services-timeline-item"
            );


        if (
            item.classList.contains(
                "timeline-left"
            )
        ) {

            gsap.set(card, {

                x: -100,

                opacity: 0

            });

        } else {

            gsap.set(card, {

                x: 100,

                opacity: 0

            });

        }

    });


    /* =====================================================
       INITIAL NUMBERS
    ===================================================== */

    gsap.set(numbers, {

        opacity: 0,

        scale: 0.5

    });


    gsap.set(progress, {

        height: "0%"

    });


    /* =====================================================
       OBSERVER
    ===================================================== */

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        !entry.isIntersecting ||
                        played
                    ) {
                        return;
                    }


                    played = true;


                    const tl =
                        gsap.timeline();


                    /* LABEL */

                    tl.to(label, {

                        y: 0,

                        opacity: 1,

                        duration: 0.55,

                        ease:
                            "power3.out"

                    });


                    /* TITLE */

                    tl.to(title, {

                        y: 0,

                        opacity: 1,

                        duration: 0.75,

                        ease:
                            "power3.out"

                    }, "-=0.25");


                    /* DESCRIPTION */

                    tl.to(description, {

                        y: 0,

                        opacity: 1,

                        duration: 0.65,

                        ease:
                            "power3.out"

                    }, "-=0.35");


                    /* TIMELINE LINE */

                    tl.to(progress, {

                        height: "100%",

                        duration: 2.6,

                        ease:
                            "power2.inOut"

                    }, "-=0.15");


                    /* NUMBERS */

                    tl.to(numbers, {

                        opacity: 1,

                        scale: 1,

                        duration: 0.5,

                        stagger: 0.28,

                        ease:
                            "back.out(1.7)"

                    }, "-=2.35");


                    /* CARDS */

                    cards.forEach(
                        (card, index) => {

                            const item =
                                card.closest(
                                    ".audit-services-timeline-item"
                                );


                            const fromLeft =
                                item.classList.contains(
                                    "timeline-left"
                                );


                            gsap.to(card, {

                                x: 0,

                                opacity: 1,

                                duration: 0.8,

                                delay:
                                    0.35 +
                                    (index * 0.25),

                                ease:
                                    "power3.out"

                            });

                        }
                    );


                    /* ICONS */

                    gsap.fromTo(
                        icons,
                        {
                            scale: 0.6,
                            rotate: -15
                        },
                        {
                            scale: 1,
                            rotate: 0,

                            duration: 0.55,

                            stagger: 0.25,

                            delay: 0.7,

                            ease:
                                "back.out(1.7)"
                        }
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );


    observer.observe(section);


    /* =====================================================
       ICON HOVER
    ===================================================== */

    icons.forEach((icon) => {

        icon.addEventListener(
            "mouseenter",
            () => {

                gsap.to(icon, {

                    rotate: 8,

                    scale: 1.08,

                    duration: 0.3,

                    ease:
                        "power2.out"

                });

            }
        );


        icon.addEventListener(
            "mouseleave",
            () => {

                gsap.to(icon, {

                    rotate: 0,

                    scale: 1,

                    duration: 0.3,

                    ease:
                        "power2.out"

                });

            }
        );

    });

});


/* =========================================================
   STACKLY AUDIT & ASSURANCE
   SERVICES FAQ - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {

        console.warn(
            "GSAP is not loaded."
        );

        return;
    }


    const section =
        document.querySelector(
            "#audit-faq"
        );


    if (!section) return;


    const label =
        section.querySelector(
            ".audit-faq-label"
        );


    const title =
        section.querySelector(
            ".audit-faq-header h2"
        );


    const description =
        section.querySelector(
            ".audit-faq-header p"
        );


    const image =
        section.querySelector(
            ".audit-faq-image"
        );


    const imageElement =
        section.querySelector(
            ".audit-faq-image img"
        );


    const faqList =
        section.querySelector(
            ".audit-faq-list"
        );


    const faqItems =
        section.querySelectorAll(
            ".audit-faq-item"
        );


    /* =====================================================
       INITIAL GSAP STATES
    ===================================================== */

    gsap.set(label, {

        y: -25,

        opacity: 0

    });


    gsap.set(title, {

        y: 35,

        opacity: 0

    });


    gsap.set(description, {

        y: 30,

        opacity: 0

    });


    gsap.set(image, {

        y: 100,

        opacity: 0

    });


    gsap.set(faqList, {

        x: 100,

        opacity: 0

    });


    /* =====================================================
       SECTION REVEAL
    ===================================================== */

    let played = false;


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        !entry.isIntersecting ||
                        played
                    ) {
                        return;
                    }


                    played = true;


                    const tl =
                        gsap.timeline();


                    /* LABEL */

                    tl.to(label, {

                        y: 0,

                        opacity: 1,

                        duration: 0.5,

                        ease:
                            "power3.out"

                    });


                    /* TITLE */

                    tl.to(title, {

                        y: 0,

                        opacity: 1,

                        duration: 0.75,

                        ease:
                            "power3.out"

                    }, "-=0.2");


                    /* DESCRIPTION */

                    tl.to(description, {

                        y: 0,

                        opacity: 1,

                        duration: 0.6,

                        ease:
                            "power3.out"

                    }, "-=0.3");


                    /* IMAGE */

                    tl.to(image, {

                        y: 0,

                        opacity: 1,

                        duration: 1,

                        ease:
                            "power3.out"

                    }, "-=0.15");


                    /* FAQ */

                    tl.to(faqList, {

                        x: 0,

                        opacity: 1,

                        duration: 0.9,

                        ease:
                            "power3.out"

                    }, "-=0.7");


                    /* IMAGE SCALE */

                    gsap.fromTo(
                        imageElement,
                        {
                            scale: 1.08
                        },
                        {
                            scale: 1,

                            duration: 1.4,

                            ease:
                                "power3.out"
                        }
                    );


                    observer.unobserve(
                        section
                    );

                });

            },
            {
                threshold: 0.15
            }
        );


    observer.observe(section);


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    faqItems.forEach((item) => {

        const question =
            item.querySelector(
                ".audit-faq-question"
            );


        const answer =
            item.querySelector(
                ".audit-faq-answer"
            );


        const icon =
            item.querySelector(
                ".audit-faq-icon i"
            );


        question.addEventListener(
            "click",
            () => {

                const isActive =
                    item.classList.contains(
                        "active"
                    );


                /* =========================================
                   CLOSE ALL OTHER ITEMS
                ========================================== */

                faqItems.forEach(
                    (otherItem) => {

                        if (
                            otherItem !== item
                        ) {

                            const otherAnswer =
                                otherItem.querySelector(
                                    ".audit-faq-answer"
                                );


                            const otherQuestion =
                                otherItem.querySelector(
                                    ".audit-faq-question"
                                );


                            const otherIcon =
                                otherItem.querySelector(
                                    ".audit-faq-icon i"
                                );


                            otherItem.classList.remove(
                                "active"
                            );


                            otherQuestion.setAttribute(
                                "aria-expanded",
                                "false"
                            );


                            gsap.to(
                                otherAnswer,
                                {
                                    height: 0,
                                    opacity: 0,
                                    duration: 0.35,
                                    ease:
                                        "power2.inOut"
                                }
                            );


                            gsap.to(
                                otherIcon,
                                {
                                    rotation: 0,
                                    duration: 0.25
                                }
                            );

                        }

                    }
                );


                /* =========================================
                   CLOSE CURRENT
                ========================================== */

                if (isActive) {

                    item.classList.remove(
                        "active"
                    );


                    question.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    gsap.to(answer, {

                        height: 0,

                        opacity: 0,

                        duration: 0.4,

                        ease:
                            "power2.inOut"

                    });


                    gsap.to(icon, {

                        rotation: 0,

                        duration: 0.3,

                        ease:
                            "power2.out"

                    });


                    return;
                }


                /* =========================================
                   OPEN CURRENT
                ========================================== */

                item.classList.add(
                    "active"
                );


                question.setAttribute(
                    "aria-expanded",
                    "true"
                );


                gsap.set(answer, {

                    height: "auto"

                });


                const answerHeight =
                    answer.scrollHeight;


                gsap.set(answer, {

                    height: 0

                });


                gsap.to(answer, {

                    height:
                        answerHeight,

                    opacity: 1,

                    duration: 0.45,

                    ease:
                        "power2.out"

                });


                gsap.to(icon, {

                    rotation: 45,

                    duration: 0.3,

                    ease:
                        "power2.out"

                });

            }
        );

    });

});


/* =========================================================
   AUDIT CTA - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector("#audit-cta");

    if (!section) return;


    const background =
        section.querySelector(
            ".audit-cta-background img"
        );

    const content =
        section.querySelectorAll(
            ".audit-cta-reveal"
        );

    const button =
        section.querySelector(
            ".audit-cta-button"
        );

    const arrow =
        section.querySelector(
            ".audit-cta-arrow"
        );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    gsap.set(background, {
        scale: 1.08
    });

    gsap.set(content, {
        y: 35,
        opacity: 0
    });


    /* =====================================================
       REVEAL
    ===================================================== */

    let played = false;


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        !entry.isIntersecting ||
                        played
                    ) {
                        return;
                    }


                    played = true;


                    const tl =
                        gsap.timeline();


                    /* BACKGROUND */

                    tl.to(background, {

                        scale: 1,

                        duration: 1.4,

                        ease: "power3.out"

                    })


                    /* CONTENT */

                    .to(content, {

                        y: 0,

                        opacity: 1,

                        duration: 0.7,

                        ease: "power3.out",

                        stagger: 0.13

                    }, "-=0.85");

                });

            },
            {
                threshold: 0.25
            }
        );


    observer.observe(section);


    /* =====================================================
       BUTTON ARROW
    ===================================================== */

    button.addEventListener(
        "mouseenter",
        () => {

            gsap.to(arrow, {

                x: 4,

                duration: 0.3,

                ease: "power2.out"

            });

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            gsap.to(arrow, {

                x: 0,

                duration: 0.3,

                ease: "power2.out"

            });

        }
    );

});