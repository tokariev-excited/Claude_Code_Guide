# Figma to Production‑Like Dashboard Prototype with Claude Code, Cursor, Figma MCP, Storybook, GitHub and Vercel
## 1. Goal and high‑level flow
This guide shows a non‑coder designer how to turn a Figma admin dashboard into a live, clickable web prototype deployed on Vercel, using **Claude Code in the terminal inside Cursor** as the main coding agent. The result is a Next.js dashboard app with realistic interactions (navigation, filters, tables, basic forms) that runs entirely on the front end with mock data (no real backend or database).[^1][^2][^3]

End‑to‑end flow:

1. Prepare your Figma dashboard and design system.
2. Install Node.js, Git, Cursor, **Claude Code CLI**, and enable Figma MCP.[^2][^4][^1]
3. Open a Claude Code terminal session in Cursor and initialize the repo with `/init` to generate a project‑specific `CLAUDE.md`.[^5][^6]
4. Write a short PRD and per‑screen specs in markdown.
5. Use Claude + Figma MCP to extract design tokens into code.[^2]
6. Ask Claude (in the terminal) to set up Storybook so you can visually review every component in the browser.[^2]
7. Have Claude build reusable UI components from your Figma design system and wire them into Storybook.[^2]
8. Have Claude build complete dashboard pages (screens), connect routes and navigation between pages, and refine them.
9. Add mock data and simple client‑side interactions (filters, search, basic forms).
10. Initialize Git, push the project to GitHub, and connect it to Vercel for deployment.[^7][^8]
11. Optionally use other AI tools to help you craft better prompts before sending them to Claude Code.

Throughout the guide, you will:
- Let **Claude create almost all folders and files**, except tools you must install manually.[^2]
- Work in **Cursor** as your only code editor.
- Run Claude Code primarily via the **`claude` CLI in Cursor’s terminal**, so it can also run shell commands for you.[^1]
- Use **Plan Mode** for any non‑trivial task to get a robust plan before allowing code edits.[^9][^10]

***
## 2. Tools and tech stack (in plain language)
### 2.1. Frontend tech
- **React** – the UI library. Think of components in React as the code equivalent of your Figma components.[^11]
- **Next.js** – a framework on top of React that handles routing (pages), bundling and many performance details for you.[^11]
- **TypeScript** – “safer JavaScript” that helps Claude write more reliable code with fewer hidden bugs.
- **Tailwind CSS** – a utility‑class system for styling that works very well with design tokens from your design system.[^2]
- **Radix UI / shadcn‑ui style patterns** – accessible headless components (dropdowns, dialogs, etc.) that Claude can skin with your design tokens.[^2]
### 2.2. Designer‑facing tools
- **Figma** – your source of truth for visuals: design system frame + dashboard screens.[^2]
- **Cursor** – your code editor (IDE):
  - Left sidebar: project files (similar to Figma layers/pages).
  - Center: open files.
  - Bottom: Terminal where the `claude` CLI runs.
  - Right: optional AI chat panel (we will rely mainly on the terminal session).
- **Claude Code CLI** – the `claude` command that runs in a terminal and can read your repo, edit files, and execute shell commands in the same working directory.[^1]
- **Figma MCP (Model Context Protocol)** – a bridge so Claude can read Figma frames by URL instead of screenshots.[^4]
- **Storybook** – a local web app that lists all your UI components and their states; use it to visually review every component in isolation.[^2]
- **Git + GitHub** – version control and cloud storage for your code.[^12]
- **Vercel** – hosting platform that pulls code from GitHub and gives you a live URL for your app.[^8][^13]

You will stay mostly in Figma, Cursor (files + terminal), your browser, and Claude.

***
## 3. Prepare your Figma dashboard and design system
### 3.1. Structure the Figma file
In your Figma file, create clear, separate frames:

- **Design system frame** – includes:
  - Color styles (primary, neutrals, semantic/status colors).
  - Text styles (Heading 1/2/3, Body, Caption).
  - Spacing scale (4, 8, 12, 16, 24, 32, …).
  - Radius, shadows, borders.
  - Core components: buttons, inputs, selects, checkboxes/switches, badges, cards, table rows, modals.
- **Page frames** for each screen:
  - `Dashboard` – main metrics/cards + table(s).
  - `Users` – user list/table + possible filters.
  - `Settings` – toggles, selects, sections.

The more consistent your naming and component usage in Figma, the easier it is for Claude to extract and map design tokens and components.[^2]
### 3.2. Set sharing and copy links
1. Open your Figma file.
2. Click **Share** in the top‑right.
3. For ease of use, set **Anyone with the link can view** (or ensure the Figma account you authorize for MCP has access).[^2]
4. Copy the following URLs (you will paste them into prompts):
   - Link to the **design system frame**.
   - Link to the **Dashboard** screen.
   - Links to **Users** and **Settings** screens.

Keep these links somewhere handy.

***
## 4. Install prerequisites and Claude Code CLI
### 4.1. Install Node.js (runtime for tools and dev server)
1. Open your browser and go to **https://nodejs.org**.[^14]
2. On the home page, you will see two big download buttons: **LTS (Recommended)** and **Current**.
3. Click the **LTS** button. This is the stable version intended for most projects.
4. A file will download:
   - On Windows: a `.msi` installer.
   - On macOS: a `.pkg` installer.
