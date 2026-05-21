import { LiveProjectButton } from './Reusable';

const projects = [
  { 
    id: "01", 
    category: "AI / ML", 
    name: "Fake Review Detector", 
    link: "https://github.com/swastiksinha1",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  },
  { 
    id: "02", 
    category: "Open Source", 
    name: "First-Contributions", 
    link: "https://github.com/swastiksinha1",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  { 
    id: "03", 
    category: "E-Commerce", 
    name: "Supply Chain Toolkit", 
    link: "https://github.com/swastiksinha1",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 pb-40 px-5 sm:px-8 md:px-10">
      <div className="pt-20 sm:pt-24 md:pt-32 mb-16">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)]">
          Project
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {projects.map((proj, index) => (
          <div 
            key={proj.id}
            className="sticky top-24 md:top-32 h-[85vh] w-full mb-10 flex items-center justify-center"
            style={{ top: `calc(10vh + ${index * 28}px)` }}
          >
            <div className="w-full h-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-2xl overflow-hidden origin-top">
              
              {/* Card Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                   <span className="font-black text-[clamp(2.5rem,6vw,80px)] leading-none text-[#D7E2EA]">{proj.id}</span>
                   <div>
                     <p className="text-sm opacity-60 uppercase tracking-widest text-[#D7E2EA]">{proj.category}</p>
                     <h3 className="font-medium text-2xl md:text-4xl uppercase text-[#D7E2EA]">{proj.name}</h3>
                   </div>
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer" className="hidden md:block">
                  <LiveProjectButton />
                </a>
              </div>

              {/* Card Image Grid */}
              <div className="flex-1 flex gap-4 h-full min-h-0">
                <div className="w-[40%] flex flex-col gap-4">
                  <div className="w-full rounded-[30px] md:rounded-[40px] bg-white/5 border border-white/10 h-[clamp(130px,16vw,230px)] bg-cover bg-center" style={{backgroundImage: `url(${proj.img1})`}}></div>
                  <div className="w-full rounded-[30px] md:rounded-[40px] bg-white/5 border border-white/10 flex-1 bg-cover bg-center" style={{backgroundImage: `url(${proj.img2})`}}></div>
                </div>
                <div className="w-[60%] h-full rounded-[30px] md:rounded-[40px] bg-white/5 border border-white/10 bg-cover bg-center" style={{backgroundImage: `url(${proj.img3})`}}></div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
