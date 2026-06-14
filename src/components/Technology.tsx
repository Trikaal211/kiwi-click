import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  category: string;
  desc: string;
  icon: any;
  floatingTransition: { y: number[]; duration: number; delay: number };
}

// Custom Premium Inline SVG Icons
const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
);

const AdsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

const MetaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 10c-1.5-2.5-3-2.5-4.5-2.5C5 7.5 3.5 9 3.5 11.5s1.5 4 4 4c1.5 0 3-1 4.5-3.5 1.5 2.5 3 3.5 4.5 3.5 2.5 0 4-1.5 4-4s-1.5-4-4-4c-1.5 0-3 0-4.5 2.5z" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(0 12 12)" />
    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" />
    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
    <path d="M12 22V12" />
    <path d="M2 7l10 5 10-5" />
  </svg>
);

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 1 9 9M12 21a9 9 0 0 1-9-9" />
    <path d="M7 12a5 5 0 0 1 5-5M17 12a5 5 0 0 1-5 5" />
  </svg>
);

const AhrefsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
    <path d="M8 11h6" />
    <path d="M11 8v6" />
  </svg>
);

const ConsoleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m10 10-3 3 3 3" />
    <path d="M14 16h3" />
  </svg>
);

export default function Technology() {
  const tools: TechItem[] = [
    {
      name: 'Google Analytics',
      category: 'Data Tracking',
      desc: 'Configuring custom event pathways, behavioral segments, and traffic path log reports.',
      icon: AnalyticsIcon,
      floatingTransition: { y: [0, -6, 0], duration: 4.2, delay: 0.1 }
    },
    {
      name: 'Google Ads',
      category: 'Paid Search',
      desc: 'Engineering intent-targeted campaigns that convert search inquiries into inquiries.',
      icon: AdsIcon,
      floatingTransition: { y: [0, -8, 0], duration: 4.8, delay: 0.3 }
    },
    {
      name: 'Meta Business',
      category: 'Paid Social',
      desc: 'Deploying dynamic lookalike audiences, tracking pixels, and hook script testing.',
      icon: MetaIcon,
      floatingTransition: { y: [0, -7, 0], duration: 4.4, delay: 0.5 }
    },
    {
      name: 'React',
      category: 'Frontend Code',
      desc: 'Building high-performance design landing pages loaded with micro-animations.',
      icon: ReactIcon,
      floatingTransition: { y: [0, -9, 0], duration: 5.1, delay: 0.2 }
    },
    {
      name: 'Node.js',
      category: 'Backend APIs',
      desc: 'Routing leads safely from database triggers directly into CRM systems.',
      icon: NodeIcon,
      floatingTransition: { y: [0, -6, 0], duration: 4.0, delay: 0.6 }
    },
    {
      name: 'OpenAI API',
      category: 'AI Automation',
      desc: 'Integrating AI responder flows that respond to incoming leads under 3 minutes.',
      icon: OpenAIIcon,
      floatingTransition: { y: [0, -8, 0], duration: 4.6, delay: 0.4 }
    },
    {
      name: 'Ahrefs',
      category: 'SEO Auditing',
      desc: 'Analyzing competitor keyword gaps and monitoring crawl/backlink health.',
      icon: AhrefsIcon,
      floatingTransition: { y: [0, -5, 0], duration: 4.3, delay: 0.7 }
    },
    {
      name: 'Search Console',
      category: 'Technical Index',
      desc: 'Validating semantic indexing, indexing status, and structural schemas.',
      icon: ConsoleIcon,
      floatingTransition: { y: [0, -7, 0], duration: 4.5, delay: 0.1 }
    }
  ];

  return (
    <section 
      id="tech" 
      className="relative py-24 md:py-36 px-6 md:px-12 bg-page-bg-sec text-text-primary transition-theme overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              06 // STACK INTEGRATION
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-text-primary mt-2 transition-theme">
              Technology Stack
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm font-sans font-light text-text-secondary leading-relaxed transition-theme">
              We coordinate high-performance marketing channels and automated databases to execute campaigns with precision and maximum velocity.
            </p>
          </div>
        </div>

        {/* Floating tech cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((t, idx) => {
            const IconComponent = t.icon;
            
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="relative"
              >
                <motion.div
                  animate={{ y: t.floatingTransition.y }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: t.floatingTransition.duration,
                      ease: 'easeInOut',
                      delay: t.floatingTransition.delay
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card-bg border-2 border-accent-emerald p-6 rounded-2xl shadow-offset-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 h-[210px] flex flex-col justify-between group cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-page-bg-sec flex items-center justify-center text-accent-green group-hover:bg-gold-accent/15 group-hover:text-gold-accent transition-colors duration-300">
                      <IconComponent />
                    </div>
                    <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-text-secondary/50 bg-page-bg-sec px-2.5 py-1 rounded-full border border-border-color transition-theme">
                      {t.category}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-serif text-lg text-text-primary transition-theme">
                      {t.name}
                    </h3>
                    <p className="text-[11px] font-sans font-light text-text-secondary/60 leading-relaxed mt-1 line-clamp-3 transition-theme">
                      {t.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
