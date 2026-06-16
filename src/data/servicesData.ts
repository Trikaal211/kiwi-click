export interface ServiceData {
  slug: string;
  category: 'digital-marketing' | 'web-development' | 'ai-automation' | 'local-business-growth';
  categoryLabel: string;
  title: string;
  tagline: string;
  heroDescription: string;
  accentColor: 'green' | 'orange' | 'emerald' | 'gold';
  widgetType: 'seo' | 'ads' | 'chatbot' | 'web' | 'local';
  problems: string[];
  solution: string;
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  caseStudy: {
    clientName: string;
    challenge: string;
    solution: string;
    metrics: { label: string; val: string }[];
  };
  faqs: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  // ─── DIGITAL MARKETING ───
  'seo': {
    slug: 'seo',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Enterprise SEO Services',
    tagline: 'Rank on page #1 for commercial-intent keywords that drive sales.',
    heroDescription: 'Our organic search campaigns focus entirely on business revenue. We don\'t optimize for vanity search volume; we position your brand directly in front of buyers at the exact moment they are ready to purchase.',
    accentColor: 'green',
    widgetType: 'seo',
    problems: [
      'Low website traffic that fails to generate qualified sales inquiries.',
      'Relying on expensive paid campaigns that stop generating leads the moment you stop paying.',
      'Difficulty outranking massive established competitors for key industry terms.'
    ],
    solution: 'We audit your site, define a laser-focused keyword roadmap, rebuild your site structure, write premium content, and acquire authoritative backlinks that push your rankings to page #1.',
    benefits: [
      'Consistent stream of organic inbound inquiries',
      'Lower long-term customer acquisition cost (CAC)',
      'Highly authoritative search presence that builds instant trust'
    ],
    process: [
      { step: '01', title: 'Audit & Strategy', desc: 'Thorough technical scan and competitor keyword gap analysis.' },
      { step: '02', title: 'On-Page Blueprint', desc: 'Rewriting meta tags, improving HTML structure, and optimizing speed.' },
      { step: '03', title: 'Content Engine', desc: 'Publishing targeted informational pages that convert visitors.' },
      { step: '04', title: 'Authority Building', desc: 'Acquiring high-tier backlinks from industry-relevant portals.' }
    ],
    caseStudy: {
      clientName: 'SkillForge EdTech',
      challenge: 'EdTech startup had zero organic presence and was spending $5,000/mo on Google ads.',
      solution: 'Implemented a technical structure rebuild and targeted 40 commercial-intent keywords.',
      metrics: [
        { label: 'Organic Traffic', val: '+240%' },
        { label: 'Keyword Rankings', val: '12 on Page #1' },
        { label: 'Ad Spend Saved', val: '$3,800/mo' }
      ]
    },
    faqs: [
      { q: 'How long does it take to see results?', a: 'SEO is a compounding asset. Initial ranking improvements are visible in 90 days, while significant organic traffic growth usually takes 6 months.' },
      { q: 'Do you guarantee Google #1 rankings?', a: 'No ethical agency can guarantee specific rank positions due to search algorithm fluctuations, but we do guarantee execution of verified growth blueprints.' }
    ]
  },
  'local-seo': {
    slug: 'local-seo',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Local SEO Strategy',
    tagline: 'Dominate regional search results and drive local walk-ins.',
    heroDescription: 'Local buyers search for physical services near them. We optimize your local citation profiles, directories, and website geometry so regional clients choose your location over neighboring competitors.',
    accentColor: 'emerald',
    widgetType: 'local',
    problems: [
      'Competitors appearing higher in Google Maps searches.',
      'Inconsistent address coordinates and citations across review directories.',
      'Missing out on foot traffic from potential clients in your immediate neighborhood.'
    ],
    solution: 'We align name-address-phone profiles, configure microdata schemas, audit local citations, and design specialized landing pages mapping local neighborhoods.',
    benefits: [
      'Top 3 placement in local Google Map Pack results',
      'Increased phone calls and direct walk-ins',
      'Consistent citation reviews across 50+ local platforms'
    ],
    process: [
      { step: '01', title: 'Citation Cleanup', desc: 'Auditing and correcting phone, email, and address info across the web.' },
      { step: '02', title: 'Geo-Targeted Landing Pages', desc: 'Creating neighborhood-specific web assets tailored to local search.' },
      { step: '03', title: 'Review Pipeline', desc: 'Setting up systems to automatically ask happy customers for reviews.' }
    ],
    caseStudy: {
      clientName: 'Dwarka Dental Clinic',
      challenge: 'Local clinic was losing walk-ins to newer clinics because they did not appear in Maps searches.',
      solution: 'Cleaned up citations, updated schemas, and built review automation campaigns.',
      metrics: [
        { label: 'Maps Views', val: '+320%' },
        { label: 'New Patient Bookings', val: '45+ Monthly' },
        { label: 'Average Rating', val: '4.9 Stars' }
      ]
    },
    faqs: [
      { q: 'What is a citation?', a: 'A citation is any mention of your Business Name, Address, and Phone Number (NAP) on local business directories like Yelp, Justdial, and YellowPages.' },
      { q: 'Do we need a physical office for Local SEO?', a: 'Yes. To rank in a specific local area, Google requires a verifiable physical address or defined local service area.' }
    ]
  },
  'gbp-optimization': {
    slug: 'gbp-optimization',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Google Business Profile Optimization',
    tagline: 'Maximize profile engagement on Google Maps.',
    heroDescription: 'Your Google Business Profile (formerly GMB) is your digital storefront. We optimize your listing setup, visual layouts, product catalogs, and review mechanisms to maximize direct clicks.',
    accentColor: 'gold',
    widgetType: 'local',
    problems: [
      'Unverified or suspended Google Business listings.',
      'Low customer click-throughs from search maps to website links.',
      'Outdated product lists and photo catalogs on the business panel.'
    ],
    solution: 'We complete verification audits, optimize descriptions, update keyword-focused tags, load high-quality photos, and establish a Q&A setup.',
    benefits: [
      'High-ranking placement for localized searches',
      'Increased click-throughs to website pages',
      'Instant trust with verified credentials'
    ],
    process: [
      { step: '01', title: 'Profile Audit', desc: 'Reviewing category setups, photos, reviews, and links.' },
      { step: '02', title: 'Keyword Optimization', desc: 'Embedding natural service terms inside details.' },
      { step: '03', title: 'Asset Upload', desc: 'Adding premium geotagged team and office photos.' }
    ],
    caseStudy: {
      clientName: 'Dwarka Logistics',
      challenge: 'Logistics provider profile was unverified and ranked below competitors.',
      solution: 'Re-arranged categories, added verified business files, and optimized descriptions.',
      metrics: [
        { label: 'Search Visibility', val: '+180%' },
        { label: 'Direct Call Taps', val: '80+ Monthly' },
        { label: 'Map Clicks', val: '+140%' }
      ]
    },
    faqs: [
      { q: 'Can you recover a suspended listing?', a: 'Yes. We audit the profile to ensure full compliance with Google guidelines and manage the reinstatement appeal process.' }
    ]
  },
  'google-ads': {
    slug: 'google-ads',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Google Ads Management',
    tagline: 'Target high-intent searchers and turn clicks into customers.',
    heroDescription: 'Google Ads capture users when they search for immediate solutions. We manage and scale Search, Performance Max, and Display campaigns designed to deliver qualified inbound leads.',
    accentColor: 'orange',
    widgetType: 'ads',
    problems: [
      'High Cost-Per-Click (CPC) budgets yielding irrelevant search terms.',
      'Poorly designed campaigns that drain budget without conversions.',
      'Lack of granular tracking to measure what clicks turn into actual clients.'
    ],
    solution: 'We configure precision negative keywords, write highly optimized copy, set up conversion-intent tracking, and build high-performance landing pages.',
    benefits: [
      'Immediate traffic from hot buyer prospects',
      'Highly optimized Quality Scores reducing CPC costs',
      'Transparent attribution showing cost per actual conversion'
    ],
    process: [
      { step: '01', title: 'Keyword Plan', desc: 'Filtering out negative query terms and selecting buyer intents.' },
      { step: '02', title: 'Ad Creative', desc: 'Writing high-click-through headline variations.' },
      { step: '03', title: 'Optimized Landing Pages', desc: 'Designing fast, mobile-friendly landing pages.' }
    ],
    caseStudy: {
      clientName: 'Apex Capital Partners',
      challenge: 'Ad accounts were running with high CPC and zero lead attribution.',
      solution: 'Revamped ad targeting structure and matched campaigns to high-converting landing pages.',
      metrics: [
        { label: 'Ad Lead Quantity', val: '+190%' },
        { label: 'Cost-Per-Lead', val: '-45%' },
        { label: 'Average ROAS', val: '4.8x' }
      ]
    },
    faqs: [
      { q: 'Do you charge a percentage of spend?', a: 'We offer transparent flat-fee pricing based on complexity, so our interest lies entirely in scaling your performance, not your bill.' }
    ]
  },
  'meta-ads': {
    slug: 'meta-ads',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Meta Ads Management',
    tagline: 'Generate leads and build authority on Instagram & Facebook.',
    heroDescription: 'Scale your business with highly targeted ad funnels. We map your audience demographics, design high-converting visual ads, and program retargeting workflows that convert social scrollers into client meetings.',
    accentColor: 'green',
    widgetType: 'ads',
    problems: [
      'Spending budgets boosting posts with zero direct ROI.',
      'Ad fatigue causing performance metrics to decay over time.',
      'Vague demographic targeting that reaches the wrong audience segments.'
    ],
    solution: 'We script high-converting ad concepts, define lookalike audiences, configure Meta pixels, and deploy conversational funnel lead captures.',
    benefits: [
      'Consistent stream of lead profile signups',
      'Strong brand authority and organic visibility',
      'Automated email/SMS followups for direct leads'
    ],
    process: [
      { step: '01', title: 'Creative Hook Development', desc: 'Designing ad creatives and writing engaging scripts.' },
      { step: '02', title: 'Audience Optimization', desc: 'Structuring custom target lists and lookalikes.' },
      { step: '03', title: 'Funnels & Retargeting', desc: 'Deploying sequential ads to interested prospects.' }
    ],
    caseStudy: {
      clientName: 'Veda Organics',
      challenge: 'E-commerce brand had high product cart abandonment rates.',
      solution: 'Re-designed product catalog ads and programmed multi-stage retargeting campaigns.',
      metrics: [
        { label: 'E-commerce ROAS', val: '5.2x' },
        { label: 'Cart Checkout Rate', val: '+75%' },
        { label: 'Cost per Acquisition', val: '-30%' }
      ]
    },
    faqs: [
      { q: 'How much budget do we need to start?', a: 'We recommend starting with at least $15-$20 per day to allow testing of ad variations and audience groupings.' }
    ]
  },
  'lead-generation': {
    slug: 'lead-generation',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing',
    title: 'B2B Lead Generation',
    tagline: 'Fill your sales pipeline with highly qualified corporate leads.',
    heroDescription: 'Forget cold emailing. We build automated B2B funnels, landing pages, and search campaigns that bring corporate decision-makers directly to your booking calendar.',
    accentColor: 'orange',
    widgetType: 'ads',
    problems: [
      'Relying on inconsistent networking or referrals.',
      'Wasting sales team hours talking to unqualified prospects.',
      'Low booking rates from website contact pages.'
    ],
    solution: 'We build targeted lead magnets, write high-converting copy, design responsive forms, and integrate Zapier/Make automations to qualify leads instantly.',
    benefits: [
      'Consistent volume of target company leads',
      'Higher sales team conversion efficiency',
      'Automated scheduling integrations'
    ],
    process: [
      { step: '01', title: 'Profile Definition', desc: 'Detailing target industry buyer personas.' },
      { step: '02', title: 'Lead Magnet Strategy', desc: 'Creating guides, templates, or calculators to capture information.' },
      { step: '03', title: 'Funnels Setup', desc: 'Publishing dedicated lead capture forms.' }
    ],
    caseStudy: {
      clientName: 'Dwarka Coworking',
      challenge: 'Corporate desk sales were lagging during off-seasons.',
      solution: 'Launched a Google Ads campaign targeting corporate office managers.',
      metrics: [
        { label: 'Inbound Inquiries', val: '127 in 30 Days' },
        { label: 'Lead Conversion', val: '22%' },
        { label: 'Closed Revenue', val: '₹4.5L Generated' }
      ]
    },
    faqs: [
      { q: 'How do you qualify the leads?', a: 'We design custom conditional logic fields inside the discovery forms to screen leads based on budget, timeline, and requirements.' }
    ]
  },
  'content-marketing': {
    slug: 'content-marketing',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Content Marketing Strategy',
    tagline: 'Publish authoritative content that converts readers into buyers.',
    heroDescription: 'We write deep, verified, and engaging blogs, case studies, and scripts designed to demonstrate your expertise, rank on search engines, and drive organic conversions.',
    accentColor: 'green',
    widgetType: 'seo',
    problems: [
      'Publishing articles that get zero views and fail to engage readers.',
      'Writing shallow AI content that Google search filters out.',
      'Vague messaging that doesn\'t clearly explain your unique value.'
    ],
    solution: 'We draft high-quality content strategies, target search trends, write engaging copy, and design infographics to make content shareable.',
    benefits: [
      'Compounding organic traffic assets',
      'Credibility as an industry authority',
      'Engaging content assets to aid sales teams'
    ],
    process: [
      { step: '01', title: 'Topic Research', desc: 'Analyzing search terms and matching content to customer needs.' },
      { step: '02', title: 'Copywriting', desc: 'Writing high-quality, comprehensive content.' },
      { step: '03', title: 'Distribution Plan', desc: 'Sharing articles across social media profiles and email newsletters.' }
    ],
    caseStudy: {
      clientName: 'SkillForge Academy',
      challenge: 'EdTech company lacked blog traffic and relied entirely on paid social ads.',
      solution: 'Authored 15 detailed tutorial articles targeting entry-level tech searchers.',
      metrics: [
        { label: 'Blog Traffic', val: '+410%' },
        { label: 'Leads from Blog', val: '38 Monthly' },
        { label: 'Domain Authority', val: '14 -> 32' }
      ]
    },
    faqs: [
      { q: 'Is AI writing okay?', a: 'While we utilize AI tools for research, every line of copy is researched and edited by human experts to ensure it ranks on Google.' }
    ]
  },
  'reputation-management': {
    slug: 'reputation-management',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Online Reputation Management',
    tagline: 'Build digital trust and clean up search results.',
    heroDescription: 'A single bad review can cost thousands in lost business. We monitor review platforms, set up response pipelines, and suppress negative search listings to present a trusted image online.',
    accentColor: 'gold',
    widgetType: 'local',
    problems: [
      'Negative search listings appearing on page #1.',
      'Low review ratings on Google Maps and Trustpilot.',
      'Unresolved customer complaints hurting conversions.'
    ],
    solution: 'We design review acquisition funnels, publish positive PR assets, and build high-authority links to push negative pages down search results.',
    benefits: [
      'Higher review scores on key directories',
      'Clean search results on brand searches',
      'Instant confidence for prospective buyers'
    ],
    process: [
      { step: '01', title: 'Audit Search Results', desc: 'Scanning directories for negative mentions.' },
      { step: '02', title: 'Review Funnels', desc: 'Deploying automated campaigns to get feedback from happy clients.' },
      { step: '03', title: 'PR Positioning', desc: 'Publishing positive profiles and articles.' }
    ],
    caseStudy: {
      clientName: 'Apex Health Systems',
      challenge: 'A fake review campaign dropped their Maps rating to 3.4 stars.',
      solution: 'Launched a customer feedback campaign and filed removal reports with Google.',
      metrics: [
        { label: 'Rating Rebound', val: '4.8 Stars' },
        { label: 'Total Reviews', val: '+150 New' },
        { label: 'Patient Inquiries', val: '+65%' }
      ]
    },
    faqs: [
      { q: 'Can you delete negative Google reviews?', a: 'We file flagged deletion requests for reviews that violate Google policy. For others, we focus on generating positive reviews to raise average ratings.' }
    ]
  },

  // ─── WEB DEVELOPMENT ───
  'business-web-dev': {
    slug: 'business-web-dev',
    category: 'web-development',
    categoryLabel: 'Web Development',
    title: 'Business Website Development',
    tagline: 'High-performance, conversion-focused custom web solutions.',
    heroDescription: 'Your website should be an active sales representative, not a digital brochure. We build custom React, Vite, and Next.js platforms designed to load under 1 second, showcase your brand, and convert visitors.',
    accentColor: 'emerald',
    widgetType: 'web',
    problems: [
      'Slow website loading speeds causing visitors to leave.',
      'Outdated designs that fail to build brand authority.',
      'Clunky layouts that fail to convert visitors into inquiries.'
    ],
    solution: 'We design custom neobrutalist and modern interfaces, write clean code, optimize Core Web Vitals, and integrate scheduling and CRM tools.',
    benefits: [
      'Fast page load speeds',
      'Increased user conversions and bookings',
      'Perfect layout compatibility across mobile devices'
    ],
    process: [
      { step: '01', title: 'Wireframe Design', desc: 'Drafting structure layout blueprints in Figma.' },
      { step: '02', title: 'Development', desc: 'Writing clean, performant React/Tailwind code.' },
      { step: '03', title: 'Integrations', desc: 'Setting up CRM pipelines and calendar bookings.' }
    ],
    caseStudy: {
      clientName: 'Veda Organics',
      challenge: 'Their existing website loaded slowly on mobile and had high drop-off rates.',
      solution: 'Re-built the frontend codebase with Vite, optimized image sizes, and redesigned layouts.',
      metrics: [
        { label: 'Mobile Load Time', val: '0.8 Seconds' },
        { label: 'Conversions', val: '+88%' },
        { label: 'Bounce Rate', val: '-40%' }
      ]
    },
    faqs: [
      { q: 'What tech stack do you recommend?', a: 'We recommend React, Vite, Tailwind CSS, or Next.js for custom applications, and optimized WordPress or Shopify for e-commerce sites.' }
    ]
  },
  'wordpress-dev': {
    slug: 'wordpress-dev',
    category: 'web-development',
    categoryLabel: 'Web Development',
    title: 'Custom WordPress Development',
    tagline: 'Customized, secure, and fast WordPress setups.',
    heroDescription: 'Avoid slow WordPress templates. We develop custom WordPress themes and configurations optimized for speed, search rankings, and easy content editing.',
    accentColor: 'green',
    widgetType: 'web',
    problems: [
      'WordPress setups overloaded with clunky page-builder plugins.',
      'Frequent security issues and malware vulnerabilities.',
      'Slow loading speeds.'
    ],
    solution: 'We code custom Gutenberg block structures, limit third-party plugin usage, and configure security checks.',
    benefits: [
      'Simple admin panel dashboard controls',
      'Fast page load speeds',
      'Improved security structures'
    ],
    process: [
      { step: '01', title: 'Custom Theme Design', desc: 'Designing custom components.' },
      { step: '02', title: 'Theme Integration', desc: 'Coding custom post types and schemas.' },
      { step: '03', title: 'Security Setup', desc: 'Configuring firewall protections and backups.' }
    ],
    caseStudy: {
      clientName: 'Delhi Property Group',
      challenge: 'Real estate portal page builder plugin dropped speed score to 20/100.',
      solution: 'Rebuilt custom theme using lightweight blocks and set up custom databases.',
      metrics: [
        { label: 'PageSpeed Score', val: '95/100' },
        { label: 'Inquiries', val: '+60%' },
        { label: 'Data Security', val: 'Certified' }
      ]
    },
    faqs: [
      { q: 'Can we manage the content ourselves?', a: 'Yes. We build clean, intuitive dashboard structures so you can easily update text and photos without writing code.' }
    ]
  },
  'shopify-dev': {
    slug: 'shopify-dev',
    category: 'web-development',
    categoryLabel: 'Web Development',
    title: 'Shopify Store Development',
    tagline: 'High-converting Shopify stores optimized for performance.',
    heroDescription: 'Boost your online sales. We design custom Shopify themes, optimize checkout pages, and set up marketing scripts to increase conversion rates.',
    accentColor: 'orange',
    widgetType: 'web',
    problems: [
      'Slow page load speeds on product catalogs.',
      'High shopping cart abandonment rates during checkout.',
      'Clunky mobile layouts.'
    ],
    solution: 'We customize theme code, optimize product images, streamline checkout steps, and integrate analytics.',
    benefits: [
      'Increased average order value (AOV)',
      'Fast catalog loading times on mobile devices',
      'Streamlined marketing integrations'
    ],
    process: [
      { step: '01', title: 'Store Planning', desc: 'Defining product catalogs and shipping settings.' },
      { step: '02', title: 'Theme Setup', desc: 'Coding responsive Shopify theme structures.' },
      { step: '03', title: 'Apps & Script Setup', desc: 'Integrating email tools and analytics scripts.' }
    ],
    caseStudy: {
      clientName: 'Veda Organics Shop',
      challenge: 'Their existing Shopify theme was slow, resulting in high checkout drop-offs.',
      solution: 'Re-coded product templates, optimized image sizes, and streamlined checkout steps.',
      metrics: [
        { label: 'Checkout Conv Rate', val: '+62%' },
        { label: 'Page Speed', val: '1.2s Catalog' },
        { label: 'Revenue Generated', val: '5.2x ROI' }
      ]
    },
    faqs: [
      { q: 'Can you migrate our store to Shopify?', a: 'Yes. We manage database migrations to transfer products, customer records, and order history from WordPress or other platforms.' }
    ]
  },
  'landing-pages': {
    slug: 'landing-pages',
    category: 'web-development',
    categoryLabel: 'Web Development',
    title: 'High-Converting Landing Pages',
    tagline: 'Conversion-focused page layouts designed to drive sales.',
    heroDescription: 'Make your ad campaigns count. We design custom, responsive landing pages written to capture leads and turn ad spend into revenue.',
    accentColor: 'gold',
    widgetType: 'web',
    problems: [
      'High ad click spend yielding zero customer forms.',
      'Unstructured page layouts that confuse visitors.',
      'Slow mobile page loading speeds.'
    ],
    solution: 'We write clear, focused copy, design simple form steps, optimize for mobile devices, and set up analytics pipelines.',
    benefits: [
      'Lower lead acquisition costs',
      'Higher form signup conversion rates',
      'Clear, distraction-free page designs'
    ],
    process: [
      { step: '01', title: 'Copywriting Design', desc: 'Writing copy focused on solving pain points.' },
      { step: '02', title: 'Interface Build', desc: 'Coding fast landing page templates.' },
      { step: '03', title: 'Analytics Tracking', desc: 'Deploying tracking scripts and pixels.' }
    ],
    caseStudy: {
      clientName: 'Dwarka Coworking Space',
      challenge: 'Paid ad clicks were sending traffic to a slow homepage with low conversions.',
      solution: 'Created custom, fast landing pages built around single booking actions.',
      metrics: [
        { label: 'Conversion Rate', val: '7.8%' },
        { label: 'Leads Generated', val: '127 in 30 Days' },
        { label: 'Lead Cost', val: '-40%' }
      ]
    },
    faqs: [
      { q: 'Do you write the copy?', a: 'Yes. We draft high-converting headlines and copy focused on addressing visitor concerns.' }
    ]
  },
  'web-redesign': {
    slug: 'web-redesign',
    category: 'web-development',
    categoryLabel: 'Web Development',
    title: 'Website Redesign',
    tagline: 'Transform your website into a modern marketing asset.',
    heroDescription: 'Turn your site into a modern growth engine. We update outdated websites with fast, clean, and responsive layouts designed to convert.',
    accentColor: 'emerald',
    widgetType: 'web',
    problems: [
      'Outdated site designs that hurt brand credibility.',
      'Legacy codebases that make content updates difficult.',
      'Poor mobile responsiveness.'
    ],
    solution: 'We design custom neobrutalist components, clean up old codebase structures, and optimize layouts for mobile devices.',
    benefits: [
      'Refreshed brand identity and credibility',
      'Modern, easy-to-use user experience',
      'Improved search rankings'
    ],
    process: [
      { step: '01', title: 'UX Audit', desc: 'Analyzing user drop-off points on the old site.' },
      { step: '02', title: 'Design Revamp', desc: 'Creating modern, responsive layouts in Figma.' },
      { step: '03', title: 'Migration & Build', desc: 'Rebuilding the frontend with React/Next.js.' }
    ],
    caseStudy: {
      clientName: 'Apex Logistics Group',
      challenge: 'Their old site looked outdated, leading to high bounce rates.',
      solution: 'Re-built the frontend codebase, added modern graphics, and simplified navigation.',
      metrics: [
        { label: 'Website Bounce Rate', val: '-48%' },
        { label: 'Time On Site', val: '+120%' },
        { label: 'Direct Leads', val: '+95%' }
      ]
    },
    faqs: [
      { q: 'Will a redesign hurt our SEO?', a: 'No. We configure redirects for old URLs to ensure you retain your search rankings during the transition.' }
    ]
  },
  'web-maintenance': {
    slug: 'web-maintenance',
    category: 'web-development',
    categoryLabel: 'Web Development',
    title: 'Website Maintenance Services',
    tagline: 'Reliable updates, security checks, and hosting support.',
    heroDescription: 'Leave website maintenance to us. We run weekly software updates, handle backup storage, and optimize page speeds so your site stays secure.',
    accentColor: 'green',
    widgetType: 'web',
    problems: [
      'Frequent site crashes and plugin errors.',
      'Unresolved website hacks and security vulnerabilities.',
      'Slow performance due to outdated databases.'
    ],
    solution: 'We schedule daily backup archives, manage security firewalls, run weekly plugin updates, and monitor uptime.',
    benefits: [
      '99.9% guaranteed website uptime',
      'Daily backup recovery points',
      'Immediate technical support access'
    ],
    process: [
      { step: '01', title: 'Uptime Setup', desc: 'Monitoring site systems 24/7.' },
      { step: '02', title: 'Security Audits', desc: 'Deploying malware filters and custom firewalls.' },
      { step: '03', title: 'Database Updates', desc: 'Cleaning logs to maintain fast speeds.' }
    ],
    caseStudy: {
      clientName: 'Vance Dental Group',
      challenge: 'Site suffered frequent template crashes, costing bookings.',
      solution: 'Migrated hosting setup, updated site code, and implemented monitoring systems.',
      metrics: [
        { label: 'Website Uptime', val: '99.9%' },
        { label: 'Crash Instances', val: 'Zero' },
        { label: 'Support Resolution', val: 'Under 1 Hour' }
      ]
    },
    faqs: [
      { q: 'What happens if the site goes down?', a: 'Our uptime monitoring systems alert us immediately, and our team works to resolve issues and restore backups.' }
    ]
  },
  'cro': {
    slug: 'cro',
    category: 'web-development',
    categoryLabel: 'Web Development',
    title: 'Conversion Rate Optimization (CRO)',
    tagline: 'Turn more of your existing traffic into revenue.',
    heroDescription: 'Double your sales without spending more on ads. We analyze user behaviors, test design variations, and optimize checkout steps to maximize conversions.',
    accentColor: 'orange',
    widgetType: 'web',
    problems: [
      'High website traffic that fails to generate sales.',
      'Users leaving the checkout process before paying.',
      'Confusing navigation paths that hide conversion links.'
    ],
    solution: 'We run user behavior heatmaps, build A/B tests for landing pages, improve copy structures, and simplify checkout forms.',
    benefits: [
      'Increased conversion revenue from existing traffic',
      'Lower overall customer acquisition costs',
      'Frictionless customer purchase paths'
    ],
    process: [
      { step: '01', title: 'Data Scan', desc: 'Analyzing traffic drop-offs in Google Analytics.' },
      { step: '02', title: 'Heatmap Testing', desc: 'Studying user clicks and scroll behaviors.' },
      { step: '03', title: 'A/B Tests', desc: 'Deploying design variations to measure performance.' }
    ],
    caseStudy: {
      clientName: 'Veda Organics Store',
      challenge: 'Low conversion rate on e-commerce catalog traffic.',
      solution: 'Redesigned product pages and added quick-add-to-cart buttons.',
      metrics: [
        { label: 'Conversion Rate', val: '1.2% -> 2.4%' },
        { label: 'Store Sales', val: '+100%' },
        { label: 'Cart Abandonment', val: '-35%' }
      ]
    },
    faqs: [
      { q: 'Do we need a lot of traffic to run CRO?', a: 'Yes. We recommend having at least 5,000 monthly visitors to generate statistically valid data from A/B testing.' }
    ]
  },

  // ─── AI AUTOMATION ───
  'ai-chatbots': {
    slug: 'ai-chatbots',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    title: 'Intelligent AI Chatbots',
    tagline: 'Automate client engagement and lead capture 24/7.',
    heroDescription: 'Respond to prospective clients instantly. We build custom AI chatbots trained on your company data to answer questions, capture leads, and book meetings.',
    accentColor: 'green',
    widgetType: 'chatbot',
    problems: [
      'Losing potential clients due to slow response times.',
      'Wasting team hours answering simple, repetitive questions.',
      'Missed leads outside of standard business hours.'
    ],
    solution: 'We program custom AI agents using platforms like OpenAI and Flowise, connect them to web widgets, and sync lead details directly to your CRM.',
    benefits: [
      'Instant response times for website visitors',
      'Leads captured and qualified 24/7',
      'Lower customer support workloads'
    ],
    process: [
      { step: '01', title: 'Knowledge Training', desc: 'Training the AI model on your business services.' },
      { step: '02', title: 'Conversational Scripts', desc: 'Designing chat paths to capture details.' },
      { step: '03', title: 'Widget Deployment', desc: 'Adding the chat icon to website pages.' }
    ],
    caseStudy: {
      clientName: 'Apex Health Systems',
      challenge: 'Support staff spent hours manually booking appointment calls.',
      solution: 'Built an AI agent trained on schedule rules and integrated calendar booking.',
      metrics: [
        { label: 'Support Calls Desk', val: '-50%' },
        { label: 'Leads Booked', val: '140+ Monthly' },
        { label: 'Uptime', val: '24/7 Support' }
      ]
    },
    faqs: [
      { q: 'Will the AI make up false information?', a: 'We restrict the AI chatbot to only use details provided in your custom business database, preventing false answers.' }
    ]
  },
  'lead-qualification': {
    slug: 'lead-qualification',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    title: 'Automated Lead Qualification',
    tagline: 'Screen and score leads automatically.',
    heroDescription: 'Stop chasing unqualified leads. We construct automated workflows that evaluate inbound inquiries instantly, score them based on your rules, and book meetings only with high-value prospects.',
    accentColor: 'emerald',
    widgetType: 'chatbot',
    problems: [
      'Chasing leads that lack appropriate budgets.',
      'Slow outreach times giving competitors an edge.',
      'Manual, inconsistent lead qualification steps.'
    ],
    solution: 'We integrate Make/Zapier pipelines to score inputs, search for company details, and schedule follow-ups.',
    benefits: [
      'Immediate responses to all inquiries',
      'Sales team time focused on qualified buyers',
      'Consistent lead scoring parameters'
    ],
    process: [
      { step: '01', title: 'Rules Setup', desc: 'Defining qualification rules and budget parameters.' },
      { step: '02', title: 'Pipeline Setup', desc: 'Connecting form inputs to data scanners.' },
      { step: '03', title: 'Routing Actions', desc: 'Directing qualified leads to your calendar.' }
    ],
    caseStudy: {
      clientName: 'Dwarka Property Advisors',
      challenge: 'Chasing unqualified property inquiry spam was slowing down sales.',
      solution: 'Deployed automated form scanners that filtered entries by budget and background.',
      metrics: [
        { label: 'Response Speed', val: '< 2 Minutes' },
        { label: 'Qualified Meetings', val: '+45%' },
        { label: 'Time Saved', val: '20 Hours/wk' }
      ]
    },
    faqs: [
      { q: 'What tools do you use for automation?', a: 'We construct automated pipelines using Make.com, Zapier, Retool, and custom Node.js scripts.' }
    ]
  },
  'whatsapp-automation': {
    slug: 'whatsapp-automation',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    title: 'WhatsApp Business Automation',
    tagline: 'Engage customers on their preferred messaging app.',
    heroDescription: 'Connect with clients where they are. We set up official WhatsApp Business API integrations, automated messaging flows, and alert systems to drive sales.',
    accentColor: 'emerald',
    widgetType: 'chatbot',
    problems: [
      'Low open rates on email follow-ups.',
      'Chasing customer support tickets across different apps.',
      'Missed follow-up messages to incoming leads.'
    ],
    solution: 'We configure official WhatsApp API profiles, build custom interactive chat flows, and sync details to customer database pipelines.',
    benefits: [
      'Up to 98% message open rates',
      'Automated confirmation and booking alerts',
      'Unified chat logs for team access'
    ],
    process: [
      { step: '01', title: 'API Setup', desc: 'Verifying business files for API access.' },
      { step: '02', title: 'Flow Design', desc: 'Structuring customer response paths.' },
      { step: '03', title: 'CRM Sync', desc: 'Connecting messaging details to CRM systems.' }
    ],
    caseStudy: {
      clientName: 'Veda Organics Store',
      challenge: 'Their email abandonment cart flows got low open rates.',
      solution: 'Replaced email notifications with automated WhatsApp reminders.',
      metrics: [
        { label: 'Message Open Rate', val: '94%' },
        { label: 'Cart Recoveries', val: '+180%' },
        { label: 'Total Store Sales', val: '+28%' }
      ]
    },
    faqs: [
      { q: 'Is there a cost per message?', a: 'Yes. Meta charges a small, variable fee per message conversation templates.' }
    ]
  },
  'crm-automation': {
    slug: 'crm-automation',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    title: 'CRM Systems Integration',
    tagline: 'Keep customer data synchronized across tools.',
    heroDescription: 'Eliminate manual data entry. We connect your website, ad accounts, payment platforms, and email lists to keep lead records updated.',
    accentColor: 'gold',
    widgetType: 'ads',
    problems: [
      'Manual copy-pasting of lead records across different sheets.',
      'Inconsistent CRM logs causing lost sales opportunities.',
      'Siloed client details across different team departments.'
    ],
    solution: 'We configure custom HubSpot, Salesforce, or Zoho pipelines, map database fields, and set up alert notifications.',
    benefits: [
      'Zero manual copy-pasting of lead details',
      'Accurate data tracking from click to customer',
      'Automated pipeline status updates'
    ],
    process: [
      { step: '01', title: 'Data Mapping', desc: 'Detailing customer data fields.' },
      { step: '02', title: 'API Pipelines', desc: 'Coding automated sync scripts.' },
      { step: '03', title: 'Team Workflows', desc: 'Configuring direct Slack or email alerts.' }
    ],
    caseStudy: {
      clientName: 'Dwarka Coworking Spaces',
      challenge: 'Ad lead details were stored in spreadsheets, delaying follow-ups.',
      solution: 'Connected website form inputs to automatically create CRM pipeline tickets.',
      metrics: [
        { label: 'Outreach Time', val: '< 5 Minutes' },
        { label: 'CRM Sync Errors', val: 'Zero' },
        { label: 'Team Conversion', val: '+35%' }
      ]
    },
    faqs: [
      { q: 'Which CRMs do you support?', a: 'We support HubSpot, Zoho CRM, Salesforce, Pipedrive, and custom Airtable database setups.' }
    ]
  },
  'email-automation': {
    slug: 'email-automation',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    title: 'Automated Email Marketing',
    tagline: 'Warm up leads and onboard customers automatically.',
    heroDescription: 'Send the right message at the right time. We build automated email workflows, newsletters, and sequences that build trust with leads and onboard customers.',
    accentColor: 'orange',
    widgetType: 'ads',
    problems: [
      'Sending generic, unsegmented mass emails that get marked as spam.',
      'Low open rates and click CTRs.',
      'Losing potential sales by failing to follow up with leads.'
    ],
    solution: 'We set up email workflows, design customized layouts, configure domain verification, and write copy focused on conversions.',
    benefits: [
      'Higher email delivery rates',
      'Consistent, warm branding touchpoints',
      'Compounding automated sales'
    ],
    process: [
      { step: '01', title: 'Domain Audit', desc: 'Configuring DKIM and SPF records for safety.' },
      { step: '02', title: 'Sequence Copy', desc: 'Writing copy focused on solving pain points.' },
      { step: '03', title: 'Workflow Setup', desc: 'Deploying email automation steps.' }
    ],
    caseStudy: {
      clientName: 'SkillForge EdTech',
      challenge: 'Signup email confirmations were landing in spam folders.',
      solution: 'Re-configured domain settings and set up segmented onboarding emails.',
      metrics: [
        { label: 'Inbox Delivery', val: '99.2%' },
        { label: 'Onboarding Opens', val: '68%' },
        { label: 'Paid Plan Sales', val: '+45%' }
      ]
    },
    faqs: [
      { q: 'Which email platforms do you support?', a: 'We set up and optimize Mailchimp, Klaviyo, ActiveCampaign, Brevo, and HubSpot campaigns.' }
    ]
  },
  'process-automation': {
    slug: 'process-automation',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    title: 'Business Process Automation',
    tagline: 'Streamline operations and reduce manual labor.',
    heroDescription: 'Run your business more efficiently. We build custom data syncs and automations that connect invoicing, support tickets, and tracking sheets to save time.',
    accentColor: 'green',
    widgetType: 'chatbot',
    problems: [
      'Staff spending hours on manual reporting chores.',
      'Billing sync errors causing delayed payments.',
      'Slow internal notifications about support issues.'
    ],
    solution: 'We construct Make/Zapier automation flows, build custom reporting dashboards, and sync databases.',
    benefits: [
      'Reduced manual labor hours',
      'Accurate billing and reporting flows',
      'Immediate Slack alerts for key events'
    ],
    process: [
      { step: '01', title: 'Workflow Map', desc: 'Mapping manual steps to find bottlenecks.' },
      { step: '02', title: 'Flow Build', desc: 'Building integrations to automate data flows.' },
      { step: '03', title: 'Uptime Setup', desc: 'Configuring automated error monitoring systems.' }
    ],
    caseStudy: {
      clientName: 'Dwarka Health Diagnostics',
      challenge: 'Manual receipt sharing and customer tracking caused delays.',
      solution: 'Automated receipt creation and database logging upon checkout.',
      metrics: [
        { label: 'Labor Hours Saved', val: '15 Hours/wk' },
        { label: 'Billing Errors', val: 'Zero' },
        { label: 'Support Resolution', val: '4.8x Faster' }
      ]
    },
    faqs: [
      { q: 'How secure is our data in automated systems?', a: 'We construct systems using encrypted API integrations and follow strict database privacy standards to keep your details safe.' }
    ]
  },
  'ai-support': {
    slug: 'ai-support',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    title: 'AI Customer Support Solutions',
    tagline: 'Resolve customer support inquiries automatically.',
    heroDescription: 'Keep support queues empty. We build customer service bots trained on your product docs and policies to resolve tickets instantly.',
    accentColor: 'emerald',
    widgetType: 'chatbot',
    problems: [
      'Slow response times on support ticket queues.',
      'High operational support staffing costs.',
      'Repetitive support tickets draining team resources.'
    ],
    solution: 'We build AI support flows, connect custom databases, and set up human handoff rules for complex cases.',
    benefits: [
      'Instant resolution of common inquiries',
      'Lower operational customer support costs',
      'Smooth handoffs to team members'
    ],
    process: [
      { step: '01', title: 'Data Upload', desc: 'Training the AI model on product manuals and support history.' },
      { step: '02', title: 'Safety Testing', desc: 'Testing responses to ensure accuracy.' },
      { step: '03', title: 'Platform Launch', desc: 'Deploying the AI helper on website pages and portals.' }
    ],
    caseStudy: {
      clientName: 'SkillForge Platform',
      challenge: 'A growing student base overloaded their customer support team.',
      solution: 'Integrated an AI bot to answer platform usage and checkout questions.',
      metrics: [
        { label: 'Inquiries Resolved', val: '72%' },
        { label: 'Ticket Response', val: '< 10 Seconds' },
        { label: 'CSAT Rating', val: '4.7/5.0' }
      ]
    },
    faqs: [
      { q: 'What happens with complex questions?', a: 'The AI recognizes complex inquiries and automatically routes them to a human team member for support.' }
    ]
  },

  // ─── LOCAL BUSINESS GROWTH ───
  'gbp-growth': {
    slug: 'gbp-growth',
    category: 'local-business-growth',
    categoryLabel: 'Local Business Growth',
    title: 'Google Business Profile Growth Plan',
    tagline: 'Increase visibility and phone calls on Google Maps.',
    heroDescription: 'Dominate Google search results near you. We design Google Business Profile growth strategies that generate direct calls, reviews, and website clicks.',
    accentColor: 'gold',
    widgetType: 'local',
    problems: [
      'Your business not showing up in search map results.',
      'Low phone call inquiries from local search maps.',
      'Outdated listing details causing lost customers.'
    ],
    solution: 'We update categories, target high-volume search terms, post updates, and setup automated review responses.',
    benefits: [
      'Higher rankings in localized search maps',
      'Increased phone calls and direct directions requests',
      'Consistent, keyword-focused profile updates'
    ],
    process: [
      { step: '01', title: 'Competitor Audit', desc: 'Analyzing neighboring listings and categories.' },
      { step: '02', title: 'Profile Rebuild', desc: 'Rebuilding descriptions and adding geotagged photos.' },
      { step: '03', title: 'Growth Retainer', desc: 'Posting updates weekly to keep the listing active.' }
    ],
    caseStudy: {
      clientName: 'Dwarka Dental Care',
      challenge: 'Listing visibility was low, losing patients to competitors.',
      solution: 'Optimized listing categories, built local citations, and set up updates.',
      metrics: [
        { label: 'Profile Views', val: '+240%' },
        { label: 'Phone Call Taps', val: '65+ Monthly' },
        { label: 'Appointment Clicks', val: '+110%' }
      ]
    },
    faqs: [
      { q: 'How often should we post updates?', a: 'We recommend posting keyword-rich updates at least once a week to show Google your profile is active.' }
    ]
  },
  'maps-ranking': {
    slug: 'maps-ranking',
    category: 'local-business-growth',
    categoryLabel: 'Local Business Growth',
    title: 'Google Maps Ranking Strategy',
    tagline: 'Rank in the top 3 spots on Google Maps.',
    heroDescription: 'Secure your place in the Map Pack. We optimize your local citation profiles, directories, and website geometry so regional clients choose your location.',
    accentColor: 'emerald',
    widgetType: 'local',
    problems: [
      'Competitors ranking higher in search map packs.',
      'Inconsistent address listings across different directories.',
      'Failing to rank in neighborhoods just outside your office location.'
    ],
    solution: 'We align citation listings, build authority backlinks, and optimize map citations.',
    benefits: [
      'Top 3 placement in local Google Map Pack results',
      'Increased walk-ins and directions requests',
      'Accurate and consistent listings across directories'
    ],
    process: [
      { step: '01', title: 'NAP Verification', desc: 'Verifying Business Name, Address, and Phone Number consistencies.' },
      { step: '02', title: 'Local Directory Submissions', desc: 'Adding listings to high-authority local directories.' },
      { step: '03', title: 'Link Acquisition', desc: 'Securing authority backlinks from local blogs.' }
    ],
    caseStudy: {
      clientName: 'Dwarka Movers & Packers',
      challenge: 'Ranked on page #3 for search terms, yielding low call volume.',
      solution: 'Re-aligned address citations and acquired local authority backlinks.',
      metrics: [
        { label: 'Map Pack Rank', val: '#1 in dwarka' },
        { label: 'Direct Calls', val: '95+ Monthly' },
        { label: 'Website Visits', val: '+180%' }
      ]
    },
    faqs: [
      { q: 'Does address distance to searcher matter?', a: 'Yes. Google prioritizes physical proximity, but building strong directory signals allows you to rank across a wider radius.' }
    ]
  },
  'local-lead-gen': {
    slug: 'local-lead-gen',
    category: 'local-business-growth',
    categoryLabel: 'Local Business Growth',
    title: 'Local Lead Generation',
    tagline: 'Capture buyer inquiries in your target region.',
    heroDescription: 'Attract clients near you. We design local search campaigns, landing pages, and lead captures that deliver qualified inquiries.',
    accentColor: 'orange',
    widgetType: 'ads',
    problems: [
      'Low local inquiry volume from search traffic.',
      'Outreach targeting prospects outside your service area.',
      'High ad budgets spent on generic search terms.'
    ],
    solution: 'We build localized search ads, create neighborhood landing pages, and configure geographic targeting filters.',
    benefits: [
      'Steady stream of local customer leads',
      'Lower advertising spend waste',
      'Highly targeted local campaign outcomes'
    ],
    process: [
      { step: '01', title: 'Area Target Setup', desc: 'Defining zip code boundaries and campaign radiuses.' },
      { step: '02', title: 'Landing Page Build', desc: 'Deploying page variations matching target cities.' },
      { step: '03', title: 'Ad Optimization', desc: 'Focusing budgets on search queries with local intent.' }
    ],
    caseStudy: {
      clientName: 'Dwarka Coworking Hub',
      challenge: 'Their generic campaigns attracted inquiries from distant cities.',
      solution: 'Restructured search ads to target searchers in a 5km radius.',
      metrics: [
        { label: 'Qualified Inquiries', val: '127 leads/mo' },
        { label: 'Cost per Lead', val: '-45%' },
        { label: 'Desk Signups', val: '+38%' }
      ]
    },
    faqs: [
      { q: 'Can we target multiple cities?', a: 'Yes. We construct separate campaigns and landing page matches for each target city.' }
    ]
  },
  'multi-location-seo': {
    slug: 'multi-location-seo',
    category: 'local-business-growth',
    categoryLabel: 'Local Business Growth',
    title: 'Multi-Location SEO Strategy',
    tagline: 'Rank search listings across multiple office locations.',
    heroDescription: 'Manage search visibility across all offices. We build localized website templates, manage listings, and structure citations to scale your presence.',
    accentColor: 'green',
    widgetType: 'local',
    problems: [
      'Different branch offices competing for the same search keywords.',
      'Managing listings and reviews across different logins.',
      'Inconsistent directory details across locations.'
    ],
    solution: 'We design location database architectures, build search profiles, and centralize review tracking systems.',
    benefits: [
      'Rank listings for all branch office locations',
      'Avoid page self-competition issues',
      'Consistent, verified listings across locations'
    ],
    process: [
      { step: '01', title: 'Site Structure Setup', desc: 'Building clean subfolders for each office location.' },
      { step: '02', title: 'Bulk Profile Setup', desc: 'Creating and verifying listings for all locations.' },
      { step: '03', title: 'Localized Strategies', desc: 'Optimizing keywords for each branch office.' }
    ],
    caseStudy: {
      clientName: 'Delhi Diagnostic Labs',
      challenge: 'Lacked unique pages for their 5 local branch diagnostic centers.',
      solution: 'Created custom location pages and verified separate maps listings.',
      metrics: [
        { label: 'Total Map Views', val: '+290%' },
        { label: 'Appointment Clicks', val: '310+ Monthly' },
        { label: 'Rankings', val: 'All in Top 3' }
      ]
    },
    faqs: [
      { q: 'Do we need unique phone numbers for each location?', a: 'Yes. Google uses local phone area codes as a key citation signal, so we recommend unique numbers for each listing.' }
    ]
  },
  'review-management': {
    slug: 'review-management',
    category: 'local-business-growth',
    categoryLabel: 'Local Business Growth',
    title: 'Online Review Management',
    tagline: 'Get reviews automatically and build customer trust.',
    heroDescription: 'Boost customer confidence with positive reviews. We integrate automated review outreach loops that ask clients for feedback right after checkout.',
    accentColor: 'gold',
    widgetType: 'local',
    problems: [
      'Failing to collect reviews from happy customers.',
      'Negative reviews hurting listing conversion rates.',
      'No review alert system to respond to comments.'
    ],
    solution: 'We set up SMS and email review requests, configure feedback forms, and create review widgets.',
    benefits: [
      'Higher listing ratings and customer trust',
      'Increased map rankings from positive signals',
      'Immediate alert updates for negative feedback'
    ],
    process: [
      { step: '01', title: 'Triggers Setup', desc: 'Integrating review request emails upon checkout.' },
      { step: '02', title: 'Feedback Forms', desc: 'Creating simple forms for customers to share comments.' },
      { step: '03', title: 'Widget Placement', desc: 'Embedding review lists on your website.' }
    ],
    caseStudy: {
      clientName: 'Veda Wellness Dwarka',
      challenge: 'They had low review counts despite serving hundreds of happy clients.',
      solution: 'Automated review requests via SMS upon patient session checkout.',
      metrics: [
        { label: 'Total Reviews', val: '240+ Reviews' },
        { label: 'Listing Rating', val: '4.9/5.0 Stars' },
        { label: 'Direct Bookings', val: '+75%' }
      ]
    },
    faqs: [
      { q: 'Can we direct negative feedback to support?', a: 'Yes. We build customer feedback loops that guide unsatisfied clients to a support form, allowing you to resolve issues privately.' }
    ]
  },
  'citation-building': {
    slug: 'citation-building',
    category: 'local-business-growth',
    categoryLabel: 'Local Business Growth',
    title: 'Local Citation Building',
    tagline: 'Add your business details to high-tier directories.',
    heroDescription: 'Strengthen local search signals. We submit your business details to high-authority directories, mapping portals, and local review sites.',
    accentColor: 'emerald',
    widgetType: 'local',
    problems: [
      'Missing listings on local directory platforms.',
      'Inconsistent name or address listings on pages.',
      'Weak geographic relevance signals on search engines.'
    ],
    solution: 'We research local directories, submit verified citations, and fix inconsistencies.',
    benefits: [
      'Stronger map pack ranking signals',
      'Accurate directories for customers',
      'High-authority referral traffic backlinks'
    ],
    process: [
      { step: '01', title: 'Citation Audit', desc: 'Checking directories for duplicate or incorrect info.' },
      { step: '02', title: 'Directory Submissions', desc: 'Submitting details to 50+ local listings.' },
      { step: '03', title: 'Verification Tracking', desc: 'Ensuring listing additions get indexed.' }
    ],
    caseStudy: {
      clientName: 'Dwarka Dental Care Clinic',
      challenge: 'Lacked local directories, lowering map rankings.',
      solution: 'Submitted verified NAP listings to high-authority local directories.',
      metrics: [
        { label: 'Active Citations', val: '80+ Verified' },
        { label: 'Local search Rank', val: 'Top 3 Spot' },
        { label: 'Traffic Referrals', val: '+35%' }
      ]
    },
    faqs: [
      { q: 'Will these directories stay active?', a: 'Yes. We build verified, non-expiring citation listings so you retain your local search ranking signals.' }
    ]
  }
};
