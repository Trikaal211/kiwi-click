import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { servicesData } from '../data/servicesData';
import type { ServiceData } from '../data/servicesData';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Phone, 
  Plus, 
  Minus, 
  ShieldCheck, 
  Star, 
  Clock, 
  Sparkles, 
  ArrowRight,
  Check
} from 'lucide-react';

/* ─── INTERACTIVE PREVIEW WIDGETS ─── */

// 1. SEO Tracker Widget
const SEOTrackerWidget = () => (
  <div className="w-full bg-[#f8fafc] dark:bg-[#0f172a] rounded-2xl border-4 border-accent-emerald p-6 shadow-offset relative overflow-hidden text-left transition-theme">
    <div className="flex items-center justify-between border-b border-border-color pb-3 mb-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-accent-green" />
        <span className="text-xs font-mono font-bold tracking-wider text-text-primary">ORGANIC POSITION MONITOR</span>
      </div>
      <span className="text-[10px] bg-accent-green/10 text-accent-green border border-accent-green/20 px-2.5 py-0.5 rounded-full font-bold">LIVE METRICS</span>
    </div>
    
    <div className="space-y-3">
      <div className="p-3 bg-white dark:bg-card-bg rounded-xl border-2 border-border-color flex justify-between items-center transition-theme">
        <div>
          <p className="text-[10px] font-mono text-text-secondary">TARGET TERM</p>
          <p className="text-xs font-bold font-sans text-text-primary">"dental clinic dwarka"</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-text-secondary line-through mr-1.5 font-medium">#18</span>
          <span className="text-sm font-extrabold text-accent-green font-sans">#1 Rank</span>
        </div>
      </div>
      
      <div className="p-3 bg-white dark:bg-card-bg rounded-xl border-2 border-border-color flex justify-between items-center transition-theme">
        <div>
          <p className="text-[10px] font-mono text-text-secondary">TARGET TERM</p>
          <p className="text-xs font-bold font-sans text-text-primary">"b2b lead gen agency delhi"</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-text-secondary line-through mr-1.5 font-medium">#22</span>
          <span className="text-sm font-extrabold text-accent-green font-sans">#2 Rank</span>
        </div>
      </div>

      <div className="p-3 bg-white dark:bg-card-bg rounded-xl border-2 border-border-color flex justify-between items-center transition-theme">
        <div>
          <p className="text-[10px] font-mono text-text-secondary">TARGET TERM</p>
          <p className="text-xs font-bold font-sans text-text-primary">"best organic oil store"</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-text-secondary line-through mr-1.5 font-medium">#38</span>
          <span className="text-sm font-extrabold text-accent-green font-sans">#1 Rank</span>
        </div>
      </div>
    </div>
  </div>
);

// 2. Ads Campaign Widget
const AdsCampaignWidget = () => (
  <div className="w-full bg-[#f8fafc] dark:bg-[#0f172a] rounded-2xl border-4 border-accent-orange p-6 shadow-offset-orange relative text-left transition-theme">
    <div className="flex items-center justify-between border-b border-border-color pb-3 mb-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-accent-orange" />
        <span className="text-xs font-mono font-bold tracking-wider text-text-primary">ROAS ACCELERATION</span>
      </div>
      <span className="text-[10px] bg-accent-orange/10 text-accent-orange border border-accent-orange/20 px-2.5 py-0.5 rounded-full font-bold">ACTIVE CAMPAIGNS</span>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="p-3 bg-white dark:bg-card-bg border-2 border-border-color rounded-xl transition-theme">
        <p className="text-[9px] font-mono text-text-secondary">BUDGET OUTFLOW</p>
        <p className="text-lg font-black text-text-primary mt-0.5">₹15,000</p>
      </div>
      <div className="p-3 bg-white dark:bg-card-bg border-2 border-border-color rounded-xl transition-theme">
        <p className="text-[9px] font-mono text-text-secondary">LEADS SECURED</p>
        <p className="text-lg font-black text-accent-orange mt-0.5">127 Inquiries</p>
      </div>
      <div className="p-3 bg-white dark:bg-card-bg border-2 border-border-color rounded-xl transition-theme">
        <p className="text-[9px] font-mono text-text-secondary">AVERAGE CPL</p>
        <p className="text-lg font-black text-text-primary mt-0.5">₹118</p>
      </div>
      <div className="p-3 bg-white dark:bg-card-bg border-2 border-border-color rounded-xl transition-theme">
        <p className="text-[9px] font-mono text-text-secondary">CONVERSION ROAS</p>
        <p className="text-lg font-black text-accent-green mt-0.5">4.8x ROI</p>
      </div>
    </div>
    <div className="w-full bg-page-bg rounded-lg h-2 relative overflow-hidden border border-border-color">
      <div className="absolute top-0 left-0 bg-accent-orange h-full w-[85%] rounded-lg animate-pulse" />
    </div>
  </div>
);

