import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

/* ─── Premium Technical Widgets ─── */

const SEORankingWidget = () => (
  <div className="w-full bg-page-bg/85 rounded-xl border border-border-color p-3.5 transition-theme">
    <div className="flex items-center gap-1.5 mb-2.5">
      <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
      <span className="text-[8px] font-mono text-text-secondary opacity-60 ml-1">organic.crawler // node</span>
    </div>
    <div className="space-y-1.5 text-[9px] font-mono">
      <div className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/10 rounded p-1.5">
        <span className="font-bold text-accent-green">#1 Organic</span>
        <span className="text-text-primary font-medium transition-theme">Enterprise Software</span>
        <span className="text-[8px] bg-accent-green/10 text-accent-green px-1.5 py-0.2 rounded font-bold">Live</span>
      </div>
    </div>
    <div className="flex justify-between mt-3 text-[8px] font-mono border-t border-border-color pt-2 transition-theme">
      <span className="text-text-secondary opacity-70">Search Volume Visibility</span>
      <span className="text-accent-green font-bold">+320% Compounding</span>
    </div>
  </div>
);

const MetaAdWidget = () => (
  <div className="w-full rounded-xl border border-border-color bg-page-bg/85 p-3.5 transition-theme">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[8px] font-mono text-text-secondary opacity-65 uppercase">acquisition.roas</span>
      <span className="text-[8px] font-mono text-accent-green font-bold">● Optimized</span>
    </div>
    <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded p-1.5 border border-border-color mb-2">
      <p className="text-[9px] font-bold text-text-primary truncate">⚡ High-Yield Paid Creative Pipeline</p>
    </div>
    <div className="grid grid-cols-3 gap-1 text-center text-[9px] font-mono">
      <div>
        <p className="font-bold text-text-primary">4.8x</p>
        <p className="text-[6.5px] text-text-secondary font-medium">ROAS</p>
      </div>
      <div>
        <p className="font-bold text-accent-green">-$14.50</p>
        <p className="text-[6.5px] text-text-secondary font-medium">CPA Δ</p>
      </div>
      <div>
        <p className="font-bold text-cyan-400">890K</p>
        <p className="text-[6.5px] text-text-secondary font-medium">Reach</p>
      </div>
    </div>
  </div>
);

const WebDevWidget = () => (
  <div className="w-full bg-page-bg/85 rounded-xl border border-border-color p-3 transition-theme">
    <div className="flex items-center gap-1.5 border-b border-border-color pb-2 mb-2 transition-theme">
      <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
      <span className="text-[8px] font-mono text-text-secondary opacity-60">production.edge-url</span>
      <div className="ml-auto flex gap-1">
        <span className="px-1.5 py-0.2 bg-emerald-500/10 text-accent-green text-[7px] font-mono rounded font-bold">100 Perf</span>
        <span className="px-1.5 py-0.2 bg-cyan-500/10 text-cyan-400 text-[7px] font-mono rounded font-bold">0.8s</span>
      </div>
    </div>
    <div className="space-y-1">
      <div className="h-5 bg-white/5 rounded flex items-center justify-center border border-border-color">
        <p className="text-[8px] font-mono text-text-secondary">Next.js Header Components Loaded</p>
      </div>
    </div>
  </div>
);

const GoogleAdsWidget = () => (
  <div className="w-full bg-page-bg/85 rounded-xl border border-border-color p-3.5 transition-theme">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-[8px] font-mono text-text-secondary opacity-65 uppercase">google.intent-funnel</span>
      <span className="text-[8px] font-mono text-accent-green font-bold">-40% Acquisition Costs</span>
    </div>
    <svg className="w-full h-8" viewBox="0 0 100 40" preserveAspectRatio="none">
      <path d="M0,35 L20,32 L40,24 L60,18 L80,10 L100,2" fill="none" stroke="var(--accent-green)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
    <div className="flex justify-between text-[8px] font-mono mt-2 border-t border-border-color pt-1.5 transition-theme">
      <span className="text-text-secondary opacity-70">Prior CPA: $18.50</span>
      <span className="text-accent-green font-bold">Attributed CPA: $9.80</span>
    </div>
  </div>
);

