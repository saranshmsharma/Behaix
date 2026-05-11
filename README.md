# Behaix Design System

Storybook Live: https://behaix-components.vercel.app/

<p align="center">
  <img src="https://img.shields.io/npm/v/@behaix/components?color=6d28d9&style=flat-square" alt="npm version" />
  <img src="https://img.shields.io/npm/l/@behaix/components?color=10b981&style=flat-square" alt="MIT License" />
  <img src="https://img.shields.io/badge/React-18-61dafb?style=flat-square" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square" alt="Tailwind CSS v4" />
</p>

<p align="center">
  <strong>Built for enterprises that think like startups. Designed for AI-forward products that refuse to look boring.</strong>
</p>

<p align="center">
  <a href="https://sransh.com">Portfolio</a> ·
  <a href="https://linkedin.com/in/sransh">LinkedIn</a> ·
  <a href="https://github.com/saranshmsharma/behaix">GitHub</a>
</p>

---

## Why Behaix?

Enterprise design systems are often locked behind legacy token schemas and a visual language that screams "2014 SaaS." Meanwhile, startup systems feel fresh but lack the depth to scale — missing accessibility, missing density controls, missing the nuance that real complex UIs demand.

**Behaix is the answer.** A design system that can power a Series B enterprise dashboard _and_ a sleek AI-native product — without making either feel compromised.

---

## Installation

```bash
# Install the component library
npm i @behaix/components

# Install the design tokens
npm i @behaix/tokens
```

### Peer dependencies

```bash
npm i react react-dom
```

---

## Quick Start

### 1. Import tokens CSS (add to your app's root)

```tsx
// main.tsx or _app.tsx
import '@behaix/tokens/tokens.css';
```

### 2. Wrap your app with ThemeProvider

```tsx
import { ThemeProvider } from '@behaix/components';

function App() {
  return (
    <ThemeProvider theme="light">
      {/* your app */}
    </ThemeProvider>
  );
}
```

### 3. Use components

```tsx
import {
  Button,
  ButtonGroup,
  Badge,
  Card,
  Stepper,
  Step,
  LinearProgress,
  CircularProgress,
  SegmentedProgress,
  Tracker,
  TrackerItem,
  StatWidget,
} from '@behaix/components';

export function Dashboard() {
  return (
    <div className="p-8 flex flex-col gap-6">
      {/* Button variants */}
      <ButtonGroup orientation="horizontal">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </ButtonGroup>

      {/* Progress bars */}
      <LinearProgress value={72} label="Storage" showValue color="gradient" />
      <CircularProgress value={85} size="lg" color="success" />

      {/* Stepper wizard */}
      <Stepper activeStep={1} isInteractive onStepClick={(i) => console.log(i)}>
        <Step label="Cart" description="Review items" />
        <Step label="Shipping" description="Enter address" />
        <Step label="Payment" description="Checkout" />
        <Step label="Confirmed" description="Done!" />
      </Stepper>

      {/* Order tracker */}
      <Tracker>
        <TrackerItem title="Order Placed" status="completed" time="10:00 AM" />
        <TrackerItem title="Preparing" status="current" time="10:30 AM" />
        <TrackerItem title="Out for Delivery" status="pending" />
        <TrackerItem title="Delivered" status="pending" />
      </Tracker>
    </div>
  );
}
```

---

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| `@behaix/components` | `1.0.0` | 38 production-ready React components |
| `@behaix/tokens` | `1.0.0` | Design tokens in CSS, JSON, and TypeScript |

---

## Component Library

### 🔵 Atoms
| Component | Description |
|-----------|-------------|
| `Button` | 5 variants, 4 sizes, loading states, icon support |
| `ButtonGroup` | Horizontal & vertical grouped buttons |
| `Badge` | Status, label, count — dot, solid, outline |
| `Typography` | `Heading`, `Text`, `Label`, `Code` |
| `Icon` | Lucide-based icon wrapper |
| `Divider` | Horizontal separator with optional label |

### 🟢 Form Primitives
| Component | Description |
|-----------|-------------|
| `TextInput` | Label, error, helper text, prefix/suffix icons |
| `Textarea` | Auto-resize, character count |
| `Select` | Radix-powered dropdown with search |
| `Checkbox` / `CheckboxGroup` | Controlled & uncontrolled |
| `RadioGroup` | Accessible radio group |
| `Toggle` | Switch component |
| `FormField` | Wrapper with label, error, and helper text |
| `DatePicker` | Calendar-based date selection |
| `Calendar` | Standalone calendar |
| `Command` | Command palette / search |

### 🟣 Surfaces & Layout
| Component | Description |
|-----------|-------------|
| `Card` | Surface container with variants |
| `Modal` | Accessible dialog with animations |
| `Drawer` | Slide-in panel |
| `Popover` | Floating content |
| `Tooltip` | Hover hints |
| `Navbar` | Top navigation with glass & floating variants |
| `Sidebar` | Collapsible, animated side nav |
| `Tabs` | Horizontal & vertical tab navigation |
| `Accordion` | Expand/collapse sections |
| `Menu` | Dropdown context menu |
| `Breadcrumb` | Navigation trail |
| `Pagination` | Page control |
| `Table` | Sortable data table |

### 🟡 Feedback & Data
| Component | Description |
|-----------|-------------|
| `Alert` | Contextual alert messages |
| `Toast` | Push notifications |
| `Spinner` | Loading indicator |
| `Skeleton` | Content placeholder |
| `Avatar` / `AvatarGroup` | User avatars with stacking |
| `EmptyState` | Zero-state placeholder |
| `StatWidget` | Dashboard metric card |
| `LinearProgress` | Horizontal progress bar (6 colors, 5 sizes, striped) |
| `CircularProgress` | SVG ring progress (4 sizes, gradient, indeterminate) |
| `SegmentedProgress` | Discrete segment bar (streaks, battery, steps) |
| `Stepper` / `Step` | Multi-step wizard (horizontal & vertical, interactive) |
| `Tracker` / `TrackerItem` | Order/delivery timeline tracker |

---

## Theming

Tokens are exposed as CSS custom properties. Light mode resolves from `:root`, dark from `[data-theme="dark"]`.

```css
/* Override any token */
:root {
  --color-primary: #6d28d9;
  --color-surface: #ffffff;
  --radius-md: 0.75rem;
}
```

---

## Monorepo Development

```bash
# Clone
git clone https://github.com/saranshsharma/behaix.git
cd behaix

# Install
pnpm install

# Start Storybook dev server
pnpm dev     # → http://localhost:6006

# Build all packages
pnpm build

# Type check
pnpm typecheck

# Run tests
pnpm test

# Lint
pnpm lint
```

---

## Contributing

Contributions, issues, and feature requests are welcome!  
See the [contributing guide](.github/CONTRIBUTING.md) for details.

---

## License

MIT © [Saransh Sharma](https://sransh.com)
