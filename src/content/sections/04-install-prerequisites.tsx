import { SectionHeader } from "@/components/docs/section-header"
import { CodeBlock } from "@/components/docs/code-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"
import { ProductBadge } from "@/components/docs/product-icon"

export default async function InstallPrerequisites() {
  return (
    <section>
      <SectionHeader
        id="install-prerequisites"
        number={4}
        title="Install Prerequisites"
        description="Install Node.js, Git, Cursor, Claude Code CLI, Figma MCP, and create accounts."
      />

      {/* 4.1 Install Node.js */}
      <h3 id="install-nodejs" className="scroll-mt-20">
        4.1. Install <ProductBadge name="nodejs" />
      </h3>

      <StepList steps={[
        {
          title: "Go to https://nodejs.org.",
          children: (
            <p>Visit <a href="https://nodejs.org" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://nodejs.org</a>.</p>
          ),
        },
        {
          title: "Download the LTS (Recommended) version for your OS.",
        },
        {
          title: "Run the installer and keep default options.",
        },
        {
          title: "After installation, open Terminal (macOS) or PowerShell / Command Prompt (Windows). Check:",
          children: (
            <div>
              <CodeBlock code={`node -v`} language="bash" />
              <p className="mt-2">If you see a version like <code className="text-xs bg-muted px-1 py-0.5 rounded">v20.x.x</code>, Node.js is installed correctly.</p>
            </div>
          ),
        },
      ]} />

      {/* 4.2 Install Git */}
      <h3 id="install-git" className="scroll-mt-20">
        4.2. Install <ProductBadge name="git" />
      </h3>

      <StepList steps={[
        {
          title: "Go to https://git-scm.com.",
          children: (
            <p>Visit <a href="https://git-scm.com" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://git-scm.com</a>.</p>
          ),
        },
        {
          title: "Download and run the installer for your OS.",
        },
        {
          title: "Keep default options.",
        },
        {
          title: "In a terminal, check:",
          children: (
            <div>
              <CodeBlock code={`git --version`} language="bash" />
              <p className="mt-2">If you see <code className="text-xs bg-muted px-1 py-0.5 rounded">git version ...</code>, Git is installed.</p>
            </div>
          ),
        },
      ]} />

      {/* 4.3 Install Cursor */}
      <h3 id="install-cursor" className="scroll-mt-20">
        4.3. Install <ProductBadge name="cursor" />
      </h3>

      <StepList steps={[
        {
          title: "Go to https://www.cursor.com and download Cursor for your OS.",
          children: (
            <p>Visit <a href="https://www.cursor.com" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://www.cursor.com</a>.</p>
          ),
        },
        {
          title: "Install and open Cursor.",
        },
        {
          title: "Sign in (GitHub / Google).",
        },
        {
          title: "Look around:",
          children: (
            <ul className="list-disc list-inside space-y-1">
              <li>Left sidebar: files.</li>
              <li>Editor area: code.</li>
              <li>Bottom: <strong className="text-foreground">Terminal</strong>.</li>
              <li>Right side: optional AI panels (we will focus on the terminal).</li>
            </ul>
          ),
        },
      ]} />

      {/* 4.4 Install Claude Code CLI */}
      <h3 id="install-claude-code" className="scroll-mt-20">
        4.4. Install <ProductBadge name="claude" /> Code CLI
      </h3>

      <StepList steps={[
        {
          title: "Open the Claude Code quickstart page in your browser.",
          children: (
            <p>Follow the installation instructions for the <strong className="text-foreground">CLI</strong> exactly as written there (copy the command from the docs and paste into your system terminal): <a href="https://code.claude.com/docs/en/quickstart" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://code.claude.com/docs/en/quickstart</a></p>
          ),
        },
        {
          title: "After installation, close and reopen your terminal.",
        },
        {
          title: "Verify the CLI:",
          children: (
            <div>
              <CodeBlock code={`claude --help`} language="bash" />
              <p className="mt-2">You should see CLI help output, not {"\u201C"}command not found{"\u201D"}.</p>
            </div>
          ),
        },
      ]} />

      {/* 4.5 Connect Figma MCP */}
      <h3 id="connect-figma-mcp" className="scroll-mt-20">
        4.5. Connect <ProductBadge name="figma" /> MCP
      </h3>

      <StepList steps={[
        {
          title: "Open the official Figma MCP setup page for Claude Code.",
        },
        {
          title: "Follow the instructions there exactly as written.",
          children: (
            <p>Do <strong className="text-foreground">not</strong> use example commands from this guide; always copy the command from the official page, because it may change over time.</p>
          ),
        },
        {
          title: "After setup, start Claude (CLI) once and confirm that Figma MCP is visible / available according to the docs.",
        },
      ]} />

      <Callout variant="note">
        Once this works, <ProductBadge name="claude" /> can open and read your <ProductBadge name="figma" /> frames by URL.
      </Callout>

      {/* 4.6 Create Accounts */}
      <h3 id="create-accounts" className="scroll-mt-20">
        4.6. Create <ProductBadge name="github" /> and <ProductBadge name="vercel" /> Accounts
      </h3>

      <p className="text-muted-foreground leading-7 mb-4">
        <strong className="text-foreground">GitHub:</strong> Go to <a href="https://github.com" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://github.com</a>, sign up or log in.
      </p>

      <p className="text-muted-foreground leading-7 mb-4">
        <strong className="text-foreground">Vercel:</strong> Go to <a href="https://vercel.com" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com</a>, sign up with <strong className="text-foreground">Continue with GitHub</strong> and allow access to your repositories.
      </p>
    </section>
  )
}
