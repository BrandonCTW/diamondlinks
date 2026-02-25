'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export default function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const elements = container.querySelectorAll<HTMLElement>(':scope > *')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )

    elements.forEach((el, i) => {
      if (i === 0) return // Skip hero — already visible above the fold
      el.classList.add('scroll-reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return <div ref={ref}>{children}</div>
}
