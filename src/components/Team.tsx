import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  skills: string[];
  label: 'Growth' | 'Strategy' | 'Development';
  bio?: string;
}

export default function Team() {
  const members: TeamMember[] = [
    {
      name: 'Bandana Kumari',
      role: 'Founder & Growth Strategist',
      image: '/founder.png',
      bio: 'Specializes in scaling local SEO systems, Google Business Profile optimization, lead generation funnels, and brand reputation systems.',
      skills: ['Local SEO', 'Google Business Profile', 'Lead Generation', 'Growth Strategy'],
      label: 'Growth',
    },
    {
      name: 'Shammy Kumar',
      role: 'Co-Founder & Growth Strategist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Drives customer acquisition through targeted Meta & Google Ads campaigns, performance funnel analysis, and ROI-focused digital growth.',
      skills: ['SEO', 'Performance Marketing', 'Google Ads', 'Web Development'],
      label: 'Strategy',
    },
    {
      name: 'Aniket Sharma',
      role: 'Full Stack Developer & BA',
      image: '/developer.png',
      bio: 'Builds scalable React/Next.js platforms, fast web layouts, database integrations, and automated operational pipelines.',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Business Analysis'],
      label: 'Development',
    },
    {
      name: 'Rohit Verma',
      role: 'Business Analyst',
      image: '/rohit.png',
      bio: 'Bridges the gap between business objectives and technical execution, mapping user flows, and defining project scopes.',
      skills: ['Requirements Gathering', 'Process Design', 'Market Research', 'Reporting'],
      label: 'Strategy',
    },
    {
      name: 'Vikas Yadav',
      role: 'PHP & WordPress Developer',
      image: '/vikas.png',
      bio: 'Develops optimized WordPress themes, custom WooCommerce configurations, fast PHP code implementations, and secures responsive web systems.',
      skills: ['PHP', 'WordPress', 'WooCommerce', 'Custom Themes'],
      label: 'Development',
    },
    {
      name: 'Neha Gupta',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Engineers intuitive user experiences, wireframes, interactive Figma prototypes, and modern visual design branding systems.',
      skills: ['UI/UX Design', 'Figma', 'Wireframing', 'Ad Creatives'],
      label: 'Development',
    },
  ];

  return (
    <section
      id="team"
      className="relative py-12 md:py-16 px-6 md:px-12 bg-page-bg text-text-primary transition-theme overflow-hidden border-b border-border-color/10"
    >
      {/* Subtle Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(60px,16vw,200px)] font-sans font-black text-text-primary/[0.01] dark:text-text-primary/[0.02] tracking-tighter leading-none whitespace-nowrap">
          KIWICLICKS TEAM
        </span>
      </div>

      {/* Dot Grid Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] select-none"
        style={{
          backgroundImage: 'radial-gradient(var(--accent-emerald) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color/15 pb-5 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-bold uppercase transition-theme">
              08 // TEAM
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl text-text-primary mt-2 transition-theme">
              Meet The People Behind KiwiClicks
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-xs md:text-sm font-sans font-medium text-text-secondary leading-relaxed transition-theme">
              A founder-led team helping businesses grow through SEO, websites, automation and performance marketing.
            </p>
          </div>
        </div>

        {/* 4-column responsive layout (desktop: 4 centered, tablet: 2 centered, mobile: 1 centered) */}
        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[280px] bg-card-bg border-2 border-border-color/10 dark:border-white/5 rounded-2xl p-4 shadow-offset-sm hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(74,156,58,0.12)] hover:border-accent-green dark:hover:border-accent-green transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="w-full aspect-[4/5] overflow-hidden rounded-xl bg-page-bg-sec/40 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Floating Handwritten Label Overlay (Overlaps photo corner) */}
                  <span className={`absolute top-2.5 right-2.5 font-handwriting text-xs font-bold px-2 py-0.5 rounded shadow-sm select-none border -rotate-6
                    ${
                      member.label === 'Growth'
                        ? 'bg-accent-emerald/90 text-white border-accent-emerald'
                        : member.label === 'Strategy'
                        ? 'bg-accent-orange/95 text-white border-accent-orange'
                        : 'bg-gold-accent/95 text-white border-gold-accent'
                    }
                  `}>
                    {member.label}
                  </span>
                </div>

                {/* Details section */}
                <div className="mt-4 text-left">
                  <h4 className="font-serif text-base font-bold text-text-primary tracking-tight transition-theme">
                    {member.name}
                  </h4>
                  <p className="text-[10px] font-mono tracking-wider text-accent-green uppercase font-black transition-theme mt-0.5">
                    {member.role}
                  </p>

                  {/* Render compact description if exists */}
                  {member.bio && (
                    <p className="text-[9.5px] font-sans font-medium text-text-secondary leading-relaxed mt-2 border-t border-border-color/5 pt-2">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>

              {/* Skills section at bottom */}
              <div className="mt-4 pt-3 border-t border-border-color/5 text-left">
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[8.5px] font-sans font-bold px-2 py-0.5 rounded bg-page-bg-sec/60 dark:bg-page-bg-sec/30 border border-border-color/5 text-text-secondary transition-theme whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