// 3. Chatbot Simulator Widget
const ChatbotSimulatorWidget = () => {
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    { sender: 'bot', text: 'Hi! Looking to qualify and schedule inquiries automatically?' }
  ]);
  const [showOptions, setShowOptions] = useState(true);

  const handleOption = (text: string) => {
    setMessages(prev => [
      ...prev, 
      { sender: 'user', text },
      { sender: 'bot', text: 'Excellent! KiwiClicks designs automated flows that filter lead budgets and sync scheduling. Reach out below to configure yours!' }
    ]);
    setShowOptions(false);
  };

  return (
    <div className="w-full bg-[#f8fafc] dark:bg-[#0f172a] rounded-2xl border-4 border-accent-emerald p-6 shadow-offset relative text-left transition-theme">
      <div className="flex items-center justify-between border-b border-border-color pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-text-primary">KIWI BOT V2 // SIMULATOR</span>
        </div>
      </div>

      <div className="space-y-3 h-48 overflow-y-auto mb-4 p-2 bg-white dark:bg-card-bg rounded-xl border-2 border-border-color text-xs transition-theme">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 max-w-[85%] rounded-2xl font-sans ${m.sender === 'user' ? 'bg-accent-orange text-white rounded-tr-none' : 'bg-page-bg text-text-primary border border-border-color rounded-tl-none'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {showOptions && (
        <div className="flex flex-col gap-2">
          <button 
            onClick={() => handleOption('Yes, show me how!')}
            className="w-full py-2 bg-accent-green/10 text-accent-green hover:bg-accent-green hover:text-white border border-accent-green/20 rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            "Yes, show me how!"
          </button>
          <button 
            onClick={() => handleOption('What integrations do you support?')}
            className="w-full py-2 bg-page-bg text-text-secondary hover:text-text-primary border border-border-color rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            "What integrations do you support?"
          </button>
        </div>
      )}
    </div>
  );
};

// 4. Web Performance Widget
const WebPerformanceWidget = () => (
  <div className="w-full bg-[#f8fafc] dark:bg-[#0f172a] rounded-2xl border-4 border-accent-emerald p-6 shadow-offset relative text-left transition-theme">
    <div className="flex items-center justify-between border-b border-border-color pb-3 mb-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono font-bold tracking-wider text-text-primary">SPEED AUDIT BLUEPRINT</span>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-center gap-6">
      {/* Circle Gauge */}
      <div className="relative w-28 h-28 flex items-center justify-center border-4 border-accent-green rounded-full bg-accent-green/5 shadow-inner">
        <div className="text-center">
          <p className="text-3xl font-black text-accent-green">99</p>
          <p className="text-[8px] font-mono text-text-secondary tracking-widest mt-0.5">PERFORMANCE</p>
        </div>
      </div>
      
      {/* Metrics details */}
      <div className="flex-1 space-y-2 text-xs w-full">
        <div className="flex justify-between border-b border-border-color/50 pb-1">
          <span className="text-text-secondary">First Contentful Paint</span>
          <span className="font-bold text-accent-green font-mono">0.3s</span>
        </div>
        <div className="flex justify-between border-b border-border-color/50 pb-1">
          <span className="text-text-secondary">Speed Index</span>
          <span className="font-bold text-accent-green font-mono">0.7s</span>
        </div>
        <div className="flex justify-between border-b border-border-color/50 pb-1">
          <span className="text-text-secondary">Largest Contentful Paint</span>
          <span className="font-bold text-accent-green font-mono">0.8s</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Cumulative Layout Shift</span>
          <span className="font-bold text-accent-green font-mono">0.00</span>
        </div>
      </div>
    </div>
  </div>
);

