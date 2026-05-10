# @behaix/components

Premium, AI-forward React component library — enterprise-ready, fully themable, and accessible.

## Features

- **38+ Production-ready components**: From basic atoms to complex dashboard widgets.
- **AI-Forward Design**: Modern aesthetics tailored for next-gen intelligent applications.
- **Enterprise Grade**: Built with Radix UI primitives for world-class accessibility (WAI-ARIA).
- **Tailwind CSS v4**: Leveraging the latest in CSS capabilities and performance.
- **Type Safe**: Written 100% in TypeScript with comprehensive prop definitions.
- **Themable**: Deeply customizable via design tokens and CSS variables.

## Installation

```bash
npm install @behaix/components @behaix/tokens
# or
pnpm add @behaix/components @behaix/tokens
# or
yarn add @behaix/components @behaix/tokens
```

### Peer Dependencies

Ensure you have the following peer dependencies installed in your project:

```bash
npm install react react-dom
```

## Quick Start

### 1. Import Design Tokens

Behaix components rely on the design tokens for styling. Import the CSS in your root file (e.g., `main.tsx` or `_app.tsx`):

```tsx
import '@behaix/tokens/tokens.css';
```

### 2. Add Theme Provider

Wrap your application with the `ThemeProvider` to enable theme switching and provide the necessary context for components.

```tsx
import { ThemeProvider, Button } from '@behaix/components';

function App() {
  return (
    <ThemeProvider theme="light">
      <Button variant="primary">Hello Behaix</Button>
    </ThemeProvider>
  );
}
```

## Documentation

For full documentation, visit [behaix.com](https://behaix.com) or run the storybook locally:

```bash
pnpm storybook
```

## Components Included

### Atoms & Primitives
- **General**: `Button`, `ButtonGroup`, `Badge`, `Icon`, `Divider`
- **Typography**: `Heading`, `Text`, `Label`, `Code`
- **Feedback**: `Alert`, `Toast`, `Spinner`, `Skeleton`, `Progress` (Linear, Circular, Segmented)

### Forms
- **Inputs**: `TextInput`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Toggle`
- **Selection**: `DatePicker`, `Calendar`, `Command`
- **Layout**: `FormField`

### Navigation & Layout
- **Navigation**: `Navbar`, `Sidebar`, `Breadcrumb`, `Pagination`, `Tabs`, `Stepper`
- **Overlays**: `Modal`, `Drawer`, `Popover`, `Tooltip`, `Menu`
- **Data Display**: `Card`, `Table`, `Accordion`, `Avatar`, `EmptyState`, `Tracker`, `StatWidget`

## Customization

Behaix uses CSS variables for all design tokens. You can override them in your global CSS:

```css
:root {
  --color-primary: #6d28d9;
  --radius-md: 0.5rem;
}
```

## Accessibility

Every component is built with accessibility as a first-class citizen. We use [Radix UI](https://www.radix-ui.com/) primitives to ensure keyboard navigation, focus management, and screen reader support meet enterprise standards.

## License

MIT © [Saransh Sharma](https://sransh.com)