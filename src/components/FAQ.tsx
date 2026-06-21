import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ArrowUpRight } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('SEO');
  const [openId, setOpenId] = useState<number | null>(null);

  const categories = ['SEO', 'Web Design', 'Automation', 'Meta Ads'];

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What is your core philosophy on digital growth?',
      answer: 'We believe in a unified digital engine—combining web engineering, intent SEO mapping, paid conversion loops, and lead routing under one single strategy. Everything Digital. One Place.',
      category: 'SEO',
    },
    {
      id: 2,
      question: 'Do you only work with large enterprise clients?',
      answer: 'No. We serve businesses across all growth stages—from local Delhi/NCR shops looking to dominate their Map Pack keyword slots, to fast-growing startups, D2C brands, and international enterprises requiring advanced operations integrations.',
      category: 'SEO',
    },
    {
      id: 3,
      question: 'Why Next.js edge landing pages instead of basic builders?',
      answer: 'Speed is directly proportional to conversion. Edge pages load in under 1 second globally, passing Core Web Vitals and preventing mobile traffic drop-offs to capture every possible lead.',
      category: 'Web Design',
    },
    {
      id: 4,
      question: 'How do your AI lead qualification systems operate?',
      answer: 'We build serverless qualifiers that analyze incoming inquiries using custom LLM logic, scoring budget parameters and intent scores, then automatically routing them to your HubSpot, CRM, or WhatsApp nodes within 0.12 seconds.',
      category: 'Automation',
    },
    {
      id: 5,
      question: 'What performance metrics do you guarantee for Paid Social?',
      answer: 'While direct revenue is determined by sales team close rates, we hold our social ad loops accountable to direct-attribution ROAS (targeting 4-5x average ROAS across direct-to-consumer and B2B platforms).',
      category: 'Meta Ads',
    },
  ];

  const filtered = faqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative py-20 md:py-32 px-6 md:px-12 bg-page-bg text-text-primary transition-theme border-b border-border-color"
    >
      <div className="max-w-4xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-6 transition-theme">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent-green font-bold uppercase">
              06 // COMMON INQUIRIES
            </span>
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-text-primary mt-3 uppercase transition-theme">
              FAQ Database
            </h2>
          </div>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-text-primary border border-border-color px-5 py-3 rounded-full bg-page-bg-sec hover:bg-text-primary hover:text-page-bg transition-all shrink-0"
          >
            Explore FAQ Docs <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenId(null); }}
              className={`px-4.5 py-2.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-accent-green border-accent-green text-slate-950 shadow-[0_5px_15px_rgba(0,255,102,0.2)]'
                  : 'bg-page-bg-sec border-border-color text-text-secondary hover:border-text-secondary/35 hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {filtered.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-card-bg border rounded-3xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-accent-green/30 bg-page-bg-sec/50 shadow-lg' : 'border-border-color hover:border-text-secondary/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5.5 flex items-center justify-between text-left cursor-pointer select-none"
                >
                  <div className="flex items-start gap-4 pr-4">
                    <HelpCircle size={16} className={`mt-0.5 shrink-0 transition-colors ${isOpen ? 'text-accent-green' : 'text-text-secondary'}`} />
                    <span className="font-sans font-bold text-sm md:text-base text-text-primary leading-snug transition-theme">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-border-color flex items-center justify-center bg-page-bg transition-all duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-accent-green text-slate-950 border-accent-green' : 'text-text-secondary'
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1.5 border-t border-border-color transition-theme">
                        <p className="text-xs font-sans text-text-secondary leading-relaxed transition-theme">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="mt-12 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-page-bg-sec border border-border-color text-xs font-mono font-bold uppercase tracking-wider text-text-primary hover:bg-text-primary hover:text-page-bg hover:border-text-primary transition-all shadow-md"
          >
            All FAQ Archives <ArrowUpRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}
