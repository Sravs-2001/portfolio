import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const projects = [
  {
    title: "Project One",
    description: "A comprehensive dashboard for financial analytics with real-time data visualization.",
    tags: ["React", "TailwindCSS", "Recharts"],
    link: "#",
    bgClass: "bg-white/40 dark:bg-blue-900/20 hover:bg-white/60 dark:hover:bg-blue-800/30"
  },
  {
    title: "Project Two",
    description: "E-commerce platform with seamless checkout and inventory management.",
    tags: ["Next.js", "Stripe", "Supabase"],
    link: "#",
    bgClass: "bg-white/40 dark:bg-purple-900/20 hover:bg-white/60 dark:hover:bg-purple-800/30"
  },
  {
    title: "Project Three",
    description: "AI-powered content generation tool for marketers.",
    tags: ["OpenAI API", "Node.js", "React"],
    link: "#",
    bgClass: "bg-white/40 dark:bg-emerald-900/20 hover:bg-white/60 dark:hover:bg-emerald-800/30"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen text-neutral-900 dark:text-white font-sans relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto relative z-10 p-8 md:p-12 pt-32 md:pt-40">
        <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <motion.div
          layoutId="projects-card"
          className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl min-h-[80vh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 block">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-white/60">
            Selected Works
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="group h-full"
              >
                <Card className={`h-full min-h-[300px] flex flex-col justify-between ${project.bgClass} border-white/20 dark:border-white/10`}>
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono bg-black/5 dark:bg-white/10 px-2 py-1 rounded-md text-neutral-600 dark:text-white/70">{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} className="p-3 bg-black/5 dark:bg-white/5 rounded-full group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors">
                      <ArrowUpRight size={20} className="text-neutral-600 dark:text-white/60 group-hover:text-black dark:group-hover:text-white" />
                    </a>
                  </div>
                  <div>
                    <h3 className="text-3xl font-light mb-2 text-neutral-800 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">{project.title}</h3>
                    <p className="text-neutral-500 dark:text-white/50">{project.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
