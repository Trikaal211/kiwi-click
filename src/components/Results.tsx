import { useRef, useEffect, useState } from 'react';
import { useInView, animate } from 'framer-motion';
import { Target, Laptop, Users, TrendingUp } from 'lucide-react';

interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix: string;
  icon: any;
  desc: string;
  shadowClass: string;
  borderColor: string;
}

function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: 'easeOut',
        onUpdate: (val) => setCount(Math.floor(val)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Results() {
  const stats: StatItem[] = [
    {
      id: 1,
      label: 'Campaigns Managed',
      value: 200,
      suffix: '+',
      icon: Target,
      desc: 'Paid search & social campaigns optimized for continuous conversion efficiency.',
      shadowClass: 'shadow-offset-sm',
      borderColor: 'border-accent-emerald'
    },
    {
      id: 2,
      label: 'Web Projects',
      value: 50,
      suffix: '+',
      icon: Laptop,
      desc: 'High-converting custom React and Next.js digital properties deployed.',
      shadowClass: 'shadow-offset-orange',
      borderColor: 'border-accent-orange'
    },
    {
      id: 3,
      label: 'Businesses Served',
      value: 100,
      suffix: '+',
      icon: Users,
      desc: 'From high-growth local brands in Delhi to venture-backed startups.',
      shadowClass: 'shadow-offset-green',
      borderColor: 'border-accent-green'
    },
    {
      id: 4,
      label: 'Average ROI',
      value: 4,
      suffix: 'X',
      icon: TrendingUp,
      desc: 'Net returns on advertising investments designed and executed.',
      shadowClass: 'shadow-offset-sm',
      borderColor: 'border-accent-emerald'
    }
  ];

  return (
    <section 
      id="results" 
      className="relative py-16 md:py-24 px-6 md:px-12 bg-page-bg text-text-primary transition-theme"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              05 // TRACK RECORD
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-text-primary mt-2 transition-theme">
              Our Results
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              Impressions are cheap. Conversions matter. We hold our campaigns accountable to direct commercial growth and net revenue metrics.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => {
            const Icon = s.icon;
            
            return (
              <div 
                key={s.id}
                className={`bg-card-bg border-2 ${s.borderColor} rounded-3xl p-8 ${s.shadowClass} hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between min-h-[260px] group`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-page-bg-sec border border-border-color/20 flex items-center justify-center text-accent-emerald group-hover:bg-accent-orange/15 group-hover:text-accent-orange transition-colors duration-300 mb-6">
                    <Icon size={18} className="transition-theme" />
                  </div>
                  
                  <span className="text-4xl md:text-5xl font-sans font-extrabold text-text-primary tracking-tight transition-theme">
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                  
                  <h3 className="text-sm font-sans font-bold tracking-widest uppercase text-accent-emerald mt-3 group-hover:text-accent-orange transition-colors duration-300">
                    {s.label}
                  </h3>
                </div>

                <p className="text-[11px] font-sans font-medium text-text-secondary/60 leading-relaxed mt-4 transition-theme">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