5. Open the downloaded file.
6. In the installer windows, keep clicking **Next**, accept the license, and keep defaults as they are.
7. Click **Install**, wait until it finishes, then **Finish**.
8. Verify installation:
   - Open **Terminal** (macOS) or **Command Prompt / PowerShell** (Windows).
   - Type:
     ```bash
     node -v
     ```
   - If you see something like `v20.x.x`, Node.js is installed correctly.[^14]
### 4.2. Install Git (version control)
1. Go to **https://git-scm.com**.[^14]
2. Click **Download** for your operating system.
3. Run the downloaded installer.
4. In the installer, you can keep all default options and repeatedly click **Next**.
5. When the installer finishes, open Terminal / Command Prompt.
6. Type:
   ```bash
   git --version
   ```
   If you see `git version 2.xx.x`, Git is installed.[^14]

Git will later allow you to track changes and push your project to GitHub.
### 4.3. Install and open Cursor
1. Go to **https://www.cursor.com** and click **Download**.[^2]
2. Download the installer for your OS (Windows or macOS).
3. Install Cursor like any regular app.
4. Open Cursor.
5. Sign in (GitHub or Google is common).
6. Explore the interface briefly:
   - Left sidebar: files and folders.
   - Center: open files.
   - Bottom: Terminal.
   - Right: optional AI chat panel (we will mostly use the terminal).
### 4.4. Install Claude Code CLI and verify it works
Claude Code’s CLI is what you run in the terminal with the `claude` command. Installation steps may change over time, so always follow the latest instructions in the official quickstart.[^1]

1. Open **https://code.claude.com/docs/en/quickstart** in your browser.[^1]
2. Follow the “Install the CLI” instructions for your operating system. This is usually a single command you paste into your system terminal (for example, a `curl ... | sh` script or a package‑manager command).
3. When installation finishes, close and reopen your terminal.
4. Verify the CLI is available:
   - In your system Terminal, type:
     ```bash
     claude --help
     ```
   - You should see the Claude Code help text, not a “command not found” error.[^1]

Once this works, you can also run `claude` inside Cursor’s integrated terminal.
### 4.5. Connect Figma MCP to Claude Code
The goal here is to let Claude read your Figma frames via URLs.

1. Open the Figma MCP setup guide: **“How to set up the Figma remote MCP server”**.[^4]
2. Follow the instructions to register the MCP server with Claude. This usually looks like:
   - Open your system Terminal.
   - Run a command similar to:
     ```bash
     claude mcp add --transport http figma-remote-mcp https://mcp.figma.com/mcp
     ```
     (Use the exact command from the official docs.)[^4]
3. Then, in a Claude session (system terminal or Cursor terminal), list available MCP providers and confirm `figma-remote-mcp` is present and connected.
4. A browser window will open the first time, asking you to authorize Figma access. Click **Allow / Authorize**.[^4]

Claude can now open and read your Figma file contents by link, instead of just seeing image exports.[^15]
### 4.6. Create GitHub and Vercel accounts
1. **GitHub**:
   - Go to **https://github.com**.
   - Sign up if you do not already have an account.[^12]
   - Confirm your email.
2. **Vercel**:
   - Go to **https://vercel.com**.[^8]
   - Click **Continue with GitHub**.
   - Authorize Vercel to access your GitHub repositories (you can limit it to selected repos later).[^7][^16]

***
## 5. Start a Claude Code terminal session in Cursor
From now on, you will mostly talk to Claude by running `claude` in the terminal **from the root of your project**. This allows Claude to edit files and run commands in the same working directory.[^1]
### 5.1. Open the workspace folder in Cursor
1. Decide where on your machine you want to store projects, e.g. `~/projects` (macOS) or `C:\projects` (Windows).
2. Open Cursor.
3. Use **File → Open Folder** and open your chosen workspace folder (e.g. `projects`).
### 5.2. Launch a Claude session in the terminal (Plan Mode)
Plan Mode is the safest and most powerful way to start a new task: Claude only analyzes and plans; it cannot edit files until you are satisfied with the plan.[^9][^17]

1. In Cursor, open the integrated **Terminal**.
2. In the terminal, navigate into your project folder when it exists (we will create it in the next section). For now, practice with:
   ```bash
   cd projects
   ```
3. To start Claude directly in Plan Mode for any non‑trivial task, use:
   ```bash
   claude --permission-mode plan
   ```[^9]
4. Claude will start an interactive session and ask what you want to do.

Typical usage pattern:
- For **complex tasks** (more than 3 steps, multiple files, architectural decisions), **always start in Plan Mode**.[^10][^9]
- Let Claude read files, explore the repo, and propose a detailed plan.
- Review and edit that plan, then switch out of Plan Mode to let Claude implement.

You can also switch into Plan Mode from an existing session using the `/plan` slash command (if your version supports it).[^9]
### 5.3. Make Plan Mode the default (optional, recommended)
To always start new sessions in Plan Mode:

1. Ask Claude (from any session) to create or update `.claude/settings.json` in your home or project directory with Plan Mode as default:
   ```
   Please create or update .claude/settings.json so that permissions.defaultMode is set to "plan". Keep other settings unchanged or add them only if necessary.
   ```
2. Claude will show you the JSON and write it. After that, new sessions start in Plan Mode by default.[^9]

This matches the workflow recommended by the Claude Code team and many advanced users.[^10][^9]

***
## 6. Create the Next.js project with Claude in the terminal
### 6.1. Let Claude run `create-next-app`
1. In Cursor, with your workspace folder opened, start Claude in Plan Mode from the terminal:
   ```bash
   claude --permission-mode plan
   ```
