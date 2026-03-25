import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { Callout } from "@/components/docs/callout"

export default async function VerifyWithStorybook() {
  return (
    <section>
      <SectionHeader
        id="verify-with-storybook"
        number={15}
        title="Verify Components and States with Storybook"
        description="Use Storybook to check all component variants and edge cases."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Continue to use Storybook as a design laboratory. Add stories for key states: loading, empty, error, long text, and edge cases. Use screenshots and prompts to refine visual differences.
      </p>

      <PromptBlock>{`Some of our Storybook stories do not show all important states.

Please:

1) For Button stories, add stories for all variants (primary, secondary, subtle) in default, hover, disabled and "with icon" states.
2) For UsersTable stories, add stories for:
   - normal populated list,
   - empty list,
   - loading state (e.g. skeleton rows),
   - error-like state if we decide to show one.

Update the *.stories.tsx files accordingly.`}</PromptBlock>

      <Callout variant="tip" title="Continuous visual QA">
        Storybook is your visual QA environment. Whenever you change design tokens or component styles, check Storybook to ensure nothing broke across all variants and states.
      </Callout>
    </section>
  )
}
