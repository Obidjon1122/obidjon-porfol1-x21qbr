import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="max-w-3xl mx-auto text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-6"
        >
          Creative Developer
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-200 mb-8"
        >
          Building beautiful digital experiences with modern web technologies
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 pointer-events-auto"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-white hover:text-indigo-400 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}