import { SectionHeader } from "@/components/docs/section-header"
import { CodeBlock } from "@/components/docs/code-block"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"

export default async function BuildUiComponents() {
  return (
    <section>
      <SectionHeader
        id="build-ui-components"
        number={11}
        title="Build UI Components"
        description="Create reusable React components from your Figma design system."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        You will now create the building blocks (buttons, inputs, cards, tables) as React components, verify them in Storybook, and later reuse them on pages.
      </p>

      <h3 id="general-component-pattern" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">General Pattern</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        For each component type (Button, Input, etc.):
      </p>

      <StepList steps={[
        { title: "Copy the Figma URL of the relevant section in your design system." },
        { title: "In the Claude terminal session, describe what you want." },
        { title: "Let Claude create the file in src/components/ui/... and the matching Storybook story." },
        { title: "Open Storybook in the browser and visually compare with Figma." },
        { title: "Refine with additional prompts until it matches." },
      ]} />

      <h3 id="button-example" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">Button Component Example</h3>

      <StepList steps={[
        { title: "Copy the Figma URL for your Buttons section in the design system." },
        {
          title: "In the Claude session, say:",
          children: (
            <PromptBlock>{`We are now building a reusable Button component based on the Figma design system.

Context:
- /docs/PRD.md
- /styles/tokens.css
- Figma Buttons section: [PASTE FIGMA URL HERE]

Task:
- Create src/components/ui/button.tsx.
- Implement variants visible in Figma (for example: primary, secondary, subtle).
- Implement states: default, hover, disabled, focus, including a clear focus ring.
- Use our Tailwind setup and design tokens from /styles/tokens.css only (no hardcoded hex codes).
- Make the component accessible (proper button element, aria-hidden="true" for decorative icons, keyboard focus).

Storybook:
- Create src/components/ui/button.stories.tsx.
- Add stories that show all variants and states (primary, secondary, disabled, with icon, etc.).

Show me the file change plan, then implement.`}</PromptBlock>
          ),
        },
        { title: "Approve the plan." },
        { title: "Open Storybook at http://localhost:6006 and inspect the Button stories." },
        { title: "If visuals differ from Figma, refine with a follow-up prompt describing the differences." },
      ]} />

      <h3 id="other-base-components" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">Other Base Components</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Repeat the same pattern for each component type (Inputs, Selects, Toggles, Cards, Badges), adjusting the prompt:
      </p>

      <PromptBlock>{`We are building a reusable [COMPONENT NAME] component based on the Figma design system.

Context:
- /docs/PRD.md
- /styles/tokens.css
- Figma [COMPONENT] section: [PASTE FIGMA URL HERE]

Task:
- Create src/components/ui/[component-name].tsx.
- Implement the visual variations and states you see in Figma.
- Use our Tailwind setup and design tokens only.
- Make the component accessible (labels, aria attributes, keyboard focus).

Storybook:
- Create src/components/ui/[component-name].stories.tsx.
- Add stories that cover all variants and important edge cases.

Show me the plan, then implement.`}</PromptBlock>

      <h3 id="table-component" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">Table Component</h3>

      <StepList steps={[
        { title: "Copy the Figma URL for the Users table design." },
        {
          title: "In the Claude session, say:",
          children: (
            <PromptBlock>{`We need a reusable table component for the Users list.

Context:
- /docs/PRD.md
- /styles/tokens.css
- Figma table design: [PASTE URL HERE]

Task:
- Create a UsersTable component in src/components/users/users-table.tsx.
- It should accept an array of user objects (id, name, email, role, status, createdAt) as props.
- The layout, typography, spacing and status badges should match the Figma design using our design tokens.

Storybook:
- Create src/components/users/users-table.stories.tsx.
- Add stories that show a populated list, an empty state, and optionally loading/error states.

Show the plan, then implement.`}</PromptBlock>
          ),
        },
        { title: "Inspect the table in Storybook and refine as needed." },
      ]} />

      <Callout variant="tip" title="Iterate visually">
        Always keep Storybook open while building components. It lets you compare each component with the Figma design side by side and catch discrepancies early.
      </Callout>
    </section>
  )
}
