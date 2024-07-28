function initializeThemeToggle() {
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute("data-theme", currentTheme);
    updateIcon(currentTheme);
    updateFavicon(currentTheme);

    toggleButton.addEventListener("click", toggleTheme);

    // Add event listener for key presses
    document.addEventListener("keydown", function (event) {
      if (event.key === "s") {
        toggleTheme();
      } else if (event.key === "h") {
        navigateToRoot();
      }
    });
  });

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
    updateFavicon(newTheme);
  }

  function navigateToRoot() {
    window.location.href = "/";
  }

  function updateIcon(theme) {
    const toggleButton = document.getElementById("theme-toggle");
    const moonIcon = toggleButton.getAttribute("data-moon-icon");
    const sunIcon = toggleButton.getAttribute("data-sun-icon");
    toggleButton.innerHTML = theme === "light" ? moonIcon : sunIcon;
    toggleButton.title =
      theme === "light"
        ? "Switch to Dark mode (or press 's')"
        : "Switch to Light mode (or press 's')";
  }

  function updateFavicon(theme) {
    const favicon = document.getElementById("favicon");
    favicon.href =
      theme === "light" ? "/favicon-light.ico" : "/favicon-dark.ico";
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

function headerPermalink() {
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

initializeThemeToggle();
enableNavBarDropdown();
headerPermalink();
