import { SectionHeader } from "@/components/docs/section-header"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function BetterPromptsAI() {
  return (
    <section>
      <SectionHeader
        id="better-prompts-ai"
        number={18}
        title="Using Other AI Tools as Prompt Designers"
        description="Use other AI tools to craft better prompts for Claude Code."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        You can use any other AI tool to help you craft better prompts for <ProductBadge name="claude" />:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>Describe in your own language what you want.</li>
        <li>Ask the tool to rewrite this as a <strong className="text-foreground">structured Claude prompt</strong>.</li>
        <li>Paste that prompt into the <ProductBadge name="claude" /> terminal in <ProductBadge name="cursor" />.</li>
      </ul>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        This separation often works well: one AI for wording, <ProductBadge name="claude" /> for coding.
      </p>

      <Callout variant="tip" title="Two-AI workflow">
        This way, you combine two strengths: one AI helps you express requirements, another AI (<ProductBadge name="claude" />) executes them in code.
      </Callout>
    </section>
  )
}
