import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowUpRight, CheckCircle } from 'lucide-react';

interface ArticleContent {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  authorBio: string;
  date: string;
  readTime: string;
  image: string;
  sections: { heading: string; content: string; bullets?: string[] }[];
  relatedSlugs: string[];
}

const articleData: Record<string, ArticleContent> = {
  'local-seo-delhi-guide-2026': {
    slug: 'local-seo-delhi-guide-2026',
    category: 'SEO',
    title: 'Local SEO for Delhi Businesses: Complete Guide 2026',
    subtitle: 'Everything you need to rank on Google Maps and capture high-intent local customers in Delhi NCR.',
    author: 'Priya Nair',
    authorRole: 'Head of SEO & Local Search',
    authorBio: 'Priya has ranked 50+ Delhi businesses to Google page 1. She specialises in semantic SEO, Google Business Profile, and local citation strategies for NCR markets.',
    date: 'June 10, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80',
    sections: [
      {
        heading: 'What Is Local SEO and Why Does It Matter for Delhi Businesses?',
        content: `Local SEO is the process of optimising your online presence to attract more customers from relevant local searches. When someone in Connaught Place searches "interior designer near me" or "digital marketing agency Delhi", Local SEO determines whether your business appears in the top results — or is buried on page 3 where nobody scrolls.

For Delhi businesses, this is critically important. Delhi is one of India's most commercially dense markets. Every sector — from real estate and legal services to restaurants and healthcare — has intense local competition. The businesses that win in local search consistently capture 70-80% of inbound enquiries in their category, while competitors compete for scraps.

The difference between a business generating 50 organic leads per month and one generating 5 is often not brand quality or pricing — it is Local SEO execution.`
      },
      {
        heading: 'Google Business Profile: Your Most Important Local Asset',
        content: `Your Google Business Profile (GBP) is the single most important asset in your Local SEO strategy. It is the listing that appears in Google Maps, the local pack (the 3 listings shown in search results), and Google's Knowledge Panel.

An unoptimised GBP listing leaves significant traffic on the table. Here is what a fully optimised profile includes:`,
        bullets: [
          'Accurate and consistent business name, address, phone number (NAP) matching your website',
          'Primary and secondary categories selected to match your actual services precisely',
          'Service area cities and zones clearly defined (for service-area businesses)',
          '10+ high-quality photos including interior, exterior, team, and product/service shots',
          'Detailed business description with primary keywords woven naturally into the text',
          'Products or services listed with descriptions and pricing where applicable',
          'Google Posts published at minimum twice per week (promotions, updates, events)',
          'Questions & Answers section pre-populated with common customer queries',
          'Attributes enabled: accessibility, payment methods, and relevant service attributes',
        ]
      },
      {
        heading: 'Review Strategy: The Growth Lever Nobody Talks About',
        content: `Reviews are not just social proof — they are a direct ranking signal for Google Maps. Businesses with a higher volume of recent, relevant reviews consistently outrank competitors with fewer reviews, even if those competitors have been established longer.

Our review strategy for Delhi clients follows a simple but powerful framework. First, we create a direct review link (a shortened URL that takes customers straight to the GBP review form) and embed it across WhatsApp follow-up messages, email receipts, and website popups.

Second, we train client teams to ask for reviews at the moment of highest satisfaction — typically right after a service is delivered or a result is shared. The ask should be personal and specific: "If we helped you achieve [specific outcome], would you mind sharing that on Google? It takes two minutes and helps us reach more businesses like yours."

Third, we respond to every review — positive and negative — within 24 hours. Google tracks response rates and response quality as a ranking signal. Negative reviews, responded to professionally and constructively, can actually improve trust with potential customers who read them.`
      },
      {
        heading: 'Local Citations: Building Your Authority Footprint',
        content: `Local citations are online mentions of your business name, address, and phone number (NAP) on directories, review sites, and local platforms. Consistent citations across high-authority directories signal to Google that your business is legitimate and established in your location.

For Delhi businesses, the most valuable citation sources include:`,
        bullets: [
          'Justdial — Still the dominant local directory in India with significant domain authority',
          'Sulekha — High local search volume, particularly for service businesses',
          'IndiaMart — Essential for B2B businesses and product suppliers',
          'Yelp India — Growing in metro markets including Delhi NCR',
          'Zomato / Swiggy — Critical for food and hospitality businesses',
          'Practo — Essential for healthcare professionals and clinics',
          'Housing.com / 99acres — Mandatory for real estate businesses',
          'LinkedIn Company Page — Increasingly cited by Google for professional services',
          'Industry-specific directories relevant to your sector',
        ]
      },
      {
        heading: 'Maps Ranking: How the Local Pack Algorithm Works',
        content: `Google\'s local pack algorithm uses three primary factors to determine Maps rankings: Relevance, Distance, and Prominence.

Relevance measures how well your GBP listing matches what the user is searching for. This is why selecting the right primary and secondary categories is critical, and why your service descriptions must use the exact language your customers use when searching.

Distance is the geographic proximity of your business to the searcher. You cannot change your physical location, but you can expand your reach through service area settings and by optimising for city-level and neighbourhood-level keywords across multiple landing pages on your website.

Prominence measures how well-known your business is online. This includes the quality and quantity of your Google reviews, the strength of your website (domain authority, speed, content quality), the consistency of your citations, and backlinks from other Delhi-based websites and directories.

The businesses that dominate Delhi Maps search have all three factors working in their favour simultaneously. Our Local SEO strategy optimises each factor with a dedicated action plan tailored to your specific market and competitive landscape.`
      },
      {
        heading: 'Common Local SEO Mistakes Costing Delhi Businesses Traffic',
        content: `After auditing hundreds of Delhi business websites and GBP listings, we see the same mistakes repeatedly. Avoiding these can immediately improve your rankings:`,
        bullets: [
          'NAP inconsistency: Your business name, address, and phone number differ across your website, GBP, and directories. Google sees these as different businesses.',
          'Wrong primary category: Selecting a broad category (like "Business") instead of a specific one ("Digital Marketing Agency") dramatically reduces relevance.',
          'No review response: Businesses that do not respond to reviews are penalised in Google\'s prominence calculation.',
          'Thin GBP description: A 2-line description is a missed opportunity. Your GBP allows 750 characters — use them.',
          'Missing service areas: Service-area businesses that do not set up their service zones will not rank in those areas, even if they actively serve them.',
          'No website landing pages for each service location: If you serve CP, Noida, and Gurugram, each area needs a dedicated landing page with local keyword content.',
          'Ignoring GBP posts: Businesses that post regularly signal to Google that they are active and engaged, which improves ranking freshness scores.',
        ]
      },
    ],
    relatedSlugs: ['ai-automation-saves-20-hours', 'google-business-profile-optimization']
  },
  'ai-automation-saves-20-hours': {
    slug: 'ai-automation-saves-20-hours',
    category: 'AI Automation',
    title: 'How AI Automation Saves Small Businesses 20+ Hours Per Week',
    subtitle: 'The practical systems Delhi business owners are using right now to eliminate manual work, respond to leads faster, and grow without adding headcount.',
    author: 'Bandana Kumari',
    authorRole: 'Founder & Growth Strategist',
    authorBio: 'Bandana Kumari is the Founder & Growth Strategist at KiwiClicks. She specializes in Local SEO, Google Business Profile Optimization, Lead Generation, Digital Marketing Strategy, and Online Reputation Management. With 4+ years of experience helping local businesses generate visibility, trust, and qualified leads, she focuses on building sustainable growth systems instead of short-term marketing tactics.',
    date: 'June 2, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
    sections: [
      {
        heading: 'The Real Cost of Manual Operations for Delhi Businesses',
        content: `Most small business owners in Delhi are spending 20-30 hours per week on tasks that could be fully automated: manually responding to leads, copying data between spreadsheets and CRMs, following up with prospects, generating reports, and handling repetitive customer enquiries.

At ₹2,000 per hour of owner time (a conservative estimate for an experienced business owner), that is ₹40,000-60,000 worth of productive capacity being consumed every week by administrative work. Over a year, that is ₹20-30 lakh in opportunity cost — money and time that could be directed toward growth, client service, and strategy.

The businesses that are pulling ahead right now are not necessarily the ones with bigger budgets or more staff. They are the ones that have systemised their operations using AI and automation tools — and they did it without hiring a single additional person.`
      },
      {
        heading: 'Lead Handling: From 4-Hour Response to 4 Minutes',
        content: `Speed-to-lead is the single biggest conversion variable we have seen across hundreds of campaigns. A study by Harvard Business Review found that businesses that respond to leads within 5 minutes are 100x more likely to qualify them than those that respond within 30 minutes. In Delhi\'s competitive markets, where customers are simultaneously enquiring with 3-5 competitors, a 2-hour response time is effectively a lost lead.

The automated lead handling system we build for clients works like this: A potential customer fills out a form, sends a WhatsApp message, or calls the business. Within 90 seconds, they receive a personalised acknowledgement via WhatsApp or SMS with their specific enquiry referenced. Simultaneously, the lead is qualified using AI (checking for key criteria like budget, timeline, and intent level), scored, and routed to the right team member with a WhatsApp notification.`,
        bullets: [
          'Lead capture: Website forms, WhatsApp Business, Google Ads lead forms, Meta lead ads',
          'Instant acknowledgement: Personalised WhatsApp message sent within 90 seconds',
          'AI qualification: Lead scored based on intent signals and pre-defined criteria',
          'CRM routing: Lead automatically added to the correct pipeline stage in HubSpot or Zoho',
          'Team alert: WhatsApp notification sent to the relevant sales team member',
          'Follow-up scheduling: Automated reminder if lead has not been contacted within 30 minutes',
        ]
      },
      {
        heading: 'CRM Automation: Eliminating Manual Data Entry',
        content: `The most common complaint we hear from Delhi business owners is that their CRM is always out of date because "no one has time to update it." This is a systems failure, not a discipline failure. Manual CRM updates require the same data to be entered multiple times across multiple tools, which nobody sustains in a busy operation.

The solution is automatic CRM population. Every touchpoint — form submission, WhatsApp conversation, phone call, email reply, appointment booking — gets captured and synced to the CRM without any manual input. Notes from WhatsApp conversations are summarised by AI and attached to the contact record. Call transcripts are logged automatically. Email threads are synced to the relevant deal.

The result: your CRM is always current, your pipeline is always visible, and your team can focus on selling rather than data entry. We have implemented this for real estate clients in CP who previously spent 2 hours per day on CRM updates — that time is now zero.`
      },
      {
        heading: 'Automated Follow-Ups: The Revenue Hidden in Your Existing Leads',
        content: `Every business has a graveyard of "dead" leads — people who enquired but never converted, who are sitting untouched in a spreadsheet or an old inbox. Most of these leads did not buy because they were not followed up with at the right time with the right message. They were not uninterested — they were just forgotten.

Automated follow-up sequences resurrect this revenue. We build multi-touch sequences that continue engaging leads who did not convert immediately, using WhatsApp messages, emails, and retargeting ads, spaced across days and weeks in a natural, non-spammy pattern.`,
        bullets: [
          'Day 1: Personalised follow-up referencing their specific enquiry',
          'Day 3: Educational content relevant to their interest (e.g., a relevant blog post or case study)',
          'Day 7: A specific offer or incentive tied to their expressed need',
          'Day 14: A low-friction "still interested?" check-in with easy response options',
          'Day 30: Long-term nurture content keeping your brand top of mind',
        ]
      },
      {
        heading: 'Customer Support: The AI Chatbot That Actually Works',
        content: `Most AI chatbots frustrate customers because they are generic, unhelpful, and fail to understand real questions. The systems we build are different: they are trained specifically on your business — your services, pricing FAQs, process, policies, and common objections.

A well-built AI customer support agent can handle 70-80% of inbound enquiries without human intervention: answering service questions, sharing pricing, booking appointments, providing business hours and location details, and collecting contact information for complex enquiries that need human follow-up.

For a Delhi real estate client handling 150+ daily WhatsApp enquiries, our AI agent reduced human response time from 4 hours average to 8 minutes for simple queries, while escalating complex queries to the sales team with full context already captured.`
      },
      {
        heading: 'Reporting: Business Intelligence Without the Manual Work',
        content: `Pulling together a weekly performance report — ad spend, leads generated, revenue attributed, website traffic — typically takes 2-4 hours of manual data gathering across Google Analytics, Google Ads, Meta Ads Manager, and your CRM. Multiplied across 52 weeks, that is up to 200 hours per year on reporting alone.

Automated reporting systems pull all this data into a single dashboard that updates in real time. You and your team can check performance at any moment without anyone having to run a report. Weekly email digests can be sent automatically to stakeholders every Monday morning with the previous week\'s key metrics.`
      },
      {
        heading: 'Implementation Guide: Where to Start',
        content: `The most effective way to implement automation is not to try to automate everything at once — it is to identify your highest-value, highest-frequency manual tasks and automate those first. Here is the order we recommend for most Delhi businesses:`,
        bullets: [
          'Step 1: Lead capture and instant acknowledgement (highest ROI, fastest to implement — typically 1 week)',
          'Step 2: CRM auto-population from all lead sources (eliminates the biggest daily time drain)',
          'Step 3: Sales team alerts and lead routing (ensures no lead falls through the cracks)',
          'Step 4: Follow-up sequences for unconverted leads (unlocks hidden revenue in your existing database)',
          'Step 5: Customer support chatbot trained on your specific business (reduces inbound query volume)',
          'Step 6: Automated reporting and performance dashboards (gives you real-time business intelligence)',
          'Step 7: Advanced AI workflows — lead scoring, predictive follow-up timing, sentiment analysis',
        ]
      },
    ],
    relatedSlugs: ['local-seo-delhi-guide-2026', 'website-conversion-rate-optimization']
  }
};

