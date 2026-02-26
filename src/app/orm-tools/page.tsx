import { ormSubPages } from '@/data/services'
import ServiceSubPage from '@/components/ServiceSubPage'
import type { Metadata } from 'next'

const data = ormSubPages.find(p => p.slug === 'orm-tools')!

export const metadata: Metadata = {
  title: 'Online Reputation Management Tools | DiamondLinks',
  description: 'DiamondLinks uses enterprise-grade online reputation management tools for 24/7 monitoring, threat detection, and transparent reporting. See what powers our ORM campaigns.',
  alternates: { canonical: `https://diamondlinks.com/${data.slug}/` },
  openGraph: {
    title: 'Online Reputation Management Tools | DiamondLinks',
    description: 'DiamondLinks uses enterprise-grade online reputation management tools for 24/7 monitoring, threat detection, and transparent reporting. See what powers our ORM campaigns.',
    url: `https://diamondlinks.com/${data.slug}/`,
  },
}

export default function Page() {
  return <ServiceSubPage data={data} />
}
