/* =========================================================
   AUDIT ABOUT HERO - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const hero = document.querySelector("#about-hero");

    if (!hero) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const background = hero.querySelector(
        ".audit-about-hero-bg img"
    );

    const label = hero.querySelector(
        ".audit-about-hero-label"
    );

    const title = hero.querySelector(
        ".audit-about-hero-title"
    );

    const description = hero.querySelector(
        ".audit-about-hero-description"
    );

    const button = hero.querySelector(
        ".audit-about-hero-button-wrap"
    );


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (
        !background ||
        !label ||
        !title ||
        !description ||
        !button
    ) {
        console.warn(
            "About hero elements are missing."
        );
        return;
    }


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(background, {
        scale: 1.08
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
       MAIN REVEAL TIMELINE
    ===================================================== */

    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    /* BACKGROUND */

    tl.to(background, {

        scale: 1,

        duration: 1.4,

        ease: "power3.out"

    })


    /* LABEL */

    .to(label, {

        y: 0,

        opacity: 1,

        duration: 0.6

    }, "-=0.75")


    /* HEADING */

    .to(title, {

        y: 0,

        opacity: 1,

        duration: 0.85

    }, "-=0.30")


    /* DESCRIPTION */

    .to(description, {

        y: 0,

        opacity: 1,

        duration: 0.7

    }, "-=0.35")


    /* BUTTON */

    .to(button, {

        y: 0,

        opacity: 1,

        duration: 0.65

    }, "-=0.25");


    /* =====================================================
       SUBTLE BACKGROUND MOVEMENT
    ===================================================== */

    gsap.to(background, {

        scale: 1.035,

        duration: 8,

        ease: "sine.inOut",

        repeat: -1,

        yoyo: true,

        delay: 1.4

    });


    /* =====================================================
       BUTTON ARROW HOVER
    ===================================================== */

    const buttonArrow = hero.querySelector(
        ".audit-about-hero-button-arrow"
    );

    if (buttonArrow) {

        button.addEventListener(
            "mouseenter",
            () => {

                gsap.to(buttonArrow, {

                    x: 5,

                    duration: 0.3,

                    ease: "power2.out"

                });

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                gsap.to(buttonArrow, {

                    x: 0,

                    duration: 0.3,

                    ease: "power2.out"

                });

            }
        );

    }

});


