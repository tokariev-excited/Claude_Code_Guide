interface SectionHeaderProps {
  id: string
  number: number
  title: string
  description?: string
}

export function SectionHeader({
  id,
  number,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mt-14 mb-6 first:mt-0">
      <p className="text-xs font-mono text-muted-foreground/60 mb-1.5 tracking-widest uppercase">
        {String(number).padStart(2, "0")}
      </p>
      <h2
        id={id}
        className="text-[1.6rem] font-bold tracking-tight leading-tight scroll-mt-20"
      >
        {title}
      </h2>
      {description && (
        <p className="text-base text-muted-foreground leading-relaxed mt-2">
          {description}
        </p>
      )}
    </div>
  )
}
