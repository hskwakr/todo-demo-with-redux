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

  test('The disabled button turns not disabled after clicked other one', async () => {
    const user = userEvent.setup();
    render(<ColorFilter />);

    const buttons = await screen.findAllByRole('button');

    const target = buttons[0];
    const other = buttons[1];

    await user.click(target);
    expect(target).toHaveAttribute('disabled');

    await user.click(other);
    expect(other).toHaveAttribute('disabled');
    expect(target).not.toHaveAttribute('disabled');
  });
});
