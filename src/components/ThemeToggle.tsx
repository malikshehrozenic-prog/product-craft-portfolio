import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="relative w-14 h-7 rounded-full border border-border/50 bg-muted/50 flex items-center px-1 cursor-hover"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-xs"
        animate={{ x: isDark ? 0 : 24 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <motion.span
          animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? "🌙" : "☀️"}
        </motion.span>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
