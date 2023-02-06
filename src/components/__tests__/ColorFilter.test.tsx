import { render, screen } from '@testing-library/react';
import ColorFilter from '../ColorFilter';
import { colors } from '../../utils/color';

describe('ColorFilter Component Appearance', () => {
  test('There are as many buttons as color types', async () => {
    render(<ColorFilter />);

    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(colors.length);
  });
});
