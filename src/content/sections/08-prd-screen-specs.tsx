import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { Callout } from "@/components/docs/callout"

export default async function PrdScreenSpecs() {
  return (
    <section>
      <SectionHeader
        id="prd-screen-specs"
        number={8}
        title="Add PRD and Screen Specs"
        description="Write a short PRD and per-screen specs so Claude has full context."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        A short Product Requirements Document (PRD) and per-screen specs give Claude the same context you have, which dramatically improves code quality.
      </p>

      {/* 8.1 Ask Claude to Create Documentation Files */}
      <h3 id="create-docs-structure" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        8.1. Ask Claude to Create Documentation Files
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        In a Claude session at the project root:
      </p>

      <PromptBlock>{`We need simple documentation for this dashboard prototype.

Please:

1. Create a /docs folder.
2. Inside it, create /docs/PRD.md.
3. Create /docs/screens/dashboard.md, /docs/screens/users.md and /docs/screens/settings.md.

Use markdown files only.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Claude will create these files for you.
      </p>

      {/* 8.2 Write the PRD (You Can Use Any AI to Assist) */}
      <h3 id="draft-prd" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        8.2. Write the PRD (You Can Use Any AI to Assist)
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Use any AI tool you like (outside Cursor) to generate an English PRD, then paste it into <strong className="text-foreground">docs/PRD.md</strong>.
      </p>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Structure suggestion:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>What we are building (a front-end-only dashboard prototype for demonstration).</li>
        <li>Why we are building it (live prototype link for stakeholders).</li>
        <li>Core features (navigation, dashboard metrics, user management table, settings).</li>
        <li>Out of scope (no auth, no real backend, everything is mock data).</li>
        <li>Tech stack (Next.js, TypeScript, Tailwind, Storybook, Claude Code, Figma MCP).</li>
        <li>A section where you will paste Figma links later.</li>
      </ul>

      {/* 8.3 Write Per-Screen Specs */}
      <h3 id="draft-screen-specs" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        8.3. Write Per-Screen Specs
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        For each screen, create a short spec and paste it into the corresponding file.
      </p>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Example structure for <strong className="text-foreground">dashboard.md</strong>:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>Purpose of the page.</li>
        <li>Main flows (what the user can do).</li>
        <li>Key UI areas (cards, charts, table).</li>
        <li>Empty / loading / error states.</li>
        <li>Any special interactions.</li>
      </ul>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Repeat for <strong className="text-foreground">users.md</strong> and <strong className="text-foreground">settings.md</strong>.
      </p>

      <Callout variant="tip" title="Why this matters">
        Claude will use these documents to understand context before writing code. This dramatically reduces back-and-forth and produces higher-quality code from the first attempt.
      </Callout>
    </section>
  )
}
