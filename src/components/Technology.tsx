import { motion } from 'framer-motion';

/* ─── Mini Visual Mockups ─── */

const AnalyticsMockup = () => (
  <div className="w-full bg-[#f8fffe] dark:bg-[#0d1f19] rounded-lg border border-accent-emerald/20 p-3 text-left">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[8px] font-mono font-bold text-text-secondary uppercase">Sessions · Last 30 Days</span>
      <span className="text-[8px] font-mono text-accent-green font-bold">+43%</span>
    </div>
    <div className="flex items-end gap-1 h-10">
      {[35, 48, 40, 62, 55, 70, 80, 75, 90, 100, 88, 95].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-accent-green/30 dark:bg-accent-green/20 relative overflow-hidden"
          style={{ height: `${h}%` }}
        >
          <div
            className="absolute bottom-0 w-full bg-accent-green rounded-sm animate-bar-grow"
            style={{ height: `${h}%`, animationDelay: `${i * 0.07}s` }}
          />
        </div>
      ))}
    </div>
    <div className="flex justify-between mt-1.5">
      <span className="text-[7px] text-text-secondary font-mono">Jan</span>
      <span className="text-[7px] text-text-secondary font-mono">Today</span>
    </div>
  </div>
);

const GoogleAdsMockup = () => (
  <div className="w-full bg-[#f8fffe] dark:bg-[#0d1f19] rounded-lg border border-accent-emerald/20 p-3 text-left space-y-1.5">
    <div className="flex justify-between items-center border-b border-border-color/10 pb-1.5 mb-2">
      <span className="text-[8px] font-mono font-bold text-accent-orange uppercase">Campaign Performance</span>
      <span className="text-[7px] font-mono text-accent-green font-bold">LIVE</span>
    </div>
    {[
      { label: 'Impressions', value: '142K', trend: '+18%' },
      { label: 'CTR', value: '6.4%', trend: '+2.1%' },
      { label: 'Conv. Rate', value: '12.8%', trend: '+4.3%' },
    ].map((row, i) => (
      <div key={i} className="flex justify-between items-center text-[8px]">
        <span className="text-text-secondary font-medium">{row.label}</span>
        <div className="flex gap-2 items-center">
          <span className="font-bold text-text-primary font-mono">{row.value}</span>
          <span className="text-accent-green font-bold font-mono">{row.trend}</span>
        </div>
      </div>
    ))}
  </div>
);

const MetaAdsMockup = () => (
  <div className="w-full bg-[#f8fffe] dark:bg-[#0d1f19] rounded-lg border border-accent-emerald/20 p-2.5 text-left">
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-md p-2 mb-2 text-white">
      <span className="text-[7px] font-mono uppercase opacity-70">Sponsored · Feed Ad</span>
      <p className="text-[9px] font-bold leading-tight mt-0.5">🔥 Delhi's #1 Growth Agency</p>
    </div>
    <div className="flex justify-between text-[8px]">
      <div>
        <span className="text-text-secondary block font-mono">ROAS</span>
        <span className="font-bold text-accent-orange">4.8x</span>
      </div>
      <div>
        <span className="text-text-secondary block font-mono">Reach</span>
        <span className="font-bold text-text-primary">89K</span>
      </div>
      <div>
        <span className="text-text-secondary block font-mono">CPL</span>
        <span className="font-bold text-accent-green">₹140</span>
      </div>
    </div>
  </div>
);

const ReactMockup = () => (
  <div className="w-full bg-[#0d1117] rounded-lg border border-accent-emerald/20 p-2.5 text-left font-mono">
    <div className="text-[7px] space-y-0.5">
      <p className="text-[#7ee787]">{'<App>'}</p>
      <p className="text-[#79c0ff] pl-3">{'<QueryClientProvider>'}</p>
      <p className="text-[#f0883e] pl-6">{'<Router>'}</p>
      <p className="text-white/60 pl-9">{'<Hero />'}</p>
      <p className="text-white/60 pl-9">{'<Services />'}</p>
      <p className="text-[#f0883e] pl-6">{'</Router>'}</p>
      <p className="text-[#79c0ff] pl-3">{'</QueryClientProvider>'}</p>
      <p className="text-[#7ee787]">{'</App>'}</p>
    </div>
  </div>
);

