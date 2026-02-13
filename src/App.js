import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes({ theme, setTheme }) {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
       {/* Global Background - Persists Across Routes */}
       <div className="fixed inset-0 bg-[#f0f2f5] dark:bg-neutral-950 transition-colors duration-500 -z-20" />
       
       {/* Ambient Gradients - Adjusted for Light/Dark */}
       <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -z-10 transition-colors duration-500" />
       <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-300/30 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -z-10 transition-colors duration-500" />
       
       <Navbar theme={theme} setTheme={setTheme} />
       
       <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <AnimatedRoutes theme={theme} setTheme={setTheme} />
    </BrowserRouter>
  );
}
