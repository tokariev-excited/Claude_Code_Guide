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
    <div>
      <h2
        id={id}
        className="text-xl font-semibold mt-10 mb-3 border-b border-border pb-2 scroll-mt-20"
      >
        {number}. {title}
      </h2>
      {description && (
        <p className="text-sm text-muted-foreground leading-7 mb-4">
          {description}
        </p>
      )}
    </div>
  )
}
