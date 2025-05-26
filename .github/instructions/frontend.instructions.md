---
applyTo: '**/src/**, **/public/**, **/*.html'
---

# Frontend Development Standards

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

- Implement React.memo for expensive re-renders
- Use useMemo and useCallback for expensive computations
- Implement code splitting with lazy loading
- Optimize bundle size with tree shaking
- Use virtual scrolling for large lists

## Styling

- Use TailwindCSS and DaisyUI for component styling
- Follow mobile-first responsive design principles
- Maintain consistent design system and spacing
- Use semantic HTML elements for accessibility

## Accessibility

- Use semantic HTML and ARIA attributes
- Ensure keyboard navigation support
- Maintain proper color contrast ratios
- Test with screen readers
