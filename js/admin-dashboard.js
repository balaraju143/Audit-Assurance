/* =========================================================
   STACKLY AUDIT & ASSURANCE
   ADMIN DASHBOARD JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       USER DATA
    ===================================================== */

    const storedName =
        localStorage.getItem("stacklyUserName");

    const storedEmail =
        localStorage.getItem("stacklyUserEmail");


    const userName =
        storedName ||
        "Admin User";


    const userEmail =
        storedEmail ||
        "admin@example.com";


    /* =====================================================
       EMAIL FIRST LETTER
    ===================================================== */

    const emailFirstLetter =
        userEmail
            .trim()
            .charAt(0)
            .toUpperCase() || "A";


    /* =====================================================
       DYNAMIC NAME
    ===================================================== */

    const nameElements =
        document.querySelectorAll(
            "#adminSidebarName"
        );


    nameElements.forEach((element) => {

        element.textContent =
            userName;

    });


    /* =====================================================
       DYNAMIC EMAIL
    ===================================================== */

    const emailElements =
        document.querySelectorAll(
            "#adminSidebarEmail, #adminWelcomeEmail"
        );


    emailElements.forEach((element) => {

        element.textContent =
            userEmail;

    });


    /* =====================================================
       DYNAMIC AVATAR
    ===================================================== */

    const avatarElements =
        document.querySelectorAll(
            "#adminSidebarAvatar, #adminHeaderAvatar"
        );


    avatarElements.forEach((element) => {

        element.textContent =
            emailFirstLetter;

    });


    /* =====================================================
       SIDEBAR
    ===================================================== */

    const sidebar =
        document.querySelector(
            "#adminSidebar"
        );


    const mobileToggle =
        document.querySelector(
            "#adminMobileToggle"
        );


    if (mobileToggle && sidebar) {

        mobileToggle.addEventListener(
            "click",
            () => {

                sidebar.classList.toggle(
                    "open"
                );


                const icon =
                    mobileToggle.querySelector(
                        "i"
                    );


                if (
                    sidebar.classList.contains("open")
                ) {

                    icon.classList.remove(
                        "fa-bars"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                } else {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }
        );

    }


    /* =====================================================
       HASH PAGE NAVIGATION
    ===================================================== */

    const menuLinks =
        document.querySelectorAll(
            ".admin-menu-link"
        );


    const sections =
        document.querySelectorAll(
            ".admin-page-section"
        );


    const pageTitle =
        document.querySelector(
            "#adminPageTitle"
        );


    const titles = {

        "admin-overview":
            "Assurance Overview",

        "audit-monitoring":
            "Audit Monitoring",

        "risk-management":
            "Risk Management",

        "compliance":
            "Compliance Management",

        "client-management":
            "Client Management",

        "team-performance":
            "Team Performance",

        "assurance-reports":
            "Assurance Reports",

        "admin-settings": "Settings"

    };


    function showPage() {

        let current =
            window.location.hash
                .replace("#", "");


        if (!current) {

            current =
                "admin-overview";

        }


        const target =
            document.getElementById(
                current
            );


        if (!target) {

            window.location.hash =
                "admin-overview";

            return;

        }


        sections.forEach((section) => {

            section.classList.remove(
                "active"
            );

        });


        target.classList.add(
            "active"
        );


        menuLinks.forEach((link) => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });


        if (pageTitle) {

            pageTitle.textContent =
                titles[current] ||
                "Assurance Overview";

        }


        /* Close mobile sidebar */

        if (sidebar) {

            sidebar.classList.remove(
                "open"
            );

        }


        if (mobileToggle) {

            const icon =
                mobileToggle.querySelector(
                    "i"
                );


            if (icon) {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }


        /* Scroll dashboard to top */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        /* GSAP page reveal */

        if (
            typeof gsap !== "undefined"
        ) {

            gsap.fromTo(
                target.children,
                {
                    opacity: 0,
                    y: 25
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .55,
                    stagger: .07,
                    ease: "power3.out"
                }
            );

        }

    }


    window.addEventListener(
        "hashchange",
        showPage
    );


    showPage();


});