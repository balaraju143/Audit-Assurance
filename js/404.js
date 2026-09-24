/* =========================================================
   STACKLY AUDIT & ASSURANCE - 404
   GSAP ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const card =
        document.querySelector(".audit-404-card");

    if (!card) return;


    const logo =
        card.querySelector(".audit-404-logo");

    const visual =
        card.querySelector(".audit-404-visual");

    const number =
        card.querySelector(".audit-404-number");

    const icon =
        card.querySelector(".audit-404-icon");

    const label =
        card.querySelector(".audit-404-label");

    const title =
        card.querySelector(".audit-404-content h1");

    const description =
        card.querySelector(".audit-404-content p");

    const buttons =
        card.querySelector(".audit-404-buttons");


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(card, {
        opacity: 0,
        y: 50,
        scale: 0.97
    });


    gsap.set(logo, {
        opacity: 0,
        y: -20
    });


    gsap.set(visual, {
        opacity: 0,
        scale: 0.85
    });


    gsap.set(label, {
        opacity: 0,
        y: 15
    });


    gsap.set(title, {
        opacity: 0,
        y: 20
    });


    gsap.set(description, {
        opacity: 0,
        y: 20
    });


    gsap.set(buttons, {
        opacity: 0,
        y: 20
    });


    /* =====================================================
       MAIN TIMELINE
    ===================================================== */

    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    tl.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9
    })


    .to(logo, {
        opacity: 1,
        y: 0,
        duration: 0.5
    }, "-=0.55")


    .to(visual, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.4)"
    }, "-=0.25")


    .to(label, {
        opacity: 1,
        y: 0,
        duration: 0.4
    }, "-=0.3")


    .to(title, {
        opacity: 1,
        y: 0,
        duration: 0.55
    }, "-=0.2")


    .to(description, {
        opacity: 1,
        y: 0,
        duration: 0.5
    }, "-=0.25")


    .to(buttons, {
        opacity: 1,
        y: 0,
        duration: 0.5
    }, "-=0.2");


    /* =====================================================
       404 NUMBER FLOAT
    ===================================================== */

    gsap.to(number, {
        y: -6,

        duration: 2.2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"
    });


    /* =====================================================
       ICON FLOAT
    ===================================================== */

    gsap.to(icon, {
        y: -5,

        duration: 1.8,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"
    });


    /* =====================================================
       BUTTON HOVER
    ===================================================== */

    const allButtons =
        card.querySelectorAll(
            ".audit-404-button"
        );


    allButtons.forEach((button) => {

        button.addEventListener(
            "mouseenter",
            () => {

                gsap.to(button, {
                    y: -3,
                    duration: 0.25,
                    ease: "power2.out"
                });

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                gsap.to(button, {
                    y: 0,
                    duration: 0.25,
                    ease: "power2.out"
                });

            }
        );

    });


    /* =====================================================
       PREVIOUS PAGE
    ===================================================== */

    const backButton =
        document.querySelector(
            "#audit404BackButton"
        );


    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                if (
                    document.referrer &&
                    document.referrer !== window.location.href
                ) {

                    window.history.back();

                } else {

                    window.location.href =
                        "index.html";

                }

            }
        );

    }

});