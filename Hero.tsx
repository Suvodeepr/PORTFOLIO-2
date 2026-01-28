import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  data: ProfileData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16" id="home">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent opacity-50 z-[-1]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            Available for Hire 🚀
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {data.name}
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            {data.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/25"
            >
              Contact Me
            </a>
            <a 
              href="#experience"
              className="px-8 py-3 rounded-full glass-card hover:bg-white/10 text-white font-semibold transition-all"
            >
              View Work
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <img 
              src={data.heroImage} 
              alt={data.name} 
              className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl z-10"
            />
          </div>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;