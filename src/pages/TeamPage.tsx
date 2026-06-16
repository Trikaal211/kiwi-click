import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Mail, Star, Award, Users, Target, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import apiClient from '../api/client';

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

const defaultTeam: TeamMember[] = [
  {
    name: 'Bandana Kumari',
    role: 'Founder & Growth Strategist',
    bio: 'Bandana Kumari is the Founder & Growth Strategist at KiwiClicks. She specializes in Local SEO, Google Business Profile Optimization, Lead Generation, Digital Marketing Strategy, and Online Reputation Management.\n\nWith 4+ years of experience helping local businesses generate visibility, trust, and qualified leads, she focuses on building sustainable growth systems instead of short-term marketing tactics.\n\nShe has successfully helped businesses improve Google rankings, increase inquiries, optimize local search presence, and create measurable growth through data-driven digital marketing strategies.',
    expertise: ['Local SEO', 'Google Profile Optimization', 'Lead Generation', 'Digital Strategy', 'Reputation Management'],
    image: '/cofounder.png', // Swapped: cofounder.png has the female profile photo
    linkedin: 'https://linkedin.com/in/bandana-kumari',
    twitter: 'https://twitter.com/bandana_strategy',
    email: 'bandana.k.official@gmail.com',
    isFounder: true,
    quote: '"We build sustainable growth systems instead of short-term marketing tactics."'
  },
  {
    name: 'Shammy Kumar',
    role: 'Co-Founder & Growth Strategist',
    bio: 'Shammy Kumar is a Digital Marketing & Growth Specialist with expertise in SEO, Google Ads, Meta Ads, Lead Generation, Website Development, Shopify, WordPress, and Marketing Automation.\n\nWith experience across 30+ business categories, he helps companies scale visibility, generate qualified leads, and build conversion-focused digital systems that drive long-term growth.\n\nHis strength lies in combining technical execution with marketing strategy to produce measurable business outcomes.',
    expertise: ['Shopify & WordPress', 'Google & Meta Ads', 'Lead Generation', 'Marketing Automation', 'Growth Funnels'],
    image: '/founder.png', // Swapped: founder.png has the male profile photo
    linkedin: 'https://linkedin.com/in/shammy-kumar',
    twitter: 'https://twitter.com/shammy_ads',
    email: 'info@kiwiclicks.in',
    isFounder: true,
    quote: '"Combining technical execution with marketing strategy produces measurable business outcomes."'
  },
  {
    name: 'Priya Sharma',
    role: 'SEO Specialist',
    bio: 'Priya is a dedicated SEO Specialist focusing on Local SEO, ranking local business listings, and executing technical search strategies to maximize organic search visibility.',
    expertise: ['Technical SEO', 'Local Citations', 'Maps Ranking', 'On-Page Optimization'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/priya-sharma-seo',
    email: 'info@kiwiclicks.in'
  },
  {
    name: 'Rahul Verma',
    role: 'Performance Marketing Manager',
    bio: 'Rahul manages performance marketing budgets, designing and scaling conversion-focused ad campaigns on Meta and Google to drive inbound leads.',
    expertise: ['Meta Ads Manager', 'Google Ads', 'ROAS Optimization', 'A/B Testing'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/rahul-verma-marketing',
    email: 'info@kiwiclicks.in'
  },
  {
    name: 'Neha Arora',
    role: 'Content & Brand Strategist',
    bio: 'Neha is a creative content strategist and copywriter, formulating brand campaigns and content schedules that engage audiences and build digital trust.',
    expertise: ['Brand Messaging', 'Content Calendars', 'Copywriting', 'Online Engagement'],
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/neha-arora-content',
    email: 'info@kiwiclicks.in'
  }
];

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>(defaultTeam);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await apiClient.get('/team');
        const dbMembers = response.data.data.teamMembers;
        if (dbMembers && dbMembers.length > 0) {
          // Map DB team members and merge with default details if matching by name
          const mapped = dbMembers.map((dbM: any) => {
            const defM = defaultTeam.find(m => m.name.toLowerCase() === dbM.name.toLowerCase());
            
            // Resolve correct image paths in database sync
            let img = dbM.image;
            if (dbM.name === 'Bandana Kumari') img = '/cofounder.png';
            if (dbM.name === 'Shammy Kumar') img = '/founder.png';

            return {
              name: dbM.name,
              role: dbM.designation,
              bio: dbM.bio,
              image: img,
              linkedin: dbM.linkedin || undefined,
              twitter: dbM.twitter || undefined,
              email: defM?.email || 'info@kiwiclicks.in',
              expertise: defM?.expertise || [dbM.designation],
              isFounder: defM?.isFounder || dbM.designation.toLowerCase().includes('founder'),
              quote: defM?.quote
            };
          });
          setTeam(mapped);
        }
      } catch (err) {
        console.error('Failed to fetch team from API, using static default:', err);
      }
    };
    fetchTeam();
  }, []);

  const values = [
    { icon: Target, title: 'Results First', desc: 'We measure success in business outcomes — qualified leads, ROAS, and revenue — not vanity metrics.' },
    { icon: Users, title: 'Real Partnership', desc: 'We embed ourselves in your growth story. You get direct access to the people doing the work, always.' },
    { icon: Award, title: 'Transparent Process', desc: 'Weekly reports, plain-English explanations, and milestone-based pricing. No smoke and mirrors.' },
    { icon: Star, title: 'Delhi-Native Edge', desc: 'We understand local buyer behavior and local market dynamics better than any out-of-city agency.' },
  ];

  // Extract profiles to align visual sizing correctly
  const founder = team.find(m => m.name === 'Bandana Kumari') || team[0];
  const coFounder = team.find(m => m.name === 'Shammy Kumar') || team[1];
  const specialists = team.filter(m => m.name !== 'Bandana Kumari' && m.name !== 'Shammy Kumar');

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
              We are a compact, senior team based out of Dwarka, New Delhi. No juniors managing your campaigns. The people you meet are the people who do the work.
            </p>
          </div>
        </div>
      </section>

      {/* Founders — Full Width Featured */}
      <section className="py-16 px-6 md:px-12 bg-page-bg transition-theme">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* 1. Founder Card - Large, highly prominent layout */}
          {founder && (
            <div className="bg-card-bg border-4 border-accent-emerald rounded-3xl overflow-hidden shadow-offset transition-theme relative">
              {/* Trust Badge overlay */}
              <div className="absolute top-4 right-4 hidden md:flex items-center gap-1.5 bg-accent-green text-white px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold tracking-widest uppercase border-2 border-white shadow-md z-10">
                <ShieldCheck size={12} /> KiwiClicks Founder
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image */}
                <div className="lg:col-span-5 h-80 lg:h-auto relative overflow-hidden bg-page-bg-sec/50 border-r-0 lg:border-r-4 lg:border-accent-emerald">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r" />
                  <div className="absolute bottom-4 left-4 lg:hidden">
                    <span className="text-[10px] font-mono text-white bg-accent-green px-2.5 py-1 rounded-lg tracking-widest uppercase font-bold">FOUNDER</span>
                  </div>
                </div>
                {/* Content */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[9px] font-mono bg-accent-green/10 text-accent-green border border-accent-green/20 px-3 py-1 rounded-full font-bold tracking-widest uppercase">
                        Chief Strategist
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} className="fill-accent-orange text-accent-orange" />
                        ))}
                      </div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl text-text-primary mb-2 font-bold tracking-tight">
                      {founder.name}
                    </h2>
                    <p className="text-xs font-sans font-bold text-accent-green tracking-widest uppercase mb-6">{founder.role}</p>
                    <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed mb-6 whitespace-pre-line">{founder.bio}</p>

                    {founder.quote && (
                      <blockquote className="font-handwriting text-lg text-accent-emerald dark:text-accent-green border-l-4 border-accent-orange pl-4 italic mb-6">
                        {founder.quote}
                      </blockquote>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {founder.expertise.map((e) => (
                        <span key={e} className="inline-flex items-center gap-1 text-[10px] font-sans font-bold bg-page-bg border-2 border-accent-emerald text-accent-emerald px-3 py-1.5 rounded-xl shadow-offset-sm">
                          <CheckCircle2 size={10} className="text-accent-green" /> {e}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-border-color/60">
                    {founder.linkedin && <a href={founder.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl border-2 border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-emerald hover:text-white hover:border-accent-emerald transition-all shadow-offset-sm cursor-pointer"><ExternalLink size={15} /></a>}
                    {founder.twitter && <a href={founder.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl border-2 border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-orange hover:text-white hover:border-accent-orange transition-all shadow-offset-sm cursor-pointer"><ExternalLink size={15} /></a>}
                    {founder.email && <a href={`mailto:${founder.email}`} className="flex items-center gap-2 text-xs font-sans font-bold text-text-secondary hover:text-accent-orange transition-colors"><Mail size={15} /> {founder.email}</a>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Co-Founder Card - Spotlight layout, visually scaled down */}
          {coFounder && (
            <div className="max-w-4xl mx-auto bg-card-bg border-4 border-accent-orange rounded-3xl overflow-hidden shadow-offset-orange transition-theme relative">
              {/* Trust Badge overlay */}
              <div className="absolute top-4 right-4 hidden md:flex items-center gap-1.5 bg-accent-orange text-white px-3 py-1 rounded-xl text-[9px] font-mono font-bold tracking-widest uppercase border-2 border-white shadow-md z-10">
                <Zap size={11} className="animate-pulse" /> Co-Founder Spotlight
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image */}
                <div className="lg:col-span-4 h-72 lg:h-auto relative overflow-hidden bg-page-bg-sec/50 border-r-0 lg:border-r-4 lg:border-accent-orange">
                  <img
                    src={coFounder.image}
                    alt={coFounder.name}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
                  <div className="absolute bottom-4 left-4 lg:hidden">
                    <span className="text-[9px] font-mono text-white bg-accent-orange px-2 py-0.5 rounded-md tracking-widest uppercase font-bold">CO-FOUNDER</span>
                  </div>
                </div>
                {/* Content */}
                <div className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[9px] font-mono bg-accent-orange/10 text-accent-orange border border-accent-orange/20 px-2.5 py-0.5 rounded-full font-bold tracking-widest uppercase">
                        Tech & Ads Architect
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-text-primary mb-1 font-bold">
                      {coFounder.name}
                    </h3>
                    <p className="text-[11px] font-sans font-bold text-accent-orange tracking-wider uppercase mb-4">{coFounder.role}</p>
                    <p className="text-xs font-sans font-medium text-text-secondary leading-relaxed mb-5 whitespace-pre-line">{coFounder.bio}</p>

                    {coFounder.quote && (
                      <blockquote className="font-handwriting text-base text-accent-orange border-l-4 border-accent-emerald pl-4 italic mb-5">
                        {coFounder.quote}
                      </blockquote>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {coFounder.expertise.map((e) => (
                        <span key={e} className="inline-flex items-center gap-1 text-[9px] font-sans font-bold bg-page-bg border-2 border-accent-orange text-accent-orange px-2.5 py-1 rounded-lg shadow-offset-sm-orange">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-border-color/40">
                    {coFounder.linkedin && <a href={coFounder.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border-2 border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-emerald hover:text-white hover:border-accent-emerald transition-all cursor-pointer"><ExternalLink size={13} /></a>}
                    {coFounder.twitter && <a href={coFounder.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border-2 border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-orange hover:text-white hover:border-accent-orange transition-all cursor-pointer"><ExternalLink size={13} /></a>}
                    {coFounder.email && <a href={`mailto:${coFounder.email}`} className="flex items-center gap-2 text-xs font-sans font-bold text-text-secondary hover:text-accent-orange transition-colors"><Mail size={13} /> {coFounder.email}</a>}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Specialist Team - Cohesive and Uniform Layout */}
      <section className="py-16 px-6 md:px-12 bg-page-bg-sec transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-border-color pb-8">
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">Our Specialists</span>
            <h2 className="font-serif italic text-4xl text-text-primary mt-2">Senior Team Members</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialists.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-card-bg border-4 border-accent-emerald rounded-3xl overflow-hidden shadow-offset hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300 flex flex-col justify-between relative"
              >
                {/* Tiny trust check badge inside specialist image */}
                <div className="absolute top-3 right-3 bg-accent-emerald text-white p-1 rounded-lg text-[8px] font-mono tracking-widest uppercase border border-white shadow-sm z-10 flex items-center gap-0.5">
                  <ShieldCheck size={10} /> Certified
                </div>

                <div>
                  <div className="h-56 overflow-hidden relative border-b-4 border-accent-emerald">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-text-primary mb-1 font-bold">{member.name}</h3>
                    <p className="text-xs font-sans font-bold text-accent-green tracking-wide mb-3">{member.role}</p>
                    <p className="text-xs font-sans font-medium text-text-secondary leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {member.expertise.map((e) => (
                        <span key={e} className="text-[9px] font-sans font-bold bg-page-bg border border-border-color text-text-secondary px-2 py-1 rounded-md">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center gap-3 pt-4 border-t border-border-color/60">
                    {member.linkedin && <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border-2 border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-emerald hover:text-white transition-all cursor-pointer"><ExternalLink size={12} /></a>}
                    {member.email && <a href={`mailto:${member.email}`} className="text-[10px] font-sans text-text-secondary hover:text-accent-orange transition-colors truncate">{member.email}</a>}
                  </div>
                </div>
              </div>
            ))}
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
