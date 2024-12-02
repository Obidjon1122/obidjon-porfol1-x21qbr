import { motion } from 'framer-motion';
import { Code2, Palette, Lightbulb } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Development',
    description: 'Expertise in React, TypeScript, and modern web technologies'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating beautiful and intuitive user interfaces'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Turning complex challenges into elegant solutions'
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-200 text-lg mb-12"
        >
          <p className="mb-4">
            I'm a passionate developer focused on creating immersive web experiences.
            With a strong foundation in modern web technologies, I bring ideas to life
            through clean code and creative solutions.
          </p>
          <p>
            My journey in web development has led me to work with various technologies
            and frameworks, always staying at the forefront of innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center"
              >
                <Icon className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}