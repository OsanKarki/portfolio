import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import { SectionLabel } from './SectionLabel'

export function Work() {
  return (
    <section id="work" className="section">
      <SectionLabel index="03" title="Selected work" />
      <div className="section-body">
        <ol className="work-list">
          {projects.map((project, index) => (
            <li className="work-item" key={project.title} data-reveal>
              <span className="work-index">0{index + 1}</span>
              <div className="work-heading">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
              <div className="work-detail">
                <p>{project.description}</p>
                <small>{project.tech.join(' · ')}</small>
              </div>
              <div className="work-links">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={`${project.title} on ${link.label}`}>
                    {link.label} <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
