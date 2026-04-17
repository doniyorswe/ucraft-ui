import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render', () => {
    render(<Button>Click me!</Button>);
    expect(screen.getByText('Click me!')).toBeInTheDocument();
  });

  it('should render with disabled state', () => {
    render(<Button disabled>Disabled button</Button>);
    expect(screen.getByText('Disabled button')).toBeInTheDocument();
    expect(screen.getByText('Disabled button')).toBeDisabled();
  });

  it('should render with loading state', () => {
    render(<Button loading>Loading button</Button>);
    expect(screen.getByText('Loading button')).toBeInTheDocument();
    expect(screen.getByText('Loading button')).toBeDisabled();
  });
});
