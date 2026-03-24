import { Lightbulb, AlertTriangle, Info, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const variants = {
  tip: {
    icon: Lightbulb,
    border: "border-l-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    title: "Tip",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-l-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    title: "Warning",
  },
  note: {
    icon: Info,
    border: "border-l-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    title: "Note",
  },
  important: {
    icon: Star,
    border: "border-l-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    title: "Important",
  },
}

interface CalloutProps {
  variant: keyof typeof variants
  title?: string
  children: React.ReactNode
}

export function Callout({ variant, title, children }: CalloutProps) {
  const config = variants[variant]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "rounded-md border-l-4 p-4 my-4",
        config.border,
        config.bg
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", config.iconColor)} />
        <div className="min-w-0">
          <p className={cn("text-sm font-semibold mb-1", config.iconColor)}>
            {title || config.title}
          </p>
          <div className="text-sm text-foreground/80 leading-7">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
