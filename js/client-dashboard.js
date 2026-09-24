/* =========================================================
   STACKLY AUDIT & ASSURANCE
   CLIENT DASHBOARD
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
        "Client User";


    const userEmail =
        storedEmail ||
        "client@example.com";


    const firstLetter =
        userName
            .trim()
            .charAt(0)
            .toUpperCase() || "C";


    /* =====================================================
       DYNAMIC USER ELEMENTS
    ===================================================== */

    const userNameElements =
        document.querySelectorAll(
            "#sidebarUserName, #headerUserName, #profileName"
        );


    userNameElements.forEach((element) => {

        element.textContent =
            userName;

    });


    const emailElements =
        document.querySelectorAll(
            "#sidebarUserEmail, #headerUserEmail, #profileEmail"
        );


    emailElements.forEach((element) => {

        element.textContent =
            userEmail;

    });


    const avatarElements =
        document.querySelectorAll(
            "#sidebarAvatar, #headerAvatar, #profileAvatar"
        );


    avatarElements.forEach((element) => {

        element.textContent =
            firstLetter;

    });


    const welcomeName =
        document.querySelector(
            "#welcomeUserName"
        );

const welcomeUserEmail =
    document.querySelector("#welcomeUserEmail");

 /*   if (welcomeName) {

        welcomeName.textContent =
            userName.split(" ")[0];

    }*/


if (welcomeUserEmail) {

    welcomeUserEmail.textContent =
        userEmail;

}
    /* =====================================================
       SIDEBAR
    ===================================================== */

    const sidebar =
        document.querySelector(
            "#auditSidebar"
        );


    const overlay =
        document.querySelector(
            "#auditMobileOverlay"
        );


    const menuToggle =
        document.querySelector(
            "#auditMenuToggle"
        );


    function openSidebar() {

        sidebar.classList.add("open");

        overlay.classList.add("active");

        document.body.style.overflow =
            "hidden";

    }


    function closeSidebar() {

        sidebar.classList.remove("open");

        overlay.classList.remove("active");

        document.body.style.overflow =
            "";

    }


    menuToggle.addEventListener(
        "click",
        () => {

            if (
                sidebar.classList.contains(
                    "open"
                )
            ) {

                closeSidebar();

            } else {

                openSidebar();

            }

        }
    );


    overlay.addEventListener(
        "click",
        closeSidebar
    );


    /* =====================================================
       HASH PAGES
    ===================================================== */

    const pageLinks =
        document.querySelectorAll(
            ".audit-sidebar-link[data-page]"
        );


    const pages =
        document.querySelectorAll(
            ".audit-dashboard-page"
        );


    const headerTitle =
        document.querySelector(
            "#headerTitle"
        );


    const pageTitles = {

        overview:
            "Overview",

        audits:
            "My Audits",

        assurance:
            "Assurance Reports",

        risk:
            "Risk & Compliance",

        documents:
            "Documents",

        billing:
            "Billing",

        profile:
            "Profile"

    };


    function getCurrentPage() {

        const hash =
            window.location.hash
                .replace("#", "")
                .trim();


        if (
            pageTitles[hash]
        ) {

            return hash;

        }


        return "overview";

    }


    function showPage(
        pageName,
        animate = true
    ) {

        if (
            !pageTitles[pageName]
        ) {

            pageName =
                "overview";

        }


        /* Page visibility */

        pages.forEach((page) => {

            page.classList.toggle(
                "active",
                page.dataset.content === pageName
            );

        });


        /* Sidebar active */

        pageLinks.forEach((link) => {

            link.classList.toggle(
                "active",
                link.dataset.page === pageName
            );

        });


        /* Header */

        headerTitle.textContent =
            pageTitles[pageName];


        /* Mobile close */

        closeSidebar();


        /* GSAP */

        if (
            animate &&
            typeof gsap !== "undefined"
        ) {

            const activePage =
                document.querySelector(
                    `.audit-dashboard-page[data-content="${pageName}"]`
                );


            if (activePage) {

                gsap.fromTo(
                    activePage.children,
                    {
                        opacity: 0,
                        y: 18
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.45,
                        stagger: 0.06,
                        ease: "power3.out"
                    }
                );

            }

        }


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    pageLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const page =
                    link.dataset.page;


                if (
                    window.location.hash !==
                    `#${page}`
                ) {

                    return;

                }


                event.preventDefault();

                showPage(page);

            }
        );

    });


    window.addEventListener(
        "hashchange",
        () => {

            showPage(
                getCurrentPage()
            );

        }
    );


    /* Initial */

    showPage(
        getCurrentPage(),
        false
    );


    /* =====================================================
       SEARCH → 404
    ===================================================== */

    const searchButton =
        document.querySelector(
            "#auditSearchButton"
        );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "404.html";

            }
        );

    }


    /* =====================================================
       GSAP INITIAL DASHBOARD REVEAL
    ===================================================== */

    if (
        typeof gsap !== "undefined"
    ) {

        const header =
            document.querySelector(
                ".audit-dashboard-header"
            );


        const content =
            document.querySelector(
                ".audit-dashboard-content"
            );


        gsap.fromTo(
            header,
            {
                y: -20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.55,
                ease: "power3.out"
            }
        );


        gsap.fromTo(
            content,
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.65,
                delay: 0.15,
                ease: "power3.out"
            }
        );

    }

});