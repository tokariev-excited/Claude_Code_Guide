import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"

export default async function BuildPagesRouting() {
  return (
    <section>
      <SectionHeader
        id="build-pages-routing"
        number={13}
        title="Build Pages & Routing"
        description="Assemble full pages and wire navigation between them."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        With components and Storybook in place, you are ready to assemble full pages and wire navigation between them.
      </p>

      <h3 id="app-shell-layout" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">Create the App Shell Layout</h3>

      <StepList steps={[
        { title: "Copy the Figma URL for the main layout (sidebar + header + main content)." },
        {
          title: "In the Claude session (from the project root), say:",
          children: (
            <PromptBlock>{`We now want to build the shared app shell layout for all dashboard pages.

Context:
- /docs/PRD.md
- /styles/tokens.css
- Figma main layout screen: [PASTE FIGMA URL HERE]

Task:
- Create a reusable layout component (for example in src/components/layout/AppShell.tsx) that matches the Figma app shell:
  - Left sidebar navigation with links to Dashboard, Users and Settings.
  - Top header with product name, optional search and user avatar.
  - Main content area where page content will render.
- Update app/layout.tsx to wrap all pages with this AppShell.
- Use Next.js App Router conventions and Link components for navigation.
- Use our Tailwind + tokens setup only.

Show me the plan and then implement.`}</PromptBlock>
          ),
        },
        { title: "Approve the plan and inspect app/layout.tsx and the new layout component." },
      ]} />

      <h3 id="dashboard-page" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">Build the Dashboard Page</h3>

      <StepList steps={[
        { title: "Ensure docs/screens/dashboard.md is filled with a reasonable spec." },
        { title: "Copy the Figma URL for the Dashboard screen." },
        {
          title: "In Claude, say:",
          children: (
            <PromptBlock>{`Now we want to implement the Dashboard page itself.

Context:
- /docs/PRD.md
- /docs/screens/dashboard.md
- /styles/tokens.css
- Figma Dashboard screen: [PASTE URL HERE]

Task:
- Create a Dashboard page in the App Router (for example: app/(app)/dashboard/page.tsx).
- Use existing UI components (cards, buttons, UsersTable, badges) instead of raw HTML.
- Lay out the sections (summary cards, charts, table, etc.) to visually match the Figma Dashboard.
- Wire the sidebar navigation so that clicking "Dashboard" navigates to this page.
- Optionally, redirect the root route (/) to /dashboard so it becomes the default entry point.

Show the planned file and routing changes, then implement.`}</PromptBlock>
          ),
        },
        { title: "Open http://localhost:3000/dashboard and check the result." },
      ]} />

      <h3 id="users-settings-pages" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">Build Users & Settings Pages</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Example prompt for the Users page:
      </p>

      <PromptBlock>{`We now want to implement the Users list page.

Context:
- /docs/PRD.md
- /docs/screens/users.md
- /styles/tokens.css
- Figma Users screen: [PASTE URL HERE]

Task:
- Create a Users page (for example: app/(app)/users/page.tsx).
- Use the UsersTable component and any other UI components we created.
- Match the Figma layout (header, filters, table, footer) using our design tokens.
- Wire the sidebar navigation so that clicking "Users" navigates to this page.

Show the plan, then implement.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Do the same for Settings with <strong className="text-foreground">app/(app)/settings/page.tsx</strong> and the corresponding Figma link and spec.
      </p>

      <h3 id="refine-visuals" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">Refine Page Visuals</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Use precise prompts when the page is structurally correct but visually off:
      </p>

      <PromptBlock>{`The structure of the [Dashboard/Users/Settings] page is correct, but visually it does not yet match the Figma design.

Differences:
- [list 3-5 key differences: padding, typography, alignment, colors, etc.]

Please:
- Adjust the Tailwind classes and component props so the page in the browser matches the Figma layout and spacing more closely.
- Keep using tokens from /styles/tokens.css, do not introduce new hardcoded values.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Iterate until you are satisfied with the visual match.
      </p>

      <Callout variant="tip" title="Refinement strategy">
        Be specific about what differs. Instead of saying "it looks wrong," list concrete issues like "the card padding is too large" or "the heading font size should be smaller." The more precise your feedback, the faster Claude can fix it.
      </Callout>
    </section>
  )
}
