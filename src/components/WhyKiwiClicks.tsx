import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ShieldCheck, Users, DollarSign, Globe, Check, Star } from 'lucide-react';

interface StageNode {
  id: string;
  title: string;
  icon: any;
  subTitle: string;
  desc: string;
  execution: string;
  illustration: () => React.ReactNode;
}

export default function WhyKiwiClicks() {
  const [activeStage, setActiveStage] = useState<string>('traffic');

  const stages: StageNode[] = [
    {
      id: 'traffic',
      title: 'Traffic',
      subTitle: 'High-Intent Inbound Interest',
      icon: Globe,
      desc: 'Bypassing generic vanity clicks. We route high-intent search query traffic and targeted social demographics directly to your assets.',
      execution: 'Entity-based Semantic SEO, intent-focused Google Search Ads, and creative Meta Ads audience stacks.',
      illustration: () => (
        <div className="w-full h-full min-h-[220px] bg-card-bg rounded-2xl border-2 border-accent-emerald p-5 flex flex-col justify-between shadow-offset transition-theme">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-mono uppercase text-accent-orange bg-accent-orange/10 px-2.5 py-0.5 rounded-full font-bold border border-accent-orange/20">Live Traffic Inbound</span>
            <span className="text-[9px] font-mono text-text-secondary/60">Active now</span>
          </div>
          <div className="space-y-2.5 my-4">
            <div className="flex items-center justify-between text-xs border-b border-border-color pb-1.5 transition-theme">
              <span className="font-mono text-text-secondary/80">google.co.in / organic</span>
              <span className="font-bold text-accent-green">+312%</span>
            </div>
            <div className="flex items-center justify-between text-xs border-b border-border-color pb-1.5 transition-theme">
              <span className="font-mono text-text-secondary/80">google_ads / cp_search</span>
              <span className="font-bold text-accent-green">+140%</span>
            </div>
            <div className="flex items-center justify-between text-xs border-b border-border-color pb-1.5 transition-theme">
              <span className="font-mono text-text-secondary/80">meta_campaigns / scaling</span>
              <span className="font-bold text-accent-green">+85%</span>
            </div>
          </div>
          <div className="w-full bg-accent-emerald/10 h-1.5 rounded-full overflow-hidden border border-accent-emerald/20">
            <motion.div 
              animate={{ x: [-100, 300] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-24 h-full bg-accent-green" 
            />
          </div>
        </div>
      )
    },
    {
      id: 'attention',
      title: 'Attention',
      subTitle: 'The 2-Second Hook Strategy',
      icon: Eye,
      desc: 'Interrupting the scroll pattern. We draft striking editorial headlines, high-retention hooks, and direct visual pacing that locks in user attention.',
      execution: 'Paced video scripting, interactive scroll-stoppers, and sub-1s initial page load states.',
      illustration: () => (
        <div className="w-full h-full min-h-[220px] bg-card-bg rounded-2xl border-2 border-accent-orange p-5 flex flex-col justify-between shadow-offset-orange transition-theme relative overflow-hidden">
          <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
          <div className="w-full border-2 border-accent-emerald rounded-xl p-3 bg-page-bg text-left relative transition-theme">
            <div className="h-1.5 bg-accent-green w-3/4 rounded-full mb-3" />
            <p className="font-serif italic text-sm text-text-primary mb-2 transition-theme">We Scale Organic Lead Volume</p>
            <p className="text-[10px] text-text-secondary transition-theme">The Delhi CP growth partners optimizing ad-spend...</p>
            <div className="absolute right-3 bottom-3 w-6 h-6 rounded-full bg-accent-orange flex items-center justify-center text-white text-[10px] font-bold">
              98%
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 bg-border-color h-1.5 rounded-full overflow-hidden transition-theme">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "98%" }} 
                transition={{ duration: 1.5 }}
                className="h-full bg-accent-green" 
              />
            </div>
            <span className="text-[10px] font-mono text-accent-green font-bold">HOOK RATE</span>
          </div>
        </div>
      )
    },
    {
      id: 'trust',
      title: 'Trust',
      subTitle: 'De-risking the Acquisition Layer',
      icon: ShieldCheck,
      desc: 'Removing buyer skepticism. We anchor your value proposition with deep social proof blocks, verified client metrics, and transparent outcomes.',
      execution: 'SSL secure tags, live reviews, video case interview placeholders, and absolute conversion transparency.',
      illustration: () => (
        <div className="w-full h-full min-h-[220px] bg-card-bg rounded-2xl border-2 border-accent-green p-5 flex flex-col justify-between shadow-offset-green transition-theme">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#4CAF50]/15 flex items-center justify-center text-[#4CAF50]">
              <ShieldCheck size={14} />
            </div>
            <span className="text-[10px] font-sans font-bold text-text-primary tracking-wide transition-theme">TRUST SIGNALS VERIFIED</span>
          </div>
          <div className="space-y-2 my-3 text-left">
            <div className="flex gap-2 items-center text-[10px] text-text-secondary font-medium transition-theme">
              <Check size={12} className="text-accent-green" /> SSL Encrypted CP Database
            </div>
            <div className="flex gap-2 items-center text-[10px] text-text-secondary font-medium transition-theme">
              <Check size={12} className="text-accent-green" /> Speed Benchmarks Certified (&lt;1.2s)
            </div>
            <div className="flex gap-2 items-center text-[10px] text-text-secondary font-medium transition-theme">
              <Check size={12} className="text-accent-green" /> 100% Real Testimonials Linked
            </div>
          </div>
          <div className="text-[10px] text-white font-semibold bg-accent-emerald px-3 py-1 rounded-lg border-2 border-accent-emerald w-max self-end transition-theme shadow-offset-sm">
            Secure Partnership
          </div>
        </div>
      )
    },
    {
      id: 'lead',
      title: 'Lead',
      subTitle: 'Frictionless Customer Capture',
      icon: Users,
      desc: 'Turning visitor traffic into clear discovery calls. We deploy smart progressive forms and direct WhatsApp triggers to shorten the contact path.',
      execution: 'Progressive field optimization, instant WhatsApp chat CTA routing, and automated calendar scheduling.',
      illustration: () => (
        <div className="w-full h-full min-h-[220px] bg-card-bg rounded-2xl border-2 border-accent-emerald p-5 flex flex-col justify-between shadow-offset transition-theme">
          <div className="h-6 w-1/3 bg-page-bg-sec rounded-md border border-border-color transition-theme" />
          <div className="space-y-2 my-2">
            <div className="w-full h-7 rounded-lg bg-page-bg border border-border-color flex items-center px-2 text-[9px] text-text-secondary/70 transition-theme font-medium">Your Name</div>
            <div className="w-full h-7 rounded-lg bg-page-bg border border-border-color flex items-center px-2 text-[9px] text-text-secondary/70 transition-theme font-medium">Work Email</div>
          </div>
          <button className="w-full h-9 rounded-lg bg-accent-green text-white font-bold text-[10px] tracking-wider uppercase border border-accent-green hover:bg-accent-hover transition-colors shadow-offset-sm flex items-center justify-center gap-1.5 cursor-pointer">
            Secure Strategy Session
          </button>
        </div>
      )
    },
    {
      id: 'customer',
      title: 'Customer',
      subTitle: 'Compound Net Revenue Systems',
      icon: DollarSign,
      desc: 'Converting leads into real cash flow. Leads are automatically synced and qualified inside CRMs within 3 minutes of submission.',
      execution: 'HubSpot/Salesforce automation triggers, active sales notification pings, and customer lookalike optimization.',
      illustration: () => (
        <div className="w-full h-full min-h-[220px] bg-card-bg rounded-2xl border-2 border-accent-orange p-5 flex flex-col justify-between shadow-offset-orange transition-theme relative overflow-hidden">
          <div className="flex justify-between items-start text-left">
            <div>
              <span className="text-[9px] font-sans font-bold text-text-secondary transition-theme">NET VALUE STACK</span>
              <p className="text-xl font-sans font-bold text-text-primary transition-theme">5.8x ROI</p>
            </div>
            <span className="text-[10px] font-sans font-bold text-accent-green bg-accent-green/10 border border-accent-green/20 px-2 py-0.5 rounded-full transition-theme">Qualified</span>
          </div>
          <div className="h-16 flex items-end gap-2.5 my-2">
            <div className="w-full h-[30%] bg-page-bg-sec border border-border-color rounded-t-sm transition-theme" />
            <div className="w-full h-[45%] bg-page-bg-sec border border-border-color rounded-t-sm transition-theme" />
            <div className="w-full h-[60%] bg-page-bg-sec border border-border-color rounded-t-sm transition-theme" />
            <div className="w-full h-[85%] bg-accent-green rounded-t-sm" />
          </div>
          <span className="text-[8px] font-mono text-text-secondary/70 transition-theme text-left block">ROI multiplication loop parsed</span>
        </div>
      )
    }
  ];

  const currentStageData = stages.find(s => s.id === activeStage)!;
  const ActiveIllustration = currentStageData.illustration;

  return (
    <section 
      id="about" 
      className="relative py-16 md:py-24 px-6 md:px-12 bg-page-bg-sec text-text-primary transition-theme"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              02 // STRATEGY
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-text-primary mt-2 transition-theme">
              Why KiwiClicks
            </h2>
          </div>
          <div className="max-w-md text-left">
            <h3 className="text-sm font-sans font-bold text-text-primary mb-2 transition-theme flex items-center gap-1.5">
              <Star size={14} className="text-accent-orange fill-accent-orange" />
              Whiteboard-Proven Growth Framework
            </h3>
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              We reject typical SaaS visual templates. We sketch, analyze, and build human marketing channels modeled around verified digital behaviors.
            </p>
          </div>
        </div>

        {/* Whiteboard Conversion Pipeline Flowchart */}
        <div className="mb-16 bg-card-bg border-4 border-accent-emerald rounded-3xl p-6 md:p-8 shadow-offset transition-theme relative select-none">
          <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'radial-gradient(var(--accent-emerald) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 relative z-10">
            {stages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isActive = activeStage === stage.id;
              
              return (
                <div key={stage.id} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                  {/* Neobrutalist Stage Node */}
                  <button
                    onClick={() => setActiveStage(stage.id)}
                    className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-300 w-full md:w-36 text-center cursor-pointer relative group ${
                      isActive
                        ? 'bg-accent-emerald border-accent-emerald text-white font-bold scale-105 shadow-offset-green z-10'
                        : 'bg-page-bg border-border-color hover:border-accent-orange text-text-primary shadow-offset-sm'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center mb-2 transition-colors duration-300 ${
                      isActive ? 'bg-white/20 text-accent-orange' : 'bg-accent-green/10 text-accent-green'
                    }`}>
                      <StageIcon size={16} />
                    </div>
                    <span className="text-[9px] font-mono opacity-50 block mb-0.5">STEP 0{idx + 1}</span>
                    <span className="text-xs font-sans uppercase tracking-wider font-bold">{stage.title}</span>
                  </button>

                  {/* Connecting marker Arrow (SVG) */}
                  {idx < stages.length - 1 && (
                    <div className="flex items-center justify-center my-2 md:my-0 md:mx-4 text-accent-orange rotate-90 md:rotate-0">
                      <svg width="45" height="15" viewBox="0 0 45 15" fill="none" className="w-12 h-4 transition-transform duration-500 group-hover:scale-105">
                        <path d="M2,7.5 C15,13.5 30,13.5 41,7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M33,3 L42,7.5 L34,12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Illustration Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex flex-col justify-center"
              >
                <ActiveIllustration />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Description Column */}
          <div className="lg:col-span-7">
            <div className="bg-card-bg border-4 border-accent-emerald p-8 rounded-3xl relative shadow-offset min-h-[300px] h-full flex flex-col justify-between transition-theme">
              
              {/* Background badge icon */}
              <div className="absolute right-6 top-6 text-7xl font-serif text-accent-green/5 select-none pointer-events-none font-bold">
                ✦
              </div>

              <div>
                <span className="text-[9px] font-sans font-bold tracking-widest text-accent-green uppercase transition-theme">
                  Whiteboard Blueprint Stage // {currentStageData.title.toUpperCase()}
                </span>
                
                <h3 className="font-serif italic text-3xl md:text-4xl text-text-primary mt-4 leading-none transition-theme">
                  {currentStageData.title}
                </h3>
                <p className="text-xs font-sans uppercase tracking-widest text-accent-orange mt-2 font-bold transition-theme">
                  {currentStageData.subTitle}
                </p>

                <p className="text-sm font-sans text-text-secondary mt-6 leading-relaxed transition-theme font-medium">
                  {currentStageData.desc}
                </p>
              </div>

              <div className="mt-8 border-t border-border-color pt-6 transition-theme">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-secondary/40 mb-2 transition-theme">
                  Tactical Implementation:
                </h4>
                <p className="text-xs font-sans font-medium text-accent-green bg-accent-green/5 p-4 rounded-xl border-2 border-accent-green/20 italic leading-relaxed transition-theme">
                  "{currentStageData.execution}"
                </p>
                {/* Handwriting sticky note details */}
                <p className="font-handwriting text-accent-orange text-lg rotate-1 mt-4 tracking-wide font-bold">
                  * Live Delhi CP verification audit parameters loaded successfully.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
