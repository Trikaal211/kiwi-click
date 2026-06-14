import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Clock, User } from 'lucide-react';

interface Article {
  slug: string;
  category: string;
  categoryId: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    slug: 'local-seo-delhi-guide-2026',
    category: 'SEO',
    categoryId: 'seo',
    title: 'Local SEO for Delhi Businesses: Complete Guide 2026',
    excerpt: 'A step-by-step guide to ranking your Delhi business on Google Maps and local search. Covers Google Business Profile, review strategies, local citations, and the most common mistakes costing businesses thousands of rupees in missed traffic.',
    author: 'Priya Nair',
    authorRole: 'Head of SEO',
    date: 'June 10, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    slug: 'ai-automation-saves-20-hours',
    category: 'AI Automation',
    categoryId: 'ai',
    title: 'How AI Automation Saves Small Businesses 20+ Hours Per Week',
    excerpt: 'Practical walkthrough of the automation systems small Delhi businesses are using to eliminate repetitive work, qualify leads faster, and follow up with customers automatically — all without hiring extra staff.',
    author: 'Arjun Malhotra',
    authorRole: 'Founder',
    date: 'June 2, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'meta-ads-hook-strategy',
    category: 'Social Media',
    categoryId: 'social',
    title: 'Meta Ads in 2026: The 3-Second Hook Framework That Still Works',
    excerpt: 'With CPMs rising across Meta, the only sustainable advantage is creative quality. We break down the exact scripting, pacing, and visual frameworks our team uses to consistently achieve 4-5x ROAS for D2C brands.',
    author: 'Sneha Kapoor',
    authorRole: 'Paid Ads Strategist',
    date: 'May 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'website-conversion-rate-optimization',
    category: 'Web Development',
    categoryId: 'web',
    title: 'Why Your Delhi Business Website Has a 1% Conversion Rate (And How to Fix It)',
    excerpt: 'Most business websites lose 99 out of 100 visitors without a single lead. We reveal the 8 conversion killers we find on almost every website audit — and the exact fixes that take conversion rates from 1% to 6%+.',
    author: 'Rahul Verma',
    authorRole: 'Lead Developer',
    date: 'May 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'google-business-profile-optimization',
    category: 'SEO',
    categoryId: 'seo',
    title: 'Google Business Profile Optimization: 12 Steps for Delhi Businesses',
    excerpt: 'Your GBP listing is often the first thing a potential customer sees. We walk through the 12 specific optimizations that move Delhi businesses from page 3 of Maps to the top 3 local pack positions.',
    author: 'Priya Nair',
    authorRole: 'Head of SEO',
    date: 'May 5, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
];

const categories = ['All', 'SEO', 'Social Media', 'Web Development', 'AI Automation'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = articles[0];
  const filtered = articles
    .slice(1)
    .filter(a => activeCategory === 'All' || a.category === activeCategory);

  return (
    <div className="min-h-screen bg-page-bg text-text-primary pt-24 transition-theme">

      {/* Header */}
      <section className="py-16 md:py-20 px-6 md:px-12 border-b border-border-color transition-theme">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-sans tracking-widest text-accent-green font-semibold uppercase">Growth Knowledge</span>
            <h1 className="font-serif italic text-5xl md:text-7xl text-text-primary mt-3 leading-tight">
              The Digital Growth<br />
              <span className="font-sans font-extrabold not-italic text-accent-orange">Magazine</span>
            </h1>
          </div>
          <p className="max-w-md text-base font-sans font-medium text-text-secondary leading-relaxed">
            Tactical notes, campaign breakdowns, and strategic guides from the KiwiClicks team. Built for Delhi business owners who want real insights, not recycled content.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-6 md:px-12 bg-page-bg transition-theme">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] font-mono tracking-widest text-accent-orange font-bold uppercase mb-6">✦ Featured Article</p>
          <Link to={`/blog/${featured.slug}`} className="group block bg-card-bg border-4 border-accent-emerald rounded-3xl overflow-hidden shadow-offset hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 h-64 lg:h-auto overflow-hidden relative">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
              </div>
              <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono bg-accent-green/10 text-accent-green border border-accent-green/20 px-3 py-1 rounded-full font-bold tracking-widest uppercase">
                    {featured.category}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-text-primary mt-4 mb-4 leading-snug group-hover:text-accent-orange transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-border-color pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-emerald flex items-center justify-center text-white text-xs font-bold">
                      {featured.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-xs font-sans font-bold text-text-primary">{featured.author}</p>
                      <p className="text-[10px] font-sans text-text-secondary">{featured.date} · {featured.readTime}</p>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-accent-orange text-white flex items-center justify-center border-2 border-accent-emerald group-hover:scale-110 transition-transform">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Filter + Grid */}
      <section className="py-12 px-6 md:px-12 bg-page-bg-sec transition-theme">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-sans font-bold uppercase tracking-widest border-2 transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-accent-emerald border-accent-emerald text-white shadow-offset-sm'
                    : 'bg-card-bg border-border-color text-text-primary hover:border-accent-orange'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((art, idx) => {
              const shadows = ['shadow-offset', 'shadow-offset-orange', 'shadow-offset-green'];
              const borders = ['border-accent-emerald', 'border-accent-orange', 'border-accent-green'];
              return (
                <Link
                  key={art.slug}
                  to={`/blog/${art.slug}`}
                  className={`group bg-card-bg border-2 ${borders[idx % 3]} rounded-3xl overflow-hidden ${shadows[idx % 3]} hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all duration-300 flex flex-col`}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    <span className="absolute bottom-3 left-3 bg-card-bg text-text-primary text-[9px] font-mono font-bold px-2.5 py-1 rounded-md border border-border-color shadow-sm transition-theme">
                      {art.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-text-secondary mb-3">
                      <span className="flex items-center gap-1"><Clock size={9} /> {art.readTime}</span>
                      <span>·</span>
                      <span>{art.date}</span>
                    </div>
                    <h3 className="font-serif text-lg text-text-primary mb-3 leading-snug group-hover:text-accent-orange transition-colors flex-1">
                      {art.title}
                    </h3>
                    <p className="text-xs font-sans font-medium text-text-secondary leading-relaxed mb-4 line-clamp-3">
                      {art.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-border-color pt-3 mt-auto">
                      <div className="flex items-center gap-2">
                        <User size={11} className="text-text-secondary" />
                        <span className="text-[10px] font-sans font-bold text-text-secondary">{art.author}</span>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-page-bg text-text-primary group-hover:bg-accent-orange group-hover:text-white border border-border-color flex items-center justify-center transition-all">
                        <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
            {filtered.length === 0 && (
              <div className="col-span-3 text-center py-16 text-text-secondary">
                <BookOpen size={40} className="mx-auto mb-4 opacity-30" />
                <p className="font-sans font-medium">No articles in this category yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
