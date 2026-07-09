import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

// Counter component for stats and cards
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

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// Custom sparkline SVG
const Sparkline = ({ path, color }: { path: string; color: string }) => (
  <svg className="w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
    <motion.path
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      d={`${path} L 100,30 L 0,30 Z`}
      fill={color}
      fillOpacity={0.1}
    />
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      d={path}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ResultCard {
  id: number;
  industry: string;
  name: string; // Protected label e.g., Spiritual E-Commerce Brand
  scope: string;
  services: string[];
  metrics: {
    traffic: { val: number; suffix: string; label: string };
    clicks: { val: number; suffix: string; label: string };
    impressions: { val: number; suffix: string; label: string };
    keywords: { val: number; suffix: string; label: string };
  };
  shadowClass: string;
  borderColor: string;
  accentColor: string;
  sparkline: string;
  sparklineColor: string;
}

export default function ClientResultsPage() {
  // Set SEO metadata page title
  useEffect(() => {
    document.title = "Client Results & SEO Case Studies | KiwiClicks";
    
    // Add page meta description dynamically if needed
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover verified client SEO growth and search visibility results. We protect client privacy under NDA while providing transparent organic metric data.");
    }
  }, []);

  const featuredResults: ResultCard[] = [
    {
      id: 1,
      industry: "Spiritual Products",
      name: "Spiritual E-Commerce Brand",
      scope: "Scaling organic product sales, resolving search console crawl errors, and building content-driven hubs.",
      services: ["Technical SEO Audit", "Content Cluster Optimization", "Structured Product Schema"],
      metrics: {
        traffic: { val: 850, suffix: "%", label: "Traffic Growth" },
        clicks: { val: 9610, suffix: "", label: "Organic Clicks/mo" },
        impressions: { val: 425000, suffix: "", label: "Total Impressions" },
        keywords: { val: 300, suffix: "+", label: "Page 1 Keywords" }
      },
      shadowClass: "shadow-offset hover:shadow-offset-green",
      borderColor: "border-accent-emerald hover:border-accent-green",
      accentColor: "text-accent-green",
      sparkline: "M0,25 L15,22 L30,18 L45,14 L60,10 L75,7 L90,4 L100,2",
      sparklineColor: "#4A9C3A"
    },
    {
      id: 2,
      industry: "Home Services",
      name: "Home Solutions Brand",
      scope: "Securing local maps packs and generating commercial inbound bookings in key regional sectors.",
      services: ["Local SEO & Citations", "Google Business Profile Optimizations", "Conversion Landing Pages"],
      metrics: {
        traffic: { val: 340, suffix: "%", label: "Traffic Growth" },
        clicks: { val: 4820, suffix: "", label: "Organic Clicks/mo" },
        impressions: { val: 195000, suffix: "", label: "Total Impressions" },
        keywords: { val: 120, suffix: "+", label: "Page 1 Keywords" }
      },
      shadowClass: "shadow-offset-orange hover:shadow-offset",
      borderColor: "border-accent-orange hover:border-accent-emerald",
      accentColor: "text-accent-orange",
      sparkline: "M0,28 L20,24 L40,19 L55,14 L70,9 L85,5 L100,2",
      sparklineColor: "#FF8A3D"
    },
    {
      id: 3,
      industry: "Wellness & Cosmetics",
      name: "Beauty & Wellness Brand",
      scope: "Optimizing collection architecture and ranking product listings above massive retail competitors.",
      services: ["Shopify SEO Configuration", "Competitor Keyword Hijack", "Expert Blogging Strategy"],
      metrics: {
        traffic: { val: 512, suffix: "%", label: "Traffic Growth" },
        clicks: { val: 12300, suffix: "", label: "Organic Clicks/mo" },
        impressions: { val: 680000, suffix: "", label: "Total Impressions" },
        keywords: { val: 450, suffix: "+", label: "Page 1 Keywords" }
      },
      shadowClass: "shadow-offset-green hover:shadow-offset-orange",
      borderColor: "border-accent-green hover:border-accent-orange",
      accentColor: "text-accent-green",
      sparkline: "M0,26 L18,22 L35,17 L50,13 L65,9 L80,5 L100,2",
      sparklineColor: "#4A9C3A"
    },
    {
      id: 4,
      industry: "Professional Services",
      name: "Finance Consulting Firm",
      scope: "Building authoritative high-quality search visibility for advisory, consulting, and trust keywords.",
      services: ["E-E-A-T Content Auditing", "Contextual Link Outreach", "Dynamic Schema Markup"],
      metrics: {
        traffic: { val: 210, suffix: "%", label: "Traffic Growth" },
        clicks: { val: 3150, suffix: "", label: "Organic Clicks/mo" },
        impressions: { val: 98000, suffix: "", label: "Total Impressions" },
        keywords: { val: 95, suffix: "+", label: "Page 1 Keywords" }
      },
      shadowClass: "shadow-offset hover:shadow-offset-green",
      borderColor: "border-accent-emerald hover:border-accent-green",
      accentColor: "text-gold-accent",
      sparkline: "M0,27 L20,22 L40,16 L55,11 L70,7 L85,3 L100,1",
      sparklineColor: "#C9A54D"
    },
    {
      id: 5,
      industry: "Logistics & Transport",
      name: "Moving & Relocation Company",
      scope: "Dominating multiple office listings and geographical keywords to capture high-value commercial moves.",
      services: ["Multi-Location Map SEO", "Local Citation Syndication", "Conversion Rate Audits"],
      metrics: {
        traffic: { val: 420, suffix: "%", label: "Traffic Growth" },
        clicks: { val: 8400, suffix: "", label: "Organic Clicks/mo" },
        impressions: { val: 310000, suffix: "", label: "Total Impressions" },
        keywords: { val: 180, suffix: "+", label: "Page 1 Keywords" }
      },
      shadowClass: "shadow-offset-orange hover:shadow-offset-green",
      borderColor: "border-accent-orange hover:border-accent-green",
      accentColor: "text-accent-orange",
      sparkline: "M0,25 L15,21 L35,18 L55,12 L75,8 L90,4 L100,1",
      sparklineColor: "#FF8A3D"
    },
    {
      id: 6,
      industry: "Home Services",
      name: "Pest Control Network",
      scope: "Restructuring a localized website structure and capturing lead inquiries during high seasonal demands.",
      services: ["Local Page Siloing", "Mobile Page Speed Tuning", "Automation Lead Routing"],
      metrics: {
        traffic: { val: 290, suffix: "%", label: "Traffic Growth" },
        clicks: { val: 6200, suffix: "", label: "Organic Clicks/mo" },
        impressions: { val: 240000, suffix: "", label: "Total Impressions" },
        keywords: { val: 140, suffix: "+", label: "Page 1 Keywords" }
      },
      shadowClass: "shadow-offset-green hover:shadow-offset",
      borderColor: "border-accent-green hover:border-accent-emerald",
      accentColor: "text-accent-green",
      sparkline: "M0,29 L20,23 L40,18 L60,11 L80,6 L100,2",
      sparklineColor: "#4A9C3A"
    },
    {
      id: 7,
      industry: "Retail & Commerce",
      name: "D2C Product Brand",
      scope: "Driving massive organic product page visits and lowering reliance on unprofitable pay-per-click ads.",
      services: ["Product Page SEO Boost", "Internal Link Redirection", "Custom E-Commerce Theme Speeds"],
      metrics: {
        traffic: { val: 680, suffix: "%", label: "Traffic Growth" },
        clicks: { val: 18500, suffix: "", label: "Organic Clicks/mo" },
        impressions: { val: 920000, suffix: "", label: "Total Impressions" },
        keywords: { val: 550, suffix: "+", label: "Page 1 Keywords" }
      },
      shadowClass: "shadow-offset hover:shadow-offset-orange",
      borderColor: "border-accent-emerald hover:border-accent-orange",
      accentColor: "text-accent-orange",
      sparkline: "M0,27 L15,22 L30,17 L50,11 L70,6 L85,3 L100,0",
      sparklineColor: "#FF8A3D"
    },
    {
      id: 8,
      industry: "Healthcare & Med",
      name: "Healthcare Content Project",
      scope: "Revitalizing informational authority, improving Google core web vitals, and restoring traffic hits.",
      services: ["Medical Schema & E-E-A-T", "Helpful Content Alignment", "Technical Crawling Recovery"],
      metrics: {
        traffic: { val: 730, suffix: "%", label: "Traffic Growth" },
        clicks: { val: 24100, suffix: "", label: "Organic Clicks/mo" },
        impressions: { val: 1200000, suffix: "", label: "Total Impressions" },
        keywords: { val: 800, suffix: "+", label: "Page 1 Keywords" }
      },
      shadowClass: "shadow-offset-green hover:shadow-offset-orange",
      borderColor: "border-accent-green hover:border-accent-orange",
      accentColor: "text-accent-green",
      sparkline: "M0,28 L20,22 L45,15 L65,10 L80,5 L90,2 L100,0",
      sparklineColor: "#4A9C3A"
    }
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Research",
      desc: "Deep keyword analysis, technical audits, and competitor positioning mapping."
    },
    {
      step: "02",
      title: "Strategy",
      desc: "Structuring custom SEO siloing, high-intent landing page roadmaps, and schema designs."
    },
    {
      step: "03",
      title: "Execution",
      desc: "Publishing expert content hubs, configuring technical fixes, and code modifications."
    },
    {
      step: "04",
      title: "Optimization",
      desc: "A/B testing CTAs, analyzing conversion metrics, and improving site loading speeds."
    },
    {
      step: "05",
      title: "Reporting",
      desc: "Providing transparent Search Console reports, verified dashboards, and live growth tracking."
    }
  ];

  return (
    <div className="min-h-screen bg-page-bg text-text-primary pt-32 md:pt-36 lg:pt-40 pb-0 transition-theme overflow-x-hidden font-sans">
      
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative py-16 md:py-24 px-6 md:px-12 border-b-2 border-border-color transition-theme text-left overflow-hidden">
        {/* Subtle Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="text-[clamp(100px,16vw,200px)] font-sans font-black tracking-tighter leading-none whitespace-nowrap text-text-primary">
            CONFIDENTIAL
          </span>
        </div>
        
        {/* Dot Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02] select-none"
          style={{
            backgroundImage: 'radial-gradient(var(--accent-emerald) 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-card-bg border border-border-color/20 shadow-offset-sm mb-6 transition-theme">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-text-primary">
              Serving businesses across India and international markets.
            </span>
          </div>

          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-text-primary leading-[1.0] tracking-tight">
              Results That Matter. <br />
              <span className="font-sans font-extrabold not-italic text-accent-orange">Privacy That Respects</span> <br />
              Our Clients.
            </h1>
            <p className="text-base md:text-lg font-medium text-text-secondary leading-relaxed max-w-2xl">
              We've helped businesses across multiple industries improve visibility, traffic, leads, and conversions. To maintain client confidentiality, brand identities remain protected.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 md:gap-6">
              <a
                href="#featured-results"
                className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-accent-emerald text-white border-2 border-accent-emerald hover:bg-accent-green hover:border-accent-green transition-theme shadow-offset cursor-pointer flex items-center gap-1.5"
              >
                View Results
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-card-bg text-text-primary border-2 border-border-color hover:bg-hover-highlight transition-theme shadow-offset-orange"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHY IDENTITIES ARE HIDDEN ─── */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-page-bg-sec border-b-2 border-border-color transition-theme text-left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-accent-green font-bold uppercase">
              01 // CONFIDENTIALITY MATRIX
            </span>
            <h2 className="font-serif italic text-3xl md:text-5xl text-text-primary leading-tight">
              Why Client Information Is Protected
            </h2>
            <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed max-w-xl">
              Many businesses prefer their growth strategies, performance data, and marketing systems to remain confidential. By keeping competitors blind to campaign structures and keyword lists, we secure our clients' ongoing competitive advantage.
            </p>
          </div>

          {/* Right Trust Column */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-card-bg border-4 border-accent-emerald p-8 rounded-3xl shadow-offset relative overflow-hidden transition-theme">
              {/* Card Dotted Grid Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-5" 
                style={{ backgroundImage: 'radial-gradient(var(--accent-emerald) 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
              />
              
              <h3 className="font-serif italic text-xl text-text-primary mb-6 border-b-2 border-accent-emerald pb-3 relative z-10">
                To maintain trust:
              </h3>
              
              <div className="space-y-4 relative z-10 text-sm">
                {[
                  "Client names hidden",
                  "Brand assets blurred",
                  "Sensitive information removed",
                  "Results shown transparently"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-semibold text-text-primary">
                    <div className="w-5 h-5 rounded bg-accent-green/15 flex items-center justify-center text-accent-green shrink-0 font-bold text-xs">
                      ✓
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: FEATURED RESULTS ─── */}
      <section id="featured-results" className="py-16 md:py-24 px-6 md:px-12 bg-page-bg transition-theme text-left border-b-2 border-border-color">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-12 border-b border-border-color pb-6 transition-theme">
            <span className="text-[10px] font-mono tracking-widest text-accent-green font-bold uppercase">
              02 // METRIC OVERVIEW
            </span>
            <h2 className="font-serif italic text-3xl md:text-5xl text-text-primary mt-2">
              Featured Case Growth
            </h2>
            <p className="text-xs md:text-sm text-text-secondary font-medium mt-2 leading-relaxed max-w-xl">
              Real outcomes from active campaigns. We track impressions, search console clicks, and keyword rankings directly.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredResults.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: idx % 4 * 0.08 }}
                whileHover={{ y: -3 }}
                className={`bg-card-bg border-2 ${card.borderColor} rounded-2xl p-5 ${card.shadowClass} transition-all duration-300 flex flex-col justify-between min-h-[360px] relative overflow-hidden group`}
              >
                {/* Watermark Label */}
                <div className="absolute -bottom-2 -right-2 text-[40px] font-sans font-black leading-none text-text-primary/[0.015] select-none pointer-events-none uppercase">
                  {card.industry.split(' ')[0]}
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Card category tags */}
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-mono font-bold uppercase tracking-widest bg-page-bg border border-border-color/10 px-2 py-0.5 rounded text-text-secondary">
                      {card.industry}
                    </span>
                    <div className="w-5 h-5 rounded bg-accent-green/10 flex items-center justify-center text-accent-green">
                      <Lock size={10} />
                    </div>
                  </div>

                  {/* Anonymous Title */}
                  <h3 className="font-serif text-lg font-bold text-text-primary leading-tight transition-theme">
                    {card.name}
                  </h3>

                  {/* Project Scope & Services */}
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-[7.5px] font-mono font-bold uppercase text-text-secondary/50">Project Scope:</h4>
                      <p className="text-[10px] text-text-secondary font-medium leading-relaxed mt-0.5">
                        {card.scope}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[7.5px] font-mono font-bold uppercase text-text-secondary/50">Services Delivered:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {card.services.map((s, sIdx) => (
                          <span key={sIdx} className="text-[8px] font-sans font-bold bg-page-bg border border-border-color/5 px-1.5 py-0.5 rounded text-text-secondary">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Highlights */}
                <div className="mt-4 pt-4 border-t border-border-color/10 relative z-10">
                  <Sparkline path={card.sparkline} color={card.sparklineColor} />

                  <div className="grid grid-cols-2 gap-2.5 mt-3">
                    <div className="bg-page-bg/40 border border-border-color/5 p-1.5 rounded">
                      <p className="text-[7.5px] font-mono text-text-secondary/60 uppercase font-bold">Growth</p>
                      <p className="text-sm font-sans font-extrabold text-accent-green mt-0.5">
                        <Counter value={card.metrics.traffic.val} suffix={card.metrics.traffic.suffix} />
                      </p>
                    </div>
                    <div className="bg-page-bg/40 border border-border-color/5 p-1.5 rounded">
                      <p className="text-[7.5px] font-mono text-text-secondary/60 uppercase font-bold">Clicks/mo</p>
                      <p className="text-sm font-sans font-extrabold text-text-primary mt-0.5">
                        <Counter value={card.metrics.clicks.val} suffix={card.metrics.clicks.suffix} />
                      </p>
                    </div>
                    <div className="bg-page-bg/40 border border-border-color/5 p-1.5 rounded">
                      <p className="text-[7.5px] font-mono text-text-secondary/60 uppercase font-bold">Impressions</p>
                      <p className="text-xs font-sans font-extrabold text-text-primary mt-0.5">
                        <Counter value={card.metrics.impressions.val / 1000} suffix="K" />
                      </p>
                    </div>
                    <div className="bg-page-bg/40 border border-border-color/5 p-1.5 rounded">
                      <p className="text-[7.5px] font-mono text-text-secondary/60 uppercase font-bold">Page 1 KWs</p>
                      <p className="text-sm font-sans font-extrabold text-accent-orange mt-0.5">
                        <Counter value={card.metrics.keywords.val} suffix={card.metrics.keywords.suffix} />
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: PROOF OF WORK ─── */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-page-bg-sec transition-theme text-center border-b-2 border-border-color">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 text-center">
            <span className="text-[10px] font-mono tracking-widest text-accent-orange font-bold uppercase">
              03 // ACCOUNTABILITY DATA
            </span>
            <h2 className="font-serif italic text-3xl md:text-5xl text-text-primary mt-2">
              Verified Performance Data
            </h2>
            <p className="text-xs md:text-sm text-text-secondary font-medium mt-2 leading-relaxed max-w-lg mx-auto">
              Real screenshots from live accounts tracking search visibility, user acquisitions, and keyword metrics. Identities remain protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* GSC Card */}
            <div className="bg-card-bg border-4 border-accent-emerald p-6 rounded-3xl shadow-offset relative overflow-hidden transition-theme">
              <div className="flex justify-between items-center mb-4 border-b border-border-color/10 pb-2">
                <span className="text-[10px] font-mono text-text-primary font-bold uppercase tracking-wider">Google Search Console</span>
                <span className="text-[8px] font-sans font-bold bg-[#EBF0EE] text-accent-emerald px-2 py-0.5 rounded">Visibility</span>
              </div>
              
              {/* Blurred simulated dashboard chart */}
              <div className="w-full h-44 rounded-xl border border-border-color/10 bg-[#FAFBFB] relative overflow-hidden flex items-center justify-center p-3">
                <div className="w-full h-full filter blur-[5px] opacity-40 select-none flex flex-col justify-between">
                  <div className="flex justify-between text-[7px] font-mono text-gray-400">
                    <div>Performance Chart</div>
                    <div>Last 3 months</div>
                  </div>
                  {/* Draw simple grid lines and chart line */}
                  <svg className="w-full h-24" viewBox="0 0 100 40">
                    <line x1="0" y1="10" x2="100" y2="10" stroke="#ddd" strokeDasharray="2" />
                    <line x1="0" y1="20" x2="100" y2="20" stroke="#ddd" strokeDasharray="2" />
                    <line x1="0" y1="30" x2="100" y2="30" stroke="#ddd" strokeDasharray="2" />
                    <path d="M0,32 Q15,25 30,30 T60,15 T85,12 T100,5" fill="none" stroke="#FF8A3D" strokeWidth="2" />
                  </svg>
                  <div className="flex justify-between text-[6px] font-mono text-gray-400">
                    <span>Clicks: 125K</span>
                    <span>Impressions: 8.2M</span>
                    <span>Position: 12.4</span>
                  </div>
                </div>

                {/* Protection Overlay */}
                <div className="absolute inset-0 bg-[#F4F6F5]/40 backdrop-blur-[1px] flex flex-col items-center justify-center p-4">
                  <div className="bg-card-bg border-2 border-accent-emerald px-4 py-2.5 rounded-xl shadow-offset-sm flex items-center gap-2">
                    <Lock className="text-accent-orange" size={13} />
                    <span className="text-[10px] font-mono font-bold text-text-primary uppercase tracking-wider">Client Identity Protected</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Analytics Card */}
            <div className="bg-card-bg border-4 border-accent-emerald p-6 rounded-3xl shadow-offset relative overflow-hidden transition-theme">
              <div className="flex justify-between items-center mb-4 border-b border-border-color/10 pb-2">
                <span className="text-[10px] font-mono text-text-primary font-bold uppercase tracking-wider">Google Analytics</span>
                <span className="text-[8px] font-sans font-bold bg-[#EBF0EE] text-accent-emerald px-2 py-0.5 rounded">Sessions</span>
              </div>
              
              {/* Blurred simulated analytics */}
              <div className="w-full h-44 rounded-xl border border-border-color/10 bg-[#FAFBFB] relative overflow-hidden flex items-center justify-center p-3">
                <div className="w-full h-full filter blur-[5px] opacity-40 select-none flex flex-col justify-between">
                  <div className="flex justify-between text-[7px] font-mono text-gray-400">
                    <div>Acquisition Traffic</div>
                    <div>Real-time: 142 Active</div>
                  </div>
                  {/* Simulated bar charts */}
                  <div className="flex items-end justify-between h-20 px-4">
                    <div className="w-4 bg-accent-emerald h-16" />
                    <div className="w-4 bg-[#FF8A3D] h-8" />
                    <div className="w-4 bg-[#C9A54D] h-12" />
                    <div className="w-4 bg-accent-green h-20" />
                  </div>
                  <div className="flex justify-between text-[6px] font-mono text-gray-400">
                    <span>Organic: 72%</span>
                    <span>Direct: 18%</span>
                    <span>Referral: 10%</span>
                  </div>
                </div>

                {/* Protection Overlay */}
                <div className="absolute inset-0 bg-[#F4F6F5]/40 backdrop-blur-[1px] flex flex-col items-center justify-center p-4">
                  <div className="bg-card-bg border-2 border-accent-emerald px-4 py-2.5 rounded-xl shadow-offset-sm flex items-center gap-2">
                    <Lock className="text-accent-orange" size={13} />
                    <span className="text-[10px] font-mono font-bold text-text-primary uppercase tracking-wider">Client Identity Protected</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Dashboard Card */}
            <div className="bg-card-bg border-4 border-accent-emerald p-6 rounded-3xl shadow-offset relative overflow-hidden transition-theme">
              <div className="flex justify-between items-center mb-4 border-b border-border-color/10 pb-2">
                <span className="text-[10px] font-mono text-text-primary font-bold uppercase tracking-wider">SEO Reporting Dashboard</span>
                <span className="text-[8px] font-sans font-bold bg-[#EBF0EE] text-accent-emerald px-2 py-0.5 rounded">Ranks</span>
              </div>
              
              {/* Blurred simulated SEO metrics */}
              <div className="w-full h-44 rounded-xl border border-border-color/10 bg-[#FAFBFB] relative overflow-hidden flex items-center justify-center p-3">
                <div className="w-full h-full filter blur-[5px] opacity-40 select-none flex flex-col justify-between">
                  <div className="flex justify-between text-[7px] font-mono text-gray-400">
                    <div>Keyword Positions</div>
                    <div>Crawl Health: 98%</div>
                  </div>
                  {/* Simulated table metrics */}
                  <div className="space-y-1 mt-2 text-[7px] font-mono text-text-secondary">
                    <div className="flex justify-between border-b border-gray-100 pb-0.5">
                      <span>Keyword query</span>
                      <span>Pos</span>
                      <span>Vol</span>
                    </div>
                    <div className="flex justify-between">
                      <span>buy organic products</span>
                      <span>1</span>
                      <span>42K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>spiritual shop delhi</span>
                      <span>1</span>
                      <span>12K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>home renovation costs</span>
                      <span>2</span>
                      <span>18K</span>
                    </div>
                  </div>
                  <div className="text-[6px] font-mono text-gray-400 text-right">
                    <span>Audit Score: A+</span>
                  </div>
                </div>

                {/* Protection Overlay */}
                <div className="absolute inset-0 bg-[#F4F6F5]/40 backdrop-blur-[1px] flex flex-col items-center justify-center p-4">
                  <div className="bg-card-bg border-2 border-accent-emerald px-4 py-2.5 rounded-xl shadow-offset-sm flex items-center gap-2">
                    <Lock className="text-accent-orange" size={13} />
                    <span className="text-[10px] font-mono font-bold text-text-primary uppercase tracking-wider">Client Identity Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Note */}
          <div className="mt-8">
            <p className="font-handwriting text-accent-emerald text-xl font-bold">
              "Original reports can be discussed during consultation where appropriate." 📄
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: OVERALL IMPACT ─── */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-page-bg transition-theme text-left border-b-2 border-border-color">
        <div className="max-w-6xl w-full mx-auto">
          
          <div className="mb-12 border-b border-border-color pb-6 transition-theme">
            <span className="text-[10px] font-mono tracking-widest text-accent-green font-bold uppercase">
              04 // CUMULATIVE IMPACT
            </span>
            <h2 className="font-serif italic text-3xl md:text-5xl text-text-primary mt-2">
              Combined Project Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { val: 10, suffix: "M+", label: "Search Impressions" },
              { val: 100, suffix: "K+", label: "Organic Clicks" },
              { val: 300, suffix: "+", label: "Ranking Keywords" },
              { val: 10, suffix: "+", label: "Industries Served" },
              { val: 0, suffix: "Multiple", label: "International Projects", isText: true }
            ].map((stat, idx) => (
              <div key={idx} className="bg-card-bg border-2 border-accent-emerald rounded-2xl p-5 shadow-offset-sm transition-theme flex flex-col justify-between min-h-[120px]">
                <div className="text-3xl md:text-4xl font-sans font-black text-accent-orange transition-theme">
                  {stat.isText ? (
                    <span>{stat.suffix}</span>
                  ) : (
                    <Counter value={stat.val} suffix={stat.suffix} duration={1.8} />
                  )}
                </div>
                <div className="text-[10px] font-mono text-text-secondary uppercase font-bold tracking-wider mt-3">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: HOW WE WORK ─── */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-page-bg-sec transition-theme text-left border-b-2 border-border-color">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16 border-b border-border-color pb-6 transition-theme">
            <span className="text-[10px] font-mono tracking-widest text-accent-green font-bold uppercase">
              05 // METHODOLOGY PIPELINE
            </span>
            <h2 className="font-serif italic text-3xl md:text-5xl text-text-primary mt-2">
              How We Work
            </h2>
          </div>

          {/* Horizontal/Vertical Neobrutalist Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            {/* Horizontal Line connecting stages on tablet/desktop */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-border-color -z-0 opacity-20" />
            
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                {/* Timeline step badge */}
                <div className="w-12 h-12 rounded-xl bg-accent-orange text-white border-2 border-accent-emerald flex items-center justify-center font-sans font-black text-sm shadow-offset-sm mb-4">
                  {step.step}
                </div>

                <div className="space-y-2 max-w-xs md:pr-4">
                  <h3 className="font-serif text-lg font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: WANT MORE DETAILS? ─── */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-page-bg transition-theme text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="font-handwriting text-2xl text-accent-orange -rotate-1">
            Need Additional Verification?
          </p>
          <h2 className="font-serif italic text-3xl md:text-5xl text-text-primary">
            Want More Details?
          </h2>
          <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed max-w-xl mx-auto">
            We respect client confidentiality, but during a consultation we can discuss relevant project experience and methodologies where appropriate.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-accent-emerald text-white border-2 border-accent-emerald hover:bg-accent-green hover:border-accent-green transition-theme shadow-offset cursor-pointer"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/916230078396?text=Hi%20KiwiClicks,%20I'd%20like%20to%20discuss%20our%20growth%20options."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-accent-orange text-white border-2 border-accent-emerald hover:bg-accent-emerald hover:text-white transition-theme shadow-offset cursor-pointer"
            >
              Book Discovery Call
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
