import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Clock, User } from 'lucide-react';

const articles = [
  {
    slug: 'local-seo-delhi-guide-2026',
    category: 'SEO',
    title: 'Local SEO for Delhi Businesses: Complete Guide 2026',
    desc: 'How to rank on Google Maps, optimize your Google Business Profile, and capture high-intent local customers in Delhi NCR — a step-by-step playbook.',
    author: 'Priya Nair',
    date: 'June 10, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
    shadowClass: 'shadow-offset',
    borderColor: 'border-accent-emerald'
  },
  {
    slug: 'ai-automation-saves-20-hours',
    category: 'AI Automation',
    title: 'How AI Automation Saves Small Businesses 20+ Hours Per Week',
    desc: 'Practical systems Delhi businesses are using right now to eliminate manual work, qualify leads in 90 seconds, and follow up with customers automatically.',
    author: 'Arjun Malhotra',
    date: 'June 2, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80',
    shadowClass: 'shadow-offset-orange',
    borderColor: 'border-accent-orange'
  },
  {
    slug: 'meta-ads-hook-strategy',
    category: 'Social Media',
    title: 'Meta Ads in 2026: The 3-Second Hook Framework That Still Works',
    desc: 'The exact scripting, pacing, and visual frameworks our team uses to consistently achieve 4-5x ROAS for D2C brands — even as Meta CPMs rise.',
    author: 'Sneha Kapoor',
    date: 'May 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
    shadowClass: 'shadow-offset-green',
    borderColor: 'border-accent-green'
  }
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative py-16 md:py-24 px-6 md:px-12 bg-page-bg-sec text-text-primary transition-theme"
    >
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
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed max-w-xs transition-theme">
              Tactical SEO, marketing, and automation guides built for Delhi business owners.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-accent-orange border-2 border-accent-orange px-4 py-2.5 rounded-xl hover:bg-accent-orange hover:text-white transition-all shrink-0 shadow-offset-sm"
            >
              View All Articles <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <Link
              key={art.slug}
              to={`/blog/${art.slug}`}
              className={`bg-card-bg border-2 ${art.borderColor} rounded-3xl overflow-hidden ${art.shadowClass} hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300 flex flex-col group`}
            >
              {/* Image */}
              <div className="w-full h-44 overflow-hidden relative">
                <img
                  src={art.image}
                  alt={art.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <span className="absolute bottom-3 left-3 bg-card-bg text-text-primary text-[9px] font-mono font-bold px-2.5 py-1 rounded-md border border-border-color shadow-sm transition-theme">
                  {art.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 text-[10px] font-mono text-text-secondary mb-3">
                  <span className="flex items-center gap-1"><User size={9} /> {art.author}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={9} /> {art.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg text-text-primary mb-3 leading-snug group-hover:text-accent-orange transition-colors duration-300 flex-1">
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs font-sans font-medium text-text-secondary leading-relaxed mb-4 line-clamp-2">
                  {art.desc}
                </p>

                {/* Read link */}
                <div className="flex justify-between items-center border-t border-border-color pt-4 mt-auto transition-theme">
                  <span className="font-handwriting text-accent-orange text-base -rotate-1 font-bold">
                    Read article
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-page-bg-sec text-text-primary group-hover:bg-accent-emerald group-hover:text-white border border-border-color flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            </Link>
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
