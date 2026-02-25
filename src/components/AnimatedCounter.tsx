'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(prefix + (decimals > 0 ? (0).toFixed(decimals) : '0') + suffix)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()

          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // easeOutExpo — fast start, smooth deceleration
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            const current = eased * end
            const formatted = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()
            setDisplay(prefix + formatted + suffix)

            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, prefix, suffix, decimals])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
