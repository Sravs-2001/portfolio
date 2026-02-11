import ThemeToggle from "./ThemeToggle";

export default function Navbar({ theme, setTheme }) {
  return (
    <nav
      className="
  w-full h-[76px] px-6 flex items-center justify-between
  transition-colors duration-300
  bg-[#f2f4f7] dark:bg-black
  text-black dark:text-white
  "
    >
      <div className="flex items-center gap-24">
        <p className="text-base font-medium  text-black dark:text-white">
          Sravani Madaka
        </p>
        <p className="text-base font-medium  text-black opacity-90 dark:text-white">
          Software Developer
        </p>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span>Hyderabad</span>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <span className="tabular-nums opacity-90">11:42 AM</span>
      </div>
    </nav>
  );
}
