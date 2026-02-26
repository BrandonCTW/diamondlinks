import { ormSubPages } from '@/data/services'
import ServiceSubPage from '@/components/ServiceSubPage'
import type { Metadata } from 'next'

const data = ormSubPages.find(p => p.slug === 'orm-individuals')!

export const metadata: Metadata = {
  title: 'Personal Online Reputation Management | DiamondLinks',
  description: 'Personal online reputation management for professionals and executives. DiamondLinks suppresses negative search results and builds a positive digital footprint — results in 60–120 days.',
  alternates: { canonical: `https://diamondlinks.com/${data.slug}/` },
  openGraph: {
    title: 'Personal Online Reputation Management | DiamondLinks',
    description: 'Personal online reputation management for professionals and executives. DiamondLinks suppresses negative search results and builds a positive digital footprint — results in 60–120 days.',
    url: `https://diamondlinks.com/${data.slug}/`,
  },
}

export default function Page() {
  return <ServiceSubPage data={data} />
}
