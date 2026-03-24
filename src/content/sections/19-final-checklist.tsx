import { SectionHeader } from "@/components/docs/section-header"
import { Callout } from "@/components/docs/callout"

export default async function FinalChecklist() {
  return (
    <section>
      <SectionHeader
        id="final-checklist"
        number={19}
        title="Final Checklist"
        description="Verify everything before sharing the Vercel link."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Before you send the Vercel URL to a client, quickly check:
      </p>

      <p className="text-sm font-semibold text-foreground mb-2">Navigation and routing</p>
      <ul className="space-y-2 text-sm text-muted-foreground leading-7 mb-4">
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Dashboard, Users, and Settings pages are all accessible via the sidebar or header.</li>
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Clicking links changes the URL and content as expected.</li>
      </ul>

      <p className="text-sm font-semibold text-foreground mb-2">Interactivity</p>
      <ul className="space-y-2 text-sm text-muted-foreground leading-7 mb-4">
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Buttons have visible hover and focus states.</li>
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Filters and search on the Users page actually change the visible table rows.</li>
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Forms (if any) provide basic visual feedback (toast, message, or updated table) even though they do not talk to a real backend.</li>
      </ul>

      <p className="text-sm font-semibold text-foreground mb-2">Visual match to Figma</p>
      <ul className="space-y-2 text-sm text-muted-foreground leading-7 mb-4">
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Global layout, spacing, typography and colors look consistent with your Figma file.</li>
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Cards, tables, header and sidebar look familiar to the client.</li>
      </ul>

      <p className="text-sm font-semibold text-foreground mb-2">Storybook coverage</p>
      <ul className="space-y-2 text-sm text-muted-foreground leading-7 mb-4">
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> Key components (Button, Card, UsersTable, Inputs) have meaningful stories for common and edge cases.</li>
      </ul>

      <p className="text-sm font-semibold text-foreground mb-2">Deployment health</p>
      <ul className="space-y-2 text-sm text-muted-foreground leading-7 mb-4">
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> The Vercel deployment status is <strong className="text-foreground">Ready</strong>.</li>
        <li className="flex gap-2"><span className="text-docs-accent">&#x2713;</span> The app loads in modern browsers without obvious errors.</li>
      </ul>

      <Callout variant="tip" title="You did it!">
        Once this checklist looks good, you have achieved the main goal: starting from a Figma dashboard, you now have a live, interactive prototype on the web, built largely by Claude Code and orchestrated by you as the designer.
      </Callout>
    </section>
  )
}
