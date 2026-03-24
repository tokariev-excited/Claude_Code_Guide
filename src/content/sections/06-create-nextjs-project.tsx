import { SectionHeader } from "@/components/docs/section-header"
import { CodeBlock } from "@/components/docs/code-block"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"

export default async function CreateNextjsProject() {
  return (
    <section>
      <SectionHeader
        id="create-nextjs-project"
        number={6}
        title="Create the Next.js Project"
        description="Let Claude scaffold and run your dashboard app."
      />

      {/* 6.1 Run create-next-app */}
      <h3 id="run-create-next-app" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        6.1. Let Claude run create-next-app
      </h3>

      <StepList
        steps={[
          {
            title: "In Cursor, with your workspace folder opened, start Claude in Plan Mode from the terminal.",
            children: (
              <CodeBlock code={`claude --permission-mode plan`} language="bash" />
            ),
          },
          {
            title: "When Claude asks what you want to do, answer with something like:",
            children: (
              <PromptBlock>{`We are starting a new Next.js + TypeScript + Tailwind project for an admin dashboard prototype.

Please:
- Plan how to create the project using create-next-app.
- Then run the necessary commands in this terminal to generate a project called dashboard-prototype.
- Use TypeScript, ESLint and Tailwind, and the App Router.`}</PromptBlock>
            ),
          },
          {
            title: "Claude will use Plan Mode to propose the commands and steps. Review the plan, and once it looks correct, tell Claude to execute it (it will exit Plan Mode or switch to a mode that can run commands, depending on configuration).",
          },
        ]}
      />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        After <strong className="text-foreground">npx create-next-app@latest dashboard-prototype</strong> completes, you will have a new folder <strong className="text-foreground">dashboard-prototype</strong>.
      </p>

      {/* 6.2 Open the new project root in Cursor */}
      <h3 id="open-project-cursor" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        6.2. Open the new project root in Cursor
      </h3>

      <StepList
        steps={[
          {
            title: "In Cursor, go to File \u2192 Open Folder.",
          },
          {
            title: "Open the dashboard-prototype folder directly.",
          },
          {
            title: "You should see app/, public/, package.json, tailwind.config.js, etc.",
          },
        ]}
      />

      {/* 6.3 Ask Claude to install dependencies and run the dev server */}
      <h3 id="install-deps-dev-server" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">
        6.3. Ask Claude to install dependencies and run the dev server
      </h3>

      <StepList
        steps={[
          {
            title: "Open a terminal in Cursor at the root of dashboard-prototype.",
          },
          {
            title: "Start a new Claude session in Plan Mode.",
            children: (
              <CodeBlock code={`claude --permission-mode plan`} language="bash" />
            ),
          },
          {
            title: "Say:",
            children: (
              <PromptBlock>{`Please plan and then run the commands needed to:
- Install dependencies for this Next.js app.
- Start the development server on port 3000.

Use npm, and once the plan is ready, execute it.`}</PromptBlock>
            ),
          },
          {
            title: "Claude will likely plan to run npm install and npm run dev. Approve and let it execute.",
          },
          {
            title: "Open a browser and go to http://localhost:3000. You should see the default Next.js starter page.",
          },
        ]}
      />

      <Callout variant="tip" title="Checkpoint">
        Your base app is now running locally.
      </Callout>
    </section>
  )
}
