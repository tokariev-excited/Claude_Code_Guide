import { SectionHeader } from "@/components/docs/section-header"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function PrepareFigma() {
  return (
    <section>
      <SectionHeader
        id="prepare-figma"
        number={3}
        title="Prepare Your Figma Dashboard and Design System"
        description="Structure your Figma file for optimal code extraction."
      />

      <h3 id="structure-figma-file" className="scroll-mt-20">3.1. Structure Your Figma File</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        Create a clear structure in <ProductBadge name="figma" />. You can adapt naming to your own conventions; here is a practical layout:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>
          <strong className="text-foreground">Design system frame</strong>
          <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
            <li>Color styles (primary, neutrals, semantic/status colors).</li>
            <li>Text styles (Headings, Body, Caption).</li>
            <li>Spacing scale (4, 8, 12, 16, 24, 32, {"\u2026"}).</li>
            <li>Radii, border styles, shadows.</li>
            <li>Core UI components: buttons, inputs, selects, checkboxes, switches, badges, cards, table rows, modals.</li>
          </ul>
        </li>
        <li>
          <strong className="text-foreground">Page frames</strong> for this example project:
          <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
            <li><strong className="text-foreground">Dashboard</strong> {"\u2013"} summary cards, charts, key metrics, table.</li>
            <li><strong className="text-foreground">Users</strong> {"\u2013"} list/table of users, filters, maybe a details panel.</li>
            <li><strong className="text-foreground">Settings</strong> {"\u2013"} toggles, selects, sections for configuration.</li>
          </ul>
        </li>
      </ul>

      <p className="text-muted-foreground leading-7 mb-4">
        Use consistent component instances and style names. This makes it easier for Claude to map visual decisions into tokens and components.
      </p>

      <h3 id="sharing-settings" className="scroll-mt-20">3.2. Sharing Settings</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        Ensure the <ProductBadge name="figma" /> file is accessible:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>Set <strong className="text-foreground">Anyone with the link can view</strong> or make sure the Figma account you will connect via MCP has access.</li>
      </ul>

      <p className="text-muted-foreground leading-7 mb-4">
        Later in the guide, when Claude needs a specific frame, you will:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>Open that frame in <ProductBadge name="figma" />.</li>
        <li>Copy the <strong className="text-foreground">link</strong> to the current frame at that moment.</li>
        <li>Paste it into the relevant prompt.</li>
      </ul>

      <Callout variant="tip" title="No need to collect links in advance">
        You do <strong className="text-foreground">not</strong> have to collect all links in advance. Just copy the link when Claude asks for a specific frame.
      </Callout>
    </section>
  )
}
