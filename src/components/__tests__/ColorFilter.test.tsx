import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../utils/test-utils';
import ColorFilter from '../ColorFilter';
import { colors } from '../../utils/color';

describe('ColorFilter Component Appearance', () => {
  test('There are as many checkboxes as color types', async () => {
    renderWithProviders(<ColorFilter />);

    const checkboxes = await screen.findAllByRole('checkbox');
    expect(checkboxes.length).toBe(colors.length);
  });

  test('The checkbox turns checked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<ColorFilter />);

    const checkboxes = await screen.findAllByRole('checkbox');

    checkboxes.forEach(async target => {
      expect(target).not.toBeChecked();
      await user.click(target);
      expect(target).toBeChecked();
    });
  });
});

describe('ColorFilter Component Behavior', () => {});
