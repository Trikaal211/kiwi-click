import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, TrendingUp, Zap } from 'lucide-react';

/* ─── Per-service visual widgets ─── */

const SEORankingWidget = () => (
  <div className="w-full bg-[#f0fdf4] dark:bg-[#0d1f19] rounded-xl border border-accent-green/30 p-3">
    <div className="flex items-center gap-1 mb-2">
      <div className="w-2 h-2 rounded-full bg-red-400" />
      <div className="w-2 h-2 rounded-full bg-yellow-400" />
      <div className="w-2 h-2 rounded-full bg-green-400" />
      <span className="text-[7px] font-mono text-text-secondary/60 ml-2">google.com · Delhi search</span>
    </div>
    <div className="space-y-1.5">
      <div className="flex items-center gap-2 bg-accent-green/10 border border-accent-green/20 rounded-lg p-1.5">
        <span className="text-[8px] font-bold text-accent-green font-mono">#1</span>
        <div>
          <p className="text-[8px] font-bold text-text-primary leading-tight">KiwiClicks Client — Dental CP</p>
          <p className="text-[6px] text-text-secondary">kiwi-client.in · 4.9★ · 184 reviews</p>
        </div>
        <div className="ml-auto text-[8px] bg-accent-orange/15 text-accent-orange px-1 rounded font-bold">Ad</div>
      </div>
      <div className="flex items-center gap-2 rounded-lg p-1.5 opacity-50">
        <span className="text-[8px] font-mono text-text-secondary">#2</span>
        <p className="text-[8px] text-text-secondary">Competitor Clinic</p>
      </div>
    </div>
    <div className="flex justify-between mt-2 text-[7px] font-mono">
      <span className="text-text-secondary">Organic Traffic</span>
      <span className="text-accent-green font-bold">+320% ↑</span>
    </div>
  </div>
);

const MetaAdWidget = () => (
  <div className="w-full rounded-xl border border-accent-orange/30 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-3">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[7px] font-mono text-white/50 uppercase">Meta Ads · Live</span>
      <span className="text-[7px] font-mono text-green-400 font-bold">● Active</span>
    </div>
    <div className="bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-lg p-2 mb-2 border border-white/10">
      <p className="text-[8px] font-bold text-white leading-tight">🔥 3-Second Hook: "Delhi ke sabse..."</p>
      <div className="flex gap-2 mt-1">
        <span className="text-[6px] bg-white/10 rounded px-1 py-0.5 text-white/70">Video Ad</span>
        <span className="text-[6px] bg-white/10 rounded px-1 py-0.5 text-white/70">Audience: Delhi NCR</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-1 text-center">
      <div>
        <p className="text-[8px] font-bold text-accent-orange">4.8x</p>
        <p className="text-[6px] text-white/50 font-mono">ROAS</p>
      </div>
      <div>
        <p className="text-[8px] font-bold text-green-400">₹140</p>
        <p className="text-[6px] text-white/50 font-mono">CPL</p>
      </div>
      <div>
        <p className="text-[8px] font-bold text-blue-400">89K</p>
        <p className="text-[6px] text-white/50 font-mono">Reach</p>
      </div>
    </div>
  </div>
);

const WebDevWidget = () => (
  <div className="w-full bg-[#f8fffe] dark:bg-[#0d1f19] rounded-xl border border-border-color/20">
    <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-border-color/10">
      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
      <span className="text-[7px] font-mono text-text-secondary/50 ml-1">your-brand.in</span>
      <div className="ml-auto flex gap-1.5">
        <div className="px-1 py-0.5 bg-green-500/10 text-green-500 text-[6px] font-mono rounded font-bold">100 SEO</div>
        <div className="px-1 py-0.5 bg-accent-orange/10 text-accent-orange text-[6px] font-mono rounded font-bold">0.9s</div>
      </div>
    </div>
    <div className="p-2.5">
      <div className="h-2 bg-accent-emerald/20 w-2/5 rounded mb-1.5" />
      <div className="h-6 bg-accent-green/10 rounded-lg flex items-center justify-center mb-2 border border-accent-green/20">
        <p className="text-[8px] font-serif italic font-bold text-text-primary">India's Best Dental Specialists</p>
      </div>
      <div className="flex gap-1.5">
        <div className="bg-accent-emerald text-white text-[7px] font-bold px-2 py-0.5 rounded shadow-offset-sm">Book Now →</div>
        <div className="text-[7px] font-handwriting text-accent-orange">* Only 3 slots left!</div>
      </div>
    </div>
  </div>
);

