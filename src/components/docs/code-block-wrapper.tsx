"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CodeBlockWrapperProps {
  code: string
  language: string
  filename?: string
  highlightedHtml: string
}

export function CodeBlockWrapper({
  code,
  language,
  filename,
  highlightedHtml,
}: CodeBlockWrapperProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-md overflow-hidden border border-zinc-800 bg-zinc-950 my-4">
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="text-xs text-zinc-400 font-mono">{filename}</span>
          )}
          {!filename && (
            <Badge
              variant="secondary"
              className="text-[10px] px-1.5 py-0 h-5 bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-800"
            >
              {language}
            </Badge>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 px-2 text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 cursor-pointer"
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
              Copy
            </>
          )}
        </Button>
      </div>

      {/* Code */}
      <div
        className="overflow-x-auto p-4 text-sm font-mono [&_pre]:!bg-transparent [&_code]:!bg-transparent [&_.shiki]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: highlightedHtml }}
      />
    </div>
  )
}
