import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, SiSpringboot, SiTailwindcss, SiJavascript, SiTypescript, 
  SiPostgresql, SiGit, SiDocker, SiPostman, SiApachekafka, SiSupabase 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";


export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Spring", icon: SiSpringboot, color: "text-[#339933]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "Java", icon: FaJava, color: "text-[#007396]" },
  { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
  { name: "Kafka", icon: SiApachekafka, color: "text-[#231F20]" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
];


  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-gray-600 bg-clip-text text-transparent inline-block">
  Tech Stack
</h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="skill-icon group relative"
              >
                <div className="bg-card border border-card-border rounded-lg p-6 text-center hover-elevate transition-all duration-300">
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                    className="mb-4 flex justify-center"
                  >
                    <Icon className={`text-5xl ${skill.color} drop-shadow-lg group-hover:drop-shadow-2xl transition-all`} />
                  </motion.div>
                  <h3 className="font-display font-semibold text-foreground">{skill.name}</h3>
                  
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color.replace('text-', 'rgba(from ')}20, transparent 70%)`,
                      filter: "blur(20px)",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
