export interface SubPageData {
  slug: string
  category: 'orm' | 'seo'
  title: string
  headline: string
  gradientText: string
  description: string
  whatItIs: { title: string; body: string }
  whyItMatters: { title: string; body: string; stats: { value: string; label: string }[] }
  howWeDoIt: { icon: string; title: string; description: string }[]
  faqs: { q: string; a: string }[]
}

export const ormSubPages: SubPageData[] = [
  {
    slug: 'orm-individuals',
    category: 'orm',
    title: 'ORM for Individuals',
    headline: 'Personal Online',
    gradientText: 'Reputation Management',
    description: 'Protect your name. When employers, partners, or clients Google you, make sure they find the real story — not unfair content that defines you.',
    whatItIs: {
      title: 'What Is Personal ORM?',
      body: 'Personal online reputation management is the practice of monitoring, influencing, and improving what appears when someone searches your name. Whether you\'re a professional, executive, or public figure, your search results shape how the world perceives you. We suppress damaging content and build a positive, accurate digital footprint.',
    },
    whyItMatters: {
      title: 'Why Personal ORM Matters',
      body: 'A single negative search result can derail a job offer, a business deal, or a personal relationship. Most people never look past the first page of Google — so controlling those results is essential.',
      stats: [
        { value: '97%', label: 'of employers Google candidates before hiring' },
        { value: '70%', label: 'of recruiters have rejected a candidate based on search results' },
        { value: '85%', label: 'of consumers trust online search as much as a referral' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Full Search Audit', description: 'We analyze every result on page 1 and 2 for your name, identifying risks and opportunities.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Content Strategy', description: 'We create authoritative content — profiles, articles, and web properties — optimized to rank for your name.' },
      { icon: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-2.556a4.5 4.5 0 0 0-1.242-7.244l4.5-4.5a4.5 4.5 0 0 1 6.364 6.364l-1.757 1.757', title: 'Link Building & Authority', description: 'Strategic link building to boost positive content and suppress negative results.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Monthly Reporting', description: 'Transparent monthly progress reports showing exactly how your search results have changed.' },
    ],
    faqs: [
      { q: 'How long does personal ORM take?', a: 'Most individuals see meaningful page 1 improvement within 60–120 days. Deeply entrenched content may take 6–12 months.' },
      { q: 'Can you remove content from Google?', a: 'In most cases, content cannot be removed from the source. We suppress it by ranking positive content above it in search results.' },
      { q: 'Is this service confidential?', a: 'Absolutely. All engagements are 100% confidential. We never disclose client names or details.' },
      { q: 'What if new negative content appears?', a: 'Our ongoing monitoring catches new threats early, and the positive content foundation we build provides resilience against future issues.' },
    ],
  },
  {
    slug: 'orm-businesses',
    category: 'orm',
    title: 'ORM for Businesses',
    headline: 'Business Online',
    gradientText: 'Reputation Management',
    description: 'Your company\'s search results are your digital storefront. We ensure prospects find a brand they can trust — not complaints that drive them to competitors.',
    whatItIs: {
      title: 'What Is Business ORM?',
      body: 'Business reputation management focuses on controlling what appears when someone searches your company name, brand, or products. We suppress negative reviews, news articles, and competitor content while amplifying positive stories, testimonials, and your own web properties.',
    },
    whyItMatters: {
      title: 'Why Business ORM Matters',
      body: 'One negative search result can cost your business thousands in lost revenue — and you\'ll never know about the deals that walked away. Proactive ORM ensures your digital presence matches the quality of your actual business.',
      stats: [
        { value: '94%', label: 'of consumers avoid a business after reading negative reviews' },
        { value: '75%', label: 'of clicks go to the first three search results' },
        { value: '$15K+', label: 'average revenue lost per negative page-1 result per year' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Brand Search Audit', description: 'We analyze every result for your company name, key executives, and product names.' },
      { icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', title: 'Multi-Channel Suppression', description: 'Suppress negative content across Google, Bing, review sites, and social platforms.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Positive Content Creation', description: 'Build and rank case studies, press mentions, and testimonial pages for your brand.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Ongoing Monitoring & Reporting', description: 'Monthly reports and real-time alerts keep you informed of your brand\'s search health.' },
    ],
    faqs: [
      { q: 'How quickly can you start a business ORM campaign?', a: 'We deliver your initial brand search audit within 48 hours and begin active work within the first week.' },
      { q: 'Do you handle review management?', a: 'Yes. We can help optimize your review profiles and develop strategies to encourage positive reviews from satisfied customers.' },
      { q: 'Can you suppress competitor comparison content?', a: 'Absolutely. We build and rank content that outranks competitor-created comparison pages and alternative sites.' },
      { q: 'What size businesses do you work with?', a: 'From solo consultants to national brands. Each engagement is tailored to the specific challenges and goals of your business.' },
    ],
  },
  {
    slug: 'social-media-reviews',
    category: 'orm',
    title: 'Social Media & Review Management',
    headline: 'Social Media &',
    gradientText: 'Review Management',
    description: 'Your social media profiles and online reviews are often the first thing people see. We help you manage and optimize both for maximum trust and credibility.',
    whatItIs: {
      title: 'What Is Social Media & Review Management?',
      body: 'Social media and review management encompasses monitoring, responding to, and optimizing your presence across social platforms and review sites. This includes Google Reviews, Yelp, Facebook, TrustPilot, industry-specific review platforms, and all major social networks.',
    },
    whyItMatters: {
      title: 'Why Review Management Matters',
      body: 'Reviews are modern word-of-mouth. A strong review profile drives new business; a weak one pushes prospects to competitors. Most consumers read multiple reviews before making a decision.',
      stats: [
        { value: '88%', label: 'of consumers trust online reviews as much as personal recommendations' },
        { value: '73%', label: 'only consider reviews from the last month relevant' },
        { value: '4.0★', label: 'minimum rating consumers consider trustworthy' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Review Audit', description: 'We analyze your review presence across all major platforms and identify gaps and risks.' },
      { icon: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z', title: 'Response Strategy', description: 'Professional response templates and strategies for addressing negative reviews appropriately.' },
      { icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z', title: 'Review Generation', description: 'Ethical strategies to encourage satisfied customers to share their positive experiences.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Monitoring & Alerts', description: 'Real-time monitoring of new reviews and social mentions with instant alerts for negative content.' },
    ],
    faqs: [
      { q: 'Can you delete negative Google reviews?', a: 'Google only removes reviews that violate their policies. We can flag policy-violating reviews and, more importantly, build a strong positive review presence that minimizes the impact of negative outliers.' },
      { q: 'Do you post fake reviews?', a: 'Never. We only use ethical, platform-compliant strategies to encourage genuine positive reviews from real customers.' },
      { q: 'Which platforms do you manage?', a: 'Google, Yelp, Facebook, TrustPilot, BBB, Glassdoor, industry-specific platforms, and all major social networks.' },
      { q: 'How quickly will I see results?', a: 'Review profile improvements can begin within weeks. Significant changes in overall ratings and search visibility typically take 2–3 months.' },
    ],
  },
  {
    slug: 'google-reviews',
    category: 'orm',
    title: 'Google Review Management',
    headline: 'Google Review',
    gradientText: 'Management',
    description: 'Google Reviews directly impact whether prospects contact you. We help you build, manage, and optimize your Google review presence for maximum trust.',
    whatItIs: {
      title: 'What Is Google Review Management?',
      body: 'Google Review management is the process of monitoring, responding to, and improving your Google Business Profile reviews. Since Google Reviews appear prominently in local search results and Maps, they are one of the most visible and influential elements of your online reputation.',
    },
    whyItMatters: {
      title: 'Why Google Reviews Matter',
      body: 'Google Reviews are the first thing most people see when searching for a local business. Your star rating, review count, and the content of recent reviews directly influence whether someone calls you or your competitor.',
      stats: [
        { value: '93%', label: 'of consumers say Google Reviews influence their decisions' },
        { value: '4.1★', label: 'minimum rating consumers trust for local businesses' },
        { value: '63%', label: 'check Google Reviews specifically before visiting a business' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Google Profile Audit', description: 'Full analysis of your Google Business Profile, reviews, and local search visibility.' },
      { icon: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z', title: 'Review Response System', description: 'Professional, timely responses to all reviews — positive and negative — that build trust.' },
      { icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z', title: 'Review Growth Strategy', description: 'Ethical, systematic approach to generating more positive Google Reviews from real customers.' },
      { icon: 'M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z', title: 'Negative Review Mitigation', description: 'Flag policy-violating reviews and develop suppression strategies for unfair negative content.' },
    ],
    faqs: [
      { q: 'Can you remove fake or unfair Google Reviews?', a: 'If a review violates Google\'s policies (fake, spam, off-topic, conflict of interest), we can flag it for removal. Google makes the final decision, but we have experience identifying policy violations.' },
      { q: 'How do you help get more positive reviews?', a: 'We implement ethical review generation strategies — timing, follow-up systems, and customer communication templates — that make it easy for satisfied customers to share their experience.' },
      { q: 'Should we respond to negative reviews?', a: 'Yes, always. A thoughtful, professional response to a negative review often matters more than the review itself. We help craft responses that demonstrate accountability and care.' },
      { q: 'How does Google Review count affect local SEO?', a: 'Google considers review quantity, quality, recency, and your responses as ranking signals for local search. A strong review profile directly improves your local search visibility.' },
    ],
  },
  {
    slug: 'cost-of-orm',
    category: 'orm',
    title: 'Cost of Online Reputation Management',
    headline: 'How Much Does',
    gradientText: 'ORM Cost?',
    description: 'Understanding ORM pricing helps you make informed decisions. Here\'s an honest breakdown of what reputation management costs and what drives the investment.',
    whatItIs: {
      title: 'Understanding ORM Pricing',
      body: 'Online reputation management costs vary based on the severity of your situation, the number of negative results to suppress, and the competitiveness of your search landscape. There\'s no one-size-fits-all price because every situation is unique. What we can tell you: investing in ORM almost always costs less than the business you\'re losing to bad search results.',
    },
    whyItMatters: {
      title: 'Why ORM Is Worth the Investment',
      body: 'The cost of not managing your online reputation far exceeds the cost of ORM. Negative search results silently drive away prospects, costing you revenue you never even know you lost.',
      stats: [
        { value: '$15K+', label: 'average annual revenue lost per negative page-1 result' },
        { value: '22%', label: 'of customers won\'t buy from a business with one negative article' },
        { value: '70%', label: 'of employers have rejected candidates based on search results' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Free Analysis First', description: 'We provide a free, no-obligation analysis of your search results before quoting any price.' },
      { icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z', title: 'Custom Strategy & Pricing', description: 'Every engagement is priced based on your specific situation, goals, and timeline.' },
      { icon: 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', title: 'No Lock-In Contracts', description: 'We earn your business every month. No long-term contracts required.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Transparent Monthly Reporting', description: 'See exactly what your investment is producing each month.' },
    ],
    faqs: [
      { q: 'How much does ORM cost?', a: 'ORM pricing varies based on your situation. We always start with a free analysis to understand your needs before providing a custom quote. There is no one-size-fits-all price.' },
      { q: 'Is there a minimum contract length?', a: 'No. We do not require long-term contracts. However, meaningful results typically take 3–6 months, so we recommend committing to at least that timeline for best results.' },
      { q: 'What determines the price?', a: 'Key factors include the number and severity of negative results, how competitive your search landscape is, how many search terms need management, and your timeline goals.' },
      { q: 'Is ORM worth the investment?', a: 'For most clients, the cost of ORM is a fraction of the revenue lost to negative search results. A single negative page-1 result can cost $15K+ per year in lost business.' },
    ],
  },
  {
    slug: 'orm-tools',
    category: 'orm',
    title: 'ORM Tools & Technology',
    headline: 'ORM Tools &',
    gradientText: 'Technology',
    description: 'Professional-grade tools and technology power our ORM campaigns. Here\'s a look at what drives results behind the scenes.',
    whatItIs: {
      title: 'What ORM Tools Do We Use?',
      body: 'Effective ORM requires a combination of enterprise-grade SEO tools, content management platforms, monitoring software, and link building technology. We use a comprehensive tech stack to monitor your search results, identify threats, deploy content, and measure progress — giving you complete visibility into your campaign.',
    },
    whyItMatters: {
      title: 'Why Professional Tools Matter',
      body: 'DIY reputation management with free tools rarely works for serious issues. Professional ORM tools provide the data, scale, and precision needed to move search results reliably.',
      stats: [
        { value: '24/7', label: 'monitoring across search engines and review platforms' },
        { value: '100+', label: 'data points tracked per campaign monthly' },
        { value: '48hr', label: 'alert response time for new negative content' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Search Monitoring', description: 'Continuous tracking of your search results across Google, Bing, and other engines.' },
      { icon: 'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z', title: 'Analytics & Reporting', description: 'Custom dashboards showing ranking changes, content performance, and campaign ROI.' },
      { icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z', title: 'Threat Detection', description: 'Real-time alerts when new negative content appears in search results or review platforms.' },
      { icon: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-2.556a4.5 4.5 0 0 0-1.242-7.244l4.5-4.5a4.5 4.5 0 0 1 6.364 6.364l-1.757 1.757', title: 'Link Building Platform', description: 'Proprietary and enterprise tools for building high-quality backlinks to positive content.' },
    ],
    faqs: [
      { q: 'Can I manage my reputation myself with free tools?', a: 'For minor issues, some free tools help with monitoring. For serious reputation problems, professional tools and expertise are necessary to reliably move search results.' },
      { q: 'What tools do you use?', a: 'We use a combination of enterprise SEO platforms, custom monitoring software, content management systems, and proprietary link building tools. The specific tools depend on your campaign needs.' },
      { q: 'Will I have access to the tools and data?', a: 'You receive comprehensive monthly reports with all relevant data. Our tools operate behind the scenes, but you see every result and metric that matters.' },
      { q: 'How is professional ORM different from DIY?', a: 'Professional ORM brings enterprise-grade tools, years of experience, established content networks, and proven methodologies that DIY approaches simply cannot replicate.' },
    ],
  },
  {
    slug: 'orm-consulting',
    category: 'orm',
    title: 'ORM Consulting',
    headline: 'ORM',
    gradientText: 'Consulting Services',
    description: 'Not ready for a full campaign? Our ORM consulting services provide expert guidance, audit reports, and strategic roadmaps you can execute on your own.',
    whatItIs: {
      title: 'What Is ORM Consulting?',
      body: 'ORM consulting provides expert analysis and strategic guidance without a full-service engagement. We audit your search results, identify threats and opportunities, and deliver a detailed roadmap you can implement internally or with your existing marketing team. Ideal for organizations with in-house resources who need expert direction.',
    },
    whyItMatters: {
      title: 'Why ORM Consulting Matters',
      body: 'Many businesses know they have a reputation problem but don\'t know where to start. A professional ORM consultation provides clarity, prioritization, and a clear path forward.',
      stats: [
        { value: '48hr', label: 'turnaround on initial search audit delivery' },
        { value: '90%', label: 'of consulting clients upgrade to full campaigns' },
        { value: '100%', label: 'of engagements include actionable recommendations' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Comprehensive Search Audit', description: 'Full analysis of your page 1 and page 2 results, identifying every risk and opportunity.' },
      { icon: 'M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z', title: 'Strategic Roadmap', description: 'Detailed, prioritized action plan with specific content, link building, and platform strategies.' },
      { icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z', title: 'Expert Consultation', description: 'Direct access to our ORM specialists for Q&A, strategy refinement, and ongoing guidance.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Progress Benchmarks', description: 'Clear milestones and metrics to track the effectiveness of your ORM efforts.' },
    ],
    faqs: [
      { q: 'What does an ORM consultation include?', a: 'A comprehensive search audit, threat assessment, competitive analysis, content strategy recommendations, and a prioritized action plan you can implement immediately.' },
      { q: 'Can I implement the recommendations myself?', a: 'Yes. Our consulting deliverables are designed to be actionable by your in-house team. However, many clients choose to upgrade to full-service after seeing the scope of work involved.' },
      { q: 'How much does ORM consulting cost?', a: 'Consulting engagements are priced based on scope. Contact us for a free initial conversation to understand your needs before we quote.' },
      { q: 'How is consulting different from full-service ORM?', a: 'Consulting provides the strategy and roadmap. Full-service ORM provides strategy plus execution — we do all the work for you.' },
    ],
  },
]

export const seoSubPages: SubPageData[] = [
  {
    slug: 'link-building',
    category: 'seo',
    title: 'Link Building Services',
    headline: 'Strategic',
    gradientText: 'Link Building',
    description: 'High-quality backlinks are the foundation of search rankings. We build authoritative, relevant links that drive lasting organic growth.',
    whatItIs: {
      title: 'What Is Link Building?',
      body: 'Link building is the process of acquiring hyperlinks from other websites to your own. Search engines use these links as signals of authority and relevance. The more high-quality sites that link to yours, the higher your content ranks. We focus exclusively on white-hat, editorial link building that delivers lasting results.',
    },
    whyItMatters: {
      title: 'Why Link Building Matters',
      body: 'Backlinks remain one of Google\'s top ranking factors. Without a strong link profile, even great content struggles to rank. Strategic link building is the difference between page 5 and page 1.',
      stats: [
        { value: '#1', label: 'ranking factor: pages with more quality backlinks rank higher' },
        { value: '75%', label: 'average organic traffic increase for DiamondLinks clients' },
        { value: '3.8x', label: 'more backlinks on average for page 1 results vs page 2' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Link Profile Audit', description: 'Full analysis of your existing backlink profile, identifying strengths, gaps, and toxic links.' },
      { icon: 'M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z', title: 'Outreach & Acquisition', description: 'Manual outreach to relevant, authoritative sites in your industry for editorial link placements.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Content-Driven Links', description: 'Create linkable assets — guides, data, tools — that naturally attract backlinks over time.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Monthly Reporting', description: 'Detailed reports showing new links acquired, domain authority changes, and ranking improvements.' },
    ],
    faqs: [
      { q: 'What types of links do you build?', a: 'We build white-hat, editorial links from real, authoritative websites in relevant industries. No PBNs, no spam, no shortcuts that risk penalties.' },
      { q: 'How many links will I get per month?', a: 'Link quantity depends on your package and goals. We focus on quality over quantity — a single link from a high-authority site can outperform dozens of low-quality links.' },
      { q: 'How long until I see ranking improvements?', a: 'Most clients see measurable ranking improvements within 60–90 days of consistent link building. Competitive niches may take longer.' },
      { q: 'Do you disavow toxic links?', a: 'Yes. As part of our link audit, we identify and disavow toxic or spammy backlinks that may be harming your search performance.' },
    ],
  },
  {
    slug: 'long-form-content',
    category: 'seo',
    title: 'Long-Form Content & SEO Writing',
    headline: 'Long-Form Content &',
    gradientText: 'SEO Writing',
    description: 'Content is the fuel that powers SEO. We create authoritative, well-researched long-form content that ranks, converts, and builds your topical authority.',
    whatItIs: {
      title: 'What Is Long-Form SEO Content?',
      body: 'Long-form content — typically 1,500 to 5,000+ words — provides comprehensive coverage of a topic. Search engines favor depth and thoroughness, rewarding content that fully answers user queries. Our SEO writing combines keyword research, competitive analysis, and subject matter expertise to create content that ranks and resonates.',
    },
    whyItMatters: {
      title: 'Why Long-Form Content Matters for SEO',
      body: 'Long-form content consistently outperforms short content in search rankings. It earns more backlinks, ranks for more keywords, and keeps visitors on your site longer.',
      stats: [
        { value: '2x', label: 'more organic traffic for long-form vs short-form content' },
        { value: '77%', label: 'more backlinks earned by content over 1,500 words' },
        { value: '3x', label: 'more social shares for comprehensive, in-depth articles' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Keyword & Topic Research', description: 'Data-driven research to identify high-value topics and keywords your audience is searching for.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Expert Content Creation', description: 'Well-researched, professionally written content optimized for both search engines and readers.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'On-Page SEO Optimization', description: 'Technical optimization including headings, internal links, schema markup, and keyword placement.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Performance Tracking', description: 'Monitor rankings, traffic, and engagement for every piece of content we create.' },
    ],
    faqs: [
      { q: 'How long should SEO content be?', a: 'Length depends on the topic and competition. Our content typically ranges from 1,500 to 5,000+ words, driven by what the top-ranking content requires to compete effectively.' },
      { q: 'Do you write for specific industries?', a: 'Yes. Our writers research and write for any industry. We combine keyword data with subject matter expertise to create content that is both accurate and optimized.' },
      { q: 'How often should we publish new content?', a: 'Consistency matters more than frequency. We recommend a sustainable publishing cadence — whether that\'s weekly, bi-weekly, or monthly — aligned with your capacity and goals.' },
      { q: 'Can content alone improve my rankings?', a: 'Content is essential but works best combined with link building and technical SEO. We often combine content creation with link building for maximum impact.' },
    ],
  },
  {
    slug: 'social-media-management',
    category: 'seo',
    title: 'Social Media Management',
    headline: 'Social Media',
    gradientText: 'Management',
    description: 'A consistent, professional social media presence supports your SEO, builds brand authority, and keeps you connected with your audience across every platform.',
    whatItIs: {
      title: 'What Is Social Media Management?',
      body: 'Social media management encompasses the creation, scheduling, publishing, and monitoring of content across your social media profiles. For ORM and SEO clients, social profiles are critical because they rank highly in search results for your name and brand. We ensure your social presence is active, professional, and aligned with your reputation goals.',
    },
    whyItMatters: {
      title: 'Why Social Media Matters for Reputation',
      body: 'Social media profiles consistently rank on page 1 of Google for brand and personal name searches. An active, professional social presence is one of the fastest ways to improve what people find.',
      stats: [
        { value: '3–5', label: 'social profiles typically appear on page 1 for brand searches' },
        { value: '71%', label: 'of consumers with positive social media experience recommend the brand' },
        { value: '54%', label: 'of social browsers use social media to research products' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Social Audit', description: 'Full review of your existing social media presence, identifying gaps, risks, and optimization opportunities.' },
      { icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5', title: 'Content Calendar', description: 'Strategic content planning and scheduling to maintain consistent, professional posting.' },
      { icon: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z', title: 'Community Management', description: 'Respond to comments, messages, and mentions to maintain active engagement with your audience.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Performance Reporting', description: 'Monthly reports on engagement, reach, follower growth, and search ranking impact.' },
    ],
    faqs: [
      { q: 'Which social media platforms do you manage?', a: 'We manage LinkedIn, Facebook, Instagram, X/Twitter, and other platforms based on your industry and goals.' },
      { q: 'How does social media affect my search results?', a: 'Social media profiles rank highly for brand and name searches. An active, optimized social presence directly improves what people see on page 1 of Google.' },
      { q: 'Do you create the content or do we provide it?', a: 'We handle everything — content creation, graphic design, scheduling, and posting. We collaborate with you to ensure messaging aligns with your brand voice.' },
      { q: 'Can social media management be added to an ORM campaign?', a: 'Yes. Social media management is a natural complement to ORM and is often bundled with our reputation management packages.' },
    ],
  },
  {
    slug: 'pay-per-click',
    category: 'seo',
    title: 'Pay-Per-Click (PPC) Advertising',
    headline: 'Pay-Per-Click',
    gradientText: 'Advertising',
    description: 'Complement your organic SEO and ORM strategy with targeted PPC campaigns that put your brand at the top of search results immediately.',
    whatItIs: {
      title: 'What Is PPC Advertising?',
      body: 'Pay-per-click advertising places your brand at the top of search results through paid placements on Google Ads, Bing Ads, and social platforms. For reputation management clients, PPC provides an immediate way to control the top of search results while organic strategies build momentum. You only pay when someone clicks.',
    },
    whyItMatters: {
      title: 'Why PPC Matters for Reputation & SEO',
      body: 'PPC provides instant visibility at the top of search results. For ORM clients, branded PPC campaigns ensure your message appears first — above any negative organic results — while long-term suppression strategies take effect.',
      stats: [
        { value: '65%', label: 'of high-intent searches result in an ad click' },
        { value: '#1', label: 'position — PPC ads appear above all organic results' },
        { value: '200%', label: 'average ROI for well-managed branded PPC campaigns' },
      ],
    },
    howWeDoIt: [
      { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z', title: 'Campaign Strategy', description: 'Research-driven campaign design targeting your brand name, service keywords, and competitor terms.' },
      { icon: 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', title: 'Budget Optimization', description: 'Maximize your ad spend with ongoing bid management, A/B testing, and conversion optimization.' },
      { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5', title: 'Landing Pages', description: 'Custom landing pages designed to convert PPC traffic into leads, calls, and consultations.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Performance Reporting', description: 'Transparent weekly and monthly reports showing clicks, conversions, cost per lead, and ROI.' },
    ],
    faqs: [
      { q: 'How does PPC help with reputation management?', a: 'Branded PPC campaigns place your chosen message at the very top of search results for your name or brand, above any negative organic results. This provides immediate control while organic ORM works.' },
      { q: 'What platforms do you manage ads on?', a: 'Primarily Google Ads and Bing Ads. We also manage social media advertising on LinkedIn, Facebook, and Instagram when it supports your goals.' },
      { q: 'What budget do I need for PPC?', a: 'Budget depends on your goals, industry, and competition. We work with you to set a budget that delivers meaningful results while maximizing ROI.' },
      { q: 'Can PPC replace organic SEO and ORM?', a: 'PPC complements but doesn\'t replace organic strategies. PPC provides immediate visibility; SEO and ORM build long-term, sustainable results. The best results come from combining both.' },
    ],
  },
]
