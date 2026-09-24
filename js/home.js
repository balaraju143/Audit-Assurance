/* =========================================================
   STACKLY
   AUDIT & ASSURANCE
   HOME HERO GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       CHECK GSAP
    ====================================================== */

    if (typeof gsap === "undefined") {

        console.warn(
            "GSAP is not loaded."
        );

        return;

    }


    /* =====================================================
       HERO
    ====================================================== */

    const hero =
        document.querySelector(".audit-hero");


    if (!hero) {

        return;

    }


    /* =====================================================
       MAIN TIMELINE
    ====================================================== */

    const heroTimeline =
        gsap.timeline({

            defaults: {
                ease: "power3.out"
            }

        });


    /* =====================================================
       BACKGROUND IMAGE
    ====================================================== */

    heroTimeline.fromTo(

        ".audit-hero-image img",

        {
            scale: 1.14,

            opacity: 0
        },

        {
            scale: 1.08,

            opacity: 1,

            duration: 2,

            ease: "power2.out"
        },

        0

    );


    /* =====================================================
       TOP LABEL
    ====================================================== */

    heroTimeline.fromTo(

        ".audit-hero-label",

        {
            opacity: 0,

            y: 25
        },

        {
            opacity: 1,

            y: 0,

            duration: 0.7
        },

        0.45

    );


    /* =====================================================
       TITLE - FIRST LINE
    ====================================================== */

    heroTimeline.fromTo(

        ".hero-title-line:first-child",

        {
            opacity: 0,

            y: 80
        },

        {
            opacity: 1,

            y: 0,

            duration: 0.9,

            ease: "power4.out"
        },

        0.6

    );


    /* =====================================================
       TITLE - SECOND LINE
    ====================================================== */

    heroTimeline.fromTo(

        ".hero-title-line:nth-child(2)",

        {
            opacity: 0,

            y: 90
        },

        {
            opacity: 1,

            y: 0,

            duration: 1,

            ease: "power4.out"
        },

        0.72

    );


    /* =====================================================
       DESCRIPTION
    ====================================================== */

    heroTimeline.fromTo(

        ".audit-hero-description",

        {
            opacity: 0,

            y: 30
        },

        {
            opacity: 1,

            y: 0,

            duration: 0.8
        },

        1.05

    );


    /* =====================================================
       BUTTON
    ====================================================== */

    heroTimeline.fromTo(

        ".audit-hero-buttons",

        {
            opacity: 0,

            y: 25
        },

        {
            opacity: 1,

            y: 0,

            duration: 0.7
        },

        1.25

    );


    /* =====================================================
       FEATURES
    ====================================================== */

    heroTimeline.fromTo(

        ".audit-hero-features",

        {
            opacity: 0,

            y: 25
        },

        {
            opacity: 1,

            y: 0,

            duration: 0.8
        },

        1.4

    );


    /* =====================================================
       CONSULTATION CARD
    ====================================================== */

    heroTimeline.fromTo(

        ".audit-consult-card",

        {
            opacity: 0,

            x: 60,

            y: 30
        },

        {
            opacity: 1,

            x: 0,

            y: 0,

            duration: 0.9,

            ease: "power3.out"
        },

        1.25

    );


    /* =====================================================
       SCROLL INDICATOR
    ====================================================== */

    heroTimeline.fromTo(

        ".audit-scroll-indicator",

        {
            opacity: 0
        },

        {
            opacity: 1,

            duration: 0.6
        },

        1.8

    );


    /* =====================================================
       BUTTON ARROW HOVER
    ====================================================== */

    const heroButton =
        document.querySelector(
            ".audit-hero-btn"
        );


    if (heroButton) {

        const arrow =
            heroButton.querySelector(
                ".audit-arrow"
            );


        heroButton.addEventListener(
            "mouseenter",
            () => {

                gsap.to(

                    arrow,

                    {
                        x: 6,

                        duration: 0.25,

                        ease: "power2.out"
                    }

                );

            }
        );


        heroButton.addEventListener(
            "mouseleave",
            () => {

                gsap.to(

                    arrow,

                    {
                        x: 0,

                        duration: 0.25,

                        ease: "power2.out"
                    }

                );

            }
        );

    }


    /* =====================================================
       BACKGROUND MOUSE PARALLAX
       Desktop only
    ====================================================== */

    hero.addEventListener(
        "mousemove",
        (event) => {

            if (
                window.innerWidth <= 768
            ) {

                return;

            }


            const rect =
                hero.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                )
                /
                rect.width
                -
                0.5;


            const y =
                (
                    event.clientY -
                    rect.top
                )
                /
                rect.height
                -
                0.5;


            gsap.to(

                ".audit-hero-image img",

                {
                    x: x * 8,

                    y: y * 5,

                    duration: 1.2,

                    ease: "power2.out",

                    overwrite: true
                }

            );

        }
    );


    /* =====================================================
       RESET IMAGE
    ====================================================== */

    hero.addEventListener(
        "mouseleave",
        () => {

            gsap.to(

                ".audit-hero-image img",

                {
                    x: 0,

                    y: 0,

                    duration: 1,

                    ease: "power2.out"
                }

            );

        }
    );


});


