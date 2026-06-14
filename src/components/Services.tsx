import { TrendingUp, Search, Target, Share2, Laptop, Cpu, ArrowUpRight } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  icon: any;
  desc: string;
  benefits: string[];
  metrics: string;
  image: string;
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: 'Digital Marketing',
      icon: TrendingUp,
      desc: 'Holistic growth strategies designed to acquire and nurture customers across channels.',
      benefits: [
        'Multi-channel campaign audits',
        'Customer journey mapping',
        'Direct-response landing pages'
      ],
      metrics: '3.8x Avg ROAS Increase',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'SEO Growth Systems',
      icon: Search,
      desc: 'Unlocking compounding organic traffic that bypasses high auction ad spend costs.',
      benefits: [
        'Entity-based semantic SEO',
        'Technical crawl budget audits',
        'High-authority link acquisition'
      ],
      metrics: '+320% Organic Traffic Growth',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Google Ads',
      icon: Target,
      desc: 'High-intent search campaigns targeting buyers at the exact second they seek your service.',
      benefits: [
        'Intent-focused keyword design',
        'Dynamic search ad templates',
        'Negative-keyword pruning scripts'
      ],
      metrics: '40% Drop in Cost-per-Lead',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Meta Ads Funnels',
      icon: Share2,
      desc: 'Disruptive content hooks and scroll-stopping creative formatting to activate buyer interest.',
      benefits: [
        'Creative pacing & script formats',
        'Lookalike custom audience stacks',
        'Post-click journey optimization'
      ],
      metrics: '5.2x ROAS on Creatives',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'Website Development',
      icon: Laptop,
      desc: 'Bespoke corporate platforms built for page velocity, accessibility, and direct lead capture.',
      benefits: [
        'Next.js & React frameworks',
        'Speed optimization (<1s load times)',
        'Built-in HubSpot/Salesforce leads sync'
      ],
      metrics: '7.8% Conv. Rate Benchmarks',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'AI Automation',
      icon: Cpu,
      desc: 'Custom workflows and automated AI agents to cut operating costs and accelerate lead follow-up.',
      benefits: [
        'Automated CRM validation systems',
        'OpenAI API platform integrations',
        'Speed-to-lead responder agents'
      ],
      metrics: '92% Reduction in Lead Response Time',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section 
      id="services" 
      className="relative py-24 md:py-36 px-6 md:px-12 bg-page-bg text-text-primary transition-theme"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              01 // DEPLOYMENTS
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-text-primary mt-2 transition-theme">
              Our Growth Services
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm font-sans font-light text-text-secondary leading-relaxed transition-theme">
              We engineer conversion systems. We design, optimize, and build metrics-driven channels that turn search interest and social scroll attention into net cash receipts.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            
            return (
              <div
                key={s.id}
                className="relative bg-card-bg border border-border-color rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[460px] group overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                />
                
                <div>
                  {/* Service image thumbnail */}
                  <div className="w-full h-40 rounded-2xl overflow-hidden mb-6 border border-border-color/60 relative group-hover:border-accent-green/20 transition-all duration-300">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      loading="lazy"
                      className="w-full h-full object-cover grayscale opacity-90 dark:opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-103 transition-all duration-700 ease-in-out"
                    />
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-page-bg-sec flex items-center justify-center text-accent-green group-hover:bg-gold-accent/15 group-hover:text-gold-accent transition-all duration-300">
                      <Icon size={18} className="transition-theme" />
                    </div>
                    
                    <span className="text-[9px] font-mono text-gold-accent font-semibold tracking-wider bg-gold-accent/5 px-2.5 py-0.5 rounded-full border border-gold-accent/15 transition-theme">
                      {s.metrics}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-text-primary mb-2 transition-theme">
                    {s.title}
                  </h3>
                  
                  <p className="text-xs font-sans font-light text-text-secondary leading-relaxed mb-4 transition-theme">
                    {s.desc}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Detailed benefits bullets */}
                  <ul className="space-y-1.5 border-t border-border-color pt-4 transition-theme">
                    {s.benefits.map((b, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-[10px] font-sans font-light text-text-secondary/80 transition-theme">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-green/60 transition-theme" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Read More link animation */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-accent-green group-hover:text-gold-accent transition-colors duration-300">
                      Optimize Channel
                    </span>
                    <div className="w-7 h-7 rounded-full bg-page-bg-sec text-text-primary group-hover:bg-gold-accent group-hover:text-page-bg transition-all duration-300 flex items-center justify-center">
                      <ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
