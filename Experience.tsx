import React from 'react';
import { motion } from 'framer-motion';
import { ProfileData } from '../types';
import { Briefcase, Trophy } from 'lucide-react';

interface ExperienceProps {
  data: ProfileData;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Projects */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
          >
            <span className="text-4xl">🚀</span> Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                    <Briefcase size={24} />
                  </div>
                  <span className="text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                    {project.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
          >
            <span className="text-4xl">🏆</span> Key Achievements
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.achievements.map((ach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border-t-4 border-t-purple-500 relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Trophy size={48} />
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">{ach.title}</h3>
                 <p className="text-sm text-gray-400">{ach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;