/* =========================================================
   AUDIT & ASSURANCE - ABOUT SECTION GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    const section = document.querySelector(".audit-about");

    if (!section) return;


    /* =====================================================
       MAIN SECTION TIMELINE
    ===================================================== */

    const aboutTimeline = gsap.timeline({
        paused: true,
        defaults: {
            ease: "power3.out"
        }
    });


    /* =====================================================
       LARGE IMAGE - REVEAL FROM LEFT
    ===================================================== */

    aboutTimeline.to(
        ".audit-about-reveal-left",
        {
            opacity: 1,
            x: 0,
            duration: 1.15,
            ease: "power3.out"
        },
        0
    );


    /* =====================================================
       SMALL IMAGE - REVEAL FROM BOTTOM
    ===================================================== */

    aboutTimeline.to(
        ".audit-about-reveal-bottom",
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        },
        0.35
    );


    /* =====================================================
       RIGHT CONTENT - REVEAL ONE BY ONE
    ===================================================== */

    aboutTimeline.to(
        ".audit-about-label",
        {
            opacity: 1,
            x: 0,
            duration: 0.7
        },
        0.25
    );


    aboutTimeline.to(
        ".audit-about-title",
        {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power4.out"
        },
        0.38
    );


    aboutTimeline.to(
        ".audit-about-description",
        {
            opacity: 1,
            x: 0,
            duration: 0.75
        },
        0.55
    );


    /* Feature items */

    aboutTimeline.to(
        ".audit-about-feature",
        {
            opacity: 1,
            x: 0,
            duration: 0.65,
            stagger: 0.12
        },
        0.7
    );


    /* Button */

    aboutTimeline.to(
        ".audit-about-button-wrap",
        {
            opacity: 1,
            x: 0,
            duration: 0.7
        },
        1.05
    );


    /* Stats */

    aboutTimeline.to(
        ".audit-stat",
        {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.12
        },
        1.15
    );


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    let animationStarted = false;

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting && !animationStarted) {

                    animationStarted = true;

                    aboutTimeline.play();

                    startCounters();

                    observer.unobserve(section);
                }

            });

        },
        {
            threshold: 0.25
        }
    );

    observer.observe(section);


    /* =====================================================
       COUNTER ANIMATION
    ===================================================== */

    function startCounters() {

        const counters = section.querySelectorAll(
            ".audit-stat-number"
        );

        counters.forEach((counter) => {

            const target = Number(
                counter.dataset.count
            );

            const suffix =
                counter.dataset.suffix || "";

            const counterObject = {
                value: 0
            };


            gsap.to(counterObject, {

                value: target,

                duration: 2.2,

                ease: "power2.out",

                onUpdate: () => {

                    const currentValue =
                        Math.floor(counterObject.value);

                    counter.textContent =
                        currentValue.toLocaleString() + suffix;
                },

                onComplete: () => {

                    counter.textContent =
                        target.toLocaleString() + suffix;
                }

            });

        });

    }


    /* =====================================================
       BUTTON ARROW ANIMATION
    ===================================================== */

    const button =
        section.querySelector(".audit-about-button");

    const arrow =
        section.querySelector(".audit-about-arrow");


    if (button && arrow) {

        button.addEventListener("mouseenter", () => {

            gsap.to(arrow, {
                x: 6,
                duration: 0.25,
                ease: "power2.out"
            });

        });


        button.addEventListener("mouseleave", () => {

            gsap.to(arrow, {
                x: 0,
                duration: 0.25,
                ease: "power2.out"
            });

        });

    }


    /* =====================================================
       IMAGE HOVER
    ===================================================== */

    const mainImage =
        section.querySelector(".audit-about-main-image img");

    const smallImage =
        section.querySelector(".audit-about-small-image img");


    if (mainImage) {

        mainImage.addEventListener("mouseenter", () => {

            gsap.to(mainImage, {
                scale: 1.05,
                duration: 0.7,
                ease: "power2.out"
            });

        });


        mainImage.addEventListener("mouseleave", () => {

            gsap.to(mainImage, {
                scale: 1,
                duration: 0.7,
                ease: "power2.out"
            });

        });

    }


    if (smallImage) {

        smallImage.addEventListener("mouseenter", () => {

            gsap.to(smallImage, {
                scale: 1.05,
                duration: 0.7,
                ease: "power2.out"
            });

        });


        smallImage.addEventListener("mouseleave", () => {

            gsap.to(smallImage, {
                scale: 1,
                duration: 0.7,
                ease: "power2.out"
            });

        });

    }

});


