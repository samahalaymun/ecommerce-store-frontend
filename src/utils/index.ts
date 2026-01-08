export function setBrandTheme(themeId: string) {
  const root = document.documentElement;
  if (themeId === "default") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", themeId);
  }
  localStorage.setItem("brand-theme", themeId);
}
