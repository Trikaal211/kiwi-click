import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Search, MapPin, Phone, MessageSquare, RefreshCw, 
  Star, Paperclip, ChevronLeft, ChevronRight
} from 'lucide-react';

// CountUp component to animate trust building metrics
const AnimatedNumber = ({ value, suffix = '', prefix = '', decimals = 0 }: { value: number; suffix?: string; prefix?: string; decimals?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(elementRef as any, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) {
      const end = value;
      const duration = 1500; // ms
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress * (2 - progress); // Ease out quad
        
        setDisplayValue(easeProgress * end);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [value, inView]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.floor(displayValue).toString();

  return <span ref={elementRef as any}>{prefix}{formatted}{suffix}</span>;
};

// Hand-drawn arrow connectors between stages
const HandDrawnArrow = ({ direction = 'right', className = '' }: { direction?: 'right' | 'down-right' | 'down' | 'down-left'; className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 30" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      className={`text-accent-orange opacity-80 pointer-events-none select-none ${className}`}
    >
      {direction === 'right' && (
        <>
          <path d="M5,15 C35,25 65,5 90,15" strokeDasharray="3 3" />
          <path d="M82,8 L92,15 L83,23" strokeLinejoin="round" />
        </>
      )}
      {direction === 'down-right' && (
        <>
          <path d="M10,5 C30,15 60,25 85,25" strokeDasharray="3 3" />
          <path d="M78,18 L88,25 L79,30" strokeLinejoin="round" />
        </>
      )}
      {direction === 'down-left' && (
        <>
          <path d="M90,5 C70,15 40,25 15,25" strokeDasharray="3 3" />
          <path d="M22,18 L12,25 L21,30" strokeLinejoin="round" />
        </>
      )}
      {direction === 'down' && (
        <svg viewBox="0 0 30 100" fill="none" className="w-6 h-16">
          <path d="M15,5 C5,35 25,65 15,90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
          <path d="M8,82 L15,92 L22,83" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </svg>
  );
};

// Custom coffee stain overlay to add realism
const CoffeeStain = ({ className = '' }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`pointer-events-none text-amber-900/10 dark:text-amber-950/15 fill-none stroke-current select-none ${className}`}
    strokeWidth="2"
  >
    <path d="M 50 10 A 40 40 0 1 0 90 50 A 40 40 0 0 0 50 10 Z" strokeDasharray="250 10" />
    <path d="M 46 16 A 34 34 0 1 0 80 50 A 34 34 0 0 0 46 16 Z" strokeWidth="1" opacity="0.6" strokeDasharray="100 20" />
    <circle cx="90" cy="38" r="1.5" className="fill-current stroke-none" />
    <circle cx="82" cy="20" r="1" className="fill-current stroke-none" />
    <circle cx="30" cy="12" r="1.8" className="fill-current stroke-none" />
    <circle cx="68" cy="85" r="1.2" className="fill-current stroke-none" />
  </svg>
);

export default function WhyKiwiClicks() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const journeyStages = [
    {
      title: "1. Google Search",
      tag: "Local Search Visibility",
      desc: "Capturing high-intent Delhi search queries when needs arise.",
      note: "78% of local intent queries select from top 3 map results. We ignore broad vanity blogs and target immediate commercial-intent queries first.",
      illustration: (
        <div className="w-full bg-[#fcfdfd] dark:bg-card-bg rounded-lg border border-border-color p-3 text-left relative overflow-hidden transition-theme">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent-green" />
          <div className="flex items-center gap-1.5 bg-page-bg dark:bg-page-bg-sec rounded border border-border-color/60 px-2 py-1 mb-3">
            <Search size={10} className="text-text-secondary/70" />
            <span className="text-[10px] font-medium text-text-primary">best dental clinic in South Delhi</span>
          </div>
          <div className="space-y-2 text-[10px]">
            <div className="p-1.5 rounded bg-accent-green/5 border border-accent-green/30 flex items-start gap-2 relative">
              <span className="font-bold text-accent-green text-[11px] mt-0.5">1.</span>
              <div>
                <p className="font-bold text-text-primary flex items-center gap-1">
                  Delhi Dental Clinic <span className="text-[8px] bg-accent-orange/15 text-accent-orange px-1 rounded font-bold">Ad</span>
                </p>
                <p className="text-[8px] text-text-secondary">Connaught Place, New Delhi • 4.9 ★ (180+ reviews)</p>
              </div>
              <MapPin size={11} className="text-accent-orange ml-auto self-center shrink-0" />
            </div>
            <div className="p-1.5 rounded opacity-65 flex items-start gap-2">
              <span className="font-bold text-text-secondary text-[11px] mt-0.5">2.</span>
              <div>
                <p className="font-bold text-text-primary">Apex Dental Center</p>
                <p className="text-[8px] text-text-secondary">GK-1, New Delhi • 4.6 ★ (94 reviews)</p>
              </div>
              <MapPin size={11} className="text-text-secondary/60 ml-auto self-center shrink-0" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2. Google Business",
      tag: "Delhi NCR Campaign",
      desc: "Showing up on local maps to build quick regional confidence.",
      note: "We optimize your GBP architecture (citations, review velocities, Q&A stacks) to lock in call taps from high-net-worth neighborhoods across NCR.",
      illustration: (
        <div className="w-full bg-[#fcfdfd] dark:bg-card-bg rounded-lg border border-border-color p-3 text-left relative transition-theme">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-sans font-bold text-xs text-text-primary">Delhi Dental Clinic</h4>
              <div className="flex items-center gap-0.5 mt-0.5 text-accent-orange">
                {[...Array(5)].map((_, i) => <Star key={i} size={8} className="fill-accent-orange" />)}
                <span className="text-[8px] text-text-secondary ml-1 font-semibold">4.9 (184 reviews)</span>
              </div>
            </div>
            <span className="text-[7px] font-mono uppercase bg-accent-green/10 text-accent-green px-1.5 py-0.5 rounded font-bold border border-accent-green/20">Verified</span>
          </div>
          <p className="text-[9px] text-text-secondary leading-tight mb-2.5">Modern dental care center in Connaught Place, serving South Delhi and Gurgaon clients.</p>
          <div className="grid grid-cols-3 gap-1.5 text-center">
            <div className="p-1 rounded bg-page-bg dark:bg-page-bg-sec border border-border-color/60 cursor-pointer flex flex-col items-center justify-center gap-0.5 hover:border-accent-green transition-colors">
              <Phone size={9} className="text-accent-green" />
              <span className="text-[7px] font-bold text-text-primary uppercase">Call Now</span>
            </div>
            <div className="p-1 rounded bg-page-bg dark:bg-page-bg-sec border border-border-color/60 cursor-pointer flex flex-col items-center justify-center gap-0.5 hover:border-accent-green transition-colors">
              <MapPin size={9} className="text-accent-green" />
              <span className="text-[7px] font-bold text-text-primary uppercase">Directions</span>
            </div>
            <div className="p-1 rounded bg-page-bg dark:bg-page-bg-sec border border-border-color/60 cursor-pointer flex flex-col items-center justify-center gap-0.5 hover:border-accent-green transition-colors">
              <MessageSquare size={9} className="text-accent-orange" />
              <span className="text-[7px] font-bold text-text-primary uppercase">WhatsApp</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "3. Website Visit",
      tag: "Gurgaon Lead Funnel",
      desc: "Speed-optimized React layouts built to keep visitors hooked.",
      note: "No generic corporate sliders. Delhi consumers decide in 2 seconds. We build blazing fast landing pages that load in under 1 second and immediately handle queries.",
      illustration: (
        <div className="w-full bg-[#fcfdfd] dark:bg-card-bg rounded-lg border border-border-color p-3 text-left relative transition-theme">
          <div className="flex items-center gap-1 border-b border-border-color/50 pb-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-[7px] font-mono text-text-secondary/60 ml-2">delhidentalclinic.in/implants</span>
          </div>
          <div className="relative p-2 rounded bg-page-bg dark:bg-page-bg-sec border border-border-color/40">
            <div className="h-2 bg-accent-green/20 w-1/3 rounded mb-1" />
            <p className="text-[9px] font-serif italic font-bold text-text-primary leading-tight">Get Your Dental Implants In CP. Top Specialists.</p>
            <div className="flex items-center gap-1.5 mt-2">
              <div className="text-[7px] bg-accent-green text-white font-bold px-1.5 py-0.5 rounded shadow-offset-sm border border-accent-green">
                Book Visit
              </div>
              <div className="text-[7px] text-accent-orange font-bold font-handwriting">
                * Slots fill up fast!
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between text-[7px] font-mono text-text-secondary/70">
            <span>Mobile Speed Index: <strong className="text-accent-green">0.9s</strong></span>
            <span>SEO Score: <strong className="text-accent-green">100/100</strong></span>
          </div>
        </div>
      )
    },
    {
      title: "4. WhatsApp Enquiry",
      tag: "Indian Consumer Behavior",
      desc: "Bypassing long email forms to initiate instant dialogue.",
      note: "Indian consumers prefer chat over email. We route web interest directly into high-converting, personalized WhatsApp chat funnels to start real conversations.",
      illustration: (
        <div className="w-full bg-[#e5ddd5] dark:bg-[#121c15] rounded-lg border border-border-color p-3 text-left relative transition-theme">
          <div className="space-y-2">
            <div className="max-w-[85%] bg-white dark:bg-[#1e2a22] text-text-primary p-2 rounded-r-lg rounded-tl-lg text-[8px] leading-snug shadow-sm border border-black/5">
              <p className="font-semibold text-accent-green text-[7px]">Inbound Lead from Google Maps</p>
              Hi, I want to book an implant consultation at your Connaught Place clinic tomorrow. Do you have slots?
              <span className="text-[6px] text-text-secondary/60 block text-right mt-0.5">10:14 AM</span>
            </div>
            <div className="max-w-[85%] bg-[#dcf8c6] dark:bg-[#056162] text-text-primary ml-auto p-2 rounded-l-lg rounded-tr-lg text-[8px] leading-snug shadow-sm border border-black/5">
              <p className="font-semibold text-accent-orange text-[7px]">KiwiClicks AI Assistant</p>
              Hi there! Yes, we have slots at 11:30 AM and 3:00 PM. Which one would you prefer?
              <div className="mt-1 flex gap-1">
                <span className="px-1.5 py-0.5 rounded bg-white dark:bg-card-bg text-[7px] border border-border-color/30 font-bold block cursor-pointer">11:30 AM</span>
                <span className="px-1.5 py-0.5 rounded bg-white dark:bg-card-bg text-[7px] border border-border-color/30 font-bold block cursor-pointer">3:00 PM</span>
              </div>
              <span className="text-[6px] text-text-secondary/60 block text-right mt-0.5">10:14 AM • Auto-sent in 0.2s</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "5. Follow-Up CRM",
      tag: "Gurgaon Lead Funnel",
      desc: "Ensuring 100% lead follow-up through instant automated routing.",
      note: "No lost leads. Details are instantly synced to CRM dashboards. Sales reps are notified in under 3 minutes via SMS or Slack to maintain maximum heat.",
      illustration: (
        <div className="w-full bg-[#fcfdfd] dark:bg-card-bg rounded-lg border border-border-color p-3 text-left relative transition-theme">
          <div className="flex items-center justify-between border-b border-border-color/50 pb-1.5 mb-2">
            <span className="text-[8px] font-mono font-bold text-accent-orange">CRM LEAD ROUTING</span>
            <span className="text-[7px] font-mono text-text-secondary/70">Stage: Hot Leads</span>
          </div>
          <div className="space-y-1.5">
            <div className="p-1 rounded bg-page-bg dark:bg-page-bg-sec border border-border-color/40 flex items-center justify-between text-[8px]">
              <span className="font-bold text-text-primary">Rahul Sharma</span>
              <span className="text-[7px] font-mono bg-accent-green/10 text-accent-green px-1.5 py-0.2 rounded font-bold border border-accent-green/20">Qualified</span>
            </div>
            <div className="flex justify-center my-0.5">
              <svg width="8" height="12" viewBox="0 0 8 12" className="text-accent-orange">
                <path d="M4,0 L4,10 M1,7 L4,10 L7,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="p-1 rounded bg-page-bg dark:bg-page-bg-sec border border-border-color/40 flex items-center justify-between text-[8px]">
              <span className="text-text-primary">Assigned: CP Dentist</span>
              <span className="text-[7px] font-mono text-accent-orange font-bold">SMS Sent</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "6. Customer Purchase",
      tag: "South Delhi Growth Campaign",
      desc: "Converting digital conversations into actual revenue entries.",
      note: "We connect digital campaigns directly to revenue tracking. We don't just celebrate 'clicks' or 'impressions'; we trace everything to client bookings.",
      illustration: (
        <div className="w-full bg-[#fcfdfd] dark:bg-card-bg rounded-lg border border-border-color p-3 text-left relative transition-theme">
          <div className="p-2 rounded bg-accent-green/5 border-2 border-dashed border-accent-green/30 text-center">
            <span className="text-[8px] font-mono uppercase text-accent-green tracking-wider font-bold">Invoice Cleared</span>
            <h4 className="text-lg font-sans font-bold text-text-primary mt-0.5">₹14,500</h4>
            <p className="text-[7px] text-text-secondary mt-1">Delhi Dental Clinic • Implant Treatment Deposit</p>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[8px] font-mono text-text-secondary">
            <span>Attributed Ads ROI:</span>
            <span className="text-accent-green font-bold">4.8x ROAS</span>
          </div>
        </div>
      )
    },
    {
      title: "7. Repeat Customer",
      tag: "Local Search Visibility",
      desc: "Scaling Lifetime Value with automated post-service loyalty campaigns.",
      note: "Most agencies stop once the first purchase is complete. We set up automated follow-ups, referral triggers, and routine care check-ins to build multi-year loyalty.",
      illustration: (
        <div className="w-full bg-[#fcfdfd] dark:bg-card-bg rounded-lg border border-border-color p-3 text-left relative transition-theme">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-4 h-4 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green">
              <RefreshCw size={8} />
            </div>
            <span className="text-[8px] font-mono uppercase font-bold text-text-primary">Patient Loyalty Active</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[8px] border-b border-border-color/30 pb-1">
              <span className="text-text-secondary">Next Checkup Trigger</span>
              <span className="text-accent-green font-bold">6 Months Recall</span>
            </div>
            <div className="flex justify-between items-center text-[8px] border-b border-border-color/30 pb-1">
              <span className="text-text-secondary">Referral Program Code</span>
              <span className="text-accent-orange font-bold">DDC-LOYAL-412</span>
            </div>
            <div className="flex justify-between items-center text-[8px] pt-1">
              <span className="text-text-secondary">Patient Retention</span>
              <span className="text-accent-green font-bold">+42% YoY</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-12 md:py-16 px-6 md:px-12 bg-page-bg text-text-primary overflow-hidden transition-theme"
    >
      {/* Background strategist Grid and whiteboard textures */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06] select-none">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="deskGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deskGrid)" />
        </svg>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Title Section */}
        <div className="mb-16 md:mb-24 flex flex-col items-start text-left border-b border-border-color/30 pb-10 relative">
          <span className="text-xs font-mono tracking-widest text-accent-green font-bold uppercase mb-4 block">
            // 02. STRATEGY BLUEPRINT
          </span>
          <h2 className="font-serif italic font-light text-4xl md:text-7xl text-text-primary tracking-tight leading-none max-w-4xl transition-theme">
            Built For Delhi Businesses <br className="hidden md:inline" />
            That Want <span className="font-sans font-extrabold not-italic text-accent-green relative inline-block">
              Real Growth
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-orange pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                <path d="M0,7 C30,2 70,2 100,7 M5,9 C35,4 75,4 95,9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
          <div className="mt-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-end w-full">
            <div className="max-w-xl text-left space-y-4">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-sans font-bold text-text-secondary/70">
                <span className="flex items-center gap-1.5 text-text-secondary/50 line-through">
                  Not vanity metrics.
                </span>
                <span className="flex items-center gap-1.5 text-text-secondary/50 line-through">
                  Not generic marketing.
                </span>
              </div>
              <p className="text-base md:text-lg font-sans font-medium text-text-secondary leading-relaxed transition-theme">
                We help local businesses turn attention into enquiries, conversations and revenue. No boilerplate scripts, just campaign architectures designed for NCR buyer behavior.
              </p>
            </div>
            
            {/* Strategist Marker Circle */}
            <div className="font-handwriting text-accent-orange text-lg md:text-xl rotate-[-2deg] tracking-wide font-bold bg-accent-orange/5 border border-accent-orange/20 px-4 py-2 rounded-xl">
              ✦ "Delhi Dwarka office war room blueprints" 🖋️
            </div>
          </div>

          <CoffeeStain className="absolute top-[-40px] right-[5%] w-24 h-24 opacity-60 dark:opacity-30 hidden md:block" />
        </div>

        {/* Strategist Desk Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">
          
          {/* LEFT STICKY PANEL: Trust Proof & Case Study Folder */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            
            {/* Floating Trust Proof Snippets (Physical Desk Clippings) */}
            <div className="relative bg-card-bg/60 dark:bg-card-bg/40 border-2 border-border-color rounded-2xl p-6 shadow-offset transition-theme backdrop-blur-sm">
              <div className="absolute -top-3 left-4 bg-accent-emerald text-white px-2.5 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider font-bold">
                Campaign Evidence Log
              </div>

              {/* Coffee ring stain overlapping proof details */}
              <CoffeeStain className="absolute right-3 bottom-3 w-32 h-32 opacity-40" />

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="p-3 bg-white dark:bg-[#152a22]/30 border border-border-color rounded-xl shadow-offset-sm transform -rotate-1 hover:rotate-0 transition-transform duration-200">
                  <span className="text-[8px] font-mono text-text-secondary uppercase block font-bold">SEO Traffic Impact</span>
                  <p className="text-xl font-bold text-accent-green mt-1">
                    <AnimatedNumber value={327} suffix="%" prefix="+" />
                  </p>
                  <span className="text-[7px] text-text-secondary/80 block mt-0.5 font-sans leading-tight">Organic Growth, Delhi CP</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#152a22]/30 border border-border-color rounded-xl shadow-offset-sm transform rotate-2 hover:rotate-0 transition-transform duration-200">
                  <span className="text-[8px] font-mono text-text-secondary uppercase block font-bold">Ad spend efficiency</span>
                  <p className="text-xl font-bold text-accent-green mt-1">
                    <AnimatedNumber value={4.8} suffix="x" decimals={1} />
                  </p>
                  <span className="text-[7px] text-text-secondary/80 block mt-0.5 font-sans leading-tight">Meta/Google Ads ROAS</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#152a22]/30 border border-border-color rounded-xl shadow-offset-sm transform rotate-1 hover:rotate-0 transition-transform duration-200">
                  <span className="text-[8px] font-mono text-text-secondary uppercase block font-bold">Lead Volume Stack</span>
                  <p className="text-xl font-bold text-text-primary mt-1">
                    <AnimatedNumber value={412} />
                  </p>
                  <span className="text-[7px] text-text-secondary/80 block mt-0.5 font-sans leading-tight">Qualified Leads/Month</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#152a22]/30 border border-border-color rounded-xl shadow-offset-sm transform -rotate-2 hover:rotate-0 transition-transform duration-200">
                  <span className="text-[8px] font-mono text-text-secondary uppercase block font-bold">Call/Chat triggers</span>
                  <p className="text-xl font-bold text-accent-orange mt-1">
                    <AnimatedNumber value={78} suffix="%" prefix="+" />
                  </p>
                  <span className="text-[7px] text-text-secondary/80 block mt-0.5 font-sans leading-tight">Increase in Enquiries</span>
                </div>
              </div>

              {/* Wide bar showing Rankings */}
              <div className="mt-4 p-3 bg-accent-green/5 dark:bg-[#152a22]/20 border-2 border-dashed border-accent-green/30 rounded-xl relative z-10 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[8px] font-mono uppercase text-accent-green font-bold">Google Maps Target</span>
                    <h5 className="text-xs font-bold text-text-primary mt-0.5">Top 3 Google Rankings</h5>
                  </div>
                  <span className="text-[7px] font-mono text-text-secondary/60">NCR Local Search</span>
                </div>
              </div>
            </div>

            {/* CASE STUDY CARD: Delhi Dental Clinic Folder */}
            <div className="bg-[#FEFCE8] dark:bg-[#181d13] border-4 border-[#EAB308] rounded-3xl p-6 relative shadow-offset transition-theme group hover:scale-[1.01] duration-300">
              <div className="absolute top-[-15px] left-8 bg-[#EAB308] text-white px-3 py-0.5 rounded-full font-mono text-[9px] uppercase tracking-wider font-bold shadow-sm flex items-center gap-1">
                <Paperclip size={10} />
                Client Case File #412
              </div>

              <div className="flex justify-between items-start mt-2">
                <div>
                  <span className="text-[8px] font-mono uppercase text-text-secondary/70">NCR Healthcare Segment</span>
                  <h3 className="font-serif italic font-bold text-2xl md:text-3xl text-text-primary mt-1">Delhi Dental Clinic</h3>
                </div>
                <div className="text-right">
                  <span className="text-[8px] font-mono uppercase text-accent-orange font-bold">Outcome</span>
                  <p className="text-sm font-bold text-accent-green font-mono tracking-tight">+675% Lead Growth</p>
                </div>
              </div>

              <p className="text-xs font-sans text-text-secondary leading-relaxed mt-4">
                Before partnering, this Connaught Place dental practice struggled with high customer acquisition costs and low organic query visibility. We rebuilt their landing page and local maps architecture.
              </p>

              {/* Before/After Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-6 border-t border-b border-border-color/10 py-4 font-sans">
                <div className="text-left bg-white/50 dark:bg-card-bg/20 p-2.5 rounded-xl border border-border-color/20">
                  <span className="text-[8px] font-mono uppercase text-text-secondary/60 block">Previous Inbound</span>
                  <span className="text-lg font-bold text-text-secondary/80 font-mono">12 leads / mo</span>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-text-secondary/40 h-full w-[13%]" />
                  </div>
                </div>
                <div className="text-left bg-accent-green/5 dark:bg-[#152a22]/30 p-2.5 rounded-xl border border-accent-green/20 relative overflow-hidden">
                  <span className="text-[8px] font-mono uppercase text-accent-green font-bold block">Current Inbound</span>
                  <span className="text-lg font-bold text-accent-green font-mono">93 leads / mo</span>
                  <div className="w-full bg-accent-green/10 h-1.5 rounded-full mt-2 overflow-hidden border border-accent-green/20">
                    <div className="bg-accent-green h-full w-[100%]" />
                  </div>
                  <div className="absolute right-1 bottom-1 text-[20px] text-accent-green/10 font-bold select-none">📈</div>
                </div>
              </div>

              {/* Animated Before/After SVG Line Chart */}
              <div className="mt-6">
                <span className="text-[8px] font-mono uppercase text-text-secondary/50 block mb-2 text-left">5-Month Inbound Leads Trend</span>
                <div className="h-28 w-full bg-white dark:bg-card-bg/20 rounded-xl border border-border-color/20 p-3 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-x-0 top-[25%] border-b border-dashed border-border-color/10" />
                  <div className="absolute inset-x-0 top-[50%] border-b border-dashed border-border-color/10" />
                  <div className="absolute inset-x-0 top-[75%] border-b border-dashed border-border-color/10" />

                  {/* SVG Chart paths */}
                  <svg className="absolute inset-0 w-full h-full p-3 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Before flatline (bottom) */}
                    <path d="M 0,87 L 25,87 L 50,87 L 75,87 L 100,87" fill="none" stroke="rgba(107,114,128,0.4)" strokeWidth="2.5" strokeDasharray="3 3" />
                    
                    {/* After upward curve */}
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      d="M 0,87 L 25,80 L 50,57 L 75,25 L 100,7" 
                      fill="none" 
                      stroke="#4A9C3A" 
                      strokeWidth="3.5" 
                      strokeLinecap="round"
                    />

                    {/* Chart points */}
                    <circle cx="0" cy="87" r="3" fill="#4A9C3A" />
                    <circle cx="25" cy="80" r="3" fill="#4A9C3A" />
                    <circle cx="50" cy="57" r="3" fill="#4A9C3A" />
                    <circle cx="75" cy="25" r="3" fill="#4A9C3A" />
                    <circle cx="100" cy="7" r="3.5" fill="#FF8A3D" stroke="#fff" strokeWidth="1" />
                  </svg>

                  {/* Labels on axis */}
                  <div className="flex justify-between items-end text-[7px] font-mono text-text-secondary/70 mt-auto pt-2 z-10">
                    <span>M1: 12</span>
                    <span>M2: 19</span>
                    <span>M3: 42</span>
                    <span>M4: 75</span>
                    <span className="text-accent-orange font-bold">M5: 93</span>
                  </div>
                </div>
              </div>

              {/* Hand-drawn note overlay on folder */}
              <div className="mt-4 font-handwriting text-[#EAB308] dark:text-[#fef08a] text-base text-left rotate-[-1deg] font-bold">
                * Replicated the exact map rank formula in Gurgaon branch // +400k reach.
              </div>
            </div>

          </div>

          {/* RIGHT CANVAS: Overlapping Chronological Marketing Journey (DESKTOP) */}
          <div className="hidden lg:flex lg:col-span-7 relative flex-col items-center gap-10 py-4 lg:pl-6">
            
            {/* Whiteboard outline background container indicator */}
            <div className="absolute inset-0 bg-[#EBF0EE]/30 dark:bg-[#152a22]/10 border-4 border-dashed border-border-color/20 rounded-3xl -z-10 pointer-events-none" />

            {journeyStages.map((stage, index) => {
              const isActive = activeStage === index;
              
              // alternate rotations for paper sheets effect
              const rotationClass = index % 3 === 0 
                ? 'hover:rotate-0 rotate-1' 
                : index % 3 === 1 
                  ? 'hover:rotate-0 -rotate-1' 
                  : 'hover:rotate-0 rotate-2';

              return (
                <div key={index} className="w-full relative flex flex-col items-center">
                  
                  {/* Marketing Journey Desk Card */}
                  <motion.div
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => setActiveStage(index)}
                    className={`w-full max-w-[500px] bg-card-bg border-2 border-border-color rounded-2xl p-5 shadow-offset transition-all duration-300 cursor-pointer relative overflow-hidden group select-none ${rotationClass} ${
                      isActive 
                        ? 'border-accent-green shadow-offset-green scale-[1.02] z-20' 
                        : 'hover:border-accent-orange z-10'
                    }`}
                  >
                    {/* Sticky tape representation on the card */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-200/50 dark:bg-yellow-950/20 border border-yellow-300/40 transform rotate-1 backdrop-blur-sm pointer-events-none" />

                    <div className="flex justify-between items-start border-b border-border-color/10 pb-3 mb-4">
                      <div>
                        <span className="text-[8px] font-mono uppercase tracking-widest text-accent-orange font-bold">
                          {stage.tag}
                        </span>
                        <h4 className="font-serif italic text-lg md:text-xl text-text-primary mt-1 font-bold">
                          {stage.title}
                        </h4>
                      </div>
                      <span className="font-mono text-[9px] text-text-secondary/50 font-bold uppercase mt-1">
                        STAGE 0{index + 1}
                      </span>
                    </div>

                    <p className="text-xs font-sans text-text-secondary leading-relaxed text-left">
                      {stage.desc}
                    </p>

                    {/* Stage Custom SVG/HTML illustration */}
                    <div className="my-4">
                      {stage.illustration}
                    </div>

                    {/* Strategist Strategy handwritten memo (Expands / shows on active click or hover) */}
                    <div className={`transition-all duration-300 overflow-hidden text-left border-t border-border-color/10 pt-3 mt-3 ${
                      isActive || hoveredCard === index ? 'max-h-36 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-[9px] font-mono text-text-secondary uppercase tracking-wider font-bold mb-1">
                        Strategist Note:
                      </p>
                      <p className="font-handwriting text-accent-emerald dark:text-[#a3d995] text-base leading-snug font-bold">
                        "{stage.note}"
                      </p>
                    </div>
                  </motion.div>

                  {/* Draw Arrow to the next stage (except last) */}
                  {index < journeyStages.length - 1 && (
                    <div className="my-1.5 text-accent-orange z-0">
                      <HandDrawnArrow direction="down" />
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* MOBILE/TABLET SLIDESHOW: Stepper/Slideshow for Mobile Viewports */}
          <div className="lg:hidden col-span-12 w-full flex flex-col items-center gap-6 py-4 px-2 relative">
            {/* Whiteboard outline background container indicator */}
            <div className="absolute inset-0 bg-[#EBF0EE]/30 dark:bg-[#152a22]/10 border-4 border-dashed border-border-color/20 rounded-3xl -z-10 pointer-events-none" />

            {/* Stepper Progress bar indicators */}
            <div className="w-full max-w-[500px] flex justify-between items-center px-4 relative mb-2 select-none">
              {/* Connector line behind steps */}
              <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-border-color/20 dark:bg-white/10 -translate-y-1/2 -z-10" />
              
              {journeyStages.map((_, index) => {
                const isCompleted = index < activeStage;
                const isActive = index === activeStage;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStage(index)}
                    className={`w-8 h-8 rounded-full border-2 font-mono text-xs font-bold flex items-center justify-center transition-all duration-300 relative cursor-pointer ${
                      isActive
                        ? 'bg-accent-green border-accent-green text-white scale-110 shadow-offset-sm shadow-offset-green'
                        : isCompleted
                        ? 'bg-accent-emerald border-accent-emerald text-white'
                        : 'bg-card-bg border-border-color/30 text-text-secondary hover:border-accent-orange'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            {/* Active stage Card wrapper */}
            <div className="w-full max-w-[500px] min-h-[420px] relative flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-card-bg border-2 border-accent-green shadow-offset-green rounded-2xl p-5 relative overflow-hidden group select-none"
                >
                  {/* Sticky tape representation on the card */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-200/50 dark:bg-yellow-950/20 border border-yellow-300/40 transform rotate-1 backdrop-blur-sm pointer-events-none" />

                  <div className="flex justify-between items-start border-b border-border-color/10 pb-3 mb-4">
                    <div>
                      <span className="text-[8px] font-mono uppercase tracking-widest text-accent-orange font-bold">
                        {journeyStages[activeStage].tag}
                      </span>
                      <h4 className="font-serif italic text-lg md:text-xl text-text-primary mt-1 font-bold">
                        {journeyStages[activeStage].title}
                      </h4>
                    </div>
                    <span className="font-mono text-[9px] text-text-secondary/50 font-bold uppercase mt-1">
                      STAGE 0{activeStage + 1}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-text-secondary leading-relaxed text-left">
                    {journeyStages[activeStage].desc}
                  </p>

                  {/* Stage Custom SVG/HTML illustration */}
                  <div className="my-4">
                    {journeyStages[activeStage].illustration}
                  </div>

                  {/* Strategist Strategy handwritten memo */}
                  <div className="text-left border-t border-border-color/10 pt-3 mt-3">
                    <p className="text-[9px] font-mono text-text-secondary uppercase tracking-wider font-bold mb-1">
                      Strategist Note:
                    </p>
                    <p className="font-handwriting text-accent-emerald dark:text-[#a3d995] text-base leading-snug font-bold">
                      "{journeyStages[activeStage].note}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex justify-between items-center w-full max-w-[500px] px-2 select-none">
              <button
                onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                disabled={activeStage === 0}
                className={`flex items-center gap-1 px-4 py-2.5 rounded-xl text-xs font-sans font-bold uppercase tracking-wider border-2 shadow-offset-sm transition-all duration-300 cursor-pointer ${
                  activeStage === 0
                    ? 'bg-page-bg-sec/45 border-border-color/15 text-text-secondary/30 pointer-events-none'
                    : 'bg-card-bg border-accent-emerald text-text-primary hover:border-accent-orange hover:bg-hover-highlight active:scale-95'
                }`}
              >
                <ChevronLeft size={14} /> Prev
              </button>
              
              <span className="text-xs font-mono font-bold text-text-secondary/60">
                {activeStage + 1} / {journeyStages.length}
              </span>

              <button
                onClick={() => setActiveStage((prev) => Math.min(journeyStages.length - 1, prev + 1))}
                disabled={activeStage === journeyStages.length - 1}
                className={`flex items-center gap-1 px-4 py-2.5 rounded-xl text-xs font-sans font-bold uppercase tracking-wider border-2 shadow-offset-sm transition-all duration-300 cursor-pointer ${
                  activeStage === journeyStages.length - 1
                    ? 'bg-page-bg-sec/45 border-border-color/15 text-text-secondary/30 pointer-events-none'
                    : 'bg-card-bg border-accent-emerald text-text-primary hover:border-accent-orange hover:bg-hover-highlight active:scale-95'
                }`}
              >
                Next <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
