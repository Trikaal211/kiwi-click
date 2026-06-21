import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Code, Cpu, LineChart, CheckCircle2 
} from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: 'Audit & Blueprinting',
      duration: 'Week 1',
      icon: TrendingUp,
      focus: 'Crawlability & Intent Mapping',
      description: 'We run deep technical crawl scans and organic search audits to discover commercial buyer intent clusters, setting up custom velocity blueprints.',
      deliverables: [
        'Topical Search Mapping',
        'Crawl Performance Scorecards',
        'Competitor Ad Infiltration Report',
        'Velocity Schema Structure'
      ]
    },
    {
      title: 'Edge Deployment',
      duration: 'Weeks 2-3',
      icon: Code,
      focus: 'Edge Stacks & Speed',
      description: 'Our engineers build Next.js edge landing modules and optimized CMS configurations. Built to load in under 1.0 seconds and convert immediately.',
      deliverables: [
        'Next.js High-Conversion Headless Stack',
        'Serverless Webhook Handlers',
        'Plausible Tracking Layers',
        'Speed Indexing Verification'
      ]
    },
    {
      title: 'AI Inbound Orchestration',
      duration: 'Weeks 4-5',
      icon: Cpu,
      focus: 'Automation & Chatbots',
      description: 'We build autonomous qualifiers using custom LLM agents and API hooks, capturing leads 24/7 and qualifying them instantly.',
      deliverables: [
        'LLM Qualification Scripting',
        'Instant WhatsApp API Workflows',
        'Secure CRM Database Synch',
        'Lead Attribution Engine'
      ]
    },
    {
      title: 'Attribution & Tuning',
      duration: 'Continuous',
      icon: LineChart,
      focus: 'ROAS Verification & Growth',
      description: 'Continuous optimization cycles based on clear click-to-invoice attribution. Adjusting acquisition ads, keyword targeting, and pipeline speeds.',
      deliverables: [
        'Compound ROAS Attributed Maps',
        'Daily Bid Adjuster Tweaks',
        'Topical Content Backlink Modules',
        'Conversion Drop-Off Optimizations'
      ]
    }
  ];

  return (
    <section 
      id="process" 
      className="relative py-20 md:py-32 px-6 md:px-12 bg-page-bg text-text-primary transition-theme border-b border-border-color"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-6 transition-theme">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent-green font-bold uppercase">
              04 // STRUCTURED ROADMAP
            </span>
            <h2 className="font-sans font-extrabold text-4xl md:text-6xl text-text-primary mt-3 uppercase transition-theme">
              Our Process
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              Scale is engineered, not guessed. We navigate every brand through a clear four-phase deployment lifecycle.
            </p>
          </div>
        </div>

        {/* Process Timeline Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Step Selectors */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-accent-green border-accent-green text-slate-950 font-bold shadow-[0_10px_25px_rgba(0,255,102,0.2)]'
                      : 'bg-card-bg/40 border-border-color text-text-primary hover:border-text-secondary/35'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono opacity-50">0{idx + 1}</span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors ${isActive ? 'bg-slate-950/20 border-slate-950/25 text-slate-950' : 'bg-page-bg-sec border-border-color text-accent-green'}`}>
                      <StepIcon size={16} />
                    </div>
                    <div className="text-left">
                      <span className="text-sm font-sans font-bold tracking-wider uppercase">{step.title}</span>
                      <p className={`text-[9px] font-mono tracking-widest uppercase mt-0.5 ${isActive ? 'text-slate-900/80' : 'text-text-secondary'}`}>{step.duration}</p>
                    </div>
                  </div>
                  <span className="text-xs opacity-60">➔</span>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Step Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-card-bg backdrop-blur-md border border-border-color p-8 md:p-10 rounded-3xl shadow-xl min-h-[350px] flex flex-col justify-between transition-theme"
              >
                <div>
                  <div className="flex justify-between items-center border-b border-border-color pb-4 mb-6 transition-theme">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-accent-green uppercase">
                      DELIVERABLES PHASE 0{activeStep + 1}
                    </span>
                    <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase">
                      Focus: {steps[activeStep].focus}
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-2xl text-text-primary mb-4 text-left transition-theme">
                    {steps[activeStep].title} Stage Deliverables
                  </h3>

                  <p className="text-xs font-sans text-text-secondary leading-relaxed mb-6 text-left font-medium transition-theme">
                    {steps[activeStep].description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    {steps[activeStep].deliverables.map((del, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs font-sans text-text-primary leading-tight transition-theme">
                        <CheckCircle2 size={13} className="text-accent-green mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-border-color pt-4 text-left transition-theme">
                  <span className="text-[9px] font-mono text-text-secondary opacity-60 uppercase tracking-widest font-bold">
                    Phase Outcome // Enterprise Acquisition Loop
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
