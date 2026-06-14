import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Check, Star, Play } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  deliverable: string;
  avatar: string;
  rating: number;
  logo: string;
  videoThumbnail: string;
  videoDuration: string;
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
      logo: "VEDA ORGANICS",
      videoThumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=450&q=80",
      videoDuration: "1:45"
    },
    {
      quote: "We were draining our budget on junk Google Search leads. KiwiClicks refined our targeting to match high-intent buyers and deployed progressive validation forms. Our qualified lead volume surged by 180% in CP Delhi.",
      author: "Priya Kapoor",
      role: "Managing Director",
      company: "Apex Realty",
      deliverable: "Google Ads & Conversion SEO",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      logo: "APEX REALTY",
      videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=450&q=80",
      videoDuration: "2:14"
    },
    {
      quote: "The passwordless WhatsApp onboarding sync they built cut sign-up friction entirely. Our user signup conversion jumped from 41% to 84% while automating lead qualification database pings. True growth engineers.",
      author: "Rohan Mehta",
      role: "Co-Founder",
      company: "SkillForge India",
      deliverable: "AI Automation & Backend Sync",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      logo: "SKILLFORGE",
      videoThumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=450&q=80",
      videoDuration: "1:58"
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
      className="relative py-16 md:py-24 px-6 md:px-12 bg-page-bg text-text-primary transition-theme overflow-hidden"
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
        <div className="min-h-[420px] bg-card-bg border-4 border-accent-emerald rounded-3xl p-6 md:p-10 shadow-offset relative overflow-hidden transition-theme">
          {/* Subtle dots layout on whiteboard */}
          <div className="absolute inset-0 pointer-events-none opacity-5 select-none" style={{ backgroundImage: 'radial-gradient(var(--accent-emerald) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left relative z-10"
            >
              
              {/* Left Column: Quote Details */}
              <div className="lg:col-span-7 space-y-6">
                
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
                      <p className="font-sans font-bold text-sm text-text-primary leading-none transition-theme">
                        {current.author}
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
              </div>

              {/* Right Column: Video Testimonial Placeholder Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[4/3] rounded-3xl overflow-hidden shadow-offset-sm border-2 border-accent-emerald bg-page-bg-sec group cursor-pointer transition-theme">
                  <img 
                    src={current.videoThumbnail} 
                    alt={`Video feedback of ${current.author}`} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700 ease-in-out"
                  />
                  
                  {/* Dark mask overlay */}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500" />

                  {/* Pulsing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent-orange text-white flex items-center justify-center shadow-2xl border-2 border-accent-emerald transform group-hover:scale-110 transition-transform duration-500 relative">
                      <Play size={18} className="fill-current translate-x-0.5" />
                      <span className="absolute inset-0 rounded-full border border-accent-orange animate-ping opacity-60 pointer-events-none" />
                    </div>
                  </div>

                  {/* Top Badge: Duration */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-mono text-white font-bold tracking-wider">
                    {current.videoDuration}
                  </div>

                  {/* Bottom Text Indicator */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                    <p className="text-[10px] font-sans font-bold uppercase tracking-wider leading-none text-white/95 drop-shadow">
                      Watch Interview Case Study
                    </p>
                    <p className="text-[9px] font-sans text-white/70 mt-1 drop-shadow">
                      {current.author} shares the story
                    </p>
                  </div>
                </div>
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
