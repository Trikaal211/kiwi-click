import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  desc: string;
  benefits: string[];
  metrics: string;
  shadowClass: string;
  borderColor: string;
  image: string;
  imageAlt: string;
  href: string;
  tag: string;
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: 'SEO & Local SEO',
      desc: 'Rank on Google Maps and page 1 for the searches your customers are already making. Compounding organic traffic with no ongoing ad costs.',
      benefits: [
        'Google Business Profile optimization',
        'Local Maps top 3 ranking',
        'Semantic keyword architecture',
      ],
      metrics: '+320% Organic Traffic',
      shadowClass: 'shadow-offset',
      borderColor: 'border-accent-emerald',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'SEO analytics dashboard showing keyword rankings and organic traffic growth',
      href: '/seo-local-seo',
      tag: 'SEO'
    },
    {
      id: 2,
      title: 'Social Media Marketing',
      desc: 'Scroll-stopping content and Meta ad campaigns engineered to capture attention, build trust, and drive qualified enquiries from your ideal customers.',
      benefits: [
        'Instagram content strategy & production',
        'Meta Ads with 3-second hook framework',
        'Audience research & lookalike targeting',
      ],
      metrics: '4.8x Average ROAS',
      shadowClass: 'shadow-offset-orange',
      borderColor: 'border-accent-orange',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Social media marketing dashboard with campaign performance metrics',
      href: '/social-media-marketing',
      tag: 'Social'
    },
    {
      id: 3,
      title: 'Website Development',
      desc: 'Custom React and Next.js websites built for speed, search rankings, and conversion. Every site includes CRM integration, WhatsApp lead routing, and analytics.',
      benefits: [
        'Sub-1.5 second load times',
        'Mobile-first conversion design',
        'CRM & WhatsApp lead routing',
      ],
      metrics: '7.8% Avg Conv. Rate',
      shadowClass: 'shadow-offset-green',
      borderColor: 'border-accent-green',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Modern website design mockup showing responsive web development',
      href: '/web-development',
      tag: 'Web Dev'
    },
    {
      id: 4,
      title: 'Google Ads',
      desc: 'High-intent search campaigns targeting buyers at the exact moment they are ready to act. We manage your entire Google Ads account end-to-end.',
      benefits: [
        'Intent-focused keyword strategy',
        'Negative keyword pruning system',
        'Landing page + tracking setup',
      ],
      metrics: '-40% Cost Per Lead',
      shadowClass: 'shadow-offset',
      borderColor: 'border-accent-emerald',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Google Ads performance dashboard showing campaign metrics and conversions',
      href: '/social-media-marketing',
      tag: 'Google Ads'
    },
    {
      id: 5,
      title: 'AI & Business Automation',
      desc: 'Cut 20+ hours of manual work per week. We build lead qualification systems, CRM automation pipelines, WhatsApp AI agents, and automated reporting.',
      benefits: [
        '90-second lead response system',
        'Automated CRM data population',
        'AI customer support agents',
      ],
      metrics: '92% Time Saved',
      shadowClass: 'shadow-offset-orange',
      borderColor: 'border-accent-orange',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'AI workflow automation diagram showing business process automation',
      href: '/ai-automation',
      tag: 'AI'
    },
    {
      id: 6,
      title: 'Content Strategy',
      desc: 'Strategic content that builds topical authority, earns organic backlinks, and positions your brand as the trusted expert in your Delhi market.',
      benefits: [
        'Semantic content cluster planning',
        'Blog, case study & local page writing',
        'Internal linking architecture',
      ],
      metrics: '+185% Organic Leads',
      shadowClass: 'shadow-offset-green',
      borderColor: 'border-accent-green',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Content strategy planning session with editorial calendar',
      href: '/seo-local-seo',
      tag: 'Content'
    }
  ];

  return (
    <section
      id="services"
      className="relative py-16 md:py-24 px-6 md:px-12 bg-page-bg text-text-primary transition-theme"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              01 // SERVICES
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl text-text-primary mt-2 transition-theme">
              What We Do
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              We engineer growth systems across every digital channel. From search rankings and paid ads to custom websites and AI automation — every service is built to generate measurable business outcomes.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.id}
              to={s.href}
              className={`relative bg-card-bg border-2 ${s.borderColor} rounded-3xl overflow-hidden ${s.shadowClass} hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300 flex flex-col group`}
            >
              {/* Real Image */}
              <div className="w-full h-44 overflow-hidden relative">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-card-bg text-text-primary text-[9px] font-mono font-bold px-2.5 py-1 rounded-md border border-border-color shadow-sm transition-theme">
                  {s.tag}
                </span>
                {/* Metric badge */}
                <span className="absolute top-3 right-3 text-[9px] font-mono text-accent-orange font-bold tracking-wider bg-card-bg/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-accent-orange/30">
                  {s.metrics}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl text-text-primary mb-2 transition-theme group-hover:text-accent-orange transition-colors duration-300">
                  {s.title}
                </h3>

                <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed mb-5 transition-theme flex-1">
                  {s.desc}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 border-t border-border-color pt-4 mb-5 transition-theme">
                  {s.benefits.map((b, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-xs font-sans font-medium text-text-secondary transition-theme">
                      <CheckCircle2 size={13} className="text-accent-green mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA Row */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-accent-green group-hover:text-accent-orange transition-colors duration-300">
                    Learn More
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-page-bg-sec text-text-primary group-hover:bg-accent-orange group-hover:text-white transition-all duration-300 flex items-center justify-center border border-border-color/20">
                    <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
