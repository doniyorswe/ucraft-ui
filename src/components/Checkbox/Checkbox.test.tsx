import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should render Checkbox component', () => {
    render(<Checkbox label='Checkbox' />);
    expect(screen.getByTitle('Checkbox')).toBeInTheDocument();
  });

  it('should render with checked state', () => {
    render(<Checkbox label='Checkbox' checked />);
    expect(screen.getByTitle('Checkbox')).toBeChecked();
  });

  it('should render with unchecked state', () => {
    render(<Checkbox label='Checkbox' />);
    expect(screen.getByTitle('Checkbox')).not.toBeChecked();
  });

  it('should render with disabled state', () => {
    render(<Checkbox label='Checkbox' disabled />);
    expect(screen.getByTitle('Checkbox')).toBeDisabled();
  });

  it('should render with custom classname', () => {
    const { container } = render(
      <Checkbox label='Checkbox' className='custom-class' />
    );
    expect(container.querySelector('span')).toHaveClass('custom-class');
  });
});
