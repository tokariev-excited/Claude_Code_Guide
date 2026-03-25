# Figma to Production‑Like Dashboard Prototype with Claude Code, Cursor, Figma MCP, Storybook, GitHub and Vercel

## 0. What this guide is and how to use it

This guide shows a designer with **no coding background** how to turn a Figma design into a live, interactive web prototype deployed on Vercel. It assumes you work primarily in Figma and want to orchestrate the whole implementation through **Claude Code in the Terminal inside Cursor**.

The product example used in this guide is an **admin dashboard** with three pages — **Dashboard, Users, and Settings**. These pages are chosen only as an **example scenario** because together they cover the most common UI patterns: layout, sidebar navigation, data tables, filters, forms and settings screens. You can later adapt the same workflow to any other product.

The final outcome:

- A Next.js + TypeScript + Tailwind front‑end project.
- Clean reusable components, Storybook documentation and mock data.
- All code produced with the help of **Claude** running in Cursor’s Terminal.
- The project stored on GitHub and deployed to Vercel as a shareable link.

You will not build a real backend or database in this guide. All data is mocked on the client side.

---

## 1. Tools and technology overview

### 1.1. Technology stack

You don’t have to become a programmer, but it helps to know the names:

- **React** – library for building UI components.
- **Next.js (App Router)** – framework on top of React that gives you routing (pages), performance optimizations and a simple dev server.
- **TypeScript** – “safer JavaScript” that helps Claude avoid many common bugs.
- **Tailwind CSS** – utility‑class based styling system that works well with design tokens.
- **Storybook** – local documentation app where you can inspect each component and UI state in isolation.
- **Claude Code CLI** – command‑line version of Claude that runs in a terminal and can both edit code and run commands in your project folder.
- **Cursor** – AI‑first code editor where you run your terminals and Claude sessions.
- **Figma MCP** – integration that lets Claude read your Figma file via a URL instead of screenshots.
- **Git + GitHub** – version control and remote storage for your code.
- **Vercel** – hosting platform that takes a Next.js project from GitHub and creates a live URL for it.

### 1.2. High‑level workflow

End‑to‑end, you will:

1. Prepare your Figma dashboard and design system.
2. Install Node.js, Git, Cursor, Claude Code CLI and connect Figma MCP.
3. Open a terminal in Cursor, start **Claude** and initialize the project.
4. Write a short PRD and per‑screen specs in markdown.
5. Use Claude + Figma MCP to create design tokens and Tailwind setup.
6. Set up Storybook and build core UI components.
7. Assemble pages and routing for Dashboard, Users and Settings.
8. Add mock data and client‑side interactions.
9. Use Storybook and screenshots to refine visuals.
10. Commit to Git, push to GitHub and deploy to Vercel.

You, as designer, stay mostly in:

- Figma  
- Cursor (files + terminals)  
- Browser (Storybook, local app, GitHub, Vercel)  
- Claude in the Cursor terminal

---

## 2. Prepare your Figma dashboard and design system

### 2.1. Structure your Figma file

Create a clear structure in Figma. You can adapt naming to your own conventions; here is a practical layout:

- **Design system frame**
  - Color styles (primary, neutrals, semantic/status colors).
  - Text styles (Headings, Body, Caption).
  - Spacing scale (4, 8, 12, 16, 24, 32, …).
  - Radii, border styles, shadows.
  - Core UI components: buttons, inputs, selects, checkboxes, switches, badges, cards, table rows, modals.
- **Page frames** for this example project:
  - `Dashboard` – summary cards, charts, key metrics, table.
  - `Users` – list/table of users, filters, maybe a details panel.
  - `Settings` – toggles, selects, sections for configuration.

Use consistent component instances and style names. This makes it easier for Claude to map visual decisions into tokens and components.

### 2.2. Sharing settings

Ensure the Figma file is accessible:

- Set **Anyone with the link can view** or make sure the Figma account you will connect via MCP has access.

Later in the guide, when Claude needs a specific frame, you will:

- Open that frame in Figma.
- Copy the **link** to the current frame at that moment.
- Paste it into the relevant prompt.

You do **not** have to collect all links in advance.

---

