// JavaScript Document
console.log("hi");

// Variables
const navButton = document.querySelector("#nav-button");
const navBar = document.querySelector("header>nav")
const nav = document.querySelector("#navigation-menu");
const lightDarkModeButton = document.querySelector("#light-dark-mode-button");
const scrollToTopButton = document.querySelector("#scroll-to-top")

// Functions
function showMenu() {
    const isOpened = navButton.getAttribute("aria-expanded")
    if (nav.style.display === "none" && isOpened === "false") {
        nav.style.display = "flex";
        navButton.setAttribute("aria-expanded", "true");
    } else {
        nav.style.display = "none";
        navButton.setAttribute("aria-expanded", "false");
    }
}

function switchLightDarkMode() {
    const mode = lightDarkModeButton.getAttribute("aria-mode")
    const image = lightDarkModeButton.querySelector("img");

    if (mode === "light") {
        lightDarkModeButton.setAttribute("aria-mode", "dark");
        image.setAttribute("src", "images/moon.svg");
        document.documentElement.style.setProperty("--color-background", "#000");
        document.documentElement.style.setProperty("--smoke", "#050505");
        document.documentElement.style.setProperty("--almost", "#101010");
        document.documentElement.style.setProperty("--coral", "#ea5e00");
        document.documentElement.style.setProperty("--dark-coral", "#c82716bf");
        document.documentElement.style.setProperty("--steel-blue", "#00579f");
        document.documentElement.style.setProperty("--deep-pink", "#d40a7e");
        document.documentElement.style.setProperty("--hot-pink", "#f6108f");
        document.documentElement.style.setProperty("--wheat", "#d6b26a");
        document.documentElement.style.setProperty("--sky-blue", "#35acde");
        document.documentElement.style.setProperty("--sky-blue-2", "#58bcdc");
        document.documentElement.style.setProperty("--saddle-brown", "#ba8a4d");
        
    } else {
        lightDarkModeButton.setAttribute("aria-mode", "light");
        image.setAttribute("src", "images/sun.svg");
        document.documentElement.style.setProperty("--color-background", "#fff");
        document.documentElement.style.setProperty("--smoke", "#f5f5f5");
        document.documentElement.style.setProperty("--almost", "#f0f0f0");
        document.documentElement.style.setProperty("--coral", "#ff6e0c");
        document.documentElement.style.setProperty("--dark-coral", "#f0f0f0");
        document.documentElement.style.setProperty("--steel-blue", "#0072ce");
        document.documentElement.style.setProperty("--deep-pink", "#f20c90");
        document.documentElement.style.setProperty("--hot-pink", "#f950ad");
        document.documentElement.style.setProperty("--wheat", "#e8d3aa");
        document.documentElement.style.setProperty("--sky-blue", "#71c5e8");
        document.documentElement.style.setProperty("--sky-blue-2", "#99d6ea");
        document.documentElement.style.setProperty("--saddle-brown", "#512d00");
    }
}

function makeNavBarSticky() {
    const sticky = navBar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

// EventListener
navButton.addEventListener("click", showMenu);
lightDarkModeButton.addEventListener("click", switchLightDarkMode);
window.addEventListener("scroll", makeNavBarSticky);
scrollToTopButton.addEventListener("click", scrollToTop)
