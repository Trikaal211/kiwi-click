import ServicePageTemplate from './ServicePageTemplate';

export default function ServiceWebDevPage() {
  return (
    <ServicePageTemplate props={{
      title: 'Website Development',
      tagline: 'Fast, beautiful websites engineered to convert visitors into leads.',
      description: 'We build custom React and Next.js websites that load in under 1.5 seconds, rank on Google, and turn traffic into qualified enquiries. No WordPress templates. No page builder shortcuts. Every site is built to perform.',
      heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80',
      category: 'Website Development',
      benefits: [
        { title: 'Sub-1.5 Second Load Times', desc: 'Performance-optimized React builds that score 95+ on Google PageSpeed — faster sites rank better and convert more visitors.' },
        { title: 'Mobile-First Design', desc: 'Every website is designed for mobile screens first, ensuring a flawless experience on the devices your customers actually use.' },
        { title: 'CRM & WhatsApp Integration', desc: 'Leads from your website automatically route to HubSpot, Zoho, or your CRM with instant WhatsApp alerts for your sales team.' },
        { title: 'Conversion-Engineered Layout', desc: 'Strategic placement of social proof, CTAs, and friction-reducing form designs that consistently achieve 5-8% conversion rates.' },
        { title: 'SEO-Ready Architecture', desc: 'Clean code structure, semantic HTML, schema markup, and meta optimization built in from day one — no retrofitting required.' },
        { title: 'Analytics & Heatmap Setup', desc: 'Full Google Analytics 4, Tag Manager, and Hotjar heatmap configuration so you know exactly how visitors interact with your site.' },
      ],
      process: [
        { step: '01', title: 'Discovery & Wireframing', desc: 'We map your customer journey, define conversion goals, and create wireframes for every key page before any design begins.' },
        { step: '02', title: 'UI Design', desc: 'We design a pixel-perfect interface in Figma, applying your brand guidelines and conversion-optimized layout principles.' },
        { step: '03', title: 'Development', desc: 'We build using React or Next.js with Tailwind CSS — clean, maintainable code with no bloated plugins or dependencies.' },
        { step: '04', title: 'Integrations', desc: 'We connect your CRM, analytics, WhatsApp routing, payment gateway, and any other business tools your site needs.' },
        { step: '05', title: 'Testing & QA', desc: 'We test across all major browsers and devices, run Core Web Vitals audits, and verify all forms and integrations are working.' },
        { step: '06', title: 'Launch & Handover', desc: 'We launch to production, configure your domain and hosting, set up automated backups, and provide full training.' },
      ],
      caseStudy: {
        client: 'SkillForge India',
        industry: 'EdTech App',
        challenge: 'Their existing website had a 41% signup conversion rate due to a long email authentication flow that caused most users to abandon mid-process on mobile.',
        solution: 'We rebuilt their onboarding flow with a single-page React application featuring passwordless WhatsApp verification. We reduced steps from 7 to 2 and added social proof at each friction point.',
        result: 'Signup conversion rate jumped from 41% to 84% within the first month of launch. The site loads in 0.9 seconds and scores 97 on Google PageSpeed Mobile.',
        metrics: ['+105% Signup Rate', '0.9s Load Time', '97 PageSpeed Score', '-60% Abandonment'],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
      },
      faqs: [
        { q: 'How long does it take to build a website?', a: 'A standard 5-7 page business website takes 3-4 weeks. More complex sites with custom features or integrations take 6-10 weeks. We always agree on a milestone timeline before starting.' },
        { q: 'Do you build on WordPress or custom?', a: 'We build primarily with React and Next.js for full performance control. For content-heavy sites that need frequent updates, we use Next.js with a headless CMS (Sanity or Contentful). We avoid WordPress for performance-critical sites.' },
        { q: 'Will I be able to update the website myself?', a: 'Yes. We build a simple content management interface for all sites, so your team can update text, images, blog posts, and team profiles without any developer involvement.' },
        { q: 'Do you provide hosting?', a: 'We can configure hosting on Vercel, AWS, or your preferred provider. We recommend Vercel for most React/Next.js sites for its performance edge network and automatic deployments.' },
      ]
    }} />
  );
}
