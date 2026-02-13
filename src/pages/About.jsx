import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="w-full max-w-4xl mx-auto relative z-10 p-8 md:p-12 pt-32 md:pt-40">
            <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors mb-12 group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
            </Link>

            <motion.div
                layoutId="about-card"
                className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[32px] p-8 md:p-16 shadow-2xl"
            >
                <div className="flex justify-between items-start mb-12">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest block">About Me</span>
                    {/* Close/Back UI element could go here if modal style */}
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-white/60">
                    Designing the future, one pixel at a time.
                </h1>

                <div className="space-y-6 text-lg text-neutral-700 dark:text-white/70 leading-relaxed font-light">
                    <p>
                        I'm Sravani Madaka, a Software Developer based in Hyderabad. My journey began with a curiosity for how things work on the web, and evolved into a passion for creating seamless, beautiful, and functional user experiences.
                    </p>
                    <p>
                        I specialize in React, Tailwind CSS, and modern web technologies. I believe that good design is not just about how it looks, but how it works. I strive to build applications that are accessible, performant, and delightful to use.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new design trends, contributing to open source, or sipping coffee while brainstorming my next project.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
