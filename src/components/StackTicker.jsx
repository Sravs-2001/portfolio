import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "https://framerusercontent.com/images/YSG9Il0233T2Woq4Fpetvt6FxGA.webp",
    "https://framerusercontent.com/images/0j5gYeoRsZG8PJ9hniVzHMcaYo.webp",
    "https://framerusercontent.com/images/Jo45NE9cozyWEGOc3q5r66Sl98.webp",
    "https://framerusercontent.com/images/9RCvsOul5SzZBJr1jZ2P5dKjLc.webp",
    "https://framerusercontent.com/images/DqvuS90E062F5mQTYxRztACjEWs.webp",
    "https://framerusercontent.com/images/dn7QoOO5bw8IB8S45pqyNaWr1RI.webp",
    "https://framerusercontent.com/images/O04c1vkhn73dPjg0bBMR5PCp0.webp",
    "https://framerusercontent.com/images/6iUqSWA8HhqKewIWzauruisFCkE.webp"
];

// Duplicate for seamless loop
const allSkills = [...skills, ...skills, ...skills];

export default function StackTicker() {
    return (
        <div className="flex overflow-hidden w-full h-full items-center">
            <motion.div
                className="flex gap-4 pr-4"
                animate={{ x: "-33.33%" }}
                initial={{ x: "0%" }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                }}
            >
                {allSkills.map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-12 h-12 bg-white/40 dark:bg-white/10 rounded-xl p-2 flex items-center justify-center backdrop-blur-sm border border-black/5 dark:border-white/5">
                        <img src={src} alt="tool" className="w-full h-full object-contain opacity-80" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
