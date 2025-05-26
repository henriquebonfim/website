import { Component, type ErrorInfo, type ReactNode } from 'react';
import { sanitizeHTML } from '../shared/utils/sanitizeHTML';

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
        >
          <article className="prose text-center">
            <h1>Error</h1>
            <p>An error occurred while rendering the component.</p>
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
            >
              Try again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-neutral text-base-100"
              type="button"
            >
              Reload the page
            </button>
          </div>
        </section>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
