import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import AwardsSection from './components/AwardsSection';
import NewProjectsSection from './components/NewProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import GithubSection from './components/GithubSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingResumeButton from './components/FloatingResumeButton';
import { ThemeProvider, useTheme } from './ThemeContext';

function AppContent() {
  
  return (
    <div className={`min-h-screen font-sans overflow-x-hidden selection:bg-[#B600A8] selection:text-white`}>
      <main className="relative">
        <HeroSection />
        <NewProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <AwardsSection />
        <CertificationsSection />
        <GithubSection />
        <ContactSection />
        <Footer />
        <FloatingResumeButton />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
