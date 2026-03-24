import { SectionHeader } from "@/components/docs/section-header"
import { CodeBlock } from "@/components/docs/code-block"
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
        title="/init and CLAUDE.md"
        description="Generate persistent project memory for Claude Code."
      />

      <p className="text-muted-foreground leading-7 mb-4">
        <ProductBadge name="claude" />&apos;s <strong className="text-foreground">/init</strong> command reads your codebase and generates a <strong className="text-foreground">CLAUDE.md</strong> file containing instructions and context for future sessions. Think of it as persistent &ldquo;project memory&rdquo; for Claude Code.
      </p>

      {/* 7.1 Run /init for the first time */}
      <h3 id="run-init" className="scroll-mt-20">
        7.1. Run /init for the first time
      </h3>

      <StepList
        steps={[
          {
            title: "In the Cursor terminal at the project root, start Claude (Plan Mode is fine).",
            children: (
              <CodeBlock code={`claude --permission-mode plan`} language="bash" />
            ),
          },
          {
            title: "When Claude is ready for instructions, type /init and press Enter.",
            children: (
              <CodeBlock code={`/init`} language="bash" />
            ),
          },
          {
            title: "Claude will analyze the codebase and propose creating or updating a CLAUDE.md file in the repo root.",
          },
          {
            title: "Review the summary of what it plans to include (build commands, architecture notes, etc.) and approve.",
          },
        ]}
      />

      {/* 7.2 What should CLAUDE.md contain for this project */}
      <h3 id="claude-md-contents" className="scroll-mt-20">
        7.2. What should CLAUDE.md contain for this project
      </h3>

      <p className="text-muted-foreground leading-7 mb-4">
        By default, <strong className="text-foreground">/init</strong> already does a good job, but you can steer it.
      </p>

      <p className="text-muted-foreground leading-7 mb-4">
        After <strong className="text-foreground">/init</strong> finishes, say:
      </p>

      <PromptBlock>{`Please open CLAUDE.md and update it with additional information specific to this project:
- Our stack: Next.js + React + TypeScript + Tailwind + design tokens in /styles/tokens.css + Storybook + Figma MCP.
- Common commands: npm run dev, npm run storybook, npm run build, npm test (if any).
- A note that this project is a front-end-only prototype using mock data (no real backend).

Keep the file concise and avoid generic advice.`}</PromptBlock>

      <p className="text-muted-foreground leading-7 mb-4">
        Claude will edit <strong className="text-foreground">CLAUDE.md</strong> accordingly.
      </p>

      {/* 7.3 Add workflow rules from the "Workflow Orchestration" sheet */}
      <h3 id="workflow-orchestration" className="scroll-mt-20">
        7.3. Add workflow rules from the &ldquo;Workflow Orchestration&rdquo; sheet
      </h3>

      <p className="text-muted-foreground leading-7 mb-4">
        Now you will add higher-level rules so <ProductBadge name="claude" /> consistently works the way you want.
      </p>

      <p className="text-muted-foreground leading-7 mb-4">
        Prompt:
      </p>

      <PromptBlock>{`Please open CLAUDE.md and append a new section called "Workflow Orchestration" with concise rules for how Claude should work in this repository.

Include points such as:
- Plan Mode as default for any non-trivial task (3+ steps or architectural decisions). If things go wrong, stop and re-plan instead of guessing.
- Use sub-agents or subtasks to keep the main conversation focused and to handle research or parallel work when needed.
- After any correction from the user, update a lessons file (such as tasks/lessons.md) with what to avoid next time and review it at the start of relevant sessions.
- Never treat a task as complete without verifying it: run tests or commands, compare behavior before and after, and check logs when appropriate.
- Prefer simple, elegant solutions over clever but fragile ones. If you see a clearly better implementation and it is safe, propose it.
- When a bug report is given, focus on fixing it end-to-end without asking for step-by-step hand-holding. Inspect logs, failing tests and related code.
- For task management, follow a small loop: plan first, verify the plan, track progress step by step, explain changes at a high level, document results and capture lessons.
- Core principles: keep changes as simple as possible, avoid shallow or temporary fixes, and only touch the parts of the codebase that are truly necessary.

Write this section in clear, direct English aimed at other instances of Claude Code working in this repo.`}</PromptBlock>

      <p className="text-muted-foreground leading-7 mb-4">
        Claude will rewrite these ideas in its own words inside <strong className="text-foreground">CLAUDE.md</strong>, giving you a persistent workflow contract inspired by the official guidance.
      </p>

      <Callout variant="note">
        The Workflow Orchestration rules act as a contract between you and every future <ProductBadge name="claude" /> session. They ensure consistency even when you start fresh conversations.
      </Callout>
    </section>
  )
}
