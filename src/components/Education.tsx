import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Education Journey
          </motion.h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-10 rounded-2xl relative border-l-4 border-primary-500"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Bachelor of Technology</h3>
                <h4 className="text-xl text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" /> Computer Science Engineering
                </h4>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
                <span className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                  <Calendar className="w-4 h-4" /> 2024 - 2028
                </span>
                <span className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" /> Presidency University
                </span>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Currently pursuing a comprehensive curriculum focused on core computer science principles, software engineering practices, and emerging technologies.
              </p>
              
              <div>
                <strong className="text-gray-900 dark:text-white block mb-2">Relevant Coursework:</strong>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Web Technologies', 'Software Engineering'].map((course, idx) => (
                    <span key={idx} className="bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-md text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <strong className="text-gray-900 dark:text-white">Academic Highlights:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
                  <li>Active participant in university coding clubs and technical chapters.</li>
                  <li>Consistently maintained strong academic standing.</li>
                  <li>Engaged in peer mentoring for introductory programming courses.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
