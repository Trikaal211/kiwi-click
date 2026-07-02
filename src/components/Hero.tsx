import { useState, useEffect } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CardConfig {
  type: 'green' | 'white' | 'blue' | 'glass' | 'counter';
  label: string;
  texts: string[];
  fontClass: string;
}

// Sub-component for individual cards to handle auto message-cycling
function ResponsibilityCard({ config }: { config: CardConfig }) {
  const [textIndex, setTextIndex] = useState(0);
  const texts = config.texts;

  useEffect(() => {
    if (texts.length <= 1) return;
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 4000 + Math.random() * 2000); // offset intervals slightly
    return () => clearInterval(interval);
  }, [texts]);

  let cardClass = "";
  if (config.type === 'green') {
    cardClass = "bg-accent-green text-slate-950 border-accent-green/20 shadow-[0_0_20px_rgba(0,255,102,0.2)] hover:shadow-[0_0_35px_rgba(0,255,102,0.45)] dark:bg-accent-green dark:text-slate-950";
  } else if (config.type === 'white') {
    cardClass = "bg-white text-slate-950 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] dark:bg-white dark:text-slate-950";
  } else if (config.type === 'blue') {
    cardClass = "bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white border-cyan-400/25 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.4)]";
  } else if (config.type === 'glass') {
    cardClass = "bg-card-bg backdrop-blur-md border border-border-color text-text-primary hover:border-accent-green/30 hover:shadow-[0_15px_30px_rgba(0,255,102,0.08)]";
  } else if (config.type === 'counter') {
    cardClass = "bg-slate-950/90 border border-white/10 text-white shadow-[0_10px_25px_rgba(0,0,0,0.6)]";
  }

  return (
    <div 
      className={`w-full p-4.5 rounded-2xl border transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[95px] sm:min-h-[105px] group transform hover:translate-z-[30px] hover:scale-[1.04] select-none ${cardClass}`}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-[8px] font-mono tracking-widest uppercase opacity-60">
          {config.label}
        </span>
        {config.type !== 'counter' && (
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-pulse" />
        )}
      </div>

      <div className="flex-1 flex items-center">
        <p className={`text-left leading-snug w-full transition-all duration-500 tracking-tight ${config.fontClass}`}>
          {texts[textIndex]}
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  // Columns for the Digital Responsibility Wall
  const col1: CardConfig[] = [
    { type: 'green', label: 'SEO', texts: ['SEO? Hum Sambhalenge.', 'SEO Ki Tension Chhodo.'], fontClass: 'font-sans font-black text-sm uppercase' },
    { type: 'glass', label: 'WEB', texts: ['Website Banwani Hai? Hum Hain.', 'Website Banwa Lo.'], fontClass: 'font-serif italic font-light text-base text-text-primary' },
    { type: 'counter', label: 'REACH', texts: ['50M+ Reach'], fontClass: 'font-sans font-black text-2xl' },
    { type: 'blue', label: 'AI + AUTOMATION', texts: ['AI + Automation + Marketing Under One Roof.'], fontClass: 'font-sans font-extrabold text-[11px] leading-tight' },
    { type: 'white', label: 'BRANDING', texts: ['Branding That Gets Remembered.'], fontClass: 'font-serif italic text-base' }
  ];

  const col2: CardConfig[] = [
    { type: 'white', label: 'GROWTH', texts: ['Local Business Se Global Brand Tak.', 'From Local To Global.'], fontClass: 'font-sans font-black text-sm uppercase' },
    { type: 'glass', label: 'ADS', texts: ['Performance Marketing That Compounds.', 'Ads Hum Chalayenge.'], fontClass: 'font-sans font-bold text-xs text-text-primary' },
    { type: 'counter', label: 'CAMPAIGNS', texts: ['500+ Campaigns'], fontClass: 'font-sans font-black text-2xl text-accent-green' },
    { type: 'green', label: 'ZIMMEDARI', texts: ['Your Digital Zimmedari Ab Hamari.', 'Digital Zimmedari Ab Hamari.'], fontClass: 'font-sans font-extrabold text-xs' },
    { type: 'glass', label: 'AI MACHINE', texts: ['Need Leads? Let\'s Build A Machine.'], fontClass: 'font-sans font-black text-xs uppercase text-text-primary' }
  ];

  const col3: CardConfig[] = [
    { type: 'blue', label: 'DESTINATION', texts: ['Everything Digital. One Place.', 'Bas Business Sambhaliye.'], fontClass: 'font-sans font-black text-xs' },
    { type: 'glass', label: 'CONTENT', texts: ['Content That Converts.'], fontClass: 'font-sans font-extrabold text-sm uppercase tracking-wider text-text-primary' },
    { type: 'counter', label: 'GROWTH', texts: ['10X Growth'], fontClass: 'font-sans font-black text-2xl text-cyan-400' },
    { type: 'white', label: 'SCALE', texts: ['From Startup To Enterprise.', 'Build. Rank. Grow.'], fontClass: 'font-serif italic text-sm' },
    { type: 'counter', label: 'SUPPORT', texts: ['24×7 Support'], fontClass: 'font-sans font-black text-2xl text-yellow-400' }
  ];

  const col1Double = [...col1, ...col1];
  const col2Double = [...col2, ...col2];
  const col3Double = [...col3, ...col3];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 xl:px-20 pt-36 pb-32 overflow-hidden bg-page-bg text-text-primary transition-theme"
    >
      {/* 1. Cinematic Developer Grid Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none transition-opacity">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="epicHeroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#epicHeroGrid)" />
        </svg>
      </div>

      {/* 2. Apple-level space cinematic overlays & ambient lighting */}
      <div className="absolute top-[20%] right-[-15%] w-[80vw] h-[80vw] max-w-[900px] rounded-full bg-emerald-500/[0.05] dark:bg-emerald-500/[0.08] blur-[150px] pointer-events-none transition-all" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] max-w-[800px] rounded-full bg-cyan-500/[0.04] dark:bg-cyan-500/[0.07] blur-[140px] pointer-events-none transition-all" />
      <div className="absolute top-[30%] left-[25%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.03] dark:bg-blue-500/[0.05] blur-[160px] pointer-events-none transition-all" />

      {/* Cinematic Spacing Container (Wide 1600px grid) */}
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center relative z-10">
        
        {/* ─── Left Side: Headline dominating ~60% width ─── */}
        <div className="lg:col-span-7 flex flex-col text-left">
          
          {/* Tagline / Subtitle */}
          <div className="inline-flex items-center gap-2.5 bg-card-bg border border-border-color rounded-full px-4.5 py-2 w-max mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-text-secondary font-extrabold uppercase transition-theme">
              BEST DIGITAL MARKETING AGENCY IN DELHI
            </span>
          </div>

          {/* Massive Typography: 90px-130px size on desktop */}
          <h1 className="font-sans font-black text-5xl md:text-7xl lg:text-[85px] xl:text-[95px] tracking-tighter leading-[0.85] text-text-primary uppercase max-w-4xl text-left transition-theme">
            Your Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green via-emerald-400 to-cyan-400">
              One Solution.
            </span> <br />
            One Place. <br />
            <span className="italic font-serif font-light text-text-secondary normal-case tracking-tight transition-theme">Endless Growth.</span>
          </h1>

          {/* Positioning subtext */}
          <p className="mt-8 max-w-2xl text-base md:text-lg font-sans text-text-secondary leading-relaxed font-medium transition-theme">
            KiwiClicks is the best digital marketing agency in Delhi, bringing performance marketing, SEO, branding, high-speed websites, and custom CRM automation together under one roof.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4 md:gap-6">
            <Link
              to="/contact"
              className="px-8.5 py-4.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-accent-green text-slate-950 hover:bg-text-primary hover:text-page-bg transition-all duration-300 shadow-[0_10px_35px_-5px_rgba(0,255,102,0.3)] flex items-center gap-2 group"
            >
              Grow My Business
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8.5 py-4.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-card-bg text-text-primary border border-border-color hover:bg-hover-highlight transition-all duration-300"
            >
              Talk To Experts
            </Link>
          </div>

          {/* Audience Verification Chips */}
          <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-border-color pt-8 transition-theme">
            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mr-3 block transition-theme">Scaling:</span>
            {[
              'Local Businesses',
              'Startups',
              'D2C Brands',
              'Founders',
              'Enterprises'
            ].map((chip) => (
              <div
                key={chip}
                className="flex items-center gap-1.5 bg-card-bg border border-border-color rounded-full px-3.5 py-1.5 text-[10px] font-mono text-text-primary font-bold transition-theme"
              >
                <Check size={11} className="text-accent-green" />
                {chip}
              </div>
            ))}
          </div>

        </div>

        {/* ─── Right Side: Rotating 3D Digital Responsibility Wall (40%) ─── */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-12 lg:mt-0 select-none w-full h-[550px] sm:h-[600px] overflow-hidden rounded-3xl bg-slate-950/20 dark:bg-slate-950/40 border border-border-color shadow-offset transition-theme">
          
          {/* Subtle inside volumetric glows */}
          <div className="absolute top-1/4 left-1/4 w-[160px] h-[160px] bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-cyan-500/5 blur-[95px] rounded-full pointer-events-none" />

          {/* Cinematic Fade Out Overlays */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-page-bg via-page-bg/40 to-transparent pointer-events-none z-20 transition-all duration-300" />
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-page-bg via-page-bg/40 to-transparent pointer-events-none z-20 transition-all duration-300" />
          
          {/* 3D Perspective Box */}
          <div className="w-full h-full relative" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
            
            {/* Tilted scrolling container */}
            <div 
              className="absolute inset-0 grid grid-cols-3 gap-3 p-3 w-[120%] -left-[10%]"
              style={{
                transform: 'rotateY(-18deg) rotateX(12deg) rotateZ(-2deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Column 1 (Scroll Up) */}
              <div className="flex flex-col gap-3 h-max animate-scroll-up-normal hover:[animation-play-state:paused]">
                {col1Double.map((card, idx) => (
                  <ResponsibilityCard key={`col1-${idx}`} config={card} />
                ))}
              </div>

              {/* Column 2 (Scroll Down) */}
              <div className="flex flex-col gap-3 h-max animate-scroll-down-slow hover:[animation-play-state:paused]">
                {col2Double.map((card, idx) => (
                  <ResponsibilityCard key={`col2-${idx}`} config={card} />
                ))}
              </div>

              {/* Column 3 (Scroll Up) */}
              <div className="flex flex-col gap-3 h-max animate-scroll-up-slow hover:[animation-play-state:paused]">
                {col3Double.map((card, idx) => (
                  <ResponsibilityCard key={`col3-${idx}`} config={card} />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
