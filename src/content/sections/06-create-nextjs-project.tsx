import { SectionHeader } from "@/components/docs/section-header"
import { CodeBlock } from "@/components/docs/code-block"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function CreateNextjsProject() {
  return (
    <section>
      <SectionHeader
        id="create-nextjs-project"
        number={6}
        title="Create the Next.js Project with Claude"
        description="Let Claude scaffold and run your dashboard app."
      />

      {/* 6.1 Ask Claude to Generate a Next.js App */}
      <h3 id="ask-claude-generate-app" className="scroll-mt-20">
        6.1. Ask Claude to Generate a Next.js App
      </h3>

      <StepList
        steps={[
          {
            title: "In a terminal at your workspace root, start Claude.",
            children: (
              <CodeBlock code={`claude`} language="bash" />
            ),
          },
          {
            title: "Make sure it is in Plan Mode (press Shift+Tab until Plan Mode is selected).",
          },
          {
            title: "Give it the following prompt:",
            children: (
              <PromptBlock>{`We are starting a new Next.js + TypeScript + Tailwind project for a dashboard prototype.

Please:

1. Plan how to create the project using create-next-app.
2. Then run the necessary commands in this terminal to generate a project called "dashboard-prototype".
3. Enable TypeScript, ESLint and Tailwind, and use the App Router.
4. After the project is created, change directory into it.

Show me the plan first. After I confirm, execute the plan.`}</PromptBlock>
            ),
          },
          {
            title: "Review the plan. If it looks good, tell Claude to proceed. It will run the npx create-next-app command and set everything up for you.",
          },
        ]}
      />

      {/* 6.2 Open the Project in Cursor */}
      <h3 id="open-project-cursor" className="scroll-mt-20">
        6.2. Open the Project in <ProductBadge name="cursor" />
      </h3>

      <StepList
        steps={[
          {
            title: "In Cursor, go to File \u2192 Open Folder.",
          },
          {
            title: "Choose the dashboard-prototype folder.",
          },
          {
            title: "You should now see app/, public/, package.json and other standard files.",
          },
        ]}
      />

      {/* 6.3 Ask Claude to Install Dependencies and Start a Local Server */}
      <h3 id="install-deps-dev-server" className="scroll-mt-20">
        6.3. Ask Claude to Install Dependencies and Start a Local Server
      </h3>

      <StepList
        steps={[
          {
            title: "Open a terminal at the root of dashboard-prototype.",
          },
          {
            title: "Start Claude again and ensure Plan Mode is enabled (Shift+Tab if needed).",
            children: (
              <CodeBlock code={`claude`} language="bash" />
            ),
          },
          {
            title: "Give it the following prompt:",
            children: (
              <PromptBlock>{`Please:

1. Plan how to install all dependencies for this Next.js app.
2. Then run the commands in this terminal to install them.
3. After installation, start the local development server and keep it running.

Show me the plan first, then execute it.`}</PromptBlock>
            ),
          },
          {
            title: "Claude will typically run npm install and then a dev server command.",
          },
          {
            title: "When the server starts, Claude will show a local URL. Open the exact link Claude prints in your browser, instead of relying on a hard-coded URL.",
          },
        ]}
      />

      <Callout variant="tip" title="Keep the server running">
        Leave that terminal alone with the server running. Open another terminal in <ProductBadge name="cursor" /> and start a separate <ProductBadge name="claude" /> session there for further work.
      </Callout>
    </section>
  )
}
