import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left order-2 md:order-1"
          >
            <h2 className="text-primary-500 text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase mb-3">Welcome to my portfolio</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600">Sneha</span>
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              B.Tech CSE Student @ Presidency University
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Building innovative digital experiences through code, creativity, and continuous learning. Passionate about Python, Web Development, and solving real-world problems.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="#projects" className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30 flex items-center gap-2 text-sm sm:text-base">
                View Projects <ExternalLink size={18} />
              </a>
              <a href="#contact" className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 font-medium transition-colors text-sm sm:text-base">
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center md:justify-start gap-6">
              <a href="https://github.com/sneha-s2005" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-950 dark:hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sneha-s-5b7b08342" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-950 dark:hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:acharyasneha2005@gmail.com" className="text-gray-500 hover:text-gray-950 dark:hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-full animate-spin-slow opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white/20 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 overflow-hidden glass shadow-2xl">
                 <img src="/images.jpeg" alt="Sneha" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm text-gray-800 dark:text-white"
              >
                Python Dev
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-8 -left-4 sm:bottom-10 sm:-left-8 glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm text-gray-800 dark:text-white"
              >
                Web Dev
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