## 3. Install prerequisites

### 3.1. Install Node.js

1. Go to **https://nodejs.org**.
2. Download the **LTS (Recommended)** version for your OS.
3. Run the installer and keep default options.
4. After installation, open Terminal (macOS) or PowerShell / Command Prompt (Windows).
5. Check:

```bash
node -v
```

If you see a version like `v20.x.x`, Node.js is installed correctly.

### 3.2. Install Git

1. Go to **https://git-scm.com**.
2. Download and run the installer for your OS.
3. Keep default options.
4. In a terminal, check:

```bash
git --version
```

If you see `git version ...`, Git is installed.

### 3.3. Install Cursor

1. Go to **https://www.cursor.com** and download Cursor for your OS.
2. Install and open Cursor.
3. Sign in (GitHub / Google).
4. Look around:
   - Left sidebar: files.
   - Editor area: code.
   - Bottom: **Terminal**.
   - Right side: optional AI panels (we will focus on the terminal).

### 3.4. Install Claude Code CLI

1. Open the **Claude Code quickstart** page in your browser.
2. Follow the installation instructions for the **CLI** exactly as written there (copy the command from the docs and paste into your system terminal).
3. After installation, close and reopen your terminal.
4. Verify the CLI:

```bash
claude --help
```

You should see CLI help output, not “command not found”.

### 3.5. Connect Figma MCP

1. Open the official **Figma MCP setup** page for Claude Code.
2. Follow the instructions there **exactly as written**.  
   Do **not** use example commands from this guide; always copy the command from the official page, because it may change over time.
3. After setup, start **Claude** (CLI) once and confirm that Figma MCP is visible / available according to the docs.

Once this works, Claude can open and read your Figma frames by URL.

### 3.6. Create GitHub and Vercel accounts

- **GitHub**:  
  Go to **https://github.com**, sign up or log in.
- **Vercel**:  
  Go to **https://vercel.com**, sign up with **Continue with GitHub** and allow access to your repositories.

---

## 4. Working with Claude in Cursor’s Terminal

### 4.1. Open your workspace in Cursor

1. Choose a folder on your machine for projects (for example, `projects`).
2. In Cursor, open this folder via **File → Open Folder**.

### 4.2. Start Claude in the terminal

1. Open the **Terminal** panel in Cursor (bottom of the window).
2. Make sure you are in the right folder (you can use `cd` commands if needed).
3. Start **Claude** by typing the following command and pressing Enter:

```bash
claude
```

From now on, the terminal behaves as a conversation with Claude Code **inside** your project. You will give it instructions in natural language; Claude will reply and can also run shell commands or edit files in the project when you approve.

### 4.3. Switching between Plan Mode and normal mode

Claude Code supports **Plan Mode**, which forces Claude to plan a task before applying changes. This is very valuable for anything non‑trivial.

The simplest way to change modes:

- Press **Shift+Tab** to cycle between modes until you see **Plan Mode** selected.
- When you are ready to move from planning to implementation, press **Shift+Tab** again to return to a normal working mode.

Use Plan Mode for tasks that touch multiple files, change architecture, or feel risky.

### 4.4. Using multiple terminals in Cursor

You can have several terminals open at the same time, each with its own **Claude** session or command set. This is very useful for parallel work.

Typical usage:

- Terminal 1: **Claude** working on UI components.
- Terminal 2: **Claude** working on routing or mock data.
- Terminal 3: local dev server or Storybook running in the background.

In Cursor you can open new terminals using the terminal UI (for example, via plus button or split actions in the terminal panel) and then start **Claude** in each one with:

```bash
claude
```

Now you can talk to different Claude sessions in parallel or keep one focused on long‑running tasks.

---

## 5. Create the Next.js project with Claude

### 5.1. Ask Claude to generate a Next.js app

In a terminal at your workspace root (or inside a new folder):

1. Start **Claude** with:

```bash
claude
```

2. Make sure it is in **Plan Mode** (press **Shift+Tab** until Plan Mode is selected).
3. Give it a prompt like:

