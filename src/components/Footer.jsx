import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/Button";
import { SiInstagram } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/sujit-27", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sujit-kumar-shaw/", label: "LinkedIn" },
    { icon: SiInstagram, href: "https://www.instagram.com/sujit.815", label: "Instagram" },
  ];

  return (
    <footer className="relative border-t border-border bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center hover-elevate transition-all"
                  data-testid={`link-social-${link.label.toLowerCase()}`}
                >
                  <Icon className="h-5 w-5 text-foreground" />
                </motion.a>
              );
            })}
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Sujit Kumar Shaw. All rights reserved.
          </p>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full"
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
