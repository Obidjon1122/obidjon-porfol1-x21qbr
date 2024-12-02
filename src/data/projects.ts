interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
}

interface ProjectSection {
  title: string;
  description: string;
  projects: Project[];
}

export const projectSections: ProjectSection[] = [
  {
    title: "System Administration",
    description: "Enterprise-level infrastructure and system management solutions",
    projects: [
      {
        title: "Cloud Infrastructure Manager",
        description: "Automated cloud resource provisioning and management system",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["AWS", "Terraform", "Docker"]
      },
      {
        title: "Network Monitoring Dashboard",
        description: "Real-time network performance monitoring and alerting system",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["Grafana", "Prometheus", "Node.js"]
      },
      {
        title: "Security Compliance Tool",
        description: "Automated security audit and compliance checking system",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["Python", "Docker", "Kubernetes"]
      }
    ]
  },
  {
    title: "AI Projects",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    projects: [
      {
        title: "Natural Language Processor",
        description: "Advanced NLP system for text analysis and generation",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["PyTorch", "Transformers", "FastAPI"]
      },
      {
        title: "Computer Vision System",
        description: "Real-time object detection and classification platform",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["TensorFlow", "OpenCV", "Python"]
      },
      {
        title: "Recommendation Engine",
        description: "AI-powered content and product recommendation system",
        image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["Scikit-learn", "PostgreSQL", "FastAPI"]
      }
    ]
  },
  {
    title: "Education",
    description: "Educational technology and learning management solutions",
    projects: [
      {
        title: "Interactive Learning Platform",
        description: "Gamified education platform with progress tracking",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["React", "Node.js", "MongoDB"]
      },
      {
        title: "Virtual Lab Environment",
        description: "Browser-based virtual laboratory for science experiments",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["Three.js", "WebGL", "React"]
      },
      {
        title: "Student Analytics Dashboard",
        description: "Learning analytics and performance tracking system",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["D3.js", "Express", "MySQL"]
      }
    ]
  },
  {
    title: "Future Plans",
    description: "Upcoming projects and innovations in development",
    projects: [
      {
        title: "Quantum Computing Simulator",
        description: "Educational platform for quantum computing concepts",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["Qiskit", "Python", "React"]
      },
      {
        title: "Blockchain Analytics",
        description: "Real-time blockchain data analysis and visualization",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["Web3.js", "Node.js", "GraphQL"]
      },
      {
        title: "AR Learning Experience",
        description: "Augmented reality educational content platform",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
        link: "#",
        technologies: ["Unity", "ARKit", "C#"]
      }
    ]
  }
];