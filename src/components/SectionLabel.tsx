export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="section-label" data-reveal>
      <span>{index}</span>
      {title}
    </div>
  )
}
