import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"

export default async function BuildUiComponents() {
  return (
    <section>
      <SectionHeader
        id="build-ui-components"
        number={11}
        title="Build Core UI Components from Figma"
        description="Create reusable React components from your Figma design system."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        The goal now is to implement reusable components that match your Figma design system and can be previewed in Storybook.
      </p>

      <h3 id="general-component-pattern" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">11.1. General Strategy and Figma Context Limits</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Do not expect Claude to perfectly build an entire complex page from a single large Figma frame every time. Figma MCP has practical context limits, and large frames may cause Claude to improvise details once it runs out of context. Instead:
      </p>

      <ul className="list-disc list-inside text-sm text-muted-foreground leading-7 mb-4 space-y-1">
        <li><strong className="text-foreground">Build small parts first</strong> — buttons, inputs, cards, table rows, sidebar.</li>
        <li><strong className="text-foreground">Turn those into reusable components.</strong></li>
        <li><strong className="text-foreground">Assemble full pages</strong> from those components.</li>
      </ul>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        When you want to work on a particular component:
      </p>

      <StepList steps={[
        { title: "In Figma, zoom into the relevant part (e.g., Buttons area)." },
        { title: "Copy that frame link at that moment." },
        { title: "Paste it into your prompt to Claude." },
      ]} />

      <h3 id="button-example" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">11.2. Example: Button Component</h3>

      <StepList steps={[
        { title: "Open your button components in Figma and copy the frame link." },
        {
          title: "In Claude's terminal:",
          children: (
            <PromptBlock>{`We are now building the Button component based on the Figma design system.

Context:
- /docs/PRD.md
- /styles/tokens.css
- Figma Buttons: [PASTE BUTTONS FRAME LINK HERE]

Task:

1) Create src/components/ui/button.tsx that:
   - Implements the button variants visible in Figma (e.g. primary, secondary, subtle).
   - Covers default, hover, focus and disabled states.
   - Uses Tailwind classes that reference our CSS variables from /styles/tokens.css (no hard-coded colors or spacing).
   - Is accessible (native <button>, keyboard focus, aria-hidden for decorative icons).

First show me the plan, then create and populate the files.`}</PromptBlock>
          ),
        },
        { title: "Open Storybook, view the Button component, and adjust as needed with additional prompts." },
      ]} />

      <h3 id="table-component" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">11.3. Example: Table for Users</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Repeat a similar flow for the Users table:
      </p>

      <StepList steps={[
        { title: "In Figma, zoom into the Users table and copy the frame link." },
        {
          title: "Prompt Claude to create the table component and stories:",
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
