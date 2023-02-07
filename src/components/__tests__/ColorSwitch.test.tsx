import { render, screen } from '@testing-library/react';
import ColorSwitch from '../ColorSwitch';

describe('ColorSwitch Component Appearance', () => {
  test('It has a prop to specify background color', () => {
    render(<ColorSwitch initColor="red" />);

    const switchButton = screen.getByTestId('color-switch');
    expect(switchButton).toBeInTheDocument();
  });
});