2. When Claude asks what you want to do, answer with something like:
   ```
   We are starting a new Next.js + TypeScript + Tailwind project for an admin dashboard prototype.

   Please:
   - Plan how to create the project using create-next-app.
   - Then run the necessary commands in this terminal to generate a project called dashboard-prototype.
   - Use TypeScript, ESLint and Tailwind, and the App Router.
   ```
3. Claude will use Plan Mode to propose the commands and steps. Review the plan, and once it looks correct, tell Claude to execute it (it will exit Plan Mode or switch to a mode that can run commands, depending on configuration).[^1][^9]

After `npx create-next-app@latest dashboard-prototype` completes, you will have a new folder `dashboard-prototype`.
### 6.2. Open the new project root in Cursor
1. In Cursor, go to **File → Open Folder**.
2. Open the `dashboard-prototype` folder directly.
3. You should see `app/`, `public/`, `package.json`, `tailwind.config.js`, etc.
### 6.3. Ask Claude to install dependencies and run the dev server
1. Open a terminal in Cursor at the root of `dashboard-prototype`.
2. Start a new Claude session in Plan Mode:
   ```bash
   claude --permission-mode plan
   ```
3. Say:
   ```
   Please plan and then run the commands needed to:
   - Install dependencies for this Next.js app.
   - Start the development server on port 3000.

   Use npm, and once the plan is ready, execute it.
   ```
4. Claude will likely plan to run `npm install` and `npm run dev`. Approve and let it execute.
5. Open a browser and go to **http://localhost:3000**. You should see the default Next.js starter page.[^11]

Your base app is now running locally.

***
## 7. Initialize the repo with `/init` and CLAUDE.md
Claude’s `/init` command reads your codebase and generates a `CLAUDE.md` file containing instructions and context for future sessions. Think of it as persistent “project memory” for Claude Code.[^5][^18][^19]
### 7.1. Run `/init` for the first time
1. In the Cursor terminal at the project root, start Claude (Plan Mode is fine):
   ```bash
   claude --permission-mode plan
   ```
2. When Claude is ready for instructions, type:
   ```
   /init
   ```
   and press Enter.
3. Claude will analyze the codebase and propose creating or updating a `CLAUDE.md` file in the repo root.[^5][^6]
4. Review the summary of what it plans to include (build commands, architecture notes, etc.) and approve.
### 7.2. What should CLAUDE.md contain for this project
By default, `/init` already does a good job, but you can steer it.

After `/init` finishes, say:
``` 
Please open CLAUDE.md and update it with additional information specific to this project:
- Our stack: Next.js + React + TypeScript + Tailwind + design tokens in /styles/tokens.css + Storybook + Figma MCP.
- Common commands: npm run dev, npm run storybook, npm run build, npm test (if any).
- A note that this project is a front-end-only prototype using mock data (no real backend).

Keep the file concise and avoid generic advice.
```

Claude will edit `CLAUDE.md` accordingly.[^5]
### 7.3. Add workflow rules from the “Workflow Orchestration” sheet
Now you will add higher‑level rules (similar to those in the screenshot you provided) so Claude consistently works the way you want.

Prompt:
``` 
Please open CLAUDE.md and append a new section called "Workflow Orchestration" with concise rules for how Claude should work in this repository.

Include points such as:
- Plan Mode as default for any non-trivial task (3+ steps or architectural decisions). If things go wrong, stop and re-plan instead of guessing.
- Use sub-agents or subtasks to keep the main conversation focused and to handle research or parallel work when needed.
- After any correction from the user, update a lessons file (such as tasks/lessons.md) with what to avoid next time and review it at the start of relevant sessions.
- Never treat a task as complete without verifying it: run tests or commands, compare behavior before and after, and check logs when appropriate.
- Prefer simple, elegant solutions over clever but fragile ones. If you see a clearly better implementation and it is safe, propose it.
- When a bug report is given, focus on fixing it end-to-end without asking for step-by-step hand-holding. Inspect logs, failing tests and related code.
- For task management, follow a small loop: plan first, verify the plan, track progress step by step, explain changes at a high level, document results and capture lessons.
- Core principles: keep changes as simple as possible, avoid shallow or temporary fixes, and only touch the parts of the codebase that are truly necessary.

Write this section in clear, direct English aimed at other instances of Claude Code working in this repo.
```

Claude will rewrite these ideas in its own words inside `CLAUDE.md`, giving you a persistent workflow contract inspired by the official guidance.[^10]

***
## 8. Create PRD and per‑screen specs (for Claude’s context)
A short Product Requirements Document (PRD) and per‑screen specs give Claude the same context you have, which dramatically improves code quality.[^2]
### 8.1. Ask Claude to create the `docs` structure
From a Claude terminal session at the project root, say:
``` 
We need a documentation structure for this dashboard.

Task:
- Create a /docs folder.
- Inside it, create /docs/PRD.md.
- Also create /docs/screens/dashboard.md, /docs/screens/users.md and /docs/screens/settings.md.

Use simple markdown files, I will paste and refine the content myself.
```

Approve the file creation plan and let Claude create everything.
### 8.2. Draft the PRD with the help of any AI
You can use any AI (outside Cursor) to help you write the PRD in English, then paste it into `docs/PRD.md`.

