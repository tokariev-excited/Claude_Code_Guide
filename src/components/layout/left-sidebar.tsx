"use client"

import { useMemo } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Search, X, ChevronUp, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { sections } from "@/content/sections-meta"
import { cn } from "@/lib/utils"

interface LeftSidebarProps {
  activeSection: string | null
  searchQuery: string
  onSearchChange: (value: string) => void
  matchCount: number
  activeMatchIndex: number
  onNext: () => void
  onPrev: () => void
  onClear: () => void
}

export function LeftSidebar({
  activeSection,
  searchQuery,
  onSearchChange,
  matchCount,
  activeMatchIndex,
  onNext,
  onPrev,
  onClear,
}: LeftSidebarProps) {
  const { theme, setTheme } = useTheme()

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return sections
    const q = searchQuery.toLowerCase()
    return sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.subsections.some((sub) => sub.title.toLowerCase().includes(q))
    )
  }, [searchQuery])

  const hasQuery = searchQuery.trim().length > 0

  return (
    <aside className="hidden lg:flex flex-col w-[260px] shrink-0 border-r border-border h-screen sticky top-0">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 h-14 border-b border-border shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-icon.png" alt="logo" className="h-5 w-5 shrink-0" />
        <span className="font-semibold text-sm tracking-tight">
          Design to Code Guide
        </span>
      </div>

      {/* Search */}
      <div className="px-3 py-3 shrink-0">
        {/* Input row — plain block div, no flex, prevents overflow */}
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search content..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.shiftKey) {
                e.preventDefault()
                onPrev()
              } else if (e.key === "Enter") {
                e.preventDefault()
                onNext()
              } else if (e.key === "Escape") {
                onClear()
              }
            }}
            className={cn("h-8 text-xs pl-8", hasQuery ? "pr-8" : "")}
          />
          {hasQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0.5 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-foreground"
              onClick={onClear}
              tabIndex={-1}
            >
              <X className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>

        {/* Counter + nav row — only when query is active */}
        {hasQuery && (
          <div className="flex items-center justify-between mt-1.5 px-0.5">
            <span className="text-[10px] text-muted-foreground/70 select-none">
              {matchCount === 0
                ? "No results"
                : `${activeMatchIndex + 1} of ${matchCount}`}
            </span>
            {matchCount > 0 && (
              <div className="flex items-center gap-0.5">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 text-muted-foreground hover:text-foreground"
                  onClick={onPrev}
                  tabIndex={-1}
                >
                  <ChevronUp className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 text-muted-foreground hover:text-foreground"
                  onClick={onNext}
                  tabIndex={-1}
                >
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Nav */}
      <ScrollArea className="flex-1 px-3">
        <nav className="space-y-0.5 pb-4">
          {filtered.map((section) => {
            const isActive =
              activeSection === section.id ||
              section.subsections.some((sub) => sub.id === activeSection)
            return (
              <div key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                    isActive
                      ? "bg-accent text-docs-accent font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <span className="text-xs text-muted-foreground w-5 shrink-0 text-right">
                    {section.number}.
                  </span>
                  <span className="truncate">{section.title}</span>
                </a>
              </div>
            )
          })}
          {hasQuery && filtered.length === 0 && (
            <p className="text-xs text-muted-foreground text-center py-4">
              No matching sections
            </p>
          )}
        </nav>
      </ScrollArea>

      {/* Theme toggle */}
      <div className="px-3 py-3 border-t border-border shrink-0">
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2 text-xs text-muted-foreground"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="ml-4">Toggle theme</span>
        </Button>
      </div>
    </aside>
  )
}
