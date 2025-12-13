// THEME TOGGLE SCRIPT

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "light-theme" ? "☀️" : "🌙";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light-theme");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark-theme");
    themeToggle.textContent = "🌙";
  }
});
