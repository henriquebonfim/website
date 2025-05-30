import { memo, type FC } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  label?: string;
  centered?: boolean;
  overlay?: boolean;
}

const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'h-6 w-6 border-2',
  md: 'h-12 w-12 border-4',
  lg: 'h-16 w-16 border-8',
};

const colorClasses: Record<
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error',
  string
> = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  accent: 'border-accent',
  neutral: 'border-neutral',
  info: 'border-info',
  success: 'border-success',
  warning: 'border-warning',
  error: 'border-error',
};

const LoadingSpinner: FC<LoadingSpinnerProps> = memo(
  ({
    size = 'md',
    color = 'primary',
    label,
    centered = false,
    overlay = false,
  }) => {
    const spinner = (
      <div className="flex items-center">
        <span
          className={`animate-spin rounded-full border-t-transparent ${sizeClasses[size]} ${colorClasses[color]} border-solid`}
          role="status"
          aria-label="Loading"
        />
        {label && <span className="ml-3 text-sm">{label}</span>}
      </div>
    );

    if (overlay) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          {spinner}
        </div>
      );
    }

    if (centered) {
      return (
        <div className="flex h-full w-full items-center justify-center">
          {spinner}
        </div>
      );
    }

    return spinner;
  },
);

export default LoadingSpinner;
