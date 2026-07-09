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
  resultLabel: string;
  progress: number;
  image: string;
  href: string;
  borderColor: string;
  glowColor: string;
}

export default function FeaturedWork() {
  const cases: CaseStudy[] = [
    {
      id: 1,
      client: 'Veda Labs (SaaS & B2B)',
      industry: 'Growth Marketing & Social Ads',
      challenge: 'High cost per acquisition and long enterprise sales cycles scaling meta campaigns.',
      strategy: 'Designed full-funnel custom creative hooks, negative keyword lists, and attribution models.',
      result: 'Lowered cost per qualified demo by 40% and sustained Meta ROAS metrics across channels.',
      metrics: '4.8x ROAS',
      resultLabel: 'Growth Ratio',
      progress: 92,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
      href: '/results',
      borderColor: 'hover:border-accent-green/30',
      glowColor: 'hover:shadow-[0_15px_35px_rgba(0,255,102,0.06)]'
    },
    {
      id: 2,
      client: 'Apex Systems (Industrial)',
      industry: 'Enterprise SEO & Lead Pipelines',
      challenge: 'Highly competitive niche keywords and low intent leads syncing to CRM databases.',
      strategy: 'Built structured schema maps, topical keyword cluster architectures, and speed landing redirects.',
      result: 'Ranked #1 for core terms and increased HubSpot CRM qualification pipelines with zero friction.',
      metrics: '+320% Lead Value',
      resultLabel: 'Pipeline Growth',
      progress: 85,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
      href: '/results',
      borderColor: 'hover:border-cyan-400/30',
      glowColor: 'hover:shadow-[0_15px_35px_rgba(6,182,212,0.06)]'
    },
    {
      id: 3,
      client: 'SkillForge Platform',
      industry: 'Conversion Engineering & Next.js Stacks',
      challenge: 'Slow mobile load times on outdated structures leaking checkout conversions.',
      strategy: 'Migrated framework to modular Next.js layouts, serverless webhooks, and custom tracking.',
      result: 'Drastically improved Core Web Vitals score to 100/100 and cut acquisition drop-offs.',
      metrics: '10X Conversion Speed',
      resultLabel: 'Performance Score',
      progress: 98,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
      href: '/results',
      borderColor: 'hover:border-yellow-400/30',
      glowColor: 'hover:shadow-[0_15px_35px_rgba(251,191,36,0.06)]'
    }
  ];

  return (
    <section 
      id="work" 
      className="relative py-20 md:py-32 px-6 md:px-12 bg-page-bg text-text-primary transition-theme border-b border-border-color"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-6 transition-theme">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent-green font-bold uppercase">
              03 // SUCCESS STORIES
            </span>
            <h2 className="font-sans font-extrabold text-4xl md:text-6xl text-text-primary mt-3 uppercase transition-theme">
              Featured Case Studies
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              Explore how we design and deploy high-performance growth loops for fast-growing global brands.
            </p>
          </div>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-12">
          {cases.map((c) => {
            return (
              <Link to={c.href} key={c.id} className="block group">
                <motion.div
                  className={`w-full bg-card-bg backdrop-blur-md border border-border-color rounded-3xl p-6 md:p-8 hover:border-text-secondary/30 transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden ${c.borderColor} ${c.glowColor}`}
                >
                  {/* Thumbnail Column */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="w-full h-48 rounded-2xl overflow-hidden border border-border-color relative bg-page-bg transition-theme">
                      <img 
                        src={c.image} 
                        alt={`${c.client} case study`} 
                        loading="lazy"
                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-in-out"
                      />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-mono tracking-widest text-accent-green font-bold uppercase">
                        {c.industry}
                      </span>
                      <h3 className="font-sans font-extrabold text-2xl text-text-primary mt-1 leading-tight transition-theme">
                        {c.client}
                      </h3>
                    </div>
                  </div>

                  {/* Challenge & Strategy Column */}
                  <div className="lg:col-span-5 space-y-5 text-left">
                    <div>
                      <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-text-secondary opacity-60">
                        The Challenge:
                      </h4>
                      <p className="text-xs font-sans text-text-secondary mt-1.5 leading-relaxed font-medium transition-theme">
                        {c.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-text-secondary opacity-60">
                        The Strategy:
                      </h4>
                      <p className="text-xs font-sans text-text-secondary mt-1.5 leading-relaxed font-medium transition-theme">
                        {c.strategy}
                      </p>
                    </div>
                  </div>

                  {/* Result Column */}
                  <div className="lg:col-span-3 flex flex-col justify-between h-full min-h-[180px] lg:pl-8 lg:border-l border-border-color text-left transition-theme">
                    <div>
                      <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-text-secondary opacity-65 flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-accent-green" />
                        The Result:
                      </h4>
                      <p className="text-xs font-sans font-bold text-text-primary mt-2.5 leading-relaxed transition-theme">
                        {c.result}
                      </p>
                    </div>

                    {/* Results Progress Bar */}
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-[10px] font-mono">
                        <span className="text-text-secondary font-medium transition-theme">{c.resultLabel}</span>
                        <span className="font-bold text-accent-green">{c.metrics}</span>
                      </div>
                      <div className="w-full h-1.5 bg-page-bg rounded-full overflow-hidden border border-border-color transition-theme">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${c.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-accent-green to-emerald-400"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <div className="w-9 h-9 rounded-full bg-page-bg-sec text-text-secondary group-hover:bg-accent-green group-hover:text-slate-950 border border-border-color flex items-center justify-center transition-all duration-300">
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
