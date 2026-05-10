# Behaix

Behaix is a startup-grade enterprise design system built with React 18, TypeScript 5, Tailwind CSS v4, CSS custom properties, CVA, Radix UI primitives, Storybook 8, Vitest, Testing Library, Changesets, and pnpm workspaces.

## Packages

- `packages/tokens`: design tokens in JSON, CSS custom properties, and TypeScript constants.
- `packages/components`: React component library with atoms, form primitives, surfaces, and feedback components.
- `packages/docs`: Storybook 8 documentation site.

## Local setup

```bash
pnpm install
pnpm storybook
```

Open Storybook at:

```text
http://localhost:6006
```

## Useful scripts

```bash
pnpm build
pnpm typecheck
pnpm test
pnpm lint
pnpm changeset
```

## Current component coverage

### Tier 1 atoms

- Button
- Typography: Heading, Text, Label, Code
- Icon
- Badge
- Divider

### Tier 2 form primitives

- FormField
- TextInput
- Textarea
- Select
- Checkbox and CheckboxGroup
- RadioGroup
- Toggle

### Tier 3 surfaces and feedback

- Card
- Avatar and AvatarGroup
- ToastProvider, useToast, ToastItem
- Alert
- Spinner
- Skeleton
- Tooltip

## Theme

Behaix tokens are exposed as CSS custom properties in `packages/tokens/src/tokens.css`. Light mode resolves from `:root`, and dark mode resolves from `[data-theme="dark"]`.

Storybook includes a global theme toolbar that wraps every story in `ThemeProvider`.

## License

MIT
