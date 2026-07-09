import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoLight from '../assets/logo_light.png';
import logoDark from '../assets/logo_dark.png';
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
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Close mobile menu and mega menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaOpen(false);
    setMobileExpandedCat(null);
  }, [location]);

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
      category: 'Digital Marketing',
      slug: 'digital-marketing',
      icon: TrendingUp,
      color: 'text-accent-green',
      bg: 'bg-accent-green/5',
      items: [
        { label: 'SEO Services', desc: 'Rank on page #1 organically', path: '/services/seo' },
        { label: 'Local SEO', desc: 'Target local search regions', path: '/services/local-seo' },
        { label: 'Google Profile Setup', desc: 'Optimize map profiles', path: '/services/gbp-optimization' },
        { label: 'Google Ads', desc: 'Target high-intent searchers', path: '/services/google-ads' },
        { label: 'Meta Ads', desc: 'Scale lead generation funnels', path: '/services/meta-ads' },
        { label: 'Lead Generation', desc: 'Fill your B2B sales pipelines', path: '/services/lead-generation' },
        { label: 'Content Strategy', desc: 'Blogs that drive organic clicks', path: '/services/content-marketing' },
        { label: 'Reputation Management', desc: 'Secure digital review scores', path: '/services/reputation-management' }
      ]
    },
    {
      category: 'Web Development',
      slug: 'web-development',
      icon: Code,
      color: 'text-accent-orange',
      bg: 'bg-accent-orange/5',
      items: [
        { label: 'Business Web Dev', desc: 'Custom React & Vite sites', path: '/services/business-web-dev' },
        { label: 'WordPress Dev', desc: 'Custom Gutenberg blocks themes', path: '/services/wordpress-dev' },
        { label: 'Shopify Dev', desc: 'E-commerce conversion setups', path: '/services/shopify-dev' },
        { label: 'Landing Pages', desc: 'High-converting ad campaign fit', path: '/services/landing-pages' },
        { label: 'Website Redesign', desc: 'Modernize layouts & speeds', path: '/services/web-redesign' },
        { label: 'Web Maintenance', desc: 'Uptime, security & backup audits', path: '/services/web-maintenance' },
        { label: 'Conversion Optimization', desc: 'A/B test traffic conversion', path: '/services/cro' }
      ]
    },
    {
      category: 'AI Automation',
      slug: 'ai-automation',
      icon: Cpu,
      color: 'text-accent-green',
      bg: 'bg-accent-green/5',
      items: [
        { label: 'AI Chatbots', desc: 'Qualify website leads 24/7', path: '/services/ai-chatbots' },
        { label: 'Lead Qualification', desc: 'Screen and score contacts', path: '/services/lead-qualification' },
        { label: 'WhatsApp Automation', desc: 'Official API interactive flows', path: '/services/whatsapp-automation' },
        { label: 'CRM Integration', desc: 'Keep lead databases synchronized', path: '/services/crm-automation' },
        { label: 'Email Automation', desc: 'Warm sequences & customer lists', path: '/services/email-automation' },
        { label: 'Process Automation', desc: 'Reduce manual operational hours', path: '/services/process-automation' },
        { label: 'AI Customer Support', desc: 'Resolve common client tickets', path: '/services/ai-support' }
      ]
    },
    {
      category: 'Local Business Growth',
      slug: 'local-business-growth',
      icon: MapPin,
      color: 'text-gold-accent',
      bg: 'bg-gold-accent/5',
      items: [
        { label: 'Maps Listing Growth', desc: 'Increase local maps calls', path: '/services/gbp-growth' },
        { label: 'Maps Ranking', desc: 'Secure Map Pack positions', path: '/services/maps-ranking' },
        { label: 'Local Lead Gen', desc: 'Capture targeted regional leads', path: '/services/local-lead-gen' },
        { label: 'Multi-Location SEO', desc: 'Rank multiple office directories', path: '/services/multi-location-seo' },
        { label: 'Review Management', desc: 'Request reviews automatically', path: '/services/review-management' },
        { label: 'Citation Building', desc: 'Submit data to local portals', path: '/services/citation-building' }
      ]
    }
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl transition-theme">
      {/* Neobrutalist floating bar */}
      <div className="bg-card-bg border-2 border-accent-emerald px-5 py-1 md:py-1.5 min-h-[46px] md:min-h-[60px] lg:min-h-[72px] rounded-2xl flex justify-between items-center md:grid md:grid-cols-3 md:items-center shadow-offset transition-all duration-300 relative z-50">

        {/* Brand Logo (Left Section) */}
        <div className="flex justify-start items-center">
          <Link to="/" className="flex items-center transition-all duration-300 shrink-0">
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="KiwiClicks"
              className="w-[80px] md:w-[110px] lg:w-[130px] h-auto object-contain transition-all duration-300 hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Desktop Navigation (Center Section) */}
        <div className="hidden md:flex justify-center items-center gap-6 lg:gap-8">
          {/* Services Mega Trigger */}
          <div
            className="relative py-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-[11px] font-sans tracking-widest uppercase font-bold text-text-primary hover:text-accent-orange transition-colors duration-300 cursor-pointer">
              Services
              <ChevronDown size={10} className={`transition-transform duration-300 ${isMegaOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <Link
            to="/results"
            className={`text-[11px] font-sans tracking-widest uppercase font-bold transition-colors duration-300 relative group py-1 ${location.pathname === '/results' ? 'text-accent-orange' : 'text-text-primary hover:text-accent-orange'}`}
          >
            Results
            <span className={`absolute bottom-0 left-0 h-[2px] bg-accent-orange transition-all duration-300 ${location.pathname === '/results' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          <Link
            to="/blog"
            className={`text-[11px] font-sans tracking-widest uppercase font-bold transition-colors duration-300 relative group py-1 ${location.pathname.startsWith('/blog') ? 'text-accent-orange' : 'text-text-primary hover:text-accent-orange'}`}
          >
            Blog
            <span className={`absolute bottom-0 left-0 h-[2px] bg-accent-orange transition-all duration-300 ${location.pathname.startsWith('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          <Link
            to="/contact"
            className={`text-[11px] font-sans tracking-widest uppercase font-bold transition-colors duration-300 relative group py-1 ${location.pathname === '/contact' ? 'text-accent-orange' : 'text-text-primary hover:text-accent-orange'}`}
          >
            Contact
            <span className={`absolute bottom-0 left-0 h-[2px] bg-accent-orange transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
        </div>

        {/* CTAs & Controls (Right Section) */}
        <div className="flex justify-end items-center gap-2 md:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-hover-highlight text-text-primary border-2 border-transparent hover:border-border-color/10 transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center"
            aria-label="Toggle theme mode"
          >
            {isDarkMode ? (
              <Sun size={14} className="hover:rotate-45 transition-transform duration-300 text-accent-orange" />
            ) : (
              <Moon size={14} className="hover:-rotate-12 transition-transform duration-300 text-accent-green" />
            )}
          </button>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center gap-1 px-4 py-2 rounded-xl text-[10px] font-sans font-bold tracking-wider uppercase bg-accent-orange text-white border-2 border-accent-emerald hover:bg-accent-emerald hover:text-white transition-theme shadow-offset-sm"
          >
            Discovery Call
            <ArrowUpRight size={11} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-hover-highlight text-text-primary transition-colors duration-300 border-2 border-transparent cursor-pointer"
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
          {/* Frosted Glass Neobrutalist Panel */}
          <div className="bg-white/70 dark:bg-card-bg/75 backdrop-blur-xl border-4 border-accent-emerald p-5 rounded-3xl shadow-offset grid grid-cols-4 gap-4 text-left transition-theme">
            {megaMenuData.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <div key={idx} className="space-y-3 border-r border-border-color/20 last:border-r-0 pr-3 last:pr-0">
                  <div className="flex items-center gap-2 pb-1.5 border-b border-border-color/10">
                    <div className={`w-5 h-5 rounded-md ${cat.bg} flex items-center justify-center ${cat.color}`}>
                      <CatIcon size={10} />
                    </div>
                    <h4 className="text-[9px] font-sans font-black uppercase tracking-widest text-text-primary">
                      {cat.category}
                    </h4>
                  </div>

                  <div className="space-y-1.5">
                    {cat.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        to={item.path}
                        className="block p-1.5 rounded-xl border border-transparent hover:border-accent-green/10 hover:bg-accent-green/5 dark:hover:bg-accent-green/10 transition-all group text-left"
                      >
                        <span className="text-[10px] font-sans font-black text-text-primary group-hover:text-accent-orange transition-colors flex items-center gap-0.5">
                          {item.label}
                          <ArrowUpRight size={9} className="opacity-0 group-hover:opacity-100 transition-all text-accent-orange shrink-0" />
                        </span>
                        <span className="block text-[8px] font-sans text-text-secondary/70 leading-tight mt-0.5 font-semibold">
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-card-bg border-4 border-accent-emerald rounded-3xl p-6 shadow-offset transition-all duration-300 text-left max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3">

            {/* Mobile Services Accordion */}
            <div className="border-b border-border-color/10 pb-2">
              <button
                onClick={() => setMobileExpandedCat(mobileExpandedCat === 'services' ? null : 'services')}
                className="w-full text-base font-sans font-bold tracking-wide text-text-primary flex justify-between items-center py-1 cursor-pointer"
              >
                Services
                <ChevronDown size={16} className={`transition-transform duration-300 ${mobileExpandedCat === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {mobileExpandedCat === 'services' && (
                <div className="pl-4 mt-2 space-y-3 pt-2 border-t border-border-color/10">
                  {megaMenuData.map((cat, idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="text-[10px] font-sans font-bold text-accent-green tracking-widest uppercase">
                        {cat.category}
                      </p>
                      <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-border-color/50">
                        {cat.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs font-sans font-medium text-text-secondary hover:text-accent-orange py-1 transition-colors block"
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
              className={`text-base font-sans font-bold tracking-wide border-b border-border-color/10 pb-2 transition-colors ${location.pathname === '/results' ? 'text-accent-orange' : 'text-text-primary hover:text-accent-orange'}`}
            >
              Results
            </Link>

            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-sans font-bold tracking-wide text-text-primary border-b border-border-color/10 pb-2 hover:text-accent-orange transition-colors"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-sans font-bold tracking-wide text-text-primary border-b border-border-color/10 pb-2 hover:text-accent-orange transition-colors"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full text-center px-5 py-3 rounded-xl text-xs font-sans font-bold tracking-wider uppercase bg-accent-orange text-white border-2 border-accent-emerald hover:bg-accent-emerald hover:text-white transition-theme shadow-offset flex items-center justify-center gap-1.5"
            >
              Book Discovery Call
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
