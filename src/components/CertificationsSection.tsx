import { FadeIn } from './Reusable';

const certifications = [
  "Supply Chain Digitization — Elite (IIT Bombay, NPTEL)",
  "NextGen Hackathon'26 — Finalist (Generative AI Community, VIT)",
  "HackZero'26 — CTF Participant (OWASP VIT Bhopal)",
  "Industrial IoT Markets and Security (Univ. of Colorado Boulder)",
  "Marketing Management — 90% Elite (IIT Kanpur, NPTEL)",
  "Open Source Software LINUX (Vityarthi)",
  "Programming in Java (Vityarthi)",
  "VITyarthi AiML (Vityarthi)",
  "Summer Of CodeFest'25 (GSoC Innovators Club)",
  "Generative AI (Simplilearn)",
  "Google Cloud | Gemini (Simplilearn)",
  "Android Club (VIT Bhopal)",
  "MATLAB Certified (MathWorks)",
  "Python Programming (Vityarthi)",
  "Networking Basics (Cisco)",
  "Networking Devices & Initial Config (Cisco)"
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-[#F8FAFC] dark:bg-[#0C0C0C] text-slate-900 dark:text-white px-6 sm:px-10 py-24 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <FadeIn y={30}>
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="font-black uppercase text-[clamp(2.5rem,6vw,80px)] leading-none tracking-tight mb-4 text-slate-900 dark:text-white transition-colors duration-500">
              Global Certifications
            </h2>
            <p className="text-slate-600 dark:text-white/60 uppercase tracking-widest text-sm font-bold bg-white dark:bg-white/10 inline-block px-6 py-2 rounded-full border border-slate-200 dark:border-white/5 transition-colors duration-500 shadow-sm">
              16 Verified Credentials &amp; Achievements
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {certifications.map((cert, i) => (
            <FadeIn key={i} delay={i * 0.05} y={20}>
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(182,0,168,0.15)] dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(182,0,168,0.2)] transition-all duration-500 hover:-translate-y-2 hover:border-[#7621B0]/30 p-6 rounded-2xl flex items-start gap-4 group cursor-default h-full">
                <div className="min-w-[12px] h-[12px] mt-1.5 rounded-full bg-gradient-to-br from-[#7621B0] to-[#B600A8] group-hover:scale-[2] group-hover:shadow-[0_0_10px_rgba(182,0,168,0.5)] transition-all duration-500"></div>
                <p className="font-medium text-base text-slate-800 dark:text-white/90 leading-relaxed transition-colors duration-500">
                  {cert}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <FadeIn delay={0.2} y={20}>
            <a href="https://www.linkedin.com/in/swastiksinha1/details/certifications/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-[0_0_20px_rgba(182,0,168,0.3)] hover:-translate-y-1 hover:border-[#B600A8]/50 transition-all duration-300 group">
              <span className="font-semibold uppercase tracking-widest text-sm text-slate-900 dark:text-white group-hover:text-[#B600A8] transition-colors">
                Verify all certificates on LinkedIn
              </span>
              <svg className="w-5 h-5 fill-slate-700 dark:fill-[#D7E2EA] group-hover:fill-[#B600A8] transition-colors" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
