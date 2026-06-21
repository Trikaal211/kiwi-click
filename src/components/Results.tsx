import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Cpu, Users, BarChart3 } from 'lucide-react';

/* ─── Animated Counters ─── */
const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1.5;

    const end = value;
    const totalFrames = 60 * duration;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = progress * (2 - progress);
      const currentCount = Math.round(easeOutQuad * end);

      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [value, inView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ─── Compact Sparklines ─── */
const Sparkline = ({ path, color }: { path: string; color: string }) => (
  <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
    <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

interface ResultCase {
  id: number;
  client: string;
  industry: string;
  value: number;
  suffix: string;
  desc: string;
  icon: React.FC<any>;
  borderColor: string;
  glowColor: string;
  accentColor: string;
  sparklinePath: string;
  sparklineColor: string;
  note: string;
  href: string;
}

export default function Results() {
  const cases: ResultCase[] = [
    {
      id: 1,
      client: 'Veda Labs (SaaS)',
      industry: 'Paid Social Ads',
      value: 4.8,
      suffix: 'x',
      desc: 'Meta direct response campaigns scaling customer acquisitions.',
      icon: TrendingUp,
      borderColor: 'border-border-color hover:border-accent-green/30',
      glowColor: 'hover:shadow-[0_15px_30px_rgba(0,255,102,0.06)]',
      accentColor: 'text-accent-green',
      sparklinePath: 'M0,35 L20,30 L40,25 L60,18 L80,10 L100,5',
      sparklineColor: '#00FF66',
      note: 'Verified attributed ROAS',
      href: '/services/meta-ads'
    },
    {
      id: 2,
      client: 'Apex Systems',
      industry: 'Enterprise SEO',
      value: 320,
      suffix: '%',
      desc: 'Topical cluster rank indexing increasing search pipeline volumes.',
      icon: BarChart3,
      borderColor: 'border-border-color hover:border-cyan-400/30',
      glowColor: 'hover:shadow-[0_15px_30px_rgba(6,182,212,0.06)]',
      accentColor: 'text-cyan-400',
      sparklinePath: 'M0,32 L20,28 L40,20 L60,15 L80,5 L100,2',
      sparklineColor: '#38bdf8',
      note: 'Organic search volume increase',
      href: '/services/seo'
    },
    {
      id: 3,
      client: 'SkillForge Platform',
      industry: 'Conversion Engineering',
      value: 10,
      suffix: 'X',
      desc: 'Next.js checkout flow adjustments reducing user funnel friction.',
      icon: Cpu,
      borderColor: 'border-border-color hover:border-purple-400/30',
      glowColor: 'hover:shadow-[0_15px_30px_rgba(168,85,247,0.06)]',
      accentColor: 'text-purple-400',
      sparklinePath: 'M0,36 L20,34 L40,28 L60,20 L80,12 L100,6',
      sparklineColor: '#a855f7',
      note: 'Checkout loading speed velocity',
      href: '/services/business-web-dev'
    },
    {
      id: 4,
      client: 'Centra SaaS Onboarding',
      industry: 'Automation Operations',
      value: 92,
      suffix: '%',
      desc: 'LLM qualification qualifiers reducing manual screening friction.',
      icon: Users,
      borderColor: 'border-border-color hover:border-yellow-500/30',
      glowColor: 'hover:shadow-[0_15px_30px_rgba(234,179,8,0.06)]',
      accentColor: 'text-yellow-500',
      sparklinePath: 'M0,38 L20,35 L40,28 L60,24 L80,18 L100,10',
      sparklineColor: '#eab308',
      note: '84% Registration yield rate',
      href: '/services/business-web-dev'
    },
  ];

  return (
    <section
      id="results"
      className="relative py-20 md:py-32 px-6 md:px-12 bg-page-bg text-text-primary overflow-hidden transition-theme border-b border-border-color"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(60px,14vw,160px)] font-sans font-black text-text-primary/[0.01] tracking-tighter leading-none whitespace-nowrap transition-theme">
          ATTRIBUTION LOGS
        </span>
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.01] select-none"
        style={{
          backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-6 transition-theme">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent-green font-bold uppercase">
              05 // PROVEN PIPELINES
            </span>
            <h2 className="font-sans font-extrabold text-4xl md:text-6xl text-text-primary mt-3 uppercase transition-theme">
              Performance Index
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              We connect digital tracking pixels directly to sales invoices to map verified transaction performance.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <Link to={c.href} key={c.id} className="block h-full group">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-5%' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`bg-card-bg backdrop-blur-md border ${c.borderColor} rounded-3xl p-5 ${c.glowColor} transition-all duration-300 flex flex-col justify-between min-h-[300px] relative overflow-hidden h-full`}
                >
                  <div className="relative z-10 text-left">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-text-secondary opacity-60">
                        {c.industry}
                      </span>
                      <div className={`w-7 h-7 rounded-lg bg-page-bg-sec border border-border-color flex items-center justify-center transition-theme ${c.accentColor}`}>
                        <Icon size={13} />
                      </div>
                    </div>

                    <h4 className="font-sans font-extrabold text-base text-text-primary tracking-tight transition-theme">
                      {c.client}
                    </h4>

                    {/* Counter Metric */}
                    <div className="my-4">
                      <span className={`text-4xl font-sans font-black tracking-tight ${c.accentColor}`}>
                        <Counter value={c.value} suffix={c.suffix} />
                      </span>
                      <p className="font-mono text-text-secondary text-[9px] mt-1.5 leading-none transition-theme">
                        {c.note}
                      </p>
                    </div>
                  </div>

                  {/* Sparkline & Description */}
                  <div className="mt-4 relative z-10">
                    <Sparkline path={c.sparklinePath} color={c.sparklineColor} />
                    <p className="text-[10px] font-sans text-text-secondary leading-normal mt-3 text-left transition-theme">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Global Blueprint Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 relative bg-card-bg border border-border-color rounded-3xl p-6 shadow-lg text-center overflow-hidden transition-theme"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
          <p className="font-sans text-text-primary text-sm md:text-base font-bold relative z-10 transition-theme">
            "We hold acquisition campaigns accountable to real balance sheet revenue." 📈
          </p>
        </motion.div>

      </div>
    </section>
  );
}
