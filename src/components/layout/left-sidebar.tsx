"use client"

import { useState, useMemo } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { sections } from "@/content/sections-meta"
import { cn } from "@/lib/utils"

interface LeftSidebarProps {
  activeSection: string | null
}

export function LeftSidebar({ activeSection }: LeftSidebarProps) {
  const [search, setSearch] = useState("")
  const { theme, setTheme } = useTheme()

  const filtered = useMemo(() => {
    if (!search.trim()) return sections
    const q = search.toLowerCase()
    return sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.subsections.some((sub) => sub.title.toLowerCase().includes(q))
    )
  }, [search])

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
        <Input
          placeholder="Search sections..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-8 text-xs"
        />
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
