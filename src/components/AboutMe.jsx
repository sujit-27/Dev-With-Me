import { motion } from "framer-motion";
import AboutImg from "../assets/About1.png";

export default function AboutMe() {
  const sentences = [
    "Hi! I'm Sujit Kumar Shaw, a passionate and creative developer.",
    "Currently pursuing a B.Tech in Information Technology at Kalyani Government Engineering College, graduating in 2027.",
    "I specialize in building dynamic, interactive, and user-friendly web applications using React, Tailwind CSS, and JavaScript. I also have backend expertise with Spring Boot and Appwrite, creating robust and scalable systems. My projects range from eCommerce websites to real-time smart solutions, showcasing my love for both frontend design and backend logic. I thrive on solving complex problems, learning new technologies, and creating meaningful digital experiences. When I'm not coding, I explore UI/UX design trends and ways to enhance user interaction with elegant animations and thoughtful details.",
    "Let's build something amazing together!",
  ];

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.5 },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-10 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-gray-600 bg-clip-text text-transparent inline-block">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Get to know a bit more about who I am and what I do.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="lg:flex lg:items-center lg:gap-16">
          {/* Text Section */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-2/3 space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-400"
          >
            {sentences.map((sentence, index) => (
              <motion.p key={index} variants={textItemVariants}>
                {sentence}
              </motion.p>
            ))}
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex items-center justify-center mt-10 lg:mt-0"
          >
            <motion.img
              src={AboutImg}
              alt="About"
              className="rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 w-full max-w-md object-cover transform transition-transform duration-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
