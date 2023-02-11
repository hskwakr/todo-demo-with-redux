import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Status } from '../../utils/status';
import StatusFilter from '../StatusFilter';

describe('StatusFilter Component Appearance', () => {
  test('There are as many buttons as status types', async () => {
    render(<StatusFilter />);
    const { length } = Object.keys(Status);

    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(length);
  });
});

describe('StatusFilter Component Behavior', () => {
  test('The clicked button turns disable', async () => {
    const user = userEvent.setup();
    render(<StatusFilter />);

    const buttons = await screen.findAllByRole('button');

    // The buttons[0] (status.All) starts disabled
    // so we can't use buttons[0]
    const target = buttons[1];
    expect(target).not.toHaveAttribute('disabled');
    await user.click(target);
    expect(target).toHaveAttribute('disabled');
  });

  test('The disabled button turns not disabled after clicked other one', async () => {
    const user = userEvent.setup();
    render(<StatusFilter />);

    const buttons = await screen.findAllByRole('button');

    // The buttons[0] (status.All) starts disabled
    // so we can't use buttons[0]
    const target = buttons[1];
    const other = buttons[2];

    await user.click(target);
    expect(target).toHaveAttribute('disabled');

    await user.click(other);
    expect(other).toHaveAttribute('disabled');
    expect(target).not.toHaveAttribute('disabled');
  });
});
