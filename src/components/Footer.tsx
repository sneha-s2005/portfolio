import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-600 mb-2">
              Portfolio
            </h3>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Sneha S. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/sneha-s2005" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/sneha-s-5b7b08342" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all">
              <FaLinkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all">
              <FaTwitter size={18} />
            </a>
          </div>

        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-600 hover:-translate-y-1 transition-all"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
