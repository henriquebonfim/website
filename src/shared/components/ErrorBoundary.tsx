import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}


class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);

    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Render the fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI if none provided
      return (
        <section className="flex content-center m-auto h-screen flex-col items-center justify-center gap-4">
          <article className="prose text-center ">
            <h1>Error</h1>
            <p>
              An error occurred while rendering the component.
            </p>
            {this.state.error && (
              <pre className="text-wrap">
                {this.state.error.toString()}
              </pre>
            )}
          </article>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary hover:bg-primary-focus rounded px-4 py-2 text-white transition-colors"
          >
            Reload the page
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
