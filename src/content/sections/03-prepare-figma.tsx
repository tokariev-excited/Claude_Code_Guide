import { SectionHeader } from "@/components/docs/section-header"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function PrepareFigma() {
  return (
    <section>
      <SectionHeader
        id="prepare-figma"
        number={3}
        title="Prepare Your Figma Dashboard"
        description="Structure your Figma file for optimal code extraction."
      />

      <h3 id="structure-figma-file" className="scroll-mt-20">3.1. Structure the Figma File</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        In your <ProductBadge name="figma" /> file, create clear, separate frames:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>
          <strong className="text-foreground">Design system frame</strong> {"\u2013"} includes:
          <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
            <li>Color styles (primary, neutrals, semantic/status colors).</li>
            <li>Text styles (Heading 1/2/3, Body, Caption).</li>
            <li>Spacing scale (4, 8, 12, 16, 24, 32, ...).</li>
            <li>Radius, shadows, borders.</li>
            <li>Core components: buttons, inputs, selects, checkboxes/switches, badges, cards, table rows, modals.</li>
          </ul>
        </li>
        <li>
          <strong className="text-foreground">Page frames</strong> for each screen:
          <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
            <li><strong className="text-foreground">Dashboard</strong> {"\u2013"} main metrics/cards + table(s).</li>
            <li><strong className="text-foreground">Users</strong> {"\u2013"} user list/table + possible filters.</li>
            <li><strong className="text-foreground">Settings</strong> {"\u2013"} toggles, selects, sections.</li>
          </ul>
        </li>
      </ul>

      <Callout variant="tip" title="Consistency matters">
        The more consistent your naming and component usage in <ProductBadge name="figma" />, the easier it is for Claude to extract and map design tokens and components.
      </Callout>

      <h3 id="set-sharing-links" className="scroll-mt-20">3.2. Set Sharing and Copy Links</h3>

      <StepList steps={[
        { title: "Open your Figma file." },
        {
          title: "Click Share in the top-right.",
        },
        {
          title: "Set link access.",
          children: (
            <p>For ease of use, set <strong className="text-foreground">Anyone with the link can view</strong> (or ensure the Figma account you authorize for MCP has access).</p>
          ),
        },
        {
          title: "Copy the following URLs (you will paste them into prompts):",
          children: (
            <ul className="list-disc list-inside space-y-1">
              <li>Link to the <strong className="text-foreground">design system frame</strong>.</li>
              <li>Link to the <strong className="text-foreground">Dashboard</strong> screen.</li>
              <li>Links to <strong className="text-foreground">Users</strong> and <strong className="text-foreground">Settings</strong> screens.</li>
            </ul>
          ),
        },
      ]} />

      <Callout variant="note">
        Keep these links somewhere handy — you will paste them into Claude prompts throughout the guide.
      </Callout>
    </section>
  )
}