/* =========================================================
   AUDIT ABOUT FIRM - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector("#audit-firm");

    if (!section) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const imageWrap =
        section.querySelector(
            ".audit-firm-image-wrap"
        );

    const image =
        section.querySelector(
            ".audit-firm-image"
        );

    const card =
        section.querySelector(
            ".audit-firm-card"
        );

    const content =
        section.querySelector(
            ".audit-firm-content"
        );

    const label =
        section.querySelector(
            ".audit-firm-label"
        );

    const title =
        section.querySelector(
            ".audit-firm-title"
        );

    const description =
        section.querySelector(
            ".audit-firm-description"
        );

    const button =
        section.querySelector(
            ".audit-firm-button-wrap"
        );

    const stats =
        section.querySelector(
            ".audit-firm-stats"
        );

    const statNumbers =
        section.querySelectorAll(
            ".audit-firm-stat-number"
        );


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(imageWrap, {
        x: -90,
        rotation: -5,
        scale: 0.92,
        opacity: 0
    });

    gsap.set(image, {
        scale: 1.08
    });

    gsap.set(card, {
        x: -80,
        y: 35,
        opacity: 0
    });

    gsap.set(content, {
        x: 90,
        opacity: 0
    });

    gsap.set(
        [
            label,
            title,
            description,
            button,
            stats
        ],
        {
            y: 30,
            opacity: 0
        }
    );


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

            duration: 2,

            ease: "power2.out",

            onUpdate: () => {

                element.textContent =
                    Math.floor(
                        counter.value
                    ).toLocaleString() + suffix;

            },

            onComplete: () => {

                element.textContent =
                    target.toLocaleString() + suffix;

            }

        });

    }


    /* =====================================================
       OBSERVER
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


                    /* =================================================
                       MAIN TIMELINE
                    ================================================= */

                    const tl =
                        gsap.timeline();


                    /* IMAGE */

                    tl.to(imageWrap, {

                        x: 0,

                        rotation: 0,

                        scale: 1,

                        opacity: 1,

                        duration: 1.15,

                        ease: "power3.out"

                    })


                    /* IMAGE INSIDE */

                    .to(image, {

                        scale: 1,

                        duration: 1.2,

                        ease: "power3.out"

                    }, "-=0.95")


                    /* CARD */

                    .to(card, {

                        x: 0,

                        y: 0,

                        opacity: 1,

                        duration: 0.85,

                        ease: "back.out(1.35)"

                    }, "-=0.65")


                    /* RIGHT CONTENT */

                    .to(content, {

                        x: 0,

                        opacity: 1,

                        duration: 0.9,

                        ease: "power3.out"

                    }, "-=0.75")


                    /* LABEL */

                    .to(label, {

                        y: 0,

                        opacity: 1,

                        duration: 0.5,

                        ease: "power3.out"

                    }, "-=0.65")


                    /* TITLE */

                    .to(title, {

                        y: 0,

                        opacity: 1,

                        duration: 0.7,

                        ease: "power3.out"

                    }, "-=0.3")


                    /* DESCRIPTION */

                    .to(description, {

                        y: 0,

                        opacity: 1,

                        duration: 0.65,

                        ease: "power3.out"

                    }, "-=0.3")


                    /* BUTTON */

                    .to(button, {

                        y: 0,

                        opacity: 1,

                        duration: 0.55,

                        ease: "power3.out"

                    }, "-=0.25")


                    /* STATS */

                    .to(stats, {

                        y: 0,

                        opacity: 1,

                        duration: 0.55,

                        ease: "power3.out",

                        onComplete: () => {

                            statNumbers.forEach(
                                animateCounter
                            );

                        }

                    }, "-=0.2");

                });

            },
            {
                threshold: 0.2
            }
        );


    observer.observe(section);


    /* =====================================================
       BUTTON ARROW
    ===================================================== */

    const buttonArrow =
        section.querySelector(
            ".audit-firm-button-arrow"
        );

    if (buttonArrow) {

        button.addEventListener(
            "mouseenter",
            () => {

                gsap.to(buttonArrow, {

                    x: 5,

                    duration: 0.3,

                    ease: "power2.out"

                });

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                gsap.to(buttonArrow, {

                    x: 0,

                    duration: 0.3,

                    ease: "power2.out"

                });

            }
        );

    }

});


/* =========================================================
   AUDIT PRINCIPLES - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector(
            "#audit-principles"
        );

    if (!section) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const label =
        section.querySelector(
            ".audit-principles-label"
        );

    const heading =
        section.querySelector(
            ".audit-principles-heading h2"
        );

    const cards =
        section.querySelectorAll(
            ".audit-principle-card"
        );

    const images =
        section.querySelectorAll(
            ".audit-principle-image img"
        );

    const bodies =
        section.querySelectorAll(
            ".audit-principle-body"
        );


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(label, {
        y: 25,
        opacity: 0
    });


    gsap.set(heading, {
        y: 35,
        opacity: 0
    });


    gsap.set(cards, {
        y: 55,
        opacity: 0
    });


    /*
     * Images initially hide above their
     * containers.
     */

    gsap.set(images, {
        y: -80,
        opacity: 0,
        scale: 1.08
    });


    gsap.set(bodies, {
        y: 25,
        opacity: 0
    });


    /* =====================================================
       INTERSECTION OBSERVER
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


                    /* =================================================
                       MAIN TIMELINE
                    ================================================= */

                    const tl =
                        gsap.timeline();


                    /* LABEL */

                    tl.to(label, {

                        y: 0,

                        opacity: 1,

                        duration: 0.55,

                        ease: "power3.out"

                    })


                    /* HEADING */

                    .to(heading, {

                        y: 0,

                        opacity: 1,

                        duration: 0.75,

                        ease: "power3.out"

                    }, "-=0.3")


                    /* CARDS */

                    .to(cards, {

                        y: 0,

                        opacity: 1,

                        duration: 0.7,

                        ease: "power3.out",

                        stagger: 0.15

                    }, "-=0.25")


                    /* =================================================
                       IMAGES FROM TOP
                    ================================================= */

                    .to(images, {

                        y: 0,

                        opacity: 1,

                        scale: 1,

                        duration: 0.9,

                        ease: "power3.out",

                        stagger: 0.15

                    }, "-=0.55")


                    /* =================================================
                       CARD CONTENT
                    ================================================= */

                    .to(bodies, {

                        y: 0,

                        opacity: 1,

                        duration: 0.6,

                        ease: "power3.out",

                        stagger: 0.12

                    }, "-=0.45");

                });

            },
            {
                threshold: 0.18
            }
        );


    observer.observe(section);


    /* =====================================================
       CARD HOVER IMAGE
    ===================================================== */

    cards.forEach((card, index) => {

        const image = images[index];

        card.addEventListener(
            "mouseenter",
            () => {

                gsap.to(image, {

                    scale: 1.06,

                    duration: 0.6,

                    ease: "power2.out"

                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                gsap.to(image, {

                    scale: 1,

                    duration: 0.6,

                    ease: "power2.out"

                });

            }
        );

    });

});


