import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Check, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  deliverable: string;
  avatar: string;
  rating: number;
  logo: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const list: Testimonial[] = [
    {
      quote: "KiwiClicks restructured our Meta ad creatives and rebuilt our product landers from scratch. Our ROAS climbed from a sluggish 1.8x to a profitable 4.8x. Their speed-optimized React setup cut our CPA by 38% in less than two months.",
      author: "Amit Sharma",
      role: "Founder & CEO",
      company: "Veda Organics",
      deliverable: "Meta Ads & Web Development",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      logo: "VEDA ORGANICS"
    },
    {
      quote: "We were draining our budget on junk Google Search leads. KiwiClicks refined our targeting to match high-intent buyers and deployed progressive validation forms. Our qualified lead volume surged by 180% in CP Delhi.",
      author: "Priya Kapoor",
      role: "Managing Director",
      company: "Apex Realty",
      deliverable: "Google Ads & Conversion SEO",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      logo: "APEX REALTY"
    },
    {
      quote: "The passwordless WhatsApp onboarding sync they built cut sign-up friction entirely. Our user signup conversion jumped from 41% to 84% while automating lead qualification database pings. True growth engineers.",
      author: "Rohan Mehta",
      role: "Co-Founder",
      company: "SkillForge India",
      deliverable: "AI Automation & Backend Sync",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      logo: "SKILLFORGE"
    }
  ];

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
      className="relative py-10 md:py-16 px-6 md:px-12 bg-page-bg text-text-primary transition-theme overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-start border-b border-border-color pb-6 mb-10 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              07 // CLIENT RESULTS
            </span>
            <h2 className="font-serif italic text-4xl text-text-primary mt-1 transition-theme">
              Client Testimonials
            </h2>
          </div>
          
          <span className="text-xs font-mono text-gold-accent font-bold uppercase tracking-widest bg-card-bg px-4 py-2 rounded-full border border-border-color transition-theme">
            0{currentIndex + 1} / 0{list.length}
          </span>
        </div>

        {/* Neobrutalist Sliding Board Card */}
        <div className="min-h-[300px] bg-card-bg border-4 border-accent-emerald rounded-3xl p-6 md:p-10 shadow-offset relative overflow-hidden transition-theme">
          {/* Subtle dots layout on whiteboard */}
          <div className="absolute inset-0 pointer-events-none opacity-5 select-none" style={{ backgroundImage: 'radial-gradient(var(--accent-emerald) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
              className="space-y-6 text-left relative z-10 max-w-4xl"
            >
              {/* Star Rating & Company Logo */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-accent-orange text-accent-orange" />
                  ))}
                </div>
                <span className="text-[10px] font-sans font-extrabold tracking-widest text-text-primary border-2 border-accent-emerald bg-page-bg px-3 py-1 rounded-md transition-theme">
                  {current.logo}
                </span>
              </div>

              <div className="text-accent-green/20 transition-theme">
                <Quote size={40} className="fill-current" />
              </div>
              
              <blockquote className="font-serif italic text-xl md:text-2xl text-text-primary leading-relaxed font-medium transition-theme">
                “{current.quote}”
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-border-color gap-4 transition-theme">
                {/* Author avatar & profile */}
                <div className="flex items-center gap-3.5">
                  <img 
                    src={current.avatar} 
                    alt={current.author} 
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent-emerald shadow-sm transition-theme"
                  />
                  <div>
                    <p className="font-sans font-bold text-sm text-text-primary leading-none transition-theme flex items-center gap-1.5">
                      {current.author}
                      <span className="inline-flex items-center justify-center text-white bg-accent-green w-4.5 h-4.5 rounded-full" title="Verified Client">
                        <Check size={11} className="stroke-[3]" />
                      </span>
                    </p>
                    <p className="text-[11px] font-sans text-text-secondary uppercase tracking-wider mt-1.5 transition-theme">
                      {current.role} — {current.company}
                    </p>
                  </div>
                </div>
                
                <span className="text-[10px] font-sans font-semibold text-accent-green uppercase bg-accent-green/10 border border-accent-green/20 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 w-max transition-theme">
                  <Check size={11} />
                  Project Focus: {current.deliverable}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel buttons */}
        <div className="flex justify-between items-center border-t border-border-color pt-6 mt-12 transition-theme">
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl border-2 border-accent-emerald bg-card-bg text-text-primary hover:bg-accent-orange hover:text-white transition-all shadow-offset-sm cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl border-2 border-accent-emerald bg-card-bg text-text-primary hover:bg-accent-orange hover:text-white transition-all shadow-offset-sm cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
          
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-secondary/40 transition-theme hidden sm:block">
            Proven commercial track record
          </span>
        </div>

      </div>
    </section>
  );
}
