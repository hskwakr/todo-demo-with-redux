import { render, screen } from '@testing-library/react';
import { status } from '../../utils/status';
import StatusFilter from '../StatusFilter';

describe('StatusFilter Component Appearance', () => {
  test('There are as many buttons as status types', async () => {
    render(<StatusFilter />);
    const { length } = Object.keys(status);

    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(length);
  });
});

describe('StatusFilter Component Behavior', () => {});
