interface Step {
  title: string
  children?: React.ReactNode
}

interface StepListProps {
  steps: Step[]
}

export function StepList({ steps }: StepListProps) {
  return (
    <div className="my-4 space-y-0">
      {steps.map((step, index) => (
        <div key={index} className="relative flex gap-4 pb-6 last:pb-0">
          {/* Vertical line */}
          {index < steps.length - 1 && (
            <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />
          )}

          {/* Step number circle */}
          <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-docs-accent text-docs-accent-foreground text-sm font-semibold">
            {index + 1}
          </div>

          {/* Content */}
          <div className="flex-1 pt-0.5">
            <p className="text-sm font-semibold text-foreground">{step.title}</p>
            {step.children && (
              <div className="mt-1.5 text-sm text-muted-foreground leading-7">
                {step.children}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
