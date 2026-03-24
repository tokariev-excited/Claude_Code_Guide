import { SectionHeader } from "@/components/docs/section-header"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function Introduction() {
  return (
    <section>
      <SectionHeader
        id="introduction"
        number={1}
        title="Goal and High-Level Flow"
        description="What this guide covers and the end-to-end workflow."
      />

      <p className="text-muted-foreground leading-7 mb-4">
        This guide shows a non-coder designer how to turn a <ProductBadge name="figma" /> admin dashboard into a live, clickable web prototype deployed on <ProductBadge name="vercel" />, using <ProductBadge name="claude" /> in the terminal inside <ProductBadge name="cursor" /> as the main coding agent. The result is a <ProductBadge name="nextjs" /> dashboard app with realistic interactions (navigation, filters, tables, basic forms) that runs entirely on the front end with mock data (no real backend or database).
      </p>

      <p className="text-muted-foreground leading-7 mb-4">
        <strong className="text-foreground">End-to-end flow:</strong>
      </p>

      <StepList steps={[
        { title: "Prepare your Figma dashboard and design system." },
        { title: "Install Node.js, Git, Cursor, Claude Code CLI, and enable Figma MCP." },
        { title: "Open a Claude Code terminal session in Cursor and initialize the repo with /init to generate a project-specific CLAUDE.md." },
        { title: "Write a short PRD and per-screen specs in markdown." },
        { title: "Use Claude + Figma MCP to extract design tokens into code." },
        { title: "Ask Claude (in the terminal) to set up Storybook so you can visually review every component in the browser." },
        { title: "Have Claude build reusable UI components from your Figma design system and wire them into Storybook." },
        { title: "Have Claude build complete dashboard pages (screens), connect routes and navigation between pages, and refine them." },
        { title: "Add mock data and simple client-side interactions (filters, search, basic forms)." },
        { title: "Initialize Git, push the project to GitHub, and connect it to Vercel for deployment." },
        { title: "Optionally use other AI tools to help you craft better prompts before sending them to Claude Code." },
      ]} />

      <p className="text-muted-foreground leading-7 mb-4">
        Throughout the guide, you will:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>Let <strong className="text-foreground">Claude create almost all folders and files</strong>, except tools you must install manually.</li>
        <li>Work in <ProductBadge name="cursor" /> as your only code editor.</li>
        <li>Run <ProductBadge name="claude" /> primarily via the <code className="text-xs bg-muted px-1 py-0.5 rounded">{`\`claude\``} CLI in Cursor&apos;s terminal</code>, so it can also run shell commands for you.</li>
        <li>Use <strong className="text-foreground">Plan Mode</strong> for any non-trivial task to get a robust plan before allowing code edits.</li>
      </ul>

      <Callout variant="tip" title="Designer-friendly workflow">
        You do not need to know how to code. Claude will write all the code for you. Your job is to describe what you want, review the results visually, and guide Claude with feedback.
      </Callout>
    </section>
  )
}
