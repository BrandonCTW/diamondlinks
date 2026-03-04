import { ormSubPages } from '@/data/services'
import ServiceSubPage from '@/components/ServiceSubPage'
import type { Metadata } from 'next'

const data = ormSubPages.find(p => p.slug === 'orm-businesses')!

export const metadata: Metadata = {
  title: 'Business Online Reputation Management | DiamondLinks',
  description: 'Business online reputation management that protects your brand from negative reviews, articles, and competitor content. DiamondLinks delivers results in 90–120 days, no lock-in contracts.',
  alternates: { canonical: `https://diamondlinks.com/${data.slug}/` },
  openGraph: {
    title: 'Business Online Reputation Management | DiamondLinks',
    description: 'Business online reputation management that protects your brand from negative reviews, articles, and competitor content. DiamondLinks delivers results in 90–120 days, no lock-in contracts.',
    url: `https://diamondlinks.com/${data.slug}/`,
  },
}

export default function Page() {
  return <ServiceSubPage data={data} />
}
