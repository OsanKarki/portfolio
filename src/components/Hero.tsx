import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import { ArrowDown } from 'lucide-react'
import { email } from '../data'
import { prefersReducedMotion, scrollToId, useKathmanduTime } from '../hooks'

function Word({ text, className, offset }: { text: string; className: string; offset: number }) {
  return (
    <span className={`name-word ${className}`} aria-hidden="true">
      {text.split('').map((letter, index) => (
        <span key={index} style={{ '--i': index + offset } as CSSProperties}>{letter}</span>
      ))}
    </span>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const [isLensActive, setIsLensActive] = useState(false)
  const time = useKathmanduTime()

  // Feeds hero scroll progress (0 → 1) to CSS as --p for the name/portrait parallax.
  useEffect(() => {
    const hero = heroRef.current
    if (!hero || prefersReducedMotion()) return
    let frame = 0
    const update = () => {
      frame = 0
      const progress = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1)
      hero.style.setProperty('--p', progress.toFixed(4))
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    return () => {
      window.removeEventListener('scroll', schedule)
      cancelAnimationFrame(frame)
    }
  }, [])

  const moveLens = (event: PointerEvent<HTMLDivElement>) => {
    const portrait = portraitRef.current
    if (!portrait || event.pointerType !== 'mouse') return
    const rect = portrait.getBoundingClientRect()
    portrait.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    portrait.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-meta">
        <p>Flutter Engineer<span>at Hamro Patro</span></p>
        <p>Kathmandu, Nepal<span>{time} local time</span></p>
        <p><span className="status-dot" aria-hidden="true" />Available for<span>select projects</span></p>
      </div>

      <h1 className="hero-name" aria-label="Osan Karki">
        <Word text="Osan" className="name-first" offset={0} />
        <Word text="Karki" className="name-last" offset={4} />
      </h1>

      <div
        className={`hero-portrait ${isLensActive ? 'is-lens-active' : ''}`}
        ref={portraitRef}
        onPointerEnter={(event) => event.pointerType === 'mouse' && setIsLensActive(true)}
        onPointerMove={moveLens}
        onPointerLeave={() => setIsLensActive(false)}
      >
        <img
          className="portrait-mono"
          src="/osan-cutout.webp"
          alt="Portrait of Osan Karki"
          width={1000}
          height={1017}
          fetchPriority="high"
        />
        <img className="portrait-color" src="/osan-cutout.webp" alt="" aria-hidden="true" width={1000} height={1017} />
      </div>

      <div className="hero-bottom">
        <p className="hero-intro">
          I design and build Flutter applications for iOS and Android — dependable, fast, and
          considered down to the last detail.
        </p>
        <div className="hero-actions">
          <button className="button" onClick={() => scrollToId('work')}>
            View selected work <ArrowDown size={16} />
          </button>
          <a className="text-link" href={`mailto:${email}`}>Get in touch</a>
        </div>
      </div>
    </section>
  )
}
