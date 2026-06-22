import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  TrendingUp,
  Code,
  Cpu,
  MapPin
} from 'lucide-react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Default to dark mode for premium aesthetics
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      true; // Force default true
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaOpen(false);
    setMobileExpandedCat(null);
  }, [location]);

  // Cleanup timeout on unmount to prevent memory leak
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsMegaOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaOpen(false);
    }, 250);
  };

  const megaMenuData = [
    {
      category: 'Paid Acquisition',
      slug: 'paid-acquisition',
      icon: TrendingUp,
      color: 'text-accent-green',
      bg: 'bg-accent-green/5',
      items: [
        { label: 'Performance Ads', desc: 'Scale conversion funnels on Meta & LinkedIn', path: '/services/meta-ads' },
        { label: 'Search Advertising', desc: 'Target high-intent Google Search queries', path: '/services/google-ads' },
        { label: 'Enterprise Lead Gen', desc: 'Accelerate your B2B sales pipeline', path: '/services/lead-generation' },
        { label: 'Paid Social Funnels', desc: 'Drive high-ROAS creative performance', path: '/services/meta-ads' }
      ]
    },
    {
      category: 'Web Experience',
      slug: 'web-experience',
      icon: Code,
      color: 'text-accent-orange',
      bg: 'bg-accent-orange/5',
      items: [
        { label: 'Enterprise Web Dev', desc: 'React, Next.js & headless CMS stacks', path: '/services/business-web-dev' },
        { label: 'Performance Audits', desc: 'Optimize site speed and SEO scores', path: '/services/business-web-dev' },
        { label: 'Landing Engineering', desc: 'High-converting edge-routed landing pages', path: '/services/landing-pages' },
        { label: 'Conversion Optimization', desc: 'Reduce user drop-offs via CRO tests', path: '/services/cro' }
      ]
    },
    {
      category: 'Growth Engineering',
      slug: 'growth-engineering',
      icon: Cpu,
      color: 'text-accent-green',
      bg: 'bg-accent-green/5',
      items: [
        { label: 'AI Lead Qualification', desc: 'Autonomous screening models & qualifiers', path: '/services/lead-qualification' },
        { label: 'WhatsApp Automation', desc: 'Direct API interactive custom workflows', path: '/services/whatsapp-automation' },
        { label: 'CRM Pipeline Integration', desc: 'Synchronized contact databases & notifications', path: '/services/crm-automation' },
        { label: 'Process Automation', desc: 'Reduce operational friction via serverless APIs', path: '/services/process-automation' }
      ]
    },
    {
      category: 'Organic Systems',
      slug: 'organic-systems',
      icon: MapPin,
      color: 'text-gold-accent',
      bg: 'bg-gold-accent/5',
      items: [
        { label: 'Organic SEO Stacks', desc: 'Establish dominating organic authority', path: '/services/seo' },
        { label: 'Topical Search Strategy', desc: 'Build long-term compounding rankings', path: '/services/seo' },
        { label: 'Global Citations', desc: 'Rank offices across international directories', path: '/services/gbp-growth' },
        { label: 'Content Infrastructure', desc: 'Speed-optimized blogs and content hubs', path: '/services/content-marketing' }
      ]
    }
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-theme">
      {/* Floating glass pill navbar container */}
      <div className="bg-slate-950/65 backdrop-blur-xl border border-white/10 px-6 py-2 min-h-[50px] md:min-h-[64px] rounded-full flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 relative z-50">
        
        {/* Brand Logo (Left Section) */}
        <div className="flex justify-start items-center">
          <Link to="/" className="flex items-center gap-2.5 transition-all duration-300 shrink-0">
            {/* Geometric High-Tech Kiwi Logo */}
            <svg className="w-6 h-6 text-accent-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" strokeDasharray="3 3" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
            <span className="text-[14px] font-sans font-extrabold tracking-widest uppercase text-white hover:text-accent-green transition-colors duration-300">
              KiwiClicks
            </span>
          </Link>
        </div>

        {/* Desktop Navigation (Center Section) */}
        <div className="hidden md:flex justify-center items-center gap-6 lg:gap-8">
          {/* Services Mega Trigger */}
          <div
            className="relative py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-[11px] font-sans tracking-widest uppercase font-bold text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer">
              Capabilities
              <ChevronDown size={10} className={`transition-transform duration-300 ${isMegaOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <Link
            to="/results"
            className={`text-[11px] font-sans tracking-widest uppercase font-bold transition-colors duration-300 relative group py-2 ${location.pathname === '/results' ? 'text-accent-green' : 'text-slate-300 hover:text-white'}`}
          >
            Impact
            <span className={`absolute bottom-0 left-0 h-[1.5px] bg-accent-green transition-all duration-300 ${location.pathname === '/results' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          <Link
            to="/blog"
            className={`text-[11px] font-sans tracking-widest uppercase font-bold transition-colors duration-300 relative group py-2 ${location.pathname.startsWith('/blog') ? 'text-accent-green' : 'text-slate-300 hover:text-white'}`}
          >
            Resources
            <span className={`absolute bottom-0 left-0 h-[1.5px] bg-accent-green transition-all duration-300 ${location.pathname.startsWith('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          <Link
            to="/contact"
            className={`text-[11px] font-sans tracking-widest uppercase font-bold transition-colors duration-300 relative group py-2 ${location.pathname === '/contact' ? 'text-accent-green' : 'text-slate-300 hover:text-white'}`}
          >
            Connect
            <span className={`absolute bottom-0 left-0 h-[1.5px] bg-accent-green transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
        </div>

        {/* CTAs & Controls (Right Section) */}
        <div className="flex justify-end items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-white/5 text-slate-300 hover:text-white border border-white/5 transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center"
            aria-label="Toggle theme mode"
          >
            {isDarkMode ? (
              <Sun size={13} className="hover:rotate-45 transition-transform duration-300 text-yellow-400" />
            ) : (
              <Moon size={13} className="hover:-rotate-12 transition-transform duration-300 text-accent-green" />
            )}
          </button>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4.5 py-2 rounded-full text-[10px] font-sans font-bold tracking-wider uppercase bg-white text-slate-950 hover:bg-accent-green hover:text-slate-950 transition-all duration-300 shadow-[0_8px_20px_rgba(255,255,255,0.15)]"
          >
            Request Audit
            <ArrowUpRight size={11} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-white/5 text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Desktop Glassmorphic Mega Menu with hover bridge */}
      {isMegaOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hidden md:block absolute top-full left-0 right-0 pt-2 z-40 animate-fadeIn"
        >
          {/* Frosted Glass Dark Panel */}
          <div className="bg-slate-950/85 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] grid grid-cols-4 gap-5 text-left transition-theme">
            {megaMenuData.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <div key={idx} className="space-y-4 border-r border-white/5 last:border-r-0 pr-4 last:pr-0">
                  <div className="flex items-center gap-2 pb-2.5 border-b border-white/5">
                    <div className={`w-6 h-6 rounded-lg ${cat.bg} flex items-center justify-center ${cat.color} border border-white/5`}>
                      <CatIcon size={11} />
                    </div>
                    <h4 className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-white">
                      {cat.category}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {cat.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        to={item.path}
                        className="block p-2 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group text-left"
                      >
                        <span className="text-[11px] font-sans font-bold text-slate-200 group-hover:text-accent-green transition-colors flex items-center gap-0.5">
                          {item.label}
                          <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all text-accent-green shrink-0" />
                        </span>
                        <span className="block text-[9px] font-sans text-slate-400 leading-normal mt-0.5 font-medium">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 text-left max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-4">

            {/* Mobile Services Accordion */}
            <div className="border-b border-white/5 pb-3">
              <button
                onClick={() => setMobileExpandedCat(mobileExpandedCat === 'capabilities' ? null : 'capabilities')}
                className="w-full text-base font-sans font-bold tracking-wide text-white flex justify-between items-center py-1 cursor-pointer"
              >
                Capabilities
                <ChevronDown size={16} className={`transition-transform duration-300 ${mobileExpandedCat === 'capabilities' ? 'rotate-180' : ''}`} />
              </button>

              {mobileExpandedCat === 'capabilities' && (
                <div className="pl-3 mt-3 space-y-4 pt-3 border-t border-white/5">
                  {megaMenuData.map((cat, idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="text-[9px] font-sans font-bold text-accent-green tracking-widest uppercase">
                        {cat.category}
                      </p>
                      <div className="grid grid-cols-1 gap-2 pl-2 border-l border-white/10">
                        {cat.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs font-sans font-medium text-slate-300 hover:text-white py-1 transition-colors block"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/results"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-sans font-bold tracking-wide text-white border-b border-white/5 pb-3 hover:text-accent-green transition-colors"
            >
              Impact
            </Link>

            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-sans font-bold tracking-wide text-white border-b border-white/5 pb-3 hover:text-accent-green transition-colors"
            >
              Resources
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-sans font-bold tracking-wide text-white border-b border-white/5 pb-3 hover:text-accent-green transition-colors"
            >
              Connect
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full text-center px-5 py-3.5 rounded-full text-xs font-sans font-bold tracking-wider uppercase bg-white text-slate-950 hover:bg-accent-green transition-colors flex items-center justify-center gap-1.5"
            >
              Request Audit
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
