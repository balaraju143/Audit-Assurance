/* =========================================================
   NAVBAR SCROLL
========================================================= */

const siteHeader = document.getElementById("siteHeader");

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleNavbarScroll);

handleNavbarScroll();


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

    document.body.classList.toggle("menu-open", isOpen);
});


/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");
    });

});


/* =========================================================
   CLOSE MENU WHEN RESIZING TO DESKTOP
========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");
    }

});



/* =========================================================
   AUDIT FOOTER
   NEWSLETTER VALIDATION + GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       NEWSLETTER
    ===================================================== */

    const form =
        document.querySelector(
            "#auditNewsletterForm"
        );

    const emailInput =
        document.querySelector(
            "#auditNewsletterEmail"
        );

    const errorMessage =
        document.querySelector(
            "#auditNewsletterError"
        );


    if (!form || !emailInput || !errorMessage) {
        return;
    }


    let errorTimer = null;


    /* =====================================================
       EMAIL VALIDATION
    ===================================================== */

    function isValidEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email);

    }


    /* =====================================================
       SHOW ERROR
    ===================================================== */

    function showError(message) {

        clearTimeout(errorTimer);

        errorMessage.textContent = message;

        errorMessage.style.opacity = "1";


        errorTimer = setTimeout(() => {

            errorMessage.style.opacity = "0";

        }, 3000);

    }


    /* =====================================================
       SUBMIT
    ===================================================== */

    form.addEventListener("submit", (event) => {

        event.preventDefault();


        const email =
            emailInput.value.trim();


        /* EMPTY */

        if (!email) {

            showError(
                "Please enter your email address."
            );

            return;
        }


        /* INVALID */

        if (!isValidEmail(email)) {

            showError(
                "Please enter a valid email address."
            );

            return;
        }


        /* VALID */

        /*
         * Reset the field before leaving.
         * When the user comes back, the field
         * will remain empty.
         */

        form.reset();


        /*
         * Go to 404 page.
         */

        window.location.href = "404.html";

    });


    /* =====================================================
       RESET WHEN RETURNING TO PAGE
    ===================================================== */

    window.addEventListener(
        "pageshow",
        () => {

            form.reset();

            errorMessage.textContent = "";

            errorMessage.style.opacity = "0";

        }
    );


    /* =====================================================
       CLEAR ERROR WHEN USER TYPES
    ===================================================== */

    emailInput.addEventListener(
        "input",
        () => {

            if (errorMessage.textContent) {

                errorMessage.textContent = "";

                errorMessage.style.opacity = "0";

                clearTimeout(errorTimer);

            }

        }
    );


    /* =====================================================
       GSAP FOOTER REVEAL
    ===================================================== */

    if (typeof gsap !== "undefined") {

        const footer =
            document.querySelector(
                ".audit-footer"
            );

        const sections =
            footer.querySelectorAll(
                ".audit-footer-brand, .audit-footer-column, .audit-footer-newsletter"
            );

        gsap.set(sections, {
            opacity: 0,
            y: 35
        });


        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        gsap.to(sections, {

                            opacity: 1,

                            y: 0,

                            duration: 0.7,

                            ease: "power3.out",

                            stagger: 0.12

                        });


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.15
                }
            );


        observer.observe(footer);

    }

});