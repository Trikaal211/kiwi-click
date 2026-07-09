import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick } from '../lib/analytics';

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
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-32 md:pt-36 lg:pt-40 pb-20 overflow-hidden bg-page-bg text-text-primary transition-theme"
    >
      {/* 2. Large blurred radial gradients creating atmosphere */}
      {/* Olive Green (Top Left) */}
      <div className="absolute top-[-10%] left-[-5%] w-[80vw] h-[80vw] sm:w-[700px] sm:h-[700px] rounded-full bg-[#3d5e3a]/[0.04] dark:bg-[#4d664a]/[0.06] blur-[140px] pointer-events-none -z-20" />
      {/* Warm Cream (Center/Right) */}
      <div className="absolute top-[25%] right-[-10%] w-[90vw] h-[90vw] sm:w-[650px] sm:h-[650px] rounded-full bg-[#fcf9ed]/70 dark:bg-[#1a231d]/20 blur-[130px] pointer-events-none -z-20" />
      {/* Soft Beige (Bottom Left) */}
      <div className="absolute bottom-[5%] left-[15%] w-[75vw] h-[75vw] sm:w-[500px] sm:h-[500px] rounded-full bg-[#eedac1]/20 dark:bg-[#1a140f]/10 blur-[110px] pointer-events-none -z-20" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">

        {/* ─── Left Column: Content (50%) ─── */}
        <motion.div
          style={{ y: textY, opacity: fadeOut }}
          className="lg:col-span-6 flex flex-col justify-center text-left relative"
        >

          {/* Subtitle Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-orange" />
            <span className="text-[10px] font-mono tracking-widest text-accent-emerald dark:text-accent-orange font-bold uppercase transition-theme">
              DELHI'S DIGITAL GROWTH PARTNER
            </span>
          </div>

          {/* Headline (The hero typography) */}
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

          {/* Subheadline / Paragraph (Generous whitespace) */}
          <p className="mt-8 max-w-xl text-base md:text-lg font-sans font-medium text-text-secondary leading-relaxed transition-theme">
            KiwiClicks helps ambitious Delhi brands capture customer attention, earn real trust, and scale campaigns through transparent metrics, high-velocity websites, and automated operations pipelines.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4 md:gap-6 relative">
            <Link
              to="/results"
              onClick={() => trackButtonClick('View Results', 'Hero')}
              className="px-8 py-4 rounded-xl text-xs font-sans font-bold uppercase tracking-wider bg-accent-emerald text-white border-2 border-accent-emerald hover:bg-accent-green hover:border-accent-green transition-theme shadow-offset cursor-pointer flex items-center gap-1.5"
            >
              View Results
              <ArrowUpRight size={13} />
            </Link>
            <a
              href="#contact"
              onClick={() => trackButtonClick('Lets Talk', 'Hero')}
              className="px-8 py-4 rounded-xl text-xs font-sans font-bold uppercase tracking-wider bg-card-bg text-text-primary border-2 border-border-color hover:bg-hover-highlight transition-theme shadow-offset-orange cursor-pointer"
            >
              Let's Talk
            </a>

          </div>

          {/* Trust signals strip */}
          <div className="mt-14 flex flex-wrap gap-4">
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
          {/* 5. Ambient olive glow behind the founder card */}
          <div className="absolute inset-[-20px] rounded-[40px] bg-[#3d5e3a]/12 dark:bg-[#4d664a]/20 blur-[30px] pointer-events-none -z-10" />

          {/* Wrapper for interactive 3D parallax/tilt and subtle float */}
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
            className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] z-10 transition-shadow duration-300 h-auto"
          >
            {/* Layered background card depth 1 */}
            <div 
              style={{ transform: 'translateZ(-15px) rotate(1.5deg)' }}
              className="absolute inset-0 bg-white/40 dark:bg-card-bg/40 border border-border-color/10 dark:border-accent-emerald/10 rounded-3xl translate-x-2.5 translate-y-2.5 -z-10 shadow-md transition-theme pointer-events-none" 
            />

            {/* Layered background card depth 2 */}
            <div 
              style={{ transform: 'translateZ(-30px) rotate(-1.5deg)' }}
              className="absolute inset-0 bg-accent-emerald/[0.03] dark:bg-accent-emerald/[0.07] border border-accent-emerald/5 dark:border-accent-emerald/10 rounded-3xl -translate-x-2 -translate-y-2 -z-20 shadow-sm transition-theme pointer-events-none" 
            />

            {/* ─── PRIMARY CARD: Founder Showcase Spotlight ─── */}
            <div 
              style={{ transform: 'translateZ(10px)' }}
              className="w-full bg-card-bg border border-border-color/15 dark:border-accent-emerald/10 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)] flex flex-col relative transition-theme group"
            >
              {/* Photo Area */}
              <div className="w-full aspect-[4/5] overflow-hidden relative bg-page-bg-sec/50">
                {/* Optimized LCP image with eager loading and fetchpriority */}
                <img
                  src="/founder.png"
                  alt="Bandana Kumari - Founder of KiwiClicks"
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover object-top scale-100 group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Founder overlay chip identifying agency status */}
                <div className="absolute top-4 left-4 bg-accent-emerald/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase shadow-md">
                  FOUNDER-LED AGENCY
                </div>
              </div>

              {/* Text / Name Area */}
              <div 
                className="p-5 bg-card-bg/95 dark:bg-card-bg/85 backdrop-blur-md border-t border-border-color/10 transition-theme relative z-10 rounded-b-3xl text-left"
              >
                <h4 className="font-serif text-lg sm:text-xl font-bold text-text-primary tracking-tight transition-theme">
                  Bandana Kumari
                </h4>
                <p className="text-xs font-mono tracking-wider text-accent-green uppercase font-bold transition-theme mt-0.5">
                  Founder & Growth Strategist
                </p>
                
                {/* Trust Chips list integrated cleanly inside the card footer */}
                <div className="mt-4 pt-3 border-t border-border-color/10 dark:border-white/10 flex flex-wrap gap-1.5">
                  {['Local SEO', 'Google Ads', 'Lead Generation', 'Business Growth'].map((chip) => (
                    <span 
                      key={chip} 
                      className="text-[9px] font-sans font-bold px-2.5 py-1 rounded-lg bg-page-bg border border-border-color/10 text-text-secondary transition-theme whitespace-nowrap"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* ─── Floating Badges ─── */}
            <div 
              style={{ transform: 'translateZ(35px)' }}
              className="absolute -top-5 -right-4 md:-right-6 z-25 bg-card-bg/95 dark:bg-card-bg/90 backdrop-blur-md border-2 border-accent-green px-3.5 py-2 rounded-2xl shadow-lg transition-theme pointer-events-none flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green font-bold text-xs shrink-0">✓</div>
              <div>
                <span className="text-[11px] font-sans font-black text-text-primary block leading-none">20+</span>
                <span className="text-[7.5px] font-mono uppercase tracking-wider text-text-secondary block mt-0.5">Businesses Helped</span>
              </div>
            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
