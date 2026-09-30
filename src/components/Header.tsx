import { useEffect, useState } from 'react'
import { email, navItems } from '../data'
import { scrollToId } from '../hooks'

const sectionIds = ['home', ...navItems.map((item) => item.id)]

export function Header() {
  const [active, setActive] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const probe = window.innerHeight * 0.35
      const current = [...sectionIds].reverse().find((id) => {
        const element = document.getElementById(id)
        return element ? element.getBoundingClientRect().top <= probe : false
      })
      if (current) setActive(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKey = (event: KeyboardEvent) => event.key === 'Escape' && setIsMenuOpen(false)
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isMenuOpen])

  const go = (id: string) => {
    setIsMenuOpen(false)
    scrollToId(id)
  }

  return (
    <header className={`site-header ${isScrolled || isMenuOpen ? 'is-scrolled' : ''}`}>
      <div className="header-bar">
        <button className="wordmark" onClick={() => go('home')}>Osan Karki</button>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item.id} className={active === item.id ? 'is-active' : ''} onClick={() => go(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <a className="button button-small header-cta" href={`mailto:${email}`}>Get in touch</a>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav id="mobile-nav" className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
        {navItems.map((item, index) => (
          <button key={item.id} onClick={() => go(item.id)} tabIndex={isMenuOpen ? 0 : -1}>
            <span>0{index + 1}</span>{item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
