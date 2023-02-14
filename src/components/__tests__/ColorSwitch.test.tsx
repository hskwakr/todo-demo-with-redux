import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ColorSwitch from '../ColorSwitch';
import { renderWithProviders } from '../../utils/test-utils';

const fn = jest.fn();

describe('ColorSwitch Component Appearance', () => {
  test('It has a button at the beginning', () => {
    renderWithProviders(<ColorSwitch initColor="red" onColorUpdated={fn} />);

    const switchButton = screen.getByTestId('color-switch');
    expect(switchButton).toBeInTheDocument();
  });
});

describe('ColorSwitch Component Behavior', () => {
  test('It shows buttons after click a button', async () => {
    const user = userEvent.setup();
    renderWithProviders(<ColorSwitch initColor="red" onColorUpdated={fn} />);

    const switchButton = screen.getByTestId('color-switch');

    await user.click(switchButton);

    const elms = await screen.findAllByTestId('color-switch-pop-elms');
    elms.map(el => expect(el).toBeInTheDocument());
  });
});
