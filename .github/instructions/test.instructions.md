---
applyTo: '**/*.test.*,**/*.spec.*,tests/**,__tests__/**'
---

# Testing Standards

This document outlines the standards and best practices for writing tests in our codebase, focusing on unit tests, integration tests, and UI tests using Vitest and React Testing Library.

## Test Code Snippet

```typescript
import { useState } from 'react'

export default function HelloWorld({ name }: { name: string }) {
  const [count, setCount] = useState(1)
  return (
    <div>
      <h1>Hello {name} x{count}!</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}
```

```typescript
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest'
import HelloWorld from '../src/HelloWorld'

test('renders name', async () => {
  const { getByText, getByRole } = render(<HelloWorld name="Vitest" />)

  await expect(getByText('Hello Vitest x1!')).toBeInTheDocument()
  await getByRole('button', { name: 'Increment '}).click()

  await expect(getByText('Hello Vitest x2!')).toBeInTheDocument()
})

```

## Test Structure

- Follow AAA pattern: Arrange, Act, Assert
- Use descriptive test names that explain the scenario
- Group related tests in describe blocks
- Keep tests isolated and independent
- Use beforeEach/afterEach for test setup and cleanup

## Test Coverage

- Maintain minimum 80% code coverage for critical paths
- Test happy paths, edge cases, and error scenarios
- Cover all public methods and API endpoints
- Focus on business logic over implementation details

## Test Types

- Unit tests: Test individual functions/methods in isolation
- Integration tests: Test component interactions
- E2E tests: Test complete user workflows
- API tests: Test endpoints with various inputs
- Performance tests: Test under load conditions

## Best Practices

- Mock external dependencies and third-party services
- Use test data builders or factories for complex objects
- Avoid testing implementation details
- Test behavior, not internal state
- Use parameterized tests for multiple similar scenarios

## Tools and Conventions

- Use consistent assertion libraries across the project
- Implement test utilities for common setup patterns
- Use meaningful test data that reflects real scenarios
- Clean up resources after tests complete
- Run tests in CI/CD pipeline before deployment

## Framework

- Use **Vitest** as the primary test runner for unit, integration, and UI tests.
- Prefer **testing-library/react** for React component tests.
- Use **@testing-library/jest-dom** for extended DOM assertions.
- For browser-based UI tests, enable Vitest browser mode with Playwright provider if needed.

## Structure

- Organize tests in a `test/` directory or alongside source files as `*.spec.ts(x)`.
- Use `describe` blocks for grouping related tests.
- Use clear, descriptive test names.
- Use a global setup file (e.g., `test/setup.ts`) for mocks (IntersectionObserver, ResizeObserver, matchMedia, etc.).

## Coverage

- Cover common scenarios, edge cases, and error handling.
- Mock external dependencies and APIs.
- Aim for high branch and statement coverage.
- Test accessibility (a11y) and visual states (focus, hover, disabled, etc.).

## Naming

- Test files: `ComponentName.spec.tsx` or `functionName.spec.ts`.
- Test cases: Use descriptive, behavior-focused names.

## Best Practices

- Always generate **unit tests** for every function or class.
- For **React components**, generate **component tests** using **React Testing Library** and **Vitest**.
- Ensure that **edge cases** are covered in tests.
- Follow the **Arrange, Act, Assert (AAA)** pattern for organizing tests.
- Use **mocking** to isolate tests from external dependencies.
- Keep test names descriptive and related to the functionality being tested.
- For API or integration tests, ensure **proper assertions** on response status, data shape, and errors.
- Keep tests isolated and deterministic.
- Use fixtures and factories for test data.
- Prefer assertions that match user behavior (for UI).
- Use `toHaveClass`, `toHaveStyle`, and accessibility queries to test Tailwind/DaisyUI styling and states.
- Test DaisyUI components for correct classes, states, and accessibility roles.
