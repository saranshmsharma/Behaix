# Contributing to Behaix

Thanks for helping improve Behaix.

## Development

```bash
pnpm install
pnpm storybook
```

Before opening a pull request, run:

```bash
pnpm typecheck
pnpm test
pnpm build
```

## Component checklist

- Use CVA for variant logic.
- Forward refs on public components.
- Export `ComponentNameProps`.
- Use CSS custom properties for design values.
- Include Storybook autodocs stories.
- Include unit tests for core behavior.
- Document accessibility notes, token dependencies, and limitations.

## Changesets

For user-facing package changes, add a changeset:

```bash
pnpm changeset
```
