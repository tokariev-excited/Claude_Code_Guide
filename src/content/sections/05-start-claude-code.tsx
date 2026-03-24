import { SectionHeader } from "@/components/docs/section-header"
import { CodeBlock } from "@/components/docs/code-block"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function StartClaudeCode() {
  return (
    <section>
      <SectionHeader
        id="start-claude-code"
        number={5}
        title="Start Claude Code in Cursor"
        description="Open your workspace and launch a Claude Code terminal session."
      />

      <p className="text-muted-foreground leading-7 mb-4">
        From now on, you will mostly talk to <ProductBadge name="claude" /> by running <code className="text-xs bg-muted px-1 py-0.5 rounded">claude</code> in the terminal <strong className="text-foreground">from the root of your project</strong>. This allows Claude to edit files and run commands in the same working directory.
      </p>

      {/* 5.1 Open Workspace */}
      <h3 id="open-workspace" className="scroll-mt-20">5.1. Open the Workspace Folder in Cursor</h3>

      <StepList steps={[
        {
          title: "Decide where on your machine you want to store projects.",
          children: (
            <p>For example, <code className="text-xs bg-muted px-1 py-0.5 rounded">~/projects</code> (macOS) or <code className="text-xs bg-muted px-1 py-0.5 rounded">C:\projects</code> (Windows).</p>
          ),
        },
        { title: "Open Cursor." },
        {
          title: "Use File \u2192 Open Folder and open your chosen workspace folder (e.g. projects).",
        },
      ]} />

      {/* 5.2 Launch Plan Mode */}
      <h3 id="launch-plan-mode" className="scroll-mt-20">5.2. Launch a Claude Session in the Terminal (Plan Mode)</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        Plan Mode is the safest and most powerful way to start a new task: <ProductBadge name="claude" /> only analyzes and plans; it cannot edit files until you are satisfied with the plan.
      </p>

      <StepList steps={[
        { title: "In Cursor, open the integrated Terminal." },
        {
          title: "In the terminal, navigate into your project folder when it exists (we will create it in the next section). For now, practice with:",
          children: (
            <CodeBlock code={`cd projects`} language="bash" />
          ),
        },
        {
          title: "To start Claude directly in Plan Mode for any non-trivial task, use:",
          children: (
            <CodeBlock code={`claude --permission-mode plan`} language="bash" />
          ),
        },
        {
          title: "Claude will start an interactive session and ask what you want to do.",
        },
      ]} />

      <Callout variant="important" title="When to use Plan Mode">
        <ul className="list-disc list-inside space-y-1">
          <li>For <strong className="text-foreground">complex tasks</strong> (more than 3 steps, multiple files, architectural decisions), <strong className="text-foreground">always start in Plan Mode</strong>.</li>
          <li>Let Claude read files, explore the repo, and propose a detailed plan.</li>
          <li>Review and edit that plan, then switch out of Plan Mode to let Claude implement.</li>
        </ul>
      </Callout>

      <p className="text-muted-foreground leading-7 mb-4">
        You can also switch into Plan Mode from an existing session using the <code className="text-xs bg-muted px-1 py-0.5 rounded">/plan</code> slash command (if your version supports it).
      </p>

      {/* 5.3 Default Plan Mode */}
      <h3 id="default-plan-mode" className="scroll-mt-20">5.3. Make Plan Mode the Default (optional, recommended)</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        To always start new sessions in Plan Mode:
      </p>

      <StepList steps={[
        {
          title: "Ask Claude (from any session) to create or update .claude/settings.json in your home or project directory with Plan Mode as default:",
          children: (
            <PromptBlock>{`Please create or update .claude/settings.json so that permissions.defaultMode is set to "plan". Keep other settings unchanged or add them only if necessary.`}</PromptBlock>
          ),
        },
        {
          title: "Claude will show you the JSON and write it. After that, new sessions start in Plan Mode by default.",
        },
      ]} />

      <Callout variant="tip">
        This matches the workflow recommended by the <ProductBadge name="claude" /> team and many advanced users.
      </Callout>
    </section>
  )
}
