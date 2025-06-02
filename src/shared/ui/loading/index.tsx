import { memo, type FC } from 'react';

/**
 * Props for the Loading component
 */
interface LoadingSpinnerProps {
  readonly size?: 'sm' | 'md' | 'lg';
  readonly color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  readonly label?: string;
  readonly centered?: boolean;
  readonly overlay?: boolean;
}

/**
 * Size configuration for loading spinner
 */
const SIZE_CONFIG = {
  sm: 'h-6 w-6 border-2',
  md: 'h-12 w-12 border-4',
  lg: 'h-16 w-16 border-8',
} as const;

/**
 * Color configuration for loading spinner
 */
const COLOR_CONFIG = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  accent: 'border-accent',
  neutral: 'border-neutral',
  info: 'border-info',
  success: 'border-success',
  warning: 'border-warning',
  error: 'border-error',
} as const;

/**
 * Loading spinner component with customizable size, color, and positioning options.
 * Provides accessible loading indicators with proper ARIA attributes and semantic HTML.
 *
 * @param props - The component props
 * @returns A loading spinner component
 *
 * @example
 * ```tsx
 * // Basic spinner
 * <Loading />
 *
 * // Large spinner with label
 * <Loading size="lg" label="Loading data..." />
 *
 * // Overlay spinner
 * <Loading overlay label="Processing..." />
 * ```
 */
const LoadingSpinner: FC<LoadingSpinnerProps> = memo(
  ({
    size = 'md',
    color = 'primary',
    label,
    centered = false,
    overlay = false,
  }) => {
    const spinnerClasses = `
    animate-spin rounded-full border-t-transparent border-solid
    ${SIZE_CONFIG[size]} ${COLOR_CONFIG[color]}
  `.trim();

    const spinner = (
      <div className="flex items-center gap-3">
        <span
          className={spinnerClasses}
          role="status"
          aria-label={label || 'Loading content'}
        />
        {label && (
          <span className="text-sm" aria-hidden="true">
            {label}
          </span>
        )}
      </div>
    );

    if (overlay) {
      return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Loading overlay"
        >
          {spinner}
        </div>
      );
    }

    if (centered) {
      return (
        <div
          className="m-3 flex h-full w-full items-center justify-center"
          aria-busy="true"
        >
          {spinner}
        </div>
      );
    }

    return spinner;
  },
);

export default LoadingSpinner;
