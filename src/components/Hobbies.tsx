import { motion } from 'framer-motion';
import { Book, Cpu, Trophy } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      title: "Sports & Athletics",
      description: "Active participant in team sports, fostering teamwork, discipline, and strong leadership skills outside of academic environments.",
      icon: <Trophy className="w-10 h-10 text-orange-500" />
    },
    {
      title: "Reading & Learning",
      description: "Avid reader exploring topics in technology, personal growth, and science fiction to maintain a continuous learning mindset.",
      icon: <Book className="w-10 h-10 text-primary-500" />
    },
    {
      title: "Technology Exploration",
      description: "Constantly experimenting with new frameworks, open-source projects, and emerging tech trends to stay innovative.",
      icon: <Cpu className="w-10 h-10 text-purple-500" />
    }
  ];

  return (
    <section id="hobbies" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Hobbies & Interests
          </motion.h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                {hobby.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{hobby.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
