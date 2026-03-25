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
        title="Build the Shared Layout and Routing"
        description="Create the app shell and wire navigation between pages."
      />

      <h3 id="shared-layout" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">13.1. Start with Shared Layout, Not Full Pages</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Because of Figma context limits, it is usually more reliable to build the global layout first (sidebar + header) and only then individual pages.
      </p>

      <StepList steps={[
        { title: "In Figma, focus on the page that best shows the overall layout (for example, Dashboard)." },
        { title: "Zoom into the area that includes the sidebar and top bar." },
        { title: "Copy that frame link." },
      ]} />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Prompt for Claude:
      </p>

      <PromptBlock>{`We now want to build the shared app shell layout for all dashboard pages.

Context:
- /docs/PRD.md
- /styles/tokens.css
- Figma layout frame: [PASTE LAYOUT FRAME LINK HERE]

Task:

1) Create a reusable layout component in src/components/layout/AppShell.tsx that:
   - Renders a left sidebar with navigation items for Dashboard, Users and Settings.
   - Renders a top header (product name, search, user avatar, as in Figma).
   - Exposes a main content area where page content will be rendered.

2) Update app/layout.tsx to wrap all pages with AppShell.

3) Use Next.js App Router conventions and Link components for navigation.

Show me the plan first, then implement the changes.`}</PromptBlock>

      <h3 id="create-pages-navigation" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">13.2. Create Pages and Connect Navigation</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        For <strong className="text-foreground">Dashboard</strong>: zoom into the Dashboard content in Figma (without the sidebar if necessary) and copy the frame link.
      </p>

      <PromptBlock>{`We now want to implement the Dashboard page content.

Context:
- /docs/PRD.md
- /docs/screens/dashboard.md
- /styles/tokens.css
- Figma Dashboard content: [PASTE LINK HERE]

Task:

1) Create a Dashboard page (for example app/(app)/dashboard/page.tsx).
2) Use existing components (cards, table, buttons) where possible, rather than writing raw HTML.
3) Lay out the main sections to visually match the Dashboard design.
4) Ensure the sidebar navigation item "Dashboard" routes to this page.

Show me the files you plan to change and then implement.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Do the same for <strong className="text-foreground">Users</strong> and <strong className="text-foreground">Settings</strong>, each with its own Figma frame link and spec.
      </p>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        If a full page is too big for one pass, break it down into smaller prompts:
      </p>

      <ul className="list-disc list-inside text-sm text-muted-foreground leading-7 mb-4 space-y-1">
        <li>Build the filters block.</li>
        <li>Build the header row.</li>
        <li>Build the table section.</li>
        <li>Then assemble them.</li>
      </ul>

      <Callout variant="tip" title="Refinement strategy">
        Be specific about what differs. Instead of saying &quot;it looks wrong,&quot; list concrete issues like &quot;the card padding is too large&quot; or &quot;the heading font size should be smaller.&quot; The more precise your feedback, the faster Claude can fix it.
      </Callout>
    </section>
  )
}
