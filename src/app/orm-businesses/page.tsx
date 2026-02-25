import { ormSubPages } from '@/data/services'
import ServiceSubPage from '@/components/ServiceSubPage'
import type { Metadata } from 'next'

const data = ormSubPages.find(p => p.slug === 'orm-businesses')!

export const metadata: Metadata = {
  title: `${data.title} | DiamondLinks`,
  description: data.description,
}

export default function Page() {
  return <ServiceSubPage data={data} />
}
