import Image from "next/image"
import { SectionHeader } from "@/components/docs/section-header"
import { PromptBlock } from "@/components/docs/prompt-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function PushToGitHub() {
  return (
    <section>
      <SectionHeader
        id="push-to-github"
        number={16}
        title="Git and GitHub"
        description="Initialize Git, commit, and push your project to GitHub."
      />

      <h3 id="init-git" className="scroll-mt-20">16.1. Initialize Git and First Commit</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        In a <ProductBadge name="claude" /> session at the project root, ask Claude to handle the <ProductBadge name="git" /> initialization:
      </p>

      <PromptBlock>{`Please initialize Git for this project and create the first commit.

Steps:

1) Run git init.
2) Stage all files.
3) Commit with message "Initial dashboard prototype from Figma with Claude".

If Git user.name and user.email are not configured, show me the commands you will run to set them, then run them.`}</PromptBlock>

      <p className="text-muted-foreground leading-7 mb-4">
        <ProductBadge name="claude" /> will execute the needed commands and configure name/email if required.
      </p>

      <h3 id="create-github-repo" className="scroll-mt-20">16.2. Create an Empty GitHub Repository</h3>

      <StepList steps={[
        { title: "Open GitHub and click New repository.", children: <Image src="/github-new-repository.png" alt="GitHub dashboard showing the New repository button highlighted" width={1456} height={816} className="mt-3 rounded-lg border border-border w-full" /> },
        { title: "Name it something like dashboard-prototype." },
        { title: "Leave README / .gitignore unchecked (empty repo)." },
        { title: "Click Create repository." },
      ]} />

      <p className="text-muted-foreground leading-7 mb-4">
        <ProductBadge name="github" /> will show you a section titled &ldquo;push an existing repository from the command line&rdquo;.
      </p>

      <h3 id="connect-push" className="scroll-mt-20">16.3. Connect Local Repo and Push</h3>

      <p className="text-muted-foreground leading-7 mb-4">
        Either copy the commands from <ProductBadge name="github" /> into the <ProductBadge name="cursor" /> terminal yourself or ask <ProductBadge name="claude" /> to run them:
      </p>

      <PromptBlock>{`Please connect this local repository to the new GitHub repo I just created and push the current main branch.

Use the commands shown in the "push an existing repository from the command line" section on GitHub.`}</PromptBlock>

      <p className="text-muted-foreground leading-7 mb-4">
        After this, your code is on <ProductBadge name="github" />.
      </p>

      <Callout variant="tip" title="Code is now on GitHub">
        After this, your code is stored on <ProductBadge name="github" /> and ready to be deployed.
      </Callout>
    </section>
  )
}
