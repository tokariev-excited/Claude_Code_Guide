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

  // Safari's native smooth scroll (both CSS scroll-behavior and window.scrollTo behavior:'smooth')
  // is choppy or instant. Use a custom rAF animation for consistent cross-browser smoothness.
  useEffect(() => {
    let rafId: number | null = null

    const smoothScrollTo = (targetY: number, duration = 550) => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      const startY = window.scrollY
      const distance = targetY - startY
      let startTime: number | null = null

      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

      const step = (now: number) => {
        if (startTime === null) startTime = now
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        window.scrollTo(0, startY + distance * easeInOutCubic(progress))
        if (progress < 1) rafId = requestAnimationFrame(step)
        else rafId = null
      }

      rafId = requestAnimationFrame(step)
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')!
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      const top = el.getBoundingClientRect().top + window.scrollY - 80 // 5rem = scroll-padding-top
      smoothScrollTo(Math.max(0, top))
      history.pushState(null, '', href)
    }

    document.addEventListener('click', handleAnchorClick)
    return () => {
      document.removeEventListener('click', handleAnchorClick)
      if (rafId !== null) cancelAnimationFrame(rafId)
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
