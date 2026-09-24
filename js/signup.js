/* =========================================================
   STACKLY AUDIT & ASSURANCE REGISTER
   ROLE + VALIDATION + PASSWORD + GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const card =
        document.querySelector(
            ".audit-register-card"
        );

    const form =
        document.querySelector(
            "#auditRegisterForm"
        );

    if (!card || !form) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const roles =
        document.querySelectorAll(
            ".audit-register-role"
        );


    const name =
        document.querySelector(
            "#auditRegisterName"
        );


    const email =
        document.querySelector(
            "#auditRegisterEmail"
        );


    const password =
        document.querySelector(
            "#auditRegisterPassword"
        );


    const confirmPassword =
        document.querySelector(
            "#auditRegisterConfirmPassword"
        );


    const terms =
        document.querySelector(
            "#auditRegisterTerms"
        );


    const nameError =
        document.querySelector(
            "#auditRegisterNameError"
        );


    const emailError =
        document.querySelector(
            "#auditRegisterEmailError"
        );


    const passwordError =
        document.querySelector(
            "#auditRegisterPasswordError"
        );


    const confirmPasswordError =
        document.querySelector(
            "#auditRegisterConfirmPasswordError"
        );


    const termsError =
        document.querySelector(
            "#auditRegisterTermsError"
        );


    const nameField =
        name.closest(
            ".audit-register-field"
        );


    const emailField =
        email.closest(
            ".audit-register-field"
        );


    const passwordField =
        password.closest(
            ".audit-register-field"
        );


    const confirmPasswordField =
        confirmPassword.closest(
            ".audit-register-field"
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

    const passwordToggles =
        document.querySelectorAll(
            ".audit-register-password-toggle"
        );


    passwordToggles.forEach((toggle) => {

        toggle.addEventListener(
            "click",
            () => {

                const targetId =
                    toggle.dataset.target;


                const target =
                    document.querySelector(
                        `#${targetId}`
                    );


                const icon =
                    toggle.querySelector("i");


                if (
                    target.type ===
                    "password"
                ) {

                    target.type = "text";


                    icon.classList.remove(
                        "fa-eye-slash"
                    );


                    icon.classList.add(
                        "fa-eye"
                    );


                    toggle.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                } else {

                    target.type =
                        "password";


                    icon.classList.remove(
                        "fa-eye"
                    );


                    icon.classList.add(
                        "fa-eye-slash"
                    );


                    toggle.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                }

            }
        );

    });


    /* =====================================================
       ERROR
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
       NAME
       ONLY LETTERS + SPACES
    ===================================================== */

    name.addEventListener(
        "input",
        () => {

            name.value =
                name.value.replace(
                    /[^A-Za-z\s]/g,
                    ""
                );


            clearError(
                nameField,
                nameError
            );

        }
    );


    /* =====================================================
       NAME VALIDATION
    ===================================================== */

    function validateName() {

        const value =
            name.value.trim();


        const namePattern =
            /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;


        if (!value) {

            showError(
                nameField,
                nameError,
                "Full name is required."
            );

            return false;

        }


        if (!namePattern.test(value)) {

            showError(
                nameField,
                nameError,
                "Name can contain letters and spaces only."
            );

            return false;

        }


        showSuccess(nameField);

        return true;

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
       CONFIRM PASSWORD
    ===================================================== */

    function validateConfirmPassword() {

        const value =
            confirmPassword.value;


        if (!value) {

            showError(
                confirmPasswordField,
                confirmPasswordError,
                "Please confirm your password."
            );

            return false;

        }


        if (
            value !==
            password.value
        ) {

            showError(
                confirmPasswordField,
                confirmPasswordError,
                "Passwords do not match."
            );

            return false;

        }


        showSuccess(
            confirmPasswordField
        );

        return true;

    }


    /* =====================================================
       TERMS
    ===================================================== */

    function validateTerms() {

        if (!terms.checked) {

            termsError.textContent =
                "Please accept the terms and privacy policy.";


            clearTimeout(
                terms._errorTimer
            );


            terms._errorTimer =
                setTimeout(() => {

                    termsError.textContent =
                        "";

                }, 3000);


            return false;

        }


        termsError.textContent = "";

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

            if (
                confirmPassword.value
            ) {

                clearError(
                    confirmPasswordField,
                    confirmPasswordError
                );

            }

        }
    );


    confirmPassword.addEventListener(
        "input",
        () => {

            clearError(
                confirmPasswordField,
                confirmPasswordError
            );

        }
    );


    terms.addEventListener(
        "change",
        () => {

            termsError.textContent = "";

        }
    );


    /* =====================================================
       SUBMIT
    ===================================================== */

    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const validName =
                validateName();


            const validEmail =
                validateEmail();


            const validPassword =
                validatePassword();


            const validConfirmPassword =
                validateConfirmPassword();


            const validTerms =
                validateTerms();


            const isValid =
                validName &&
                validEmail &&
                validPassword &&
                validConfirmPassword &&
                validTerms;


            if (!isValid) {

                return;

            }
         localStorage.setItem(
    "stacklyUserName",
    name.value.trim()
);

localStorage.setItem(
    "stacklyUserEmail",
    email.value.trim()
);

localStorage.setItem(
    "stacklyUserRole",
    selectedRole
);



            /*
               Registration is successfully
               validated.

               For this static theme, send the
               user to the login page.
            */

            window.location.href =
                "login.html";

        }
    );


    /* =====================================================
       RESET WHEN PAGE IS SHOWN
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


            /* Reset password types */

            password.type =
                "password";


            confirmPassword.type =
                "password";


            /* Reset eye icons */

            passwordToggles.forEach(
                (toggle) => {

                    const icon =
                        toggle.querySelector("i");


                    icon.classList.remove(
                        "fa-eye"
                    );


                    icon.classList.add(
                        "fa-eye-slash"
                    );

                }
            );


            /* Clear validation */

            clearError(
                nameField,
                nameError
            );


            clearError(
                emailField,
                emailError
            );


            clearError(
                passwordField,
                passwordError
            );


            clearError(
                confirmPasswordField,
                confirmPasswordError
            );


            termsError.textContent = "";

        }
    );


    /* =====================================================
       GSAP
    ===================================================== */

    const visualBg =
        card.querySelector(
            ".audit-register-visual-bg img"
        );


    const visualContent =
        card.querySelector(
            ".audit-register-visual-content"
        );


    const formSide =
        card.querySelector(
            ".audit-register-form-side"
        );


    gsap.set(card, {
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
       REVEAL TIMELINE
    ===================================================== */

    const timeline =
        gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });


    timeline

        .to(card, {
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
       SLOW BACKGROUND IMAGE
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