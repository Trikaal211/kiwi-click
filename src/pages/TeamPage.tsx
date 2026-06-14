import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Mail, Star, Award, Users, Target } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  isFounder?: boolean;
  quote?: string;
}

export default function TeamPage() {
  const team: TeamMember[] = [
    {
      name: 'Arjun Malhotra',
      role: 'Founder & Growth Strategist',
      bio: 'With 8+ years building digital growth engines for Delhi-based businesses, Arjun founded KiwiClicks with a clear mission: help ambitious brands escape generic marketing and build real, measurable pipelines. He has personally overseen campaigns generating over ₹40 Cr in attributable revenue for clients across real estate, D2C, and EdTech sectors.',
      expertise: ['Growth Strategy', 'Meta Ads', 'Conversion Systems', 'Brand Positioning'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
      linkedin: '#',
      twitter: '#',
      email: 'arjun@kiwiclicks.agency',
      isFounder: true,
      quote: '"Every campaign we run is a conversation between your brand and a real human being. We treat it like one."'
    },
    {
      name: 'Priya Nair',
      role: 'Head of SEO & Local Search',
      bio: 'Priya specializes in semantic SEO, Google Business Profile optimization, and local ranking systems for Delhi businesses. She has ranked 50+ brands to Google page 1 within competitive CP and NCR markets, driving organic traffic that compounds month over month.',
      expertise: ['Technical SEO', 'Local SEO', 'Google Business', 'Keyword Strategy'],
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
      linkedin: '#',
      email: 'priya@kiwiclicks.agency',
    },
    {
      name: 'Rahul Verma',
      role: 'Lead Web Developer',
      bio: 'Rahul architects high-performance websites using React, Next.js, and Vite that load in under 1 second and convert visitors into qualified leads. Every site he ships includes HubSpot or CRM integrations, WhatsApp lead routing, and analytics dashboards.',
      expertise: ['React & Next.js', 'Performance Optimization', 'CRM Integrations', 'UX Engineering'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
      linkedin: '#',
      email: 'rahul@kiwiclicks.agency',
    },
    {
      name: 'Sneha Kapoor',
      role: 'Social Media & Paid Ads Strategist',
      bio: 'Sneha manages Meta and Google Ads accounts spending ₹50L+ monthly for KiwiClicks clients. She is known for creative scripting frameworks that achieve under-3-second hook rates and for building lookalike audience stacks that consistently hit 4-5x ROAS.',
      expertise: ['Meta Ads', 'Google Ads', 'Creative Strategy', 'Audience Research'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
      linkedin: '#',
      twitter: '#',
      email: 'sneha@kiwiclicks.agency',
    }
  ];

  const values = [
    { icon: Target, title: 'Results First', desc: 'We measure success in business outcomes — qualified leads, ROAS, and revenue — not vanity metrics.' },
    { icon: Users, title: 'Real Partnership', desc: 'We embed ourselves in your growth story. You get direct access to the people doing the work, always.' },
    { icon: Award, title: 'Transparent Process', desc: 'Weekly reports, plain-English explanations, and milestone-based pricing. No smoke and mirrors.' },
    { icon: Star, title: 'Delhi-Native Edge', desc: 'We understand CP commercial intent, NCR buyer behavior, and local market dynamics better than any out-of-city agency.' },
  ];

  const founder = team[0];
  const specialists = team.slice(1);

  return (
    <div className="min-h-screen bg-page-bg text-text-primary pt-24 transition-theme">

      {/* Hero Header */}
      <section className="py-16 md:py-20 px-6 md:px-12 border-b border-border-color transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">
                Meet the Team
              </span>
              <h1 className="font-serif italic text-5xl md:text-7xl text-text-primary mt-3 leading-tight">
                The People Behind<br />
                <span className="font-sans font-extrabold not-italic text-accent-green">Your Growth</span>
              </h1>
            </div>
            <p className="max-w-md text-base font-sans font-medium text-text-secondary leading-relaxed">
              We are a compact, senior team based out of Connaught Place, Delhi. No juniors managing your campaigns. The people you meet are the people who do the work.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Card — Full Width Featured */}
      <section className="py-16 px-6 md:px-12 bg-page-bg transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card-bg border-4 border-accent-emerald rounded-3xl overflow-hidden shadow-offset transition-theme">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image */}
              <div className="lg:col-span-4 h-72 lg:h-auto relative overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <span className="text-[9px] font-mono text-white/80 bg-black/50 px-2 py-1 rounded tracking-widest uppercase">Founder</span>
                </div>
              </div>
              {/* Content */}
              <div className="lg:col-span-8 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[9px] font-mono bg-accent-orange/10 text-accent-orange border border-accent-orange/20 px-3 py-1 rounded-full font-bold tracking-widest uppercase hidden lg:inline-flex">
                      Founder & CEO
                    </span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-accent-orange text-accent-orange" />
                      ))}
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-1">{founder.name}</h2>
                  <p className="text-sm font-sans font-bold text-accent-green tracking-wide mb-5">{founder.role}</p>
                  <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed mb-6">{founder.bio}</p>

                  {founder.quote && (
                    <blockquote className="font-handwriting text-lg text-accent-emerald dark:text-accent-green border-l-4 border-accent-orange pl-4 italic mb-6">
                      {founder.quote}
                    </blockquote>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {founder.expertise.map((e) => (
                      <span key={e} className="text-[10px] font-sans font-bold bg-page-bg border-2 border-accent-emerald text-accent-emerald px-3 py-1 rounded-lg shadow-offset-sm">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-border-color">
                  {founder.linkedin && <a href={founder.linkedin} className="w-9 h-9 rounded-xl border-2 border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-emerald hover:text-white hover:border-accent-emerald transition-all"><ExternalLink size={14} /></a>}
                  {founder.email && <a href={`mailto:${founder.email}`} className="flex items-center gap-2 text-xs font-sans font-medium text-text-secondary hover:text-accent-orange transition-colors"><Mail size={14} /> {founder.email}</a>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Team */}
      <section className="py-16 px-6 md:px-12 bg-page-bg-sec transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-border-color pb-8">
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">Our Specialists</span>
            <h2 className="font-serif italic text-4xl text-text-primary mt-2">Senior Team Members</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialists.map((member, idx) => {
              const shadows = ['shadow-offset', 'shadow-offset-orange', 'shadow-offset-green'];
              const borders = ['border-accent-emerald', 'border-accent-orange', 'border-accent-green'];
              return (
                <div key={idx} className={`bg-card-bg border-2 ${borders[idx]} rounded-3xl overflow-hidden ${shadows[idx]} hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300`}>
                  <div className="h-56 overflow-hidden relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-text-primary mb-1">{member.name}</h3>
                    <p className="text-xs font-sans font-bold text-accent-green tracking-wide mb-3">{member.role}</p>
                    <p className="text-xs font-sans font-medium text-text-secondary leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {member.expertise.map((e) => (
                        <span key={e} className="text-[9px] font-sans font-bold bg-page-bg border border-border-color text-text-secondary px-2 py-0.5 rounded-md">
                          {e}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-border-color">
                      {member.linkedin && <a href={member.linkedin} className="w-8 h-8 rounded-lg border border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-emerald hover:text-white transition-all"><ExternalLink size={12} /></a>}
                      {member.email && <a href={`mailto:${member.email}`} className="text-[10px] font-sans text-text-secondary hover:text-accent-orange transition-colors">{member.email}</a>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agency Values */}
      <section className="py-16 px-6 md:px-12 bg-page-bg transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-border-color pb-8">
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">How We Work</span>
            <h2 className="font-serif italic text-4xl text-text-primary mt-2">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="bg-card-bg border-2 border-accent-emerald rounded-2xl p-6 shadow-offset-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center text-accent-orange mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-sans font-bold text-base text-text-primary mb-2">{v.title}</h3>
                  <p className="text-xs font-sans font-medium text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 bg-accent-emerald text-white transition-theme">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif italic text-4xl md:text-5xl mb-4">Work With Our Team</h2>
          <p className="text-base font-sans font-medium text-white/80 mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call. We will audit your current digital presence and walk you through a growth roadmap — no obligations.
          </p>
          <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-sans font-bold uppercase tracking-wider bg-accent-orange text-white border-2 border-white hover:bg-white hover:text-accent-emerald transition-all shadow-offset">
            Book Discovery Call <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