/* =========================================================
   AUDIT & ASSURANCE SERVICES CAROUSEL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    const section = document.querySelector(".audit-services");

    if (!section) return;


    const viewport =
        section.querySelector(".audit-services-viewport");

    const track =
        section.querySelector(".audit-services-track");

    const cards =
        section.querySelectorAll(".audit-service-card");

    const dots =
        section.querySelectorAll(".audit-service-dot");

    const nextButton =
        section.querySelector(".audit-slider-next");

    const prevButton =
        section.querySelector(".audit-slider-prev");


    let currentIndex = 0;

    let autoSlide;

    let isAnimating = false;

    let sectionStarted = false;


    /* =====================================================
       CARD WIDTH
    ===================================================== */

    function getCardWidth() {

        if (window.innerWidth <= 768) {

            return viewport.offsetWidth;

        }

         return (
        viewport.offsetWidth - 90
    ) / 4;
    }


    /* =====================================================
       MOVE SLIDER
    ===================================================== */

    function moveSlider(index, duration = 0.9) {

        if (isAnimating) return;

        isAnimating = true;

        const cardWidth = getCardWidth();

        const gap =
            window.innerWidth <= 768
                ? 0
                : 30;

        const distance =
            index * (cardWidth + gap);


        gsap.to(track, {

            x: -distance,

            duration: duration,

            ease: "power3.inOut",

            onComplete: () => {

                isAnimating = false;

            }

        });


        updateDots(index % 5);
    }


    /* =====================================================
       DOT UPDATE
    ===================================================== */

    function updateDots(activeIndex) {

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === activeIndex
            );

        });

    }


    /* =====================================================
       NEXT
    ===================================================== */

    function nextSlide() {

        if (isAnimating) return;

        currentIndex++;

        moveSlider(currentIndex);

    }


    /* =====================================================
       PREVIOUS
    ===================================================== */

    function previousSlide() {

        if (isAnimating) return;

        if (currentIndex <= 0) {

            currentIndex = 4;

            const cardWidth = getCardWidth();

            const gap =
                window.innerWidth <= 768
                    ? 0
                    : 30;

            gsap.set(track, {
                x: -(5 * (cardWidth + gap))
            });

        }

        currentIndex--;

        moveSlider(currentIndex);

    }


    /* =====================================================
       DOT CLICK
    ===================================================== */

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            stopAutoSlide();

            currentIndex = index;

            moveSlider(currentIndex);

            startAutoSlide();

        });

    });


    /* =====================================================
       ARROW EVENTS
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener("click", () => {

            stopAutoSlide();

            nextSlide();

            startAutoSlide();

        });

    }


    if (prevButton) {

        prevButton.addEventListener("click", () => {

            stopAutoSlide();

            previousSlide();

            startAutoSlide();

        });

    }


    /* =====================================================
       AUTOMATIC SLIDE
    ===================================================== */

    function startAutoSlide() {

        stopAutoSlide();

        autoSlide = setInterval(() => {

            if (currentIndex >= 5) {

                const cardWidth = getCardWidth();

                const gap =
                    window.innerWidth <= 768
                        ? 0
                        : 30;


                /*
                   Smoothly move to duplicated first card
                */

                currentIndex = 0;

                gsap.to(track, {

                    x: 0,

                    duration: 0.8,

                    ease: "power3.inOut",

                    onComplete: () => {

                        isAnimating = false;

                        updateDots(0);

                    }

                });

            } else {

                nextSlide();

            }

        }, 4000);

    }


    function stopAutoSlide() {

        if (autoSlide) {

            clearInterval(autoSlide);

            autoSlide = null;

        }

    }


    /* =====================================================
       GSAP SECTION REVEAL
    ===================================================== */

    const sectionTimeline = gsap.timeline({
        paused: true,
        defaults: {
            ease: "power3.out"
        }
    });


    /* Heading */

    sectionTimeline.to(
        ".audit-services-label",
        {
            opacity: 1,
            y: 0,
            duration: 0.7
        },
        0
    );


    sectionTimeline.to(
        ".audit-services-title",
        {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out"
        },
        0.15
    );


    sectionTimeline.to(
        ".audit-services-description",
        {
            opacity: 1,
            y: 0,
            duration: 0.7
        },
        0.3
    );


    /* =====================================================
       CARDS REVEAL FROM TOP
    ===================================================== */

    sectionTimeline.to(
        ".audit-service-card",
        {
            opacity: 1,
            y: 0,

            duration: 0.85,

            stagger: 0.12,

            ease: "power3.out"
        },
        0.45
    );


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting &&
                    !sectionStarted
                ) {

                    sectionStarted = true;

                    sectionTimeline.play();

                    setTimeout(() => {

                        startAutoSlide();

                    }, 1000);

                    observer.unobserve(section);

                }

            });

        },
        {
            threshold: 0.2
        }
    );


    observer.observe(section);


    /* =====================================================
       PAUSE WHEN MOUSE IS OVER CAROUSEL
    ===================================================== */

    viewport.addEventListener(
        "mouseenter",
        stopAutoSlide
    );


    viewport.addEventListener(
        "mouseleave",
        () => {

            if (sectionStarted) {
                startAutoSlide();
            }

        }
    );


    /* =====================================================
       MOBILE TOUCH SWIPE
    ===================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    viewport.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

            stopAutoSlide();

        },
        { passive: true }
    );


    viewport.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;

            const difference =
                touchStartX - touchEndX;


            if (Math.abs(difference) > 50) {

                if (difference > 0) {

                    nextSlide();

                } else {

                    previousSlide();

                }

            }

            startAutoSlide();

        },
        { passive: true }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            const cardWidth = getCardWidth();

            const gap =
                window.innerWidth <= 768
                    ? 0
                    : 30;

            gsap.set(track, {
                x: -(currentIndex * (cardWidth + gap))
            });

        }
    );

});



/* =========================================================
   AUDIT PROCESS + VIDEO CTA GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    const section =
        document.querySelector(".audit-process");

    if (!section) return;


    /* =====================================================
       PROCESS ANIMATION
    ===================================================== */

    const processTimeline = gsap.timeline({
        paused: true,
        defaults: {
            ease: "power3.out"
        }
    });


    /* Left side */

    processTimeline.to(
        ".process-reveal-left",
        {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.16
        },
        0
    );


    /* Right side */

    processTimeline.to(
        ".process-reveal-right",
        {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.16
        },
        0.15
    );


    /* =====================================================
       CURVED LINE ANIMATION
    ===================================================== */

    const processPath =
        document.querySelector(
            ".audit-process-line path"
        );

    if (processPath) {

        const pathLength =
            processPath.getTotalLength();

        gsap.set(processPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        });

        processTimeline.to(
            processPath,
            {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.inOut"
            },
            0
        );
    }


    /* =====================================================
       VIDEO CONTENT ANIMATION
    ===================================================== */

    const videoContent =
        section.querySelector(
            ".video-content-reveal"
        );


    const videoTimeline = gsap.timeline({
        paused: true,
        defaults: {
            ease: "power3.out"
        }
    });


    if (videoContent) {

        videoTimeline.to(
            videoContent,
            {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: "power4.out"
            }
        );

    }


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    let processStarted = false;
    let videoStarted = false;


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    /* Process */

                    if (
                        entry.target.classList.contains(
                            "audit-process-top"
                        ) &&
                        !processStarted
                    ) {

                        processStarted = true;

                        processTimeline.play();

                    }


                    /* Video */

                    if (
                        entry.target.classList.contains(
                            "audit-video-cta"
                        ) &&
                        !videoStarted
                    ) {

                        videoStarted = true;

                        videoTimeline.play();

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    const processTop =
        section.querySelector(
            ".audit-process-top"
        );

    const videoSection =
        section.querySelector(
            ".audit-video-cta"
        );


    if (processTop) {
        observer.observe(processTop);
    }

    if (videoSection) {
        observer.observe(videoSection);
    }


    /* =====================================================
       VIDEO BUTTON ARROW
    ===================================================== */

    const videoButton =
        section.querySelector(
            ".audit-video-button"
        );

    const videoArrow =
        section.querySelector(
            ".audit-video-arrow"
        );


    if (videoButton && videoArrow) {

        videoButton.addEventListener(
            "mouseenter",
            () => {

                gsap.to(videoArrow, {
                    x: 6,
                    duration: 0.25,
                    ease: "power2.out"
                });

            }
        );


        videoButton.addEventListener(
            "mouseleave",
            () => {

                gsap.to(videoArrow, {
                    x: 0,
                    duration: 0.25,
                    ease: "power2.out"
                });

            }
        );

    }


    /* =====================================================
       CARD HOVER
    ===================================================== */

    const cards =
        section.querySelectorAll(
            ".audit-process-card"
        );


    cards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                if (window.innerWidth <= 768) {
                    return;
                }

                gsap.to(card, {
                    y: -5,
                    duration: 0.3,
                    ease: "power2.out"
                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                if (window.innerWidth <= 768) {
                    return;
                }

                gsap.to(card, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });

            }
        );

    });

});



