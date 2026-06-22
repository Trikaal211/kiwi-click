import { motion } from 'framer-motion';

const brands = [
  // Local Shops / Startups / Enterprises mix
  { name: 'Apex Systems', category: 'Enterprise' },
  { name: 'Veda Labs', category: 'D2C Brand' },
  { name: 'SkillForge', category: 'Startup' },
  { name: 'Centra SaaS', category: 'Startup' },
  { name: 'Local Care CP', category: 'Local Business' },
  { name: 'Dwarka Dental', category: 'Local Business' },
  { name: 'Nova Retail', category: 'Enterprise' },
  { name: 'Globex Corp', category: 'Enterprise' },
  { name: 'Metro Agencies', category: 'Agency' },
  { name: 'GK Diagnostics', category: 'Local Business' }
];

const logoMarquee = [...brands, ...brands, ...brands, ...brands];

export default function TrustBar() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden select-none bg-page-bg text-text-primary z-10 border-t border-border-color transition-theme">
      
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 xl:px-20 text-center mb-10">
        {/* Category indicators */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 mb-6">
          {['Local Businesses', 'Startups', 'D2C Brands', 'Enterprises', 'Agencies'].map((cat, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {idx > 0 && <span className="text-text-secondary opacity-40 text-xs font-mono">•</span>}
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-text-secondary uppercase transition-theme">
                {cat}
              </span>
            </div>
          ))}
        </div>

        {/* Section Headline */}
        <h2 className="font-sans font-extrabold text-2xl md:text-4xl text-text-primary tracking-tight uppercase transition-theme">
          Trusted By Businesses At Every Stage.
        </h2>
      </div>

      {/* Large Horizontal Logo Wall Marquee */}
      <div className="relative bg-page-bg-sec border-y border-border-color overflow-hidden py-8 transition-theme">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-page-bg to-transparent z-10 pointer-events-none transition-all" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-page-bg to-transparent z-10 pointer-events-none transition-all" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 30,
              ease: 'linear',
            },
          }}
          className="flex gap-4 items-center w-max"
        >
          {logoMarquee.map((brand, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-1.5 px-16 group select-none"
            >
              {/* Abstract corporate geometric emblem in SVG */}
              <svg className="w-5 h-5 text-text-secondary/50 group-hover:text-accent-green transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </svg>
              <span className="font-sans font-black text-xs sm:text-sm tracking-widest uppercase text-text-secondary/60 group-hover:text-text-primary transition-colors duration-200">
                {brand.name}
              </span>
              <span className="text-[7.5px] font-mono text-text-secondary/40 uppercase tracking-widest leading-none">
                {brand.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
