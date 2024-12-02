import { motion } from 'framer-motion';
import { projectSections } from '../data/projects';
import { ProjectSection } from '../components/ProjectSection';

export function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white text-center mb-12"
      >
        Portfolio
      </motion.h1>
      
      <div className="max-w-7xl mx-auto">
        {projectSections.map((section, index) => (
          <ProjectSection
            key={section.title}
            title={section.title}
            description={section.description}
            projects={section.projects}
          />
        ))}
      </div>
    </div>
  );
}