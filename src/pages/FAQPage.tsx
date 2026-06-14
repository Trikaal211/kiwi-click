import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search, Globe, Laptop, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  id: string;
  label: string;
  icon: any;
  color: string;
  items: FAQItem[];
}

export default function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>('seo-0');
  const [activeCategory, setActiveCategory] = useState('seo');

  const categories: FAQCategory[] = [
    {
      id: 'seo',
      label: 'SEO & Local Search',
      icon: Search,
      color: 'accent-green',
      items: [
        { q: 'How long does SEO take to show results?', a: 'For most Delhi businesses, we start seeing ranking movements within 4-8 weeks and measurable organic traffic growth within 3-4 months. Local SEO (Google Business Profile and Maps rankings) typically shows results faster — sometimes within 2-3 weeks for hyper-local queries.' },
        { q: 'What is Local SEO and how is it different from regular SEO?', a: 'Local SEO focuses on ranking your business for location-specific searches — like "digital marketing agency Connaught Place" or "web developer Delhi CP". It includes Google Business Profile optimization, local citations, review management, and Maps ranking. Regular SEO targets broader, national keyword sets. For most Delhi businesses, Local SEO drives faster, higher-converting traffic.' },
        { q: 'Do you handle Google Business Profile optimization?', a: 'Yes. GBP optimization is a core pillar of our Local SEO service. We optimize your business categories, service descriptions, photo sets, Q&A sections, and review response strategy. We also set up weekly GBP posts, track ranking positions on Google Maps, and monitor competitor profiles.' },
        { q: 'What is semantic SEO and why does it matter in 2026?', a: 'Semantic SEO goes beyond keywords — it is about building topical authority and entity relationships that Google\'s AI understands. Instead of targeting isolated keywords, we map interconnected content clusters covering every subtopic your customers search for. This is especially powerful now that Google\'s Helpful Content system rewards comprehensive, expert coverage over keyword-stuffed pages.' },
        { q: 'Can you help businesses that were hit by a Google algorithm update?', a: 'Yes. Algorithm recovery is a service we offer. We conduct a full technical and content audit to identify thin content, unnatural link profiles, E-E-A-T deficiencies, and core web vitals failures. We then build a structured recovery plan, typically showing recovery signals within 60-90 days of implementation.' },
        { q: 'Do you offer link building as part of SEO?', a: 'Yes — but we do it the right way. We acquire links through genuine relationship outreach, digital PR campaigns, local business citations, and content partnerships. We avoid link farms, PBNs, and spammy directories. Our link velocity is natural and sustainable, designed to pass any algorithm update.' },
      ]
    },
    {
      id: 'website',
      label: 'Website & Development',
      icon: Laptop,
      color: 'accent-orange',
      items: [
        { q: 'What technology stack do you use for websites?', a: 'We primarily build with React and Next.js for frontend, with Tailwind CSS for styling. For backends, we use Node.js, Supabase, or headless CMS setups (Sanity, Contentful). We choose the stack based on your needs — a landing page gets a fast, static Vite build; a complex portal gets a full Next.js setup with API routes.' },
        { q: 'How long does it take to build a website?', a: 'A standard 5-7 page business website takes 3-4 weeks. A more complex site with custom features, CRM integrations, or e-commerce functionality takes 6-10 weeks. We always provide a clear project timeline with milestones before starting.' },
        { q: 'Do you build mobile-responsive websites?', a: 'Every website we build is mobile-first by default. We design for mobile screens first, then scale up to tablet and desktop. We test on actual devices and across browsers before delivery. We also run Core Web Vitals audits to ensure fast loading on mobile networks.' },
        { q: 'Can you integrate CRM systems like HubSpot or Salesforce?', a: 'Yes. We have integrated HubSpot, Salesforce, Zoho, and custom CRM systems into websites. We build lead routing logic that automatically qualifies, tags, and routes form submissions into the correct pipeline stages, with instant WhatsApp notifications for your sales team.' },
        { q: 'Do you offer website maintenance after launch?', a: 'Yes. We offer monthly maintenance retainers that cover security updates, performance monitoring, content updates, plugin/dependency upgrades, and uptime monitoring. We also offer emergency support contracts for mission-critical sites.' },
        { q: 'What makes your websites convert better than others?', a: 'We engineer conversion from day one — not as an afterthought. This means single-focused page structure, above-the-fold social proof, friction-reduced contact forms, WhatsApp quick-contact buttons, speed optimization under 1.5 seconds, and CTA placement informed by heatmap data. We have achieved average conversion rates of 6-9% on our landing pages, vs the industry average of 2-3%.' },
      ]
    },
    {
      id: 'marketing',
      label: 'Marketing & Ads',
      icon: Globe,
      color: 'accent-emerald',
      items: [
        { q: 'What is the minimum ad budget you work with?', a: 'For Google Ads, we recommend a minimum of ₹30,000/month in ad spend to gather meaningful data. For Meta Ads, ₹20,000/month is a workable floor. Below these numbers, the learning algorithms do not have enough data to optimize effectively. Our management fees are separate from the ad spend.' },
        { q: 'How do you measure the success of ad campaigns?', a: 'We track qualified leads (not just form fills), cost per qualified lead, lead-to-sale conversion rate, and revenue-weighted ROAS. We set up enhanced conversions, call tracking, and WhatsApp click tracking so every rupee of ad spend is attributed to a specific conversion action.' },
        { q: 'What is your approach to Meta Ads creatives?', a: 'We use a hook-first creative framework: the first 3 seconds of any ad must stop the scroll and earn attention. We test multiple creative angles — problem-aware, solution-aware, and competitor-aware approaches — and let performance data decide the winners. We refresh creatives every 3-4 weeks to combat ad fatigue.' },
        { q: 'Do you manage Google Ads in-house or outsource?', a: 'Everything is managed in-house by our certified Google Ads specialists. We never outsource campaign management. You get direct access to the person managing your account, with weekly performance calls and transparent access to your Google Ads account at all times.' },
        { q: 'What industries have you worked with?', a: 'Our core expertise is in Delhi NCR businesses: real estate (residential and commercial), D2C e-commerce, EdTech apps, professional services (law, finance, consulting), healthcare and wellness, and hospitality. We understand Delhi buyer behavior, seasonal demand patterns, and local competitive landscapes.' },
        { q: 'How quickly can you launch a new campaign?', a: 'For a new Google Ads campaign with existing landing pages, we can go live in 5-7 business days. For campaigns requiring new landing page builds, creative assets, and full account setup, expect 2-3 weeks. For Meta Ads, we can typically launch within 7-10 days from kickoff.' },
      ]
    },
    {
      id: 'ai',
      label: 'AI & Automation',
      icon: Cpu,
      color: 'accent-green',
      items: [
        { q: 'What kind of automation do you build?', a: 'We build lead qualification workflows (parse, score, and route inbound leads automatically), CRM sync pipelines (send data from any form or chatbot directly into HubSpot/Salesforce), AI-powered email/WhatsApp follow-up sequences, appointment booking bots, and custom AI agents using OpenAI, Claude, or Gemini APIs.' },
        { q: 'Do I need technical knowledge to use the automations you build?', a: 'No. We build automation systems with clean dashboards and simple controls. You should be able to see your pipeline, track leads, and manage settings without any developer knowledge. We provide full training sessions and documentation when we hand over the system.' },
        { q: 'How long does it take to implement an automation system?', a: 'A standard lead qualification + CRM routing system takes 2-3 weeks. More complex systems involving AI agents, multi-channel integrations, or custom dashboards take 4-6 weeks. We always start with a scoping session to map your exact workflow before building.' },
        { q: 'Can you integrate with WhatsApp for lead communication?', a: 'Yes. WhatsApp Business API integration is one of our most popular automation services. We can route leads to WhatsApp instantly, send automated follow-up messages based on lead actions, set up chatbots for FAQ handling and appointment booking, and sync all WhatsApp conversations back into your CRM.' },
        { q: 'Is AI automation expensive to maintain?', a: 'No. The ongoing cost is minimal — typically the cost of the API usage (OpenAI, Make.com, or Zapier subscriptions). Once built, these systems run 24/7 with minimal intervention. The time and revenue saved typically delivers ROI within the first month of operation.' },
      ]
    }
  ];

  const activeData = categories.find(c => c.id === activeCategory)!;

  return (
    <div className="min-h-screen bg-page-bg text-text-primary pt-24 transition-theme">

      {/* Hero */}
      <section className="py-16 md:py-20 px-6 md:px-12 border-b border-border-color transition-theme">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">Common Questions</span>
          <h1 className="font-serif italic text-5xl md:text-7xl text-text-primary mt-3 mb-4">
            Frequently Asked<br />
            <span className="font-sans font-extrabold not-italic text-accent-orange">Questions</span>
          </h1>
          <p className="text-base font-sans font-medium text-text-secondary max-w-2xl leading-relaxed">
            Straight answers to the questions every business owner asks before partnering with a growth agency. No jargon. No fluff.
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <section className="py-8 px-6 md:px-12 bg-page-bg-sec border-b border-border-color sticky top-20 z-30 transition-theme">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenKey(null); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-sans font-bold uppercase tracking-widest border-2 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-accent-emerald border-accent-emerald text-white shadow-offset-sm'
                    : 'bg-card-bg border-border-color text-text-primary hover:border-accent-orange'
                }`}
              >
                <Icon size={13} />
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-6 md:px-12 transition-theme">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {activeData.items.map((item, idx) => {
              const key = `${activeCategory}-${idx}`;
              const isOpen = openKey === key;
              return (
                <div
                  key={key}
                  className={`bg-card-bg border-2 border-accent-emerald rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'shadow-offset' : 'shadow-offset-sm hover:translate-x-[-1px] hover:translate-y-[-1px]'
                  }`}
                >
                  <button
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-3 flex-1 pr-4">
                      <HelpCircle size={16} className={`mt-0.5 shrink-0 transition-colors ${isOpen ? 'text-accent-orange' : 'text-accent-green'}`} />
                      <span className="font-sans font-semibold text-sm md:text-base text-text-primary leading-snug">{item.q}</span>
                    </div>
                    <div className={`w-7 h-7 rounded-full border border-border-color flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 bg-accent-orange border-accent-orange text-white' : 'bg-page-bg text-text-primary'}`}>
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
                        <div className="px-6 pb-6 pt-1 border-t border-accent-emerald/20">
                          <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed">{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 bg-page-bg-sec border-t border-border-color transition-theme">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-handwriting text-2xl text-accent-orange -rotate-1 mb-3">Still have questions?</p>
          <h2 className="font-serif italic text-3xl text-text-primary mb-4">Talk to us directly.</h2>
          <p className="text-sm font-sans font-medium text-text-secondary mb-8">
            Every growth situation is different. Book a free discovery call and we will walk you through exactly how we can help your business.
          </p>
          <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-sans font-bold uppercase tracking-wider bg-accent-orange text-white border-2 border-accent-emerald hover:bg-accent-emerald transition-all shadow-offset">
            Book a Free Call
          </Link>
        </div>
      </section>
    </div>
  );
}
