import { Link } from 'react-router-dom';
import { CheckCircle, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackGetStartedClick } from '../lib/analytics';

interface ServicePageProps {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  category: string;
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  caseStudy: {
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    result: string;
    metrics: string[];
    image: string;
  };
  faqs: { q: string; a: string }[];
}

export default function ServicePageTemplate({ props }: { props: ServicePageProps }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-page-bg text-text-primary pt-32 md:pt-36 lg:pt-40 transition-theme">

      {/* Hero */}
      <section className="py-16 md:py-20 px-6 md:px-12 border-b border-border-color transition-theme">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-[9px] font-mono bg-accent-orange/10 text-accent-orange border border-accent-orange/20 px-3 py-1 rounded-full font-bold tracking-widest uppercase">
              {props.category}
            </span>
            <h1 className="font-serif italic text-4xl md:text-6xl text-text-primary mt-4 mb-5 leading-tight">
              {props.title}
            </h1>
            <p className="text-lg font-sans font-bold text-accent-green mb-4">{props.tagline}</p>
            <p className="text-base font-sans font-medium text-text-secondary leading-relaxed mb-8">
              {props.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/#contact" 
                onClick={() => trackGetStartedClick('Service Page Hero')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-sans font-bold uppercase tracking-wider bg-accent-orange text-white border-2 border-accent-emerald hover:bg-accent-emerald transition-all shadow-offset"
              >
                Get Started <ArrowUpRight size={13} />
              </Link>
              <Link to="/results" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-sans font-bold uppercase tracking-wider bg-card-bg text-text-primary border-2 border-border-color hover:border-accent-orange transition-all shadow-offset-sm">
                View Results
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 h-72 md:h-96 rounded-3xl overflow-hidden border-4 border-accent-emerald shadow-offset">
            <img src={props.heroImage} alt={props.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-12 bg-page-bg transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-border-color pb-8">
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">What You Get</span>
            <h2 className="font-serif italic text-4xl text-text-primary mt-2">Key Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.benefits.map((b, idx) => (
              <div key={idx} className="bg-card-bg border-2 border-accent-emerald rounded-2xl p-6 shadow-offset-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center mb-4">
                  <CheckCircle size={16} className="text-accent-orange" />
                </div>
                <h3 className="font-sans font-bold text-base text-text-primary mb-2">{b.title}</h3>
                <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 md:px-12 bg-page-bg-sec transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-border-color pb-8">
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">How We Work</span>
            <h2 className="font-serif italic text-4xl text-text-primary mt-2">Our Process</h2>
          </div>
          <div className="space-y-4">
            {props.process.map((p, idx) => (
              <div key={idx} className="flex items-start gap-6 bg-card-bg border-2 border-accent-emerald rounded-2xl p-6 shadow-offset-sm">
                <div className="w-12 h-12 rounded-xl bg-accent-emerald text-white flex items-center justify-center font-sans font-bold text-lg shrink-0">
                  {p.step}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-text-primary mb-1">{p.title}</h3>
                  <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-6 md:px-12 bg-page-bg transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-border-color pb-8">
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">Real Results</span>
            <h2 className="font-serif italic text-4xl text-text-primary mt-2">Case Study</h2>
          </div>
          <div className="bg-card-bg border-4 border-accent-emerald rounded-3xl overflow-hidden shadow-offset">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 h-56 lg:h-auto overflow-hidden">
                <img src={props.caseStudy.image} alt={props.caseStudy.client} className="w-full h-full object-cover" />
              </div>
              <div className="lg:col-span-8 p-8 md:p-10">
                <span className="text-[9px] font-mono text-accent-orange font-bold uppercase tracking-widest">{props.caseStudy.industry}</span>
                <h3 className="font-serif text-2xl text-text-primary mt-1 mb-6">{props.caseStudy.client}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-secondary mb-2">The Challenge</h4>
                    <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed">{props.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-secondary mb-2">The Solution</h4>
                    <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed">{props.caseStudy.solution}</p>
                  </div>
                </div>
                <div className="p-4 bg-accent-green/10 border border-accent-green/20 rounded-xl mb-6">
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-accent-green mb-2">The Result</h4>
                  <p className="text-sm font-sans font-bold text-text-primary leading-relaxed">{props.caseStudy.result}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {props.caseStudy.metrics.map((m, mIdx) => (
                    <span key={mIdx} className="text-xs font-mono font-bold bg-card-bg border-2 border-accent-orange text-accent-orange px-3 py-1.5 rounded-lg shadow-offset-sm">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-12 bg-page-bg-sec transition-theme">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-border-color pb-8">
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">Common Questions</span>
            <h2 className="font-serif italic text-4xl text-text-primary mt-2">FAQs</h2>
          </div>
          <div className="space-y-4">
            {props.faqs.map((faq, idx) => (
              <div key={idx} className={`bg-card-bg border-2 border-accent-emerald rounded-2xl overflow-hidden ${openFaq === idx ? 'shadow-offset' : 'shadow-offset-sm'}`}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer">
                  <span className="font-sans font-semibold text-sm md:text-base text-text-primary pr-4 leading-snug">{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full border border-border-color flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'rotate-180 bg-accent-orange border-accent-orange text-white' : 'bg-page-bg text-text-primary'}`}>
                    <ChevronDown size={13} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <div className="px-6 pb-6 pt-1 border-t border-accent-emerald/20">
                        <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 md:px-12 bg-accent-emerald text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif italic text-4xl md:text-5xl mb-4">Ready to Get Started?</h2>
          <p className="text-base font-medium text-white/80 mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call. We will audit your current setup and map a clear growth roadmap specific to your business.
          </p>
          <Link 
            to="/#contact" 
            onClick={() => trackGetStartedClick('Service Page Bottom')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-sans font-bold uppercase tracking-wider bg-accent-orange text-white border-2 border-white hover:bg-white hover:text-accent-emerald transition-all shadow-offset"
          >
            Book Your Free Call <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
