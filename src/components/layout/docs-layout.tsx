"use client"

import { useMemo, useState, useRef, useCallback, useEffect } from "react"
import type Mark from "mark.js"
import { LeftSidebar } from "./left-sidebar"
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

  const [searchQuery, setSearchQuery] = useState("")
  const [matchCount, setMatchCount] = useState(0)
  const [activeMatchIndex, setActiveMatchIndex] = useState(-1)

  const mainRef = useRef<HTMLElement>(null)
  const markInstanceRef = useRef<InstanceType<typeof Mark> | null>(null)
  const matchElementsRef = useRef<HTMLElement[]>([])
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const applyActiveClass = useCallback((index: number) => {
    matchElementsRef.current.forEach((el, i) => {
      if (i === index) {
        el.classList.add("search-active")
      } else {
        el.classList.remove("search-active")
      }
    })
    const el = matchElementsRef.current[index]
    if (el) {
      const rect = el.getBoundingClientRect()
      const scrollTop = window.scrollY + rect.top - window.innerHeight * 0.35
      window.scrollTo({ top: scrollTop, behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current)

    debounceTimerRef.current = setTimeout(async () => {
      if (!mainRef.current) return

      if (!searchQuery.trim()) {
        markInstanceRef.current?.unmark()
        matchElementsRef.current = []
        setMatchCount(0)
        setActiveMatchIndex(-1)
        return
      }

      const { default: MarkClass } = await import("mark.js")
      if (!markInstanceRef.current) {
        markInstanceRef.current = new MarkClass(mainRef.current)
      }

      markInstanceRef.current.unmark({
        done: () => {
          const found: HTMLElement[] = []
          markInstanceRef.current!.mark(searchQuery, {
            className: "search-highlight",
            caseSensitive: false,
            separateWordSearch: false,
            exclude: ["code *", "pre *"],
            each: (el) => {
              found.push(el as HTMLElement)
            },
            done: (total) => {
              matchElementsRef.current = found
              setMatchCount(total)
              if (total > 0) {
                setActiveMatchIndex(0)
                applyActiveClass(0)
              } else {
                setActiveMatchIndex(-1)
              }
            },
          })
        },
      })
    }, 200)

    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current)
    }
  }, [searchQuery, applyActiveClass])

  // Cleanup marks on unmount
  useEffect(() => {
    return () => {
      markInstanceRef.current?.unmark()
    }
  }, [])

  const handleNext = useCallback(() => {
    if (matchCount === 0) return
    const next = (activeMatchIndex + 1) % matchCount
    setActiveMatchIndex(next)
    applyActiveClass(next)
  }, [activeMatchIndex, matchCount, applyActiveClass])

  const handlePrev = useCallback(() => {
    if (matchCount === 0) return
    const prev = (activeMatchIndex - 1 + matchCount) % matchCount
    setActiveMatchIndex(prev)
    applyActiveClass(prev)
  }, [activeMatchIndex, matchCount, applyActiveClass])

  const handleClear = useCallback(() => {
    setSearchQuery("")
  }, [])

  return (
    <>
      <MobileNav activeSection={activeSection} />
      <div className="flex min-h-screen">
        <LeftSidebar
          activeSection={activeSection}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          matchCount={matchCount}
          activeMatchIndex={activeMatchIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          onClear={handleClear}
        />
        <main ref={mainRef} className="flex-1 min-w-0">
          <div className="max-w-[860px] mx-auto px-6 sm:px-10 lg:px-14 py-12">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
