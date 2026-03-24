import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { Callout } from "@/components/docs/callout"

export default async function SetUpStorybook() {
  return (
    <section>
      <SectionHeader
        id="set-up-storybook"
        number={10}
        title="Set Up Storybook"
        description="Install Storybook to visually review components in isolation."
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Storybook is your visual lab for components: it runs as a separate app where you can see every button, card, table and state in isolation.
      </p>

      {/* 10.1 Ask Claude to install and configure Storybook */}
      <h3 id="install-configure-storybook" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        10.1. Ask Claude to install and configure Storybook
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        From a Claude terminal session in the project root, say:
      </p>

      <PromptBlock>{`We want to use Storybook to visually review all UI components for this dashboard.

Task:
- Plan the steps to initialize and configure Storybook for this Next.js + TypeScript + Tailwind project.
- Then run the necessary commands in this terminal to set it up.
- Ensure Storybook is configured to use our Tailwind setup and design tokens from /styles/tokens.css.

Show me the plan first, then execute it.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Claude will typically run a command like <strong className="text-foreground">npx storybook@latest init</strong> and create a <strong className="text-foreground">.storybook</strong> folder plus example stories. Approve, then wait for the setup to finish.
      </p>

      {/* 10.2 Run Storybook locally */}
      <h3 id="run-storybook-locally" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        10.2. Run Storybook locally
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Ask Claude:
      </p>

      <PromptBlock>{`Please run Storybook for this project (using npm run storybook or the appropriate command) and keep it running.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Claude will start Storybook; you can then open <a href="http://localhost:6006" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">http://localhost:6006</a> in your browser and see the Storybook UI.
      </p>

      {/* 10.3 Ensure Storybook uses your global styles */}
      <h3 id="storybook-global-styles" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        10.3. Ensure Storybook uses your global styles
      </h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        To make Storybook render components with the same look as your app:
      </p>

      <PromptBlock>{`Please ensure Storybook loads our global CSS, including Tailwind and /styles/tokens.css.

Task:
- Update .storybook/preview.(js|ts) or other relevant config to import the same root styles as app/layout.tsx.
- Confirm that components rendered in Storybook use our design tokens.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Claude will adjust configs so Storybook mirrors your main app styles.
      </p>

      <Callout variant="tip" title="Why Storybook matters">
        Storybook lets you catch visual bugs early by viewing every component variant in isolation. Combined with design tokens, it ensures your components look exactly like the Figma designs.
      </Callout>
    </section>
  )
}
