import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "C++", level: 85 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
  ];

  const tools = ["Git", "GitHub", "VS Code", "Figma", "Postman", "Linux"];
  
  const softSkills = [
    "Teamwork", "Leadership", "Communication", 
    "Adaptability", "Critical Thinking", "Problem Solving"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            My Skills
          </motion.h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
              Technical Expertise
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            {/* Tools */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-6 md:p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass p-6 md:p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
