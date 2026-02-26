import { ormSubPages } from '@/data/services'
import ServiceSubPage from '@/components/ServiceSubPage'
import type { Metadata } from 'next'

const data = ormSubPages.find(p => p.slug === 'orm-consulting')!

export const metadata: Metadata = {
  title: 'Online Reputation Management Consulting | DiamondLinks',
  description: 'Expert online reputation management consulting services. Get a comprehensive search audit, strategic roadmap, and actionable recommendations from DiamondLinks — ORM specialists since 2011.',
  alternates: { canonical: `https://diamondlinks.com/${data.slug}/` },
  openGraph: {
    title: 'Online Reputation Management Consulting | DiamondLinks',
    description: 'Expert online reputation management consulting services. Get a comprehensive search audit, strategic roadmap, and actionable recommendations from DiamondLinks — ORM specialists since 2011.',
    url: `https://diamondlinks.com/${data.slug}/`,
  },
}

export default function Page() {
  return <ServiceSubPage data={data} />
}
