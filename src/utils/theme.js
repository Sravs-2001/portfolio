export const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem("theme") || "dark";
};

export const applyTheme = (theme) => {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
};
