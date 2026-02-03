# Kerex Demo

A simple React demo app built with Vite and TypeScript.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm test         # Run tests
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Vitest + React Testing Library

## Ticket Workflow

We use Linear for ticket management with a PR-based workflow.

### Statuses

- **Backlog** → Not yet prioritized
- **Todo** → Ready to work on
- **In Progress** → Development underway
- **In Review** → PR opened
- **Done** → PR merged

### Process

1. **Pick a ticket** from Todo
2. **Create branch** from main: `<team>-<issue>-<description>` (e.g., `ker-123-add-feature`)
3. **Move ticket** → In Progress
4. **Develop** and verify with `npm test` and `npm run build`
5. **Take screenshots** of changes (don't commit them)
6. **Open PR** with screenshots in description
7. **Move ticket** → In Review
8. **After merge** → Done
