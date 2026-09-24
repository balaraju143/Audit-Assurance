/* =========================================================
   AUDIT CONTACT HERO
   GSAP ANIMATIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const hero = document.querySelector("#contact-hero");

    if (!hero) return;


    const background =
        hero.querySelector(".audit-contact-hero-bg img");

    const label =
        hero.querySelector(".audit-contact-hero-label");

    const title =
        hero.querySelector(".audit-contact-hero-title");

    const description =
        hero.querySelector(".audit-contact-hero-description");

    const button =
        hero.querySelector(".audit-contact-hero-button-wrap");


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(background, {
        scale: 1.10
    });


    gsap.set(label, {
        y: 30,
        opacity: 0
    });


    gsap.set(title, {
        y: 50,
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
       MAIN HERO REVEAL
    ===================================================== */

    const timeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    timeline

        /* Background */

        .to(background, {
            scale: 1,
            duration: 1.6,
            ease: "power3.out"
        })


        /* Label */

        .to(label, {
            y: 0,
            opacity: 1,
            duration: 0.55
        }, "-=1.0")


        /* Heading */

        .to(title, {
            y: 0,
            opacity: 1,
            duration: 0.85
        }, "-=0.25")


        /* Description */

        .to(description, {
            y: 0,
            opacity: 1,
            duration: 0.7
        }, "-=0.35")


        /* Button */

        .to(button, {
            y: 0,
            opacity: 1,
            duration: 0.6
        }, "-=0.3");


    /* =====================================================
       SLOW BACKGROUND MOVEMENT
    ===================================================== */

    gsap.to(background, {
        scale: 1.035,

        duration: 8,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: 1.8
    });


    /* =====================================================
       BUTTON HOVER
    ===================================================== */

    const contactButton =
        hero.querySelector(".audit-contact-hero-button");


    contactButton.addEventListener("mouseenter", () => {

        gsap.to(contactButton, {
            y: -3,
            duration: 0.25,
            ease: "power2.out"
        });

    });


    contactButton.addEventListener("mouseleave", () => {

        gsap.to(contactButton, {
            y: 0,
            duration: 0.25,
            ease: "power2.out"
        });

    });


    /* =====================================================
       DESKTOP IMAGE PARALLAX
    ===================================================== */

    if (window.innerWidth > 768) {

        hero.addEventListener("mousemove", (event) => {

            const rect = hero.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width - 0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height - 0.5;


            gsap.to(background, {
                x: x * 12,
                y: y * 8,
                duration: 1.2,
                ease: "power3.out",
                overwrite: "auto"
            });

        });


        hero.addEventListener("mouseleave", () => {

            gsap.to(background, {
                x: 0,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            });

        });

    }

});


