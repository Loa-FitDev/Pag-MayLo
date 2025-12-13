const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
  document.documentElement.classList.add("dark");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
  document.documentElement.classList.remove("dark");
}

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
const header = document.querySelector("header");

// Toggle menu when hamburger button is clicked
mobileMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("open");
  header.classList.toggle("menu-open");
});

// Close menu when a link is clicked
mobileMenuLinks.forEach(link => {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("open");
    header.classList.remove("menu-open");
  });
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnButton = mobileMenuBtn.contains(event.target);
  
  if (!isClickInsideMenu && !isClickOnButton && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("open");
    header.classList.remove("menu-open");
  }
});