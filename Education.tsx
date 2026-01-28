import React from 'react';
import { motion } from 'framer-motion';
import { ProfileData } from '../types';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  data: ProfileData;
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center justify-center gap-3">
            <span className="text-4xl">🎓</span> Education History
        </h2>

        <div className="relative border-l border-gray-700 ml-3 md:ml-6 space-y-12">
          {data.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot on Timeline */}
              <div className="absolute -left-3 top-1 bg-slate-900 rounded-full p-1 border border-gray-700">
                  <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              </div>

              <div className="glass-card p-6 rounded-2xl hover:border-blue-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <span className="text-sm text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded">
                        {edu.period}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 mb-3">
                    <GraduationCap size={16} />
                    <span>{edu.institution}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">{edu.location}</span>
                    <span className="font-bold text-purple-400">{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;