import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Send, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative z-10 p-8 md:p-12 pt-32 md:pt-40">
      <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors mb-12 group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </Link>

      <motion.div
        layoutId="contact-card"
        className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl min-h-[600px] flex flex-col justify-center"
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Left Column */}
          <div>
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4 block">Contact</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-white/60">
              Let's Talk
            </h1>
            <p className="text-xl text-neutral-700 dark:text-white/60 leading-relaxed mb-12">
              Have a project in mind or just want to say hi? Feel free to send me a message.
            </p>

            <div className="space-y-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sravanimadaka1@gmail.com&su=Message%20for%20Sravani%20Madaka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-600 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors group p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-white/20 dark:border-white/5 hover:border-white/40 dark:hover:border-white/10"
              >
                <div className="p-3 bg-white/40 dark:bg-white/5 rounded-full group-hover:bg-white/60 dark:group-hover:bg-white/10 transition-colors">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium opacity-50">Sravani Madaka</span>
                  <span className="text-lg">sravanimadaka1@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/40 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-[24px] p-6 lg:p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">Message Sent!</h3>
                <p className="text-neutral-500 dark:text-white/50">I'll get back to you as soon as possible.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-sm text-neutral-500 hover:text-black dark:text-white/40 dark:hover:text-white underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-600 dark:text-white/60 mb-2">Name</label>
                  <input type="text" required className="w-full bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neutral-400 dark:focus:border-white/30 transition-colors text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/20" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-600 dark:text-white/60 mb-2">Email</label>
                  <input type="email" required className="w-full bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neutral-400 dark:focus:border-white/30 transition-colors text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/20" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-600 dark:text-white/60 mb-2">Message</label>
                  <textarea required rows={4} className="w-full bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neutral-400 dark:focus:border-white/30 transition-colors text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/20" placeholder="Tell me about your project..." />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl px-6 py-4 hover:bg-neutral-800 dark:hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Message <Send size={18} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
