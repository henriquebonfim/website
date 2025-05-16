import { memo } from "react";

interface LoadingSpinnerProps {
  /**
   * The size of the spinner
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * The color of the spinner
   * @default 'primary'
   */
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error";

  /**
   * Whether to show a label next to the spinner
   */
  label?: string;

  /**
   * Whether to center the spinner in its container
   * @default false
   */
  centered?: boolean;

  /**
   * Whether to show the spinner with a backdrop overlay
   * @default false
   */
  overlay?: boolean;
}

/**
 * Loading spinner component for indicating loading states
 */
function LoadingSpinner({
  size = "md",
  color = "primary",
  label,
  centered = false,
  overlay = false,
}: LoadingSpinnerProps) {
  // Size classes
  const sizeClasses = {
    sm: "h-6 w-6 border-2",
    md: "h-12 w-12 border-3",
    lg: "h-16 w-16 border-4",
  };

  // Color classes
  const colorClasses = {
    primary: "border-primary",
    secondary: "border-secondary",
    accent: "border-accent",
    neutral: "border-neutral",
    info: "border-info",
    success: "border-success",
    warning: "border-warning",
    error: "border-error",
  };

  // Spinner component
  const spinnerElement = (
    <div className="flex items-center">
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} ${colorClasses[color]} border-t-transparent`}
        role="status"
        aria-label="Loading"
      />
      {label && <span className="ml-3 text-sm">{label}</span>}
    </div>
  );

  // If overlay is true, render a full-screen overlay
  if (overlay) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        {spinnerElement}
      </div>
    );
  }

  // If centered is true, center the spinner
  if (centered) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        {spinnerElement}
      </div>
    );
  }

  // Otherwise render the spinner as-is
  return spinnerElement;
}

export default memo(LoadingSpinner);