/* =========================================================
   AUDIT ASSURANCE PROCESS - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section = document.querySelector("#audit-growth-process");

    if (!section) return;


    const items = section.querySelectorAll(".audit-growth-item");
    const images = section.querySelectorAll(".audit-growth-image");
    const badges = section.querySelectorAll(".audit-step-badge");
    const contents = section.querySelectorAll(".audit-growth-content");
    const arrows = section.querySelectorAll(".audit-growth-arrow path");


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    gsap.set(images, {
        scale: 0.1,
        rotation: -90,
        opacity: 0
    });

    gsap.set(badges, {
        opacity: 0,
        y: 15
    });

    gsap.set(contents, {
        opacity: 0,
        y: 35
    });

    gsap.set(arrows, {
        opacity: 0
    });


    /* =====================================================
       IMAGE REVEAL
    ===================================================== */

    const revealTimeline = gsap.timeline({
        paused: true
    });


    revealTimeline
        .to(images, {
            scale: 1,
            rotation: 0,
            opacity: 1,

            duration: 1.25,

            ease: "back.out(1.35)",

            stagger: 0.35
        })

        .to(badges, {
            opacity: 1,
            y: 0,

            duration: 0.55,

            ease: "power3.out",

            stagger: 0.25
        }, "-=0.65")

        .to(contents, {
            opacity: 1,
            y: 0,

            duration: 0.75,

            ease: "power3.out",

            stagger: 0.22
        }, "-=0.45");


    /* =====================================================
       CURVED ARROWS
    ===================================================== */

    const arrowPaths = section.querySelectorAll(
        ".audit-growth-arrow path"
    );

    arrowPaths.forEach((path) => {

        const length = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            opacity: 0
        });

    });


    /* =====================================================
       OBSERVER
    ===================================================== */

    let hasPlayed = false;

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting || hasPlayed) {
                    return;
                }

                hasPlayed = true;


                /* Main reveal */

                revealTimeline.play();


                /* Curved arrows */

                const arrowTimeline = gsap.timeline({
                    delay: 0.75
                });


                arrowTimeline.to(
                    arrowPaths,
                    {
                        strokeDashoffset: 0,
                        opacity: 1,

                        duration: 1.1,

                        ease: "power2.out",

                        stagger: 0.7
                    }
                );

            });

        },
        {
            threshold: 0.2
        }
    );


    observer.observe(section);


    /* =====================================================
       IMAGE SUBTLE FLOAT
    ===================================================== */

    images.forEach((image, index) => {

        gsap.to(image, {
            y: -7,

            duration: 2.4,

            ease: "sine.inOut",

            repeat: -1,
            yoyo: true,

            delay: index * 0.25
        });

    });


    /* =====================================================
       IMAGE HOVER
    ===================================================== */

    const imageElements = section.querySelectorAll(
        ".audit-growth-image"
    );


    imageElements.forEach((image) => {

        const imageInside = image.querySelector("img");

        image.addEventListener("mouseenter", () => {

            gsap.to(imageInside, {
                scale: 1.14,
                duration: 0.7,
                ease: "power3.out"
            });

        });


        image.addEventListener("mouseleave", () => {

            gsap.to(imageInside, {
                scale: 1.08,
                duration: 0.7,
                ease: "power3.out"
            });

        });

    });

});



