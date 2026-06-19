import { motion } from 'framer-motion';
import { Trophy, Users, Lightbulb, Award } from 'lucide-react';

const Hackathons = () => {
  const events = [
    {
      title: "Web Sprint Hackathon",
      role: "Frontend Developer",
      date: "Oct 2025",
      description: "Developed a responsive web application for local businesses. Focused on UI/UX and integrating REST APIs.",
      highlights: ["Best UI/UX Award", "Top 10 Finalist"],
      icon: <Trophy className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Fusion X Hackathon",
      role: "Team Lead & Developer",
      date: "Mar 2025",
      description: "Led a team of 4 to create an innovative student collaboration platform using React and Node.js.",
      highlights: ["Excellent Teamwork", "Innovative Solution"],
      icon: <Users className="w-6 h-6 text-primary-500" />
    },
    {
      title: "University Innovation Challenge",
      role: "Python Developer",
      date: "Nov 2024",
      description: "Built a Python-based data analysis tool to visualize campus energy consumption and propose optimizations.",
      highlights: ["Sustainability Focus", "Data Driven"],
      icon: <Lightbulb className="w-6 h-6 text-green-500" />
    }
  ];

  return (
    <section id="hackathons" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-3"
          >
            Hackathon Journey <Award className="w-8 h-8 text-primary-500" />
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Participating in hackathons has been a core part of my learning journey, teaching me to work under pressure, collaborate effectively, and turn ideas into reality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-transparent transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} relative pl-8 md:pl-0`}
              >
                {/* Timeline Dot positioned relative to row container */}
                <div className="absolute top-6 left-1 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 z-10"></div>
                
                <div className="flex-1 w-full">
                  <div className={`glass p-6 rounded-2xl relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    
                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        {event.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                    </div>
                    
                    <div className={`flex flex-wrap gap-2 mb-4 text-sm font-medium ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      <span className="text-primary-600 dark:text-primary-400">{event.role}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 dark:text-gray-400">{event.date}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      {event.highlights.map((highlight, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full border border-primary-100 dark:border-primary-800">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div> {/* Spacer for timeline */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
