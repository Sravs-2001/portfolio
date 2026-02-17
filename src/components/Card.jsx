import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

export default function Card({ children, className = "", onClick, href, layoutId }) {
    const isInternal = href && href.startsWith('/');
    const Component = isInternal ? Link : (href ? 'a' : motion.div);

    return (
        <Component
            to={isInternal ? href : undefined}
            href={!isInternal ? href : undefined}
            onClick={onClick}
            layoutId={layoutId}
            className={`relative overflow-hidden rounded-[32px] 
        bg-white/40 dark:bg-white/5 
        backdrop-blur-2xl 
        border border-white/20 dark:border-white/10 
        shadow-xl dark:shadow-2xl
        ${className.includes('!p-0') ? '' : 'p-8'} 
        hover:bg-white/60 dark:hover:bg-white/10 
        transition-all duration-300 group ${className}`}
            {...(!href ? { whileHover: { scale: 1.02 }, transition: { type: "spring", stiffness: 300, damping: 20 } } : {})}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </Component>
    );
}