// 5. Local Search Widget
const LocalSearchWidget = () => (
  <div className="w-full bg-[#f8fafc] dark:bg-[#0f172a] rounded-2xl border-4 border-accent-emerald p-6 shadow-offset relative text-left transition-theme">
    <div className="flex items-center justify-between border-b border-border-color pb-3 mb-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono font-bold tracking-wider text-text-primary">GOOGLE MAP PACK TRACKER</span>
      </div>
    </div>

    <div className="space-y-3 text-xs">
      <div className="p-3 bg-white dark:bg-card-bg border-2 border-accent-green rounded-xl shadow-sm relative transition-theme">
        <span className="absolute top-2.5 right-2.5 bg-accent-green text-white text-[8px] font-mono px-2 py-0.5 rounded uppercase font-extrabold tracking-widest border border-white">#1 Slot</span>
        <h5 className="font-bold text-text-primary">KiwiClicks Partner Client</h5>
        <div className="flex items-center gap-1 text-[10px] text-accent-orange mt-1">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-accent-orange" />)}
          </div>
          <span className="font-semibold text-text-secondary">4.9 (240+ reviews)</span>
        </div>
        <p className="text-[10px] text-text-secondary/70 mt-1">Dwarka Sector 2, New Delhi • Open 24/7</p>
      </div>

      <div className="p-3 bg-white dark:bg-card-bg border-2 border-border-color rounded-xl opacity-60 transition-theme">
        <h5 className="font-bold text-text-primary">Competitor Business B</h5>
        <div className="flex items-center gap-1 text-[10px] text-accent-orange mt-1">
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => <Star key={i} size={10} className="fill-accent-orange" />)}
          </div>
          <span className="font-semibold text-text-secondary">4.2 (62 reviews)</span>
        </div>
        <p className="text-[10px] text-text-secondary/70 mt-1">Dwarka, New Delhi</p>
      </div>
    </div>
  </div>
);

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service: ServiceData | undefined = slug ? servicesData[slug] : undefined;

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen bg-page-bg text-text-primary pt-32 md:pt-36 lg:pt-40 px-6 flex flex-col items-center justify-center transition-theme">
        <h2 className="font-serif italic text-4xl mb-4">Service Not Found</h2>
        <p className="text-text-secondary mb-8">The service route details you are looking for do not exist.</p>
        <Link to="/" className="px-6 py-3 bg-accent-orange text-white border-2 border-accent-emerald rounded-xl text-xs font-sans font-bold uppercase tracking-wider shadow-offset">
          Return to Homepage
        </Link>
      </div>
    );
  }

  // Accent mapping helper
  const accentClasses = (({
    green: {
      border: 'border-accent-emerald',
      text: 'text-accent-green',
      bg: 'bg-accent-green/5',
      badge: 'bg-accent-green/10 text-accent-green border-accent-green/20',
      btn: 'bg-accent-green text-white border-accent-emerald hover:bg-accent-orange',
      shadow: 'shadow-offset',
      shadowSm: 'shadow-offset-sm'
    },
    emerald: {
      border: 'border-accent-emerald',
      text: 'text-accent-emerald',
      bg: 'bg-accent-emerald/5',
      badge: 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20',
      btn: 'bg-accent-emerald text-white border-white hover:bg-accent-orange',
      shadow: 'shadow-offset',
      shadowSm: 'shadow-offset-sm'
    },
    orange: {
      border: 'border-accent-orange',
      text: 'text-accent-orange',
      bg: 'bg-accent-orange/5',
      badge: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20',
      btn: 'bg-accent-orange text-white border-accent-emerald hover:bg-accent-emerald',
      shadow: 'shadow-offset-orange',
      shadowSm: 'shadow-offset-sm-orange'
    },
    gold: {
      border: 'border-gold-accent',
      text: 'text-gold-accent',
      bg: 'bg-gold-accent/5',
      badge: 'bg-gold-accent/10 text-gold-accent border-gold-accent/20',
      btn: 'bg-gold-accent text-white border-accent-emerald hover:bg-accent-orange',
      shadow: 'shadow-offset-orange',
      shadowSm: 'shadow-offset-sm-orange'
    }
  } as Record<string, any>)[service.accentColor || 'green']);

  return (
    <div className="min-h-screen bg-page-bg text-text-primary pt-32 md:pt-36 lg:pt-40 pb-16 transition-theme overflow-x-hidden">

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 border-b border-border-color transition-theme">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-mono px-3 py-1 rounded-full font-bold uppercase border ${accentClasses.badge}`}>
                {service.categoryLabel}
              </span>
              <div className="flex items-center gap-1 bg-accent-orange/10 text-accent-orange border border-accent-orange/20 px-3 py-1 rounded-full text-[10px] font-mono font-bold">
                <Sparkles size={11} /> 100% DONE-FOR-YOU
              </div>
            </div>

            <h1 className="font-serif italic text-4xl md:text-6xl text-text-primary leading-[1.05] tracking-tight">
              {service.title}
            </h1>

            <p className={`text-lg md:text-xl font-sans font-bold leading-relaxed ${accentClasses.text}`}>
              {service.tagline}
            </p>

            <p className="text-base font-sans font-light text-text-secondary leading-relaxed max-w-xl">
              {service.heroDescription}
            </p>

            {/* Quick trust check row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-text-secondary/80 font-medium font-sans">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-accent-green" /> 20+ Businesses Helped
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-accent-green" /> 4+ Years Experience
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-accent-green" /> New Delhi Native
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className={`px-8 py-4 rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer border-2 flex items-center justify-center gap-2 ${accentClasses.btn}`}
              >
                Book Growth Audit <ArrowUpRight size={14} />
              </Link>
              <a
                href="https://wa.me/916230078396?text=Hi%20KiwiClicks,%20I'd%20like%20to%20discuss%20our%20growth%20options."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-page-bg-sec border-2 border-border-color hover:border-accent-orange hover:text-accent-orange rounded-xl text-xs font-sans font-bold uppercase tracking-wider text-text-primary transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Connect via WhatsApp <Phone size={13} />
              </a>
            </div>
          </div>

          {/* Right: Custom Service Interactive Widget */}
          <div className="lg:col-span-5 w-full">
            {service.widgetType === 'seo' && <SEOTrackerWidget />}
            {service.widgetType === 'ads' && <AdsCampaignWidget />}
            {service.widgetType === 'chatbot' && <ChatbotSimulatorWidget />}
            {service.widgetType === 'web' && <WebPerformanceWidget />}
            {service.widgetType === 'local' && <LocalSearchWidget />}
          </div>

        </div>
      </section>

      {/* Problem Section (Dark layout accent) */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-page-bg-sec transition-theme">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-sans tracking-widest text-accent-orange font-bold uppercase">THE BOTTLENECKS</span>
          <h2 className="font-serif italic text-3xl md:text-4xl text-text-primary mt-2 mb-10 leading-tight">
            Is Your Business Facing These Pain Points?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {service.problems.map((prob: string, i: number) => (
              <div 
                key={i} 
                className="bg-card-bg border-2 border-accent-orange p-6 rounded-2xl shadow-offset-sm-orange relative overflow-hidden transition-theme"
              >
                <span className="text-4xl font-black text-accent-orange/15 absolute top-2 right-4">0{i+1}</span>
                <p className="text-xs font-sans font-medium text-text-primary leading-relaxed mt-4">
                  {prob}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-page-bg transition-theme">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-[10px] font-sans tracking-widest text-accent-green font-bold uppercase">THE KIWICLICKS PLAYBOOK</span>
            <h2 className="font-serif italic text-3xl md:text-5xl text-text-primary leading-[1.1] tracking-tight">
              Our Execution Approach
            </h2>
            <p className="text-base font-sans font-light text-text-secondary leading-relaxed">
              {service.solution} We cut through standard marketing fluff and configure robust conversion loops that drive direct sales appointments, walk-ins, or orders.
            </p>

            <div className="space-y-3 pt-2">
              {service.benefits.map((ben: string, i: number) => (
                <div key={i} className="flex items-start gap-2 text-xs font-sans font-semibold text-text-primary">
                  <Check className="text-accent-green shrink-0 mt-0.5" size={14} />
                  <span>{ben}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 w-full bg-card-bg border-4 border-accent-emerald p-6 rounded-3xl shadow-offset text-left transition-theme">
            <h4 className="font-sans font-bold text-sm text-text-primary border-b border-border-color pb-3 mb-4">
              WHY FOUNDERS TRUST US:
            </h4>
            <div className="space-y-4 text-xs font-sans">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded bg-accent-green/10 flex items-center justify-center text-accent-green shrink-0 font-bold">1</div>
                <div>
                  <p className="font-bold text-text-primary">Delhi NCR Native Focus</p>
                  <p className="text-text-secondary/80 mt-0.5">We understand regional buyer behavior metrics.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded bg-accent-green/10 flex items-center justify-center text-accent-green shrink-0 font-bold">2</div>
                <div>
                  <p className="font-bold text-text-primary">100% In-House Developers</p>
                  <p className="text-text-secondary/80 mt-0.5">We write clean source code with sub-1s load speeds.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded bg-accent-green/10 flex items-center justify-center text-accent-green shrink-0 font-bold">3</div>
                <div>
                  <p className="font-bold text-text-primary">Direct Founder Communication</p>
                  <p className="text-text-secondary/80 mt-0.5">You coordinate with decision makers, not account sales teams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-page-bg-sec transition-theme">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-sans tracking-widest text-accent-green font-bold uppercase">THE TIMELINE</span>
          <h2 className="font-serif italic text-3xl md:text-4xl text-text-primary mt-2 mb-12">
            Execution Stages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {service.process.map((step: { step: string; title: string; desc: string }, i: number) => (
              <div key={i} className="bg-card-bg border-2 border-accent-emerald p-5 rounded-2xl shadow-offset-sm relative transition-theme">
                <span className="text-xs font-mono font-bold text-accent-green border border-accent-green/20 px-2 py-0.5 rounded bg-accent-green/5">
                  {step.step}
                </span>
                <h4 className="font-sans font-bold text-sm text-text-primary mt-4 mb-2">{step.title}</h4>
                <p className="text-[11px] font-sans text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-page-bg transition-theme">
        <div className="max-w-4xl mx-auto bg-card-bg border-4 border-accent-orange p-8 md:p-12 rounded-3xl shadow-offset-orange text-left relative transition-theme">
          <span className="text-[9px] font-mono bg-accent-orange/10 text-accent-orange border border-accent-orange/20 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
            CASE STUDY SPOTLIGHT
          </span>
          
          <h3 className="font-serif italic text-3xl text-text-primary mt-4 mb-2">
            Proven Outcomes // {service.caseStudy.clientName}
          </h3>

          <p className="text-sm font-sans font-medium text-accent-orange mb-6">
            CHALLENGE: {service.caseStudy.challenge}
          </p>

          <p className="text-sm font-sans text-text-secondary leading-relaxed mb-8">
            SOLUTION: {service.caseStudy.solution} We configured targeted search phrases, built dedicated landing pages, and automated reservation bookings.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border-color/60 pt-6">
            {service.caseStudy.metrics.map((metric: { label: string; val: string }, i: number) => (
              <div key={i} className="p-4 bg-page-bg border border-border-color rounded-xl text-center transition-theme">
                <p className="text-2xl font-black text-accent-green font-sans">{metric.val}</p>
                <p className="text-[10px] font-mono text-text-secondary mt-1 tracking-widest uppercase">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-page-bg-sec transition-theme">
        <div className="max-w-3xl mx-auto text-left">
          <div className="text-center mb-10">
            <span className="text-[10px] font-sans tracking-widest text-accent-orange font-bold uppercase">ANSWERS</span>
            <h2 className="font-serif italic text-3xl md:text-4xl text-text-primary mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq: { q: string; a: string }, i: number) => {
              const isOpen = openFaqIndex === i;
              return (
                <div 
                  key={i} 
                  className="bg-card-bg border-2 border-border-color rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-5 flex justify-between items-center text-left hover:bg-hover-highlight transition-colors cursor-pointer"
                  >
                    <span className="font-sans font-bold text-xs md:text-sm text-text-primary pr-4">
                      {faq.q}
                    </span>
                    {isOpen ? <Minus size={14} className="shrink-0 text-accent-orange" /> : <Plus size={14} className="shrink-0 text-accent-green" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-border-color/30 pt-4 bg-page-bg/30">
                      <p className="text-xs md:text-sm font-sans font-light text-text-secondary leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-accent-emerald text-white text-center transition-theme">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif italic text-3xl md:text-5xl mb-4 text-white">
            Secure Your Growth Roadmap
          </h2>
          <p className="text-sm md:text-base font-sans font-medium text-white/80 max-w-xl mx-auto leading-relaxed">
            Get a comprehensive audit of your current digital setup. We will look at your local competitor metrics, audit speed points, and detail a clear plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent-orange text-white border-2 border-white rounded-xl text-xs font-sans font-bold uppercase tracking-wider hover:bg-white hover:text-accent-emerald transition-all shadow-offset flex items-center justify-center gap-1.5"
            >
              Request Free Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Conversion Footer Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card-bg/95 border-t-2 border-accent-emerald py-3 px-6 z-30 shadow-lg backdrop-blur-md hidden sm:flex justify-between items-center transition-theme">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <p className="text-xs font-sans font-bold text-text-primary">
            Discuss {service.title}?
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://wa.me/916230078396?text=Hi%20KiwiClicks,%20I'd%20like%20to%20discuss%20our%20growth%20options."
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-[#25D366] text-white rounded-lg text-[10px] font-sans font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-1 cursor-pointer"
          >
            WhatsApp <Phone size={10} />
          </a>
          <Link
            to="/contact"
            className="px-4 py-2 bg-accent-orange text-white border border-accent-emerald rounded-lg text-[10px] font-sans font-bold uppercase tracking-wider hover:bg-accent-emerald transition-all cursor-pointer"
          >
            Book Session <ArrowUpRight size={10} />
          </Link>
        </div>
      </div>

    </div>
  );
}