const NodeMockup = () => (
  <div className="w-full bg-[#0d1117] rounded-lg border border-accent-emerald/20 p-2.5 text-left font-mono">
    <div className="text-[7px] space-y-0.5">
      <p><span className="text-[#f0883e]">POST</span> <span className="text-white/70">/api/leads</span></p>
      <p className="text-white/40">{'{'}</p>
      <p className="pl-3 text-[#7ee787]">"name": <span className="text-[#a5d6ff]">"Rahul S"</span></p>
      <p className="pl-3 text-[#7ee787]">"source": <span className="text-[#a5d6ff]">"google"</span></p>
      <p className="text-white/40">{'}'}</p>
      <p><span className="text-[#7ee787]">201</span> <span className="text-white/50">Lead routed → CRM ✓</span></p>
    </div>
  </div>
);

const OpenAIMockup = () => (
  <div className="w-full bg-[#0d1117] rounded-lg border border-accent-emerald/20 p-2.5 text-left font-mono">
    <div className="text-[7px] space-y-1">
      <p className="text-white/40">// AI Lead Qualifier</p>
      <p><span className="text-[#79c0ff]">model</span><span className="text-white/50">:</span> <span className="text-[#a5d6ff]">"gpt-4o-mini"</span></p>
      <div className="bg-white/5 rounded p-1.5 mt-1">
        <p className="text-[#7ee787]">→ Lead qualified in <span className="text-accent-orange font-bold">0.3s</span></p>
        <p className="text-[#7ee787]">→ WhatsApp sent <span className="text-accent-orange font-bold">auto</span></p>
      </div>
    </div>
  </div>
);

