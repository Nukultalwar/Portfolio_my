import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import GitHubSection from './components/sections/GitHubSection';
import HowIBuildSection from './components/sections/HowIBuildSection';
import WhyWorkWithMeSection from './components/sections/WhyWorkWithMeSection';
import ResumeSection from './components/sections/ResumeSection';
import ContactSection from './components/sections/ContactSection';
import BackgroundStarField from './components/3d/BackgroundStarField';
import CustomCursor from './components/ui/CustomCursor';
import useScrollSpy from './hooks/useScrollSpy';

export const App: React.FC = () => {
  const sectionIds = ['home', 'about', 'skills', 'projects', 'github', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background Star Particle Field */}
      <BackgroundStarField />

      {/* Subtle Desktop Interactive Cursor Glow */}
      <CustomCursor />

      {/* Top Fixed Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubSection />
        <HowIBuildSection />
        <WhyWorkWithMeSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
