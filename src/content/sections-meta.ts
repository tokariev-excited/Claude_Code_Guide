export interface SubsectionMeta {
  id: string
  title: string
}

export interface SectionMeta {
  id: string
  number: number
  title: string
  description: string
  subsections: SubsectionMeta[]
}

export const sections: SectionMeta[] = [
  {
    id: "introduction",
    number: 1,
    title: "What This Guide Is and How to Use It",
    description: "What this guide covers, who it is for, and the final outcome.",
    subsections: [],
  },
  {
    id: "tools-tech-stack",
    number: 2,
    title: "Tools and Technology Overview",
    description: "Every tool and technology explained in plain language.",
    subsections: [
      { id: "technology-stack", title: "Technology Stack" },
      { id: "high-level-workflow", title: "High-Level Workflow" },
    ],
  },
  {
    id: "prepare-figma",
    number: 3,
    title: "Prepare Your Figma Dashboard and Design System",
    description: "Structure your Figma file for optimal code extraction.",
    subsections: [
      { id: "structure-figma-file", title: "Structure Your Figma File" },
      { id: "sharing-settings", title: "Sharing Settings" },
    ],
  },
  {
    id: "install-prerequisites",
    number: 4,
    title: "Install Prerequisites",
    description: "Install Node.js, Git, Cursor, Claude Code CLI, Figma MCP, and create accounts.",
    subsections: [
      { id: "install-nodejs", title: "Install Node.js" },
      { id: "install-git", title: "Install Git" },
      { id: "install-cursor", title: "Install Cursor" },
      { id: "install-claude-code", title: "Install Claude Code CLI" },
      { id: "connect-figma-mcp", title: "Connect Figma MCP" },
      { id: "create-accounts", title: "Create GitHub and Vercel Accounts" },
    ],
  },
  {
    id: "start-claude-code",
    number: 5,
    title: "Working with Claude in Cursor's Terminal",
    description: "Open your workspace and launch Claude Code terminal sessions.",
    subsections: [
      { id: "open-workspace", title: "Open Your Workspace in Cursor" },
      { id: "start-claude-terminal", title: "Start Claude in the Terminal" },
      { id: "switching-modes", title: "Switching Between Plan Mode and Normal Mode" },
      { id: "multiple-terminals", title: "Using Multiple Terminals in Cursor" },
    ],
  },
  {
    id: "create-nextjs-project",
    number: 6,
    title: "Create the Next.js Project with Claude",
    description: "Let Claude scaffold and run your dashboard app.",
    subsections: [
      { id: "ask-claude-generate-app", title: "Ask Claude to Generate a Next.js App" },
      { id: "open-project-cursor", title: "Open the Project in Cursor" },
      { id: "install-deps-dev-server", title: "Install Deps and Start Dev Server" },
    ],
  },
  {
    id: "init-and-claude-md",
    number: 7,
    title: "Initialize /init and Configure CLAUDE.md",
    description: "Generate persistent project memory for Claude Code.",
    subsections: [
      { id: "run-init", title: "Run /init" },
      { id: "claude-md-contents", title: "Tell Claude What to Put into CLAUDE.md" },
    ],
  },
  {
    id: "prd-screen-specs",
    number: 8,
    title: "Add PRD and Screen Specs",
    description: "Write a short PRD and per-screen specs so Claude has full context.",
    subsections: [
      { id: "create-docs-structure", title: "Ask Claude to Create Documentation Files" },
      { id: "draft-prd", title: "Write the PRD" },
      { id: "draft-screen-specs", title: "Write Per-Screen Specs" },
    ],
  },
  {
    id: "extract-design-tokens",
    number: 9,
    title: "Extract Design Tokens from Figma via MCP",
    description: "Convert your Figma design system into CSS variables and Tailwind config.",
    subsections: [
      { id: "prepare-design-system-link", title: "Get the Design System Frame URL" },
      { id: "prompt-create-tokens", title: "Ask Claude to Create Tokens and Connect Tailwind" },
    ],
  },
  {
    id: "set-up-storybook",
    number: 10,
    title: "Set Up Storybook",
    description: "Install Storybook to visually review components in isolation.",
    subsections: [
      { id: "install-configure-storybook", title: "Install and Configure Storybook" },
      { id: "run-storybook-locally", title: "Run Storybook and Open It" },
    ],
  },
  {
    id: "build-ui-components",
    number: 11,
    title: "Build Core UI Components from Figma",
    description: "Create reusable React components from your Figma design system.",
    subsections: [
      { id: "general-component-pattern", title: "General Strategy and Figma Context Limits" },
      { id: "button-example", title: "Button Component" },
      { id: "table-component", title: "Table for Users" },
    ],
  },
  {
    id: "refine-components",
    number: 12,
    title: "Refining Components with Screenshots",
    description: "Use screenshots to visually compare and refine your components.",
    subsections: [],
  },
  {
    id: "build-pages-routing",
    number: 13,
    title: "Build the Shared Layout and Routing",
    description: "Create the app shell and wire navigation between pages.",
    subsections: [
      { id: "shared-layout", title: "Start with Shared Layout" },
      { id: "create-pages-navigation", title: "Create Pages and Connect Navigation" },
    ],
  },
  {
    id: "mock-data-interactions",
    number: 14,
    title: "Add Mock Data and Client-Side Behavior",
    description: "Add realistic mock data and client-side interactions.",
    subsections: [
      { id: "create-mock-data", title: "Create Mock Data Files" },
      { id: "use-mock-data", title: "Connect Mock Data to the Users Page" },
      { id: "add-filters-search", title: "Implement Filters and Search" },
    ],
  },
  {
    id: "verify-with-storybook",
    number: 15,
    title: "Verify Components and States with Storybook",
    description: "Use Storybook to check all component variants and edge cases.",
    subsections: [],
  },
  {
    id: "push-to-github",
    number: 16,
    title: "Git and GitHub",
    description: "Initialize Git, commit, and push your project to GitHub.",
    subsections: [
      { id: "init-git", title: "Initialize Git and First Commit" },
      { id: "create-github-repo", title: "Create an Empty GitHub Repository" },
      { id: "connect-push", title: "Connect Local Repo and Push" },
    ],
  },
  {
    id: "deploy-to-vercel",
    number: 17,
    title: "Deploy to Vercel",
    description: "Import your GitHub project into Vercel and get a live URL.",
    subsections: [
      { id: "import-project-github", title: "Import the Project from GitHub" },
      { id: "auto-redeploys", title: "Automatic Redeploys" },
    ],
  },
  {
    id: "better-prompts-ai",
    number: 18,
    title: "Using Other AI Tools as Prompt Designers",
    description: "Use other AI tools to craft better prompts for Claude Code.",
    subsections: [],
  },
  {
    id: "final-checklist",
    number: 19,
    title: "Final Checklist Before Sharing the Link",
    description: "Verify everything before sharing the Vercel link.",
    subsections: [],
  },
]
