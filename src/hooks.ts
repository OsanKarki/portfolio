import { useEffect, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const formatKathmanduTime = () =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kathmandu',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date())

export function useKathmanduTime() {
  const [time, setTime] = useState(formatKathmanduTime)

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatKathmanduTime()), 10_000)
    return () => window.clearInterval(id)
  }, [])

  return time
}

/** Adds `is-visible` to every `[data-reveal]` element once it scrolls into view. */
export function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}
