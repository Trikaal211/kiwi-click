import { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isMobile, setIsMobile] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasManuallyClosed, setHasManuallyClosed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const smartMessages = [
    "Your Digital Zimmedari Ab Hamari.",
    "Need a Website?",
    "SEO Ki Tension Chhodo.",
    "Ads Hum Sambhalenge.",
    "Let's Grow Your Business.",
    "Need More Leads?"
  ];

  // Fetch from env or fallbacks
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '916230078396';
  const whatsappMsg = import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hi KiwiClicks 👋 I want to discuss my business growth.';
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Footer overlap prevention & scroll monitoring
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPos = window.innerHeight + window.scrollY;
      // Offset if closer than 180px to page bottom
      if (totalHeight - scrollPos < 180) {
        setIsNearFooter(true);
      } else {
        setIsNearFooter(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-expand after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasManuallyClosed) {
        setIsExpanded(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasManuallyClosed]);

  // Auto-collapse after 12 seconds if not hovered
  useEffect(() => {
    if (isExpanded && !isHovered) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
      }, 12000);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, isHovered]);

  // Delayed first-visit tooltip (after 6 seconds, visible for 8 seconds)
  useEffect(() => {
    const hasSeen = localStorage.getItem('hasSeenWhatsAppTooltip');
    if (!hasSeen) {
      const showTimer = setTimeout(() => {
        setShowTooltip(true);
      }, 6000);

      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
        localStorage.setItem('hasSeenWhatsAppTooltip', 'true');
      }, 14000); // 6s delay + 8s duration

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  // Rotate smart messages every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % smartMessages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const closeExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsExpanded(false);
    setHasManuallyClosed(true);
  };

  const closeTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setShowTooltip(false);
    localStorage.setItem('hasSeenWhatsAppTooltip', 'true');
  };

  const getTransform = () => {
    if (isMobile) {
      return isNearFooter ? 'translateY(-100px)' : 'translateY(0)';
    } else {
      return isNearFooter ? 'translateY(calc(-50% - 110px))' : 'translateY(-50%)';
    }
  };

  const isPanelOpen = (isExpanded || isHovered) && !hasManuallyClosed;

  return (
    <div
      className="fixed z-40 right-6 bottom-6 md:bottom-auto md:top-[70%] select-none transition-all duration-300 ease-out"
      style={{
        transform: getTransform(),
        transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease'
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        if (hasManuallyClosed) {
          setHasManuallyClosed(false);
        }
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* 1. First-Visit Tooltip */}
      {showTooltip && !isPanelOpen && (
        <div className="absolute bottom-16 right-0 md:bottom-auto md:top-0 md:-translate-y-full md:mb-3 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-3.5 shadow-2xl animate-float text-left z-50">
          <button 
            onClick={closeTooltip} 
            className="absolute top-2 right-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            aria-label="Close tooltip"
          >
            <X size={10} />
          </button>
          <div className="flex gap-2">
            <span className="text-base">👋</span>
            <div>
              <p className="text-[11px] font-sans font-bold text-text-primary leading-tight">Need a website?</p>
              <p className="text-[9.5px] font-sans text-text-secondary leading-normal mt-0.5 font-medium">Let's chat on WhatsApp.</p>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute bottom-0 right-7 translate-y-1/2 rotate-45 w-2 h-2 bg-white dark:bg-slate-900 border-r border-b border-slate-200 dark:border-white/10" />
        </div>
      )}

      {/* 2. Expanded Glass Panel Container */}
      <div 
        className={`absolute bottom-0 right-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-[310px] bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] shadow-2xl dark:shadow-accent-green/5 text-text-primary overflow-hidden transition-all duration-300 ease-out origin-bottom-right md:origin-right ${
          isPanelOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
        }`}
        style={{
          transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Decorative ambient top glow */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-green to-transparent" />
        
        {/* Header block */}
        <div className="p-4.5 pb-3.5 border-b border-slate-200 dark:border-white/5 relative bg-slate-500/[0.02] text-left">
          <button
            onClick={closeExpanded}
            className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-slate-200/50 dark:bg-white/5 flex items-center justify-center text-text-secondary hover:text-text-primary hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Close chat panel"
          >
            <X size={11} />
          </button>
          
          <span className="text-[9px] font-mono tracking-widest text-accent-green font-bold uppercase">Need Help?</span>
          <h4 className="font-sans font-black text-base text-text-primary mt-0.5 leading-none transition-theme">
            💬 Chat with KiwiClicks
          </h4>
        </div>

        {/* Messaging Area */}
        <div className="p-4.5 text-left space-y-4">
          <div className="bg-slate-500/[0.04] dark:bg-white/5 p-3 rounded-xl border border-slate-200/50 dark:border-white/5 min-h-[50px] flex items-center transition-theme">
            {/* Animated Smart Message Rotator */}
            <p className="text-[11.5px] font-sans font-semibold text-text-primary tracking-tight transition-theme animate-fadeIn leading-relaxed w-full">
              {smartMessages[messageIndex]}
            </p>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-text-secondary transition-theme">
            <span>Response Velocity</span>
            <span className="text-accent-green font-bold">● Typically minutes</span>
          </div>

          {/* Action CTA */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl text-[10px] font-sans font-bold uppercase tracking-wider bg-accent-green text-slate-950 hover:bg-text-primary hover:text-page-bg active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(0,255,102,0.2)]"
          >
            <MessageSquare size={12} />
            Start Conversation
          </a>
        </div>
      </div>

      {/* 3. Collapsed Hover Trigger Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          // If panel is collapsed, open it first on click (on mobile where hover doesn't exist)
          if (!isPanelOpen) {
            e.preventDefault();
            setIsExpanded(true);
            setHasManuallyClosed(false);
          }
        }}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer animate-float-slow animate-whatsapp-glow bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/15 text-accent-green hover:text-white hover:bg-accent-green dark:hover:bg-accent-green hover:scale-110 active:scale-95 shadow-[0_12px_35px_rgba(0,0,0,0.4)] ${
          isPanelOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100 pointer-events-auto'
        }`}
        style={{
          transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        aria-label="Open WhatsApp Chat support"
      >
        {/* Custom High-Tech WhatsApp Icon */}
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.634 1.975 14.163.95 11.53.949c-5.441 0-9.87 4.373-9.874 9.802-.001 1.767.472 3.49 1.369 5.011l-.988 3.606 3.731-.967zm12.302-7.39c-.195-.097-1.15-.567-1.329-.631-.177-.065-.307-.097-.438.097-.13.195-.506.631-.62.759-.115.13-.23.146-.425.049-.195-.097-.824-.304-1.57-.969-.58-.517-.972-1.155-1.085-1.35-.115-.195-.012-.301.083-.398.087-.087.195-.23.293-.344.097-.116.13-.195.195-.325.065-.13.032-.244-.017-.342-.049-.097-.438-1.055-.6-1.448-.158-.378-.333-.327-.457-.333-.117-.006-.251-.007-.385-.007-.134 0-.353.05-.538.253-.186.202-.709.693-.709 1.69s.725 1.96 1.05 2.18c.325.22 1.425 2.176 3.454 3.054.482.209.859.334 1.154.428.485.154.927.132 1.277.08.39-.058 1.15-.47 1.309-.924.16-.454.16-.843.112-.924-.049-.08-.177-.13-.372-.228z"/>
        </svg>
      </a>

    </div>
  );
}
