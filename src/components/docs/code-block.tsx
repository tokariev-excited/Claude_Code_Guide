import { getHighlighter } from "@/lib/shiki"
import { CodeBlockWrapper } from "./code-block-wrapper"

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

export async function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const highlighter = await getHighlighter()
  const html = highlighter.codeToHtml(code.trim(), {
    lang: language,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  })

  return (
    <CodeBlockWrapper
      code={code.trim()}
      language={language}
      filename={filename}
      highlightedHtml={html}
    />
  )
}
