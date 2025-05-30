import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { Component, type ErrorInfo, type ReactNode, createRef } from 'react';
import { sanitizeHTML } from '../../utils/sanitizeHTML';

/**
 * Props for the ErrorBoundary component.
 */
interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

/**
 * State for the ErrorBoundary component.
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * A reusable React error boundary component for catching and displaying errors in the component tree.
 *
 * @example
 * <ErrorBoundary fallback={<CustomFallback />} onError={handleError}>
 *   <YourComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private boundaryId = `error-boundary-${Math.random().toString(36).slice(2, 10)}`;
  private errorRef = createRef<HTMLDivElement>();

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error with boundary context
    console.error(
      `ErrorBoundary [${this.boundaryId}] caught:`,
      error,
      errorInfo,
    );
    this.props.onError?.(error, errorInfo);
  }

  componentDidUpdate(_: ErrorBoundaryProps, prevState: ErrorBoundaryState) {
    // Move focus to error message when error occurs
    if (this.state.hasError && !prevState.hasError && this.errorRef.current) {
      this.errorRef.current.focus();
    }
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      if (fallback) return fallback;
      return (
        <section
          className="m-auto flex h-screen flex-col content-center items-center justify-center gap-4"
          data-testid="error-boundary-fallback"
          aria-label={t`Error boundary fallback`}
        >
          <article
            className="prose text-center"
            tabIndex={-1}
            ref={this.errorRef}
            aria-live="assertive"
          >
            <h1>
              <Trans>Error</Trans>
            </h1>
            <p>
              <Trans>An error occurred while rendering the component.</Trans>
            </p>
            {error && (
              <pre
                className="text-wrap"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHTML(error.toString()),
                }}
              />
            )}
          </article>
          <div className="flex gap-2">
            <button
              onClick={this.handleReset}
              className="btn btn-outline"
              type="button"
              aria-label={t`Try again`}
            >
              <Trans>Try again</Trans>
            </button>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-neutral text-base-100"
              type="button"
              aria-label={t`Reload the page`}
            >
              <Trans>Reload the page</Trans>
            </button>
          </div>
        </section>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
