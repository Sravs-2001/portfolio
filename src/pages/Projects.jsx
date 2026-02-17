import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, GitFork, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Sravs-2001/repos?sort=updated&per_page=100');
        const data = await response.json();

        // Filter out forks if desired, or just take the best ones
        const filteredData = data
          .filter(repo => !repo.fork) // Optional: filter out forks
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // Sort by most recently updated

        setProjects(filteredData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Helper to assign colors based on language (or random)
  const getBgClass = (language) => {
    switch (language) {
      case 'JavaScript': return "bg-yellow-100/40 dark:bg-yellow-900/10 hover:bg-yellow-200/60 dark:hover:bg-yellow-800/20";
      case 'TypeScript': return "bg-blue-100/40 dark:bg-blue-900/10 hover:bg-blue-200/60 dark:hover:bg-blue-800/20";
      case 'HTML': return "bg-orange-100/40 dark:bg-orange-900/10 hover:bg-orange-200/60 dark:hover:bg-orange-800/20";
      case 'CSS': return "bg-indigo-100/40 dark:bg-indigo-900/10 hover:bg-indigo-200/60 dark:hover:bg-indigo-800/20";
      default: return "bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10";
    }
  };

  // Helper to get a preview image URL based on project name or use a placeholder
  const getProjectImage = (project) => {
    // Use OpenGraph image if available (not directly via API, so we use a trick or patterns)
    // Since we can't easily get the real OG image without a proxy, we'll try to use the social preview if matched,
    // Or use a nice gradient placeholder generated from the name.
    return `https://opengraph.githubassets.com/1/${project.full_name}`;
  };

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

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-900 dark:border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  className="group h-full"
                >
                  <Card
                    href={project.html_url}
                    className={`h-full min-h-[400px] flex flex-col justify-between ${getBgClass(project.language)} border-white/20 dark:border-white/10 !p-0`}
                  >
                    {/* Image Section */}
                    <div className="w-full h-48 overflow-hidden border-b border-black/5 dark:border-white/5 relative bg-white/50 dark:bg-black/20">
                      <img
                        src={getProjectImage(project)}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none'; // Hide broken images
                        }}
                      />
                      <div className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full border border-white/20 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight size={16} className="text-black dark:text-white" />
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.language && (
                            <span className="text-xs font-mono bg-black/5 dark:bg-white/10 px-2 py-1 rounded-md text-neutral-600 dark:text-white/70">{project.language}</span>
                          )}
                          <span className="flex items-center gap-1 text-xs font-mono bg-black/5 dark:bg-white/10 px-2 py-1 rounded-md text-neutral-600 dark:text-white/70">
                            <Star size={12} className="text-yellow-500" /> {project.stargazers_count}
                          </span>
                          {project.fork && (
                            <span className="flex items-center gap-1 text-xs font-mono bg-black/5 dark:bg-white/10 px-2 py-1 rounded-md text-neutral-600 dark:text-white/70">
                              <GitFork size={12} /> Fork
                            </span>
                          )}
                        </div>

                        <h3 className="text-3xl font-light mb-2 text-neutral-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1" title={project.name}>
                          {project.name.replace(/-/g, ' ')}
                        </h3>
                        <p className="text-neutral-500 dark:text-white/50 line-clamp-3 text-sm leading-relaxed">
                          {project.description ? project.description : "A cool project from my GitHub. Check out the code to learn more!"}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