```text
We are starting a new Next.js + TypeScript + Tailwind project for a dashboard prototype.

Please:

1. Plan how to create the project using create-next-app.
2. Then run the necessary commands in this terminal to generate a project called "dashboard-prototype".
3. Enable TypeScript, ESLint and Tailwind, and use the App Router.
4. After the project is created, change directory into it.

Show me the plan first. After I confirm, execute the plan.
```

4. Review the plan. If it looks good, tell Claude to proceed. It will run the `npx create-next-app ...` command and set everything up for you.

### 5.2. Open the project in Cursor

Once Claude has created `dashboard-prototype`:

1. In Cursor, go to **File → Open Folder**.
2. Choose the `dashboard-prototype` folder.
3. You should now see `app/`, `public/`, `package.json` and other standard files.

### 5.3. Ask Claude to install dependencies and start a local server

1. Open a terminal at the root of `dashboard-prototype`.
2. Start **Claude** again:

```bash
claude
```

3. Ensure Plan Mode is enabled (Shift+Tab if needed).
4. Prompt:

```text
Please:

1. Plan how to install all dependencies for this Next.js app.
2. Then run the commands in this terminal to install them.
3. After installation, start the local development server and keep it running.

Show me the plan first, then execute it.
```

Claude will typically run `npm install` and then a dev‑server command.

- When the server starts, Claude will show a **local URL** (for example, something like `http://localhost:3000`, but it may differ).
- Open **the exact link Claude prints** in your browser, instead of relying on a hard‑coded URL.

If you want to keep the server running while you work with Claude elsewhere:

- Leave that terminal alone with the server running.
- Open another terminal in Cursor and start a separate **Claude** session there.

---

## 6. Initialize `/init` and configure `CLAUDE.md`

### 6.1. Run `/init`

In a **Claude** session at the project root:

1. Make sure Claude can see the project files (you are in the project folder).
2. Type the following and press Enter:

```text
/init
```

Claude will scan the project and propose creating or updating a `CLAUDE.md` file for this repository.

Think of `CLAUDE.md` as the “project memory” for Claude Code:

- how the project is structured,
- which commands to use,
- what workflow rules to follow.

### 6.2. Tell Claude what to put into `CLAUDE.md`

After `/init` completes, continue in the same session:

```text
Please open CLAUDE.md and update it for this project.

Include:

- The stack: Next.js with the App Router, React, TypeScript, Tailwind, Storybook, mock data only (no real backend), and Figma MCP.
- Common commands: how to start the dev server, how to run Storybook, and how to build the project.
- A short note that this project is a front-end-only dashboard prototype using mocked data.
- A "Workflow Orchestration" section with rules like:

  - Use Plan Mode for any non-trivial task before implementation.
  - Switch between modes using Shift+Tab, not by running extra commands.
  - Prefer building complex pages in smaller parts: shared layout and sidebar first, then reusable components, then full page assembly.
  - Use separate terminals when helpful: one Claude session for components, another for pages, and another for servers.
  - Let Claude keep the local dev server or Storybook running in one terminal, while you continue working with Claude in another terminal.
  - When visual refinement is needed, paste screenshots and explain the issues in text so Claude can match the design more closely.
  - Avoid inventing design details when Figma context is incomplete; if needed, ask me for a smaller frame or an additional screenshot instead of guessing.

Keep the file clear and concise.
```

Claude will edit `CLAUDE.md` with these details.

---

## 7. Add PRD and screen specs

### 7.1. Ask Claude to create documentation files

In a Claude session at the project root:

```text
We need simple documentation for this dashboard prototype.

Please:

1. Create a /docs folder.
2. Inside it, create /docs/PRD.md.
3. Create /docs/screens/dashboard.md, /docs/screens/users.md and /docs/screens/settings.md.

Use markdown files only.
```

Claude will create these files for you.

### 7.2. Write the PRD (you can use any AI to assist)

Use any AI tool you like (outside Cursor) to generate an English PRD, then paste it into `docs/PRD.md`.

Structure suggestion:

- What we are building (a front-end-only dashboard prototype for demonstration).
- Why we are building it (live prototype link for stakeholders).
- Core features (navigation, dashboard metrics, user management table, settings).
- Out of scope (no auth, no real backend, everything is mock data).
- Tech stack (Next.js, TypeScript, Tailwind, Storybook, Claude Code, Figma MCP).
- A section where you will paste Figma links later.

