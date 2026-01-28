import React from 'react';
import { motion } from 'framer-motion';
import { ProfileData } from '../types';

interface SkillsProps {
  data: ProfileData;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
             <span className="text-4xl mr-2">⚡</span> Technical Arsenal
          </h2>
          <p className="text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {data.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card px-6 py-3 rounded-full text-gray-200 font-medium cursor-default hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* Categories (Simulated based on typical MERN/Java stack) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl"
            >
                <h3 className="text-xl font-bold text-blue-400 mb-4">Backend & Java</h3>
                <div className="h-2 bg-gray-700 rounded-full mb-2">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-gray-400">Java, Spring, C++, Python</p>
            </motion.div>

            <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl"
            >
                <h3 className="text-xl font-bold text-purple-400 mb-4">Web Development</h3>
                <div className="h-2 bg-gray-700 rounded-full mb-2">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-sm text-gray-400">HTML, CSS, JS, MERN Stack</p>
            </motion.div>

            <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl"
            >
                <h3 className="text-xl font-bold text-green-400 mb-4">Database & Tools</h3>
                <div className="h-2 bg-gray-700 rounded-full mb-2">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-sm text-gray-400">SQL, MongoDB, Linux, Data Structures</p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;