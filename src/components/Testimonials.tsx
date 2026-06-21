import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Check } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  companySlug: string;
  rating: number;
  logo: string;
  deliverable: string;
  avatar: string;
}

export default function Testimonials() {
  const list: Testimonial[] = [
    {
      id: 1,
      quote: 'KiwiClicks completely refactored our acquisition flows. Their Next.js edge landing layouts combined with automated CRM sync pipelines cut our manual qualification times in half while scaling Meta ad conversions.',
      author: 'Sameer Sen',
      role: 'Marketing Lead',
      company: 'Veda Labs',
      companySlug: 'veda-labs',
      rating: 5,
      logo: 'VEDA LABS',
      deliverable: 'Paid Acquisition & Integrations',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      id: 2,
      quote: 'We spent months trying to rank for highly competitive enterprise terms with zero luck. KiwiClicks engineered our topical organic search maps, placing us at the top of Google searches within weeks.',
      author: 'Priya Sharma',
      role: 'Operations Director',
      company: 'Apex Systems',
      companySlug: 'apex-systems',
      rating: 5,
      logo: 'APEX SYS',
      deliverable: 'Topical SEO Stack',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      id: 3,
      quote: 'Our mobile user drop-offs were leaking revenue. KiwiClicks migrated our platforms to speed-optimized React static interfaces, resulting in a sub-1.0s loading speed and an immediate conversion spike.',
      author: 'Arjun Mehta',
      role: 'Engineering Lead',
      company: 'SkillForge',
      companySlug: 'skillforge',
      rating: 5,
      logo: 'SKILLFORGE',
      deliverable: 'Experience Web Engineering',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const current = list[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="relative py-20 md:py-32 px-6 md:px-12 bg-page-bg text-text-primary transition-theme border-b border-border-color overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex justify-between items-end border-b border-border-color pb-8 mb-16 transition-theme">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent-green font-bold uppercase">
              07 // GLOBAL TRUST
            </span>
            <h2 className="font-sans font-extrabold text-4xl text-text-primary mt-3 uppercase transition-theme">
              Executive Feedback
            </h2>
          </div>
          
          <span className="text-xs font-mono text-text-secondary font-bold uppercase tracking-widest bg-page-bg-sec border border-border-color px-4 py-2 rounded-full transition-theme">
            0{currentIndex + 1} / 0{list.length}
          </span>
        </div>

        {/* Sliding Panel */}
        <div className="min-h-[300px] bg-card-bg backdrop-blur-md border border-border-color rounded-3xl p-6 md:p-12 shadow-xl relative overflow-hidden transition-theme">
          
          {/* Subtle grid accent inside box */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.01] select-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 text-left relative z-10 max-w-4xl"
            >
              {/* Star Rating & Logo */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent-green text-accent-green" />
                  ))}
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-text-secondary border border-border-color bg-page-bg px-3.5 py-1.5 rounded-full transition-theme">
                  {current.logo}
                </span>
              </div>

              <div className="text-accent-green/20">
                <Quote size={32} className="fill-current" />
              </div>
              
              <blockquote className="font-sans text-lg md:text-2xl text-text-primary leading-relaxed font-bold transition-theme">
                “{current.quote}”
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-border-color gap-4 transition-theme">
                
                {/* Author profile */}
                <div className="flex items-center gap-3.5">
                  <img 
                    src={current.avatar} 
                    alt={current.author} 
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border border-border-color shadow-sm transition-theme"
                  />
                  <div>
                    <p className="font-sans font-bold text-sm text-text-primary leading-none flex items-center gap-1.5 transition-theme">
                      {current.author}
                      <span className="inline-flex items-center justify-center text-slate-950 bg-accent-green w-4.5 h-4.5 rounded-full" title="Verified Stakeholder">
                        <Check size={11} className="stroke-[3]" />
                      </span>
                    </p>
                    <p className="text-[10px] font-mono text-text-secondary opacity-70 uppercase tracking-widest mt-1.5 transition-theme">
                      {current.role} — {current.company}
                    </p>
                  </div>
                </div>
                
                <span className="text-[9px] font-mono font-bold text-accent-green uppercase bg-accent-green/5 border border-accent-green/20 px-4 py-2 rounded-full flex items-center gap-1.5 w-max">
                  <Check size={11} />
                  Engine Layer: {current.deliverable}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center border-t border-border-color pt-6 mt-12 transition-theme">
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-border-color bg-page-bg-sec text-text-secondary hover:text-text-primary hover:border-text-secondary/30 hover:bg-hover-highlight transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-border-color bg-page-bg-sec text-text-secondary hover:text-text-primary hover:border-text-secondary/30 hover:bg-hover-highlight transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
          
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-secondary opacity-60 transition-theme">
            Validated Customer Case Database
          </span>
        </div>

      </div>
    </section>
  );
}
