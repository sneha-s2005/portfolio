import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { title: "Python Programming Masterclass", issuer: "Udemy", date: "2025" },
    { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "2024" },
    { title: "Problem Solving (Basic)", issuer: "HackerRank", date: "2024" },
    { title: "Technical Workshop on AI/ML", issuer: "Presidency University", date: "2025" },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Certifications
          </motion.h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-5 md:p-6 rounded-xl flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400 to-primary-500 opacity-20 rounded-bl-full transform group-hover:scale-110 transition-transform"></div>
              
              <Award className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">{cert.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
              <div className="mt-auto pt-4 flex items-center gap-1 text-xs text-green-600 dark:text-green-400 font-medium">
                <CheckCircle className="w-3 h-3" /> Verified ({cert.date})
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
