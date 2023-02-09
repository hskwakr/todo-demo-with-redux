import { render, screen } from '@testing-library/react';
import ListTitle from '../ListTitle';

describe('ListTitle Component Appearance', () => {
  test('It has a checkbox', () => {
    render(<ListTitle />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('It has a delete button', () => {
    render(<ListTitle />);

    const deleteButton = screen.getByTestId('list-title-delete');
    expect(deleteButton).toBeInTheDocument();
  });
});
