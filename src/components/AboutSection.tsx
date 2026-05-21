import { FadeIn, ContactButton } from './Reusable';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 sm:px-10 bg-slate-100 dark:bg-[#0C0C0C] relative z-10 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <FadeIn y={30}>
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight mb-4 drop-shadow-[0_4px_10px_rgba(182,0,168,0.15)] dark:drop-shadow-none">
              About Me
            </h2>
            <p className="text-slate-600 dark:text-[#D7E2EA]/60 uppercase tracking-widest text-sm sm:text-base transition-colors duration-500">
              The Intersection of Tech &amp; Business
            </p>
          </div>
        </FadeIn>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Column: Bio */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <FadeIn delay={0.1} y={30} className="h-full">
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[32px] p-8 md:p-12 h-full flex flex-col justify-center transition-all duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(182,0,168,0.1)] dark:hover:shadow-none dark:hover:bg-white/10 hover:-translate-y-1 hover:border-[#B600A8]/20 dark:hover:border-white/20 group cursor-default">
                <h3 className="text-slate-900 dark:text-white font-medium text-xl md:text-3xl uppercase tracking-wider mb-6 transition-colors duration-300">
                  I don't just study technology — <br className="hidden sm:block"/><span className="text-[#B600A8] group-hover:text-[#D600C8] transition-colors duration-300">I build with it.</span>
                </h3>
                <p className="text-slate-700 dark:text-[#D7E2EA]/80 font-light text-base md:text-lg leading-relaxed mb-4 transition-colors duration-500">
                  I'm Swastik Sinha, a Computer Science student at Vellore Institute of Technology (VIT), currently in my 3rd semester. I'm passionate about building software that solves real problems — from campus-focused web platforms to full-fledged Java SE applications.
                </p>
                <p className="text-slate-700 dark:text-[#D7E2EA]/80 font-light text-base md:text-lg leading-relaxed mb-4 transition-colors duration-500">
                  My approach to code is methodical and modular. I value clean architecture, meaningful abstractions, and projects that go beyond the classroom — whether that's a marketplace for students or a console-based records management system built with advanced Java features.
                </p>
                <p className="text-slate-700 dark:text-[#D7E2EA]/80 font-light text-base md:text-lg leading-relaxed transition-colors duration-500">
                  When I'm not coding, I'm exploring open-source contributions, participating in hackathons, and leveling up my understanding of software engineering fundamentals.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Contact & Quick Highlights */}
          <div className="flex flex-col gap-6 lg:gap-8">
            
            <FadeIn delay={0.2} y={30} className="h-full">
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[32px] p-8 md:p-12 h-full flex flex-col justify-center transition-all duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(182,0,168,0.1)] dark:hover:shadow-none dark:hover:bg-white/10 hover:-translate-y-1 hover:border-[#B600A8]/20 dark:hover:border-white/20 group cursor-default">
                <h4 className="text-slate-500 dark:text-white/60 font-medium uppercase tracking-widest text-base md:text-lg mb-8 border-b border-slate-200 dark:border-white/10 pb-4 group-hover:text-slate-800 dark:group-hover:text-white/90 group-hover:border-[#B600A8]/30 dark:group-hover:border-[#B600A8]/50 transition-all duration-300">Technical Ethos</h4>
                <p className="text-slate-700 dark:text-[#D7E2EA]/80 font-light text-lg md:text-xl leading-relaxed mb-8 transition-colors duration-500">
                  I architect scalable web platforms, train intelligent ML models, and contribute to global open-source ecosystems. My work bridges deep technical execution with clear business outcomes.
                </p>
                <ul className="flex flex-col gap-6 text-lg font-medium text-slate-900 dark:text-white/90 transition-colors duration-500">
                  <li className="flex items-center gap-5 transition-transform duration-300 hover:translate-x-2"><span className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#7621B0] to-[#B600A8] shadow-[0_0_10px_#B600A8]"></span> Full-Stack Web Architecture</li>
                  <li className="flex items-center gap-5 transition-transform duration-300 hover:translate-x-2"><span className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#7621B0] to-[#B600A8] shadow-[0_0_10px_#B600A8]"></span> Generative AI &amp; Machine Learning</li>
                  <li className="flex items-center gap-5 transition-transform duration-300 hover:translate-x-2"><span className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#7621B0] to-[#B600A8] shadow-[0_0_10px_#B600A8]"></span> Global Open-Source Contributions</li>
                </ul>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </div>
    </section>
  );
}
