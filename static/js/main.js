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
  function navigateToRoot() {
    window.location.href = "/";
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

//--------------------------------------------

enableThemeToggle();
enableThemeToggleNavbar();
enableNavBarDropdown();
enableHeaderPermalink();
enableKeyBinds();
