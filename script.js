const themeButton = document.querySelector(".theme-toggle");

if (themeButton) {
  const savedTheme = localStorage.getItem("leonel-site-theme");
  if (savedTheme === "light") document.documentElement.dataset.theme = "light";

  const updateLabel = () => {
    const isLight = document.documentElement.dataset.theme === "light";
    themeButton.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    themeButton.setAttribute("title", isLight ? "Switch to dark theme" : "Switch to light theme");
    themeButton.setAttribute("aria-pressed", String(isLight));
  };

  updateLabel();
  themeButton.addEventListener("click", () => {
    const isLight = document.documentElement.dataset.theme === "light";
    document.documentElement.dataset.theme = isLight ? "dark" : "light";
    localStorage.setItem("leonel-site-theme", isLight ? "dark" : "light");
    updateLabel();
  });
}