Example external prompt:
``` 
I am a product designer (not a developer) working on a web admin dashboard for managing [brief description: e.g. users, teams, settings].

Please create a concise PRD in markdown with these sections:
- What we are building
- Why we are building it / goals
- Core features
- Out of scope (including: no real backend, mock data only)
- Tech stack (Next.js, React, TypeScript, Tailwind, design tokens, Storybook, Figma MCP, no database)
- Links to Figma screens (leave a placeholder section, I will paste URLs myself)
```

Paste the generated markdown into `docs/PRD.md` in Cursor and replace the Figma section placeholders with your real Figma URLs.
### 8.3. Draft per‑screen specs
Repeat the same pattern for each screen (Dashboard, Users, Settings).

Example external prompt for `dashboard.md`:
``` 
I need a concise, structured spec for a Dashboard page in an admin app.

Please write markdown with:
- What is this page about?
- Main user flows (step by step)
- Data displayed (high level description)
- Components used (buttons, cards, charts, table, filters, etc.)
- States: loading, empty, error, success, hover/active
```

Paste and slightly adjust the outputs into `docs/screens/dashboard.md`, `docs/screens/users.md`, and `docs/screens/settings.md`.

Now Claude has both textual and visual context (once we connect Figma) for what to build.[^2]

***
## 9. Extract design tokens from Figma via Claude + MCP
This step converts your Figma design system into code tokens stored in one place. Changing a color or radius later becomes a single‑file edit, not a hunt across many components.[^2]
### 9.1. Prepare the design system link
Have the Figma URL for your design system frame ready.
### 9.2. Prompt Claude to create tokens and Tailwind config
In a Claude terminal session at the project root, say:
``` 
You are helping me turn a Figma-based admin dashboard into a clean, scalable Next.js + Tailwind codebase.

1) Read /docs/PRD.md to understand the project.
2) Using Figma MCP, open my design system frame: [PASTE FIGMA DESIGN SYSTEM URL HERE].

Task:
- Create a new file /styles/tokens.css with CSS custom properties for all relevant design tokens (colors, typography, spacing, radii, borders, status colors).
- Update tailwind.config.js so Tailwind utility classes map to these CSS variables.
- Follow the naming from Figma where it makes sense (for example, Gray 100, Gray 200, Blue 600) and group tokens by backgrounds, borders, text, actions, status, typography, spacing and radii.

Show me a short plan of which files you will create or modify, then implement those changes.
```

Approve the plan and let Claude create `/styles/tokens.css` and update `tailwind.config.js`.[^2]
### 9.3. Inspect and understand the result
Open `/styles/tokens.css`:
- You should see root‑level CSS variables such as:
  ```css
  :root {
    --color-bg-surface: ...;
    --color-text-primary: ...;
    --spacing-4: ...;
    --radius-md: ...;
  }
  ```[^2]

Open `tailwind.config.js`:
- You should see Tailwind’s `extend` section referencing these variables, e.g.:
  ```js
  extend: {
    colors: {
      'bg-surface': 'var(--color-bg-surface)',
      'text-primary': 'var(--color-text-primary)',
    },
    spacing: {
      4: 'var(--spacing-4)',
    },
  }
  ```[^2]

From now on, component styles should use Tailwind classes backed by these tokens, not raw hex codes.

***
## 10. Set up Storybook with Claude and connect it to your components
Storybook is your visual lab for components: it runs as a separate app where you can see every button, card, table and state in isolation.[^2]
### 10.1. Ask Claude to install and configure Storybook
From a Claude terminal session in the project root, say:
``` 
We want to use Storybook to visually review all UI components for this dashboard.

Task:
- Plan the steps to initialize and configure Storybook for this Next.js + TypeScript + Tailwind project.
- Then run the necessary commands in this terminal to set it up.
- Ensure Storybook is configured to use our Tailwind setup and design tokens from /styles/tokens.css.

Show me the plan first, then execute it.
```

Claude will typically run a command like `npx storybook@latest init` and create a `.storybook` folder plus example stories. Approve, then wait for the setup to finish.[^2]
### 10.2. Run Storybook locally
Ask Claude:
``` 
Please run Storybook for this project (using npm run storybook or the appropriate command) and keep it running.
```

Claude will start Storybook; you can then open **http://localhost:6006** in your browser and see the Storybook UI.[^2]
### 10.3. Ensure Storybook uses your global styles
To make Storybook render components with the same look as your app:

Prompt:
``` 
Please ensure Storybook loads our global CSS, including Tailwind and /styles/tokens.css.

Task:
- Update .storybook/preview.(js|ts) or other relevant config to import the same root styles as app/layout.tsx.
- Confirm that components rendered in Storybook use our design tokens.
```

Claude will adjust configs so Storybook mirrors your main app styles.[^2]

***
## 11. Build core UI components from the Figma design system (with stories)
You will now create the building blocks (buttons, inputs, cards, tables) as React components, verify them in Storybook, and later reuse them on pages.[^2]
### 11.1. General pattern for components
For each component type (Button, Input, etc.):

