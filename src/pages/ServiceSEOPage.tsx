import ServicePageTemplate from './ServicePageTemplate';

export default function ServiceSEOPage() {
  return (
    <ServicePageTemplate props={{
      title: 'SEO & Local SEO Services',
      tagline: 'Rank higher on Google. Get found by customers who are ready to buy.',
      description: 'We build sustainable organic search systems for Delhi businesses — from technical SEO foundations to Google Maps domination and content that converts. No black-hat tactics. No vanity traffic. Just qualified leads from search.',
      heroImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=900&q=80',
      category: 'SEO & Local Search',
      benefits: [
        { title: 'Google Maps Top 3 Ranking', desc: 'Appear in the local pack when your ideal customers search for businesses like yours in Delhi NCR.' },
        { title: 'Google Business Profile Optimization', desc: 'Fully optimized GBP with weekly posts, review strategy, photo updates, and Q&A management.' },
        { title: 'Technical SEO Foundation', desc: 'Crawl budget optimization, Core Web Vitals fixes, schema markup, and site architecture improvements.' },
        { title: 'Semantic Content Strategy', desc: 'Topical authority content clusters that establish your brand as the go-to expert in your niche.' },
        { title: 'Local Citation Building', desc: 'Consistent NAP presence across 30+ high-authority Indian directories and review platforms.' },
        { title: 'Monthly Ranking Reports', desc: 'Transparent keyword position tracking, organic traffic growth, and lead attribution reports every month.' },
      ],
      process: [
        { step: '01', title: 'Full SEO Audit', desc: 'We audit your website\'s technical health, existing keyword rankings, backlink profile, GBP status, and competitor landscape.' },
        { step: '02', title: 'Keyword & Entity Mapping', desc: 'We identify the highest-value commercial keywords and map a semantic content architecture around your core topics.' },
        { step: '03', title: 'Technical Fixes & On-Page Optimization', desc: 'We fix all technical issues, optimize title tags and meta descriptions, improve internal linking, and implement schema markup.' },
        { step: '04', title: 'GBP & Local Citation Campaign', desc: 'We optimize your Google Business Profile and build consistent citations across 30+ directories.' },
        { step: '05', title: 'Content Production', desc: 'We create high-quality, search-optimized content for your target keywords — service pages, blog posts, and location pages.' },
        { step: '06', title: 'Monthly Reporting & Iteration', desc: 'Every month we review rankings, traffic, and leads, then adjust strategy based on what is and is not working.' },
      ],
      caseStudy: {
        client: 'Apex Realty Connaught Place',
        industry: 'B2B Real Estate',
        challenge: 'The client was spending heavily on Google Ads for commercial property enquiries but had zero organic presence. Their website had a Domain Authority of 8 and was not ranking for any commercial real estate keywords in Delhi CP.',
        solution: 'We built a complete semantic SEO architecture around commercial property search intent in CP, created 12 location-specific landing pages, optimized their GBP with 50+ new photos and weekly posts, and executed a local citation campaign across 40 directories.',
        result: 'Within 5 months, the client ranked #1 for 8 target commercial property keywords in Delhi CP and entered the Google Maps top 3 pack for "commercial space Connaught Place" — their highest-value search query.',
        metrics: ['+320% Organic Traffic', '#1 Rankings × 8 Keywords', 'Maps Top 3 Pack', '-45% Ad Spend Dependence'],
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
      },
      faqs: [
        { q: 'How long does it take to rank on Google?', a: 'For most Delhi businesses, we see ranking movements within 4-8 weeks and meaningful organic traffic within 3-4 months. Local SEO (Maps and local pack) shows results faster — sometimes within 2-4 weeks for specific hyper-local queries.' },
        { q: 'Do you guarantee Google page 1 rankings?', a: 'No ethical SEO agency can guarantee specific rankings — Google\'s algorithm has hundreds of variables and changes frequently. What we guarantee is a systematic, white-hat approach to SEO that has consistently delivered first-page results for our Delhi clients.' },
        { q: 'What is included in Local SEO?', a: 'Our Local SEO service includes GBP optimization and management, local keyword research, on-page optimization for location-specific pages, citation building across 30+ directories, review strategy, and Google Maps ranking improvement.' },
        { q: 'Can you help if I was penalized by Google?', a: 'Yes. We offer algorithm recovery services. We conduct a full audit, identify the cause of the penalty or ranking drop, and build a structured recovery plan.' },
      ]
    }} />
  );
}
