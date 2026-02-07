import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection?: string;
}

const NAV_ITEMS = [
  { id: "thesis", label: "Thesis" },
  { id: "case-studies", label: "Work" },
  { id: "operating-system", label: "System" },
  { id: "about", label: "About" },
];

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-lg border-b border-border/50" 
            : "bg-transparent"
        }`}
      >
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="font-display text-2xl text-primary hover:opacity-80 transition-opacity"
            >
              MS
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-primary -translate-x-1/2"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            >
              <Menu className="w-5 h-5" />
            </button>
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
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6">
                <span className="font-display text-2xl text-primary">MS</span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="font-display text-3xl text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
