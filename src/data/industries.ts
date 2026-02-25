export interface IndustryPageData {
  slug: string
  name: string
  headline: string
  gradientText: string
  description: string
  challenges: { title: string; description: string }[]
  solutions: { icon: string; title: string; description: string }[]
  stats: { value: string; label: string }[]
  faqs: { q: string; a: string }[]
}

export const industries: IndustryPageData[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    headline: 'Reputation Management for',
    gradientText: 'Healthcare Providers',
    description: 'Patients check online reviews before choosing a doctor. We ensure your search results reflect the quality care you provide, not isolated complaints.',
    challenges: [
      { title: 'Patient review sites dominate page 1', description: 'One or two negative reviews on Healthgrades, Vitals, or Google can push patients to your competitors before they even call.' },
      { title: 'HIPAA limits your ability to respond', description: 'Privacy regulations prevent you from publicly addressing specific complaints, leaving negative reviews unanswered.' },
      { title: 'Competitor and aggregator sites rank for your name', description: 'Third-party sites often outrank your own website, controlling the narrative patients see.' },
    ],
    solutions: [
      { icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', title: 'HIPAA-Compliant Strategy', description: 'We suppress negative content without violating patient privacy regulations.' },
      { icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z', title: 'Review Profile Optimization', description: 'Amplify positive patient reviews across Google, Healthgrades, and Vitals.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'Medical SEO', description: 'Rank your practice website and positive content above third-party aggregators.' },
    ],
    stats: [
      { value: '77%', label: 'of patients use search engines before booking' },
      { value: '84%', label: 'trust online reviews as much as personal referrals' },
      { value: '60–120', label: 'days to meaningful page 1 improvement' },
      { value: '5.0★', label: 'DiamondLinks verified client rating' },
    ],
    faqs: [
      { q: 'Can you remove negative reviews from Healthgrades or Google?', a: 'In most cases, reviews cannot be deleted. However, we suppress them by amplifying positive content and optimizing your review profiles so that the overall picture patients see is accurate and favorable.' },
      { q: 'How do you handle HIPAA compliance in ORM?', a: 'We never reference specific patients or disclose protected health information. Our strategies focus on building positive content and authority — not responding to individual reviews with patient details.' },
      { q: 'How long before we see results?', a: 'Most healthcare clients see meaningful page 1 improvement within 60–120 days. Deeply entrenched negative content may take 6–12 months to fully suppress.' },
      { q: 'Do you work with individual doctors or hospital systems?', a: 'Both. We serve solo practitioners, multi-provider practices, and hospital systems. Each engagement is tailored to the specific reputation challenges you face.' },
    ],
  },
  {
    slug: 'legal',
    name: 'Legal',
    headline: 'Reputation Management for',
    gradientText: 'Law Firms & Attorneys',
    description: 'Potential clients research attorneys online before making contact. Ensure your search results build trust and credibility, not doubt.',
    challenges: [
      { title: 'Negative press from past cases', description: 'Even won cases can generate negative publicity that dominates your search results for years.' },
      { title: 'Client review sites are unforgiving', description: 'A single dissatisfied client review on Avvo or Google can deter dozens of prospective clients.' },
      { title: 'Competitors actively target your brand keywords', description: 'Other firms may bid on or optimize content around your name to capture your potential clients.' },
    ],
    solutions: [
      { icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', title: 'Press & Article Suppression', description: 'Push negative news articles and unfavorable coverage off page 1 of search results.' },
      { icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12c0-.778.099-1.533.284-2.253', title: 'Authority Building', description: 'Build high-authority profiles and legal content that establish credibility across the web.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'Legal SEO', description: 'Rank your firm website and positive content for your name, practice area, and location.' },
    ],
    stats: [
      { value: '96%', label: 'of people seeking legal advice use a search engine' },
      { value: '70%', label: 'of potential clients check reviews before hiring' },
      { value: '90', label: 'day average to suppress negative legal press' },
      { value: '5.0★', label: 'DiamondLinks verified client rating' },
    ],
    faqs: [
      { q: 'Can you remove negative news articles about my firm?', a: 'We typically cannot delete articles, but we can suppress them by building and ranking positive content above them. In some cases, legal removal may be an option and we can advise accordingly.' },
      { q: 'How do you handle sensitive case-related content?', a: 'We never discuss case details publicly. Our strategy focuses on amplifying your credentials, community involvement, and positive client outcomes to reshape the narrative.' },
      { q: 'Do you work with solo attorneys or just large firms?', a: 'Both. Solo practitioners, boutique firms, and large practices all benefit from ORM. We tailor each engagement to your specific situation and goals.' },
      { q: 'How quickly can you start?', a: 'We deliver your initial search audit within 48 hours and can begin active campaign work within the first week.' },
    ],
  },
  {
    slug: 'athletes',
    name: 'Athletes',
    headline: 'Reputation Management for',
    gradientText: 'Athletes & Sports Figures',
    description: 'Your brand is your career. Protect what sponsors, agents, and fans see when they search your name.',
    challenges: [
      { title: 'Social media missteps go viral', description: 'A single screenshot or hot take can become the top search result for your name overnight.' },
      { title: 'Media coverage can be unfair', description: 'Sports media thrives on controversy. Negative stories get amplified while corrections go unnoticed.' },
      { title: 'Sponsorship deals depend on clean search results', description: 'Brands conduct due diligence on athletes — a problematic first page can cost millions in endorsement revenue.' },
    ],
    solutions: [
      { icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', title: 'Negative Content Suppression', description: 'Push unfavorable articles, social media incidents, and gossip sites off page 1.' },
      { icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z', title: 'Personal Brand Building', description: 'Create and rank positive content showcasing your achievements, philanthropy, and community work.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'Ongoing Monitoring', description: 'Real-time alerts and proactive management to catch and address issues before they escalate.' },
    ],
    stats: [
      { value: '89%', label: 'of sponsors research athletes online before deals' },
      { value: '62%', label: 'of athletes have had negative press affect opportunities' },
      { value: '60–120', label: 'days to meaningful page 1 improvement' },
      { value: '5.0★', label: 'DiamondLinks verified client rating' },
    ],
    faqs: [
      { q: 'Can you remove negative sports articles from search results?', a: 'We suppress them by building and ranking positive content above them. In some legal cases, removal may be possible. Our focus is ensuring the first page tells your real story.' },
      { q: 'Do you work with agents and management teams?', a: 'Yes. We frequently coordinate with sports agents, PR teams, and management to align ORM strategy with broader career and branding goals.' },
      { q: 'How do you handle ongoing social media risks?', a: 'We provide monitoring and proactive content strategies so that if something surfaces, positive content is already in place to counterbalance it.' },
      { q: 'Is this confidential?', a: 'Absolutely. All engagements are 100% confidential. We never disclose client names or details without explicit permission.' },
    ],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    headline: 'Reputation Management for',
    gradientText: 'Financial Professionals',
    description: 'In finance, trust is everything. Ensure your online presence reflects the credibility and expertise your clients expect.',
    challenges: [
      { title: 'Regulatory complaints surface in search', description: 'Even resolved complaints from FINRA, SEC, or state regulators can dominate your search results indefinitely.' },
      { title: 'Disgruntled investor reviews', description: 'Market downturns lead to negative reviews that persist long after portfolios recover.' },
      { title: 'Competitor content targets your brand', description: 'Comparison sites and competitors create content designed to capture your prospective clients.' },
    ],
    solutions: [
      { icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', title: 'Regulatory Content Suppression', description: 'Push regulatory filings and resolved complaints below page 1 of search results.' },
      { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Authority & Thought Leadership', description: 'Build and rank content that positions you as a trusted authority in financial services.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'Financial SEO', description: 'Rank your website and positive profiles above complaint sites and competitor content.' },
    ],
    stats: [
      { value: '93%', label: 'of investors research advisors online first' },
      { value: '80%', label: 'say negative search results would prevent them from investing' },
      { value: '120', label: 'days — typical campaign for financial regulatory suppression' },
      { value: '5.0★', label: 'DiamondLinks verified client rating' },
    ],
    faqs: [
      { q: 'Can you remove FINRA or SEC complaints from search results?', a: 'We cannot remove regulatory filings themselves, but we can suppress them in search results by building and ranking positive, authoritative content above them.' },
      { q: 'How do you handle compliance concerns?', a: 'We work within all regulatory guidelines. Our strategies focus on publishing truthful, positive content — not manipulating or misrepresenting your record.' },
      { q: 'Do you work with individual advisors or firms?', a: 'Both. Individual financial advisors, wealth managers, hedge funds, and institutional firms all benefit from proactive ORM.' },
      { q: 'How long until negative results move off page 1?', a: 'Most financial services clients see meaningful movement within 90–120 days. Deeply entrenched regulatory content may take 6+ months.' },
    ],
  },
  {
    slug: 'saas',
    name: 'SaaS',
    headline: 'Reputation Management for',
    gradientText: 'SaaS Companies',
    description: 'Software buyers read reviews before signing contracts. Control the narrative around your product and brand in search results.',
    challenges: [
      { title: 'Review sites control your narrative', description: 'G2, Capterra, and TrustRadius reviews heavily influence buying decisions — one viral complaint can stall your pipeline.' },
      { title: 'Churn-related negative content', description: 'Former customers and disgruntled users create blog posts, Reddit threads, and social posts that rank for your brand name.' },
      { title: 'Competitor comparison pages rank high', description: 'Competitors publish "Alternative to [YourProduct]" pages specifically designed to intercept your prospects.' },
    ],
    solutions: [
      { icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', title: 'Review Ecosystem Management', description: 'Optimize and amplify positive reviews across G2, Capterra, TrustPilot, and Google.' },
      { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', title: 'Competitor Content Displacement', description: 'Outrank "alternative to" and comparison pages with your own authoritative content.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'SaaS Brand SEO', description: 'Ensure your website, case studies, and product pages dominate branded search results.' },
    ],
    stats: [
      { value: '92%', label: 'of B2B buyers read online reviews before purchasing' },
      { value: '72%', label: 'say negative reviews have caused them to abandon a purchase' },
      { value: '60–90', label: 'days to measurable page 1 improvement' },
      { value: '5.0★', label: 'DiamondLinks verified client rating' },
    ],
    faqs: [
      { q: 'Can you remove negative reviews from G2 or Capterra?', a: 'We cannot remove reviews from third-party platforms, but we can help you build a stronger review presence that overshadows negative outliers and improve your overall ratings.' },
      { q: 'How do you handle competitor comparison pages?', a: 'We create and rank authoritative content — case studies, product pages, thought leadership — that outranks competitor "alternative to" pages in search results.' },
      { q: 'Do you work with early-stage or enterprise SaaS?', a: 'Both. Early-stage companies benefit from proactive reputation building, while enterprise SaaS companies often need suppression of legacy complaints or competitor content.' },
      { q: 'How does SaaS ORM differ from regular ORM?', a: 'SaaS ORM focuses heavily on the B2B review ecosystem (G2, Capterra, TrustRadius), competitor displacement, and aligning search results with your current product capabilities.' },
    ],
  },
  {
    slug: 'marketing-agencies',
    name: 'Marketing Agencies',
    headline: 'White Label ORM & SEO for',
    gradientText: 'Marketing Agencies',
    description: 'Offer reputation management and SEO to your clients without building the team. Our white-label program operates entirely under your brand.',
    challenges: [
      { title: 'Clients need ORM but you lack the expertise', description: 'Your clients are asking for reputation management services, but building an in-house ORM team is expensive and slow.' },
      { title: 'Scaling service delivery is hard', description: 'Every new ORM or SEO client requires specialized knowledge and dedicated resources you may not have.' },
      { title: 'Risk of poor results damaging your reputation', description: 'Delivering subpar ORM or SEO results to your clients reflects poorly on your agency.' },
    ],
    solutions: [
      { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', title: '100% White Label Delivery', description: 'Everything — reports, communications, deliverables — is branded under your agency. We are invisible.' },
      { icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', title: 'Dedicated Account Manager', description: 'Your clients get world-class results. You get a single point of contact for all accounts.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'Agency-Friendly Pricing', description: 'Margin-positive pricing that lets you mark up our services and grow your revenue.' },
    ],
    stats: [
      { value: '100%', label: 'white label — invisible to your clients' },
      { value: '48hr', label: 'turnaround on initial client audits' },
      { value: '60', label: 'day average to page 1 results for agency clients' },
      { value: '5.0★', label: 'DiamondLinks verified client rating' },
    ],
    faqs: [
      { q: 'Will my clients know DiamondLinks is involved?', a: 'Never. Everything is branded under your agency. Reports, communications, and deliverables all carry your brand. We operate 100% behind the scenes.' },
      { q: 'What is the minimum number of clients to get started?', a: 'There is no minimum. You can start with a single client and scale as your ORM service offering grows.' },
      { q: 'How does pricing work for agencies?', a: 'We offer agency-friendly pricing that allows you to mark up our services to your clients. Contact us for a custom pricing structure based on your expected volume.' },
      { q: 'Do you provide reports I can send to my clients?', a: 'Yes. We generate fully branded monthly reports that you can send directly to your clients as if your team created them.' },
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    headline: 'Reputation Management for',
    gradientText: 'Educational Institutions',
    description: 'Prospective students and parents research schools online. Ensure your institution\'s search results reflect academic excellence, not outdated complaints.',
    challenges: [
      { title: 'Negative reviews from former students', description: 'Disgruntled alumni and former students post reviews that surface prominently in search results for years.' },
      { title: 'Media coverage of campus incidents', description: 'News articles about campus events, controversies, or legal matters can define your institution online.' },
      { title: 'Rating sites and forums rank highly', description: 'Sites like RateMyProfessors, Niche, and Reddit threads often outrank your official website.' },
    ],
    solutions: [
      { icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', title: 'Negative Content Suppression', description: 'Push negative articles, forum posts, and reviews below page 1 of search results.' },
      { icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5', title: 'Academic Authority Building', description: 'Create and rank content showcasing your institution\'s achievements, faculty, and outcomes.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'Education SEO', description: 'Ensure your official website and positive content rank above third-party rating sites.' },
    ],
    stats: [
      { value: '85%', label: 'of prospective students research schools online' },
      { value: '68%', label: 'say online reputation influenced their enrollment decision' },
      { value: '90–120', label: 'days to meaningful search result improvement' },
      { value: '5.0★', label: 'DiamondLinks verified client rating' },
    ],
    faqs: [
      { q: 'Can you remove negative reviews from RateMyProfessors?', a: 'We cannot remove third-party reviews, but we can suppress them by building and ranking authoritative content that better represents your institution.' },
      { q: 'How do you handle media coverage of campus incidents?', a: 'We build and rank positive content — alumni success stories, academic achievements, community involvement — that pushes negative coverage below page 1.' },
      { q: 'Do you work with K-12 or higher education?', a: 'Both. Private schools, universities, community colleges, and specialty institutions all benefit from proactive reputation management.' },
      { q: 'How quickly can you start?', a: 'We deliver an initial search audit within 48 hours and begin active work within the first week.' },
    ],
  },
  {
    slug: 'crisis-pr',
    name: 'Crisis PR',
    headline: 'Reputation Management for',
    gradientText: 'Crisis Situations',
    description: 'When a reputation crisis hits, every hour counts. We deploy rapid-response ORM to contain damage and begin rebuilding your search presence immediately.',
    challenges: [
      { title: 'Viral negative content spreading fast', description: 'News articles, social media posts, and forum threads can multiply across the internet within hours.' },
      { title: 'Search results change overnight', description: 'A single incident can replace years of positive search results with damaging content in days.' },
      { title: 'Traditional PR alone isn\'t enough', description: 'Press releases and media outreach don\'t directly control what appears in search results.' },
    ],
    solutions: [
      { icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', title: 'Rapid Response Deployment', description: 'We begin active suppression and positive content deployment within 24–48 hours of engagement.' },
      { icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', title: 'Multi-Vector Suppression', description: 'Simultaneously suppress negative content across search engines, social platforms, and review sites.' },
      { icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941', title: 'Long-Term Recovery Plan', description: 'Beyond immediate containment, we build a sustainable positive presence that protects against future incidents.' },
    ],
    stats: [
      { value: '24hr', label: 'response time for crisis engagements' },
      { value: '48hr', label: 'to begin active suppression campaigns' },
      { value: '30–60', label: 'days to contain most crisis situations' },
      { value: '5.0★', label: 'DiamondLinks verified client rating' },
    ],
    faqs: [
      { q: 'How quickly can you respond to a crisis?', a: 'We offer 24-hour response time for crisis engagements. Active suppression and positive content campaigns begin within 48 hours.' },
      { q: 'Can you guarantee negative content will be removed?', a: 'We cannot guarantee removal of third-party content, but we have a proven track record of suppressing negative results off page 1 through strategic content creation and SEO.' },
      { q: 'Do you work with existing PR teams?', a: 'Yes. We frequently coordinate with PR firms, legal teams, and communications departments to ensure ORM strategy aligns with broader crisis management efforts.' },
      { q: 'What happens after the crisis is contained?', a: 'We transition to a long-term maintenance program that protects your search results and builds a resilient positive presence to prevent future incidents from gaining traction.' },
    ],
  },
]
