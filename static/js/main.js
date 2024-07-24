function initializeThemeToggle() {
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute("data-theme", currentTheme);
    updateIcon(currentTheme);

    toggleButton.addEventListener("click", function () {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateIcon(newTheme);
    });
  });

  function updateIcon(theme) {
    const toggleButton = document.getElementById("theme-toggle");
    const moonIcon = toggleButton.getAttribute("data-moon-icon");
    const sunIcon = toggleButton.getAttribute("data-sun-icon");
    toggleButton.innerHTML = theme === "light" ? moonIcon : sunIcon;
    toggleButton.title =
      theme === "light" ? "Switch to Dark mode" : "Switch to Light mode";
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

//--------------------------------------------

initializeThemeToggle();
enableNavBarDropdown();
