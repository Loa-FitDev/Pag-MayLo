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

// Smooth scroll enhancement with scroll progress indicator
document.addEventListener("DOMContentLoaded", function() {
  // Add scroll progress listener for better scroll feedback
  let ticking = false;
  
  window.addEventListener("scroll", function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        
        // Update scroll position for potential scroll bar indicator
        document.documentElement.style.setProperty('--scroll-progress', scrollPercent + '%');
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Enhance anchor link scrolling with smooth behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        
        // Use native smooth scroll with custom easing
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});