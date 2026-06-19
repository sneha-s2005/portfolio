import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for internship and junior developer opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-6"
          >
            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                <a href="mailto:acharyasneha2005@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 text-sm">
                  acharyasneha2005@gmail.com
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                <a href="tel:+917892556695" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 text-sm">
                  +91 78925 56695
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <form className="glass p-6 md:p-8 rounded-3xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-gray-900 dark:text-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-gray-900 dark:text-white" placeholder="john@example.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-gray-900 dark:text-white" placeholder="Hello!" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-gray-900 dark:text-white resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