### 7.3. Write per‑screen specs

For each screen, create a short spec and paste it into the corresponding file.

Example structure for `dashboard.md`:

- Purpose of the page.
- Main flows (what the user can do).
- Key UI areas (cards, charts, table).
- Empty / loading / error states.
- Any special interactions.

Repeat for `users.md` and `settings.md`.

Claude will use these documents to understand context before writing code.

---

## 8. Extract design tokens from Figma via MCP

### 8.1. Get the design system frame URL when needed

When you are ready to create tokens:

1. Open the design system frame in Figma.
2. Copy the frame link.
3. Go back to Claude’s terminal session.

### 8.2. Ask Claude to create tokens and connect Tailwind

Prompt:

```text
You are helping me convert a Figma-based design system into a code-based token system.

Context:
- /docs/PRD.md

Please:

1. Using Figma MCP, open my design system frame from this URL: [PASTE DESIGN SYSTEM FRAME LINK HERE].
2. Create a new file /styles/tokens.css with CSS custom properties for colors, typography, spacing, radii, borders and status colors.
3. Update tailwind.config.js so Tailwind utilities use these CSS variables.
4. Follow the naming from Figma where it makes sense (e.g. Gray 100, Primary 600) but group tokens logically by:
   - background,
   - text,
   - actions,
   - borders,
   - status,
   - typography,
   - spacing,
   - radii.

Show me the plan of changes first. After I confirm, implement the changes.
```

Claude will:

- Create `/styles/tokens.css`.
- Update `tailwind.config.js` to map Tailwind to your tokens.

Inspect the result in both files so you understand where your design values live.

---

## 9. Set up Storybook

### 9.1. Install and configure Storybook with Claude

In a Claude session:

```text
We want to use Storybook to view and test all our components in isolation.

Please:

1. Plan how to set up Storybook for this Next.js + TypeScript + Tailwind project.
2. Then run the necessary commands to install and initialize Storybook.
3. Configure Storybook so it uses the same global styles as our main app, including Tailwind and /styles/tokens.css.

Show me the plan first, then execute it.
```

Claude will run the official Storybook init command and create configuration files and example stories for you.

### 9.2. Run Storybook and open it

Ask Claude:

```text
Please start Storybook in this project and keep it running in the current terminal. Once it starts, show me the local URL.
```

Claude will start Storybook and print a local link. Open **that exact URL** in your browser.

If you want to keep Storybook running:

- Leave that terminal alone.
- Use another terminal (and another **Claude** session) for implementation work.

---

## 10. Build core UI components from Figma

The goal now is to implement reusable components that match your Figma design system and can be previewed in Storybook.

### 10.1. General strategy and Figma context limits

Do not expect Claude to perfectly build an entire complex page from a single large Figma frame every time. Figma MCP has practical context limits, and large frames may cause Claude to improvise details once it runs out of context. Instead:

- Build **small parts first** (buttons, inputs, cards, table rows, sidebar).
- Turn those into reusable components.
- Assemble full pages from those components.

When you want to work on a particular component:

1. In Figma, zoom into the relevant part (e.g., Buttons area).
2. Copy that frame link at that moment.
3. Paste it into your prompt to Claude.

### 10.2. Example: Button component + stories

1. Open your button components in Figma and copy the frame link.
2. In Claude’s terminal:

```text
We are now building the Button component based on the Figma design system.

Context:
- /docs/PRD.md
- /styles/tokens.css
- Figma Buttons: [PASTE BUTTONS FRAME LINK HERE]

Task:

1) Create src/components/ui/button.tsx that:
   - Implements the button variants visible in Figma (e.g. primary, secondary, subtle).
   - Covers default, hover, focus and disabled states.
   - Uses Tailwind classes that reference our CSS variables from /styles/tokens.css (no hard-coded colors or spacing).
   - Is accessible (native <button>, keyboard focus, aria-hidden for decorative icons).

2) Create src/components/ui/button.stories.tsx for Storybook:
   - Stories that show all variants and states, including with icons.

First show me the plan, then create and populate the files.
```