const allArticles = [
  { slug: 'local-seo-delhi-guide-2026', title: 'Local SEO for Delhi Businesses: Complete Guide 2026', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80', category: 'SEO' },
  { slug: 'ai-automation-saves-20-hours', title: 'How AI Automation Saves Small Businesses 20+ Hours Per Week', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=400&q=80', category: 'AI Automation' },
  { slug: 'meta-ads-hook-strategy', title: 'Meta Ads in 2026: The 3-Second Hook Framework', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=80', category: 'Social Media' },
  { slug: 'website-conversion-rate-optimization', title: 'Why Your Delhi Business Website Has a 1% Conversion Rate', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=400&q=80', category: 'Web Development' },
];

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articleData[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-page-bg text-text-primary pt-36 flex flex-col items-center justify-center px-6">
        <h1 className="font-serif italic text-5xl text-text-primary mb-4">Article Not Found</h1>
        <p className="text-text-secondary font-medium mb-8">This article is coming soon or the link may be incorrect.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-orange text-white text-sm font-bold border-2 border-accent-emerald">
          <ArrowLeft size={14} /> Back to Blog
        </Link>
      </div>
    );
  }

  const related = allArticles.filter(a => article.relatedSlugs.includes(a.slug)).slice(0, 2);

  return (
    <div className="min-h-screen bg-page-bg text-text-primary pt-24 transition-theme">

      {/* Hero Image */}
      <div className="w-full h-72 md:h-[440px] overflow-hidden relative">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-page-bg via-page-bg/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="py-6 flex items-center gap-2 text-xs font-sans text-text-secondary border-b border-border-color">
          <Link to="/" className="hover:text-accent-green transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-accent-green transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-text-primary font-medium">{article.category}</span>
        </div>

        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Article Body */}
          <article className="lg:col-span-8">
            {/* Meta */}
            <div className="mb-6">
              <span className="text-[9px] font-mono bg-accent-green/10 text-accent-green border border-accent-green/20 px-3 py-1 rounded-full font-bold tracking-widest uppercase">
                {article.category}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-text-primary leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg font-sans font-medium text-text-secondary leading-relaxed mb-8">
              {article.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-5 pb-8 border-b border-border-color mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-emerald flex items-center justify-center text-white font-bold text-sm">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-sans font-bold text-text-primary">{article.author}</p>
                  <p className="text-xs font-sans text-accent-green">{article.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-sans text-text-secondary">
                <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime}</span>
              </div>
            </div>

            {/* Article Sections */}
            <div className="space-y-10">
              {article.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="font-serif text-2xl text-text-primary mb-4 leading-snug">{section.heading}</h2>
                  {section.content.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx} className="text-base font-sans font-medium text-text-secondary leading-relaxed mb-4">{para}</p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 space-y-3 bg-card-bg border-2 border-accent-emerald rounded-2xl p-6 shadow-offset-sm">
                      {section.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm font-sans font-medium text-text-secondary">
                          <CheckCircle size={16} className="text-accent-green mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Author Box */}
            <div className="mt-12 p-6 bg-card-bg border-2 border-accent-emerald rounded-2xl shadow-offset flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-accent-emerald flex items-center justify-center text-white font-bold text-lg shrink-0">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-sans font-bold text-text-primary">{article.author}</p>
                <p className="text-xs font-sans text-accent-green mb-2">{article.authorRole}</p>
                <p className="text-xs font-sans font-medium text-text-secondary leading-relaxed">{article.authorBio}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 bg-accent-emerald rounded-2xl text-white text-center">
              <h3 className="font-serif italic text-2xl mb-3">Ready to implement this for your business?</h3>
              <p className="text-sm font-medium text-white/80 mb-6">Book a free discovery call. We will audit your current setup and give you a clear action plan.</p>
              <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-orange text-white text-xs font-bold uppercase tracking-wider border-2 border-white hover:bg-white hover:text-accent-emerald transition-all">
                Book Free Call <ArrowUpRight size={13} />
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Related Articles */}
              <div>
                <h3 className="font-sans font-bold text-sm text-text-primary mb-4 tracking-widest uppercase">Related Articles</h3>
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link key={rel.slug} to={`/blog/${rel.slug}`} className="group flex items-start gap-3 bg-card-bg border-2 border-accent-emerald rounded-2xl p-4 shadow-offset-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                        <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-accent-orange font-bold uppercase">{rel.category}</span>
                        <p className="text-xs font-sans font-bold text-text-primary mt-1 leading-snug group-hover:text-accent-orange transition-colors">{rel.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Discovery CTA */}
              <div className="bg-card-bg border-4 border-accent-orange rounded-2xl p-6 shadow-offset-orange">
                <p className="font-handwriting text-lg text-accent-orange mb-2 -rotate-1">Need help with this?</p>
                <h4 className="font-serif text-xl text-text-primary mb-3">Talk to a Growth Expert</h4>
                <p className="text-xs font-sans font-medium text-text-secondary mb-5 leading-relaxed">Free 30-minute strategy session. No pitch, just insights specific to your business.</p>
                <Link to="/#contact" className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent-orange text-white text-xs font-bold uppercase tracking-wider border-2 border-accent-emerald hover:bg-accent-emerald transition-all shadow-offset-sm">
                  Book Free Session <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* Back to Blog */}
      <div className="py-8 px-6 md:px-12 border-t border-border-color bg-page-bg-sec transition-theme">
        <div className="max-w-6xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-sans font-bold text-text-secondary hover:text-accent-green transition-colors">
            <ArrowLeft size={14} /> Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
