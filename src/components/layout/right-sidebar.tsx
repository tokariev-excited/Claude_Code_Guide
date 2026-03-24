"use client"

import { useMemo } from "react"
import { sections } from "@/content/sections-meta"
import { useActiveHeading } from "@/hooks/use-active-heading"
import { cn } from "@/lib/utils"

export function RightSidebar() {
  const allHeadingIds = useMemo(() => {
    const ids: string[] = []
    for (const section of sections) {
      ids.push(section.id)
      for (const sub of section.subsections) {
        ids.push(sub.id)
      }
    }
    return ids
  }, [])

  const activeId = useActiveHeading(allHeadingIds)

  const tocItems = useMemo(() => {
    const items: { id: string; title: string; level: "h2" | "h3" }[] = []
    for (const section of sections) {
      items.push({ id: section.id, title: section.title, level: "h2" })
      for (const sub of section.subsections) {
        items.push({ id: sub.id, title: sub.title, level: "h3" })
      }
    }
    return items
  }, [])

  return (
    <aside className="hidden xl:flex flex-col w-[220px] shrink-0 h-screen sticky top-0 py-10 pr-4">
      <p className="text-xs font-semibold text-foreground mb-3 px-3">
        On This Page
      </p>
      <nav className="space-y-0.5 overflow-y-auto text-xs">
        {tocItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "block py-1 transition-colors",
              item.level === "h3" ? "pl-6" : "pl-3",
              activeId === item.id
                ? "text-docs-accent font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </aside>
  )
}
