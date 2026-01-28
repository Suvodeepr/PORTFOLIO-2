import React, { useState } from 'react';
import { INITIAL_PROFILE } from './constants';
import { ProfileData } from './types';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import PortfolioControls from './components/PortfolioControls';

const App: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>(INITIAL_PROFILE);

  const handleUpdateData = (updates: Partial<ProfileData>) => {
    setProfileData(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-blue-500/30">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <Hero data={profileData} />
        <About data={profileData} />
        <Experience data={profileData} />
        <Skills data={profileData} />
        <Education data={profileData} />
        <Contact data={profileData} />
      </main>

      <PortfolioControls onUpdateData={handleUpdateData} currentData={profileData} />
    </div>
  );
};

export default App;