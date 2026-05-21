import React, { useState } from 'react';
import { FadeIn } from './Reusable';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "f3f9e4d7-f43e-406e-8991-0061286a75d7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('sent');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.error("Form error:", data);
        setStatus('idle');
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus('idle');
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 bg-slate-100 dark:bg-[#080808] relative z-20 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
      
      {/* Decorative Glow (Optimized for performance: removed massive blur, used radial gradient instead) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B600A8]/20 dark:from-[#B600A8]/30 to-transparent rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <FadeIn y={30}>
          <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
            <h2 className="font-black uppercase text-[clamp(2.5rem,6vw,80px)] leading-none tracking-tight mb-6 text-slate-900 dark:text-white drop-shadow-[0_4px_10px_rgba(182,0,168,0.15)] dark:drop-shadow-[0_0_20px_rgba(182,0,168,0.2)]">
              Let's Talk
            </h2>
            <p className="text-slate-600 dark:text-[#D7E2EA]/70 text-lg leading-relaxed font-light">
              Whether you're looking for a developer to join your team, want to collaborate on a hackathon, or just want to say hi, my inbox is always open.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2} y={30}>
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-[#B600A8]/30 transition-all duration-500 relative overflow-hidden">
              
              {/* Form UI */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/60 ml-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      placeholder="Rahul Sharma"
                      className="bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/60 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      placeholder="rahul.sharma@example.com"
                      className="bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8] transition-all"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/60 ml-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-[#B600A8] focus:ring-1 focus:ring-[#B600A8] transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className="mt-4 rounded-full px-8 py-4 bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(182,0,168,0.5)] transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-3"
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </>
                  )}
                  {status === 'sending' && (
                    <span className="animate-pulse">Sending...</span>
                  )}
                  {status === 'sent' && (
                    <span>Message Sent! ✓</span>
                  )}
                </button>
              </form>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
