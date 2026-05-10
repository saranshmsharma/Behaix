# @behaix/tokens

> Design tokens for the Behaix design system — CSS custom properties, JSON, and TypeScript constants.

## Installation

```bash
npm install @behaix/tokens
# or
pnpm add @behaix/tokens
# or
yarn add @behaix/tokens
```

## Usage

### CSS Variables
Import the CSS file to make the design tokens available as CSS custom properties in your project.

```javascript
import '@behaix/tokens/tokens.css';
```

### TypeScript/JavaScript Constants
You can also import tokens as JavaScript constants for use in CSS-in-JS or logic.

```typescript
import { colors, spacing, radius } from '@behaix/tokens';

console.log(colors.primary); // var(--color-primary)
```

### JSON
For build tools or cross-platform usage, a JSON version is available.

```json
{
  "colors": {
    "primary": "#6d28d9"
  }
}
```

## Tokens Categories
- **Colors**: Primary, Success, Danger, Warning, Info, and Neutrals.
- **Typography**: Font families, sizes, weights, and line heights.
- **Spacing**: Consistent spacing scale for margins and paddings.
- **Radius**: Standardized border-radius values.
- **Shadows**: Elevation levels.
- **Animations**: Transition durations and easing functions.

## License
MIT © [Saransh Sharma](https://sransh.com)