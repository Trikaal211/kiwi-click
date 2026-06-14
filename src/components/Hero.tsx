import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, TrendingUp, DollarSign, Users } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  // Parallax calculations
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-28 pb-16 overflow-hidden bg-page-bg text-text-primary transition-theme"
    >
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-border-color" />
        <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-border-color" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Headline & Copy */}
        <motion.div 
          style={{ y: textY, opacity: fadeOut }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Subtitle Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-[2px] w-8 bg-accent-green" />
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              DELHI'S DIGITAL GROWTH PARTNER
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-text-primary transition-theme"
          >
            We Grow <br />
            <span className="font-sans font-extrabold text-accent-green tracking-tight not-italic transition-theme">Businesses</span> <br />
            Through Marketing, <br />
            <span className="italic font-serif font-normal">Web & AI.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-xl text-lg font-sans font-light text-text-secondary leading-relaxed transition-theme"
          >
            KiwiClicks helps ambitious businesses generate leads, build authority, and scale faster through digital strategy, high-converting websites, and AI-powered automation.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4 md:gap-6"
          >
            <a 
              href="#work"
              className="px-8 py-4 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-text-primary text-page-bg hover:bg-accent-green hover:text-page-bg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              View Our Work
              <ArrowUpRight size={13} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-full text-xs font-sans font-bold uppercase tracking-wider border border-border-color hover:border-text-primary hover:bg-hover-highlight text-text-primary transition-all duration-300 cursor-pointer"
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Showcase Image & Floating Analytics */}
        <motion.div 
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0"
        >
          {/* Decorative outline border frame */}
          <div className="absolute inset-0 -m-4 rounded-3xl border border-border-color scale-95 pointer-events-none transition-theme" />

          {/* Image Container */}
          <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-page-bg-sec border border-border-color group transition-theme">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
              alt="KiwiClicks digital growth strategy workshop" 
              loading="lazy"
              className="w-full h-full object-cover object-center grayscale opacity-95 dark:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out scale-102 group-hover:scale-100"
            />
            
            {/* Soft gradient card bottom overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-white text-left">
              <p className="font-serif italic text-lg leading-none">KiwiClicks Strategy Workshop</p>
              <p className="font-sans text-[9px] uppercase tracking-widest text-white/70 mt-1">
                Connaught Place, New Delhi
              </p>
            </div>
          </div>

          {/* Floating Card 1: ROAS */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
            className="absolute -left-6 top-[20%] glass dark:dark-glass p-4 rounded-2xl shadow-lg flex items-center gap-3 border border-border-color/40 max-w-[145px] transition-theme"
          >
            <div className="w-8 h-8 rounded-lg bg-gold-accent/15 flex items-center justify-center text-gold-accent transition-theme">
              <DollarSign size={16} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-sans font-medium text-text-secondary leading-none transition-theme">NET ROAS</p>
              <p className="text-base font-sans font-bold text-text-primary mt-1 transition-theme">4.8x</p>
            </div>
          </motion.div>

          {/* Floating Card 2: Traffic */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -right-6 top-[45%] glass dark:dark-glass p-4 rounded-2xl shadow-lg flex items-center gap-3 border border-border-color/40 max-w-[145px] transition-theme"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green transition-theme">
              <TrendingUp size={16} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-sans font-medium text-text-secondary leading-none transition-theme">TRAFFIC</p>
              <p className="text-base font-sans font-bold text-accent-green mt-1 transition-theme">+312%</p>
            </div>
          </motion.div>

          {/* Floating Card 3: Leads */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.2 }}
            className="absolute left-[15%] -bottom-6 glass dark:dark-glass p-4 rounded-2xl shadow-lg flex items-center gap-3 border border-border-color/40 min-w-[170px] transition-theme"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green transition-theme">
              <Users size={16} />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-sans font-medium text-text-secondary leading-none transition-theme">DAILY LEADS</p>
              <p className="text-base font-sans font-bold text-text-primary mt-1 transition-theme">+127</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
