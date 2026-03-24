import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { Callout } from "@/components/docs/callout"

export default async function RefactorComponents() {
  return (
    <section>
      <SectionHeader
        id="refactor-components"
        number={12}
        title="Refactor Components"
        description="Ask Claude to review and refactor components for quality."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Example prompt for the Button component:
      </p>

      <PromptBlock>{`Please review src/components/ui/button.tsx as a senior UI engineer.

Context:
- /styles/tokens.css

Checks:
- Uses React.forwardRef correctly (if appropriate) and has a displayName.
- Uses tokens and Tailwind utilities, no hardcoded colors or spacing.
- Props are well-typed in TypeScript, no any.
- Accessible: correct role, keyboard focus, aria-hidden for decorative icons.

1) List concrete issues and suggestions.
2) Then apply the fixes directly in button.tsx.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Approve or reject the proposed changes based on the diffs Claude shows.
      </p>

      <Callout variant="tip" title="Optional but recommended">
        This step is optional, but asking Claude to review its own output often catches small issues like missing forwardRef, hardcoded values, or incomplete TypeScript types. Run this for any component you plan to reuse heavily.
      </Callout>
    </section>
  )
}
