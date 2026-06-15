import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, DollarSign, Users, Smile } from 'lucide-react';

/* ─── Floating particles ─── */
const FloatingParticle = ({
  x, y, size, delay, shape = 'circle', color = 'bg-accent-orange'
}: {
  x: string; y: string; size: number; delay: number; shape?: 'circle' | 'square' | 'diamond'; color?: string;
}) => (
  <motion.div
    className={`absolute ${color} opacity-20 pointer-events-none select-none`}
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
      opacity: [0.15, 0.35, 0.15],
    }}
    transition={{
      duration: 4 + delay,
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

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const boardY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-36 pb-20 overflow-hidden bg-page-bg text-text-primary transition-theme"
    >
      {/* ─── Background: dot grid ─── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045] select-none"
        style={{
          backgroundImage: 'radial-gradient(var(--accent-emerald) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* ─── Background: hand-drawn circle doodles ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 select-none">
        <svg width="100%" height="100%" className="w-full h-full">
          <circle cx="8%" cy="18%" r="90" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="6 5" />
          <circle cx="88%" cy="72%" r="130" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="12 4" />
          <circle cx="50%" cy="90%" r="65" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="75%" cy="15%" r="45" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 6" />
        </svg>
      </div>

      {/* ─── Floating ambient particles ─── */}
      <FloatingParticle x="5%" y="30%" size={10} delay={0} shape="circle" color="bg-accent-orange" />
      <FloatingParticle x="12%" y="65%" size={8} delay={1.2} shape="square" color="bg-accent-green" />
      <FloatingParticle x="90%" y="25%" size={12} delay={0.5} shape="diamond" color="bg-gold-accent" />
      <FloatingParticle x="80%" y="60%" size={7} delay={2} shape="circle" color="bg-accent-orange" />
      <FloatingParticle x="55%" y="92%" size={9} delay={1.6} shape="circle" color="bg-accent-green" />
      <FloatingParticle x="25%" y="88%" size={6} delay={0.8} shape="diamond" color="bg-accent-orange" />
      <FloatingParticle x="94%" y="50%" size={8} delay={1.4} shape="square" color="bg-accent-green" />

      {/* ─── Competitor sticky note (floating) ─── */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [-3, -1, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 right-8 md:right-16 hidden md:block z-30 select-none pointer-events-none"
      >
        <div className="bg-[#FEF08A] border-2 border-gray-800 p-3 rounded-sm shadow-lg w-40 text-left">
          <span className="text-[7px] font-mono font-bold uppercase tracking-widest text-gray-500">⚠️ heads up</span>
          <p className="font-handwriting text-gray-800 text-sm leading-tight font-bold mt-1">
            Your competitor is already running ads 👀
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* ─── Left Column ─── */}
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

          {/* Headline */}
          <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-text-primary transition-theme relative">
            We grow <br />
            <span className="relative inline-block font-sans font-extrabold text-accent-green tracking-tight not-italic transition-theme">
              businesses
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
            </span> <br />
            through marketing, <br />
            <span className="italic font-serif font-normal text-accent-emerald dark:text-text-primary transition-theme">Web & AI.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-xl text-base md:text-lg font-sans font-medium text-text-secondary leading-relaxed transition-theme">
            KiwiClicks helps ambitious Delhi brands capture customer attention, earn real trust, and scale campaigns through transparent metrics, high-velocity websites, and automated operations pipelines.
          </p>

          {/* Handwriting note */}
          <p className="font-handwriting text-accent-orange text-xl -rotate-2 mt-4 tracking-wide font-semibold block">
            ✦ Delhi CP office based growth engineers // GROW REMARKABLY 📈
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

        {/* ─── Right Column: Whiteboard Canvas ─── */}
        <motion.div
          style={{ y: boardY }}
          className="lg:col-span-5 flex justify-center relative mt-12 lg:mt-0"
        >
          {/* Main Whiteboard */}
          <div className="w-full max-w-md aspect-[4/5] bg-card-bg border-4 border-accent-emerald rounded-3xl p-6 relative shadow-offset transition-theme flex flex-col justify-between overflow-hidden">

            {/* Dot grid background */}
            <div
              className="absolute inset-0 pointer-events-none opacity-5 select-none"
              style={{
                backgroundImage: 'radial-gradient(var(--accent-emerald) 1.5px, transparent 1.5px)',
                backgroundSize: '20px 20px',
              }}
            />

            {/* Polaroid photo */}
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

            {/* Sticky note: SEO goal */}
            <div className="absolute top-[36%] right-4 w-36 bg-[#FEF08A] border-2 border-gray-800 p-3 shadow-md rounded-sm transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-20 text-left select-none text-gray-800">
              <span className="text-[8px] font-mono tracking-widest font-bold opacity-50 block uppercase">SEO GOAL</span>
              <p className="font-handwriting text-[13px] leading-tight font-bold mt-1">
                Target CP commercial keywords first! 🚀
              </p>
              <div className="flex gap-1.5 mt-2 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
              </div>
            </div>

            {/* Sticky note: Paid ads */}
            <div className="absolute bottom-28 left-4 w-36 bg-orange-100 dark:bg-orange-950/90 border-2 border-accent-orange p-3 shadow-md rounded-sm transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20 text-left select-none">
              <span className="text-[8px] font-mono tracking-widest font-bold text-accent-orange uppercase">Paid Ads Loop</span>
              <p className="font-handwriting text-[13px] leading-tight text-text-primary font-bold mt-1">
                Meta: hook tests (3s) + speed landing conversion.
              </p>
            </div>

            {/* Mini to-do checklist */}
            <div className="absolute top-6 right-4 w-32 bg-white dark:bg-card-bg border border-gray-200 dark:border-border-color rounded-xl p-2.5 shadow-sm z-10 select-none">
              <p className="text-[7px] font-mono uppercase font-bold text-gray-400 mb-1.5">This week ✓</p>
              {[
                { task: 'Fix keyword gaps', done: true },
                { task: 'Launch Meta A/B', done: true },
                { task: 'New landing pg', done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 mb-1">
                  <div className={`w-3 h-3 rounded-sm border flex items-center justify-center ${item.done ? 'bg-accent-green border-accent-green' : 'border-gray-300'}`}>
                    {item.done && <svg width="6" height="5" viewBox="0 0 6 5" fill="none"><path d="M1 2.5L2.5 4L5 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </div>
                  <span className={`text-[7px] font-sans ${item.done ? 'line-through text-gray-400' : 'text-gray-700 dark:text-text-secondary font-medium'}`}>{item.task}</span>
                </div>
              ))}
            </div>

            {/* Animated growth curve */}
            <div className="absolute top-4 right-20 w-24 h-16 pointer-events-none text-accent-green z-0 select-none">
              <svg width="100%" height="100%" viewBox="0 0 100 60" fill="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                  d="M10,55 Q40,50 60,30 T105,10"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path d="M96,10 L105,10 L103,20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="8" y="36" fill="#FF8A3D" fontSize="10" fontFamily="Caveat, cursive" fontWeight="bold">+312%</text>
              </svg>
            </div>

            {/* Bottom stat chips */}
            <div className="w-full flex justify-between items-end relative z-30 pt-16">
              <div className="bg-card-bg border-2 border-border-color rounded-xl p-3 shadow-offset-sm flex items-center gap-2 max-w-[125px] transition-theme">
                <div className="w-6 h-6 rounded-md bg-gold-accent/15 flex items-center justify-center text-gold-accent">
                  <DollarSign size={13} />
                </div>
                <div className="text-left">
                  <span className="text-[8px] font-mono text-text-secondary leading-none block font-bold transition-theme">ROAS</span>
                  <span className="text-xs font-sans font-bold text-text-primary block transition-theme">4.8x</span>
                </div>
              </div>

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

          {/* Decorative tape strips */}
          <div className="absolute -top-3 left-1/4 w-20 h-6 bg-yellow-200/40 border border-yellow-300 transform -rotate-12 backdrop-blur-sm pointer-events-none select-none z-40" />
          <div className="absolute -bottom-3 right-1/4 w-20 h-6 bg-yellow-200/40 border border-yellow-300 transform rotate-6 backdrop-blur-sm pointer-events-none select-none z-40" />
        </motion.div>

      </div>
    </section>
  );
}
