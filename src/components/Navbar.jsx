import { useRef, useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-start pointer-events-none"
    >
      <Link to="/" className="flex flex-col gap-1 pointer-events-auto group">
        <h2 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Sravani Madaka</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Software Developer</p>
      </Link>

      <div className="flex flex-col md:flex-row gap-4 items-end md:items-center text-right text-sm font-medium text-neutral-900 dark:text-white pointer-events-auto">
        <span className="hidden md:inline-block opacity-60">Hyderabad, IN</span>
        <span className="hidden md:inline-block opacity-60">•</span>
        <span className="tabular-nums opacity-60 w-16 text-right">{formattedTime}</span>
        <div className="bg-white/10 backdrop-blur-md rounded-full border border-white/20 dark:border-white/10 p-1 shadow-sm">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </motion.header>
  );
}
