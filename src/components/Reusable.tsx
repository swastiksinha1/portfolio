import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, x = 0, y = 30, duration = 0.5, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, x, y }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "0px", amount: 0.1 }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={`will-change-transform ${className}`}
  >
    {children}
  </motion.div>
);

export const Magnet = ({ children, padding = 150, strength = 3 }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX / strength, y: middleY / strength });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative will-change-transform"
      style={{ padding: `${padding}px` }}
    >
      {children}
    </motion.div>
  );
};

export const ContactButton = () => (
  <button className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest outline outline-2 outline-white outline-offset-[-3px] transition-transform hover:scale-105"
    style={{
      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset'
    }}>
    Contact Me
  </button>
);

export const LiveProjectButton = () => (
  <button className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors">
    Live Project
  </button>
);

export const AnimatedText = ({ text }: { text: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.8', 'end 0.2']
  });
  
  const characters = text.split("");
  return (
    <p ref={element} className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] flex flex-wrap justify-center">
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        return (
          <span key={i} className="relative inline-block">
            <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
            <motion.span style={{ opacity }} className="absolute left-0 top-0">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