/* =========================================================
   AUDIT CONTACT FORM
   VALIDATION + 404 REDIRECT + RESET
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#auditContactForm");

    if (!form) return;


    const name = document.querySelector("#contactName");
    const company = document.querySelector("#contactCompany");
    const phone = document.querySelector("#contactPhone");
    const email = document.querySelector("#contactEmail");
    const subject = document.querySelector("#contactSubject");
    const message = document.querySelector("#contactMessage");


    const fields = {
        name: {
            input: name,
            error: document.querySelector("#nameError")
        },

        company: {
            input: company,
            error: document.querySelector("#companyError")
        },

        phone: {
            input: phone,
            error: document.querySelector("#phoneError")
        },

        email: {
            input: email,
            error: document.querySelector("#emailError")
        },

        subject: {
            input: subject,
            error: document.querySelector("#subjectError")
        },

        message: {
            input: message,
            error: document.querySelector("#messageError")
        }
    };


    /* =====================================================
       SHOW ERROR
    ===================================================== */

    function showError(field, message) {

        const fieldData = fields[field];

        if (!fieldData) return;


        const wrapper =
            fieldData.input.closest(
                ".audit-contact-field"
            );


        fieldData.error.textContent = message;

        wrapper.classList.add("has-error");

        wrapper.classList.remove("has-success");


        /* Remove error after 3 seconds */

        clearTimeout(
            fieldData.input._errorTimer
        );


        fieldData.input._errorTimer =
            setTimeout(() => {

                fieldData.error.textContent = "";

                wrapper.classList.remove(
                    "has-error"
                );

            }, 3000);

    }


    /* =====================================================
       SHOW SUCCESS
    ===================================================== */

    function showSuccess(field) {

        const fieldData = fields[field];

        if (!fieldData) return;


        const wrapper =
            fieldData.input.closest(
                ".audit-contact-field"
            );


        fieldData.error.textContent = "";

        wrapper.classList.remove("has-error");

        wrapper.classList.add("has-success");

    }


    /* =====================================================
       CLEAR FIELD STATE
    ===================================================== */

    function clearFieldState(field) {

        const fieldData = fields[field];

        if (!fieldData) return;


        const wrapper =
            fieldData.input.closest(
                ".audit-contact-field"
            );


        fieldData.error.textContent = "";

        wrapper.classList.remove(
            "has-error",
            "has-success"
        );


        clearTimeout(
            fieldData.input._errorTimer
        );

    }


    /* =====================================================
       NAME
       ONLY LETTERS + SPACES
    ===================================================== */

    function validateName() {

        const value = name.value.trim();

        const namePattern =
            /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;


        if (!value) {

            showError(
                "name",
                "Name is required."
            );

            return false;
        }


        if (!namePattern.test(value)) {

            showError(
                "name",
                "Name can contain letters and spaces only."
            );

            return false;
        }


        showSuccess("name");

        return true;
    }


    /* =====================================================
       COMPANY
    ===================================================== */

    function validateCompany() {

        const value = company.value.trim();


        if (!value) {

            showError(
                "company",
                "Company name is required."
            );

            return false;
        }


        if (value.length < 2) {

            showError(
                "company",
                "Please enter a valid company name."
            );

            return false;
        }


        showSuccess("company");

        return true;
    }


    /* =====================================================
       PHONE
    ===================================================== */

    function validatePhone() {

        const value = phone.value.trim();

        const phonePattern =
            /^[0-9+\-\s()]{7,20}$/;


        if (!value) {

            showError(
                "phone",
                "Phone number is required."
            );

            return false;
        }


        if (!phonePattern.test(value)) {

            showError(
                "phone",
                "Please enter a valid phone number."
            );

            return false;
        }


        const digitsOnly =
            value.replace(/\D/g, "");


        if (
            digitsOnly.length < 7 ||
            digitsOnly.length > 15
        ) {

            showError(
                "phone",
                "Please enter a valid phone number."
            );

            return false;
        }


        showSuccess("phone");

        return true;
    }


    /* =====================================================
       EMAIL
    ===================================================== */

    function validateEmail() {

        const value = email.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!value) {

            showError(
                "email",
                "Email address is required."
            );

            return false;
        }


        if (!emailPattern.test(value)) {

            showError(
                "email",
                "Please enter a valid email address."
            );

            return false;
        }


        showSuccess("email");

        return true;
    }


    /* =====================================================
       SUBJECT
    ===================================================== */

    function validateSubject() {

        const value = subject.value.trim();


        if (!value) {

            showError(
                "subject",
                "Subject is required."
            );

            return false;
        }


        if (value.length < 3) {

            showError(
                "subject",
                "Please enter a valid subject."
            );

            return false;
        }


        showSuccess("subject");

        return true;
    }


    /* =====================================================
       MESSAGE
    ===================================================== */

    function validateMessage() {

        const value = message.value.trim();


        if (!value) {

            showError(
                "message",
                "Message is required."
            );

            return false;
        }


        if (value.length < 10) {

            showError(
                "message",
                "Please enter at least 10 characters."
            );

            return false;
        }


        showSuccess("message");

        return true;
    }


    /* =====================================================
       INPUT VALIDATION
    ===================================================== */

    name.addEventListener("input", () => {

        /*
           Remove numbers and special characters
           immediately from name.
        */

        name.value =
            name.value.replace(
                /[^A-Za-z\s]/g,
                ""
            );


        clearFieldState("name");

    });


    phone.addEventListener("input", () => {

        /*
           Allow numbers and common phone symbols.
        */

        phone.value =
            phone.value.replace(
                /[^0-9+\-\s()]/g,
                ""
            );


        clearFieldState("phone");

    });


    company.addEventListener("input", () => {
        clearFieldState("company");
    });


    email.addEventListener("input", () => {
        clearFieldState("email");
    });


    subject.addEventListener("input", () => {
        clearFieldState("subject");
    });


    message.addEventListener("input", () => {
        clearFieldState("message");
    });


    /* =====================================================
       SUBMIT
    ===================================================== */

    form.addEventListener("submit", (event) => {

        event.preventDefault();


        const isNameValid =
            validateName();

        const isCompanyValid =
            validateCompany();

        const isPhoneValid =
            validatePhone();

        const isEmailValid =
            validateEmail();

        const isSubjectValid =
            validateSubject();

        const isMessageValid =
            validateMessage();


        const formIsValid =
            isNameValid &&
            isCompanyValid &&
            isPhoneValid &&
            isEmailValid &&
            isSubjectValid &&
            isMessageValid;


        if (!formIsValid) {

            return;

        }


        /*
           Valid form:
           go directly to 404 page.
        */

        window.location.href = "404.html";

    });


    /* =====================================================
       RESET WHEN PAGE IS SHOWN AGAIN
    ===================================================== */

    window.addEventListener("pageshow", () => {

        form.reset();


        Object.keys(fields).forEach((field) => {

            clearFieldState(field);

        });

    });

});


