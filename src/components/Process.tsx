import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, FileText, Settings, Rocket, CheckCircle } from 'lucide-react';

interface ProcessStep {
  phase: string;
  title: string;
  icon: any;
  duration: string;
  description: string;
  deliverables: string[];
  focus: string;
}

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      phase: '01',
      title: 'Discover',
      icon: Compass,
      duration: 'Week 1',
      description: 'We conduct deep audits of your search footprint, ad performance, competitor funnels, and customer behavior trends to locate growth opportunities.',
      deliverables: [
        'Crawl budget & technical SEO audit',
        'Competitor auction intelligence report',
        'Historical ad account analysis',
        'Conversion friction mapping'
      ],
      focus: 'Data gathering & base alignment'
    },
    {
      phase: '02',
      title: 'Strategize',
      icon: FileText,
      duration: 'Weeks 2-3',
      description: 'We draft a customized growth blueprint, mapping out exact search keywords, creative ad formats, conversion copywriting hooks, and automation funnels.',
      deliverables: [
        'Semantic keyword map & content plan',
        'Direct-response creative script briefs',
        'CRM routing & automation mapping',
        'Google & Meta campaign structure map'
      ],
      focus: 'Architecting the funnel blueprint'
    },
    {
      phase: '03',
      title: 'Execute',
      icon: Settings,
      duration: 'Weeks 4-6',
      description: 'We code speed-optimized landing pages, configure campaign targeting, launch creative assets, and deploy AI CRM integrations.',
      deliverables: [
        'React/Vite landing pages code deploy',
        'Tracking pixel & GTM scripts setup',
        'Meta & Google Ads account structures live',
        'CRM lead sync integrations tested'
      ],
      focus: 'Assets deployment & pipeline validation'
    },
    {
      phase: '04',
      title: 'Scale',
      icon: Rocket,
      duration: 'Ongoing',
      description: 'We prune negative targets, perform A/B conversion tests, optimize ad spend allocation, and scale lookalike segments to compound growth.',
      deliverables: [
        'A/B headline & hook variant testing',
        'Search term keyword pruning schedules',
        'Ad spend budget scaling allocation',
        'Monthly ROI and performance audit logs'
      ],
      focus: 'Funnel optimization & compounding ROAS'
    }
  ];

  return (
    <section 
      id="process" 
      className="relative py-24 md:py-36 px-6 md:px-12 bg-page-bg-sec text-text-primary transition-theme"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              04 // JOURNEY
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-text-primary mt-2 transition-theme">
              Our Process
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm font-sans font-light text-text-secondary leading-relaxed transition-theme">
              Growth is structured. We guide clients through a four-phase journey designed to eliminate guesswork, build solid trust, and scale campaigns.
            </p>
          </div>
        </div>

        {/* Process Timeline Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive Step Selectors */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                    isActive 
                      ? 'bg-text-primary border-text-primary text-page-bg shadow-lg translate-x-2'
                      : 'bg-card-bg border-border-color text-text-primary hover:border-accent-green/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono opacity-50">0{idx + 1}</span>
                    <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green group-hover:text-gold-accent transition-colors">
                      <StepIcon size={18} className={isActive ? 'text-gold-accent' : 'text-accent-green'} />
                    </div>
                    <div className="text-left">
                      <span className="text-sm font-sans font-bold tracking-widest uppercase">{step.title}</span>
                      <p className="text-[10px] font-sans font-medium uppercase tracking-wider text-text-secondary/60 mt-0.5">{step.duration}</p>
                    </div>
                  </div>
                  <span className="text-xs font-serif italic opacity-60">➔</span>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Step Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="glass dark:dark-glass p-8 md:p-10 rounded-3xl border border-border-color/40 shadow-xl min-h-[350px] flex flex-col justify-between transition-theme"
              >
                <div>
                  <div className="flex justify-between items-center border-b border-border-color pb-4 mb-6 transition-theme">
                    <span className="text-[9px] font-sans font-bold tracking-widest text-accent-green uppercase transition-theme">
                      DELIVERABLES PHASE 0{activeStep + 1}
                    </span>
                    <span className="text-xs font-mono text-gold-accent font-bold uppercase transition-theme">
                      Focus: {steps[activeStep].focus}
                    </span>
                  </div>

                  <h3 className="font-serif italic text-3xl text-text-primary leading-none mb-4 transition-theme">
                    {steps[activeStep].title} Deliverables
                  </h3>

                  <p className="text-sm font-sans font-light text-text-secondary leading-relaxed mb-6 transition-theme">
                    {steps[activeStep].description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {steps[activeStep].deliverables.map((del, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs font-sans font-light text-text-secondary transition-theme leading-tight">
                        <CheckCircle size={13} className="text-accent-green mt-0.5 shrink-0 transition-theme" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-border-color pt-4 text-left transition-theme">
                  <span className="text-[9px] font-sans text-text-secondary/40 uppercase tracking-widest transition-theme">
                    Phase Outcome // Delhi's Growth Partner
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
