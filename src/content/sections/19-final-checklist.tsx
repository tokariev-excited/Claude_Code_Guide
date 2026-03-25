import { SectionHeader } from "@/components/docs/section-header"
import { Callout } from "@/components/docs/callout"

export default async function FinalChecklist() {
  return (
    <section>
      <SectionHeader
        id="final-checklist"
        number={19}
        title="Final Checklist Before Sharing the Link"
        description="Verify everything before sharing the Vercel link."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Before sending the Vercel URL to colleagues or clients, quickly verify:
      </p>

      <ul className="space-y-2 text-sm text-muted-foreground leading-7 mb-4">
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Navigation between Dashboard, Users and Settings works.</li>
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Visuals of key screens closely match Figma (cards, tables, sidebar, header).</li>
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Buttons, filters, search and forms behave as expected on mock data.</li>
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Storybook has stories for important components and states.</li>
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> The Vercel deployment status is <strong className="text-foreground">Ready</strong> and loads without obvious errors.</li>
      </ul>

      <Callout variant="tip" title="You did it!">
        At this point you have a complete, production-like prototype built from Figma, with minimal manual coding and most of the heavy lifting handled by Claude Code in Cursor&apos;s terminal.
      </Callout>
    </section>
  )
}
