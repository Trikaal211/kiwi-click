import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Mail, Star, Award, Users, Target } from 'lucide-react';
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
    image: '/founder.png',
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
    image: '/cofounder.png',
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
            return {
              name: dbM.name,
              role: dbM.designation,
              bio: dbM.bio,
              image: dbM.image,
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

  const founders = team.filter(m => m.isFounder);
  const specialists = team.filter(m => !m.isFounder);

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
          {founders.map((founder, idx) => (
            <div key={founder.name} className={`bg-card-bg border-4 ${idx % 2 === 0 ? 'border-accent-emerald shadow-offset' : 'border-accent-orange shadow-offset-orange'} rounded-3xl overflow-hidden transition-theme`}>
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
                    <span className="text-[9px] font-mono text-white/80 bg-black/50 px-2 py-1 rounded tracking-widest uppercase">{founder.role.includes('Co-Founder') ? 'Co-Founder' : 'Founder'}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="lg:col-span-8 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-[9px] font-mono ${idx % 2 === 0 ? 'bg-accent-green/10 text-accent-green border-accent-green/20' : 'bg-accent-orange/10 text-accent-orange border-accent-orange/20'} border px-3 py-1 rounded-full font-bold tracking-widest uppercase hidden lg:inline-flex`}>
                        {founder.role}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className={idx % 2 === 0 ? "fill-accent-orange text-accent-orange" : "fill-accent-green text-accent-green"} />
                        ))}
                      </div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-1">{founder.name}</h2>
                    <p className={`text-sm font-sans font-bold ${idx % 2 === 0 ? 'text-accent-green' : 'text-accent-orange'} tracking-wide mb-5`}>{founder.role}</p>
                    <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed mb-6 whitespace-pre-line">{founder.bio}</p>

                    {founder.quote && (
                      <blockquote className={`font-handwriting text-lg ${idx % 2 === 0 ? 'text-accent-emerald dark:text-accent-green border-accent-orange' : 'text-accent-orange border-accent-emerald'} border-l-4 pl-4 italic mb-6`}>
                        {founder.quote}
                      </blockquote>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {founder.expertise.map((e) => (
                        <span key={e} className={`text-[10px] font-sans font-bold bg-page-bg border-2 ${idx % 2 === 0 ? 'border-accent-emerald text-accent-emerald' : 'border-accent-orange text-accent-orange'} px-3 py-1 rounded-lg ${idx % 2 === 0 ? 'shadow-offset-sm' : 'shadow-offset-sm-orange'}`}>
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-border-color">
                    {founder.linkedin && <a href={founder.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl border-2 border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-emerald hover:text-white hover:border-accent-emerald transition-all"><ExternalLink size={14} /></a>}
                    {founder.twitter && <a href={founder.twitter} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl border-2 border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-orange hover:text-white hover:border-accent-orange transition-all"><ExternalLink size={14} /></a>}
                    {founder.email && <a href={`mailto:${founder.email}`} className="flex items-center gap-2 text-xs font-sans font-medium text-text-secondary hover:text-accent-orange transition-colors"><Mail size={14} /> {founder.email}</a>}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                <div key={idx} className={`bg-card-bg border-2 ${borders[idx % 3]} rounded-3xl overflow-hidden ${shadows[idx % 3]} hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300 flex flex-col justify-between`}>
                  <div>
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
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center gap-3 pt-4 border-t border-border-color">
                      {member.linkedin && <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-emerald hover:text-white transition-all"><ExternalLink size={12} /></a>}
                      {member.twitter && <a href={member.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-orange hover:text-white transition-all"><ExternalLink size={12} /></a>}
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