/* =========================================================
   AUDIT RESULTS SECTION
   GSAP + AUTO CAROUSEL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section = document.querySelector("#audit-results");

    if (!section) return;


    const visual = section.querySelector(".audit-results-visual img");

    const label = section.querySelector(".audit-results-label");

    const heading = section.querySelector(
        ".audit-results-heading-row"
    );

    const carousel = section.querySelector(
        ".audit-results-carousel"
    );

    const controls = section.querySelector(
        ".audit-results-controls"
    );

    const track = section.querySelector(
        ".audit-results-track"
    );

    const cards = Array.from(
        section.querySelectorAll(".audit-result-card")
    );

    const prevButton = section.querySelector(
        ".audit-results-prev"
    );

    const nextButton = section.querySelector(
        ".audit-results-next"
    );

    const dots = Array.from(
        section.querySelectorAll(".audit-result-dot")
    );


    let currentIndex = 0;

    let autoSlide;

    let isAnimating = false;


    /* =====================================================
       INITIAL GSAP STATE
    ===================================================== */

    gsap.set(visual, {
        scale: 1.12
    });

    gsap.set(label, {
        opacity: 0,
        y: 25
    });

    gsap.set(heading, {
        opacity: 0,
        y: 35
    });

    gsap.set(carousel, {
        opacity: 0,
        y: 45
    });

    gsap.set(controls, {
        opacity: 0,
        y: 20
    });


    /* =====================================================
       SECTION REVEAL
    ===================================================== */

    let played = false;

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting || played) {
                    return;
                }

                played = true;


                const tl = gsap.timeline();


                /* IMAGE */

                tl.to(visual, {
                    scale: 1,

                    duration: 1.5,

                    ease: "power3.out"
                })


                /* LABEL */

                .to(label, {
                    opacity: 1,
                    y: 0,

                    duration: 0.65,

                    ease: "power3.out"
                }, "-=1.0")


                /* HEADING */

                .to(heading, {
                    opacity: 1,
                    y: 0,

                    duration: 0.8,

                    ease: "power3.out"
                }, "-=0.35")


                /* CAROUSEL */

                .to(carousel, {
                    opacity: 1,
                    y: 0,

                    duration: 0.8,

                    ease: "power3.out"
                }, "-=0.35")


                /* BUTTONS */

                .to(controls, {
                    opacity: 1,
                    y: 0,

                    duration: 0.5,

                    ease: "power3.out"
                }, "-=0.45");


                startAutoSlide();

            });

        },
        {
            threshold: 0.25
        }
    );


    observer.observe(section);


    /* =====================================================
       GET CARD WIDTH
    ===================================================== */
 