1. Copy the Figma URL of the relevant section in your design system.
2. In the Claude terminal session, describe what you want.
3. Let Claude create the file in `src/components/ui/...` and the matching Storybook story.
4. Open Storybook in the browser and visually compare with Figma.
5. Refine with additional prompts until it matches.
### 11.2. Example: Button component + Storybook stories
1. Copy the Figma URL for your **Buttons** section in the design system.
2. In the Claude session, say:
   ``` 
   We are now building a reusable Button component based on the Figma design system.

   Context:
   - /docs/PRD.md
   - /styles/tokens.css
   - Figma Buttons section: [PASTE FIGMA URL HERE]

   Task:
   - Create src/components/ui/button.tsx.
   - Implement variants visible in Figma (for example: primary, secondary, subtle).
   - Implement states: default, hover, disabled, focus, including a clear focus ring.
   - Use our Tailwind setup and design tokens from /styles/tokens.css only (no hardcoded hex codes).
   - Make the component accessible (proper button element, aria-hidden="true" for decorative icons, keyboard focus).

   Storybook:
   - Create src/components/ui/button.stories.tsx.
   - Add stories that show all variants and states (primary, secondary, disabled, with icon, etc.).

   Show me the file change plan, then implement.
   ```[^2]
3. Approve the plan.
4. Open Storybook at http://localhost:6006 and inspect the Button stories.
5. If visuals differ from Figma, refine with a follow‑up prompt describing the differences.
### 11.3. Other base components (Inputs, Selects, Toggles, Cards, Badges)
Repeat the same pattern for each component type, adjusting the prompt:

``` 
We are building a reusable [COMPONENT NAME] component based on the Figma design system.

Context:
- /docs/PRD.md
- /styles/tokens.css
- Figma [COMPONENT] section: [PASTE FIGMA URL HERE]

Task:
- Create src/components/ui/[component-name].tsx.
- Implement the visual variations and states you see in Figma.
- Use our Tailwind setup and design tokens only.
- Make the component accessible (labels, aria attributes, keyboard focus).

Storybook:
- Create src/components/ui/[component-name].stories.tsx.
- Add stories that cover all variants and important edge cases.

Show me the plan, then implement.
```
### 11.4. Table row / table for Users list
1. Copy the Figma URL for the Users table design.
2. In the Claude session, say:
   ``` 
   We need a reusable table component for the Users list.

   Context:
   - /docs/PRD.md
   - /styles/tokens.css
   - Figma table design: [PASTE URL HERE]

   Task:
   - Create a UsersTable component in src/components/users/users-table.tsx.
   - It should accept an array of user objects (id, name, email, role, status, createdAt) as props.
   - The layout, typography, spacing and status badges should match the Figma design using our design tokens.

   Storybook:
   - Create src/components/users/users-table.stories.tsx.
   - Add stories that show a populated list, an empty state, and optionally loading/error states.

   Show the plan, then implement.
   ```
3. Inspect the table in Storybook and refine as needed.

***
## 12. (Optional) Ask Claude to review and refactor components
Example prompt for the Button component:
``` 
Please review src/components/ui/button.tsx as a senior UI engineer.

Context:
- /styles/tokens.css

Checks:
- Uses React.forwardRef correctly (if appropriate) and has a displayName.
- Uses tokens and Tailwind utilities, no hardcoded colors or spacing.
- Props are well-typed in TypeScript, no any.
- Accessible: correct role, keyboard focus, aria-hidden for decorative icons.

1) List concrete issues and suggestions.
2) Then apply the fixes directly in button.tsx.
```

Approve or reject the proposed changes based on the diffs Claude shows.[^2]

***
## 13. Build page layouts and connect routing between pages
With components and Storybook in place, you are ready to assemble full pages and wire navigation between them.[^2]
### 13.1. Create the shared app shell layout
1. Copy the Figma URL for the main layout (sidebar + header + main content).
2. In the Claude session (from the project root), say:
   ``` 
   We now want to build the shared app shell layout for all dashboard pages.

   Context:
   - /docs/PRD.md
   - /styles/tokens.css
   - Figma main layout screen: [PASTE FIGMA URL HERE]

   Task:
   - Create a reusable layout component (for example in src/components/layout/AppShell.tsx) that matches the Figma app shell:
     - Left sidebar navigation with links to Dashboard, Users and Settings.
     - Top header with product name, optional search and user avatar.
     - Main content area where page content will render.
   - Update app/layout.tsx to wrap all pages with this AppShell.
   - Use Next.js App Router conventions and Link components for navigation.
   - Use our Tailwind + tokens setup only.

   Show me the plan and then implement.
   ```
3. Approve the plan and inspect `app/layout.tsx` and the new layout component.
### 13.2. Build the Dashboard page and route
1. Ensure `docs/screens/dashboard.md` is filled with a reasonable spec.
2. Copy the Figma URL for the Dashboard screen.
3. In Claude, say:
   ``` 
   Now we want to implement the Dashboard page itself.

   Context:
   - /docs/PRD.md
   - /docs/screens/dashboard.md
   - /styles/tokens.css
   - Figma Dashboard screen: [PASTE URL HERE]

   Task:
   - Create a Dashboard page in the App Router (for example: app/(app)/dashboard/page.tsx).
   - Use existing UI components (cards, buttons, UsersTable, badges) instead of raw HTML.
   - Lay out the sections (summary cards, charts, table, etc.) to visually match the Figma Dashboard.
   - Wire the sidebar navigation so that clicking "Dashboard" navigates to this page.
   - Optionally, redirect the root route (/) to /dashboard so it becomes the default entry point.

   Show the planned file and routing changes, then implement.
   ```
