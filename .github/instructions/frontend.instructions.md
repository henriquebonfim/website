---
applyTo: '**/src/**, **/public/**, **/*.html'
---

# Frontend Development Standards

## Accessibility

- Use semantic HTML, HTML entity like &nbsp; and ARIA attributes
- Ensure keyboard navigation support

## Component Architecture

- Use functional components with hooks over class components
- Keep components small and single-purpose
- Extract custom hooks for reusable logic
- Use composition pattern over inheritance
- Implement proper prop validation with TypeScript/PropTypes

## State Management

- Use local state (useState) for component-specific data
- Implement context for shared state across component trees
- Use reducers for complex state logic
- Avoid prop drilling with proper state architecture

## Performance

- Implement memo for expensive re-renders
- Use useMemo and useCallback for expensive computations
- Implement code splitting with lazy loading
- Optimize bundle size with tree shaking
- Use virtual scrolling for large lists

## Styling

- Use TailwindCSS and DaisyUI for component styling
- Follow mobile-first responsive design principles
- Maintain consistent design system and spacing

## i18n

- use lingui for internationalization
- There are two types of macros: Core Macros (JS) and React Macros (JSX).
- Lingui uses the CLDR Plural Rules to determine the correct plural form for each language.
- Choose the plural forms used in your source code based on the pluralization rules of your source locale.

- All Core Macros cannot be used at the module level:

- Global i18n Instance
- For better control and flexibility, it's a good idea to avoid the global i18n instance and instead use a specific instance tailored to your needs:

```typescript
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react/macro';

export function showAlert(i18n) {
  alert(i18n._(msg`...`));
}

function MyComponent() {
  // Get i18n instance from React Context
  const { i18n } = useLingui();

  // Pass the instance from outside
  showAlert(i18n);
}
```
