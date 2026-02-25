import { seoSubPages } from '@/data/services'
import ServiceSubPage from '@/components/ServiceSubPage'
import type { Metadata } from 'next'

const data = seoSubPages.find(p => p.slug === 'pay-per-click')!

export const metadata: Metadata = {
  title: `${data.title} | DiamondLinks`,
  description: data.description,
}

export default function Page() {
  return <ServiceSubPage data={data} />
}
