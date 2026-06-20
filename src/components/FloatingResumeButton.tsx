
export default function FloatingResumeButton() {
  return (
    <a 
      href="https://drive.google.com/file/d/1eNFUlBLJz65jwaf79vPV7SqhA1j_PSvF/view?usp=sharing" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 group flex items-center justify-center animate-bounce-slow"
      aria-label="Download Resume"
    >
      <div className="flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-black px-6 py-3 md:px-8 md:py-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_30px_rgba(182,0,168,0.3)] hover:-translate-y-1 transition-all duration-300 border border-slate-700 dark:border-white/20">
        
        <span className="font-black uppercase tracking-widest text-xs md:text-sm">Resume</span>
        
        <svg className="w-4 h-4 md:w-5 md:h-5 fill-current group-hover:translate-y-1 transition-transform" viewBox="0 0 24 24">
          <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/>
        </svg>

      </div>
    </a>
  );
}
