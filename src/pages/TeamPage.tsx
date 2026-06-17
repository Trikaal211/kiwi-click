import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Star, Award, Users, Target, CheckCircle2, ShieldCheck } from 'lucide-react';
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
  experience?: string;
  stat?: string;
}

const defaultTeam: TeamMember[] = [
  {
    name: 'Bandana Kumari',
    role: 'Founder & Growth Strategist',
    bio: 'Founder & Growth Strategist. Bandana specializes in Local SEO, Google Business Profile optimization, and lead generation to build sustainable growth engines.',
    expertise: ['Local SEO', 'Google Profile Optimization', 'Lead Generation', 'Digital Strategy'],
    image: '/founder.png',
    linkedin: 'https://linkedin.com/in/bandana-kumari',
    email: 'bandana.k.official@gmail.com',
    isFounder: true,
    experience: '4+ Years Experience',
    stat: '20+ Businesses Helped'
  },
  {
    name: 'Baman Kumar',
    role: 'Co-Founder & Growth Strategist',
    bio: 'Co-Founder & Growth Strategist. Baman scales local brands and startups using high-performance ad funnels, search marketing, and custom web systems.',
    expertise: ['Google & Meta Ads', 'Web Architectures', 'Marketing Automation', 'Conversion Funnels'],
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/baman-kumar',
    email: 'info@kiwiclicks.in',
    isFounder: true,
    experience: '4+ Years Experience',
    stat: '30+ Business Categories'
  },
  {
    name: 'Priya Sharma',
    role: 'SEO Specialist',
    bio: 'SEO Specialist. Priya structures organic search visibility, maps keywords, and analyzes competitor link distributions.',
    expertise: ['Technical SEO', 'Maps Ranking', 'On-Page SEO'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/priya-sharma-seo',
    email: 'info@kiwiclicks.in'
  },
  {
    name: 'Rahul Verma',
    role: 'Performance Marketer',
    bio: 'Performance Marketer. Rahul designs performance search campaigns, Meta ad sets, and maps direct response ROAS metrics.',
    expertise: ['Google Ads', 'Meta Ads', 'ROAS Scaling'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/rahul-verma-marketing',
    email: 'info@kiwiclicks.in'
  },
  {
    name: 'Neha Arora',
    role: 'Content Strategist',
    bio: 'Content Strategist. Neha targets search intent and drafts highly engaging copywriting for content campaigns and brand landers.',
    expertise: ['Brand Copy', 'Content Plans', 'SMM Strategy'],
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/neha-arora-content',
    email: 'info@kiwiclicks.in'
  },
  {
    name: 'Aman Gupta',
    role: 'Web Developer',
    bio: 'Web Developer. Aman builds fast React / Next.js frontends, designs modular page architectures, and integrates databases.',
    expertise: ['React / Next.js', 'WordPress', 'Shopify Dev'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/aman-gupta-dev',
    email: 'info@kiwiclicks.in'
  },
  {
    name: 'Rohan Malhotra',
    role: 'Graphic Designer',
    bio: 'Graphic Designer. Rohan crafts high-converting campaign banner ads, brand typography guides, and vector illustrations.',
    expertise: ['UI/UX Design', 'Ad Creatives', 'Brand Identity'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/rohan-malhotra-design',
    email: 'info@kiwiclicks.in'
  },
  {
    name: 'Sneha Rao',
    role: 'Automation Specialist',
    bio: 'Automation Specialist. Sneha integrates automated CRM triggers, schedules email workflows, and links database channels.',
    expertise: ['Zapier / Make', 'CRM Pipelines', 'Email Flows'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/sneha-rao-automation',
    email: 'info@kiwiclicks.in'
  },
  {
    name: 'Vikram Singh',
    role: 'Operations Lead',
    bio: 'Operations Lead. Vikram handles milestone delivery times, coordinates project tasks, and audits final deliverables.',
    expertise: ['Project Delivery', 'Client Success', 'Resource Planning'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/vikram-singh-ops',
    email: 'info@kiwiclicks.in'
  },
  {
    name: 'Neha Gupta',
    role: 'Lead UI/UX Designer',
    bio: 'Lead UI/UX Designer. Neha engineers high-fidelity Figma layouts, interactive client prototypes, and responsive digital interface frameworks.',
    expertise: ['UI/UX Design', 'Figma Prototyping', 'User Journeys', 'Visual Systems'],
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/neha-gupta-design',
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
          const mapped = dbMembers.map((dbM: any) => {
            const defM = defaultTeam.find(m => m.name.toLowerCase() === dbM.name.toLowerCase());
            
            let img = dbM.image;
            if (dbM.name === 'Bandana Kumari') img = '/founder.png';
            if (dbM.name === 'Shammy Kumar' || dbM.name === 'Baman Kumar') img = 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&h=400&q=80';

            return {
              name: dbM.name,
              role: dbM.designation,
              bio: defM?.bio || dbM.bio,
              image: img,
              linkedin: dbM.linkedin || undefined,
              twitter: dbM.twitter || undefined,
              email: defM?.email || 'info@kiwiclicks.in',
              expertise: defM?.expertise || [dbM.designation],
              isFounder: defM?.isFounder || dbM.designation.toLowerCase().includes('founder'),
              quote: defM?.quote,
              experience: defM?.experience || '4+ Years Experience',
              stat: defM?.stat || 'Delhi NCR Based'
            };
          });

          const dbNames = new Set(dbMembers.map((dbM: any) => dbM.name.toLowerCase()));
          const extraDefaults = defaultTeam.filter(m => !dbNames.has(m.name.toLowerCase()));
          setTeam([...mapped, ...extraDefaults]);
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

  const founder = team.find(m => m.name === 'Bandana Kumari') || team[0];
  const coFounder = team.find(m => m.name === 'Baman Kumar' || m.name === 'Shammy Kumar') || team[1];
  const specialists = team.filter(m => m.name !== 'Bandana Kumari' && m.name !== 'Shammy Kumar' && m.name !== 'Baman Kumar');

  return (
    <div className="min-h-screen bg-page-bg text-text-primary pt-32 md:pt-36 lg:pt-40 transition-theme">

      {/* Hero Header */}
      <section className="py-10 md:py-14 px-6 md:px-12 border-b border-border-color transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="text-left">
              <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">
                Meet the Team
              </span>
              <h1 className="font-serif italic text-5xl md:text-7xl text-text-primary mt-3 leading-tight">
                The People Behind<br />
                <span className="font-sans font-extrabold not-italic text-accent-green">Your Growth</span>
              </h1>
            </div>
            <p className="max-w-md text-base font-sans font-medium text-text-secondary leading-relaxed text-left">
              We are a compact, senior team based out of Dwarka, New Delhi. No juniors managing your campaigns. The people you meet are the people who do the work.
            </p>
          </div>
        </div>
      </section>

      {/* Founders — Side-by-Side Premium Cards */}
      <section className="py-10 px-6 md:px-12 bg-page-bg transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 border-b border-border-color pb-6 text-left">
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">KiwiClicks Leadership</span>
            <h2 className="font-serif italic text-4xl text-text-primary mt-2">The Founders</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Bandana Kumari Card */}
            {founder && (
              <div className="bg-card-bg border-4 border-accent-emerald rounded-3xl overflow-hidden shadow-offset transition-theme flex flex-col relative group text-left">
                {/* Image */}
                <div className="h-80 md:h-[360px] w-full relative overflow-hidden bg-page-bg-sec/50 border-b-4 border-accent-emerald">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="text-[10px] font-mono text-white bg-accent-green px-2.5 py-1 rounded-lg tracking-widest uppercase font-bold">Founder</span>
                    <span className="text-[10px] font-mono text-white bg-accent-orange px-2.5 py-1 rounded-lg tracking-widest uppercase font-bold">{founder.experience}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-text-primary font-bold tracking-tight">
                        {founder.name}
                      </h3>
                      <p className="text-xs font-sans font-bold text-accent-green tracking-widest uppercase mt-1">{founder.role}</p>
                    </div>
                    <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed">{founder.bio}</p>
                    
                    {/* Trust Chips / Stats */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-accent-orange bg-accent-orange/5 border border-accent-orange/15 px-3 py-1.5 rounded-xl w-max">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
                      {founder.stat}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {founder.expertise.map((e) => (
                        <span key={e} className="inline-flex items-center gap-1 text-[9px] font-sans font-bold bg-page-bg border-2 border-accent-emerald text-accent-emerald px-2.5 py-1 rounded-lg">
                          <CheckCircle2 size={9} className="text-accent-green" /> {e}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-border-color/60">
                    <div className="flex items-center gap-4">
                      {founder.linkedin && (
                        <a href={founder.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border-2 border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-emerald hover:text-white hover:border-accent-emerald transition-all cursor-pointer">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                        </a>
                      )}
                    </div>
                    {founder.email && <a href={`mailto:${founder.email}`} className="flex items-center gap-1.5 text-xs font-sans font-bold text-text-secondary hover:text-accent-orange transition-colors"><Mail size={13} /> {founder.email}</a>}
                  </div>
                </div>
              </div>
            )}

            {/* Shammy Kumar Card */}
            {coFounder && (
              <div className="bg-card-bg border-4 border-accent-orange rounded-3xl overflow-hidden shadow-offset-orange transition-theme flex flex-col relative group text-left">
                {/* Image */}
                <div className="h-80 md:h-[360px] w-full relative overflow-hidden bg-page-bg-sec/50 border-b-4 border-accent-orange">
                  <img
                    src={coFounder.image}
                    alt={coFounder.name}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="text-[10px] font-mono text-white bg-accent-orange px-2.5 py-1 rounded-lg tracking-widest uppercase font-bold">Co-Founder</span>
                    <span className="text-[10px] font-mono text-white bg-accent-green px-2.5 py-1 rounded-lg tracking-widest uppercase font-bold">{coFounder.experience}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-text-primary font-bold tracking-tight">
                        {coFounder.name}
                      </h3>
                      <p className="text-xs font-sans font-bold text-accent-orange tracking-widest uppercase mt-1">{coFounder.role}</p>
                    </div>
                    <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed">{coFounder.bio}</p>
                    
                    {/* Trust Chips / Stats */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-accent-green bg-accent-green/5 border border-accent-green/15 px-3 py-1.5 rounded-xl w-max">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                      {coFounder.stat}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {coFounder.expertise.map((e) => (
                        <span key={e} className="inline-flex items-center gap-1 text-[9px] font-sans font-bold bg-page-bg border-2 border-accent-orange text-accent-orange px-2.5 py-1 rounded-lg">
                          <CheckCircle2 size={9} className="text-accent-green" /> {e}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-border-color/60">
                    <div className="flex items-center gap-4">
                      {coFounder.linkedin && (
                        <a href={coFounder.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border-2 border-border-color bg-page-bg flex items-center justify-center text-text-secondary hover:bg-accent-emerald hover:text-white hover:border-accent-emerald transition-all cursor-pointer">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                        </a>
                      )}
                    </div>
                    {coFounder.email && <a href={`mailto:${coFounder.email}`} className="flex items-center gap-1.5 text-xs font-sans font-bold text-text-secondary hover:text-accent-orange transition-colors"><Mail size={13} /> {coFounder.email}</a>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Specialist Team - Cohesive and Uniform Layout */}
      <section className="py-10 px-6 md:px-12 bg-page-bg-sec transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 border-b border-border-color pb-6 text-left">
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">Our Specialists</span>
            <h2 className="font-serif italic text-4xl text-text-primary mt-2">Expert Execution Team</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialists.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-card-bg border-2 border-accent-emerald rounded-2xl overflow-hidden shadow-offset-sm hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between relative text-left"
              >
                <div className="absolute top-2.5 right-2.5 bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20 px-2 py-0.5 rounded-md text-[8px] font-mono tracking-widest uppercase z-10 flex items-center gap-0.5">
                  <ShieldCheck size={10} /> Specialist
                </div>

                <div>
                  <div className="h-44 w-full overflow-hidden relative border-b-2 border-accent-emerald">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-sans font-bold text-sm text-text-primary leading-tight">{member.name}</h4>
                    <p className="text-[11px] font-sans font-semibold text-accent-green tracking-wide mt-0.5 mb-3">{member.role}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.slice(0, 3).map((e) => (
                        <span key={e} className="text-[9px] font-sans font-bold bg-page-bg border border-border-color text-text-secondary px-2 py-0.5 rounded-md">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="flex items-center justify-between pt-3 border-t border-border-color/60">
                    {member.linkedin ? (
                      <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-6 h-6 rounded bg-page-bg flex items-center justify-center text-text-secondary hover:text-accent-emerald transition-all cursor-pointer">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                      </a>
                    ) : (
                      <div className="w-6 h-6" />
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="text-[9px] font-sans font-medium text-text-secondary hover:text-accent-orange transition-colors truncate max-w-[120px]">
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Values */}
      <section className="py-10 px-6 md:px-12 bg-page-bg transition-theme">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 border-b border-border-color pb-6 text-left">
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">How We Work</span>
            <h2 className="font-serif italic text-4xl text-text-primary mt-2">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="bg-card-bg border-2 border-accent-emerald rounded-2xl p-6 shadow-offset-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 text-left">
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
      <section className="py-10 px-6 md:px-12 bg-accent-emerald text-white transition-theme">
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
