import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"

export default async function BetterPromptsAI() {
  return (
    <section>
      <SectionHeader
        id="better-prompts-ai"
        number={18}
        title="Better Prompts with AI"
        description="Use other AI tools to craft better prompts for Claude Code."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Claude Code executes complex coding tasks very well when given precise instructions. If you are more comfortable describing ideas in natural language, you can use another AI tool as a &ldquo;prompt generator&rdquo; and then paste the refined prompt into Claude.
      </p>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        <strong className="text-foreground">Example pattern:</strong>
      </p>

      <StepList steps={[
        {
          title: "In your preferred AI chat (outside Cursor), describe what you want in your own words, for example:",
          children: (
            <PromptBlock>{`I am a product designer working on an admin dashboard prototype.
I need an English prompt for Claude Code in the terminal that will:
- Build a Next.js Dashboard page from my Figma design.
- Use existing UI components (cards, table, filters) instead of raw HTML.
- Use Tailwind + design tokens from /styles/tokens.css.
- Keep all data on the client side with mock data (no backend).

Please write a clear, structured prompt I can paste directly into Claude Code.`}</PromptBlock>
          ),
        },
        { title: "Take the generated prompt, review it, and paste it into the Claude terminal session in Cursor." },
        { title: "Adjust over time as you learn what works best." },
      ]} />

      <Callout variant="tip" title="Two-AI workflow">
        This way, you combine two strengths: one AI helps you express requirements, another AI (Claude Code) executes them in code.
      </Callout>
    </section>
  )
}
