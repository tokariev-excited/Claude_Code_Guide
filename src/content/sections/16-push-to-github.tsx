import { SectionHeader } from "@/components/docs/section-header"
import { CodeBlock } from "@/components/docs/code-block"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"

export default async function PushToGitHub() {
  return (
    <section>
      <SectionHeader
        id="push-to-github"
        number={16}
        title="Push to GitHub"
        description="Initialize Git and push your project to a GitHub repository."
      />

      <h3 id="init-git" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">16.1. Initialize Git in the project</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Ask Claude to handle the Git initialization:
      </p>

      <PromptBlock>{`In this project root, please initialize Git and make an initial commit.

Steps to run in the terminal:
- git init
- git add .
- git commit -m "Initial dashboard prototype from Figma with Claude"

If Git user.name and user.email are not configured, please show me the commands you will run to set them, then run them as well.`}</PromptBlock>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Claude will likely run:
      </p>

      <CodeBlock code={`git init
git add .
git commit -m "Initial dashboard prototype from Figma with Claude"`} language="bash" />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        If Git asks for name and email, Claude can configure them using:
      </p>

      <CodeBlock code={`git config --global user.name "Your Name"
git config --global user.email "you@example.com"`} language="bash" />

      <h3 id="create-github-repo" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">16.2. Create an empty repository on GitHub</h3>

      <StepList steps={[
        { title: "Go to https://github.com and click New repository." },
        { title: "Name it something like dashboard-prototype." },
        { title: "Leave all checkboxes (README, .gitignore, license) unchecked so the repository starts empty." },
        { title: "Click Create repository." },
      ]} />

      <h3 id="connect-push" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">16.3. Connect the local repo to GitHub and push</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        On the GitHub repo page, you will see a section titled &ldquo;...or push an existing repository from the command line&rdquo;.
      </p>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Copy the commands shown there (they look like):
      </p>

      <CodeBlock code={`git remote add origin https://github.com/YOUR_USERNAME/dashboard-prototype.git
git branch -M main
git push -u origin main`} language="bash" />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Either paste them into the Cursor terminal yourself or ask Claude to run them.
      </p>

      <Callout variant="tip" title="Code is now on GitHub">
        After this, your code is stored on GitHub and ready to be deployed.
      </Callout>
    </section>
  )
}
