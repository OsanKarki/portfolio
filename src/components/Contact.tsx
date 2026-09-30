import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { email, socials } from '../data'
import { scrollToId, useKathmanduTime } from '../hooks'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const time = useKathmanduTime()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="section-label" data-reveal><span>04</span>Contact</div>

      <h2 className="contact-title" data-reveal>
        Have a product in mind?<br />
        <span>Let&apos;s talk about it.</span>
      </h2>

      <div className="contact-grid" data-reveal>
        <div>
          <p className="contact-caption">Email</p>
          <a className="contact-email" href={`mailto:${email}`}>
            {email} <ArrowUpRight size={28} strokeWidth={1.5} />
          </a>
          <button className="copy-button" onClick={copyEmail} aria-live="polite">
            {copied ? 'Copied to clipboard' : 'Copy address'}
          </button>
        </div>
        <div>
          <p className="contact-caption">Elsewhere</p>
          <ul className="contact-links">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.label} <ArrowUpRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Osan Karki</span>
        <span>Kathmandu · {time}</span>
        <button onClick={() => scrollToId('home')}>Back to top</button>
      </footer>
    </section>
  )
}
