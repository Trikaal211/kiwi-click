import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Laptop, Users, TrendingUp } from 'lucide-react';

function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const start = Date.now();
      const ms = duration * 1000;
      const tick = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / ms, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // cubic ease out
        setCount(Math.floor(ease * value));
        if (progress < 1) requestAnimationFrame(tick);
        else setCount(value);
      };
      requestAnimationFrame(tick);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Inline animated sparkline SVG
const Sparkline = ({ path, color }: { path: string; color: string }) => (
  <svg className="w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
    {/* Fill area */}
    <motion.path
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      d={`${path} L 100,30 L 0,30 Z`}
      fill={color}
      fillOpacity={0.12}
    />
    {/* Line */}
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      d={path}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
  desc: string;
  shadowClass: string;
  borderColor: string;
  accentColor: string;
  sparklinePath: string;
  sparklineColor: string;
  note: string;
}

export default function Results() {
  const stats: StatItem[] = [
    {
      id: 1,
      label: 'Campaigns Managed',
      value: 200,
      suffix: '+',
      icon: Target,
      desc: 'Paid search & social campaigns optimized for continuous conversion efficiency.',
      shadowClass: 'shadow-offset-sm',
      borderColor: 'border-accent-emerald',
      accentColor: 'text-accent-green',
      sparklinePath: 'M0,25 L15,22 L30,18 L45,14 L60,10 L75,7 L90,4 L100,2',
      sparklineColor: '#4A9C3A',
      note: 'across 6 industries',
    },
    {
      id: 2,
      label: 'Web Projects',
      value: 50,
      suffix: '+',
      icon: Laptop,
      desc: 'High-converting custom React & Next.js digital properties deployed.',
      shadowClass: 'shadow-offset-orange',
      borderColor: 'border-accent-orange',
      accentColor: 'text-accent-orange',
      sparklinePath: 'M0,28 L20,24 L40,19 L55,14 L70,9 L85,5 L100,2',
      sparklineColor: '#FF8A3D',
      note: 'avg. 7.8% conv. rate',
    },
    {
      id: 3,
      label: 'Businesses Served',
      value: 100,
      suffix: '+',
      icon: Users,
      desc: 'From high-growth local Delhi brands to venture-backed startups.',
      shadowClass: 'shadow-offset-green',
      borderColor: 'border-accent-green',
      accentColor: 'text-accent-green',
      sparklinePath: 'M0,26 L18,22 L35,17 L50,13 L65,9 L80,5 L100,2',
      sparklineColor: '#4A9C3A',
      note: 'Delhi NCR & beyond',
    },
    {
      id: 4,
      label: 'Average ROI',
      value: 4,
      suffix: 'X',
      icon: TrendingUp,
      desc: 'Net returns on advertising investments designed and executed by our team.',
      shadowClass: 'shadow-offset-sm',
      borderColor: 'border-gold-accent',
      accentColor: 'text-gold-accent',
      sparklinePath: 'M0,27 L20,22 L40,16 L55,11 L70,7 L85,3 L100,1',
      sparklineColor: '#C9A54D',
      note: 'on managed ad spend',
    },
  ];

  return (
    <section
      id="results"
      className="relative py-16 md:py-28 px-6 md:px-12 bg-page-bg text-text-primary transition-theme overflow-hidden"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(60px,14vw,160px)] font-sans font-black text-text-primary/[0.025] dark:text-text-primary/[0.04] tracking-tighter leading-none whitespace-nowrap">
          RESULTS
        </span>
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] select-none"
        style={{
          backgroundImage: 'radial-gradient(var(--accent-emerald) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              05 // TRACK RECORD
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-text-primary mt-2 transition-theme">
              Our Results
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              Impressions are cheap. Conversions matter. We hold our campaigns accountable to direct commercial growth.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-card-bg border-2 ${s.borderColor} rounded-3xl p-7 ${s.shadowClass} hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between min-h-[280px] group relative overflow-hidden`}
              >
                {/* Ghost watermark number */}
                <div className="absolute -bottom-2 -right-2 text-[64px] font-sans font-black leading-none text-text-primary/[0.04] select-none pointer-events-none">
                  {s.value}{s.suffix}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-page-bg-sec border border-border-color/20 flex items-center justify-center ${s.accentColor} group-hover:scale-110 transition-transform duration-300 mb-5`}>
                    <Icon size={18} />
                  </div>

                  {/* Big animated counter */}
                  <span className={`text-5xl md:text-6xl font-sans font-extrabold tracking-tight ${s.accentColor}`}>
                    <Counter value={s.value} suffix={s.suffix} duration={2.2} />
                  </span>

                  {/* Label */}
                  <h3 className="text-sm font-sans font-bold tracking-widest uppercase text-text-primary mt-2 mb-1">
                    {s.label}
                  </h3>

                  {/* Note in handwriting */}
                  <p className="font-handwriting text-text-secondary text-sm">
                    {s.note}
                  </p>
                </div>

                {/* Sparkline */}
                <div className="mt-4 relative z-10">
                  <Sparkline path={s.sparklinePath} color={s.sparklineColor} />
                  <p className="text-[10px] font-sans font-medium text-text-secondary leading-relaxed mt-2">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Storytelling banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 relative bg-card-bg border-2 border-border-color rounded-3xl p-8 shadow-offset transition-theme text-center overflow-hidden"
        >
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-green/5 via-transparent to-accent-orange/5 pointer-events-none" />

          {/* Growth chart doodle */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
            <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
              <path d="M5,45 Q20,40 30,28 T60,10 T75,5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent-green" />
              <path d="M68,5 L75,5 L75,12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent-green" />
            </svg>
          </div>

          <p className="font-handwriting text-accent-emerald dark:text-accent-green text-2xl md:text-3xl font-bold -rotate-1 relative z-10">
            "Every number above represents a real Delhi business that grew." 📈
          </p>
          <p className="text-sm font-sans font-medium text-text-secondary mt-3 relative z-10">
            Not projections. Not estimates. Real campaigns, real clients, real revenue.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
