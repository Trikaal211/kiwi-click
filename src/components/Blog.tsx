import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar, BookOpen } from 'lucide-react';

interface Article {
  title: string;
  slug: string;
  desc: string;
  category: string;
  categoryColor: string;
  isNew?: boolean;
  date: string;
  readTime: string;
  author: string;
  authorInitial: string;
  authorColor: string;
  image: string;
  borderColor: string;
}

const articles: Article[] = [
  {
    title: 'Topical Authority Clusters: The Organic SEO Playbook For 2026',
    slug: 'topical-authority-clusters',
    desc: 'How scaling SaaS systems build topical depth maps, pruning non-performing directories to secure compound Google visibility values.',
    category: 'Search Strategy',
    categoryColor: 'bg-emerald-500/10 text-accent-green border-emerald-500/25',
    isNew: true,
    date: 'June 18, 2026',
    readTime: '8 min read',
    author: 'Baman Kumar',
    authorInitial: 'B',
    authorColor: 'bg-emerald-600',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
    borderColor: 'hover:border-accent-green/30'
  },
  {
    title: 'Designing Zero-Friction AI Lead Qualification Scripts',
    slug: 'ai-lead-qualification',
    desc: 'Deep dive into API dispatch layers, LLM budg-score attributes, and routing qualified users directly to HubSpot pipelines in 0.12s.',
    category: 'Operations Tech',
    categoryColor: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
    date: 'June 14, 2026',
    readTime: '6 min read',
    author: 'Chandan M. Sharma',
    authorInitial: 'C',
    authorColor: 'bg-purple-600',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
    borderColor: 'hover:border-purple-400/30'
  },
  {
    title: 'Meta Paid Acquisition Loops: Scaling Direct Response In High CPA Segments',
    slug: 'meta-paid-acquisition-loops',
    desc: 'How B2B platforms align dynamic hook structures and custom custom CRM postback tracking to scale ROAS compounds.',
    category: 'Paid Social',
    categoryColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
    date: 'June 10, 2026',
    readTime: '10 min read',
    author: 'Bandana Kumari',
    authorInitial: 'BK',
    authorColor: 'bg-cyan-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    borderColor: 'hover:border-cyan-400/30'
  }
];

export default function Blog() {
  const [featured, ...secondary] = articles;

  return (
    <section
      id="blog"
      className="relative py-20 md:py-32 px-6 md:px-12 bg-page-bg text-text-primary transition-theme border-b border-border-color overflow-hidden"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-end justify-end pb-8 pr-8 pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(50px,10vw,120px)] font-sans font-black text-text-primary/[0.01] tracking-tight leading-none transition-theme">
          RESOURCES
        </span>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-border-color pb-8 gap-6 transition-theme">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent-green font-bold uppercase">
              09 // KNOWLEDGE BASE
            </span>
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-text-primary mt-3 uppercase transition-theme">
              Growth Intelligence
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end gap-6">
            <p className="text-sm font-sans font-medium text-text-secondary leading-relaxed max-w-xs transition-theme">
              Tactical insights, engineering frameworks, and pipeline automation guidelines from our operations desk.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-text-primary border border-border-color px-5 py-3 rounded-full bg-page-bg-sec hover:bg-text-primary hover:text-page-bg transition-all shrink-0"
            >
              All Articles <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to={`/blog/${featured.slug}`}
            className={`relative bg-card-bg backdrop-blur-md border ${featured.borderColor} rounded-3xl overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col lg:flex-row group`}
          >
            {/* Big featured image */}
            <div className="relative w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden bg-page-bg transition-theme">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-page-bg via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-page-bg/25 transition-all" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-page-bg border border-border-color transition-theme ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                {featured.isNew && (
                  <span className="text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-accent-green text-slate-950 shadow-[0_0_10px_rgba(0,255,102,0.4)]">
                    NEW
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-text-secondary opacity-70 mb-4 transition-theme">
                  <div className={`w-6 h-6 rounded-full ${featured.authorColor} text-white flex items-center justify-center text-[9px] font-bold`}>
                    {featured.authorInitial}
                  </div>
                  <span className="font-bold text-text-primary transition-theme">{featured.author}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Calendar size={9} /> {featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={9} /> {featured.readTime}</span>
                </div>

                <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-text-primary mb-4 leading-snug group-hover:text-accent-green transition-colors duration-300">
                  {featured.title}
                </h3>

                <p className="text-xs font-sans text-text-secondary leading-relaxed mb-6 transition-theme">
                  {featured.desc}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-secondary group-hover:text-accent-green transition-colors duration-300">
                  Read Article
                </span>
                <div className="w-8 h-8 rounded-full bg-page-bg-sec group-hover:bg-accent-green group-hover:text-slate-950 border border-border-color flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                className={`bg-card-bg backdrop-blur-md border ${art.borderColor} rounded-3xl overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full`}
              >
                {/* Image */}
                <div className="w-full h-52 overflow-hidden relative bg-page-bg transition-theme">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-page-bg to-transparent transition-all" />
                  <span className={`absolute top-4 left-4 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-page-bg border border-border-color transition-theme ${art.categoryColor}`}>
                    {art.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 text-left">
                  {/* Author meta */}
                  <div className="flex items-center gap-2 text-[10px] font-mono text-text-secondary opacity-70 mb-4 transition-theme">
                    <div className={`w-5 h-5 rounded-full ${art.authorColor} text-white flex items-center justify-center text-[8px] font-bold`}>
                      {art.authorInitial}
                    </div>
                    <span className="font-bold text-text-primary transition-theme">{art.author}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={8} /> {art.readTime}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Calendar size={8} /> {art.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-extrabold text-xl text-text-primary mb-3 leading-snug group-hover:text-accent-green transition-colors duration-300 flex-1">
                    {art.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs font-sans text-text-secondary leading-relaxed mb-5 line-clamp-2 transition-theme">
                    {art.desc}
                  </p>

                  {/* Read link */}
                  <div className="flex justify-between items-center border-t border-border-color pt-4 mt-auto transition-theme">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-secondary group-hover:text-accent-green transition-colors duration-300">
                      Read Article
                    </span>
                    <div className="w-8 h-8 rounded-full bg-page-bg-sec text-text-secondary group-hover:bg-accent-green group-hover:text-slate-950 border border-border-color flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-page-bg-sec border border-border-color text-xs font-mono font-bold uppercase tracking-wider text-text-primary hover:bg-text-primary hover:text-page-bg hover:border-text-primary transition-all shadow-md"
          >
            <BookOpen size={13} />
            See All Articles
          </Link>
        </div>

      </div>
    </section>
  );
}
