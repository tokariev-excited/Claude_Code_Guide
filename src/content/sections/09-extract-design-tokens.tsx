import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"
import { ZoomableImage } from "@/components/docs/zoomable-image"

export default async function ExtractDesignTokens() {
  return (
    <section>
      <SectionHeader
        id="extract-design-tokens"
        number={9}
        title="Extract Design Tokens from Figma via MCP"
        description="Convert your Figma design system into CSS variables and Tailwind config."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        This step converts your Figma design system into code tokens stored in one place. Changing a color or radius later becomes a single-file edit, not a hunt across many components.
      </p>

      {/* 9.1 Get the Design System Frame URL When Needed */}
      <h3 id="prepare-design-system-link" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        9.1. Get the Design System Frame URL When Needed
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        When you are ready to create tokens:
      </p>

      <StepList
        steps={[
          {
            title: "Open the design system frame in Figma.",
          },
          {
            title: "Copy the frame link.",
            children: (
              <ZoomableImage src="/figma-copy-link-selection.png" alt="Figma copy link to selection context menu" className="mt-3 rounded-xl border border-border" />
            ),
          },
          {
            title: "Go back to Claude\u2019s terminal session.",
          },
        ]}
      />

      {/* 9.2 Ask Claude to Create Tokens and Connect Tailwind */}
      <h3 id="prompt-create-tokens" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        9.2. Ask Claude to Create Tokens and Connect Tailwind
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        In a Claude terminal session at the project root, give the following prompt:
      </p>

      <PromptBlock>{`You are helping me convert a Figma-based design system into a code-based token system.

Context:
- /docs/PRD.md

Please:

1. Using Figma MCP, open my design system frame from this URL: [PASTE DESIGN SYSTEM FRAME LINK HERE].
2. Create a new file /styles/tokens.css with CSS custom properties for colors, typography, spacing, radii, borders and status colors.
3. Update tailwind.config.js so Tailwind utilities use these CSS variables.
4. Follow the naming from Figma where it makes sense (e.g. Gray 100, Primary 600) but group tokens logically by:
   - background,
   - text,
   - actions,
   - borders,
   - status,
   - typography,
   - spacing,
   - radii.

Show me the plan of changes first. After I confirm, implement the changes.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Claude will:
      </p>

      <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-1">
        <li>Create <strong className="text-foreground">/styles/tokens.css</strong> with CSS custom properties for all relevant design tokens.</li>
        <li>Update <strong className="text-foreground">tailwind.config.js</strong> to map Tailwind utility classes to your tokens.</li>
      </ul>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Inspect the result in both files so you understand where your design values live.
      </p>

      <Callout variant="important" title="Design tokens are your single source of truth">
        From now on, component styles should use Tailwind classes backed by these tokens, not raw hex codes. This keeps your codebase consistent and makes future design updates trivial.
      </Callout>
    </section>
  )
}