4. Open http://localhost:3000/dashboard and check the result.
### 13.3. Build Users and Settings pages and link them
Example prompt for the Users page:
``` 
We now want to implement the Users list page.

Context:
- /docs/PRD.md
- /docs/screens/users.md
- /styles/tokens.css
- Figma Users screen: [PASTE URL HERE]

Task:
- Create a Users page (for example: app/(app)/users/page.tsx).
- Use the UsersTable component and any other UI components we created.
- Match the Figma layout (header, filters, table, footer) using our design tokens.
- Wire the sidebar navigation so that clicking "Users" navigates to this page.

Show the plan, then implement.
```

Do the same for Settings with `app/(app)/settings/page.tsx` and the corresponding Figma link and spec.
### 13.4. Refine visuals on pages
Use precise prompts when the page is structurally correct but visually off:
``` 
The structure of the [Dashboard/Users/Settings] page is correct, but visually it does not yet match the Figma design.

Differences:
- [list 3–5 key differences: padding, typography, alignment, colors, etc.]

Please:
- Adjust the Tailwind classes and component props so the page in the browser matches the Figma layout and spacing more closely.
- Keep using tokens from /styles/tokens.css, do not introduce new hardcoded values.
```

Iterate until you are satisfied with the visual match.

***
## 14. Add mock data and basic client‑side behavior (no backend)
You want the prototype to “feel live” without a real backend or database: clicking filters, submitting forms, seeing table updates.[^3]
### 14.1. Ask Claude to create mock data files
From the project root Claude session, say:
``` 
We want to add realistic mock data for the Users list, without any real backend.

Task:
- Create a src/data folder if it does not exist.
- Inside it, create src/data/mockUsers.ts.
- In that file, export an array of 20–30 user objects with realistic fields: id, name, email, role, status, createdAt.
- Use roles like "Admin", "Manager", "Viewer" and statuses like "Active", "Invited", "Suspended".

Please show the new file contents once created.
```

Claude will create the folder and file for you and populate them with sample data.
### 14.2. Use mock data on the Users page
Prompt:
``` 
On the Users page, instead of any hardcoded rows, we want to use the mockUsers array.

Task:
- Import the mockUsers array from src/data/mockUsers.
- Pass it as a prop into the UsersTable component.
- Make sure the table renders the correct columns and values using our design.

Show me the changes in the Users page and UsersTable component.
```
### 14.3. Add filters and search (client‑side only)
If your Figma design includes filters and/or a search bar:

Prompt:
``` 
We want basic client-side filters and search on the Users page, using only mockUsers (no backend).

Task:
- Convert the Users page into a Client Component if it is not already (add 'use client' at the top).
- Introduce React state for:
  - selected role filter,
  - selected status filter,
  - search text.
- Filter the mockUsers array in memory based on these states.
- Hook the filters and search input in the UI to this state.

Please update the Users page and any related components, keeping the visuals aligned with the Figma design.
```

You now have an interactive Users page with live‑feeling behavior entirely on the front end.

***
## 15. Use Storybook to verify components and states
Even after pages work, Storybook remains valuable:[^2]

- You can quickly check all variants of a component while iterating on design tokens.
- You can add stories for edge cases (empty states, error messages, long text) that might be hard to hit inside the main app.

Example refinement prompt:
``` 
In Storybook, some component stories do not fully cover the states we care about.

Task:
- For Button, ensure stories exist for all variants (primary, secondary, subtle) and states (default, hover, disabled, with icon, loading if applicable).
- For UsersTable, ensure stories exist for:
  - a normal populated list,
  - an empty list,
  - a loading state (skeletons or placeholders),
  - an error-like state (if we decide to show one).

Please update the *.stories.tsx files accordingly.
```

Keep Storybook open while you work; it helps you reason about each component independently before or after it is used on pages.[^2]

***
## 16. Initialize Git and push the project to GitHub
### 16.1. Initialize Git in the project
Ask Claude to handle the Git initialization:
``` 
In this project root, please initialize Git and make an initial commit.

Steps to run in the terminal:
- git init
- git add .
- git commit -m "Initial dashboard prototype from Figma with Claude"

If Git user.name and user.email are not configured, please show me the commands you will run to set them, then run them as well.
```

Claude will likely run:
```bash
git init
git add .
git commit -m "Initial dashboard prototype from Figma with Claude"
```
If Git asks for name and email, Claude can configure them using:
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```
### 16.2. Create an empty repository on GitHub
1. Go to **https://github.com** and click **New repository**.[^12]
2. Name it something like `dashboard-prototype`.
3. Leave all checkboxes (README, .gitignore, license) unchecked so the repository starts empty.[^12]
4. Click **Create repository**.
### 16.3. Connect the local repo to GitHub and push
On the GitHub repo page, you will see a section titled “...or push an existing repository from the command line”.[^12][^13]

Copy the commands shown there (they look like):
```bash
git remote add origin https://github.com/YOUR_USERNAME/dashboard-prototype.git
git branch -M main
git push -u origin main
```

Either paste them into the Cursor terminal yourself or ask Claude to run them.

After this, your code is stored on GitHub and ready to be deployed.

***
## 17. Deploy to Vercel and get a shareable URL
### 17.1. Connect GitHub and Vercel
1. Go to **https://vercel.com** and ensure you are logged in with your GitHub account.[^8]
2. If prompted, grant Vercel access to your GitHub repositories (you can limit access to this single repo).[^7][^16]
### 17.2. Create a Vercel project from your GitHub repo
1. In the Vercel dashboard, click **Add New → Project**.[^3][^13]
2. In the list of Git repositories, find and select **dashboard-prototype**.[^16]
3. Check the settings:
   - Framework preset: should automatically show **Next.js**.[^8]
   - Root Directory: `./` (unless your app lives in a subfolder).[^16]
4. Click **Deploy**.

Vercel will install dependencies, build your Next.js app, and then show a live deployment URL such as `https://dashboard-prototype.vercel.app`.[^13][^8]
### 17.3. Automatic updates on every push
Any time you update the app with Claude, commit and push again:

