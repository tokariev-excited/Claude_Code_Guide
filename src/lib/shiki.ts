import { createHighlighter, type Highlighter } from "shiki"

let highlighter: Highlighter | null = null

export async function getHighlighter(): Promise<Highlighter> {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-dark", "github-light"],
      langs: [
        "typescript",
        "tsx",
        "javascript",
        "jsx",
        "bash",
        "json",
        "css",
        "yaml",
        "markdown",
        "html",
      ],
    })
  }
  return highlighter
}
