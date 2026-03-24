import { SectionHeader } from "@/components/docs/section-header"
import { CodeBlock } from "@/components/docs/code-block"
import { StepList } from "@/components/docs/step-list"
import { Callout } from "@/components/docs/callout"

export default async function InstallPrerequisites() {
  return (
    <section>
      <SectionHeader
        id="install-prerequisites"
        number={4}
        title="Install Prerequisites and Claude Code CLI"
        description="Install Node.js, Git, Cursor, Claude Code, Figma MCP, and create accounts."
      />

      {/* 4.1 Install Node.js */}
      <h3 id="install-nodejs" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">4.1. Install Node.js (runtime for tools and dev server)</h3>

      <StepList steps={[
        {
          title: "Open your browser and go to https://nodejs.org.",
          children: (
            <p>Visit <a href="https://nodejs.org" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://nodejs.org</a>.</p>
          ),
        },
        {
          title: "On the home page, you will see two big download buttons: LTS (Recommended) and Current.",
        },
        {
          title: "Click the LTS button.",
          children: <p>This is the stable version intended for most projects.</p>,
        },
        {
          title: "A file will download:",
          children: (
            <ul className="list-disc list-inside space-y-1">
              <li>On Windows: a <code className="text-xs bg-muted px-1 py-0.5 rounded">.msi</code> installer.</li>
              <li>On macOS: a <code className="text-xs bg-muted px-1 py-0.5 rounded">.pkg</code> installer.</li>
            </ul>
          ),
        },
        { title: "Open the downloaded file." },
        {
          title: "In the installer windows, keep clicking Next, accept the license, and keep defaults as they are.",
        },
        {
          title: "Click Install, wait until it finishes, then Finish.",
        },
        {
          title: "Verify installation.",
          children: (
            <div>
              <p className="mb-2">Open <strong className="text-foreground">Terminal</strong> (macOS) or <strong className="text-foreground">Command Prompt / PowerShell</strong> (Windows). Type:</p>
              <CodeBlock code={`node -v`} language="bash" />
              <p className="mt-2">If you see something like <code className="text-xs bg-muted px-1 py-0.5 rounded">v20.x.x</code>, Node.js is installed correctly.</p>
            </div>
          ),
        },
      ]} />

      {/* 4.2 Install Git */}
      <h3 id="install-git" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">4.2. Install Git (version control)</h3>

      <StepList steps={[
        {
          title: "Go to https://git-scm.com.",
          children: (
            <p>Visit <a href="https://git-scm.com" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://git-scm.com</a>.</p>
          ),
        },
        { title: "Click Download for your operating system." },
        { title: "Run the downloaded installer." },
        {
          title: "In the installer, you can keep all default options and repeatedly click Next.",
        },
        {
          title: "When the installer finishes, open Terminal / Command Prompt. Type:",
          children: (
            <div>
              <CodeBlock code={`git --version`} language="bash" />
              <p className="mt-2">If you see <code className="text-xs bg-muted px-1 py-0.5 rounded">git version 2.xx.x</code>, Git is installed.</p>
            </div>
          ),
        },
      ]} />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Git will later allow you to track changes and push your project to GitHub.
      </p>

      {/* 4.3 Install Cursor */}
      <h3 id="install-cursor" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">4.3. Install and Open Cursor</h3>

      <StepList steps={[
        {
          title: "Go to https://www.cursor.com and click Download.",
          children: (
            <p>Visit <a href="https://www.cursor.com" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://www.cursor.com</a>.</p>
          ),
        },
        { title: "Download the installer for your OS (Windows or macOS)." },
        { title: "Install Cursor like any regular app." },
        { title: "Open Cursor." },
        { title: "Sign in (GitHub or Google is common)." },
        {
          title: "Explore the interface briefly:",
          children: (
            <ul className="list-disc list-inside space-y-1">
              <li>Left sidebar: files and folders.</li>
              <li>Center: open files.</li>
              <li>Bottom: Terminal.</li>
              <li>Right: optional AI chat panel (we will mostly use the terminal).</li>
            </ul>
          ),
        },
      ]} />

      {/* 4.4 Install Claude Code CLI */}
      <h3 id="install-claude-code" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">4.4. Install Claude Code CLI and Verify It Works</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        Claude Code&apos;s CLI is what you run in the terminal with the <code className="text-xs bg-muted px-1 py-0.5 rounded">claude</code> command. Installation steps may change over time, so always follow the latest instructions in the official quickstart.
      </p>

      <StepList steps={[
        {
          title: "Open the official quickstart page in your browser.",
          children: (
            <p>Visit <a href="https://code.claude.com/docs/en/quickstart" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://code.claude.com/docs/en/quickstart</a>.</p>
          ),
        },
        {
          title: "Follow the \"Install the CLI\" instructions for your operating system.",
          children: (
            <p>This is usually a single command you paste into your system terminal (for example, a <code className="text-xs bg-muted px-1 py-0.5 rounded">{`curl ... | sh`}</code> script or a package-manager command).</p>
          ),
        },
        { title: "When installation finishes, close and reopen your terminal." },
        {
          title: "Verify the CLI is available.",
          children: (
            <div>
              <p className="mb-2">In your system Terminal, type:</p>
              <CodeBlock code={`claude --help`} language="bash" />
              <p className="mt-2">You should see the Claude Code help text, not a {"\u201C"}command not found{"\u201D"} error.</p>
            </div>
          ),
        },
      ]} />

      <Callout variant="tip">
        Once this works, you can also run <code className="text-xs bg-muted px-1 py-0.5 rounded">claude</code> inside Cursor&apos;s integrated terminal.
      </Callout>

      {/* 4.5 Connect Figma MCP */}
      <h3 id="connect-figma-mcp" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">4.5. Connect Figma MCP to Claude Code</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        The goal here is to let Claude read your Figma frames via URLs.
      </p>

      <StepList steps={[
        {
          title: "Open the Figma MCP setup guide.",
          children: (
            <p>Find the guide: <strong className="text-foreground">{"\u201C"}How to set up the Figma remote MCP server{"\u201D"}</strong>.</p>
          ),
        },
        {
          title: "Follow the instructions to register the MCP server with Claude.",
          children: (
            <div>
              <p className="mb-2">This usually looks like: open your system Terminal and run a command similar to:</p>
              <CodeBlock code={`claude mcp add --transport http figma-remote-mcp https://mcp.figma.com/mcp`} language="bash" />
              <p className="mt-2">(Use the exact command from the official docs.)</p>
            </div>
          ),
        },
        {
          title: "Confirm the MCP server is connected.",
          children: (
            <p>In a Claude session (system terminal or Cursor terminal), list available MCP providers and confirm <code className="text-xs bg-muted px-1 py-0.5 rounded">figma-remote-mcp</code> is present and connected.</p>
          ),
        },
        {
          title: "Authorize Figma access.",
          children: (
            <p>A browser window will open the first time, asking you to authorize Figma access. Click <strong className="text-foreground">Allow / Authorize</strong>.</p>
          ),
        },
      ]} />

      <Callout variant="note">
        Claude can now open and read your Figma file contents by link, instead of just seeing image exports.
      </Callout>

      {/* 4.6 Create Accounts */}
      <h3 id="create-accounts" className="text-base font-semibold mt-6 mb-2 scroll-mt-20">4.6. Create GitHub and Vercel Accounts</h3>

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        <strong className="text-foreground">GitHub:</strong>
      </p>

      <StepList steps={[
        {
          title: "Go to https://github.com.",
          children: (
            <p>Visit <a href="https://github.com" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://github.com</a>.</p>
          ),
        },
        { title: "Sign up if you do not already have an account." },
        { title: "Confirm your email." },
      ]} />

      <p className="text-sm text-muted-foreground leading-7 mb-4">
        <strong className="text-foreground">Vercel:</strong>
      </p>

      <StepList steps={[
        {
          title: "Go to https://vercel.com.",
          children: (
            <p>Visit <a href="https://vercel.com" className="text-docs-accent hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com</a>.</p>
          ),
        },
        { title: "Click Continue with GitHub." },
        {
          title: "Authorize Vercel to access your GitHub repositories.",
          children: <p>You can limit it to selected repos later.</p>,
        },
      ]} />
    </section>
  )
}
