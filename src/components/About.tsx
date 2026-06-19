import { motion } from 'framer-motion';
import { Target, Code, Cpu } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code className="w-8 h-8 text-primary-500" />,
      title: "Strong Foundation",
      description: "Solid understanding of Data Structures, Algorithms, and Object-Oriented Programming using Python and C++."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Problem Solver",
      description: "Passionate about tackling complex logical problems and participating in coding competitions and hackathons."
    },
    {
      icon: <Cpu className="w-8 h-8 text-pink-500" />,
      title: "Tech Enthusiast",
      description: "Always exploring emerging technologies like AI and modern Web Development frameworks to stay ahead."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="glass p-6 md:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary-500"></div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Driven to Create & Innovate
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I am a passionate Computer Science Engineering student with strong foundations in Python, C++, and Web Development. Enthusiastic about creating impactful digital solutions, participating in hackathons, and continuously learning emerging technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My career objective is to apply my technical skills, collaborate with innovative teams, and contribute to meaningful projects that solve real-world problems.
              </p>
              
              <div className="flex items-center gap-4 mt-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary-500">10+</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</span>
                </div>
                <div className="h-10 w-px bg-gray-300 dark:bg-gray-700"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-purple-500">5+</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Hackathons Attended</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {cards.map((card, index) => (
              <div 
                key={index} 
                className={`glass p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 ${index === 2 ? 'md:col-span-2' : ''}`}
              >
                <div className="mb-4 bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-lg flex items-center justify-center">
                  {card.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{card.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{card.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
