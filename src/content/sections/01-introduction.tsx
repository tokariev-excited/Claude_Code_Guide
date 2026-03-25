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
        title="What This Guide Is and How to Use It"
        description="What this guide covers, who it is for, and the final outcome."
      />

      <p className="text-muted-foreground leading-7 mb-4">
        This guide shows a designer with <strong className="text-foreground">no coding background</strong> how to turn a <ProductBadge name="figma" /> design into a live, interactive web prototype deployed on <ProductBadge name="vercel" />. It assumes you work primarily in Figma and want to orchestrate the whole implementation through <ProductBadge name="claude" /> in the Terminal inside <ProductBadge name="cursor" />.
      </p>

      <p className="text-muted-foreground leading-7 mb-4">
        The product example used in this guide is an <strong className="text-foreground">admin dashboard</strong> with three pages {"\u2014"} <strong className="text-foreground">Dashboard</strong>, <strong className="text-foreground">Users</strong>, and <strong className="text-foreground">Settings</strong>. These pages are chosen only as an example scenario because together they cover the most common UI patterns: layout, sidebar navigation, data tables, filters, forms and settings screens. You can later adapt the same workflow to any other product.
      </p>

      <p className="text-muted-foreground leading-7 mb-4">
        <strong className="text-foreground">The final outcome:</strong>
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>A <ProductBadge name="nextjs" /> + TypeScript + <ProductBadge name="tailwind" /> front-end project.</li>
        <li>Clean reusable components, <ProductBadge name="storybook" /> documentation and mock data.</li>
        <li>All code produced with the help of <ProductBadge name="claude" /> running in <ProductBadge name="cursor" />&apos;s Terminal.</li>
        <li>The project stored on <ProductBadge name="github" /> and deployed to <ProductBadge name="vercel" /> as a shareable link.</li>
      </ul>

      <Callout variant="note">
        You will not build a real backend or database in this guide. All data is mocked on the client side.
      </Callout>

      <p className="text-muted-foreground leading-7 mb-4">
        <strong className="text-foreground">End-to-end, you will:</strong>
      </p>

      <StepList steps={[
        { title: "Prepare your Figma dashboard and design system." },
        { title: "Install Node.js, Git, Cursor, Claude Code CLI and connect Figma MCP." },
        { title: "Open a terminal in Cursor, start Claude and initialize the project." },
        { title: "Write a short PRD and per-screen specs in markdown." },
        { title: "Use Claude + Figma MCP to create design tokens and Tailwind setup." },
        { title: "Set up Storybook and build core UI components." },
        { title: "Assemble pages and routing for Dashboard, Users and Settings." },
        { title: "Add mock data and client-side interactions." },
        { title: "Use Storybook and screenshots to refine visuals." },
        { title: "Commit to Git, push to GitHub and deploy to Vercel." },
      ]} />

      <p className="text-muted-foreground leading-7 mb-4">
        Throughout the guide, you will:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>Let <strong className="text-foreground">Claude create almost all folders and files</strong>, except tools you must install manually.</li>
        <li>Work in <ProductBadge name="cursor" /> as your only code editor.</li>
        <li>Run <ProductBadge name="claude" /> primarily via the <code className="text-xs bg-muted px-1 py-0.5 rounded">claude</code> CLI in <ProductBadge name="cursor" />&apos;s terminal, so it can also run shell commands for you.</li>
        <li>Use <strong className="text-foreground">Plan Mode</strong> for any non-trivial task to get a robust plan before allowing code edits.</li>
      </ul>

      <Callout variant="tip" title="Designer-friendly workflow">
        You do not need to know how to code. Claude will write all the code for you. Your job is to describe what you want, review the results visually, and guide Claude with feedback.
      </Callout>
    </section>
  )
}
