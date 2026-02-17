import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import profile from '../assets/1768823700276.jpg';
import Card from '../components/Card';
import StackTicker from '../components/StackTicker';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center font-sans overflow-hidden relative selection:bg-purple-500/30 p-4 md:p-8">


      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative z-10 pt-20 pb-10"
      >

        {/* Name Header - Full Width */}
        <div className="col-span-1 md:col-span-4 flex flex-col items-center justify-center pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-white/40 text-center leading-tight"
          >
            Sravani Madaka
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-500 dark:text-white/50 mt-4 font-light tracking-wide"
          >
            Software Developer based in Hyderabad
          </motion.p>
        </div>

        {/* Row 1 */}
        {/* About Card */}
        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="col-span-1 md:col-span-1 h-[300px]">
          <Card href="/about" layoutId="about-card" className="h-full flex flex-col justify-between group cursor-pointer bg-white/40 dark:bg-white/5 border-white/20 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/20">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-neutral-500 dark:text-white/40 uppercase tracking-[0.2em]">About</span>
              <div className="p-2 rounded-full bg-white/40 dark:bg-white/5 group-hover:bg-white/60 dark:group-hover:bg-white/20 transition-colors">
                <ArrowUpRight size={16} className="text-neutral-600 dark:text-white/60 group-hover:text-black dark:group-hover:text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-neutral-800 dark:text-white/90">Who I am</h2>
              <p className="text-sm text-neutral-500 dark:text-white/40 mt-2 leading-relaxed">Passionate about building scalable web applications and intuitive interfaces.</p>
            </div>
          </Card>
        </motion.div>

        {/* Portfolio Card */}
        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="col-span-1 md:col-span-3 h-[300px]">
          <Card href="/projects" layoutId="projects-card" className="h-full flex flex-col justify-between group cursor-pointer bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 border-white/20 dark:border-white/10 hover:border-indigo-200 dark:hover:border-white/20">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-neutral-500 dark:text-white/40 uppercase tracking-[0.2em]">Portfolio</span>
              <div className="p-2 rounded-full bg-white/40 dark:bg-white/5 group-hover:bg-white/60 dark:group-hover:bg-white/20 transition-colors">
                <ArrowUpRight size={16} className="text-neutral-600 dark:text-white/60 group-hover:text-black dark:group-hover:text-white" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
              <div>
                <h2 className="text-4xl font-light text-neutral-800 dark:text-white/90">Selected Works</h2>
                <p className="text-neutral-500 dark:text-white/40 mt-2 text-lg">Web Apps • Design Systems • UI/UX</p>
              </div>
              {/* Decorative mockups or circles could go here */}
              <div className="flex -space-x-4 opacity-50">
                <div className="w-12 h-12 rounded-full bg-white/40 dark:bg-white/10 border border-white/20 dark:border-white/5" />
                <div className="w-12 h-12 rounded-full bg-white/40 dark:bg-white/10 border border-white/20 dark:border-white/5" />
                <div className="w-12 h-12 rounded-full bg-white/40 dark:bg-white/10 border border-white/20 dark:border-white/5" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Row 2 */}
        {/* Contact Card */}
        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="col-span-1 md:col-span-2 h-[300px]">
          <Card onClick={() => navigate('/contact')} layoutId="contact-card" className="h-full flex flex-col justify-between group cursor-pointer bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border-white/20 dark:border-white/10 hover:border-emerald-200 dark:hover:border-white/20">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-neutral-500 dark:text-white/40 uppercase tracking-[0.2em]">Contact</span>
              <div className="p-2 rounded-full bg-white/40 dark:bg-white/5 group-hover:bg-white/60 dark:group-hover:bg-white/20 transition-colors">
                <ArrowUpRight size={16} className="text-neutral-600 dark:text-white/60 group-hover:text-black dark:group-hover:text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-neutral-800 dark:text-white/90">Let's work together</h2>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sravanimadaka1@gmail.com&su=Message%20for%20Sravani%20Madaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 bg-white/40 dark:bg-white/5 rounded-full hover:bg-white/60 dark:hover:bg-white/20 text-neutral-600 dark:text-white/60 hover:text-black dark:hover:text-white transition-all border border-white/20 dark:border-white/5"
                >
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/sravani-madaka-4032391b3/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-3 bg-white/40 dark:bg-white/5 rounded-full hover:bg-white/60 dark:hover:bg-white/20 text-neutral-600 dark:text-white/60 hover:text-black dark:hover:text-white transition-all border border-white/20 dark:border-white/5"><Linkedin size={20} /></a>
                <a href="https://github.com/Sravs-2001/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-3 bg-white/40 dark:bg-white/5 rounded-full hover:bg-white/60 dark:hover:bg-white/20 text-neutral-600 dark:text-white/60 hover:text-black dark:hover:text-white transition-all border border-white/20 dark:border-white/5"><Github size={20} /></a>
                {/* <a href="#" onClick={(e) => e.stopPropagation()} className="p-3 bg-white/40 dark:bg-white/5 rounded-full hover:bg-white/60 dark:hover:bg-white/20 text-neutral-600 dark:text-white/60 hover:text-black dark:hover:text-white transition-all border border-white/20 dark:border-white/5"><Twitter size={20} /></a> */}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Profile Card */}
        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="col-span-1 md:col-span-1 h-[300px]">
          <Card className="h-full p-0 overflow-hidden relative group border-white/20 dark:border-white/10">
            <img src={profile} alt="Sravani Madaka" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div className="glass-panel px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10">
                <span className="text-white/90 font-medium text-xs tracking-wide">@sravs</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Stack & Resume Column */}
        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="col-span-1 md:col-span-1 flex flex-col gap-4 md:gap-6 h-[300px]">
          {/* Stack */}
          <div className="flex-1 relative overflow-hidden rounded-[32px]">
            <Card className="h-full flex items-center justify-center p-0 bg-white/40 dark:bg-white/5 border-white/20 dark:border-white/10">
              <StackTicker />
              <div className="absolute top-4 left-6">
                <span className="text-xs font-semibold text-neutral-500 dark:text-white/40 uppercase tracking-[0.2em]">Stack</span>
              </div>
            </Card>
          </div>

          {/* Resume */}
          <div className="h-[100px]">
            <Card href="/resume.pdf" className="h-full flex items-center justify-between group cursor-pointer bg-white/40 dark:bg-white/5 border-white/20 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10">
              <span className="text-lg font-light text-neutral-800 dark:text-white/90 ml-2">Resume</span>
              <div className="p-2 rounded-full bg-white/40 dark:bg-white/5 group-hover:bg-white/60 dark:group-hover:bg-white/20 transition-colors">
                <ArrowUpRight size={16} className="text-neutral-600 dark:text-white/60 group-hover:text-black dark:group-hover:text-white" />
              </div>
            </Card>
          </div>
        </motion.div>

      </motion.div>

      {/* Footer */}
      <div className="mt-12 text-neutral-400 dark:text-white/20 text-xs font-light tracking-widest uppercase">
        © 2026 Sravani Madaka
      </div>
    </div>
  );
}
