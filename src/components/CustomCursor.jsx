import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    const handleMouseOver = (e) => {
      if (e.target.closest("button, a, .cursor-pointer")) {
        setIsHovering(true);
        setCursorVariant("button");
      } else if (e.target.closest(".project-card")) {
        setIsHovering(true);
        setCursorVariant("project");
      } else if (e.target.closest(".skill-icon")) {
        setIsHovering(true);
        setCursorVariant("skill");
      } else {
        setIsHovering(false);
        setCursorVariant("default");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      width: 24,
      height: 24,
      backgroundColor: "rgba(56, 189, 248, 0.5)",
      border: "2px solid rgba(56, 189, 248, 1)",
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: "rgba(56, 189, 248, 0.3)",
      border: "2px solid rgba(56, 189, 248, 1)",
    },
    project: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      borderRadius: "8px",
      backgroundColor: "rgba(168, 85, 247, 0.4)",
      border: "2px solid rgba(168, 85, 247, 1)",
    },
    skill: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      backgroundColor: "rgba(168, 85, 247, 1)",
      border: "none",
    },
  };

  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-screen"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
