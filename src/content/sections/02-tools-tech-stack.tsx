import { SectionHeader } from "@/components/docs/section-header"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function ToolsTechStack() {
  return (
    <section>
      <SectionHeader
        id="tools-tech-stack"
        number={2}
        title="Tools and Technology Overview"
        description="Every tool and technology explained in plain language."
      />

      <h3 id="technology-stack" className="scroll-mt-20">2.1. Technology Stack</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        You don&apos;t have to become a programmer, but it helps to know the names:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li><strong className="text-foreground">React</strong> {"\u2013"} library for building UI components.</li>
        <li><ProductBadge name="nextjs" /> <strong className="text-foreground">(App Router)</strong> {"\u2013"} framework on top of React that gives you routing (pages), performance optimizations and a simple dev server.</li>
        <li><strong className="text-foreground">TypeScript</strong> {"\u2013"} {"\u201C"}safer JavaScript{"\u201D"} that helps Claude avoid many common bugs.</li>
        <li><ProductBadge name="tailwind" /> {"\u2013"} utility-class based styling system that works well with design tokens.</li>
        <li><ProductBadge name="storybook" /> {"\u2013"} local documentation app where you can inspect each component and UI state in isolation.</li>
        <li><ProductBadge name="claude" /> <strong className="text-foreground">Code CLI</strong> {"\u2013"} command-line version of Claude that runs in a terminal and can both edit code and run commands in your project folder.</li>
        <li><ProductBadge name="cursor" /> {"\u2013"} AI-first code editor where you run your terminals and Claude sessions.</li>
        <li><strong className="text-foreground">Figma MCP</strong> {"\u2013"} integration that lets Claude read your <ProductBadge name="figma" /> file via a URL instead of screenshots.</li>
        <li><ProductBadge name="git" /> + <ProductBadge name="github" /> {"\u2013"} version control and remote storage for your code.</li>
        <li><ProductBadge name="vercel" /> {"\u2013"} hosting platform that takes a Next.js project from GitHub and creates a live URL for it.</li>
      </ul>

      <h3 id="high-level-workflow" className="scroll-mt-20">2.2. High-Level Workflow</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        You, as designer, stay mostly in:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li><ProductBadge name="figma" /></li>
        <li><ProductBadge name="cursor" /> (files + terminals)</li>
        <li>Browser (<ProductBadge name="storybook" />, local app, <ProductBadge name="github" />, <ProductBadge name="vercel" />)</li>
        <li><ProductBadge name="claude" /> in the <ProductBadge name="cursor" /> terminal</li>
      </ul>

      <Callout variant="note">
        You will stay mostly in <ProductBadge name="figma" />, <ProductBadge name="cursor" /> (files + terminal), your browser, and <ProductBadge name="claude" />.
      </Callout>
    </section>
  )
}
