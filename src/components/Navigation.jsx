import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/Button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState("home"); // Added active state

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Sujit_Kumar_Shaw_Resume.pdf";
    link.download = "Sujit_Kumar_Shaw_Resume.pdf";
    link.click();
  };


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setActiveLink(id); // Update active link on click
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "About Me", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-extrabold font-accent
              bg-gradient-to-r from-[#4F46E5] to-[#3B82F6]
              bg-clip-text text-transparent
              drop-shadow-[0_0_6px_#009999]
              drop-shadow-[0_0_12px_#cc33cc]
              drop-shadow-[0_0_18px_#5a2a82]
              animate-pulse"
          >
            S.K.S
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 relative">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(link.id)}
                className="relative text-foreground font-medium group"
              >
                <span
                  className={`relative z-10 cursor-pointer ${
                    activeLink === link.id
                      ? "text-blue-500"
                      : "text-foreground hover:text-blue-500 transition-colors"
                  }`}
                >
                  {link.name}
                </span>

                {/* Animated underline */}
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded"
                  initial={false}
                  animate={{
                    opacity: activeLink === link.id ? 1 : 0,
                    width: activeLink === link.id ? "100%" : 0,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />

                {/* Hover underline */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-300 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-800" />
              )}
            </Button>
            <Button
              variant="default"
              size="lg"
              className="flex items-center gap-2"
              onClick={handleDownloadResume}
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-inner"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="flex-1"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-800" />
                  )}
                </Button>
                <Button variant="default" size="sm" className="flex-1 flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
