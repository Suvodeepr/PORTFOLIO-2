import React from 'react';
import { motion } from 'framer-motion';
import { ProfileData } from '../types';
import { User, MapPin, Calendar, Globe } from 'lucide-react';

interface AboutProps {
  data: ProfileData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
           {/* Decorative background blob */}
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
             {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">👨‍💻</span> About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {data.summary}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <span>{data.contact.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <User size={20} />
                  </div>
                  <span>{data.contact.nationality}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                    <Calendar size={20} />
                  </div>
                  <span>Born: {data.contact.dob}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
                    <Globe size={20} />
                  </div>
                  <span>English, Hindi, Bengali</span>
                </div>
              </div>

               <div className="flex gap-8 border-t border-white/10 pt-6">
                <div>
                    <div className="text-3xl font-bold text-white mb-1">3+</div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">Projects</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white mb-1">MCA</div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">Student</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white mb-1">95%</div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">Efficiency</div>
                </div>
            </div>
            </div>

            {/* Image Content */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                        src={data.aboutImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white font-medium">Always learning, always growing.</p>
                    </div>
                </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;