```bash
git add .
git commit -m "Describe the change briefly"
git push
```

Vercel will automatically create a new deployment based on the latest code.[^7][^14]
The live URL remains stable, but the content updates to the newest version.

***
## 18. Use other AI tools to craft better prompts for Claude
Claude Code executes complex coding tasks very well when given precise instructions. If you are more comfortable describing ideas in natural language, you can use another AI tool as a “prompt generator” and then paste the refined prompt into Claude.[^2]

Example pattern:

1. In your preferred AI chat (outside Cursor), describe what you want in your own words, for example:
   ```
   I am a product designer working on an admin dashboard prototype.
   I need an English prompt for Claude Code in the terminal that will:
   - Build a Next.js Dashboard page from my Figma design.
   - Use existing UI components (cards, table, filters) instead of raw HTML.
   - Use Tailwind + design tokens from /styles/tokens.css.
   - Keep all data on the client side with mock data (no backend).

   Please write a clear, structured prompt I can paste directly into Claude Code.
   ```
2. Take the generated prompt, review it, and paste it into the Claude terminal session in Cursor.
3. Adjust over time as you learn what works best.

This way, you combine two strengths: one AI helps you express requirements, another AI (Claude Code) executes them in code.[^2]

***
## 19. Final checklist before sharing the Vercel link with your client
Before you send the Vercel URL to a client, quickly check:

- **Navigation and routing**:
  - Dashboard, Users, and Settings pages are all accessible via the sidebar or header.
  - Clicking links changes the URL and content as expected.
- **Interactivity**:
  - Buttons have visible hover and focus states.
  - Filters and search on the Users page actually change the visible table rows.
  - Forms (if any) provide basic visual feedback (toast, message, or updated table) even though they do not talk to a real backend.
- **Visual match to Figma**:
  - Global layout, spacing, typography and colors look consistent with your Figma file.
  - Cards, tables, header and sidebar look familiar to the client.
- **Storybook coverage**:
  - Key components (Button, Card, UsersTable, Inputs) have meaningful stories for common and edge cases.
- **Deployment health**:
  - The Vercel deployment status is **Ready**.[^13]
  - The app loads in modern browsers without obvious errors.

Once this checklist looks good, you have achieved the main goal: starting from a Figma dashboard, you now have a live, interactive prototype on the web, built largely by Claude Code and orchestrated by you as the designer.[^2][^20][^4]

---

## References

