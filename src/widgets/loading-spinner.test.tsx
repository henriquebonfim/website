import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Loading } from './loading-spinner';

// Arrange, Act, Assert pattern

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    const { getByRole } = render(<Loading />);
    const spinner = getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('animate-spin');
  });

  it('renders with label', () => {
    const { getByText } = render(<Loading label="Loading..." />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('applies size and color classes', () => {
    const { getByRole } = render(<Loading size="lg" color="success" />);
    const spinner = getByRole('status');
    expect(spinner).toHaveClass('h-16', 'w-16', 'border-8', 'border-success');
  });

  it('renders centered spinner', () => {
    const { container } = render(<Loading centered />);
    expect(container.firstChild).toHaveClass(
      'flex',
      'items-center',
      'justify-center',
    );
  });

  it('renders overlay spinner', () => {
    const { container } = render(<Loading overlay />);
    expect(container.firstChild).toHaveClass(
      'fixed',
      'inset-0',
      'z-50',
      'backdrop-blur-sm',
    );
  });
});
