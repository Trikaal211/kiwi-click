import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

/* ─── Per-service visual widgets (Compact versions) ─── */

const SEORankingWidget = () => (
  <div className="w-full bg-[#f0fdf4] dark:bg-[#0d1f19] rounded-xl border border-accent-green/30 p-2.5">
    <div className="flex items-center gap-1.5 mb-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
      <span className="text-[6.5px] font-mono text-text-secondary/60 ml-1">google.com · Delhi NCR</span>
    </div>
    <div className="space-y-1 text-[7.5px]">
      <div className="flex items-center gap-1.5 bg-accent-green/10 border border-accent-green/20 rounded p-1">
        <span className="font-bold text-accent-green font-mono">#1</span>
        <span className="font-bold text-text-primary truncate max-w-[140px]">Delhi Clinic CP — Dental</span>
        <span className="ml-auto text-[6px] bg-accent-orange/15 text-accent-orange px-0.5 rounded font-bold">Ad</span>
      </div>
    </div>
    <div className="flex justify-between mt-2 text-[6.5px] font-mono border-t border-accent-green/10 pt-1">
      <span className="text-text-secondary">Organic Traffic</span>
      <span className="text-accent-green font-bold">+320% ↑</span>
    </div>
  </div>
);

const MetaAdWidget = () => (
  <div className="w-full rounded-xl border border-accent-orange/30 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-2.5">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-[6.5px] font-mono text-white/50 uppercase">Meta Ads</span>
      <span className="text-[6.5px] font-mono text-green-400 font-bold">● Active</span>
    </div>
    <div className="bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded p-1 border border-white/5 mb-1.5">
      <p className="text-[7.5px] font-bold text-white truncate">🔥 Delhi's #1 Ads Hook Framework</p>
    </div>
    <div className="grid grid-cols-3 gap-0.5 text-center text-[7.5px]">
      <div>
        <p className="font-bold text-accent-orange">4.8x</p>
        <p className="text-[5px] text-white/50 font-mono">ROAS</p>
      </div>
      <div>
        <p className="font-bold text-green-400">₹140</p>
        <p className="text-[5px] text-white/50 font-mono">CPL</p>
      </div>
      <div>
        <p className="font-bold text-blue-400">89K</p>
        <p className="text-[5px] text-white/50 font-mono">Reach</p>
      </div>
    </div>
  </div>
);

const WebDevWidget = () => (
  <div className="w-full bg-[#f8fffe] dark:bg-[#0d1f19] rounded-xl border border-border-color/20 p-2">
    <div className="flex items-center gap-1 border-b border-border-color/10 pb-1 mb-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
      <span className="text-[6.5px] font-mono text-text-secondary/50">your-brand.in</span>
      <div className="ml-auto flex gap-1">
        <span className="px-1 bg-green-500/10 text-green-500 text-[5px] font-mono rounded font-bold">100 SEO</span>
        <span className="px-1 bg-accent-orange/10 text-accent-orange text-[5px] font-mono rounded font-bold">0.9s</span>
      </div>
    </div>
    <div className="space-y-1">
      <div className="h-4 bg-accent-green/10 rounded flex items-center justify-center border border-accent-green/20">
        <p className="text-[7px] font-serif italic font-bold text-text-primary">Delhi's Premium Care</p>
      </div>
    </div>
  </div>
);

const GoogleAdsWidget = () => (
  <div className="w-full bg-[#f8fffe] dark:bg-[#0d1f19] rounded-xl border border-accent-emerald/20 p-2.5">
    <div className="flex justify-between items-center mb-1">
      <span className="text-[6.5px] font-mono font-bold text-text-secondary uppercase">Google Search Ads</span>
      <span className="text-[6.5px] font-mono text-accent-green font-bold">↓ -40% CPL</span>
    </div>
    <svg className="w-full h-6" viewBox="0 0 100 40" preserveAspectRatio="none">
      <path d="M0,10 L20,15 L40,22 L60,28 L80,33 L100,38" fill="none" stroke="var(--accent-green)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
    <div className="flex justify-between text-[6.5px] font-mono mt-1 border-t border-border-color/5 pt-1">
      <span className="text-red-400/70">Before: ₹380</span>
      <span className="text-accent-green font-bold">Now: ₹140/lead</span>
    </div>
  </div>
);

