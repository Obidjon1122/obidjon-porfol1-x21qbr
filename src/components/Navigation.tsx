import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, User, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/projects', icon: Briefcase, label: 'Projects' },
  { path: '/contact', icon: Mail, label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-lg rounded-lg text-white md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <motion.nav
        initial={false}
        animate={{ x: isOpen ? 0 : '100%' }}
        className="fixed inset-y-0 right-0 w-64 bg-white/10 backdrop-blur-lg p-8 md:w-20 md:translate-x-0 z-40"
      >
        <div className="flex flex-col items-center space-y-6">
          {navItems.map(({ path, icon: Icon, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center space-x-4 text-white p-2 rounded-lg transition-colors
                ${isActive ? 'bg-indigo-600' : 'hover:bg-white/10'}`
              }
              onClick={() => setIsOpen(false)}
            >
              <Icon size={24} />
              <span className="md:hidden">{label}</span>
            </NavLink>
          ))}
        </div>
      </motion.nav>
    </>
  );
}