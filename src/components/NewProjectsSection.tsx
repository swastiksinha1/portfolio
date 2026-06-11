import { FadeIn } from './Reusable';

const projects = [
  {
    id: "01",
    name: "VITMart",
    category: "E-Commerce Web App",
    description: "A highly robust e-commerce application focusing on seamless supply chain digitization and user experience.",
    image: "/vitmart_ui.png",
    github: "https://github.com/swastiksinha1/ViTMART",
    live: "https://vit-mart-sooty.vercel.app"
  },
  {
    id: "02",
    name: "AI Career Copilot",
    category: "AI Web App",
    description: "An AI-powered career assistant built with Next.js providing personalized dashboards, resume analysis, and cover letter generation.",
    image: "/ai_carrer_copilot.png",
    github: "https://github.com/swastiksinha1/ai-career-copilot",
    live: "https://ai-careercopilot.vercel.app/"
  },
  {
    id: "03",
    name: "Fake Review Detector",
    category: "AI / ML Dashboard",
    description: "An intelligent system utilizing advanced ML algorithms to analyze text sentiment and flag fraudulent reviews.",
    image: "/fake_review_ui.png",
    github: "https://github.com/swastiksinha1/fake-review-detector",
    live: "https://fake-review-detectors.streamlit.app/"
  },
  {
    id: "04",
    name: "CCRM",
    category: "Enterprise Software",
    description: "A comprehensive Customer Relationship Management platform designed with a clean, modern UI for maximum productivity.",
    image: "/ccrm_ui.png",
    github: "https://github.com/swastiksinha1/CCRM",
    live: null
  },
  {
    id: "05",
    name: "BridgeFi",
    category: "AI Recruitment Intelligence",
    description: "A dual-sided intelligence platform for skill-gap bridging, ghosting prevention & personal career analytics using Anthropic Claude API, Python, and Flask.",
    image: "/bridgefi_ui.png",
    github: "https://github.com/RishiRaj1495/BridgeFi-GenAi",
    live: "https://bridgefi-gen-ai.vercel.app"
  },
  {
    id: "06",
    name: "OSS Audit — VLC",
    category: "Linux / Bash Scripts",
    description: "A robust capstone project featuring five shell scripts auditing VLC Media Player's origin, philosophy, FOSS ecosystem, and Linux footprint.",
    image: "/oss_audit_ui.png",
    github: "https://github.com/swastiksinha1/oss-audit-24BEY10075",
    live: null
  }
];

export default function NewProjectsSection() {
  return (
    <section id="projects" className="bg-slate-50 dark:bg-[#0C0C0C] py-24 sm:py-32 px-6 sm:px-10 relative z-20 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <FadeIn y={30}>
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight mb-4 drop-shadow-[0_4px_10px_rgba(182,0,168,0.15)] dark:drop-shadow-[0_0_20px_rgba(182,0,168,0.2)] transition-shadow duration-500">
              Projects
            </h2>
            <p className="text-slate-600 dark:text-[#D7E2EA]/60 uppercase tracking-widest text-sm sm:text-base border border-slate-200 dark:border-white/10 inline-block px-6 py-2 rounded-full bg-white dark:bg-white/5 transition-colors duration-500 shadow-sm">
              Software I've Built &amp; Scaled
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10">
          {projects.map((proj, i) => (
            <FadeIn key={proj.id} delay={i * 0.1} y={40} className={i === 3 ? "lg:col-span-1 lg:col-start-1" : i === 4 ? "lg:col-span-1" : ""}>
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[32px] p-6 h-full flex flex-col transition-all duration-500 hover:bg-slate-50 dark:hover:bg-white/10 hover:-translate-y-3 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(182,0,168,0.1)] dark:shadow-none dark:hover:shadow-[0_20px_50px_rgba(182,0,168,0.2)] hover:border-[#B600A8]/30 group cursor-default">
                
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-black/50 mb-8 border border-slate-200 dark:border-white/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 dark:from-[#0C0C0C] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={proj.image} 
                    alt={proj.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 dark:opacity-80 group-hover:opacity-100 relative z-0"
                  />
                </div>
                
                <div className="flex-1 flex flex-col relative z-20">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-bold text-[#B600A8] uppercase tracking-widest mb-1 group-hover:text-[#D600C8] transition-colors">{proj.category}</p>
                      <h3 className="text-xl md:text-2xl font-medium text-slate-900 dark:text-white uppercase tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-500 dark:group-hover:from-white dark:group-hover:to-[#D7E2EA]/50 transition-all">{proj.name}</h3>
                    </div>
                    <span className="text-slate-200 dark:text-white/10 font-black text-4xl leading-none group-hover:text-[#B600A8]/30 transition-colors">{proj.id}</span>
                  </div>
                  <p className="text-slate-600 dark:text-[#D7E2EA]/70 text-sm leading-relaxed font-light mt-auto mb-6 group-hover:text-slate-900 dark:group-hover:text-[#D7E2EA]/90 transition-colors">
                    {proj.description}
                  </p>
                  
                  {/* Action Links */}
                  <div className="flex items-center gap-3 mt-auto border-t border-slate-100 dark:border-white/5 pt-4">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:border-[#B600A8] dark:hover:border-[#B600A8] bg-slate-50 dark:bg-black/20 text-slate-700 dark:text-[#D7E2EA] hover:text-[#B600A8] transition-all duration-300">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:border-[#7621B0] dark:hover:border-[#7621B0] bg-slate-50 dark:bg-black/20 text-slate-700 dark:text-[#D7E2EA] hover:text-[#7621B0] transition-all duration-300">
                        <svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