const AIWorkflowWidget = () => (
  <div className="w-full bg-[#0d1117] rounded-xl border border-violet-500/20 p-2.5 text-left font-mono text-white">
    <div className="flex items-center gap-1.5 mb-1.5">
      <Zap size={8} className="text-violet-400" />
      <span className="text-[6.5px] font-mono text-violet-400 uppercase font-bold">AI Active</span>
    </div>
    <div className="space-y-0.5 text-[6.5px]">
      <div className="flex justify-between"><span className="text-white/60">AI Qualifier</span><span className="text-violet-400">0.3s</span></div>
      <div className="flex justify-between"><span className="text-green-400">WhatsApp Sent</span><span className="text-green-400">0.5s</span></div>
      <div className="flex justify-between"><span className="text-accent-orange">CRM Updated</span><span className="text-accent-orange">0.8s</span></div>
    </div>
  </div>
);

const ContentWidget = () => (
  <div className="w-full bg-[#f8fffe] dark:bg-[#0d1f19] rounded-xl border border-accent-emerald/20 p-2">
    <div className="space-y-1 text-[6.5px]">
      <div className="flex justify-between border-b border-border-color/10 pb-0.5">
        <span className="text-text-secondary truncate max-w-[80px]">🎯 Delhi SEO Guide</span>
        <span className="text-accent-green font-bold font-mono">Rank #1</span>
      </div>
      <div className="flex justify-between">
        <span className="text-text-secondary truncate max-w-[80px]">📊 Ads Hooks framework</span>
        <span className="text-accent-orange font-bold font-mono">Trending</span>
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
  shadowClass: string;
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
      title: 'SEO & Local SEO',
      tag: 'Local SEO',
      tagColor: 'bg-accent-green/10 text-accent-green border-accent-green/20',
      desc: 'Rank on Google Maps and page 1 for immediate search queries. Compounding organic visibility with no ad budget requirements.',
      benefits: ['Google Profile Audit', 'Maps Ranking top 3', 'Local Keyword Clusters'],
      metrics: '+320% Organic traffic',
      metricsColor: 'text-accent-green',
      shadowClass: 'shadow-offset-sm hover:shadow-offset-green',
      borderColor: 'border-accent-green/30 hover:border-accent-green',
      bgAccent: 'from-accent-green/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'SEO analysis',
      href: '/services/seo',
      widget: SEORankingWidget,
    },
    {
      id: 2,
      title: 'Social Media Ads',
      tag: 'Paid Social',
      tagColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      desc: 'Scroll-stopping content and Meta ad structures designed to capture regional buyer attention and route leads directly.',
      benefits: ['Instagram Strategy', 'Creative Script Hook', ' NCR Audience Targeting'],
      metrics: '4.8x average ROAS',
      metricsColor: 'text-accent-orange',
      shadowClass: 'shadow-offset-sm hover:shadow-offset-orange',
      borderColor: 'border-accent-orange/30 hover:border-accent-orange',
      bgAccent: 'from-accent-orange/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Meta ads manager dashboard',
      href: '/services/meta-ads',
      widget: MetaAdWidget,
    },
    {
      id: 3,
      title: 'Website Development',
      tag: 'Web Dev',
      tagColor: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
      desc: 'Blazing fast custom React & Next.js landing pages built for speed, schema indexes, and mobile conversation flow.',
      benefits: ['Sub-1.5s Load Time', 'Mobile UI conversion', 'CRM Whatsapp Webhook'],
      metrics: '7.8% Conv Rate avg',
      metricsColor: 'text-cyan-500',
      shadowClass: 'shadow-offset-sm hover:shadow-offset-green',
      borderColor: 'border-cyan-500/30 hover:border-cyan-500',
      bgAccent: 'from-cyan-500/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'High performance web code template',
      href: '/services/business-web-dev',
      widget: WebDevWidget,
    },
    {
      id: 4,
      title: 'Google Ads',
      tag: 'Search Ads',
      tagColor: 'bg-accent-green/10 text-accent-green border-accent-green/20',
      desc: 'High-intent search keyword campaigns targeting buyers at the exact second they are searching. Handled end-to-end.',
      benefits: ['Neg Keyword Pruning', 'High-intent bidding', 'Landing Page match'],
      metrics: '-40% CPL reduction',
      metricsColor: 'text-accent-green',
      shadowClass: 'shadow-offset-sm hover:shadow-offset-green',
      borderColor: 'border-accent-green/30 hover:border-accent-green',
      bgAccent: 'from-accent-green/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Google Ads visual stats dashboard',
      href: '/services/google-ads',
      widget: GoogleAdsWidget,
    },
    {
      id: 5,
      title: 'AI Business Automation',
      tag: 'Business AI',
      tagColor: 'bg-violet-500/10 text-violet-500 border-violet-500/20',
      desc: 'Cut 20+ hours of manual work weekly. Qualify leads via WhatsApp agents and sync logs directly to CRM pipelines.',
      benefits: ['Instant 90s response', 'Auto CRM database sync', 'WhatsApp AI bots'],
      metrics: '92% Time Savings',
      metricsColor: 'text-violet-500',
      shadowClass: 'shadow-offset-sm hover:shadow-offset-orange',
      borderColor: 'border-violet-500/30 hover:border-violet-500',
      bgAccent: 'from-violet-500/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'AI pipeline automation steps chart',
      href: '/services/ai-chatbots',
      widget: AIWorkflowWidget,
    },
    {
      id: 6,
      title: 'Content & Branding',
      tag: 'Topical SEO',
      tagColor: 'bg-gold-accent/10 text-gold-accent border-gold-accent/20',
      desc: 'Topical authority plans designed to rank blogs, earn backlinks, and establish local relevance across Delhi search queries.',
      benefits: ['Content Cluster plans', 'SEO copywriting', 'Internal link charts'],
      metrics: '+185% organic leads',
      metricsColor: 'text-gold-accent',
      shadowClass: 'shadow-offset-sm hover:shadow-offset-green',
      borderColor: 'border-gold-accent/30 hover:border-gold-accent',
      bgAccent: 'from-gold-accent/5 to-transparent',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'SEO keyword search content map',
      href: '/services/content-marketing',
      widget: ContentWidget,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-10 md:py-16 px-6 md:px-12 bg-page-bg text-text-primary transition-theme overflow-hidden"
    >
      {/* Background annotation */}
      <div className="absolute top-6 right-6 pointer-events-none select-none hidden md:block">
        <div className="font-handwriting text-accent-orange/40 text-xl -rotate-6 font-bold">
          Pick what you need →
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-6 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              01 // SERVICES
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl text-text-primary mt-2 transition-theme">
              What We Do
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-xs md:text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              We build high-converting growth funnels across search, paid campaigns, web properties, and CRM automations.
            </p>
          </div>
        </div>

        {/* Cohesive 3-Column Services Grid (No top featured banner - compact cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Widget = s.widget;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={s.href}
                  className={`relative bg-card-bg border-2 ${s.borderColor} rounded-2xl overflow-hidden ${s.shadowClass} hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 flex flex-col group h-full`}
                >
                  {/* Image */}
                  <div className="w-full h-32 overflow-hidden relative border-b border-border-color/10">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-102 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                    <span className={`absolute top-2.5 left-2.5 text-[8px] font-mono font-bold px-2 py-0.5 rounded-full bg-card-bg border border-border-color/10 shadow-sm ${s.tagColor}`}>
                      {s.tag}
                    </span>
                    <span className={`absolute top-2.5 right-2.5 text-[8px] font-mono font-bold tracking-wide ${s.metricsColor} bg-card-bg/95 backdrop-blur-sm px-2 py-0.5 rounded-full border border-current/25`}>
                      {s.metrics}
                    </span>
                  </div>

                  <div className={`p-4 flex flex-col flex-1 bg-gradient-to-br ${s.bgAccent} text-left`}>
                    <h3 className="font-serif text-lg font-bold text-text-primary mb-1.5 transition-theme group-hover:text-accent-orange duration-300">
                      {s.title}
                    </h3>
                    <p className="text-xs font-sans font-medium text-text-secondary leading-relaxed mb-3 flex-1">
                      {s.desc}
                    </p>

                    {/* Compact visual widget representation */}
                    <div className="mb-3">
                      <Widget />
                    </div>

                    {/* Inline badges representation of benefits to compress height */}
                    <div className="border-t border-border-color/10 pt-3 mb-3">
                      <p className="text-[8px] font-mono uppercase font-bold text-accent-green mb-1.5">Your Benefits (Faayde):</p>
                      <div className="flex flex-wrap gap-1">
                        {s.benefits.map((b, idx) => (
                          <span key={idx} className="text-[7.5px] font-mono font-bold px-1.5 py-0.5 bg-page-bg-sec/50 border border-border-color/10 text-text-secondary rounded">
                            ✓ {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA link indicator */}
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-accent-green group-hover:text-accent-orange transition-colors duration-300">
                        Learn More
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-page-bg-sec text-text-primary group-hover:bg-accent-orange group-hover:text-white transition-all duration-300 flex items-center justify-center border border-border-color/20">
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
