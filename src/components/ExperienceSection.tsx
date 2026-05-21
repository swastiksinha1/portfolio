import { FadeIn } from './Reusable';

const experiences = [
  {
    role: "Open Source Contributor",
    company: "GitHub",
    date: "May 2026 - Present",
    description: "Actively contributing to global open source projects. Submitted pull requests to 'first-contributions'.",
    icon: "GH"
  },
  {
    role: "Campus Ambassador",
    company: "GirlScript Summer of Code",
    date: "May 2026 - Present",
    description: "Promoting open-source culture, helping students initiate contributions, and engaging with developer communities.",
    icon: "GS"
  },
  {
    role: "Freelance Developer",
    company: "Independent",
    date: "Ongoing",
    description: "Building tailored full-stack and AI solutions like ViTMART for various clients, mapping technical features to business outcomes.",
    icon: "FL"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 px-6 sm:px-10 bg-slate-50 dark:bg-[#0C0C0C] relative z-10 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <FadeIn y={20}>
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="hero-heading font-black uppercase text-[clamp(2rem,6vw,80px)] leading-none tracking-tight mb-3 drop-shadow-[0_4px_10px_rgba(182,0,168,0.15)] dark:drop-shadow-none">
              Workflow
            </h2>
            <p className="text-slate-600 dark:text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm transition-colors duration-500">
              My Professional Journey
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#B600A8]/50 via-[#7621B0]/50 to-transparent md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-6 md:gap-8">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.15} y={20}>
                <div className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Icon Marker */}
                  <div className="absolute left-[14px] md:left-1/2 w-7 h-7 bg-white dark:bg-[#0C0C0C] border border-[#B600A8] rounded-full -translate-x-1/2 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(182,0,168,0.3)] dark:shadow-[0_0_10px_rgba(182,0,168,0.5)] transition-colors duration-500">
                    <span className="text-[9px] font-bold text-slate-800 dark:text-white transition-colors duration-500">{exp.icon}</span>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${i % 2 === 0 ? 'md:pr-10 text-left md:text-right' : 'md:pl-10 text-left'}`}>
                    <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl p-5 hover:bg-slate-50 dark:hover:bg-white/10 hover:shadow-[0_10px_25px_rgba(182,0,168,0.1)] dark:hover:shadow-none transition-all duration-300 group shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                      <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'} items-start`}>
                        <span className="text-[#B600A8] font-semibold text-[10px] sm:text-xs tracking-widest uppercase mb-1">{exp.date}</span>
                        <h3 className="text-slate-900 dark:text-white font-bold text-lg sm:text-xl uppercase tracking-wide mb-1 group-hover:text-[#B600A8] dark:group-hover:text-[#D7E2EA] transition-colors">{exp.role}</h3>
                        <h4 className="text-slate-700 dark:text-[#D7E2EA]/70 font-medium text-sm mb-2 transition-colors duration-500">{exp.company}</h4>
                        <p className="text-slate-500 dark:text-[#D7E2EA]/50 font-light text-xs sm:text-sm leading-relaxed max-w-sm transition-colors duration-500">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
