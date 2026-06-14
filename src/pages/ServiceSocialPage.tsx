import ServicePageTemplate from './ServicePageTemplate';

export default function ServiceSocialPage() {
  return (
    <ServicePageTemplate props={{
      title: 'Social Media Marketing',
      tagline: 'Scroll-stopping content and high-ROAS paid campaigns that convert.',
      description: 'From Instagram content strategy to Meta and Google Ads management, we build social media systems that capture attention, earn trust, and drive real enquiries — not just likes and followers.',
      heroImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80',
      category: 'Social Media Marketing',
      benefits: [
        { title: 'High-Retention Creative Strategy', desc: 'Videos and graphics engineered to capture attention in 3 seconds and hold it long enough to drive a conversion action.' },
        { title: 'Meta Ads Management', desc: 'Fully managed Facebook and Instagram advertising — from audience research and creative production to daily optimization.' },
        { title: 'Instagram Content Planning', desc: 'Monthly content calendars, caption copy, hashtag strategy, and story sequences designed to grow engaged followers.' },
        { title: 'Audience Targeting & Lookalikes', desc: 'Custom and lookalike audience stacks built from your actual customer data for the highest-quality lead targeting.' },
        { title: 'A/B Creative Testing', desc: 'Systematic testing of ad hooks, visuals, and CTAs to continuously improve ROAS and lower cost per lead.' },
        { title: 'Weekly Performance Reports', desc: 'Clear, jargon-free reports covering reach, engagement, cost per lead, and return on ad spend every week.' },
      ],
      process: [
        { step: '01', title: 'Brand & Audience Audit', desc: 'We review your current social presence, audience demographics, competitor creative strategies, and ad account history.' },
        { step: '02', title: 'Content Strategy & Creative Brief', desc: 'We develop a content strategy aligned with your business goals and create detailed briefs for all creative assets.' },
        { step: '03', title: 'Content Production', desc: 'We produce reels, carousels, static posts, and story formats tailored for each platform — all designed to convert.' },
        { step: '04', title: 'Campaign Setup & Launch', desc: 'We configure audience targeting, set up pixel tracking, create campaigns, and launch with proper conversion tracking.' },
        { step: '05', title: 'Daily Optimization', desc: 'We monitor campaigns daily, pausing underperformers, scaling winners, and rotating creatives before fatigue sets in.' },
        { step: '06', title: 'Monthly Strategy Review', desc: 'We review all metrics, share insights, and adjust the strategy for the following month based on what is working.' },
      ],
      caseStudy: {
        client: 'Veda Organics',
        industry: 'D2C Wellness',
        challenge: 'The brand was spending ₹2L per month on Meta Ads with a ROAS of 1.8x — barely breaking even on ad spend. Creative quality was low, targeting was broad, and the landing pages were generic e-commerce product pages.',
        solution: 'We restructured the creative pipeline around problem-aware hooks, built speed-optimized single-product landing pages, and deployed a tiered lookalike audience strategy using their top 10% customer data.',
        result: 'ROAS improved from 1.8x to 4.8x within 45 days. Customer acquisition cost dropped by 38%. The brand scaled ad spend from ₹2L to ₹5L per month while maintaining profitability.',
        metrics: ['4.8x ROAS', '-38% Customer Acquisition Cost', '5x Ad Spend Scale', '45 Days to Results'],
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      },
      faqs: [
        { q: 'What is the minimum budget for Meta Ads?', a: 'We recommend a minimum of ₹20,000/month in ad spend to gather enough data for the algorithm to optimize. Below this, results are inconsistent. Our management fee is separate from the ad budget.' },
        { q: 'Do you produce the creative content for ads?', a: 'Yes. Our team creates all ad creatives — scripts, video direction, graphics, and copy. We collaborate with your team on brand guidelines and provide multiple creative variations for testing.' },
        { q: 'How do you measure social media success?', a: 'We track metrics that matter to your business: qualified leads generated, cost per lead, ROAS for e-commerce brands, and lead-to-customer conversion rates. We do not report on vanity metrics like reach or impressions as primary KPIs.' },
        { q: 'How long before we see results from social media ads?', a: 'Most campaigns show initial performance data within the first 2 weeks. Meaningful ROAS optimization typically occurs within 30-45 days as the algorithm gathers sufficient conversion data.' },
      ]
    }} />
  );
}
