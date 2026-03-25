import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function SetUpStorybook() {
  return (
    <section>
      <SectionHeader
        id="set-up-storybook"
        number={10}
        title="Set Up Storybook"
        description="Install Storybook to visually review components in isolation."
      />

      <p className="text-muted-foreground leading-7 mb-4">
        <ProductBadge name="storybook" /> is your visual lab for components: it runs as a separate app where you can see every button, card, table and state in isolation.
      </p>

      {/* 10.1 Install and Configure Storybook with Claude */}
      <h3 id="install-configure-storybook" className="scroll-mt-20">
        10.1. Install and Configure Storybook with Claude
      </h3>

      <p className="text-muted-foreground leading-7 mb-4">
        In a <ProductBadge name="claude" /> session at the project root:
      </p>

      <PromptBlock>{`We want to use Storybook to view and test all our components in isolation.

Please:

1. Plan how to set up Storybook for this Next.js + TypeScript + Tailwind project.
2. Then run the necessary commands to install and initialize Storybook.
3. Configure Storybook so it uses the same global styles as our main app, including Tailwind and /styles/tokens.css.

Show me the plan first, then execute it.`}</PromptBlock>

      <p className="text-muted-foreground leading-7 mb-4">
        Claude will run the official Storybook init command and create configuration files and example stories for you.
      </p>

      {/* 10.2 Run Storybook and Open It */}
      <h3 id="run-storybook-locally" className="scroll-mt-20">
        10.2. Run Storybook and Open It
      </h3>

      <p className="text-muted-foreground leading-7 mb-4">
        Ask Claude to start Storybook and keep it running:
      </p>

      <PromptBlock>{`Please start Storybook in this project and keep it running in the current terminal. Once it starts, show me the local URL.`}</PromptBlock>

      <p className="text-muted-foreground leading-7 mb-4">
        Claude will start <ProductBadge name="storybook" /> and print a local link. Open <strong className="text-foreground">that exact URL</strong> in your browser.
      </p>

      <Callout variant="tip" title="Keep Storybook running">
        Leave that terminal alone with <ProductBadge name="storybook" /> running. Use another terminal (and another <ProductBadge name="claude" /> session) for implementation work.
      </Callout>
    </section>
  )
}