function getCardWidth() {

    if (window.innerWidth <= 768) {
        return carousel.offsetWidth;
    }

    const cardWidth =
        cards[0].getBoundingClientRect().width;

    const gap = 30;

    return cardWidth + gap;
}

    /* =====================================================
       MOVE CAROUSEL
    ===================================================== */

    function moveCarousel(index, animate = true) {

        if (isAnimating) return;

        const cardWidth = getCardWidth();

        let targetIndex = index;


        /* LOOP */

        if (targetIndex >= cards.length) {
            targetIndex = 0;
        }

        if (targetIndex < 0) {
            targetIndex = cards.length - 1;
        }


        currentIndex = targetIndex;

        isAnimating = true;


        const distance =
            currentIndex * cardWidth;


        gsap.to(track, {

            x: -distance,

            duration: animate ? 1.1 : 0,

            ease: "power3.inOut",

            overwrite: true,

            onComplete: () => {

                isAnimating = false;

            }

        });


        updateDots();
    }


    /* =====================================================
       NEXT
    ===================================================== */

    function nextSlide() {

        if (isAnimating) return;

        moveCarousel(currentIndex + 1);

    }


    /* =====================================================
       PREVIOUS
    ===================================================== */

    function previousSlide() {

        if (isAnimating) return;

        moveCarousel(currentIndex - 1);

    }


    /* =====================================================
       BUTTONS
    ===================================================== */

    nextButton.addEventListener(
        "click",
        () => {

            stopAutoSlide();

            nextSlide();

            startAutoSlide();

        }
    );


    prevButton.addEventListener(
        "click",
        () => {

            stopAutoSlide();

            previousSlide();

            startAutoSlide();

        }
    );


    /* =====================================================
       DOTS
    ===================================================== */

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            stopAutoSlide();

            moveCarousel(index);

            startAutoSlide();

        });

    });


    function updateDots() {

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });

    }


    /* =====================================================
       AUTO SLIDE
    ===================================================== */

    function startAutoSlide() {

        stopAutoSlide();


        autoSlide = setInterval(() => {

            nextSlide();

        }, 3000);

    }


    function stopAutoSlide() {

        if (autoSlide) {

            clearInterval(autoSlide);

            autoSlide = null;

        }

    }


    /* =====================================================
       PAUSE WHEN HOVERING
    ===================================================== */

    section.addEventListener(
        "mouseenter",
        () => {

            stopAutoSlide();

        }
    );


    section.addEventListener(
        "mouseleave",
        () => {

            if (played) {
                startAutoSlide();
            }

        }
    );


    /* =====================================================
       TOUCH SWIPE
    ===================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    carousel.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.touches[0].clientX;

            stopAutoSlide();

        },
        { passive: true }
    );


    carousel.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].clientX;


            const difference =
                touchStartX - touchEndX;


            if (Math.abs(difference) > 50) {

                if (difference > 0) {

                    nextSlide();

                } else {

                    previousSlide();

                }

            }


            startAutoSlide();

        },
        { passive: true }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    let resizeTimer;

    window.addEventListener("resize", () => {

        clearTimeout(resizeTimer);


        resizeTimer = setTimeout(() => {

            isAnimating = false;

            moveCarousel(
                currentIndex,
                false
            );

        }, 150);

    });


    /* =====================================================
       INITIAL DOT
    ===================================================== */

    updateDots();

});


