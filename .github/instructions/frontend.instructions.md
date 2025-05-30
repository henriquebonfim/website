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
- In general, there are 6 plural forms (taken from the CLDR Plurals page):
  -- zero
  -- one (singular)
  -- two (dual)
  -- few (paucal)
  -- many (also used for fractions if they have a separate class)
  -- other (required — general plural form — also used if the language only has a single form)
