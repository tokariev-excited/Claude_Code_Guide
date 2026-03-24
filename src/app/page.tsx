import { DocsLayout } from "@/components/layout/docs-layout"
import { sections } from "@/content/sections-meta"
import Section01 from "@/content/sections/01-introduction"
import Section02 from "@/content/sections/02-tools-tech-stack"
import Section03 from "@/content/sections/03-prepare-figma"
import Section04 from "@/content/sections/04-install-prerequisites"
import Section05 from "@/content/sections/05-start-claude-code"
import Section06 from "@/content/sections/06-create-nextjs-project"
import Section07 from "@/content/sections/07-init-and-claude-md"
import Section08 from "@/content/sections/08-prd-screen-specs"
import Section09 from "@/content/sections/09-extract-design-tokens"
import Section10 from "@/content/sections/10-set-up-storybook"
import Section11 from "@/content/sections/11-build-ui-components"
import Section12 from "@/content/sections/12-refactor-components"
import Section13 from "@/content/sections/13-build-pages-routing"
import Section14 from "@/content/sections/14-mock-data-interactions"
import Section15 from "@/content/sections/15-verify-with-storybook"
import Section16 from "@/content/sections/16-push-to-github"
import Section17 from "@/content/sections/17-deploy-to-vercel"
import Section18 from "@/content/sections/18-better-prompts-ai"
import Section19 from "@/content/sections/19-final-checklist"

const sectionComponents = [
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
  Section07,
  Section08,
  Section09,
  Section10,
  Section11,
  Section12,
  Section13,
  Section14,
  Section15,
  Section16,
  Section17,
  Section18,
  Section19,
]

export default async function HomePage() {
  return (
    <DocsLayout>
      <div className="space-y-16">
        <div className="pb-4">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Figma to Production-Like Dashboard Prototype
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A step-by-step guide using Claude Code, Cursor, Figma MCP,
            Storybook, GitHub and Vercel.
          </p>
        </div>
        {sectionComponents.map((Section, i) => (
          <section key={sections[i].id}>
            <Section />
          </section>
        ))}
      </div>
    </DocsLayout>
  )
}
