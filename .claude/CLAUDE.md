#  Demo App

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A simple React demo app built with Vite and TypeScript. Displays a single page with " Demo App" heading.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build
npm test             # Run tests once
npm run test:watch   # Run tests in watch mode
```

## Architecture

- `src/App.tsx` - Main React component
- `src/main.tsx` - Entry point, renders App to DOM
- `src/App.test.tsx` - Tests using Vitest and React Testing Library
- `vite.config.ts` - Vite and Vitest configuration
- `index.html` - HTML template

## High-Risk Areas

### Navigation and Routing
- `src/components/NavigationMenu.tsx` - Recently added navigation component with routing logic. Verify all routes are properly configured and link to existing pages before making changes.
- All route paths must correspond to actual page components in `src/pages/`.

### Page Components
- `src/pages/` - Contains Contact, FAQ, and Home page components added recently.
- These pages have limited test coverage. Add tests when modifying functionality.
- Ensure consistency in layout and styling across all pages.

### Test Coverage
- `src/App.test.tsx` - Currently the only test file.
- Test coverage is minimal relative to codebase size.
- When adding new features, include corresponding test files.
- Consider adding tests for navigation flows and page components.

## Linear Ticket Workflow

When working on Linear tickets, follow this PR-based workflow. Move tickets through statuses automatically at the appropriate stages.

### Ticket Statuses

| Status | When to Use |
|--------|-------------|
| Backlog | Ticket not yet prioritized |
| Todo | Ticket ready to be worked on |
| In Progress | Development actively underway |
| In Review | PR opened, awaiting review |
| Done | PR merged |
| Canceled | Work abandoned |
| Duplicate | Duplicate of another ticket |

### Workflow Steps

#### 1. Start Work
- Move ticket from **Todo** → **In Progress**
- Create a Linear-compliant branch from main:
  ```bash
  git checkout main && git pull
  git checkout -b <team>-<issue-number>-<short-description>
  ```
  Example: `ker-123-add-login-button`

#### 2. Develop
- Implement the feature/fix
- Run tests: `npm test`
- Run build: `npm run build`

#### 3. Prepare for Review
- Start the dev server: `npm run dev`
- Take screenshots of the changes using browser automation tools
- Do NOT commit screenshots to the repo

#### 4. Open Pull Request
- Push the branch: `git push -u origin <branch-name>`
- Create PR with `gh pr create`
- Include screenshots in the PR description using markdown image syntax
- Move ticket from **In Progress** → **In Review**

#### 5. After Merge
- Ticket automatically moves to **Done** (via Linear-GitHub integration)
- Or manually move to **Done** if not automated

### Screenshot Guidelines

When taking screenshots for PR descriptions:
1. Capture before/after states when relevant
2. Show the feature in different states (loading, success, error)
3. Use descriptive filenames
4. Upload to GitHub PR description directly (drag & drop or paste)

### Branch Naming Convention

Format: `<team-prefix>-<issue-number>-<description>`

- Use lowercase
- Use hyphens as separators
- Keep description short (2-4 words)
- Include the Linear issue number for automatic linking

Examples:
- `ker-42-user-authentication`
- `ker-156-fix-navbar-styling`
- `ker-89-add-dark-mode`
