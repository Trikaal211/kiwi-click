import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
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

  // Navigation: anchor links for home sections, page routes for pages
  const navItems = [
    { label: 'Services', href: isHome ? '#services' : '/#services', isAnchor: true },
    { label: 'Our Work', href: isHome ? '#work' : '/#work', isAnchor: true },
    { label: 'Process', href: isHome ? '#process' : '/#process', isAnchor: true },
    { label: 'Blog', href: '/blog', isAnchor: false },
    { label: 'Team', href: '/team', isAnchor: false },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact', isAnchor: true },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl transition-theme">
      {/* Neobrutalist floating bar */}
      <div className="bg-card-bg border-2 border-accent-emerald px-5 py-3 rounded-2xl flex justify-between items-center shadow-offset transition-all duration-300">

        {/* Brand Logo */}
        <Link to="/" className="font-serif italic text-lg md:text-xl font-bold tracking-wide flex items-center gap-2 group transition-theme">
          <span className="text-accent-emerald transition-colors duration-300 flex items-center gap-2 font-sans not-italic font-extrabold uppercase text-sm md:text-base tracking-widest">
            <svg className="w-6 h-6 transition-theme text-accent-green fill-current" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="8" className="fill-accent-green/10" />
              <circle cx="12" cy="12" r="3" className="fill-white dark:fill-card-bg" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="7.5" r="0.75" className="fill-text-primary" />
              <circle cx="12" cy="16.5" r="0.75" className="fill-text-primary" />
              <circle cx="7.5" cy="12" r="0.75" className="fill-text-primary" />
              <circle cx="16.5" cy="12" r="0.75" className="fill-text-primary" />
              <circle cx="8.8" cy="8.8" r="0.75" className="fill-text-primary" />
              <circle cx="15.2" cy="15.2" r="0.75" className="fill-text-primary" />
              <circle cx="8.8" cy="15.2" r="0.75" className="fill-text-primary" />
              <circle cx="15.2" cy="8.8" r="0.75" className="fill-text-primary" />
            </svg>
            KiwiClicks
          </span>
          <span className="text-text-secondary font-sans font-light text-[9px] tracking-widest mt-1 hidden sm:inline-block transition-theme">
            / DELHI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = !item.isAnchor && location.pathname === item.href;
            if (item.isAnchor) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-sans tracking-widest uppercase font-bold text-text-primary hover:text-accent-orange transition-colors duration-300 relative group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-orange transition-all duration-300 group-hover:w-full" />
                </a>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[11px] font-sans tracking-widest uppercase font-bold transition-colors duration-300 relative group py-1 ${isActive ? 'text-accent-orange' : 'text-text-primary hover:text-accent-orange'}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-accent-orange transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            );
          })}
        </div>

        {/* CTAs & Controls */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-hover-highlight text-text-primary border-2 border-transparent hover:border-border-color/10 transition-all duration-300 cursor-pointer active:scale-95"
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
            to="/#contact"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-xl text-[10px] font-sans font-bold tracking-wider uppercase bg-accent-orange text-white border-2 border-accent-emerald hover:bg-accent-emerald hover:text-white transition-theme shadow-offset-sm"
          >
            Discovery Call
            <ArrowUpRight size={11} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-hover-highlight text-text-primary transition-colors duration-300 border-2 border-transparent"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-card-bg border-4 border-accent-emerald rounded-3xl p-6 shadow-offset transition-all duration-300 text-left">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              if (item.isAnchor) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-sans font-bold tracking-wide text-text-primary border-b border-border-color/10 pb-2 hover:text-accent-orange transition-colors"
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-base font-sans font-bold tracking-wide text-text-primary border-b border-border-color/10 pb-2 hover:text-accent-orange transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/#contact"
              className="mt-2 w-full text-center px-5 py-3 rounded-xl text-xs font-sans font-bold tracking-wider uppercase bg-accent-orange text-white border-2 border-accent-emerald hover:bg-accent-emerald hover:text-white transition-theme shadow-offset-sm flex items-center justify-center gap-1.5"
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
