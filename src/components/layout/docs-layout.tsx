"use client"

import { useMemo } from "react"
import { LeftSidebar } from "./left-sidebar"
import { RightSidebar } from "./right-sidebar"
import { MobileNav } from "./mobile-nav"
import { useActiveHeading } from "@/hooks/use-active-heading"
import { sections } from "@/content/sections-meta"

export function DocsLayout({ children }: { children: React.ReactNode }) {
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

  const activeSection = useActiveHeading(allHeadingIds)

  return (
    <>
      <MobileNav activeSection={activeSection} />
      <div className="flex min-h-screen">
        <LeftSidebar activeSection={activeSection} />
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {children}
          </div>
        </main>
        <RightSidebar />
      </div>
    </>
  )
}
