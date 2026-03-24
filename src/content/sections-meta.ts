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
    title: "Goal and High-Level Flow",
    description: "What this guide covers and the end-to-end workflow.",
    subsections: [],
  },
  {
    id: "tools-tech-stack",
    number: 2,
    title: "Tools and Tech Stack",
    description: "Every tool and technology explained in plain language.",
    subsections: [
      { id: "frontend-tech", title: "Frontend Tech" },
      { id: "designer-facing-tools", title: "Designer-Facing Tools" },
    ],
  },
  {
    id: "prepare-figma",
    number: 3,
    title: "Prepare Your Figma Dashboard",
    description: "Structure your Figma file for optimal code extraction.",
    subsections: [
      { id: "structure-figma-file", title: "Structure the Figma File" },
      { id: "set-sharing-links", title: "Set Sharing and Copy Links" },
    ],
  },
  {
    id: "install-prerequisites",
    number: 4,
    title: "Install Prerequisites and Claude Code CLI",
    description: "Install Node.js, Git, Cursor, Claude Code, Figma MCP, and create accounts.",
    subsections: [
      { id: "install-nodejs", title: "Install Node.js" },
      { id: "install-git", title: "Install Git" },
      { id: "install-cursor", title: "Install and Open Cursor" },
      { id: "install-claude-code", title: "Install Claude Code CLI" },
      { id: "connect-figma-mcp", title: "Connect Figma MCP" },
      { id: "create-accounts", title: "Create GitHub and Vercel Accounts" },
    ],
  },
  {
    id: "start-claude-code",
    number: 5,
    title: "Start Claude Code in Cursor",
    description: "Open your workspace and launch a Claude Code terminal session.",
    subsections: [
      { id: "open-workspace", title: "Open the Workspace Folder" },
      { id: "launch-plan-mode", title: "Launch Claude in Plan Mode" },
      { id: "default-plan-mode", title: "Make Plan Mode the Default" },
    ],
  },
  {
    id: "create-nextjs-project",
    number: 6,
    title: "Create the Next.js Project",
    description: "Let Claude scaffold and run your dashboard app.",
    subsections: [
      { id: "run-create-next-app", title: "Run create-next-app" },
      { id: "open-project-cursor", title: "Open the Project in Cursor" },
      { id: "install-deps-dev-server", title: "Install Deps and Run Dev Server" },
    ],
  },
  {
    id: "init-and-claude-md",
    number: 7,
    title: "/init and CLAUDE.md",
    description: "Generate persistent project memory for Claude Code.",
    subsections: [
      { id: "run-init", title: "Run /init" },
      { id: "claude-md-contents", title: "What CLAUDE.md Should Contain" },
      { id: "workflow-orchestration", title: "Add Workflow Orchestration Rules" },
    ],
  },
  {
    id: "prd-screen-specs",
    number: 8,
    title: "PRD & Screen Specs",
    description: "Write a short PRD and per-screen specs so Claude has full context.",
    subsections: [
      { id: "create-docs-structure", title: "Create the Docs Structure" },
      { id: "draft-prd", title: "Draft the PRD" },
      { id: "draft-screen-specs", title: "Draft Per-Screen Specs" },
    ],
  },
  {
    id: "extract-design-tokens",
    number: 9,
    title: "Extract Design Tokens",
    description: "Convert your Figma design system into CSS variables and Tailwind config.",
    subsections: [
      { id: "prepare-design-system-link", title: "Prepare the Design System Link" },
      { id: "prompt-create-tokens", title: "Prompt Claude to Create Tokens" },
      { id: "inspect-result", title: "Inspect the Result" },
    ],
  },
  {
    id: "set-up-storybook",
    number: 10,
    title: "Set Up Storybook",
    description: "Install Storybook to visually review components in isolation.",
    subsections: [
      { id: "install-configure-storybook", title: "Install and Configure" },
      { id: "run-storybook-locally", title: "Run Storybook Locally" },
      { id: "storybook-global-styles", title: "Ensure Global Styles" },
    ],
  },
  {
    id: "build-ui-components",
    number: 11,
    title: "Build UI Components",
    description: "Create reusable React components from your Figma design system.",
    subsections: [
      { id: "general-component-pattern", title: "General Pattern" },
      { id: "button-example", title: "Button Component Example" },
      { id: "other-base-components", title: "Other Base Components" },
      { id: "table-component", title: "Table Component" },
    ],
  },
  {
    id: "refactor-components",
    number: 12,
    title: "Refactor Components",
    description: "Ask Claude to review and refactor components for quality.",
    subsections: [],
  },
  {
    id: "build-pages-routing",
    number: 13,
    title: "Build Pages & Routing",
    description: "Assemble full pages and wire navigation between them.",
    subsections: [
      { id: "app-shell-layout", title: "Create the App Shell Layout" },
      { id: "dashboard-page", title: "Build the Dashboard Page" },
      { id: "users-settings-pages", title: "Build Users & Settings Pages" },
      { id: "refine-visuals", title: "Refine Page Visuals" },
    ],
  },
  {
    id: "mock-data-interactions",
    number: 14,
    title: "Mock Data & Interactions",
    description: "Add realistic mock data and client-side behavior.",
    subsections: [
      { id: "create-mock-data", title: "Create Mock Data Files" },
      { id: "use-mock-data", title: "Use Mock Data on Pages" },
      { id: "add-filters-search", title: "Add Filters and Search" },
    ],
  },
  {
    id: "verify-with-storybook",
    number: 15,
    title: "Verify with Storybook",
    description: "Use Storybook to check all component variants and edge cases.",
    subsections: [],
  },
  {
    id: "push-to-github",
    number: 16,
    title: "Push to GitHub",
    description: "Initialize Git and push your project to a GitHub repository.",
    subsections: [
      { id: "init-git", title: "Initialize Git" },
      { id: "create-github-repo", title: "Create a GitHub Repository" },
      { id: "connect-push", title: "Connect and Push" },
    ],
  },
  {
    id: "deploy-to-vercel",
    number: 17,
    title: "Deploy to Vercel",
    description: "Connect GitHub to Vercel and get a shareable URL.",
    subsections: [
      { id: "connect-github-vercel", title: "Connect GitHub and Vercel" },
      { id: "create-vercel-project", title: "Create a Vercel Project" },
      { id: "auto-updates", title: "Automatic Updates on Push" },
    ],
  },
  {
    id: "better-prompts-ai",
    number: 18,
    title: "Better Prompts with AI",
    description: "Use other AI tools to craft better prompts for Claude Code.",
    subsections: [],
  },
  {
    id: "final-checklist",
    number: 19,
    title: "Final Checklist",
    description: "Verify everything before sharing the Vercel link.",
    subsections: [],
  },
]
