/* =========================================================
   STACKLY AUDIT & ASSURANCE LOGIN
   ROLE + VALIDATION + PASSWORD + GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const loginCard =
        document.querySelector(".audit-login-card");

    const form =
        document.querySelector("#auditLoginForm");

    if (!loginCard || !form) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const roles =
        document.querySelectorAll(
            ".audit-login-role"
        );

    const email =
        document.querySelector(
            "#auditLoginEmail"
        );

    const password =
        document.querySelector(
            "#auditLoginPassword"
        );

    const emailError =
        document.querySelector(
            "#auditLoginEmailError"
        );

    const passwordError =
        document.querySelector(
            "#auditLoginPasswordError"
        );

    const emailField =
        email.closest(
            ".audit-login-field"
        );

    const passwordField =
        password.closest(
            ".audit-login-field"
        );

    const passwordToggle =
        document.querySelector(
            "#auditPasswordToggle"
        );

    let selectedRole = "client";


    /* =====================================================
       ROLE SELECTION
    ===================================================== */

    roles.forEach((roleButton) => {

        roleButton.addEventListener(
            "click",
            () => {

                roles.forEach((button) => {

                    button.classList.remove(
                        "active"
                    );

                });


                roleButton.classList.add(
                    "active"
                );


                selectedRole =
                    roleButton.dataset.role;


                /* Small GSAP feedback */

                gsap.fromTo(
                    roleButton,
                    {
                        scale: 0.97
                    },
                    {
                        scale: 1,
                        duration: 0.25,
                        ease: "power2.out"
                    }
                );

            }
        );

    });


    /* =====================================================
       PASSWORD SHOW / HIDE
    ===================================================== */

    passwordToggle.addEventListener(
        "click",
        () => {

            const icon =
                passwordToggle.querySelector(
                    "i"
                );


            if (
                password.type === "password"
            ) {

                password.type = "text";

                icon.classList.remove(
                    "fa-eye-slash"
                );

                icon.classList.add(
                    "fa-eye"
                );

                passwordToggle.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            } else {

                password.type = "password";

                icon.classList.remove(
                    "fa-eye"
                );

                icon.classList.add(
                    "fa-eye-slash"
                );

                passwordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        }
    );


    /* =====================================================
       ERROR FUNCTION
    ===================================================== */

    function showError(
        field,
        errorElement,
        message
    ) {

        errorElement.textContent =
            message;

        field.classList.add(
            "has-error"
        );

        field.classList.remove(
            "has-success"
        );


        clearTimeout(
            field._errorTimer
        );


        field._errorTimer =
            setTimeout(() => {

                errorElement.textContent =
                    "";

                field.classList.remove(
                    "has-error"
                );

            }, 3000);

    }


    /* =====================================================
       SUCCESS
    ===================================================== */

    function showSuccess(field) {

        field.classList.remove(
            "has-error"
        );

        field.classList.add(
            "has-success"
        );

    }


    /* =====================================================
       CLEAR ERROR
    ===================================================== */

    function clearError(
        field,
        errorElement
    ) {

        clearTimeout(
            field._errorTimer
        );

        errorElement.textContent =
            "";

        field.classList.remove(
            "has-error",
            "has-success"
        );

    }


    /* =====================================================
       EMAIL VALIDATION
    ===================================================== */

    function validateEmail() {

        const value =
            email.value.trim();


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!value) {

            showError(
                emailField,
                emailError,
                "Email address is required."
            );

            return false;

        }


        if (!emailPattern.test(value)) {

            showError(
                emailField,
                emailError,
                "Please enter a valid email address."
            );

            return false;

        }


        showSuccess(emailField);

        return true;

    }


    /* =====================================================
       PASSWORD VALIDATION
    ===================================================== */

    function validatePassword() {

        const value =
            password.value;


        if (!value) {

            showError(
                passwordField,
                passwordError,
                "Password is required."
            );

            return false;

        }


        if (value.length < 6) {

            showError(
                passwordField,
                passwordError,
                "Password must contain at least 6 characters."
            );

            return false;

        }


        showSuccess(passwordField);

        return true;

    }


    /* =====================================================
       LIVE INPUT
    ===================================================== */

    email.addEventListener(
        "input",
        () => {

            clearError(
                emailField,
                emailError
            );

        }
    );


    password.addEventListener(
        "input",
        () => {

            clearError(
                passwordField,
                passwordError
            );

        }
    );


    /* =====================================================
       FORM SUBMIT
    ===================================================== */

    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const validEmail =
                validateEmail();


            const validPassword =
                validatePassword();


            if (
                !validEmail ||
                !validPassword
            ) {

                return;

            }


            /* =================================================
               ROLE BASED REDIRECT
            ================================================= */

            if (
                selectedRole === "admin"
            ) {

                window.location.href =
                    "admin-dashboard.html";

            } else {

                window.location.href =
                    "client-dashboard.html";

            }

        }
    );


    /* =====================================================
       FORM RESET WHEN RETURNING TO PAGE
    ===================================================== */

    window.addEventListener(
        "pageshow",
        () => {

            form.reset();


            selectedRole = "client";


            roles.forEach(
                (button, index) => {

                    button.classList.remove(
                        "active"
                    );


                    if (index === 0) {

                        button.classList.add(
                            "active"
                        );

                    }

                }
            );


            password.type =
                "password";


            const icon =
                passwordToggle.querySelector(
                    "i"
                );


            icon.classList.remove(
                "fa-eye"
            );

            icon.classList.add(
                "fa-eye-slash"
            );


            clearError(
                emailField,
                emailError
            );


            clearError(
                passwordField,
                passwordError
            );

        }
    );


    /* =====================================================
       GSAP INITIAL STATES
    ===================================================== */

    const visual =
        loginCard.querySelector(
            ".audit-login-visual"
        );

    const visualBg =
        loginCard.querySelector(
            ".audit-login-visual-bg img"
        );

    const visualContent =
        loginCard.querySelector(
            ".audit-login-visual-content"
        );

    const formSide =
        loginCard.querySelector(
            ".audit-login-form-side"
        );


    gsap.set(loginCard, {
        opacity: 0,
        y: 45,
        scale: 0.97
    });


    gsap.set(visualBg, {
        scale: 1.08
    });


    gsap.set(
        [
            visualContent,
            formSide
        ],
        {
            opacity: 0,
            y: 25
        }
    );


    /* =====================================================
       MAIN REVEAL
    ===================================================== */

    const timeline =
        gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });


    timeline

        .to(loginCard, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9
        })


        .to(
            visualBg,
            {
                scale: 1,
                duration: 1.4
            },
            "-=0.6"
        )


        .to(
            visualContent,
            {
                opacity: 1,
                y: 0,
                duration: 0.7
            },
            "-=0.9"
        )


        .to(
            formSide,
            {
                opacity: 1,
                y: 0,
                duration: 0.7
            },
            "-=0.65"
        );


    /* =====================================================
       SUBTLE IMAGE MOVEMENT
    ===================================================== */

    gsap.to(visualBg, {

        scale: 1.035,

        duration: 7,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: 1.5

    });

});