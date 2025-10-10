import { motion } from "framer-motion";

export default function Background3D() {
  const shapes = [
    { id: 1, size: 200, x: 10, y: 20, delay: 0, duration: 8 },
    { id: 2, size: 150, x: 70, y: 60, delay: 1, duration: 10 },
    { id: 3, size: 100, x: 30, y: 80, delay: 0.5, duration: 7 },
    { id: 4, size: 180, x: 80, y: 30, delay: 1.5, duration: 9 },
    { id: 5, size: 120, x: 50, y: 50, delay: 0.8, duration: 11 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-chart-2/5" />
      
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-lg"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            background: `linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(168, 85, 247, 0.1))`,
            backdropFilter: "blur(2px)",
            border: "1px solid rgba(56, 189, 248, 0.2)",
          }}
          animate={{
            y: [0, -30, 0],
            rotateZ: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
