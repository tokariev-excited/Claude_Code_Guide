"use client"

import { useState } from "react"
import { Check, Copy, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PromptBlockProps {
  children: string
}

export function PromptBlock({ children }: PromptBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-md overflow-hidden border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 my-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
          <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Claude Prompt
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 px-2.5 text-xs text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/50"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3 w-3 mr-1" />
              Copy Prompt
            </>
          )}
        </Button>
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <pre className="text-sm font-mono leading-relaxed whitespace-pre-wrap text-indigo-900 dark:text-indigo-200">
          {children}
        </pre>
      </div>
    </div>
  )
}
