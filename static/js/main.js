// Enable theme toggle
function enableThemeToggle() {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    initTheme(currentTheme);
    toggleButton.addEventListener("click", toggleTheme);
  });

  function initTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateIcon(theme);
    updateFavicon(theme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    initTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  function updateIcon(theme) {
    const toggleButton = document.getElementById("theme-toggle");
    const iconMap = {
      light: toggleButton.getAttribute("data-moon-icon"),
      dark: toggleButton.getAttribute("data-sun-icon"),
    };
    toggleButton.innerHTML = iconMap[theme];
    toggleButton.title = `Switch to ${
      theme === "light" ? "Dark" : "Light"
    } mode (or press 's')`;
  }

  function updateFavicon(theme) {
    const favicon = document.getElementById("favicon");
    favicon.href = `/favicon-${theme}.ico`;
  }
}

// Handle key presses
function enableKeyBinds() {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "s":
        if (!event.shiftKey) {
          toggleTheme();
        }
        break;
      case "j":
        window.scrollBy(0, 100); // scroll down by 100px
        break;
      case "k":
        window.scrollBy(0, -100); // scroll up by 100px
        break;
      case "h":
        history.back();
        break;
      case "l":
        history.forward();
        break;
      case "ArrowLeft":
        history.back();
        break;
      case "ArrowRight":
        history.forward();
        break;
      case "p":
        window.scrollTo(0, 0); // scroll to top
        break;
      case "n":
        window.scrollTo(0, document.body.scrollHeight); // scroll to bottom
        break;
      case "g":
        window.location.href = "/"; // go to root
        break;
      case "r":
        window.location.reload(); // refresh the page
        break;
    }
  });

  function toggleTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.click();
  }
}

function enableThemeToggleNavbar() {
  // Wait for DOM content to load
  document.addEventListener("DOMContentLoaded", () => {
    // Get theme toggle button and current theme
    const toggleButton = document.getElementById("theme-toggle-navbar");
    const currentTheme = localStorage.getItem("theme") || "light";

    // Initialize theme
    initTheme(currentTheme);

    // Add event listener to toggle button
    toggleButton.addEventListener("click", toggleTheme);
  });

  // Initialize theme
  function initTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateIcon(theme);
    updateFavicon(theme);
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    initTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  // Update theme icon
  function updateIcon(theme) {
    const toggleButton = document.getElementById("theme-toggle-navbar");
    const iconMap = {
      light: toggleButton.getAttribute("data-moon-icon"),
      dark: toggleButton.getAttribute("data-sun-icon"),
    };
    toggleButton.innerHTML = iconMap[theme];
  }

  // Update favicon
  function updateFavicon(theme) {
    const favicon = document.getElementById("favicon");
    favicon.href = `/favicon-${theme}.ico`;
  }
}

function enableNavBarDropdown() {
  document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("navbar-toggle");

    toggleButton.addEventListener("click", function () {
      sidebar.classList.toggle("show");
    });
  });
}

function enableHeaderPermalink() {
  document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll("h1, h2, h3");

    headers.forEach((header) => {
      const id = header.id;
      if (id) {
        const link = document.createElement("a");
        link.href = `#${id}`;
        link.className = "header-permalink";
        link.innerHTML = "#";
        link.setAttribute("title", "Permanent Link");
        header.appendChild(link);
        header.classList.add("header-with-permalink");
      }
    });
  });
}

function enableBackToTop() {
  document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.onscroll = function () {
      if (window.scrollY > 1200) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };

    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
}

//--------------------------------------------

enableThemeToggle();
enableThemeToggleNavbar();
enableNavBarDropdown();
enableHeaderPermalink();
enableKeyBinds();
enableBackToTop();
