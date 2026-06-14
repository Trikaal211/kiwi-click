import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ArrowUpRight } from 'lucide-react';

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [activeCategory, setActiveCategory] = useState('All');

  const faqs: FAQItem[] = [
    {
      id: 1,
      category: 'SEO',
      question: 'How long does SEO take to show results for a Delhi business?',
      answer: 'For most Delhi businesses, we see ranking movements within 4-8 weeks and meaningful organic traffic growth within 3-4 months. Local SEO — particularly Google Maps rankings — shows results faster, sometimes within 2-4 weeks for specific location-based queries.'
    },
    {
      id: 2,
      category: 'SEO',
      question: 'What is Local SEO and why does it matter?',
      answer: 'Local SEO focuses on ranking your business for location-specific searches like "digital marketing agency Connaught Place" or "web developer Delhi CP." It includes Google Business Profile optimization, local citations, review management, and Maps ranking strategies that drive high-intent, ready-to-buy traffic.'
    },
    {
      id: 3,
      category: 'Website',
      question: 'What makes your landing pages convert better?',
      answer: 'We engineer conversion from day one: single-focused page structure, above-the-fold social proof, friction-reduced contact forms (3 fields, not 10), WhatsApp quick-contact buttons, sub-1.5 second load times, and CTA placement informed by heatmap data. Our average landing page conversion rate is 6-9% vs the industry average of 2-3%.'
    },
    {
      id: 4,
      category: 'Marketing',
      question: 'What is the minimum ad budget you work with?',
      answer: 'For Google Ads, we recommend a minimum of ₹30,000/month in ad spend to gather meaningful data. For Meta Ads, ₹20,000/month is a workable starting point. Below these amounts, the ad algorithms do not have enough conversion data to optimize effectively. Our management fees are separate from ad spend.'
    },
    {
      id: 5,
      category: 'AI',
      question: 'How does your CRM automation pipeline work?',
      answer: 'Every lead from your forms, WhatsApp, Google Ads, and Meta Ads flows into a central hub. AI qualifies and scores the lead, populates your CRM automatically, and sends an instant WhatsApp alert to the relevant team member — all within 90 seconds of the enquiry. No manual data entry required.'
    },
    {
      id: 6,
      category: 'Marketing',
      question: 'How is your pricing structured?',
      answer: 'We align pricing to verified business milestones: qualified lead volume, conversion rate improvements, and revenue growth. We do not charge retainers for vanity impressions or generic activity reports. Every engagement starts with a discovery call where we outline a clear, milestone-based roadmap.'
    },
    {
      id: 7,
      category: 'Website',
      question: 'How long does it take to build a website?',
      answer: 'A standard 5-7 page business website takes 3-4 weeks from approved design to launch. More complex sites with custom features, CRM integrations, or e-commerce functionality take 6-10 weeks. We provide a clear milestone timeline before starting any project.'
    },
    {
      id: 8,
      category: 'AI',
      question: 'Do I need technical knowledge to manage the automations you build?',
      answer: 'No. We build every automation with a clean, intuitive dashboard and simple controls. You get full training, comprehensive documentation, and ongoing support. The most complex system we deliver should feel simple enough for any business owner to monitor independently.'
    }
  ];

  const categories = ['All', 'SEO', 'Website', 'Marketing', 'AI'];

  const filtered = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative py-16 md:py-24 px-6 md:px-12 bg-page-bg text-text-primary transition-theme"
    >
      <div className="max-w-4xl w-full mx-auto relative z-10">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              Common Questions
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl text-text-primary mt-2 transition-theme">
              Frequently Asked
            </h2>
          </div>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-accent-orange border-2 border-accent-orange px-4 py-2.5 rounded-xl hover:bg-accent-orange hover:text-white transition-all shrink-0 shadow-offset-sm"
          >
            All FAQs <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenId(null); }}
              className={`px-4 py-2 rounded-xl text-[10px] font-sans font-bold uppercase tracking-widest border-2 transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-accent-emerald border-accent-emerald text-white shadow-offset-sm'
                  : 'bg-card-bg border-border-color text-text-primary hover:border-accent-orange'
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
                className={`bg-card-bg border-2 border-accent-emerald rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'shadow-offset' : 'shadow-offset-sm hover:translate-x-[-1px] hover:translate-y-[-1px]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer transition-theme select-none"
                >
                  <div className="flex items-start gap-3 flex-1 pr-4">
                    <HelpCircle size={16} className={`mt-0.5 shrink-0 transition-colors ${isOpen ? 'text-accent-orange' : 'text-accent-green'}`} />
                    <span className="font-sans font-semibold text-sm md:text-base text-text-primary transition-theme leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-7 h-7 rounded-full border border-border-color/20 flex items-center justify-center bg-page-bg transition-all duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-accent-orange text-white border-accent-orange' : 'text-text-primary'
                  }`}>
                    <ChevronDown size={13} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-accent-emerald/20 transition-theme">
                        <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom link to full FAQ page */}
        <div className="mt-8 text-center">
          <p className="font-handwriting text-accent-orange text-lg -rotate-1 mb-3">Have more questions?</p>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card-bg border-2 border-accent-emerald text-sm font-sans font-bold text-text-primary hover:bg-accent-orange hover:text-white hover:border-accent-orange transition-all shadow-offset-sm"
          >
            View All FAQs <ArrowUpRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}
