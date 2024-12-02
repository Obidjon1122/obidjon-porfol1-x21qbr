import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code2, Brain, GraduationCap, Rocket, ArrowRight } from 'lucide-react';
import { Profile } from '../components/Profile';

const sections = [
  {
    title: "System Administration",
    description: "Enterprise-level infrastructure and system management solutions",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    path: "/projects"
  },
  {
    title: "AI Projects",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    path: "/projects"
  },
  {
    title: "Education",
    description: "Educational technology and learning management solutions",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-500",
    path: "/projects"
  },
  {
    title: "Future Plans",
    description: "Upcoming projects and innovations in development",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
    path: "/projects"
  }
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Profile />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Explore my journey through technology, from system administration to artificial intelligence,
            education, and future innovations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                onClick={() => navigate(section.path)}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${section.color} p-[1px] rounded-lg`}>
                  <div className="bg-gray-900 rounded-lg p-6 h-full">
                    <div className="flex items-start justify-between">
                      <Icon className="w-12 h-12 mb-4" />
                      <ArrowRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
                    <p className="text-gray-300">{section.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <button
            onClick={() => navigate('/about')}
            className="bg-white/10 backdrop-blur-lg text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors"
          >
            Learn More About Me
          </button>
        </motion.div>
      </div>
    </div>
  );
}