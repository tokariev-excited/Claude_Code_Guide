import { SectionHeader } from "@/components/docs/section-header"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function ToolsTechStack() {
  return (
    <section>
      <SectionHeader
        id="tools-tech-stack"
        number={2}
        title="Tools and Tech Stack"
        description="Every tool and technology explained in plain language."
      />

      <h3 id="frontend-tech" className="scroll-mt-20">2.1. Frontend Tech</h3>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li><strong className="text-foreground">React</strong> {"\u2013"} the UI library. Think of components in React as the code equivalent of your Figma components.</li>
        <li><ProductBadge name="nextjs" /> {"\u2013"} a framework on top of React that handles routing (pages), bundling and many performance details for you.</li>
        <li><strong className="text-foreground">TypeScript</strong> {"\u2013"} {"\u201C"}safer JavaScript{"\u201D"} that helps Claude write more reliable code with fewer hidden bugs.</li>
        <li><ProductBadge name="tailwind" /> {"\u2013"} a utility-class system for styling that works very well with design tokens from your design system.</li>
        <li><strong className="text-foreground">Radix UI / shadcn-ui style patterns</strong> {"\u2013"} accessible headless components (dropdowns, dialogs, etc.) that Claude can skin with your design tokens.</li>
      </ul>

      <h3 id="designer-facing-tools" className="scroll-mt-20">2.2. Designer-Facing Tools</h3>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-2">
        <li><ProductBadge name="figma" /> {"\u2013"} your source of truth for visuals: design system frame + dashboard screens.</li>
        <li>
          <ProductBadge name="cursor" /> {"\u2013"} your code editor (IDE):
          <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
            <li>Left sidebar: project files (similar to Figma layers/pages).</li>
            <li>Center: open files.</li>
            <li>Bottom: Terminal where the <code className="text-xs bg-muted px-1 py-0.5 rounded">claude</code> CLI runs.</li>
            <li>Right: optional AI chat panel (we will rely mainly on the terminal session).</li>
          </ul>
        </li>
        <li><ProductBadge name="claude" /> {"\u2013"} the <code className="text-xs bg-muted px-1 py-0.5 rounded">claude</code> command that runs in a terminal and can read your repo, edit files, and execute shell commands in the same working directory.</li>
        <li><strong className="text-foreground">Figma MCP (Model Context Protocol)</strong> {"\u2013"} a bridge so Claude can read <ProductBadge name="figma" /> frames by URL instead of screenshots.</li>
        <li><ProductBadge name="storybook" /> {"\u2013"} a local web app that lists all your UI components and their states; use it to visually review every component in isolation.</li>
        <li><ProductBadge name="git" /> + <ProductBadge name="github" /> {"\u2013"} version control and cloud storage for your code.</li>
        <li><ProductBadge name="vercel" /> {"\u2013"} hosting platform that pulls code from <ProductBadge name="github" /> and gives you a live URL for your app.</li>
      </ul>

      <Callout variant="note">
        You will stay mostly in <ProductBadge name="figma" />, <ProductBadge name="cursor" /> (files + terminal), your browser, and <ProductBadge name="claude" />.
      </Callout>
    </section>
  )
}
