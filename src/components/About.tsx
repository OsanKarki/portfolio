import { ArrowUpRight } from 'lucide-react'
import { expertise, facts, resumeUrl } from '../data'
import { SectionLabel } from './SectionLabel'

export function About() {
  return (
    <>
      <section id="about" className="section">
        <SectionLabel index="01" title="About" />
        <div className="section-body">
          <p className="lead" data-reveal>
            I&apos;m a mobile engineer who cares about the details people notice — and the architecture
            they never have to think about.
          </p>

          <div className="about-columns">
            <div className="about-text" data-reveal>
              <p>
                At Hamro Patro, I build Flutter applications used across Nepal and the wider region,
                with work spanning education, commerce, payments, loyalty and real-time communication.
              </p>
              <p>
                I do my best work where product thinking and engineering meet: clarifying the real
                problem, choosing an approach the team can maintain, and shipping a polished result.
              </p>
              <a className="text-link" href={resumeUrl} download>
                Download résumé <ArrowUpRight size={16} />
              </a>
            </div>

            <dl className="facts" data-reveal>
              {facts.map((fact) => (
                <div key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="expertise" className="section">
        <SectionLabel index="02" title="Expertise" />
        <div className="section-body">
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <article className="expertise-item" key={item.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <span className="expertise-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <small>{item.tools}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
