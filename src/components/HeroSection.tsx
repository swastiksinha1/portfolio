import { useState } from 'react';
import { FadeIn, ContactButton } from './Reusable';
import { useTheme } from '../ThemeContext';

export default function HeroSection() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative px-6 md:px-16 pt-24 pb-12 overflow-hidden">
      {/* Sticky Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 bg-white dark:bg-[#0C0C0C] border-b border-slate-200 dark:border-white/5 flex justify-between items-center text-sm font-medium uppercase tracking-widest text-slate-900 dark:text-[#D7E2EA]/90 shadow-sm dark:shadow-lg transition-colors duration-500">
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 lg:gap-10">
          <a href="#about" className="hover:text-[#B600A8] dark:hover:text-white hover:text-shadow-[0_0_10px_#B600A8] transition-all duration-300">About</a>
          <a href="#experience" className="hover:text-[#B600A8] dark:hover:text-white hover:text-shadow-[0_0_10px_#B600A8] transition-all duration-300">Experience</a>
          <a href="#skills" className="hover:text-[#B600A8] dark:hover:text-white hover:text-shadow-[0_0_10px_#B600A8] transition-all duration-300">Skills</a>
          <a href="#projects" className="hover:text-[#B600A8] dark:hover:text-white hover:text-shadow-[0_0_10px_#B600A8] transition-all duration-300">Projects</a>
          <a href="#contact" className="hover:text-[#B600A8] dark:hover:text-white hover:text-shadow-[0_0_10px_#B600A8] transition-all duration-300">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:scale-110 transition-transform bg-slate-100 dark:bg-transparent shadow-sm">
            {theme === 'dark' ? (
              <span className="text-xl leading-none">☀️</span>
            ) : (
              <span className="text-xl leading-none">🌙</span>
            )}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-transparent shadow-sm hover:scale-110 transition-transform text-xl"
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 dark:bg-[#0C0C0C]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden transition-colors duration-500">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-transparent text-slate-900 dark:text-white text-xl"
            aria-label="Close Menu"
          >
            ✕
          </button>
          
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-[#B600A8] dark:hover:text-[#B600A8] transition-colors">About</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-[#B600A8] dark:hover:text-[#B600A8] transition-colors">Experience</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-[#B600A8] dark:hover:text-[#B600A8] transition-colors">Skills</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-[#B600A8] dark:hover:text-[#B600A8] transition-colors">Projects</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-[#B600A8] dark:hover:text-[#B600A8] transition-colors">Contact</a>
        </div>
      )}

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-7xl mx-auto w-full z-10 mt-6 lg:mt-0">
        
        {/* Left Column (Text & Buttons) */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <FadeIn delay={0.1} y={20}>
            <div className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-sm transform-gpu">
              <span className="w-2 h-2 rounded-full bg-[#B600A8] animate-pulse"></span>
              <span className="font-semibold text-xs sm:text-sm uppercase tracking-widest text-slate-800 dark:text-[#D7E2EA]/90">
                Building at the intersection of Tech &amp; Business
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-[1.05] text-[clamp(3rem,8vw,6.5rem)] mb-6 [text-shadow:_0_10px_20px_rgba(182,0,168,0.15)] dark:[text-shadow:_0_0_30px_rgba(182,0,168,0.3)] hover:[text-shadow:_0_15px_40px_rgba(182,0,168,0.3)] dark:hover:[text-shadow:_0_0_50px_rgba(182,0,168,0.8)] transition-all duration-500 will-change-transform">
              Hi, I'm Swastik Sinha
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <p className="text-slate-600 dark:text-[#D7E2EA]/70 font-medium text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Full-Stack Developer, Generative AI Enthusiast, and Open-Source Contributor. Currently architecting scalable solutions at VIT Bhopal '28.
            </p>
          </FadeIn>

          {/* Action Row */}
          <FadeIn delay={0.4} y={20}>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6">
              <a href="mailto:swastiksinha001@gmail.com" className="hover:scale-105 transition-transform duration-300 transform-gpu will-change-transform">
                <ContactButton />
              </a>
              
              <a href="https://github.com/swastiksinha1" target="_blank" rel="noreferrer" className="group transform-gpu will-change-transform">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border-2 border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 group-hover:border-[#B600A8] dark:group-hover:border-[#B600A8] group-hover:shadow-[0_0_20px_rgba(182,0,168,0.3)] transition-all duration-300 hover:scale-110 transform-gpu">
                  {/* Simple GitHub Icon (SVG) */}
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-slate-700 dark:fill-[#D7E2EA] group-hover:fill-[#B600A8] transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/swastiksinha1" target="_blank" rel="noreferrer" className="group transform-gpu will-change-transform">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border-2 border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 group-hover:border-[#7621B0] dark:group-hover:border-[#7621B0] group-hover:shadow-[0_0_20px_rgba(118,33,176,0.3)] transition-all duration-300 hover:scale-110 transform-gpu">
                  {/* Simple LinkedIn Icon (SVG) */}
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-slate-700 dark:fill-[#D7E2EA] group-hover:fill-[#7621B0] transition-colors" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column (Avatar) */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <FadeIn delay={0.5} y={30}>
            <div className="relative group cursor-pointer mt-10 lg:mt-0 transform-gpu will-change-transform">
              
              {/* Refined, Tighter Background Glow without expensive CSS Blur */}
              <div className="absolute inset-[-20%] bg-[radial-gradient(circle_at_center,_rgba(182,0,168,0.25)_0%,_rgba(118,33,176,0.1)_50%,_transparent_70%)] rounded-full opacity-100 transform-gpu"></div>
              
              {/* Main Avatar Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-[4px] border-white dark:border-[#1A1A1A] shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] group-hover:shadow-[0_0_40px_rgba(182,0,168,0.3)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 transform-gpu will-change-transform">
                <img 
                  src="https://drive.google.com/uc?export=view&id=1KSXeXBirfCav-CT5CCD3PROJc1UlGJtc" 
                  alt="Swastik Sinha" 
                  className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110 transform-gpu"
                />
                {/* Subtle Inner Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay transform-gpu pointer-events-none"></div>
              </div>

            </div>
          </FadeIn>
        </div>


      </div>
    </section>
  );
}
