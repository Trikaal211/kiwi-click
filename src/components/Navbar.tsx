import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync theme status on load
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

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-5xl transition-theme">
      {/* Floating glass container */}
      <div className="glass dark:dark-glass px-6 py-4 rounded-full flex justify-between items-center shadow-lg transition-all duration-300">
        
        {/* Brand Logo */}
        <a href="#" className="font-serif italic text-lg md:text-xl font-bold tracking-wide flex items-center gap-1 group transition-theme">
          <span className="text-accent-green hover:text-gold-accent transition-colors duration-300 flex items-center gap-1.5 font-sans not-italic font-extrabold uppercase text-base tracking-widest">
            <svg className="w-5 h-5 transition-theme" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            KiwiClicks
          </span>
          <span className="text-text-secondary font-sans font-light text-[9px] tracking-widest mt-1 hidden sm:inline-block transition-theme">
            / GROWTH PARTNER
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-sans tracking-widest uppercase font-medium text-text-secondary hover:text-gold-accent transition-colors duration-300 relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTAs & Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-hover-highlight text-text-primary transition-all duration-300 cursor-pointer active:scale-95"
            aria-label="Toggle theme mode"
          >
            {isDarkMode ? (
              <Sun size={15} className="hover:rotate-45 transition-transform duration-300 text-gold-accent" />
            ) : (
              <Moon size={15} className="hover:-rotate-12 transition-transform duration-300 text-accent-green" />
            )}
          </button>

          {/* Action CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-[10px] font-sans font-bold tracking-wider uppercase border border-text-primary bg-text-primary text-page-bg hover:bg-transparent hover:text-text-primary transition-all duration-300 items-center gap-1.5 cursor-pointer"
          >
            Discovery Call
            <ArrowUpRight size={12} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-hover-highlight text-text-primary transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full glass dark:dark-glass rounded-3xl p-6 shadow-2xl transition-all duration-300 border border-border-color">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-serif font-medium tracking-wide text-text-primary border-b border-border-color pb-2 transition-theme"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full text-center px-5 py-3.5 rounded-full text-xs font-sans font-bold tracking-wider uppercase bg-text-primary text-page-bg border border-text-primary hover:bg-transparent hover:text-text-primary transition-theme flex items-center justify-center gap-1.5"
            >
              Book Discovery Call
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
