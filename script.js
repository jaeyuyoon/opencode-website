const root = document.documentElement;
const button = document.getElementById("theme-toggle");
const THEME_KEY = "theme";

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const isDark = theme === "dark";
  button.setAttribute("aria-pressed", String(isDark));
  button.textContent = isDark ? "Switch to light theme" : "Switch to dark theme";
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the theme still works for this visit.
  }
}

function readTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === "dark" || saved === "light" ? saved : null;
  } catch {
    return null;
  }
}

button.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  saveTheme(next);
});

applyTheme(readTheme() ?? "light");
