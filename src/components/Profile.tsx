import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/yourusername",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/yourusername",
    label: "Twitter"
  },
  {
    icon: Mail,
    href: "mailto:your.email@example.com",
    label: "Email"
  }
];

export function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="relative w-40 h-40 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
        <img
          alt="Profile"
          className="relative w-full h-full object-cover rounded-full border-4 border-white/10"
        />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-2">Alikulov Obidjon</h2>
      <p className="text-gray-300 mb-6">Full Stack Developer & System Administrator</p>
      
      <div className="flex justify-center space-x-4">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label={link.label}
            >
              <Icon className="w-5 h-5 text-white" />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}