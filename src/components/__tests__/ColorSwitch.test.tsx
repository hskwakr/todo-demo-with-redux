import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ColorSwitch from '../ColorSwitch';

describe('ColorSwitch Component Appearance', () => {
  test('It has a button at the beginning', () => {
    render(<ColorSwitch initColor="red" />);

    const switchButton = screen.getByTestId('color-switch');
    expect(switchButton).toBeInTheDocument();
  });
});

describe('ColorSwitch Component Behavior', () => {
  test('It shows buttons after click a button', async () => {
    const user = userEvent.setup();
    render(<ColorSwitch initColor="red" />);

    const switchButton = screen.getByTestId('color-switch');

    await user.click(switchButton);

    const elms = await screen.findAllByTestId('color-switch-pop-elms');
    elms.map(el => expect(el).toBeInTheDocument());
  });

  test('The buttons turns out after click a button again', async () => {
    const user = userEvent.setup();
    render(<ColorSwitch initColor="red" />);

    const switchButton = screen.getByTestId('color-switch');

    await user.click(switchButton);
    const elms = await screen.findAllByTestId('color-switch-pop-elms');

    await user.click(switchButton);
    elms.map(el => expect(el).not.toBeInTheDocument());
  });

  test('The buttons turns out after click a button in the pop', async () => {
    const user = userEvent.setup();
    render(<ColorSwitch initColor="red" />);

    const switchButton = screen.getByTestId('color-switch');

    await user.click(switchButton);
    const elms = await screen.findAllByTestId('color-switch-pop-elms');

    await user.click(elms[0]);
    elms.map(el => expect(el).not.toBeInTheDocument());
  });
});