/* =========================================================
   AUDIT CONTACT INFORMATION
   GSAP REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector("#audit-contact-info");


    if (!section) return;


    const cards =
        section.querySelectorAll(
            ".audit-contact-info-card"
        );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    gsap.set(cards, {
        y: 55,
        opacity: 0
    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;


                    gsap.to(cards, {

                        y: 0,

                        opacity: 1,

                        duration: 0.8,

                        stagger: 0.16,

                        ease: "power3.out"

                    });


                    observerInstance.unobserve(section);

                });

            },
            {
                threshold: 0.2
            }
        );


    observer.observe(section);


    /* =====================================================
       ICON HOVER
    ===================================================== */

    cards.forEach((card) => {

        const icon =
            card.querySelector(
                ".audit-contact-info-icon i"
            );


        card.addEventListener("mouseenter", () => {

            gsap.to(icon, {
                y: -5,
                scale: 1.08,
                duration: 0.3,
                ease: "power2.out"
            });

        });


        card.addEventListener("mouseleave", () => {

            gsap.to(icon, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });

        });

    });

});


/* =========================================================
   AUDIT & ASSURANCE FAQ
   GSAP REVEAL + ACCORDION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector("#audit-faq");

    if (!section) return;


    const image =
        section.querySelector(".audit-faq-image-wrap");

    const imageElement =
        section.querySelector(".audit-faq-image-wrap img");

    const floatingIcon =
        section.querySelector(".audit-faq-floating-icon");

    const content =
        section.querySelector(".audit-faq-content");

    const label =
        section.querySelector(".audit-faq-label");

    const title =
        section.querySelector(".audit-faq-title");

    const description =
        section.querySelector(".audit-faq-description");

    const faqItems =
        section.querySelectorAll(".audit-faq-item");

    const button =
        section.querySelector(".audit-faq-button");


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(image, {
        y: 100,
        opacity: 0
    });


    gsap.set(imageElement, {
        scale: 1.1
    });


    gsap.set(floatingIcon, {
        scale: 0.7,
        opacity: 0
    });


    gsap.set(content, {
        x: 100,
        opacity: 0
    });


    /* =====================================================
       FAQ ITEMS INITIAL
    ===================================================== */

    gsap.set(
        [
            label,
            title,
            description,
            ...faqItems,
            button
        ],
        {
            opacity: 0,
            y: 25
        }
    );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;


                    const tl =
                        gsap.timeline({
                            defaults: {
                                ease: "power3.out"
                            }
                        });


                    /* Image comes from bottom */

                    tl.to(image, {
                        y: 0,
                        opacity: 1,
                        duration: 1
                    });


                    /* Image zoom */

                    tl.to(
                        imageElement,
                        {
                            scale: 1,
                            duration: 1.2,
                            ease: "power3.out"
                        },
                        "-=0.9"
                    );


                    /* Floating icon */

                    tl.to(
                        floatingIcon,
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.65,
                            ease: "back.out(1.7)"
                        },
                        "-=0.6"
                    );


                    /* Right content */

                    tl.to(
                        content,
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.9
                        },
                        "-=0.75"
                    );


                    /* Label */

                    tl.to(
                        label,
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.45
                        },
                        "-=0.55"
                    );


                    /* Title */

                    tl.to(
                        title,
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.65
                        },
                        "-=0.35"
                    );


                    /* Description */

                    tl.to(
                        description,
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.55
                        },
                        "-=0.3"
                    );


                    /* FAQ rows */

                    tl.to(
                        faqItems,
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            stagger: 0.1
                        },
                        "-=0.2"
                    );


                    /* Button */

                    tl.to(
                        button,
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.5
                        },
                        "-=0.2"
                    );


                    observerInstance.unobserve(section);

                });

            },
            {
                threshold: 0.18
            }
        );


    observer.observe(section);


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    faqItems.forEach((item) => {

        const question =
            item.querySelector(".audit-faq-question");

        const answer =
            item.querySelector(".audit-faq-answer");

        const toggle =
            item.querySelector(".audit-faq-toggle");


        question.addEventListener("click", () => {


            const isOpen =
                item.classList.contains("active");


            /* ---------------------------------------------
               CLOSE ALL OTHER ITEMS
            --------------------------------------------- */

            faqItems.forEach((otherItem) => {

                if (otherItem === item) return;


                const otherAnswer =
                    otherItem.querySelector(
                        ".audit-faq-answer"
                    );

                const otherToggle =
                    otherItem.querySelector(
                        ".audit-faq-toggle"
                    );


                otherItem.classList.remove(
                    "active"
                );


                gsap.to(otherAnswer, {
                    height: 0,
                    duration: 0.4,
                    ease: "power2.inOut"
                });


                gsap.to(otherToggle, {
                    rotation: 0,
                    duration: 0.3
                });


                otherToggle.textContent = "+";

            });


            /* ---------------------------------------------
               CLOSE CURRENT
            --------------------------------------------- */

            if (isOpen) {

                item.classList.remove("active");


                gsap.to(answer, {
                    height: 0,
                    duration: 0.4,
                    ease: "power2.inOut"
                });


                gsap.to(toggle, {
                    rotation: 0,
                    duration: 0.3
                });


                toggle.textContent = "+";


                return;
            }


            /* ---------------------------------------------
               OPEN CURRENT
            --------------------------------------------- */

            item.classList.add("active");


            gsap.to(answer, {
                height: "auto",
                duration: 0.5,
                ease: "power3.out"
            });


            gsap.to(toggle, {
                rotation: 180,
                duration: 0.3,
                ease: "power2.out"
            });


            toggle.textContent = "−";

        });

    });


    /* =====================================================
       IMAGE HOVER
    ===================================================== */

    image.addEventListener("mouseenter", () => {

        gsap.to(imageElement, {
            scale: 1.04,
            duration: 0.8,
            ease: "power2.out"
        });

    });


    image.addEventListener("mouseleave", () => {

        gsap.to(imageElement, {
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
        });

    });


});