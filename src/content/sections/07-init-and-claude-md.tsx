import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function InitAndClaudeMd() {
  return (
    <section>
      <SectionHeader
        id="init-and-claude-md"
        number={7}
        title="Initialize /init and Configure CLAUDE.md"
        description="Generate persistent project memory for Claude Code."
      />

      {/* 7.1 Run /init */}
      <h3 id="run-init" className="scroll-mt-20">
        7.1. Run /init
      </h3>

      <p className="text-muted-foreground leading-7 mb-4">
        In a <ProductBadge name="claude" /> session at the project root, make sure Claude can see the project files (you are in the project folder). Type the following and press Enter:
      </p>

      <StepList
        steps={[
          {
            title: <>Type <code className="rounded bg-muted px-1 py-0.5 font-mono text-[13px]">/init</code> and press Enter.</>,
          },
          {
            title: "Claude will scan the project and propose creating or updating a CLAUDE.md file for this repository.",
          },
        ]}
      />

      <p className="text-muted-foreground leading-7 mb-4">
        Think of <strong className="text-foreground">CLAUDE.md</strong> as the &ldquo;project memory&rdquo; for <ProductBadge name="claude" /> Code &mdash; how the project is structured, which commands to use, and what workflow rules to follow.
      </p>

      {/* 7.2 Tell Claude What to Put into CLAUDE.md */}
      <h3 id="claude-md-contents" className="scroll-mt-20">
        7.2. Tell Claude What to Put into CLAUDE.md
      </h3>

      <p className="text-muted-foreground leading-7 mb-4">
        After <strong className="text-foreground">/init</strong> completes, continue in the same session:
      </p>

      <PromptBlock>{`Please open CLAUDE.md and update it for this project.

Include:

- The stack: Next.js with the App Router, React, TypeScript, Tailwind, Storybook, mock data only (no real backend), and Figma MCP.
- Common commands: how to start the dev server, how to run Storybook, and how to build the project.
- A short note that this project is a front-end-only dashboard prototype using mocked data.
- A "Workflow Orchestration" section with rules like:

  - Use Plan Mode for any non-trivial task before implementation.
  - Switch between modes using Shift+Tab, not by running extra commands.
  - Prefer building complex pages in smaller parts: shared layout and sidebar first, then reusable components, then full page assembly.
  - Use separate terminals when helpful: one Claude session for components, another for pages, and another for servers.
  - Let Claude keep the local dev server or Storybook running in one terminal, while you continue working with Claude in another terminal.
  - When visual refinement is needed, paste screenshots and explain the issues in text so Claude can match the design more closely.
  - Avoid inventing design details when Figma context is incomplete; if needed, ask me for a smaller frame or an additional screenshot instead of guessing.

Keep the file clear and concise.`}</PromptBlock>

      <p className="text-muted-foreground leading-7 mb-4">
        Claude will edit <strong className="text-foreground">CLAUDE.md</strong> with these details, giving you a persistent workflow contract for every future session.
      </p>

      <Callout variant="note">
        The Workflow Orchestration rules act as a contract between you and every future <ProductBadge name="claude" /> session. They ensure consistency even when you start fresh conversations.
      </Callout>
    </section>
  )
}
