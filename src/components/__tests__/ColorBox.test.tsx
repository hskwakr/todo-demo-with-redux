import { render, screen } from '@testing-library/react';
import ColorBox from '../ColorBox';

describe('ColorBox Component Appearance', () => {
  test('It has a prop to specify background color', () => {
    render(<ColorBox color="red" />);

    const box = screen.getByTestId('color-box');
    expect(box).toHaveStyle('background-color: red');
  });
});
