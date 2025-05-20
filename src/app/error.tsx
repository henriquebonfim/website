import { Component, type ErrorInfo, type ReactNode } from "react";
import { Trans } from "@lingui/react/macro";

/**
 * Props for the ErrorBoundary component.
 * @typedef {Object} ErrorBoundaryProps
 * @property {ReactNode} children - Child components to wrap.
 * @property {ReactNode} [fallback] - Optional fallback UI to display on error.
 * @property {(error: Error, errorInfo: ErrorInfo) => void} [onError] - Optional error callback.
 */
interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

/**
 * State for the ErrorBoundary component.
 * @typedef {Object} ErrorBoundaryState
 * @property {boolean} hasError - Whether an error has been caught.
 * @property {Error | null} error - The error object, if any.
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * A reusable React error boundary component for catching and displaying errors in the component tree.
 *
 * @class ErrorBoundary
 * @extends {Component<ErrorBoundaryProps, ErrorBoundaryState>}
 *
 * @example
 * <ErrorBoundary fallback={<CustomFallback />} onError={handleError}>
 *   <YourComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  /**
   * Creates an instance of ErrorBoundary.
   * @param {ErrorBoundaryProps} props
   */
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  /**
   * Update state when an error is thrown in a child component.
   * @param {Error} error
   * @returns {ErrorBoundaryState}
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  /**
   * Log error details and invoke the onError callback if provided.
   * @param {Error} error
   * @param {ErrorInfo} errorInfo
   * @returns {void}
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  /**
   * Renders the fallback UI or children.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <section className="m-auto flex h-screen flex-col content-center items-center justify-center gap-4">
          <article className="prose text-center">
            <h1>
              <Trans>Error</Trans>
            </h1>
            <p>
              <Trans>An error occurred while rendering the component.</Trans>
            </p>
            {this.state.error && (
              <pre className="text-wrap">{this.state.error.toString()}</pre>
            )}
          </article>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-neutral text-base-100"
          >
            <Trans>Reload the page</Trans>
          </button>
        </section>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