3. Open Storybook, view the Button stories, and adjust as needed with additional prompts.

### 10.3. Example: Table for Users

Repeat a similar flow for the Users table:

- Figma: zoom into the Users table, copy link.
- Prompt Claude to create `src/components/users/users-table.tsx` and corresponding Storybook stories.
- Make the table accept an array of user objects as props instead of hard‑coded rows.

---

## 11. Refining components with screenshots

Claude Code supports pasting **screenshots** directly into the conversation, which is very useful for visual refinement.

Pattern:

1. In your browser, open Storybook or the running app and take a screenshot of the current implementation.
2. In Figma, take a screenshot of the target design if needed.
3. In Cursor’s terminal with **Claude**, paste one or more screenshots (via your OS clipboard).
4. Immediately after pasting, describe:
   - where the screenshot comes from (Storybook, Dashboard page, etc.),
   - what is wrong (spacing, alignment, colors, typography),
   - what you expect to see instead.

Example prompt:

```text
I have pasted two screenshots:

- The first is the current implementation of the Dashboard cards.
- The second is the target design from Figma.

Please compare them carefully and update the relevant components so that:

- Card padding and spacing match the Figma design.
- Typography (font size, weight, line height) matches.
- The grid layout and gaps between cards are correct.

Only change the components and layout that are clearly different; do not introduce new design ideas.
```

Claude will use both screenshots + your text to adjust the code in a targeted way.

---

## 12. Build the shared layout and routing

### 12.1. Start with shared layout, not full pages

Because of Figma context limits, it is usually more reliable to build the global layout first (sidebar + header) and only then individual pages.

1. In Figma, focus on the page that best shows the **overall layout** (for example, Dashboard).
2. Zoom into the area that includes the sidebar and top bar.
3. Copy that frame link.

Prompt for Claude:

```text
We now want to build the shared app shell layout for all dashboard pages.

Context:
- /docs/PRD.md
- /styles/tokens.css
- Figma layout frame: [PASTE LAYOUT FRAME LINK HERE]

Task:

1) Create a reusable layout component in src/components/layout/AppShell.tsx that:
   - Renders a left sidebar with navigation items for Dashboard, Users and Settings.
   - Renders a top header (product name, search, user avatar, as in Figma).
   - Exposes a main content area where page content will be rendered.

2) Update app/layout.tsx to wrap all pages with AppShell.

3) Use Next.js App Router conventions and Link components for navigation.

Show me the plan first, then implement the changes.
```

### 12.2. Create pages and connect navigation

For **Dashboard**:

1. In Figma, zoom into the Dashboard content (without the sidebar if necessary), copy the frame link.
2. Prompt:

```text
We now want to implement the Dashboard page content.

Context:
- /docs/PRD.md
- /docs/screens/dashboard.md
- /styles/tokens.css
- Figma Dashboard content: [PASTE LINK HERE]

Task:

1) Create a Dashboard page (for example app/(app)/dashboard/page.tsx).
2) Use existing components (cards, table, buttons) where possible, rather than writing raw HTML.
3) Lay out the main sections to visually match the Dashboard design.
4) Ensure the sidebar navigation item "Dashboard" routes to this page.

Show me the files you plan to change and then implement.
```

Do the same for **Users** and **Settings**, each with its own Figma frame link and spec.

If a full page is too big for one pass, break it down into smaller prompts:

- build the filters block,
- build the header row,
- build the table section,
- then assemble them.

---

## 13. Add mock data and client‑side behavior

### 13.1. Create mock data files

In a Claude session:

```text
We want realistic mock data for the Users page, without any backend.

Task:

1) Create a src/data folder if it does not exist.
2) Inside it, create src/data/mockUsers.ts.
3) In that file, export an array of 20–30 user objects with these fields:
   - id
   - name
   - email
   - role (Admin, Manager, Viewer, etc.)
   - status (Active, Invited, Suspended, etc.)
   - createdAt

Please show me the contents of mockUsers.ts after you create it.
```

### 13.2. Connect mock data to the Users page

Prompt:

```text
On the Users page, we want to use the mockUsers array instead of hard-coded rows.

Please:

1) Import mockUsers from src/data/mockUsers in the Users page.
2) Pass mockUsers into the UsersTable component as a prop.
3) Ensure the table renders correct data for name, email, role, status and createdAt.

Show me the diff for the Users page and UsersTable.
```

### 13.3. Implement filters and search

If your design includes filters/search:

```text
We need simple client-side filtering and search on the Users page.

Task:

1) Turn the Users page into a client component if it is not already.
2) Add React state for:
   - role filter,
   - status filter,
   - search text.
3) Filter the mockUsers array in memory based on this state.
4) Wire the UI controls (selects, chips, search input) to the state.
5) Ensure the filtered array is passed into UsersTable.

Do not introduce any backend calls or APIs. Everything should stay on the client.
```

Now the Users page feels “live” while still using only mock data.

---

## 14. Verify components and states with Storybook

Continue to use Storybook as a design laboratory:

- Add stories for key states: loading, empty, error, long text, edge cases.
- Use screenshots + prompts to refine visual differences.

Example prompt:

```text
Some of our Storybook stories do not show all important states.

Please:

1) For Button stories, add stories for all variants (primary, secondary, subtle) in default, hover, disabled and "with icon" states.
2) For UsersTable stories, add stories for:
   - normal populated list,
   - empty list,
   - loading state (e.g. skeleton rows),
   - error-like state if we decide to show one.

Update the *.stories.tsx files accordingly.
```

---

## 15. Git: initialize and commit

### 15.1. Initialize Git and first commit

In a Claude session at the project root:

```text
Please initialize Git for this project and create the first commit.

Steps:

1) Run git init.
2) Stage all files.
3) Commit with message "Initial dashboard prototype from Figma with Claude".

If Git user.name and user.email are not configured, show me the commands you will run to set them, then run them.
```

Claude will execute the needed commands and configure name/email if required.

---

## 16. Push to GitHub

### 16.1. Create an empty GitHub repository

1. Open GitHub and click **New repository**.
2. Name it something like `dashboard-prototype`.
3. Leave README / .gitignore unchecked (empty repo).
4. Click **Create repository**.

GitHub will show you a section titled “push an existing repository from the command line”.

### 16.2. Connect local repo and push

Either copy the commands from GitHub into Cursor’s terminal yourself or ask Claude to run them, for example:

```text
Please connect this local repository to the new GitHub repo I just created and push the current main branch.

Use the commands shown in the "push an existing repository from the command line" section on GitHub.
```

After this, your code is on GitHub.

---

## 17. Deploy to Vercel

### 17.1. Import the project from GitHub

1. Go to Vercel and click **Add New → Project**.
2. Choose your `dashboard-prototype` repo from the list.
3. Confirm that the framework preset is **Next.js**.
4. Keep the default root directory unless your app is in a subfolder.
5. Click **Deploy**.

Vercel will:

- Install dependencies,
- Build the Next.js project,
- Deploy it and give you a live URL (e.g., `https://...vercel.app`).

### 17.2. Automatic redeploys

Whenever you update the project:

1. Ask Claude to implement the required changes.
2. Commit in Git.
3. Push to GitHub.

Vercel will automatically create a new deployment for the latest commit. The main production URL stays the same; the content updates.

---

## 18. Using other AI tools as “prompt designers”

You can use any other AI tool to help you craft better prompts for **Claude**:

- Describe in your own language what you want.
- Ask the tool to rewrite this as a **structured Claude prompt**.
- Paste that prompt into the Claude terminal in Cursor.

This separation often works well: one AI for wording, Claude for coding.

---

## 19. Final checklist before sharing the link

Before sending the Vercel URL to colleagues or clients, quickly verify:

- Navigation between Dashboard, Users and Settings works.
- Visuals of key screens closely match Figma (cards, tables, sidebar, header).
- Buttons, filters, search and forms behave as expected on mock data.
- Storybook has stories for important components and states.
- The Vercel deployment status is “Ready” and loads without obvious errors.

At this point you have a **complete, production‑like prototype built from Figma**, with minimal manual coding and most of the heavy lifting handled by **Claude Code in Cursor’s terminal**.
