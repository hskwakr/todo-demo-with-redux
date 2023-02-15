import { screen } from '@testing-library/react';
import ListTitle from '../ListTitle';
import { renderWithProviders } from '../../utils/test-utils';

describe('ListTitle Component Appearance', () => {
  test('It has a checkbox', () => {
    renderWithProviders(<ListTitle ids={[]} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('It has a delete button', () => {
    renderWithProviders(<ListTitle ids={[]} />);

    const deleteButton = screen.getByTestId('list-title-delete');
    expect(deleteButton).toBeInTheDocument();
  });
});