const AhrefsMockup = () => (
  <div className="w-full bg-[#f8fffe] dark:bg-[#0d1f19] rounded-lg border border-accent-emerald/20 p-2.5 text-left">
    <div className="space-y-1">
      {[
        { kw: 'dental clinic CP', pos: 1, vol: '2.4K' },
        { kw: 'best dentist Delhi', pos: 2, vol: '4.8K' },
        { kw: 'implants South Delhi', pos: 1, vol: '1.1K' },
      ].map((row, i) => (
        <div key={i} className="flex justify-between items-center text-[7px] border-b border-border-color/10 pb-0.5">
          <span className="text-text-secondary truncate max-w-[90px]">{row.kw}</span>
          <div className="flex gap-2 shrink-0">
            <span className={`font-bold font-mono ${row.pos === 1 ? 'text-accent-green' : 'text-gold-accent'}`}>
              #{row.pos}
            </span>
            <span className="text-text-secondary font-mono">{row.vol}/mo</span>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-1.5 text-[7px] text-accent-green font-mono font-bold">↑ DR climbing +12 this month</div>
  </div>
);

const SearchConsoleMockup = () => (
  <div className="w-full bg-[#f8fffe] dark:bg-[#0d1f19] rounded-lg border border-accent-emerald/20 p-3 text-left">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[8px] font-mono font-bold text-text-secondary">Impressions</span>
      <span className="text-[7px] font-mono text-accent-green font-bold">+67% MoM</span>
    </div>
    {/* Sparkline */}
    <svg className="w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        d="M0,25 L10,22 L20,20 L30,17 L40,15 L50,13 L60,10 L70,8 L80,5 L90,3 L100,1"
        fill="none"
        stroke="var(--accent-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
    <div className="flex justify-between mt-1">
      <span className="text-[7px] text-text-secondary font-mono">Jan</span>
      <span className="text-[7px] text-accent-orange font-mono font-bold">Now: 48.2K</span>
    </div>
  </div>
);

interface TechItem {
  name: string;
  category: string;
  categoryColor: string;
  topColor: string;
  desc: string;
  mockup: React.FC;
  delay: number;
}

export default function Technology() {
  const tools: TechItem[] = [
    {
      name: 'Google Analytics',
      category: 'Data Tracking',
      categoryColor: 'text-accent-green bg-accent-green/10',
      topColor: 'bg-accent-green',
      desc: 'Custom event funnels, behavioral segments, traffic path mapping.',
      mockup: AnalyticsMockup,
      delay: 0,
    },
    {
      name: 'Google Ads',
      category: 'Paid Search',
      categoryColor: 'text-accent-orange bg-accent-orange/10',
      topColor: 'bg-accent-orange',
      desc: 'Intent-targeted campaigns that convert searches into inquiries.',
      mockup: GoogleAdsMockup,
      delay: 0.06,
    },
    {
      name: 'Meta Business',
      category: 'Paid Social',
      categoryColor: 'text-blue-500 bg-blue-500/10',
      topColor: 'bg-gradient-to-r from-blue-500 to-purple-500',
      desc: 'Dynamic lookalike audiences, pixel tracking, hook script testing.',
      mockup: MetaAdsMockup,
      delay: 0.12,
    },
    {
      name: 'React',
      category: 'Frontend Code',
      categoryColor: 'text-cyan-500 bg-cyan-500/10',
      topColor: 'bg-cyan-500',
      desc: 'High-performance landing pages with micro-animations and speed.',
      mockup: ReactMockup,
      delay: 0.18,
    },
    {
      name: 'Node.js',
      category: 'Backend APIs',
      categoryColor: 'text-emerald-500 bg-emerald-500/10',
      topColor: 'bg-emerald-500',
      desc: 'Lead routing from form triggers directly into CRM systems.',
      mockup: NodeMockup,
      delay: 0.24,
    },
    {
      name: 'OpenAI API',
      category: 'AI Automation',
      categoryColor: 'text-violet-500 bg-violet-500/10',
      topColor: 'bg-violet-500',
      desc: 'AI responder flows that qualify and engage leads in under 1 minute.',
      mockup: OpenAIMockup,
      delay: 0.30,
    },
    {
      name: 'Ahrefs',
      category: 'SEO Auditing',
      categoryColor: 'text-orange-500 bg-orange-500/10',
      topColor: 'bg-orange-500',
      desc: 'Competitor keyword gap analysis, backlink monitoring, DR tracking.',
      mockup: AhrefsMockup,
      delay: 0.36,
    },
    {
      name: 'Search Console',
      category: 'Technical SEO',
      categoryColor: 'text-accent-green bg-accent-green/10',
      topColor: 'bg-accent-green',
      desc: 'Indexing validation, schema health, impression trend monitoring.',
      mockup: SearchConsoleMockup,
      delay: 0.42,
    },
  ];

  return (
    <section
      id="tech"
      className="relative py-24 md:py-36 px-6 md:px-12 bg-page-bg-sec text-text-primary transition-theme overflow-hidden"
    >
      {/* Watermark background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(60px,12vw,140px)] font-sans font-black text-text-primary/[0.025] dark:text-text-primary/[0.04] tracking-tight leading-none whitespace-nowrap uppercase">
          STACK
        </span>
      </div>

      {/* Grid dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] select-none"
        style={{
          backgroundImage: 'radial-gradient(var(--accent-emerald) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-6 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              06 // STACK INTEGRATION
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-text-primary mt-2 transition-theme">
              Technology Stack
            </h2>
            {/* Handwriting annotation */}
            <p className="font-handwriting text-accent-orange text-lg -rotate-1 mt-2 font-semibold">
              ✦ Real tools, not agency buzzwords 🛠️
            </p>
          </div>
          <div className="max-w-sm text-left">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              We run high-performance marketing channels with tools that actually move metrics — not vanity dashboards.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((t) => {
            const Mockup = t.mockup;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: t.delay }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-card-bg border-2 border-accent-emerald/30 hover:border-accent-emerald rounded-2xl overflow-hidden shadow-offset-sm hover:shadow-offset transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Color top strip */}
                <div className={`${t.topColor} h-1 w-full`} />

                <div className="p-5 flex flex-col flex-1 gap-3">
                  {/* Category badge */}
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full self-start ${t.categoryColor}`}>
                    {t.category}
                  </span>

                  {/* Visual Mockup */}
                  <div className="w-full">
                    <Mockup />
                  </div>

                  {/* Tool name + desc */}
                  <div className="mt-auto">
                    <h3 className="font-serif text-base text-text-primary transition-theme group-hover:text-accent-green duration-300">
                      {t.name}
                    </h3>
                    <p className="text-[11px] font-sans font-medium text-text-secondary leading-relaxed mt-1">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent note */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-card-bg border-2 border-border-color rounded-2xl px-6 py-3 shadow-offset-sm transition-theme">
            <span className="text-accent-green text-lg">⚡</span>
            <p className="text-sm font-sans font-medium text-text-primary">
              All tools are actively used on <strong>live client campaigns</strong> — not theoretical showcases.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
