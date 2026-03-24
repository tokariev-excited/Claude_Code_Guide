"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { sections } from "@/content/sections-meta"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  activeSection: string | null
}

export function MobileNav({ activeSection }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="lg:hidden sticky top-0 z-50 flex items-center justify-between h-14 px-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon" className="h-8 w-8" />
          }
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation</span>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <SheetHeader className="px-4 h-14 flex flex-row items-center gap-2 border-b border-border">
            <BookOpen className="h-5 w-5 text-docs-accent" />
            <SheetTitle className="text-sm font-semibold">
              Design to Code Guide
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-3.5rem)]">
            <nav className="space-y-0.5 p-3">
              {sections.map((section) => {
                const isActive =
                  activeSection === section.id ||
                  section.subsections.some((sub) => sub.id === activeSection)
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
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
                )
              })}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-docs-accent" />
        <span className="font-semibold text-sm">Design to Code Guide</span>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </header>
  )
}
