import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Smile } from 'lucide-react';

/* ─── Floating particles ─── */
const FloatingParticle = ({
  x, y, size, delay, shape = 'circle', color = 'bg-accent-orange'
}: {
  x: string; y: string; size: number; delay: number; shape?: 'circle' | 'square' | 'diamond'; color?: string;
}) => (
  <motion.div
    className={`absolute ${color} opacity-10 pointer-events-none select-none`}
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      borderRadius: shape === 'circle' ? '50%' : shape === 'diamond' ? '2px' : '3px',
      rotate: shape === 'diamond' ? 45 : 0,
    }}
    animate={{
      y: [0, -12, 0],
      rotate: shape === 'diamond' ? [45, 55, 45] : [0, 8, 0],
      opacity: [0.06, 0.18, 0.06],
    }}
    transition={{
      duration: 5 + delay,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const boardY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Premium Interactive Parallax / Tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { damping: 25, stiffness: 180 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-28 pb-14 overflow-hidden bg-page-bg text-text-primary transition-theme"
    >
      {/* ─── Background: dot grid ─── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] select-none"
        style={{
          backgroundImage: 'radial-gradient(var(--accent-emerald) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* ─── Background: hand-drawn circle doodles (very light) ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-2 dark:opacity-4 select-none">
        <svg width="100%" height="100%" className="w-full h-full">
          <circle cx="8%" cy="18%" r="90" stroke="currentColor" strokeWidth="0.75" fill="none" strokeDasharray="6 5" />
          <circle cx="88%" cy="72%" r="130" stroke="currentColor" strokeWidth="1.2" fill="none" strokeDasharray="12 4" />
          <circle cx="50%" cy="90%" r="65" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="75%" cy="15%" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="3 6" />
        </svg>
      </div>

      {/* ─── Floating ambient particles (Subtle framing) ─── */}
      <FloatingParticle x="6%" y="28%" size={6} delay={0} shape="circle" color="bg-accent-orange" />
      <FloatingParticle x="10%" y="75%" size={5} delay={1.5} shape="square" color="bg-accent-green" />
      <FloatingParticle x="94%" y="22%" size={8} delay={0.5} shape="diamond" color="bg-gold-accent" />
      <FloatingParticle x="88%" y="65%" size={6} delay={2} shape="circle" color="bg-accent-orange" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">

        {/* ─── Left Column: Content (50%) ─── */}
        <motion.div
          style={{ y: textY, opacity: fadeOut }}
          className="lg:col-span-6 flex flex-col justify-center text-left"
        >
          {/* Subtitle Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-orange animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-accent-emerald dark:text-accent-orange font-bold uppercase transition-theme">
              DELHI'S DIGITAL GROWTH PARTNER
            </span>
            <Smile size={14} className="text-accent-orange transform rotate-12" />
          </div>

          {/* Headline */}
          <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-text-primary transition-theme relative">
            Growth systems <br />
            built by <span className="relative inline-block font-sans font-extrabold text-accent-green tracking-tight not-italic transition-theme">
              marketers
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-3 text-accent-orange"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              >
                <path d="M0,7 C30,2 70,2 100,7 M5,9 C35,4 75,4 95,9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </motion.svg>
            </span>, <br />
            not <span className="italic font-serif font-normal text-accent-emerald dark:text-text-primary transition-theme">salespeople.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-xl text-base md:text-lg font-sans font-medium text-text-secondary leading-relaxed transition-theme">
            KiwiClicks helps ambitious Delhi brands capture customer attention, earn real trust, and scale campaigns through transparent metrics, high-velocity websites, and automated operations pipelines.
          </p>

          {/* Buttons */}
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

          {/* Trust signals strip */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { label: 'ROAS', value: '4.8x', color: 'text-gold-accent' },
              { label: 'Leads/mo', value: '400+', color: 'text-accent-green' },
              { label: 'Traffic ↑', value: '320%', color: 'text-accent-orange' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 bg-card-bg border border-border-color/30 rounded-xl px-3 py-2 shadow-offset-sm transition-theme">
                <span className={`text-sm font-sans font-black ${stat.color}`}>{stat.value}</span>
                <span className="text-[10px] font-mono text-text-secondary uppercase font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── Right Column: Founder Showcase (50%) ─── */}
        <motion.div
          style={{ y: boardY }}
          className="lg:col-span-6 flex flex-col items-center justify-center relative mt-12 lg:mt-0 select-none overflow-visible"
        >
          {/* Gentle Ambient Glow behind the card */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] rounded-full opacity-50 dark:opacity-35 blur-3xl -z-30 pointer-events-none transition-theme"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(27,77,62,0.18) 0%, rgba(255,138,61,0.06) 50%, transparent 70%)',
            }}
          />

          {/* Wrapper for interactive 3D parallax/tilt and subtle float (Showcase card size optimized to dominate visual area) */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-[350px] sm:max-w-[420px] md:max-w-[490px] lg:max-w-[550px] xl:max-w-[580px] z-10 transition-shadow duration-300 h-auto"
          >
            {/* Layered background card depth 1 */}
            <div 
              style={{ transform: 'translateZ(-15px) rotate(1deg)' }}
              className="absolute inset-0 bg-white/40 dark:bg-card-bg/40 border border-border-color/10 dark:border-accent-emerald/10 rounded-3xl translate-x-3 translate-y-3 -z-10 shadow-md transition-theme pointer-events-none" 
            />

            {/* Layered background card depth 2 */}
            <div 
              style={{ transform: 'translateZ(-30px) rotate(-1deg)' }}
              className="absolute inset-0 bg-accent-emerald/[0.03] dark:bg-accent-emerald/[0.07] border border-accent-emerald/5 dark:border-accent-emerald/10 rounded-3xl -translate-x-2.5 -translate-y-2.5 -z-20 shadow-sm transition-theme pointer-events-none" 
            />

            {/* ─── PRIMARY CARD: Founder Showcase Spotlight ─── */}
            <div 
              style={{ transform: 'translateZ(10px)' }}
              className="w-full bg-card-bg border border-border-color/15 dark:border-accent-emerald/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] flex flex-col relative transition-theme group"
            >
              {/* Photo Area */}
              <div className="w-full aspect-[3/2] overflow-hidden relative bg-page-bg-sec/50">
                <img
                  src="/hero.png"
                  alt="KiwiClicks Founders - Bandana & Shammy"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-101 transition-transform duration-700"
                />
              </div>

              {/* Text / Name Area (Frosted glassmorphism individually refined - no visual clutter) */}
              <div 
                className="p-5 bg-card-bg/85 dark:bg-card-bg/75 backdrop-blur-md border-t border-border-color/10 transition-theme relative z-10 rounded-b-3xl"
              >
                <div className="grid grid-cols-2 gap-4 divide-x divide-border-color/10 dark:divide-white/10 text-left">
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-text-primary tracking-tight transition-theme">
                      Bandana Kumari
                    </h4>
                    <p className="text-[8px] font-mono tracking-wider text-accent-green uppercase font-bold transition-theme mt-0.5">
                      Founder & Strategist
                    </p>
                  </div>
                  <div className="pl-4">
                    <h4 className="font-serif text-sm sm:text-base font-bold text-text-primary tracking-tight transition-theme">
                      Shammy Kumar
                    </h4>
                    <p className="text-[8px] font-mono tracking-wider text-accent-orange uppercase font-bold transition-theme mt-0.5">
                      Co-Founder & Strategist
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* ─── Micro Results Badges (Floating) ─── */}
            {/* Badge 1: Leads Generated */}
            <div 
              style={{ transform: 'translateZ(35px)' }}
              className="absolute -top-6 -left-4 md:-left-8 z-25 bg-card-bg/95 dark:bg-card-bg/90 backdrop-blur-md border border-accent-green/20 px-3 py-1.5 rounded-xl shadow-lg transition-theme pointer-events-none"
            >
              <span className="text-[8px] font-mono uppercase tracking-widest text-text-secondary block">LIVE RESULTS</span>
              <span className="text-[11px] font-sans font-black text-accent-green">+127 Leads Generated</span>
            </div>

            {/* Badge 2: Avg ROAS */}
            <div 
              style={{ transform: 'translateZ(35px)' }}
              className="absolute bottom-12 -right-4 md:-right-8 z-25 bg-card-bg/95 dark:bg-card-bg/90 backdrop-blur-md border border-accent-orange/20 px-3 py-1.5 rounded-xl shadow-lg transition-theme pointer-events-none"
            >
              <span className="text-[8px] font-mono uppercase tracking-widest text-text-secondary block">CAMPAIGN METRIC</span>
              <span className="text-[11px] font-sans font-black text-accent-orange">4.8x Average ROAS</span>
            </div>

            {/* ─── Human Signature Note (Desktop Only) ─── */}
            <div
              style={{ transform: 'translateZ(30px)' }}
              className="absolute -left-6 lg:-left-10 -bottom-14 z-30 font-handwriting text-accent-orange text-lg lg:text-xl -rotate-2 select-none font-bold hidden md:flex items-center gap-1.5 animate-pulse"
            >
              Real founders. Real growth. ➔
            </div>

          </motion.div>

          {/* ─── Clean Credibility Row Below Card (Trust Proof) ─── */}
          <div className="mt-8 w-full max-w-[350px] sm:max-w-[420px] md:max-w-[490px] lg:max-w-[550px] xl:max-w-[580px] grid grid-cols-2 gap-y-2.5 gap-x-4 border-t border-border-color/10 dark:border-white/10 pt-4 text-left px-2">
            {[
              '20+ Businesses Helped',
              '4+ Years Experience',
              'Delhi NCR Based',
              'SEO • Google Ads • Web Development'
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 text-xs text-text-secondary transition-theme">
                <span className="text-accent-green font-bold shrink-0">✓</span>
                <span className="font-sans font-semibold tracking-tight">{text}</span>
              </div>
            ))}
          </div>

          {/* ─── Handwritten note for Mobile ─── */}
          <div className="text-center font-handwriting text-accent-orange text-lg mt-6 block md:hidden -rotate-1 select-none font-bold">
            Real founders. Real growth. ➔
          </div>

        </motion.div>

      </div>
    </section>
  );
}
