import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/", label: "Work" },
  { path: "/about", label: "About" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/70 backdrop-blur-xl border-b border-border/30" 
            : "bg-transparent"
        }`}
      >
        {/* Progress-tinted background */}
        <motion.div
          className="absolute inset-0 bg-background/80 pointer-events-none"
          style={{ opacity: navOpacity }}
        />

        <div className="container max-w-6xl mx-auto px-6 relative">
          <div className="flex items-center justify-between h-16">
            {/* Logo with hover animation */}
            <motion.a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="font-display text-2xl text-primary relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">MS</span>
              <motion.div
                className="absolute inset-0 -m-2 rounded-lg bg-primary/5"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                >
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${
                    location.pathname === item.path 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}>
                    {item.label}
                  </span>
                </Link>
              ))}
              <motion.button
                onClick={handleContactClick}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact
              </motion.button>
              {/* Availability indicator */}
              <div className="ml-4 flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/30 bg-muted/30">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-status-green"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-body text-muted-foreground">Available</span>
              </div>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6">
                <span className="font-display text-2xl text-primary">MS</span>
                <motion.button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileOpen(false)}
                      className="font-display text-4xl text-foreground hover:text-primary transition-colors relative group"
                    >
                      {item.label}
                      <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-px bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  onClick={handleContactClick}
                  className="font-display text-4xl text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
