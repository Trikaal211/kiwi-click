import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  challenge: string;
  strategy: string;
  result: string;
  metrics: string;
  color: string;
  image: string;
  resultLabel: string;
  progress: number;
  shadowClass: string;
  href: string;
}

export default function FeaturedWork() {
  const cases: CaseStudy[] = [
    {
      id: 1,
      client: 'Veda Organics',
      industry: 'D2C Wellness',
      challenge: 'Unprofitable customer acquisition costs (CAC) on Meta Ads, coupled with low landing page conversion rates.',
      strategy: 'Restructured the creative pipeline around high-retention hooks and deployed speed-optimized React single-product landers.',
      result: 'ROAS increased to 4.8x with a 38% decrease in overall customer acquisition costs within 45 days.',
      metrics: '4.8x ROAS / -38% CAC',
      color: 'border-accent-emerald',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      resultLabel: 'ROAS Target Achieved',
      progress: 96,
      shadowClass: 'shadow-offset',
      href: '/services/shopify-dev'
    },
    {
      id: 2,
      client: 'Apex Realty CP',
      industry: 'B2B Real Estate',
      challenge: 'Receiving high volume of junk/unqualified leads from generic Google Search campaigns.',
      strategy: 'Implemented semantic search matching targeting high-intent commercial buyers and deployed progressive-profiling forms.',
      result: 'Qualified lead volume surged by 180% while reducing manual sales validation calls by 60%.',
      metrics: '+180% Qualified Leads',
      color: 'border-accent-orange',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
      resultLabel: 'Lead Qualification Rate',
      progress: 85,
      shadowClass: 'shadow-offset-orange',
      href: '/services/lead-generation'
    },
    {
      id: 3,
      client: 'SkillForge India',
      industry: 'EdTech App',
      challenge: 'High drop-offs between app downloads and user signups due to long email authentication friction.',
      strategy: 'Architected a passwordless WhatsApp verification sync and automated lead pings within the CRM database.',
      result: 'Signup conversion rate jumped from 41% to 84% while cutting user friction delays entirely.',
      metrics: '+105% Signup Rate',
      color: 'border-accent-green',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
      resultLabel: 'Registration Conversion',
      progress: 84,
      shadowClass: 'shadow-offset-green',
      href: '/services/business-web-dev'
    }
  ];

  return (
    <section 
      id="work" 
      className="relative py-10 md:py-16 px-6 md:px-12 bg-page-bg text-text-primary transition-theme"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              03 // CASE STUDIES
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-text-primary mt-2 transition-theme">
              Featured Work
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              We design solutions for real business hurdles. Study these cases to see how KiwiClicks structures search funnels, refines landing funnels, and activates growth.
            </p>
          </div>
        </div>

        {/* Case Studies Cards Stack */}
        <div className="space-y-12">
          {cases.map((c) => {
            return (
              <Link to={c.href} key={c.id} className="block">
                <motion.div
                  className={`w-full bg-card-bg border-2 ${c.color} rounded-3xl p-6 md:p-8 ${c.shadowClass} hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group`}
                >
                  {/* Horizontal progress highlight indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-green opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Thumbnail Column */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="w-full h-48 rounded-2xl overflow-hidden border-2 border-border-color/20 relative">
                      <img 
                        src={c.image} 
                        alt={`${c.client} case study`} 
                        loading="lazy"
                        className="w-full h-full object-cover grayscale opacity-95 dark:opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                      />
                    </div>
                    <div className="text-left">
                      <span className="text-[9px] font-mono tracking-widest text-accent-orange font-bold uppercase transition-theme">
                        {c.industry}
                      </span>
                      <h3 className="font-serif text-2xl text-text-primary mt-1 leading-tight transition-theme">
                        {c.client}
                      </h3>
                    </div>
                  </div>

                  {/* Challenge & Strategy Details Column */}
                  <div className="lg:col-span-5 space-y-4 text-left">
                    <div>
                      <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-secondary/60 transition-theme">
                        The Challenge:
                      </h4>
                      <p className="text-xs font-sans text-text-secondary mt-1 leading-relaxed transition-theme font-medium">
                        {c.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-secondary/60 transition-theme">
                        The Strategy:
                      </h4>
                      <p className="text-xs font-sans text-text-secondary mt-1 leading-relaxed transition-theme font-medium">
                        {c.strategy}
                      </p>
                    </div>
                  </div>

                  {/* Strategy Result Column */}
                  <div className="lg:col-span-3 flex flex-col justify-between h-full min-h-[180px] lg:pl-6 lg:border-l-2 border-border-color/20 text-left transition-theme">
                    <div>
                      <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-secondary/60 flex items-center gap-1.5 transition-theme">
                        <CheckCircle2 size={12} className="text-accent-green" />
                        The Result:
                      </h4>
                      <p className="text-xs font-sans font-bold text-text-primary mt-2 leading-relaxed transition-theme">
                        {c.result}
                      </p>
                    </div>

                    {/* Key results visual block */}
                    <div className="mt-4 space-y-1.5">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-text-secondary font-medium">{c.resultLabel}</span>
                        <span className="font-bold text-accent-green">{c.metrics}</span>
                      </div>
                      <div className="w-full h-1.5 bg-page-bg-sec rounded-full overflow-hidden border border-border-color/40">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${c.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 }}
                          className="h-full bg-accent-green"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <div className="w-9 h-9 rounded-xl bg-page-bg-sec text-text-primary group-hover:bg-accent-orange group-hover:text-page-bg border-2 border-border-color/20 flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>

                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