/* =========================================================
   AUDIT TESTIMONIALS
   GSAP + COUNTERS + SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector("#audit-testimonials");

    if (!section) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const background =
        section.querySelector(
            ".audit-testimonials-bg img"
        );

    const person =
        section.querySelector(
            ".audit-testimonial-person img"
        );

    const label =
        section.querySelector(
            ".audit-testimonial-label"
        );

    const heading =
        section.querySelector(
            ".audit-testimonial-content > h2"
        );

    const slider =
        section.querySelector(
            ".audit-testimonial-slider"
        );

    const testimonials =
        Array.from(
            section.querySelectorAll(
                ".audit-testimonial"
            )
        );

    const controls =
        section.querySelector(
            ".audit-testimonial-controls"
        );

    const counters =
        Array.from(
            section.querySelectorAll(
                ".audit-result-number"
            )
        );

    const featureCards =
        Array.from(
            section.querySelectorAll(
                ".audit-result-feature"
            )
        );

    const nextButton =
        section.querySelector(
            ".audit-testimonial-next"
        );

    const prevButton =
        section.querySelector(
            ".audit-testimonial-prev"
        );


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(person, {
        x: -110,
        opacity: 0,
        scale: 0.96
    });

    gsap.set(label, {
        y: 25,
        opacity: 0
    });

    gsap.set(heading, {
        y: 35,
        opacity: 0
    });

    gsap.set(slider, {
        y: 35,
        opacity: 0
    });

    gsap.set(controls, {
        y: 20,
        opacity: 0
    });

    gsap.set(featureCards, {
        y: 75,
        opacity: 0
    });


    /* =====================================================
       TESTIMONIAL INITIAL STATE
    ===================================================== */

    testimonials.forEach((item, index) => {

        gsap.set(item, {
            x: index === 0 ? 0 : 90,
            opacity: index === 0 ? 1 : 0
        });

    });


    let currentIndex = 0;

    let testimonialTimer = null;

    let isChanging = false;


    /* =====================================================
       COUNTER
    ===================================================== */

    function animateCounter(element) {

        const target =
            Number(element.dataset.target);

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

                const current =
                    Math.floor(counter.value);

                element.textContent =
                    current + suffix;

            }

        });

    }


    /* =====================================================
       CHANGE TESTIMONIAL
    ===================================================== */

    function changeTestimonial(
        newIndex,
        direction = 1
    ) {

        if (isChanging) return;

        if (newIndex === currentIndex) return;


        isChanging = true;


        const current =
            testimonials[currentIndex];

        const next =
            testimonials[newIndex];


        gsap.set(next, {
            x: direction > 0 ? 90 : -90,
            opacity: 0,
            visibility: "visible"
        });


        const tl =
            gsap.timeline({
                onComplete: () => {

                    currentIndex =
                        newIndex;

                    isChanging = false;

                }
            });


        /* Current moves LEFT */

        tl.to(current, {

            x: direction > 0 ? -90 : 90,

            opacity: 0,

            duration: 0.55,

            ease: "power2.inOut"

        })


        /* New enters FROM RIGHT */

        .to(next, {

            x: 0,

            opacity: 1,

            duration: 0.7,

            ease: "power3.out"

        }, "-=0.25");

    }


    /* =====================================================
       NEXT
    ===================================================== */

    function nextTestimonial() {

        const nextIndex =
            (currentIndex + 1)
            % testimonials.length;

        changeTestimonial(
            nextIndex,
            1
        );

    }


    /* =====================================================
       PREVIOUS
    ===================================================== */

    function previousTestimonial() {

        const previousIndex =
            (currentIndex - 1 +
                testimonials.length)
            % testimonials.length;

        changeTestimonial(
            previousIndex,
            -1
        );

    }


    /* =====================================================
       AUTO SLIDE
    ===================================================== */

    function startTestimonialAutoSlide() {

        stopTestimonialAutoSlide();


        testimonialTimer =
            setInterval(() => {

                nextTestimonial();

            }, 3000);

    }


    function stopTestimonialAutoSlide() {

        if (testimonialTimer) {

            clearInterval(
                testimonialTimer
            );

            testimonialTimer = null;

        }

    }


    /* =====================================================
       BUTTONS
    ===================================================== */

    nextButton.addEventListener(
        "click",
        () => {

            stopTestimonialAutoSlide();

            nextTestimonial();

            startTestimonialAutoSlide();

        }
    );


    prevButton.addEventListener(
        "click",
        () => {

            stopTestimonialAutoSlide();

            previousTestimonial();

            startTestimonialAutoSlide();

        }
    );


    /* =====================================================
       PAUSE WHEN HOVER
    ===================================================== */

    slider.addEventListener(
        "mouseenter",
        () => {

            stopTestimonialAutoSlide();

        }
    );


    slider.addEventListener(
        "mouseleave",
        () => {

            startTestimonialAutoSlide();

        }
    );


    /* =====================================================
       MAIN GSAP REVEAL
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
                        gsap.timeline({

                            onComplete: () => {

                                startTestimonialAutoSlide();

                            }

                        });


                    /* BACKGROUND */

                    tl.to(background, {

                        scale: 1,

                        duration: 1.5,

                        ease: "power3.out"

                    })


                    /* PERSON FROM LEFT */

                    .to(person, {

                        x: 0,

                        opacity: 1,

                        scale: 1,

                        duration: 1.15,

                        ease: "power3.out"

                    }, "-=1.1")


                    /* LABEL */

                    .to(label, {

                        y: 0,

                        opacity: 1,

                        duration: 0.6,

                        ease: "power3.out"

                    }, "-=0.65")


                    /* HEADING */

                    .to(heading, {

                        y: 0,

                        opacity: 1,

                        duration: 0.75,

                        ease: "power3.out"

                    }, "-=0.35")


                    /* TESTIMONIAL */

                    .to(slider, {

                        y: 0,

                        opacity: 1,

                        duration: 0.7,

                        ease: "power3.out"

                    }, "-=0.35")


                    /* CONTROLS */

                    .to(controls, {

                        y: 0,

                        opacity: 1,

                        duration: 0.5,

                        ease: "power3.out"

                    }, "-=0.4");


                    /* COUNTERS */

                    counters.forEach(
                        (counter) => {

                            animateCounter(
                                counter
                            );

                        }
                    );


                    /* FEATURE CARDS */

                    tl.to(
                        featureCards,
                        {

                            y: 0,

                            opacity: 1,

                            duration: 0.75,

                            ease: "power3.out",

                            stagger: 0.15

                        },
                        "-=0.2"
                    );

                });

            },
            {
                threshold: 0.18
            }
        );


    observer.observe(section);


    /* =====================================================
       SUBTLE PERSON FLOAT
    ===================================================== */

    gsap.to(person, {

        y: -7,

        duration: 2.8,

        ease: "sine.inOut",

        repeat: -1,

        yoyo: true

    });


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth <= 768
            ) {

                gsap.set(person, {
                    x: 0
                });

            }

        }
    );

});


