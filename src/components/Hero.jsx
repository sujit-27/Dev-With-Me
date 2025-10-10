import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail, Code2, Braces, Terminal } from "lucide-react";
import { Button } from "./ui/Button";
import Background3D from "./Background3D";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const codeSnippets = [
    { code: "const code = 'art';", delay: 0 },
    { code: "function design() {", delay: 0.5 },
    { code: "  return beauty;", delay: 1 },
    { code: "}", delay: 1.5 },
    { code: "array.map(idea =>", delay: 2 },
    { code: "  createMagic()", delay: 2.5 },
    { code: ");", delay: 3 },
  ];

  const treeNodes = [
    { value: 50, x: 50, y: 15, level: 0 },
    { value: 30, x: 25, y: 40, level: 1 },
    { value: 70, x: 75, y: 40, level: 1 },
    { value: 20, x: 12.5, y: 65, level: 2 },
    { value: 40, x: 37.5, y: 65, level: 2 },
    { value: 60, x: 62.5, y: 65, level: 2 },
    { value: 80, x: 87.5, y: 65, level: 2 },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 2, to: 6 },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Sujit_Kumar_Shaw_Resume.pdf";
    link.download = "Sujit_Kumar_Shaw_Resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Background3D />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg flex items-center gap-2"
              >
                <Code2 className="w-5 h-5 text-blue-500" />
                Hi, I'm
              </motion.p>
              
              <h1 className="font-accent text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <TypeAnimation
                  sequence={[
                    "Sujit Kumar Shaw",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent"
                  data-testid="hero-name"
                />
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-xl sm:text-2xl lg:text-3xl font-display text-muted-foreground"
              >
                <TypeAnimation
                  sequence={[
                    1500,
                    "Crafting Elegant Web Experiences",
                  ]}
                  wrapper="span"
                  speed={50}
                  data-testid="hero-tagline"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="text-muted-foreground text-lg max-w-xl"
              data-testid="hero-description"
            >
              A creative developer passionate about building beautiful, functional, and user-friendly digital experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button 
                size="lg" 
                variant="default" 
                onClick={handleDownloadResume}
                data-testid="button-download-resume-hero">
                <div className="flex">
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </div>
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact} data-testid="button-contact-hero">
                <div className="flex">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Me
                </div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Section - Algorithm Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] hidden lg:block"
          >
            {/* Binary Search Tree Visualization */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {/* Tree connections */}
                {connections.map((conn, idx) => {
                  const fromNode = treeNodes[conn.from];
                  const toNode = treeNodes[conn.to];
                  return (
                    <motion.line
                      key={`line-${idx}`}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke="url(#gradient)"
                      strokeWidth="0.3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 1, delay: 1 + idx * 0.2 }}
                    />
                  );
                })}
                
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>

                {/* Tree nodes */}
                {treeNodes.map((node, idx) => (
                  <g key={`node-${idx}`}>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="3"
                      fill="url(#gradient)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1.5 + idx * 0.15,
                        type: "spring",
                        stiffness: 200
                      }}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="3"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="0.2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [1, 1.8, 1],
                        opacity: [0.8, 0, 0.8]
                      }}
                      transition={{ 
                        duration: 2, 
                        delay: 1.5 + idx * 0.15,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                    <motion.text
                      x={node.x}
                      y={node.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="2.5"
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 + idx * 0.15 }}
                    >
                      {node.value}
                    </motion.text>
                  </g>
                ))}
              </svg>

              {/* Floating Code Snippets */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {codeSnippets.map((snippet, idx) => (
                  <motion.div
                    key={`snippet-${idx}`}
                    className="absolute text-xs sm:text-sm font-mono text-blue-400/40 whitespace-nowrap"
                    initial={{ 
                      opacity: 0, 
                      x: -20,
                      y: Math.random() * 80 + 10 + '%'
                    }}
                    animate={{ 
                      opacity: [0, 0.6, 0.6, 0],
                      x: ['0%', '100%'],
                      y: `${Math.random() * 80 + 10}%`
                    }}
                    transition={{ 
                      duration: 15 + idx * 2,
                      delay: snippet.delay,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      top: `${10 + idx * 12}%`,
                    }}
                  >
                    {snippet.code}
                  </motion.div>
                ))}
              </div>

              {/* Floating Icons */}
              <motion.div
                className="absolute top-10 right-10"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Braces className="w-12 h-12 text-violet-500/30" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-10"
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Terminal className="w-10 h-10 text-blue-500/30" />
              </motion.div>

              {/* Particle Effect */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                  initial={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    opacity: 0
                  }}
                  animate={{
                    y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Glowing Orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
