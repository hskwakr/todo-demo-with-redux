import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ColorFilter from '../ColorFilter';
import { colors } from '../../utils/color';

describe('ColorFilter Component Appearance', () => {
  test('There are as many buttons as color types', async () => {
    render(<ColorFilter />);

    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(colors.length);
  });
});

describe('ColorFilter Component Behavior', () => {
  test('The clicked button turns disable', async () => {
    const user = userEvent.setup();
    render(<ColorFilter />);

    const buttons = await screen.findAllByRole('button');

    const target = buttons[0];
    expect(target).not.toHaveAttribute('disabled');
    await user.click(target);
    expect(target).toHaveAttribute('disabled');
  });
});
