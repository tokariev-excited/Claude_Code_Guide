import { SectionHeader } from "@/components/docs/section-header"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"
import { ZoomableImage } from "@/components/docs/zoomable-image"

export default async function StartClaudeCode() {
  return (
    <section>
      <SectionHeader
        id="start-claude-code"
        number={5}
        title="Working with Claude in Cursor's Terminal"
        description="Open your workspace and launch Claude Code terminal sessions."
      />

      {/* 5.1 Open Workspace */}
      <h3 id="open-workspace" className="scroll-mt-20">5.1. Open Your Workspace in Cursor</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        Choose a folder on your machine for projects (for example, <code className="text-xs bg-muted px-1 py-0.5 rounded">projects</code>). In <ProductBadge name="cursor" />, open this folder via <strong className="text-foreground">File {"\u2192"} Open Project</strong>.
      </p>
      <ZoomableImage src="/cursor-open-folder.png" alt="Cursor open folder screen" className="mb-4 rounded-xl border border-border" />

      {/* 5.2 Start Claude in the Terminal */}
      <h3 id="start-claude-terminal" className="scroll-mt-20">5.2. Start Claude in the Terminal</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        Open the <strong className="text-foreground">Terminal</strong> panel in <ProductBadge name="cursor" /> (bottom of the window). Make sure you are in the right folder (you can use <code className="text-xs bg-muted px-1 py-0.5 rounded">cd</code> commands if needed). Start <ProductBadge name="claude" /> by typing the following command and pressing Enter:
      </p>

      <CodeBlock code={`claude`} language="bash" />
      <ZoomableImage src="/cursor-claude-terminal.png" alt="Cursor terminal with claude command" className="mb-4 rounded-xl border border-border" />

      <p className="text-muted-foreground leading-7 mb-4">
        From now on, the terminal behaves as a conversation with Claude Code <strong className="text-foreground">inside</strong> your project. You will give it instructions in natural language; Claude will reply and can also run shell commands or edit files in the project when you approve.
      </p>

      {/* 5.3 Switching Between Plan Mode and Normal Mode */}
      <h3 id="switching-modes" className="scroll-mt-20">5.3. Switching Between Plan Mode and Normal Mode</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        <ProductBadge name="claude" /> Code supports <strong className="text-foreground">Plan Mode</strong>, which forces Claude to plan a task before applying changes. This is very valuable for anything non-trivial.
      </p>

      <p className="text-muted-foreground leading-7 mb-4">
        The simplest way to change modes:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>Press <strong className="text-foreground">Shift+Tab</strong> to cycle between modes until you see <strong className="text-foreground">Plan Mode</strong> selected.</li>
        <li>When you are ready to move from planning to implementation, press <strong className="text-foreground">Shift+Tab</strong> again to return to a normal working mode.</li>
      </ul>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <ZoomableImage src="/plan-mode-on.png" alt="Plan mode on in Claude Code terminal" className="rounded-lg border border-border" />
        <ZoomableImage src="/accept-edits-mode.png" alt="Accept edits mode in Claude Code terminal" className="rounded-lg border border-border" />
      </div>

      <Callout variant="important" title="When to use Plan Mode">
        Use Plan Mode for tasks that touch multiple files, change architecture, or feel risky.
      </Callout>

      {/* 5.4 Using Multiple Terminals in Cursor */}
      <h3 id="multiple-terminals" className="scroll-mt-20">5.4. Using Multiple Terminals in Cursor</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        You can have several terminals open at the same time, each with its own <ProductBadge name="claude" /> session or command set. This is very useful for parallel work.
      </p>

      <p className="text-muted-foreground leading-7 mb-4">
        <strong className="text-foreground">Typical usage:</strong>
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>Terminal 1: <ProductBadge name="claude" /> working on UI components.</li>
        <li>Terminal 2: <ProductBadge name="claude" /> working on routing or mock data.</li>
        <li>Terminal 3: local dev server or <ProductBadge name="storybook" /> running in the background.</li>
      </ul>

      <p className="text-muted-foreground leading-7 mb-4">
        In <ProductBadge name="cursor" /> you can open new terminals using the terminal UI (for example, via the plus button or split actions in the terminal panel) and then start <ProductBadge name="claude" /> in each one with:
      </p>

      <CodeBlock code={`claude`} language="bash" />

      <p className="text-muted-foreground leading-7 mb-4">
        Now you can talk to different Claude sessions in parallel or keep one focused on long-running tasks.
      </p>
    </section>
  )
}