/* =========================================================
   AUDIT GUIDANCE CTA - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector("#audit-guidance");

    if (!section) return;


    const background =
        section.querySelector(
            ".audit-guidance-bg img"
        );

    const content =
        section.querySelector(
            ".audit-guidance-content"
        );

    const label =
        section.querySelector(
            ".audit-guidance-label"
        );

    const title =
        section.querySelector(
            ".audit-guidance-title"
        );

    const contactItems =
        section.querySelectorAll(
            ".audit-guidance-info, .audit-guidance-button"
        );


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(background, {
        scale: 1.08
    });

    gsap.set(content, {
        x: 80,
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

    gsap.set(contactItems, {
        y: 25,
        opacity: 0
    });


    /* =====================================================
       OBSERVER
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


                    /* MAIN CONTENT */

                    .to(content, {

                        x: 0,

                        opacity: 1,

                        duration: 0.85,

                        ease: "power3.out"

                    }, "-=0.9")


                    /* LABEL */

                    .to(label, {

                        y: 0,

                        opacity: 1,

                        duration: 0.5,

                        ease: "power3.out"

                    }, "-=0.5")


                    /* TITLE */

                    .to(title, {

                        y: 0,

                        opacity: 1,

                        duration: 0.75,

                        ease: "power3.out"

                    }, "-=0.25")


                    /* CONTACT + BUTTON */

                    .to(contactItems, {

                        y: 0,

                        opacity: 1,

                        duration: 0.55,

                        ease: "power3.out",

                        stagger: 0.12

                    }, "-=0.2");

                });

            },
            {
                threshold: 0.2
            }
        );


    observer.observe(section);


    /* =====================================================
       SUBTLE BACKGROUND MOVEMENT
    ===================================================== */

    gsap.to(background, {

        scale: 1.035,

        duration: 8,

        ease: "sine.inOut",

        repeat: -1,

        yoyo: true,

        delay: 1.4

    });

});


