import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, BookOpen, Calendar } from 'lucide-react';

const articles = [
  {
    slug: 'local-seo-delhi-guide-2026',
    category: 'SEO',
    categoryColor: 'bg-accent-green/10 text-accent-green border-accent-green/30',
    title: 'Local SEO for Delhi Businesses: Complete Guide 2026',
    desc: 'How to rank on Google Maps, optimize your Google Business Profile, and capture high-intent local customers in Delhi NCR — a step-by-step playbook.',
    author: 'Priya Nair',
    authorInitial: 'P',
    authorColor: 'bg-accent-green',
    date: 'June 10, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    shadowClass: 'shadow-offset',
    borderColor: 'border-accent-emerald',
    isNew: true,
    featured: true,
  },
  {
    slug: 'ai-automation-saves-20-hours',
    category: 'AI Automation',
    categoryColor: 'bg-violet-500/10 text-violet-500 border-violet-500/30',
    title: 'How AI Automation Saves Small Businesses 20+ Hours Per Week',
    desc: 'Practical systems Delhi businesses are using right now to eliminate manual work, qualify leads in 90 seconds, and follow up automatically.',
    author: 'Bandana Kumari',
    authorInitial: 'B',
    authorColor: 'bg-violet-500',
    date: 'June 2, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80',
    shadowClass: 'shadow-offset-orange',
    borderColor: 'border-accent-orange',
    isNew: false,
    featured: false,
  },
  {
    slug: 'meta-ads-hook-strategy',
    category: 'Social Media',
    categoryColor: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
    title: 'Meta Ads in 2026: The 3-Second Hook Framework That Still Works',
    desc: 'The exact scripting, pacing, and visual frameworks our team uses to consistently achieve 4-5x ROAS for D2C brands — even as Meta CPMs rise.',
    author: 'Sneha Kapoor',
    authorInitial: 'S',
    authorColor: 'bg-accent-orange',
    date: 'May 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
    shadowClass: 'shadow-offset-green',
    borderColor: 'border-accent-green',
    isNew: false,
    featured: false,
  },
];

export default function Blog() {
  const [featured, ...secondary] = articles;

  return (
    <section
      id="blog"
      className="relative py-16 md:py-28 px-6 md:px-12 bg-page-bg-sec text-text-primary transition-theme overflow-hidden"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-end justify-end pb-8 pr-8 pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(50px,10vw,120px)] font-sans font-black text-text-primary/[0.025] dark:text-text-primary/[0.04] tracking-tight leading-none">
          BLOG
        </span>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-4 transition-theme">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase transition-theme">
              Growth Knowledge
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl text-text-primary mt-2 transition-theme">
              Latest From the Blog
            </h2>
            <p className="font-handwriting text-accent-orange text-lg -rotate-1 mt-1 font-semibold">
              ✍️ Fresh from the war room
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed max-w-xs transition-theme">
              Tactical SEO, marketing, and automation guides built for Delhi business owners.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-accent-orange border-2 border-accent-orange px-4 py-2.5 rounded-xl hover:bg-accent-orange hover:text-white transition-all shrink-0 shadow-offset-sm"
            >
              View All <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

        {/* Featured Article — large hero card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to={`/blog/${featured.slug}`}
            className={`relative bg-card-bg border-2 ${featured.borderColor} rounded-3xl overflow-hidden ${featured.shadowClass} hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300 flex flex-col lg:flex-row group`}
          >
            {/* Big featured image */}
            <div className="relative w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />

              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-card-bg border ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                {featured.isNew && (
                  <span className="text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-accent-orange text-white animate-pulse-glow">
                    NEW
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-text-secondary mb-4">
                  <div className={`w-6 h-6 rounded-full ${featured.authorColor} text-white flex items-center justify-center text-[9px] font-bold`}>
                    {featured.authorInitial}
                  </div>
                  <span className="font-medium">{featured.author}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Calendar size={9} /> {featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={9} /> {featured.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-text-primary mb-4 leading-snug group-hover:text-accent-green transition-colors duration-300">
                  {featured.title}
                </h3>

                <p className="text-base font-sans font-medium text-text-secondary leading-relaxed mb-6">
                  {featured.desc}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-handwriting text-accent-orange text-xl -rotate-1 font-bold">
                  Read full article
                </span>
                <div className="w-9 h-9 rounded-xl bg-page-bg-sec group-hover:bg-accent-emerald group-hover:text-white border border-border-color flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondary.map((art, i) => (
            <motion.div
              key={art.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${art.slug}`}
                className={`bg-card-bg border-2 ${art.borderColor} rounded-3xl overflow-hidden ${art.shadowClass} hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300 flex flex-col group h-full`}
              >
                {/* Image */}
                <div className="w-full h-52 overflow-hidden relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className={`absolute top-3 left-3 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-card-bg border ${art.categoryColor}`}>
                    {art.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Author meta */}
                  <div className="flex items-center gap-2 text-[10px] font-mono text-text-secondary mb-3">
                    <div className={`w-5 h-5 rounded-full ${art.authorColor} text-white flex items-center justify-center text-[8px] font-bold`}>
                      {art.authorInitial}
                    </div>
                    <span>{art.author}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={8} /> {art.readTime}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Calendar size={8} /> {art.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-text-primary mb-3 leading-snug group-hover:text-accent-orange transition-colors duration-300 flex-1">
                    {art.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed mb-5 line-clamp-2">
                    {art.desc}
                  </p>

                  {/* Read link */}
                  <div className="flex justify-between items-center border-t border-border-color/20 pt-4 mt-auto transition-theme">
                    <span className="font-handwriting text-accent-orange text-lg -rotate-1 font-bold">
                      Read article
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-page-bg-sec text-text-primary group-hover:bg-accent-emerald group-hover:text-white border border-border-color flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card-bg border-2 border-accent-emerald text-sm font-sans font-bold text-text-primary hover:bg-accent-orange hover:text-white hover:border-accent-orange transition-all shadow-offset-sm"
          >
            <BookOpen size={14} />
            See All Articles
          </Link>
        </div>

      </div>
    </section>
  );
}
