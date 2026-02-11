export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-5 rounded-full 
      bg-black/20 dark:bg-[#f2f4f7]/20 
      flex items-center transition"
    >
      <span
        className={`absolute w-4 h-4 rounded-full bg-black dark:bg-[#f2f4f7] 
        transition-transform duration-300
        ${theme === "dark" ? "translate-x-4" : "translate-x-1"}`}
      />
    </button>
  );
}
