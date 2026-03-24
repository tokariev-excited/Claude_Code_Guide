import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { Callout } from "@/components/docs/callout"

export default async function VerifyWithStorybook() {
  return (
    <section>
      <SectionHeader
        id="verify-with-storybook"
        number={15}
        title="Verify with Storybook"
        description="Use Storybook to check all component variants and edge cases."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Even after pages work, Storybook remains valuable:
      </p>

      <ul className="list-disc list-inside text-sm text-muted-foreground leading-7 mb-4 space-y-1">
        <li>You can quickly check all variants of a component while iterating on design tokens.</li>
        <li>You can add stories for edge cases (empty states, error messages, long text) that might be hard to hit inside the main app.</li>
      </ul>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Example refinement prompt:
      </p>

      <PromptBlock>{`In Storybook, some component stories do not fully cover the states we care about.

Task:
- For Button, ensure stories exist for all variants (primary, secondary, subtle) and states (default, hover, disabled, with icon, loading if applicable).
- For UsersTable, ensure stories exist for:
  - a normal populated list,
  - an empty list,
  - a loading state (skeletons or placeholders),
  - an error-like state (if we decide to show one).

Please update the *.stories.tsx files accordingly.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Keep Storybook open while you work; it helps you reason about each component independently before or after it is used on pages.
      </p>

      <Callout variant="tip" title="Continuous visual QA">
        Storybook is your visual QA environment. Whenever you change design tokens or component styles, check Storybook to ensure nothing broke across all variants and states.
      </Callout>
    </section>
  )
}