const AIWorkflowWidget = () => (
  <div className="w-full bg-page-bg/85 rounded-xl border border-border-color p-3 text-left font-mono text-text-primary transition-theme">
    <div className="flex items-center gap-1.5 mb-2">
      <Zap size={10} className="text-accent-green" />
      <span className="text-[8px] font-mono text-accent-green uppercase font-bold">AI Workflow active</span>
    </div>
    <div className="space-y-1 text-[8px] text-text-secondary">
      <div className="flex justify-between"><span>Qualifying Model</span><span className="text-accent-green">0.12s</span></div>
      <div className="flex justify-between"><span>Webhook Dispatch</span><span className="text-accent-green">0.05s</span></div>
      <div className="flex justify-between"><span>HubSpot CRM Sync</span><span className="text-accent-green">0.08s</span></div>
    </div>
  </div>
);

const ContentWidget = () => (
  <div className="w-full bg-page-bg/85 rounded-xl border border-border-color p-3 transition-theme">
    <div className="space-y-1.5 text-[8px] font-mono">
      <div className="flex justify-between border-b border-border-color pb-1 transition-theme">
        <span className="text-text-secondary truncate max-w-[120px]">Topical Search Cluster</span>
        <span className="text-accent-green font-bold">100/100</span>
      </div>
      <div className="flex justify-between">
        <span className="text-text-secondary truncate max-w-[120px]">Velocity Schema Generator</span>
        <span className="text-cyan-400 font-bold">Running</span>
      </div>
    </div>
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
  borderColor: string;
  bgAccent: string;
  image: string;
  imageAlt: string;
  href: string;
  widget: React.FC;
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: 'Enterprise SEO & Content Stacks',
      tag: 'Organic Growth',
      tagColor: 'bg-emerald-500/10 text-accent-green border-emerald-500/20',
      desc: 'Dominate search queries through custom crawlers, velocity schemas, and technical crawl optimization. Compounding organic authority.',
      benefits: ['Topical Cluster Planning', 'Velocity Schema Generation', 'Edge Server Injection'],
      metrics: '+320% Traffic Volume',
      metricsColor: 'text-accent-green',
      borderColor: 'border-border-color hover:border-accent-green/30',
      bgAccent: 'from-emerald-500/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'SEO data mapping interface',
      href: '/services/seo',
      widget: SEORankingWidget,
    },
    {
      id: 2,
      title: 'Performance Marketing & Social Ads',
      tag: 'Paid Acquisition',
      tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      desc: 'High-ROAS Meta, LinkedIn & Twitter campaigns built around direct-response models, creative loops, and conversion metrics.',
      benefits: ['Dynamic Hook Architectures', 'ABM Audience Pipelines', 'Attribution Integration'],
      metrics: '4.8x Attributed ROAS',
      metricsColor: 'text-cyan-400',
      borderColor: 'border-border-color hover:border-cyan-400/30',
      bgAccent: 'from-cyan-500/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'SaaS paid performance metrics panel',
      href: '/services/meta-ads',
      widget: MetaAdWidget,
    },
    {
      id: 3,
      title: 'High-Performance Web Engineering',
      tag: 'Experience Engineering',
      tagColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      desc: 'Blazing fast React & Next.js static and serverless architectures. Built for sub-1s load times, perfect SEO indexing, and optimal conversions.',
      benefits: ['Sub-1.0s Edge Redirection', 'Plausible Analytics Integrations', 'Next.js Edge Rendering'],
      metrics: '10X Conversion Speed',
      metricsColor: 'text-yellow-400',
      borderColor: 'border-border-color hover:border-yellow-400/30',
      bgAccent: 'from-yellow-500/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Next.js rendering framework console',
      href: '/services/business-web-dev',
      widget: WebDevWidget,
    },
    {
      id: 4,
      title: 'Intent Search Optimization (Google Ads)',
      tag: 'Search Ads',
      tagColor: 'bg-emerald-500/10 text-accent-green border-emerald-500/20',
      desc: 'High-intent search keyword matching targeting enterprise purchasers at the exact millisecond of purchase decision.',
      benefits: ['Negative Phrase Pruning', 'Optimized Bid Adjusters', 'Landing Matching Layouts'],
      metrics: '-40% Acquisition Costs',
      metricsColor: 'text-accent-green',
      borderColor: 'border-border-color hover:border-accent-green/30',
      bgAccent: 'from-emerald-500/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Google Ads metrics dashboard',
      href: '/services/google-ads',
      widget: GoogleAdsWidget,
    },
    {
      id: 5,
      title: 'AI Qualification & Pipeline Automations',
      tag: 'Operations Tech',
      tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      desc: 'Eliminate friction from sales. Qualify inbound inquiries using LLM scorers, routing leads instantly to sales hubs.',
      benefits: ['Instant 0.2s Qualification', 'Dynamic CRM Hub Mapping', 'WhatsApp Business Flows'],
      metrics: '92% Manual Friction Cut',
      metricsColor: 'text-purple-400',
      borderColor: 'border-border-color hover:border-purple-400/30',
      bgAccent: 'from-purple-500/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Automation flow visualizer',
      href: '/services/ai-chatbots',
      widget: AIWorkflowWidget,
    },
    {
      id: 6,
      title: 'Topical Search Authority & Branding',
      tag: 'Brand Velocity',
      tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      desc: 'Topical authority maps designed to build backlinks, generate referrals, and establish market dominance in high-competition industries.',
      benefits: ['Topical Coverage Indexing', 'Authority Backlink Modules', 'Entity Schema Architectures'],
      metrics: '+185% Pipeline Levers',
      metricsColor: 'text-cyan-400',
      borderColor: 'border-border-color hover:border-cyan-400/30',
      bgAccent: 'from-cyan-500/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Enterprise marketing strategy blueprint',
      href: '/services/content-marketing',
      widget: ContentWidget,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 px-6 md:px-12 bg-page-bg text-text-primary overflow-hidden transition-theme border-b border-border-color"
    >
      {/* Background canvas elements */}
      <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] rounded-full bg-emerald-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-6 transition-theme">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent-green font-bold uppercase">
              01 // CORE ARCHITECTURES
            </span>
            <h2 className="font-sans font-black text-4xl md:text-5xl text-text-primary mt-2 uppercase transition-theme">
              Our Growth Capabilities
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-xs md:text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              High-performance digital growth systems built to scale businesses from local startups to global enterprise platforms.
            </p>
          </div>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Widget = s.widget;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={s.href}
                  className={`relative bg-card-bg backdrop-blur-md border ${s.borderColor} rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full`}
                >
                  {/* Service Card Image */}
                  <div className="w-full h-36 overflow-hidden relative border-b border-border-color transition-theme">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-102 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-page-bg via-page-bg/20 to-transparent transition-all" />
                    <span className={`absolute top-4.5 left-4.5 text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-page-bg border border-border-color shadow-sm transition-theme ${s.tagColor}`}>
                      {s.tag}
                    </span>
                    <span className={`absolute top-4.5 right-4.5 text-[9px] font-mono font-bold tracking-wide ${s.metricsColor} bg-page-bg/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-border-color transition-theme`}>
                      {s.metrics}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className={`p-6 flex flex-col flex-1 bg-gradient-to-br ${s.bgAccent} text-left`}>
                    <h3 className="font-sans font-extrabold text-xl text-text-primary mb-2 group-hover:text-accent-green transition-theme duration-300">
                      {s.title}
                    </h3>
                    <p className="text-xs font-sans text-text-secondary leading-relaxed mb-4 flex-1 transition-theme">
                      {s.desc}
                    </p>

                    {/* Performance Widget */}
                    <div className="mb-4">
                      <Widget />
                    </div>

                    {/* Integrated benefits */}
                    <div className="border-t border-border-color pt-4 mb-4 transition-theme">
                      <div className="flex flex-wrap gap-1.5">
                        {s.benefits.map((b, idx) => (
                          <span key={idx} className="text-[8px] font-mono font-bold px-2 py-0.5 bg-page-bg border border-border-color text-text-secondary rounded-lg transition-theme">
                            ✓ {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Learn More link */}
                    <div className="flex justify-between items-center mt-auto pt-2">
                      <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-text-secondary group-hover:text-accent-green transition-colors duration-300">
                        Explore Capability
                      </span>
                      <div className="w-8 h-8 rounded-full bg-page-bg-sec text-text-secondary group-hover:bg-accent-green group-hover:text-slate-950 transition-all duration-300 flex items-center justify-center border border-border-color">
                        <ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
