import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, DollarSign, Users, Smile } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const boardY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-20 pb-12 overflow-hidden bg-page-bg text-text-primary transition-theme"
    >
      {/* Hand-drawn circle pattern background detail */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 select-none">
        <svg width="100%" height="100%" className="w-full h-full">
          <circle cx="10%" cy="20%" r="80" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="5 5" />
          <circle cx="85%" cy="70%" r="120" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="10 4" />
          <circle cx="50%" cy="85%" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Handcrafted Headline & Description */}
        <motion.div 
          style={{ y: textY, opacity: fadeOut }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Subtitle Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-orange animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-accent-emerald dark:text-accent-orange font-bold uppercase transition-theme">
              DELHI'S DIGITAL GROWTH PARTNER
            </span>
            <Smile size={14} className="text-accent-orange transform rotate-12" />
          </div>

          {/* Handcrafted Editorial Headline */}
          <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-text-primary transition-theme relative">
            We grow <br />
            <span className="relative inline-block font-sans font-extrabold text-accent-green tracking-tight not-italic transition-theme">
              businesses
              {/* Hand-drawn orange loop highlight line underneath */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-orange" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                <path d="M0,7 C30,2 70,2 100,7 M5,9 C35,4 75,4 95,9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span> <br />
            through marketing, <br />
            <span className="italic font-serif font-normal text-accent-emerald dark:text-text-primary transition-theme">Web & AI.</span>
          </h1>

          {/* Subheadline (high contrast & readable) */}
          <p className="mt-6 max-w-xl text-base md:text-lg font-sans font-medium text-text-secondary leading-relaxed transition-theme">
            KiwiClicks helps ambitious brands capture customer attention, earn real trust, and scale campaigns through transparent metrics, high-velocity websites, and automated operations pipelines.
          </p>

          {/* Hand-drawn style highlights note */}
          <p className="font-handwriting text-accent-orange text-lg -rotate-2 mt-4 tracking-wide font-semibold block">
            ✦ Delhi CP office based growth engineers // GROW REMARKABLY 📈
          </p>

          {/* Neobrutalist buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-6">
            <a 
              href="#work"
              className="px-8 py-4 rounded-xl text-xs font-sans font-bold uppercase tracking-wider bg-accent-emerald text-white border-2 border-accent-emerald hover:bg-accent-green hover:border-accent-green transition-theme shadow-offset cursor-pointer flex items-center gap-1.5"
            >
              View Our Work
              <ArrowUpRight size={13} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-xl text-xs font-sans font-bold uppercase tracking-wider bg-card-bg text-text-primary border-2 border-border-color hover:bg-hover-highlight transition-theme shadow-offset-orange cursor-pointer"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

        {/* Right Column: Collage-Style Strategy Whiteboard */}
        <motion.div 
          style={{ y: boardY }}
          className="lg:col-span-5 flex justify-center relative mt-12 lg:mt-0"
        >
          {/* Main Whiteboard Canvas */}
          <div className="w-full max-w-md aspect-[4/5] bg-card-bg border-4 border-accent-emerald rounded-3xl p-6 relative shadow-offset transition-theme flex flex-col justify-between overflow-hidden">
            
            {/* Whiteboard grid markers (mimics whiteboard dots) */}
            <div className="absolute inset-0 pointer-events-none opacity-5 select-none" style={{ backgroundImage: 'radial-gradient(var(--accent-emerald) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />

            {/* Collage Item 1: Polaroid photo */}
            <div className="relative w-44 bg-white border border-gray-200 p-2.5 shadow-md rounded-sm transform rotate-3 hover:rotate-0 transition-transform duration-300 z-10 select-none">
              <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=350&q=80" 
                  alt="KiwiClicks team strategy session" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2 text-center">
                <p className="font-handwriting text-xs text-gray-800 font-bold leading-tight">Brainstorm @ CP office</p>
              </div>
            </div>

            {/* Collage Item 2: Yellow Sticky Note */}
            <div className="absolute top-[38%] right-4 w-36 bg-[#FEF08A] border-2 border-gray-800 p-3 shadow-md rounded-sm transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-20 text-left select-none text-gray-800">
              <span className="text-[8px] font-mono tracking-widest font-bold opacity-50 block uppercase">SEO GOAL</span>
              <p className="font-handwriting text-[13px] leading-tight font-bold mt-1">
                Target CP commercial keywords first! 🚀
              </p>
              <div className="flex gap-1.5 mt-2 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
              </div>
            </div>

            {/* Collage Item 3: Orange Sticky Note */}
            <div className="absolute bottom-16 left-4 w-36 bg-orange-100 dark:bg-orange-950/90 border-2 border-accent-orange p-3 shadow-md rounded-sm transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20 text-left select-none">
              <span className="text-[8px] font-mono tracking-widest font-bold text-accent-orange uppercase">Paid Ads Loop</span>
              <p className="font-handwriting text-[13px] leading-tight text-text-primary font-bold mt-1">
                Meta: hook tests (3s) + speed landing conversion.
              </p>
            </div>

            {/* Collage Item 4: Growth curve doodle (SVG) */}
            <div className="absolute top-4 right-6 w-32 h-20 pointer-events-none text-accent-green opacity-80 z-0 select-none">
              <svg width="100%" height="100%" viewBox="0 0 120 80" fill="none">
                {/* Wavy arrow line */}
                <path d="M10,70 Q40,65 60,40 T110,15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                {/* Arrowhead */}
                <path d="M100,15 L110,15 L108,25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="15" y="45" className="fill-accent-orange font-handwriting text-[14px] font-bold">+312%</text>
              </svg>
            </div>

            {/* Bottom collage markers */}
            <div className="w-full flex justify-between items-end relative z-30 pt-16">
              
              {/* Floating Stat 1: ROAS */}
              <div className="bg-card-bg border-2 border-border-color rounded-xl p-3 shadow-offset-sm flex items-center gap-2 max-w-[125px] transition-theme">
                <div className="w-6 h-6 rounded-md bg-gold-accent/15 flex items-center justify-center text-gold-accent">
                  <DollarSign size={13} />
                </div>
                <div className="text-left">
                  <span className="text-[8px] font-mono text-text-secondary leading-none block font-bold transition-theme">ROAS</span>
                  <span className="text-xs font-sans font-bold text-text-primary block transition-theme">4.8x</span>
                </div>
              </div>

              {/* Floating Stat 2: Leads */}
              <div className="bg-card-bg border-2 border-border-color rounded-xl p-3 shadow-offset-sm flex items-center gap-2 max-w-[125px] transition-theme">
                <div className="w-6 h-6 rounded-md bg-accent-green/15 flex items-center justify-center text-accent-green">
                  <Users size={13} />
                </div>
                <div className="text-left">
                  <span className="text-[8px] font-mono text-text-secondary leading-none block font-bold transition-theme">LEADS</span>
                  <span className="text-xs font-sans font-bold text-text-primary block transition-theme">+127</span>
                </div>
              </div>

            </div>

          </div>

          {/* Decorative Sticky Tape graphic representation overlay */}
          <div className="absolute -top-3 left-1/4 w-20 h-6 bg-yellow-200/40 border border-yellow-300 transform -rotate-12 backdrop-blur-sm pointer-events-none select-none z-40" />
          <div className="absolute -bottom-3 right-1/4 w-20 h-6 bg-yellow-200/40 border border-yellow-300 transform 12 backdrop-blur-sm pointer-events-none select-none z-40" />

        </motion.div>

      </div>
    </section>
  );
}
