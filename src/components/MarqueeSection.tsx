import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const gifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

const row1 = [...gifs.slice(0, 11), ...gifs.slice(0, 11), ...gifs.slice(0, 11)];
const row2 = [...gifs.slice(11), ...gifs.slice(11), ...gifs.slice(11)];

export default function MarqueeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <section ref={containerRef} className="pt-24 sm:pt-32 md:pt-40 pb-10 bg-[#0C0C0C] overflow-hidden flex flex-col gap-3">
      <motion.div style={{ x: x1 }} className="flex gap-3 will-change-transform w-max">
        {row1.map((src, i) => (
          <img key={i} src={src} alt="Project" className="w-[420px] h-[270px] rounded-2xl object-cover" loading="lazy" />
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="flex gap-3 will-change-transform w-max">
        {row2.map((src, i) => (
          <img key={i} src={src} alt="Project" className="w-[420px] h-[270px] rounded-2xl object-cover" loading="lazy" />
        ))}
      </motion.div>
    </section>
  );
}