/* =========================================================
   AUDIT WHY CHOOSE US - GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector("#why-us");

    if (!section) return;


    const leftElements =
        section.querySelectorAll(".why-reveal-left");

    const features =
        section.querySelectorAll(".why-feature-reveal");

    const visual =
        section.querySelector(".audit-why-visual");

    const image =
        section.querySelector(".audit-why-image img");

    const rating =
        section.querySelector(".audit-why-rating");


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(leftElements, {
        x: -70,
        opacity: 0
    });

    gsap.set(features, {
        x: -60,
        opacity: 0
    });

    gsap.set(visual, {
        x: 100,
        opacity: 0
    });

    gsap.set(image, {
        scale: 1.08
    });

    gsap.set(rating, {
        y: -25,
        scale: 0.9,
        opacity: 0
    });


    /* =====================================================
       REVEAL
    ===================================================== */

    let hasPlayed = false;


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        !entry.isIntersecting ||
                        hasPlayed
                    ) {
                        return;
                    }


                    hasPlayed = true;


                    const tl =
                        gsap.timeline();


                    /* LEFT CONTENT */

                    tl.to(leftElements, {

                        x: 0,

                        opacity: 1,

                        duration: 0.8,

                        ease: "power3.out",

                        stagger: 0.12

                    })


                    /* FEATURES */

                    .to(features, {

                        x: 0,

                        opacity: 1,

                        duration: 0.7,

                        ease: "power3.out",

                        stagger: 0.18

                    }, "-=0.35")


                    /* IMAGE FROM RIGHT */

                    .to(visual, {

                        x: 0,

                        opacity: 1,

                        duration: 1.1,

                        ease: "power3.out"

                    }, "-=0.8")


                    /* IMAGE SCALE */

                    .to(image, {

                        scale: 1,

                        duration: 1.2,

                        ease: "power3.out"

                    }, "-=1.0")


                    /* TRUST CARD */

                    .to(rating, {

                        y: 0,

                        scale: 1,

                        opacity: 1,

                        duration: 0.7,

                        ease: "back.out(1.5)"

                    }, "-=0.65");

                });

            },
            {
                threshold: 0.2
            }
        );


    observer.observe(section);


    /* =====================================================
       IMAGE HOVER
    ===================================================== */

    visual.addEventListener(
        "mouseenter",
        () => {

            gsap.to(image, {
                scale: 1.08,
                duration: 0.7,
                ease: "power3.out"
            });

        }
    );


    visual.addEventListener(
        "mouseleave",
        () => {

            gsap.to(image, {
                scale: 1,
                duration: 0.7,
                ease: "power3.out"
            });

        }
    );

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