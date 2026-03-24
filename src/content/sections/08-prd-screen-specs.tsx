import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"

export default async function PrdScreenSpecs() {
  return (
    <section>
      <SectionHeader
        id="prd-screen-specs"
        number={8}
        title="PRD & Screen Specs"
        description="Write a short PRD and per-screen specs so Claude has full context."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        A short Product Requirements Document (PRD) and per-screen specs give Claude the same context you have, which dramatically improves code quality.
      </p>

      {/* 8.1 Ask Claude to create the docs structure */}
      <h3 id="create-docs-structure" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        8.1. Ask Claude to create the docs structure
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        From a Claude terminal session at the project root, say:
      </p>

      <PromptBlock>{`We need a documentation structure for this dashboard.

Task:
- Create a /docs folder.
- Inside it, create /docs/PRD.md.
- Also create /docs/screens/dashboard.md, /docs/screens/users.md and /docs/screens/settings.md.

Use simple markdown files, I will paste and refine the content myself.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Approve the file creation plan and let Claude create everything.
      </p>

      {/* 8.2 Draft the PRD with the help of any AI */}
      <h3 id="draft-prd" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        8.2. Draft the PRD with the help of any AI
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        You can use any AI (outside Cursor) to help you write the PRD in English, then paste it into <strong className="text-foreground">docs/PRD.md</strong>.
      </p>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Example external prompt:
      </p>

      <PromptBlock>{`I am a product designer (not a developer) working on a web admin dashboard for managing [brief description: e.g. users, teams, settings].

Please create a concise PRD in markdown with these sections:
- What we are building
- Why we are building it / goals
- Core features
- Out of scope (including: no real backend, mock data only)
- Tech stack (Next.js, React, TypeScript, Tailwind, design tokens, Storybook, Figma MCP, no database)
- Links to Figma screens (leave a placeholder section, I will paste URLs myself)`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Paste the generated markdown into <strong className="text-foreground">docs/PRD.md</strong> in Cursor and replace the Figma section placeholders with your real Figma URLs.
      </p>

      {/* 8.3 Draft per-screen specs */}
      <h3 id="draft-screen-specs" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        8.3. Draft per-screen specs
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Repeat the same pattern for each screen (Dashboard, Users, Settings).
      </p>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Example external prompt for <strong className="text-foreground">dashboard.md</strong>:
      </p>

      <PromptBlock>{`I need a concise, structured spec for a Dashboard page in an admin app.

Please write markdown with:
- What is this page about?
- Main user flows (step by step)
- Data displayed (high level description)
- Components used (buttons, cards, charts, table, filters, etc.)
- States: loading, empty, error, success, hover/active`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Paste and slightly adjust the outputs into <strong className="text-foreground">docs/screens/dashboard.md</strong>, <strong className="text-foreground">docs/screens/users.md</strong>, and <strong className="text-foreground">docs/screens/settings.md</strong>.
      </p>

      <Callout variant="tip" title="Why this matters">
        Now Claude has both textual and visual context (once we connect Figma) for what to build. This dramatically reduces back-and-forth and produces higher-quality code from the first attempt.
      </Callout>
    </section>
  )
}
