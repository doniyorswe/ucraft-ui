import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { Settings } from 'lucide-react';

describe('Button', () => {
  it('should render Button component', () => {
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

  it('should render with left icon', () => {
    const { container } = render(
      <Button leftIcon={<Settings />}>Button with left icon</Button>
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should render with right icon', () => {
    const { container } = render(
      <Button rightIcon={<Settings />}>Button with right icon</Button>
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should render with icon size', () => {
    const { container } = render(
      <Button size='icon'>
        <Settings />
      </Button>
    );

    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should render with custom classname', () => {
    const { container } = render(
      <Button className='custom-class'>Custom class button</Button>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
