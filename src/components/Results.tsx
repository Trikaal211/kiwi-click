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
      fillOpacity={0.1}
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

interface CaseStat {
  id: number;
  client: string;
  industry: string;
  metricLabel: string;
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
  const cases: CaseStat[] = [
    {
      id: 1,
      client: 'Dwarka Dental Care',
      industry: 'Local Healthcare',
      metricLabel: 'Google Maps Rank',
      value: 1,
      suffix: 'st',
      icon: Target,
      desc: 'Locking in HNW patients in Southwest Delhi. Crawl optimizations and Map citations drove visibility.',
      shadowClass: 'shadow-offset-sm hover:shadow-offset-green',
      borderColor: 'border-accent-green/30 hover:border-accent-green',
      accentColor: 'text-accent-green',
      sparklinePath: 'M0,25 L15,22 L30,18 L45,14 L60,10 L75,7 L90,4 L100,2',
      sparklineColor: '#4A9C3A',
      note: '+320% Organic traffic',
    },
    {
      id: 2,
      client: 'Veda Organics',
      industry: 'E-Commerce Retailer',
      metricLabel: 'Meta Ads ROAS',
      value: 4,
      suffix: '.8x',
      icon: TrendingUp,
      desc: 'Meta ad creatives engineered with 3-sec hook scripts cut customer acquisition costs by 38% in 45 days.',
      shadowClass: 'shadow-offset-sm hover:shadow-offset-orange',
      borderColor: 'border-accent-orange/30 hover:border-accent-orange',
      accentColor: 'text-accent-orange',
      sparklinePath: 'M0,28 L20,24 L40,19 L55,14 L70,9 L85,5 L100,2',
      sparklineColor: '#FF8A3D',
      note: '4.8x average ROAS',
    },
    {
      id: 3,
      client: 'Apex Realty CP',
      industry: 'B2B Services Delhi',
      metricLabel: 'Inbound Qualified Leads',
      value: 127,
      suffix: '+',
      icon: Users,
      desc: 'Intent-focused Google Search campaigns and progressive forms pruned junk leads by 60%.',
      shadowClass: 'shadow-offset-sm hover:shadow-offset-green',
      borderColor: 'border-accent-green/30 hover:border-accent-green',
      accentColor: 'text-accent-green',
      sparklinePath: 'M0,26 L18,22 L35,17 L50,13 L65,9 L80,5 L100,2',
      sparklineColor: '#4A9C3A',
      note: '-40% CPL Reduction',
    },
    {
      id: 4,
      client: 'SkillForge India',
      industry: 'EdTech Platform',
      metricLabel: 'Funnel Conversion',
      value: 7,
      suffix: '.8%',
      icon: Laptop,
      desc: 'React Next.js layouts load in under 1.5s. Integrated passwordless WhatsApp CRM lead qualifier.',
      shadowClass: 'shadow-offset-sm hover:shadow-offset-orange',
      borderColor: 'border-gold-accent/30 hover:border-gold-accent',
      accentColor: 'text-gold-accent',
      sparklinePath: 'M0,27 L20,22 L40,16 L55,11 L70,7 L85,3 L100,1',
      sparklineColor: '#C9A54D',
      note: '7.8% Avg Conversion Rate',
    },
  ];

  return (
    <section
      id="results"
      className="relative py-10 md:py-16 px-6 md:px-12 bg-page-bg text-text-primary transition-theme overflow-hidden"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(60px,14vw,160px)] font-sans font-black text-text-primary/[0.015] dark:text-text-primary/[0.03] tracking-tighter leading-none whitespace-nowrap">
          CASE RESULTS
        </span>
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] select-none"
        style={{
          backgroundImage: 'radial-gradient(var(--accent-emerald) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-6 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              05 // CASE OUTCOMES
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl text-text-primary mt-2 transition-theme">
              Our Results
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-xs md:text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              No vanity estimates. We analyze campaigns and hold them accountable to direct commercial leads and transaction wins.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className={`bg-card-bg border-2 ${c.borderColor} rounded-2xl p-5 ${c.shadowClass} transition-all duration-300 flex flex-col justify-between min-h-[300px] group relative overflow-hidden`}
              >
                {/* Ghost watermark number */}
                <div className="absolute -bottom-2 -right-2 text-[48px] font-sans font-black leading-none text-text-primary/[0.02] dark:text-text-primary/[0.04] select-none pointer-events-none">
                  {c.value}{c.suffix}
                </div>

                <div className="relative z-10 text-left">
                  {/* Category / Client Info */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[7.5px] font-mono font-bold uppercase tracking-wider text-text-secondary">
                      {c.industry}
                    </span>
                    <div className={`w-7 h-7 rounded-lg bg-page-bg-sec border border-border-color/10 flex items-center justify-center ${c.accentColor}`}>
                      <Icon size={14} />
                    </div>
                  </div>

                  {/* Client name */}
                  <h4 className="font-serif text-base font-bold text-text-primary tracking-tight transition-theme">
                    {c.client}
                  </h4>

                  {/* Value / Outcome Indicator */}
                  <div className="my-2.5">
                    <span className={`text-4xl font-sans font-extrabold tracking-tight ${c.accentColor}`}>
                      <Counter value={c.value} suffix={c.suffix} duration={1.8} />
                    </span>
                    <p className="font-handwriting text-accent-orange text-xs mt-0.5 font-bold">
                      {c.note}
                    </p>
                  </div>
                </div>

                {/* Sparkline + Description */}
                <div className="mt-4 relative z-10">
                  <Sparkline path={c.sparklinePath} color={c.sparklineColor} />
                  <p className="text-[10px] font-sans font-medium text-text-secondary leading-relaxed mt-2 text-left">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Storytelling banner (Compact) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 relative bg-card-bg border-2 border-border-color rounded-2xl p-6 shadow-offset-sm transition-theme text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-green/5 via-transparent to-accent-orange/5 pointer-events-none" />
          <p className="font-handwriting text-accent-emerald dark:text-accent-green text-xl md:text-2xl font-bold -rotate-0.5 relative z-10">
            "Behind every case study is a real business that achieved growth." 📈
          </p>
        </motion.div>

      </div>
    </section>
  );
}
