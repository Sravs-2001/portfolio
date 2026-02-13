export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-12 h-6 rounded-full 
      bg-stone-300 dark:bg-stone-700 
      flex items-center transition-colors p-1"
      aria-label="Toggle Theme"
    >
      <span
        className={`absolute w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-300 ease-spring
        ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
}
