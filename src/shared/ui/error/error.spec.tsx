import { i18n } from '#/shared/i18n';
import { I18nProvider } from '@lingui/react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import ErrorBoundary from '.';

// Helper component that throws on render
function ThrowError({ message }: { message: string }): never {
  throw new Error(message);
}

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    act(() => {
      i18n.activate('en');
    });
  });

  const renderWithI18n = (ui: React.ReactElement) =>
    render(<I18nProvider i18n={i18n}>{ui}</I18nProvider>);

  test('renders children when no error', async () => {
    expect.hasAssertions();
    const { getByText } = renderWithI18n(
      <ErrorBoundary>
        <div>Hello world</div>
      </ErrorBoundary>,
    );
    expect(getByText('Hello world')).toBeInTheDocument();
  });

  test('catches error and renders fallback UI', async () => {
    expect.hasAssertions();
    const { getByTestId, getByText } = renderWithI18n(
      <ErrorBoundary>
        <ThrowError message="Test error" />
      </ErrorBoundary>,
    );
    expect(getByTestId('error-boundary-fallback')).toBeInTheDocument();
    expect(getByText(i18n._('Error'))).toBeInTheDocument();
    expect(
      getByText(i18n._('An error occurred while rendering the component.')),
    ).toBeInTheDocument();
    expect(getByText(i18n._('Try again'))).toBeInTheDocument();
    expect(getByText(i18n._('Reload the page'))).toBeInTheDocument();
    expect(getByText(/Test error/)).toBeInTheDocument();
  });

  test('renders custom fallback if provided', async () => {
    expect.hasAssertions();
    const fallback = <div data-testid="custom-fallback">Custom Fallback</div>;
    const { getByTestId } = renderWithI18n(
      <ErrorBoundary fallback={fallback}>
        <ThrowError message="Custom error" />
      </ErrorBoundary>,
    );
    expect(getByTestId('custom-fallback')).toBeInTheDocument();
  });

  test('calls onError callback when error is caught', async () => {
    expect.hasAssertions();
    const onError = vi.fn();
    renderWithI18n(
      <ErrorBoundary onError={onError}>
        <ThrowError message="Callback error" />
      </ErrorBoundary>,
    );
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].message).toBe('Callback error');
  });

  test('resets error state when Try again is clicked', async () => {
    expect.hasAssertions();
    const { getByText, getByTestId } = renderWithI18n(
      <ErrorBoundary>
        <ThrowError message="Reset error" />
      </ErrorBoundary>,
    );
    expect(getByText(i18n._('Try again'))).toBeInTheDocument();
    getByText(i18n._('Try again')).click();
    // After reset, error boundary should try to render children again, which will throw again
    expect(getByText(i18n._('Try again'))).toBeInTheDocument();
    expect(getByTestId('error-boundary-fallback')).toBeInTheDocument();
  });
});
