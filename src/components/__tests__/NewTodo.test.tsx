import { screen } from '@testing-library/react';
import NewTodo from '../NewTodo';
import { renderWithProviders } from '../../utils/test-utils';

describe('NewTodo Component Appearance', () => {
  test('It has a text input with placeholder', () => {
    renderWithProviders(<NewTodo />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    // Placeholder has keyword "Enter"
    expect(input).toHaveAttribute(
      'placeholder',
      expect.stringContaining('Enter')
    );
  });
});
