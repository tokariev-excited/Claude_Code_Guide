interface Step {
  title: string
  children?: React.ReactNode
}

interface StepListProps {
  steps: Step[]
}

export function StepList({ steps }: StepListProps) {
  return (
    <div className="my-6 space-y-0">
      {steps.map((step, index) => (
        <div key={index} className="relative flex gap-4 pb-7 last:pb-0">
          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="absolute left-[10px] top-[24px] bottom-0 w-px bg-border" />
          )}

          {/* Step number — small, bordered pill */}
          <div className="relative z-10 flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded border border-border bg-muted text-[10px] font-mono font-semibold text-muted-foreground mt-[3px]">
            {index + 1}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-semibold text-foreground leading-[26px]">
              {step.title}
            </p>
            {step.children && (
              <div className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                {step.children}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
