import { render, screen } from '@testing-library/react';
import NewTodo from '../NewTodo';

describe('NewTodo Component Appearance', () => {
  test('It has a text input with placeholder', () => {
    render(<NewTodo />);

    const input = screen.getByRole('textbox', { name: /new todo/ });
    expect(input).toBeInTheDocument();

    // Placeholder has keyword "Enter"
    expect(input).toHaveAttribute(
      'placeholder',
      expect.stringContaining('Enter')
    );
  });
});
