import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A premium personal portfolio developed using modern web technologies to showcase skills, projects, and achievements. Features smooth animations, glassmorphism UI, and dark mode support.",
      gradient: "from-sky-400 via-blue-500 to-indigo-600",
      emoji: "🌐",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/sneha-s2005",
      live: "#"
    },
    {
      title: "Student Management System",
      description: "A robust Python-based management application for educational institutions. Handles student records, attendance tracking, and performance analytics with an intuitive interface.",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      emoji: "🎓",
      tech: ["Python", "Tkinter", "SQLite", "Data Analysis"],
      github: "https://github.com/sneha-s2005",
      live: ""
    },
    {
      title: "Responsive Business Landing Page",
      description: "Modern, fully responsive business website project focusing on conversion optimization, fast loading times, and SEO best practices.",
      gradient: "from-orange-400 via-rose-500 to-pink-600",
      emoji: "💼",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/sneha-s2005",
      live: "#"
    },
    {
      title: "Hackathon Analytics Dashboard",
      description: "Innovative solution developed during a hackathon to track and analyze team performance, code commits, and project milestones in real-time.",
      gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
      emoji: "📊",
      tech: ["React", "Chart.js", "Node.js", "REST API"],
      github: "https://github.com/sneha-s2005",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative h-60 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-80 group-hover:scale-125 transition-transform duration-500">{project.emoji}</span>
                </div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-white text-lg font-bold drop-shadow-lg">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="flex items-center gap-1 text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                      <Code2 className="w-3 h-3" /> {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                  >
                    <FaGithub size={18} /> Code
                  </a>
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-purple-600 text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all font-medium"
                    >
                      Live Demo <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