/* =========================================================
   STACKLY AUDIT TEAM
   INFINITE AUTO SLIDER + GSAP REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    const section = document.querySelector("#audit-team");

    if (!section) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const label = section.querySelector(
        ".audit-team-label"
    );

    const heading = section.querySelector(
        ".audit-team-heading h2"
    );

    const viewport = section.querySelector(
        ".audit-team-viewport"
    );

    const track = section.querySelector(
        ".audit-team-track"
    );

    if (!viewport || !track) return;


    /* =====================================================
       ORIGINAL CARDS
    ===================================================== */

    let originalCards = Array.from(
        track.querySelectorAll(
            ".audit-team-card"
        )
    );

    if (!originalCards.length) return;


    /* =====================================================
       MOBILE CHECK
    ===================================================== */

    function isMobile() {
        return window.innerWidth <= 768;
    }


    /* =====================================================
       CLONE CARDS
       
       We clone the first 4 cards so the slider
       can move continuously without showing an
       empty space.
    ===================================================== */

    function createClones() {

        /*
         * Remove previously created clones.
         */

        track
            .querySelectorAll(
                ".audit-team-card.audit-clone"
            )
            .forEach((clone) => {
                clone.remove();
            });


        /*
         * Clone all 4 first cards.
         */

        const cloneCount = isMobile()
            ? originalCards.length
            : 4;


        for (
            let i = 0;
            i < cloneCount;
            i++
        ) {

            const clone =
                originalCards[i % originalCards.length]
                    .cloneNode(true);


            clone.classList.add(
                "audit-clone"
            );


            /*
             * Prevent cloned cards from
             * starting with old GSAP styles.
             */

            clone.style.opacity = "0";

            clone.style.transform =
                "translateY(0)";


            track.appendChild(clone);

        }

    }


    createClones();


    /* =====================================================
       ALL CARDS
    ===================================================== */

    function getAllCards() {

        return Array.from(
            track.querySelectorAll(
                ".audit-team-card"
            )
        );

    }


    /* =====================================================
       CARD WIDTH
    ===================================================== */

    function setCardSizes() {

        const cards = getAllCards();

        if (!cards.length) return;


        /*
         * MOBILE
         * One complete card.
         */

        if (isMobile()) {

            const width =
                viewport.clientWidth;


            cards.forEach((card) => {

                card.style.flex =
                    `0 0 ${width}px`;

                card.style.width =
                    `${width}px`;

            });


            /*
             * No gap on mobile.
             */

            track.style.gap = "0";

            track.style.paddingLeft = "0";

            return;
        }


        /*
         * DESKTOP
         *
         * Four complete cards.
         */

        const gap = 34;

        const viewportWidth =
            viewport.clientWidth;


        const cardWidth =
            (
                viewportWidth -
                (gap * 3)
            ) / 4;


        cards.forEach((card) => {

            card.style.flex =
                `0 0 ${cardWidth}px`;

            card.style.width =
                `${cardWidth}px`;

        });


        track.style.gap =
            `${gap}px`;

        track.style.paddingLeft =
            "0";

    }


    setCardSizes();


    /* =====================================================
       GSAP INITIAL REVEAL
    ===================================================== */

    gsap.set(label, {
        y: 25,
        opacity: 0
    });

    gsap.set(heading, {
        y: 35,
        opacity: 0
    });


    const allCards =
        getAllCards();


    gsap.set(allCards, {
        y: 80,
        opacity: 0
    });


    /* =====================================================
       REVEAL SECTION
    ===================================================== */

    let revealPlayed = false;


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        !entry.isIntersecting ||
                        revealPlayed
                    ) {
                        return;
                    }


                    revealPlayed = true;


                    const tl =
                        gsap.timeline();


                    /* LABEL */

                    tl.to(label, {

                        y: 0,

                        opacity: 1,

                        duration: 0.55,

                        ease: "power3.out"

                    })


                    /* HEADING */

                    .to(heading, {

                        y: 0,

                        opacity: 1,

                        duration: 0.75,

                        ease: "power3.out"

                    }, "-=0.25")


                    /* CARDS FROM BOTTOM */

                    .to(allCards, {

                        y: 0,

                        opacity: 1,

                        duration: 0.7,

                        ease: "power3.out",

                        stagger: 0.08

                    }, "-=0.15");


                    /*
                     * Start carousel only after
                     * cards are visible.
                     */

                    tl.call(() => {

                        startAutoSlide();

                    });

                });

            },
            {
                threshold: 0.15
            }
        );


    observer.observe(section);


    /* =====================================================
       CAROUSEL VARIABLES
    ===================================================== */

    let currentIndex = 0;

    let autoSlideTimer = null;

    let isAnimating = false;


    /* =====================================================
       GET STEP
    ===================================================== */

    function getStep() {

        const cards =
            getAllCards();

        if (!cards.length) {
            return 0;
        }


        const cardWidth =
            cards[0].getBoundingClientRect().width;


        const gap =
            isMobile()
                ? 0
                : 34;


        return cardWidth + gap;

    }


    /* =====================================================
       MOVE ONE CARD
    ===================================================== */

    function moveOneCard() {

        if (isAnimating) return;


        isAnimating = true;


        const totalOriginal =
            originalCards.length;


        /*
         * Move one card every time.
         */

        currentIndex++;


        const step =
            getStep();


        const distance =
            currentIndex * step;


        gsap.to(track, {

            x: -distance,

            duration: 0.9,

            ease: "power3.inOut",

            onComplete: () => {

                /*
                 * Desktop:
                 *
                 * After reaching the position
                 * where cloned cards represent
                 * the first 4 cards, reset to
                 * the original beginning.
                 */

                if (
                    !isMobile() &&
                    currentIndex >= totalOriginal
                ) {

                    currentIndex = 0;


                    gsap.set(track, {
                        x: 0
                    });

                }


                /*
                 * Mobile:
                 *
                 * After the fifth card's clone
                 * is reached, reset.
                 */

                if (
                    isMobile() &&
                    currentIndex >= totalOriginal
                ) {

                    currentIndex = 0;


                    gsap.set(track, {
                        x: 0
                    });

                }


                isAnimating = false;

            }

        });

    }


    /* =====================================================
       AUTO SLIDE
       
       EXACTLY 3 SECONDS
    ===================================================== */

    function startAutoSlide() {

        stopAutoSlide();


        autoSlideTimer =
            setInterval(() => {

                moveOneCard();

            }, 3000);

    }


    function stopAutoSlide() {

        if (autoSlideTimer) {

            clearInterval(
                autoSlideTimer
            );

            autoSlideTimer = null;

        }

    }


    /* =====================================================
       RESIZE
    ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(() => {

                    stopAutoSlide();


                    /*
                     * Rebuild clones because
                     * desktop/mobile structure
                     * can change.
                     */

                    createClones();

                    setCardSizes();


                    currentIndex = 0;

                    isAnimating = false;


                    gsap.set(track, {
                        x: 0
                    });


                    /*
                     * Restore visible cards.
                     */

                    const cards =
                        getAllCards();


                    gsap.set(cards, {
                        y: 0,
                        opacity: 1
                    });


                    if (revealPlayed) {

                        startAutoSlide();

                    }

                }, 250);

        }
    );


    /* =====================================================
       MOBILE SHARE BUTTON
    ===================================================== */

    function setupShareButtons() {

        const shareAreas =
            section.querySelectorAll(
                ".audit-team-share"
            );


        shareAreas.forEach((shareArea) => {

            const button =
                shareArea.querySelector(
                    ".audit-share-button"
                );


            if (!button) return;


            let hideTimer;


            button.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                    event.stopPropagation();


                    /*
                     * Desktop uses hover.
                     */

                    if (!isMobile()) {
                        return;
                    }


                    /*
                     * Close all other
                     * social menus.
                     */

                    shareAreas.forEach(
                        (item) => {

                            if (
                                item !== shareArea
                            ) {

                                item.classList.remove(
                                    "is-open"
                                );

                            }

                        }
                    );


                    /*
                     * Toggle current.
                     */

                    shareArea.classList.toggle(
                        "is-open"
                    );


                    clearTimeout(
                        hideTimer
                    );


                    /*
                     * Automatically hide
                     * after 3 seconds.
                     */

                    if (
                        shareArea.classList.contains(
                            "is-open"
                        )
                    ) {

                        hideTimer =
                            setTimeout(() => {

                                shareArea.classList.remove(
                                    "is-open"
                                );

                            }, 3000);

                    }

                }
            );

        });

    }


    setupShareButtons();


    /* =====================================================
       CLOSE SOCIAL ICONS OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        (event) => {

            if (
                !section.contains(
                    event.target
                )
            ) {

                section
                    .querySelectorAll(
                        ".audit-team-share.is-open"
                    )
                    .forEach((item) => {

                        item.classList.remove(
                            "is-open"
                        );

                    });

            }

        }
    );


    /* =====================================================
       OPTIONAL PAUSE WHILE HOVERING
       
       Desktop only.
    ===================================================== */

    section.addEventListener(
        "mouseenter",
        () => {

            if (!isMobile()) {
                stopAutoSlide();
            }

        }
    );


    section.addEventListener(
        "mouseleave",
        () => {

            if (
                !isMobile() &&
                revealPlayed
            ) {

                startAutoSlide();

            }

        }
    );

});