const GoogleAdsWidget = () => (
  <div className="w-full bg-[#f8fffe] dark:bg-[#0d1f19] rounded-xl border border-accent-emerald/20 p-3">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[7px] font-mono font-bold text-text-secondary uppercase">Search Campaign</span>
      <span className="text-[7px] font-mono text-accent-green font-bold">↓ -40% CPL</span>
    </div>
    <svg className="w-full h-10" viewBox="0 0 100 40" preserveAspectRatio="none">
      {/* Old high CPL line */}
      <path d="M0,10 L20,12 L40,11 L60,10 L80,9 L100,10" fill="none" stroke="rgba(239,68,68,0.3)" strokeWidth="2" strokeDasharray="4 2" />
      {/* New optimized line going down (good) */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        d="M0,10 L20,15 L40,22 L60,28 L80,33 L100,38"
        fill="none"
        stroke="var(--accent-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
    <div className="flex justify-between text-[7px] font-mono mt-1">
      <span className="text-red-400/70">Before: ₹380/lead</span>
      <span className="text-accent-green font-bold">Now: ₹140/lead</span>
    </div>
  </div>
);

const AIWorkflowWidget = () => (
  <div className="w-full bg-[#0d1117] rounded-xl border border-violet-500/20 p-3 text-left">
    <div className="flex items-center gap-2 mb-2">
      <Zap size={8} className="text-violet-400" />
      <span className="text-[7px] font-mono text-violet-400 uppercase font-bold">AI Workflow Active</span>
    </div>
    <div className="space-y-1.5">
      {[
        { step: 'Lead Form Submit', time: '0.0s', color: 'text-white/60' },
        { step: 'AI Qualification', time: '0.3s', color: 'text-violet-400' },
        { step: 'WhatsApp Sent', time: '0.5s', color: 'text-green-400' },
        { step: 'CRM Updated', time: '0.8s', color: 'text-accent-orange' },
      ].map((s, i) => (
        <div key={i} className="flex justify-between items-center text-[7px]">
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-current opacity-70" style={{ color: s.color.replace('text-', '') === 'white/60' ? '#fff' : undefined }} />
            <span className={s.color}>{s.step}</span>
          </div>
          <span className="font-mono text-white/30">{s.time}</span>
        </div>
      ))}
    </div>
    <div className="mt-2 text-[7px] font-mono text-green-400 font-bold">✓ 92% time saved vs manual</div>
  </div>
);

const ContentWidget = () => (
  <div className="w-full bg-[#f8fffe] dark:bg-[#0d1f19] rounded-xl border border-accent-emerald/20 p-2.5">
    <div className="space-y-1.5">
      {[
        { topic: '🎯 Delhi SEO Guide 2026', status: 'Published', views: '4.2K' },
        { topic: '📊 Meta Ads Hook Framework', status: 'Top 3', views: '2.8K' },
        { topic: '🤖 AI Automation Playbook', status: 'Trending', views: '6.1K' },
      ].map((row, i) => (
        <div key={i} className="flex justify-between items-center text-[7px] border-b border-border-color/10 pb-1">
          <span className="text-text-secondary truncate max-w-[100px]">{row.topic}</span>
          <div className="flex gap-1.5 shrink-0">
            <span className="text-accent-green font-bold font-mono">{row.status}</span>
            <span className="text-text-secondary font-mono">{row.views}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-1.5 text-[7px] text-accent-orange font-handwriting font-bold">+185% organic leads ✍️</div>
  </div>
);

interface Service {
  id: number;
  title: string;
  tag: string;
  tagColor: string;
  desc: string;
  benefits: string[];
  metrics: string;
  metricsColor: string;
  shadowClass: string;
  borderColor: string;
  bgAccent: string;
  image: string;
  imageAlt: string;
  href: string;
  widget: React.FC;
  featured?: boolean;
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: 'SEO & Local SEO',
      tag: 'SEO',
      tagColor: 'bg-accent-green/10 text-accent-green',
      desc: 'Rank on Google Maps and page 1 for searches your customers are already making. Compounding organic traffic with no ongoing ad spend.',
      benefits: [
        'Google Business Profile optimization',
        'Local Maps top 3 ranking',
        'Semantic keyword architecture',
      ],
      metrics: '+320% Organic Traffic',
      metricsColor: 'text-accent-green',
      shadowClass: 'shadow-offset',
      borderColor: 'border-accent-emerald',
      bgAccent: 'from-accent-green/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'SEO dashboard showing organic traffic growth',
      href: '/seo-local-seo',
      widget: SEORankingWidget,
      featured: true,
    },
    {
      id: 2,
      title: 'Social Media Marketing',
      tag: 'Social',
      tagColor: 'bg-blue-500/10 text-blue-500',
      desc: 'Scroll-stopping content and Meta ad campaigns engineered to capture attention and drive qualified enquiries.',
      benefits: [
        'Instagram content strategy & production',
        'Meta Ads with 3-second hook framework',
        'Audience research & lookalike targeting',
      ],
      metrics: '4.8x Average ROAS',
      metricsColor: 'text-accent-orange',
      shadowClass: 'shadow-offset-orange',
      borderColor: 'border-accent-orange',
      bgAccent: 'from-accent-orange/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Social media marketing dashboard',
      href: '/social-media-marketing',
      widget: MetaAdWidget,
    },
    {
      id: 3,
      title: 'Website Development',
      tag: 'Web Dev',
      tagColor: 'bg-cyan-500/10 text-cyan-500',
      desc: 'Custom React and Next.js websites built for speed, search rankings, and conversion with CRM integration.',
      benefits: [
        'Sub-1.5 second load times',
        'Mobile-first conversion design',
        'CRM & WhatsApp lead routing',
      ],
      metrics: '7.8% Avg Conv. Rate',
      metricsColor: 'text-cyan-500',
      shadowClass: 'shadow-offset-green',
      borderColor: 'border-cyan-500/50',
      bgAccent: 'from-cyan-500/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Modern website mockup',
      href: '/web-development',
      widget: WebDevWidget,
    },
    {
      id: 4,
      title: 'Google Ads',
      tag: 'Google Ads',
      tagColor: 'bg-accent-green/10 text-accent-green',
      desc: 'High-intent search campaigns targeting buyers at the exact moment they are ready to act — managed end-to-end.',
      benefits: [
        'Intent-focused keyword strategy',
        'Negative keyword pruning system',
        'Landing page + tracking setup',
      ],
      metrics: '-40% Cost Per Lead',
      metricsColor: 'text-accent-green',
      shadowClass: 'shadow-offset',
      borderColor: 'border-accent-emerald',
      bgAccent: 'from-accent-green/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Google Ads dashboard',
      href: '/social-media-marketing',
      widget: GoogleAdsWidget,
    },
    {
      id: 5,
      title: 'AI & Business Automation',
      tag: 'AI',
      tagColor: 'bg-violet-500/10 text-violet-500',
      desc: 'Cut 20+ hours of manual work per week. Lead qualification, CRM automation, WhatsApp AI agents.',
      benefits: [
        '90-second lead response system',
        'Automated CRM data population',
        'AI customer support agents',
      ],
      metrics: '92% Time Saved',
      metricsColor: 'text-violet-500',
      shadowClass: 'shadow-offset-orange',
      borderColor: 'border-violet-500/40',
      bgAccent: 'from-violet-500/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'AI automation workflow',
      href: '/ai-automation',
      widget: AIWorkflowWidget,
    },
    {
      id: 6,
      title: 'Content Strategy',
      tag: 'Content',
      tagColor: 'bg-gold-accent/10 text-gold-accent',
      desc: 'Strategic content that builds topical authority, earns organic backlinks, and positions your brand as the trusted expert.',
      benefits: [
        'Semantic content cluster planning',
        'Blog, case study & local page writing',
        'Internal linking architecture',
      ],
      metrics: '+185% Organic Leads',
      metricsColor: 'text-gold-accent',
      shadowClass: 'shadow-offset-green',
      borderColor: 'border-gold-accent/40',
      bgAccent: 'from-gold-accent/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Content strategy planning',
      href: '/seo-local-seo',
      widget: ContentWidget,
    },
  ];

  const [featured, ...rest] = services;
  const FeaturedWidget = featured.widget;

  return (
    <section
      id="services"
      className="relative py-16 md:py-28 px-6 md:px-12 bg-page-bg text-text-primary transition-theme overflow-hidden"
    >
      {/* Background annotation */}
      <div className="absolute top-10 right-6 pointer-events-none select-none hidden md:block">
        <div className="font-handwriting text-accent-orange/50 text-2xl -rotate-6 font-bold">
          Pick what you need →
        </div>
        {/* Hand-drawn curved arrow */}
        <svg className="w-16 h-10 text-accent-orange/30 mt-1 ml-4" viewBox="0 0 60 40" fill="none">
          <path d="M5,5 C20,5 40,20 55,35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
          <path d="M48,28 L55,35 L46,36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              01 // SERVICES
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl text-text-primary mt-2 transition-theme">
              What We Do
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              We engineer growth systems across every digital channel — from search rankings and paid ads to custom websites and AI automation.
            </p>
          </div>
        </div>

        {/* Featured Card (SEO) — full-width hero card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to={featured.href}
            className={`relative bg-card-bg border-2 ${featured.borderColor} rounded-3xl overflow-hidden ${featured.shadowClass} hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300 flex flex-col lg:flex-row group`}
          >
            {/* Image side */}
            <div className="w-full lg:w-2/5 h-56 lg:h-auto overflow-hidden relative">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              {/* Overlay badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-4 left-4 lg:bottom-auto lg:top-4">
                <span className={`text-[9px] font-mono font-bold px-3 py-1.5 rounded-full bg-card-bg border border-border-color shadow-sm ${featured.tagColor}`}>
                  {featured.tag}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-1.5 bg-card-bg/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-accent-green/30">
                  <TrendingUp size={9} className="text-accent-green" />
                  <span className="text-[9px] font-mono font-bold text-accent-green">{featured.metrics}</span>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className={`flex-1 p-8 flex flex-col justify-between bg-gradient-to-br ${featured.bgAccent}`}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-text-secondary font-bold">FEATURED SERVICE</span>
                  <span className="text-accent-orange text-base animate-sparkle">✦</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-text-primary mb-3 transition-theme group-hover:text-accent-green duration-300">
                  {featured.title}
                </h3>
                <p className="text-base font-sans font-medium text-text-secondary leading-relaxed mb-6 transition-theme max-w-lg">
                  {featured.desc}
                </p>

                {/* Widget */}
                <div className="mb-6 max-w-sm">
                  <FeaturedWidget />
                </div>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {featured.benefits.map((b, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-sm font-sans font-medium text-text-secondary transition-theme">
                      <CheckCircle2 size={14} className="text-accent-green shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-sans font-bold uppercase tracking-widest text-accent-green group-hover:text-accent-orange transition-colors duration-300">
                  Explore SEO Service
                </span>
                <div className="w-9 h-9 rounded-xl bg-page-bg-sec group-hover:bg-accent-emerald group-hover:text-white transition-all duration-300 flex items-center justify-center border border-border-color/20">
                  <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Remaining 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((s, i) => {
            const Widget = s.widget;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  to={s.href}
                  className={`relative bg-card-bg border-2 ${s.borderColor} rounded-3xl overflow-hidden ${s.shadowClass} hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300 flex flex-col group h-full`}
                >
                  {/* Image */}
                  <div className="w-full h-40 overflow-hidden relative">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className={`absolute top-3 left-3 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-card-bg border border-border-color shadow-sm ${s.tagColor}`}>
                      {s.tag}
                    </span>
                    <span className={`absolute top-3 right-3 text-[9px] font-mono font-bold tracking-wide ${s.metricsColor} bg-card-bg/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-current/20`}>
                      {s.metrics}
                    </span>
                  </div>

                  <div className={`p-5 flex flex-col flex-1 bg-gradient-to-br ${s.bgAccent}`}>
                    <h3 className="font-serif text-xl text-text-primary mb-2 transition-theme group-hover:text-accent-orange duration-300">
                      {s.title}
                    </h3>
                    <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed mb-4 transition-theme flex-1">
                      {s.desc}
                    </p>

                    {/* Mini widget */}
                    <div className="mb-4">
                      <Widget />
                    </div>

                    {/* Benefits */}
                    <ul className="space-y-1.5 border-t border-border-color/20 pt-4 mb-4 transition-theme">
                      {s.benefits.map((b, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-xs font-sans font-medium text-text-secondary transition-theme">
                          <CheckCircle2 size={12} className="text-accent-green mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-accent-green group-hover:text-accent-orange transition-colors duration-300">
                        Learn More
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-page-bg-sec text-text-primary group-hover:bg-accent-orange group-hover:text-white transition-all duration-300 flex items-center justify-center border border-border-color/20">
                        <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
