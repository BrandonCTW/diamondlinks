import { ormSubPages } from '@/data/services'
import ServiceSubPage from '@/components/ServiceSubPage'
import type { Metadata } from 'next'

const data = ormSubPages.find(p => p.slug === 'google-reviews')!

export const metadata: Metadata = {
  title: `${data.title} | DiamondLinks`,
  description: data.description,
  alternates: { canonical: `https://diamondlinks.com/${data.slug}/` },
  openGraph: {
    title: `${data.title} | DiamondLinks`,
    description: data.description,
    url: `https://diamondlinks.com/${data.slug}/`,
  },
}

export default function Page() {
  return <ServiceSubPage data={data} />
}
