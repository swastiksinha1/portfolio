import { FadeIn } from './Reusable';

const awards = [
  {
    title: "NextGen Hackathon 2026 — Finalist",
    issuer: "Generative AI Community - VIT Bhopal",
    date: "Apr 2026",
    description: "Successfully cleared the Ideation and Development Phases out of all competing teams. Showcased expertise in Generative AI and Product Ideation.",
    icon: "🏆"
  },
  {
    title: "Elite Certification: Supply Chain Digitization",
    issuer: "IIT Bombay via NPTEL",
    date: "Apr 2026",
    description: "Completed a rigorous 12-week course covering digital transformation, ERP systems, IoT in logistics, and data analytics. Funded by Ministry of Education, Govt. of India.",
    icon: "🏅"
  },
  {
    title: "Campus Ambassador",
    issuer: "GirlScript Summer of Code",
    date: "Open-Source Development",
    description: "Selected to represent and advocate for open-source software and global contributions across the campus ecosystem.",
    icon: "🌟"
  }
];

export default function AwardsSection() {
  return (
    <section id="awards" className="py-24 px-6 sm:px-10 bg-slate-50 dark:bg-[#0C0C0C] relative z-20 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        <FadeIn y={30}>
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="font-black uppercase text-[clamp(2.5rem,6vw,80px)] leading-none tracking-tight mb-4 text-slate-900 dark:text-white transition-colors duration-500 drop-shadow-[0_4px_10px_rgba(182,0,168,0.15)] dark:drop-shadow-[0_0_20px_rgba(182,0,168,0.2)]">
              Awards &amp; Honors
            </h2>
            <p className="text-slate-600 dark:text-white/60 uppercase tracking-widest text-sm font-bold bg-white dark:bg-white/10 inline-block px-6 py-2 rounded-full border border-slate-200 dark:border-white/5 transition-colors duration-500 shadow-sm">
              Hackathons &amp; Excellence
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award, i) => (
            <FadeIn key={i} delay={i * 0.15} y={30} className="h-full">
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[24px] p-8 h-full flex flex-col transition-all duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(182,0,168,0.15)] dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(182,0,168,0.2)] hover:-translate-y-2 hover:border-[#B600A8]/30 group cursor-default">
                
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 transform origin-left">
                  {award.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#B600A8] dark:group-hover:text-[#D7E2EA] transition-colors">
                  {award.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B600A8]">{award.issuer}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20"></span>
                  <span className="text-xs font-medium text-slate-500 dark:text-white/40">{award.date}</span>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed font-light mt-auto">
                  {award.description}
                </p>
                
              </div>
            </FadeIn>
          ))}
        </div>
        
      </div>
    </section>
  );
}
