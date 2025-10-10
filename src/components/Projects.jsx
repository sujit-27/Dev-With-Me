import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import TrendoraImg from "../assets/Trendora.png"
import FilePulseImg from "../assets/FilePulse.png"
import GameVerseImg from '../assets/GameVerse.png'
import CertiQuestImg from '../assets/CertiQuest.png'
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Trendora",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: TrendoraImg,
      tags: ["React", "Appwrite", "Tailwind", "Razorpay"],
      liveUrl: "https://trendora-gules.vercel.app/",
      githubUrl: "https://github.com/sujit-27/Trendora.git",
    },
    {
      id: 2,
      title: "FilePulse",
      description: "File Pulse is a secure file exchange hub that enables seamless upload, sharing, and collaboration on files within a user-friendly interface.",
      image: FilePulseImg,
      tags: ["React", "Spring", "Postgres", "Tailwind", "Razorpay"],
      liveUrl: "https://file-pulse.vercel.app/",
      githubUrl: "https://github.com/sujit-27/FilePulse.git",
    },
    {
      id: 3,
      title: "Game-Verse – Explore and Discover Your Favorite Games",
      description: "GameVerse is a responsive React-based gaming app that showcases trending and new games using the RAWG API.",
      image: GameVerseImg,
      tags: ["React", "Tailwind", "Redux", "API"],
      liveUrl: "https://game-verse-eosin.vercel.app/",
      githubUrl: "https://github.com/sujit-27/Game-Verse.git",
    },
    {
      id: 4,
      title: "CertiQuest - AI Powered Quiz & Certification Platform",
      description: "CertiQuest is an AI-powered quiz and certification platform that allows users to create, take, and evaluate quizzes effortlessly.",
      image: CertiQuestImg,
      tags: ["React", "Spring", "Postgres", "Tailwind", "Razorpay"],
      liveUrl: "https://certi-quest-gamma.vercel.app/",
      githubUrl: "https://github.com/sujit-27/CertiQuest.git",
    },
  ];

  return (
    <section id="projects" ref={containerRef} className="py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{ y }}
      className="project-card group relative"
    >
      <div className="bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Button
              size="icon"
              variant="default"
              onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
              data-testid={`button-view-live-${project.id}`}
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
              data-testid={`button-view-code-${project.id}`}
            >
              <FaGithub className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="font-display text-2xl font-bold mb-2" data-testid={`project-title-${project.id}`}>
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" data-testid={`project-tag-${tag.toLowerCase()}`}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