/* =========================================================
   STACKLY AUDIT & ASSURANCE
   EXPERIENCE SECTION - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector(
            "#audit-experience"
        );


    if (!section) return;


    const image =
        section.querySelector(
            ".audit-experience-image"
        );


    const content =
        section.querySelector(
            ".audit-experience-content"
        );


    const label =
        section.querySelector(
            ".audit-experience-label"
        );


    const title =
        section.querySelector(
            ".audit-experience-title"
        );


    const numberRow =
        section.querySelector(
            ".audit-experience-number-row"
        );


    const divider =
        section.querySelector(
            ".audit-experience-divider"
        );


    const description =
        section.querySelector(
            ".audit-experience-description"
        );


    const button =
        section.querySelector(
            ".audit-experience-button-wrap"
        );


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(image, {

        y: 100,

        opacity: 0

    });


    gsap.set(content, {

        x: 100,

        opacity: 0

    });


    gsap.set(label, {

        y: 25,

        opacity: 0

    });


    gsap.set(title, {

        y: 30,

        opacity: 0

    });


    gsap.set(numberRow, {

        y: 30,

        opacity: 0

    });


    gsap.set(divider, {

        scaleX: 0,

        transformOrigin: "left center"

    });


    gsap.set(description, {

        y: 25,

        opacity: 0

    });


    gsap.set(button, {

        y: 25,

        opacity: 0

    });


    /* =====================================================
       ANIMATION
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


                    /* IMAGE FROM BOTTOM */

                    tl.to(image, {

                        y: 0,

                        opacity: 1,

                        duration: 1.1,

                        ease:
                            "power3.out"

                    })


                    /* RIGHT CONTENT */

                    .to(content, {

                        x: 0,

                        opacity: 1,

                        duration: 0.9,

                        ease:
                            "power3.out"

                    }, "-=0.65")


                    /* LABEL */

                    .to(label, {

                        y: 0,

                        opacity: 1,

                        duration: 0.5,

                        ease:
                            "power3.out"

                    }, "-=0.45")


                    /* TITLE */

                    .to(title, {

                        y: 0,

                        opacity: 1,

                        duration: 0.7,

                        ease:
                            "power3.out"

                    }, "-=0.25")


                    /* 20+ */

                    .to(numberRow, {

                        y: 0,

                        opacity: 1,

                        duration: 0.65,

                        ease:
                            "power3.out"

                    }, "-=0.25")


                    /* DIVIDER */

                    .to(divider, {

                        scaleX: 1,

                        duration: 0.6,

                        ease:
                            "power2.out"

                    }, "-=0.15")


                    /* DESCRIPTION */

                    .to(description, {

                        y: 0,

                        opacity: 1,

                        duration: 0.65,

                        ease:
                            "power3.out"

                    }, "-=0.25")


                    /* BUTTON */

                    .to(button, {

                        y: 0,

                        opacity: 1,

                        duration: 0.6,

                        ease:
                            "power3.out"

                    }, "-=0.25");

                });

            },
            {
                threshold: 0.18
            }
        );


    observer.observe(section);


    /* =====================================================
       BUTTON ARROW
    ===================================================== */

    const cta =
        section.querySelector(
            ".audit-experience-button"
        );


    const arrow =
        section.querySelector(
            ".audit-experience-arrow"
        );


    if (cta && arrow) {

        cta.addEventListener(
            "mouseenter",
            () => {

                gsap.to(arrow, {

                    x: 4,

                    duration: 0.25,

                    ease:
                        "power2.out"

                });

            }
        );


        cta.addEventListener(
            "mouseleave",
            () => {

                gsap.to(arrow, {

                    x: 0,

                    duration: 0.25,

                    ease:
                        "power2.out"

                });

            }
        );

    }

});