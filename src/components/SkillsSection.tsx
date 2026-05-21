import { FadeIn } from './Reusable';

const coreDomains = [
  { num: "01", title: "Full-Stack Engineering", desc: "Building robust web applications using React and Node.js." },
  { num: "02", title: "AI & ML", desc: "Developing Generative AI applications and integrating Large Language Models." },
  { num: "03", title: "E-Commerce", desc: "Supply chain digitization, consumer behavior, and tech-driven outcomes." },
  { num: "04", title: "Open-Source", desc: "Actively contributing to global repositories and mastering Git workflows." }
];

const detailedSkills = [
  {
    category: "Languages & Frameworks",
    skills: ["Java", "Python", "C++", "JavaScript", "HTML", "CSS", "PHP", "Bash", "Prolog", "MATLAB"]
  },
  {
    category: "Web & Full-Stack",
    skills: ["Database Management (DBMS)", "MySQL", "Database Integration", "Web Server Config (Apache)", "OOP", "JDBC", "Data Structures", "Exception Handling"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["Generative AI", "Machine Learning", "AIML", "Google Gemini", "Software Agents"]
  },
  {
    category: "Cybersecurity & IoT",
    skills: ["Ethical Hacking", "CTF", "OWASP", "Cryptography", "Reverse Engineering", "Network Security", "Internet of Things (IoT)", "Industrial IoT (IIoT)", "Embedded Systems"]
  },
  {
    category: "Business & Strategy",
    skills: ["E-Commerce", "Supply Chain Digitization", "ERP", "Logistics Management", "Product Strategy", "Business Strategy", "Market Research", "Product Ideation"]
  },
  {
    category: "Tools & Methodologies",
    skills: ["Open-Source Software", "Git", "GitHub", "Linux", "Rapid Prototyping", "Team Collaboration", "Problem Solving"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-slate-100 dark:bg-[#111111] text-slate-900 dark:text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 sm:px-10 py-24 md:py-32 relative z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        <FadeIn y={30}>
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight mb-4 drop-shadow-[0_4px_10px_rgba(182,0,168,0.15)] dark:drop-shadow-none text-slate-900 dark:text-white transition-colors duration-500">
              Core Skills
            </h2>
            <p className="text-slate-600 dark:text-[#D7E2EA]/60 uppercase tracking-widest text-sm sm:text-base font-bold bg-white/80 dark:bg-white/5 inline-block px-4 py-1 rounded-full border border-slate-200 dark:border-white/5 shadow-sm transition-colors duration-500">
              My Primary Technical Domains &amp; Capabilities
            </p>
          </div>
        </FadeIn>

        {/* Top Level Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {coreDomains.map((domain, i) => (
            <FadeIn key={domain.num} delay={i * 0.1}>
              <div className="flex border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 md:p-8 items-start gap-6 group hover:bg-white dark:hover:bg-white/10 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(182,0,168,0.15)] hover:border-[#B600A8]/30 cursor-default h-full">
                <span className="font-black text-5xl leading-none text-slate-200 dark:text-white/10 group-hover:text-[#B600A8] transition-colors duration-500">{domain.num}</span>
                <div className="flex flex-col gap-2 mt-1">
                  <h4 className="font-bold uppercase text-xl text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7621B0] group-hover:to-[#B600A8] transition-all">{domain.title}</h4>
                  <p className="font-medium text-sm text-slate-600 dark:text-[#D7E2EA]/70 leading-relaxed transition-colors duration-500">
                    {domain.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Granular Segregated Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedSkills.map((section, index) => (
            <FadeIn key={index} delay={index * 0.1} y={20}>
              <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-3xl p-8 h-full shadow-sm hover:shadow-lg dark:shadow-none dark:hover:shadow-[0_10px_30px_rgba(182,0,168,0.1)] transition-shadow duration-300">
                <h3 className="font-bold uppercase tracking-wide text-lg mb-6 text-[#7621B0] border-b border-black/10 dark:border-white/10 pb-3 transition-colors duration-500">{section.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs sm:text-sm font-medium bg-[#EAEFF5] dark:bg-white/10 text-black/80 dark:text-white/90 px-3 py-1.5 rounded-full hover:bg-[#B600A8] dark:hover:bg-[#B600A8] hover:text-white transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
