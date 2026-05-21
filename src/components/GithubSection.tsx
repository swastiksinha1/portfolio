import { FadeIn } from './Reusable';
import { useTheme } from '../ThemeContext';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubSection() {
  const { theme } = useTheme();

  return (
    <section id="github" className="py-20 px-6 sm:px-10 bg-slate-100 dark:bg-[#080808] relative z-20 border-t border-slate-200 dark:border-white/5 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <FadeIn y={30}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className="font-black uppercase text-3xl sm:text-4xl tracking-tight mb-2 text-slate-900 dark:text-white transition-colors duration-500">
                Open Source Activity
              </h2>
              <p className="text-slate-600 dark:text-[#D7E2EA]/60 uppercase tracking-widest text-xs font-bold">
                Live GitHub Contributions
              </p>
            </div>
            
            <a 
              href="https://github.com/swastiksinha1" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 dark:border-white/20 hover:border-[#B600A8] dark:hover:border-[#B600A8] bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-[#B600A8]/10 text-slate-800 dark:text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(182,0,168,0.3)] group"
            >
              <svg className="w-5 h-5 fill-slate-800 dark:fill-white group-hover:fill-[#B600A8] transition-colors" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Follow Me
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 md:p-10 rounded-[32px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:border-[#B600A8]/30 transition-colors duration-500 group overflow-x-auto overflow-y-hidden custom-scrollbar">
            <div className="min-w-[800px] flex justify-center text-slate-800 dark:text-[#D7E2EA]">
              <GitHubCalendar 
                username="swastiksinha1" 
                colorScheme={theme}
                theme={{
                  light: ['#f1f5f9', '#fbcfe8', '#f472b6', '#d946ef', '#b600a8'],
                  dark: ['#1e293b', '#831843', '#be185d', '#d946ef', '#b600a8'],
                }}
                blockSize={14}
                blockMargin={5}
                fontSize={14}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
              />
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