1. [Quickstart - Claude Code Docs](https://code.claude.com/docs/en/quickstart) - This guide covers the terminal CLI. Claude Code is also available on the web, as a desktop app, in V...

2. [figma-to-code-guide.pdf](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/58731529/d631c14c-62a9-4a84-ab4b-a427b3295016/figma-to-code-guide.pdf?AWSAccessKeyId=ASIA2F3EMEYETCQT477M&Signature=wEBxbYASyik%2BUq8MQbNZEGDJzJw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEEIYenBQzF4B3vuIGTHg3LLj4EriG00KloQ3yriEdiJAiEAtYt08NDI9roUXgy4IEVeU%2FOwzUn5lf%2B%2BngDT3fVB0Swq%2FAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw2OTk3NTMzMDk3MDUiDHiBKHdMijv9%2BsivVSrQBPzaVVJdSxqS3wfkD7ea2abj%2BrDVrM1%2F%2F%2Biqi6va%2BQUq6fdMEZIdL4mbUOSjN61fI9gq0KUEjjDem8vtKi%2Fh0we5UPTsysnVLMbBfk%2Bf5ZcCgN9k8IyUOc1dvVtBxmOgtjz2B1%2FNne3mWNY5YqB0fHg8gWYng%2F%2Br9Qz%2FjCn6cala58uLyFcE556IWxljIEdFe1eVBtxz46UPjMXM5WeXGJcEWEu7KvRZk%2FyHNTxZJkbKX21zQsCxCwmw%2FOBHoPJA7HeTISPtmwC%2BwaDqqn4%2FKp%2FQ5w0lYLtFAA3lEVcW5lkEk4QIU8mCdz7XuQbGUg%2F0gpMeo%2BIYgW%2BTcIN65maBJ47fg7hj7WLuJjX2yonrFy5UByVkZGTWOV6A28FbyKsOVQTxWeiJj4ZT41IyT1zOyT87fCkjXNm71JYhnNpj%2B3HqlJtFxY47E5oit0KEuMa7iNa7eEHzxWlhcYSBY4C51atQ5NeSB9B7jhYcGvbjMLB3NEkG6wBc%2FMrQAIfla%2BVqIU1tUEcSwxyVrvaw1B5HLS13hPSnnVn542FMBGsqUb6qkPbZHZoD3kaX2dmaNCYiYXlYnj9F1LVCaavKC1qirApkjr6t2%2B9%2FWbz0MYGuF%2B5%2FtMfR2r%2BVwgMCUQgya%2Bg84WUkJWM7PchClHyZwlJRhNAwANGvlZCt%2B2gS6VduEieI4B7GZw9o9%2BwrZQMjDRjeO7MTii8q8BFccV21ZdU3kgZgteRUiyBEAE0qMZOvN5kR36q%2BKgmW0MmrHVqaMdDCwDS4X1a1hNw5GDqMezDIuvcwrLGKzgY6mAGB7z0BwpZrIQc5INSVZ352wy2V51b2Mzn4Bn90ThfzqKqQUc5yIX6hYaCPpbKDqDkGU8R%2BejT%2Bsge3PFildqrx5lKy6SlbC4wd5RnxXadPALQooqH4ZJw60Bh9MAVI1CR%2BO6jBB5rN%2FsrLy%2FlxQcdeUIaB0EtEqONs47QQMZmzW3mpeprV1B2OKJb2pheA0AL0XZsVBifFZw%3D%3D&Expires=1774364287) - AI Builder Space  |  youtube.com/@aibuilderspace  |  labsbit.ai
1
AI BUILDER SPACE
Figma Design to
P...

3. [How To Deploy GitHub Project On Vercel (Best Method) - YouTube](https://www.youtube.com/watch?v=MRJYuM542IU) - Learn how to **deploy to vercel** your GitHub project. This video will guide you through the steps w...

4. [How to set up the Figma remote MCP server](https://help.figma.com/hc/en-us/articles/35281350665623-Figma-MCP-collection-How-to-set-up-the-Figma-remote-MCP-server) - For Claude code, we'll setup the Figma MCP server using the terminal, but be sure to run npm install...

5. [Build your own /init command like Claude Code - Kaushik Gopal](https://kau.sh/blog/build-ai-init-command/) - Claude's /init makes it easy to add clear repo instructions. Build your own and use it with any agen...

6. [Claude Code Tutorial #2 - CLAUDE.md Files & /init - YouTube](https://www.youtube.com/watch?v=i_OHQH4-M2Y) - As always, your video tutorials helped me be a better developer. Claude is capable of doing a lot of...

7. [Deploying GitHub Projects with Vercel](https://vercel.com/docs/git/vercel-for-github) - Vercel for GitHub automatically deploys your GitHub projects with Vercel, providing Preview Deployme...

8. [Pages Router: Deploy to Vercel | Next.js](https://nextjs.org/learn/pages-router/deploying-nextjs-app-deploy) - First, go to Vercel to create a Vercel account. Choose Continue with GitHub and go through the sign ...

9. [Plan Mode in Claude Code - Think Before You Build with AI](https://codewithmukesh.com/blog/plan-mode-claude-code/) - How do I set Plan Mode as my default in Claude Code? Add this to your .claude/settings.json file: pe...

10. [Boost Claude Code Efficiency with Anthropic's Best Practices](https://www.linkedin.com/posts/zainkahn_claude-code-is-only-as-good-as-your-orchestration-activity-7432768343209795584--XD5) - Here's what it does: → Workflow Orchestration: Mandates "Plan Node Default" for any task over 3 step...

11. [Getting Started: Deploying - Next.js](https://nextjs.org/docs/pages/getting-started/deploying) - Next.js can be deployed as a Node.js server, Docker container, static export, or adapted to run on d...

12. [How to Deploy Next.js App to Vercel using VS Code and Github?](https://www.reddit.com/r/nextjs/comments/19dsy45/how_to_deploy_nextjs_app_to_vercel_using_vs_code/) - Start by creating a git repository in Github, preferably named same as your project. Don't manually ...

13. [How To Deploy GitHub Project on Vercel [2026 Guide] - YouTube](https://www.youtube.com/watch?v=JGjdpucyCZo) - project, Vercel deployment, GitHub to Vercel, web hosting tutorial, deploy with Vercel, GitHub ... N...

14. [GitHub Actions workflow to deploy the Next.js Application on Vercel ...](https://dev.to/latchudevops/github-actions-workflow-to-deploy-the-nextjs-application-on-vercel-cloud-2ooi) - In this article, I'll walk you through setting up a GitHub Actions workflow to automatically deploy ...

15. [Claude Code + Figma MCP Server - Builder.io](https://www.builder.io/blog/claude-code-figma-mcp-server) - Setting up Figma MCP Server with Claude Code · Step 1: Enable the MCP Server in Figma · Step 2: Conn...

16. [How To Deploy GitHub Project on Vercel (New Update 2026)](https://www.youtube.com/watch?v=2opT5BUzHAY) - How To Deploy GitHub Project on Vercel (New Update 2025) In this new update 2025, I'll show you the ...

17. [The Task Tool: Claude Code's Agent Orchestration System](https://dev.to/bhaidar/the-task-tool-claude-codes-agent-orchestration-system-4bf2) - The Task tool transforms Claude Code from a helpful assistant into an orchestration system for auton...

18. [/init | but with custom instructions : r/ClaudeAI - Reddit](https://www.reddit.com/r/ClaudeAI/comments/1loa1c1/init_but_with_custom_instructions/) - I'm new to claude code and want to better understand how /init works and if it is possible to do a c...

19. [Claude Init Command - Instagram](https://www.instagram.com/popular/claude-init-command/) - 1. CLAUDE.md is your secret weapon Run /init to generate a file that gives Claude persistent memory ...

20. [Deploying Next.js to Vercel - YouTube](https://www.youtube.com/watch?v=AiiGjB2AxqA) - Learn how to deploy your Next.js application to Vercel by starting with a template, using the Vercel...

