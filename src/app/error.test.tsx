import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import ErrorBoundary from './error';

// Helper component that throws on render

function ThrowError({ message }: { message: string }): never {
  throw new Error(message);
}

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test('renders children when no error', async () => {
    expect.hasAssertions();
    const { getByText } = render(
      <ErrorBoundary>
        <div>Hello world</div>
      </ErrorBoundary>,
    );
    expect(getByText('Hello world')).toBeInTheDocument();
  });

  test('catches error and renders fallback UI', async () => {
    expect.hasAssertions();
    const { getByTestId, getByText } = render(
      <ErrorBoundary>
        <ThrowError message="Test error" />
      </ErrorBoundary>,
    );
    expect(getByTestId('error-boundary-fallback')).toBeInTheDocument();
    expect(getByText('Error')).toBeInTheDocument();
    expect(
      getByText('An error occurred while rendering the component.'),
    ).toBeInTheDocument();
    expect(getByText('Try again')).toBeInTheDocument();
    expect(getByText('Reload the page')).toBeInTheDocument();
    expect(getByText(/Test error/)).toBeInTheDocument();
  });

  test('renders custom fallback if provided', async () => {
    expect.hasAssertions();
    const fallback = <div data-testid="custom-fallback">Custom Fallback</div>;
    const { getByTestId } = render(
      <ErrorBoundary fallback={fallback}>
        <ThrowError message="Custom error" />
      </ErrorBoundary>,
    );
    expect(getByTestId('custom-fallback')).toBeInTheDocument();
  });

  test('calls onError callback when error is caught', async () => {
    expect.hasAssertions();
    const onError = vi.fn();
    render(
      <ErrorBoundary onError={onError}>
        <ThrowError message="Callback error" />
      </ErrorBoundary>,
    );
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].message).toBe('Callback error');
  });

  test('resets error state when Try again is clicked', async () => {
    expect.hasAssertions();
    const { getByText, getByTestId } = render(
      <ErrorBoundary>
        <ThrowError message="Reset error" />
      </ErrorBoundary>,
    );
    expect(getByText('Try again')).toBeInTheDocument();
    getByText('Try again').click();
    // After reset, error boundary should try to render children again, which will throw again
    expect(getByText('Try again')).toBeInTheDocument();
    expect(getByTestId('error-boundary-fallback')).toBeInTheDocument();
  });
});
