
// ======================================
// BLOOM & BLISS FLOWER SHOP
// Main JavaScript File
// ======================================


// 1. DARK MODE TOGGLE
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

function updateThemeButton() {
    const isDark = html.classList.contains("dark");

    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(isDark));
        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );
    }
}

// Load saved theme
function loadTheme() {
    try {
        const savedTheme = localStorage.getItem("bloom-theme");

        if (savedTheme === "dark") {
            html.classList.add("dark");
        } else if (savedTheme === "light") {
            html.classList.remove("dark");
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

            html.classList.toggle("dark", prefersDark);
        }
    } catch (error) {
        console.log("Unable to load theme preference.");
    }

    updateThemeButton();
}

// Toggle theme
if (themeToggle) {
    themeToggle.addEventListener("click", () => {

        const isDark = html.classList.toggle("dark");

        try {
            localStorage.setItem(
                "bloom-theme",
                isDark ? "dark" : "light"
            );
        } catch (error) {
            console.log("Unable to save theme preference.");
        }

        updateThemeButton();
    });
}

loadTheme();


// 2. MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        const isHidden = mobileMenu.classList.toggle("hidden");

        menuToggle.setAttribute(
            "aria-expanded",
            String(!isHidden)
        );

    });

    // Close menu after clicking a navigation link
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// 3. SCROLL PROGRESS BAR
window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    const progressBar = document.getElementById("scrollProgress");

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

});


// 4. GSAP PAGE LOAD ANIMATION
if (typeof gsap !== "undefined") {

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {

        const introTimeline = gsap.timeline();

        introTimeline
            .from("header", {
                y: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            })
            .from("#home p", {
                y: 30,
                opacity: 0,
                duration: 0.6
            })
            .from("#home h1", {
                y: 40,
                opacity: 0,
                duration: 0.8
            })
            .from("#home a", {
                y: 20,
                opacity: 0,
                duration: 0.5
            });

    }
}


// 5. GSAP SCROLL REVEAL
if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {

        gsap.utils.toArray(
            "#about, #products, #contact"
        ).forEach(section => {

            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });

        });

    }
}


// 6. FOOTER CURRENT YEAR
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 7. CONSOLE MESSAGE
console.log("Bloom & Bliss Flower Shop loaded successfully!");
