import ServicePageTemplate from './ServicePageTemplate';

export default function ServiceAIPage() {
  return (
    <ServicePageTemplate props={{
      title: 'AI & Business Automation',
      tagline: 'Eliminate manual work. Respond to leads in minutes, not hours.',
      description: 'We build custom AI automation systems for Delhi businesses — from instant lead qualification and CRM routing to AI customer support agents and automated reporting pipelines. Systems that run 24/7, require no manual intervention, and give your team time to focus on what matters.',
      heroImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80',
      category: 'AI & Automation',
      benefits: [
        { title: 'Instant Lead Response (90 Seconds)', desc: 'Never lose a lead to slow response again. Our systems acknowledge and qualify every lead within 90 seconds of enquiry — 24 hours a day.' },
        { title: 'Automated CRM Population', desc: 'Every form submission, WhatsApp message, and call is automatically captured and synced to your CRM with zero manual data entry.' },
        { title: 'AI Customer Support Agent', desc: 'A custom-trained AI agent handles 70-80% of inbound queries automatically, escalating complex cases to your human team with full context.' },
        { title: 'WhatsApp Business Integration', desc: 'Automated WhatsApp follow-up sequences, appointment confirmations, and lead nurture messages that feel personal — not robotic.' },
        { title: 'Lead Scoring & Qualification', desc: 'AI-powered scoring system that ranks incoming leads by intent signals, budget, and timeline — so your team focuses on the best opportunities first.' },
        { title: 'Automated Performance Reporting', desc: 'Weekly business intelligence reports delivered to your inbox automatically — ad performance, lead volumes, conversion rates, and revenue attribution.' },
      ],
      process: [
        { step: '01', title: 'Workflow Mapping', desc: 'We map your current manual processes, identify automation opportunities, and calculate the time and revenue impact of each automation.' },
        { step: '02', title: 'System Architecture', desc: 'We design the technical architecture of your automation stack — which tools to use, how data flows, and how each system connects.' },
        { step: '03', title: 'Build & Integrate', desc: 'We build the automation workflows using Make.com, Zapier, or custom API integrations, and connect them to your existing tools.' },
        { step: '04', title: 'AI Model Training', desc: 'For AI agents and chatbots, we train the model on your specific business — services, FAQs, pricing, and common objections.' },
        { step: '05', title: 'Testing & Quality Assurance', desc: 'We run 200+ test scenarios to ensure the automation handles every edge case correctly before going live.' },
        { step: '06', title: 'Handover & Training', desc: 'We provide full system documentation and training so your team can monitor, manage, and expand the automation independently.' },
      ],
      caseStudy: {
        client: 'Apex Realty Connaught Place',
        industry: 'B2B Real Estate',
        challenge: 'The sales team was receiving 80+ daily enquiries across WhatsApp, forms, and phone calls. Manual lead qualification took 3-4 hours per day. High-intent buyers were waiting 4+ hours for a response and choosing competitors.',
        solution: 'We built an automated lead triage system: all enquiry channels feed into a central hub, AI qualifies each lead based on property type, budget, and timeline, routes them to the correct agent, and sends an instant WhatsApp acknowledgement to the prospect.',
        result: 'Lead response time dropped from 4 hours to 90 seconds. The sales team saved 3.5 hours per day on manual qualification. Qualified lead-to-meeting conversion rate improved by 64%.',
        metrics: ['90-Second Response Time', '3.5 Hours Saved Daily', '+64% Lead-to-Meeting Rate', '24/7 Lead Coverage'],
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
      },
      faqs: [
        { q: 'What tools do you use to build automations?', a: 'We use Make.com and Zapier for workflow automation, OpenAI and Gemini APIs for AI capabilities, WhatsApp Business API for messaging, and custom Node.js code for complex requirements. We choose tools based on your budget and technical requirements.' },
        { q: 'Do I need a technical team to maintain the automations?', a: 'No. We build automations with clean dashboards and simple controls. We provide full training and documentation, and offer ongoing support retainers if you prefer us to manage the system.' },
        { q: 'How long does it take to implement?', a: 'A standard lead qualification and CRM routing system takes 2-3 weeks. More complex systems with custom AI agents take 4-6 weeks. We always start with a scoping session before quoting timelines.' },
        { q: 'What is the ongoing cost?', a: 'The main ongoing costs are tool subscriptions (Make.com, OpenAI API usage). These are typically ₹5,000-20,000/month depending on volume. The ROI from time saved and faster lead response typically delivers payback within 30-60 days.' },
      ]
    }} />
  );
}
