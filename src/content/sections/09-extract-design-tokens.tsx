import { SectionHeader } from "@/components/docs/section-header"
import { CodeBlock } from "@/components/docs/code-block"
import { PromptBlock } from "@/components/docs/prompt-block"
import { Callout } from "@/components/docs/callout"

export default async function ExtractDesignTokens() {
  return (
    <section>
      <SectionHeader
        id="extract-design-tokens"
        number={9}
        title="Extract Design Tokens"
        description="Convert your Figma design system into CSS variables and Tailwind config."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        This step converts your Figma design system into code tokens stored in one place. Changing a color or radius later becomes a single-file edit, not a hunt across many components.
      </p>

      {/* 9.1 Prepare the design system link */}
      <h3 id="prepare-design-system-link" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        9.1. Prepare the design system link
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Have the Figma URL for your design system frame ready.
      </p>

      {/* 9.2 Prompt Claude to create tokens and Tailwind config */}
      <h3 id="prompt-create-tokens" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        9.2. Prompt Claude to create tokens and Tailwind config
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        In a Claude terminal session at the project root, say:
      </p>

      <PromptBlock>{`You are helping me turn a Figma-based admin dashboard into a clean, scalable Next.js + Tailwind codebase.

1) Read /docs/PRD.md to understand the project.
2) Using Figma MCP, open my design system frame: [PASTE FIGMA DESIGN SYSTEM URL HERE].

Task:
- Create a new file /styles/tokens.css with CSS custom properties for all relevant design tokens (colors, typography, spacing, radii, borders, status colors).
- Update tailwind.config.js so Tailwind utility classes map to these CSS variables.
- Follow the naming from Figma where it makes sense (for example, Gray 100, Gray 200, Blue 600) and group tokens by backgrounds, borders, text, actions, status, typography, spacing and radii.

Show me a short plan of which files you will create or modify, then implement those changes.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Approve the plan and let Claude create <strong className="text-foreground">/styles/tokens.css</strong> and update <strong className="text-foreground">tailwind.config.js</strong>.
      </p>

      {/* 9.3 Inspect and understand the result */}
      <h3 id="inspect-result" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        9.3. Inspect and understand the result
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Open <strong className="text-foreground">/styles/tokens.css</strong>:
      </p>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        You should see root-level CSS variables such as:
      </p>

      <CodeBlock
        code={`:root {
  --color-bg-surface: ...;
  --color-text-primary: ...;
  --spacing-4: ...;
  --radius-md: ...;
}`}
        language="css"
        filename="styles/tokens.css"
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Open <strong className="text-foreground">tailwind.config.js</strong>:
      </p>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        You should see Tailwind&apos;s <strong className="text-foreground">extend</strong> section referencing these variables, e.g.:
      </p>

      <CodeBlock
        code={`extend: {
  colors: {
    'bg-surface': 'var(--color-bg-surface)',
    'text-primary': 'var(--color-text-primary)',
  },
  spacing: {
    4: 'var(--spacing-4)',
  },
}`}
        language="js"
        filename="tailwind.config.js"
      />

      <Callout variant="important" title="Design tokens are your single source of truth">
        From now on, component styles should use Tailwind classes backed by these tokens, not raw hex codes. This keeps your codebase consistent and makes future design updates trivial.
      </Callout>
    </section>
  )
}
