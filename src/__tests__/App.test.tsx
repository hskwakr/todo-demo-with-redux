import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../utils/test-utils';
import App from '../App';

const text = 'Test user path';

describe('Happy path', () => {
  test('Intentional user path', async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    // Add a new todo with text
    const textbox = screen.getByRole('textbox');

    // Type name of text
    await user.type(textbox, text);
    await user.keyboard('{enter}');

    // Assert
    const name = screen.getByText(text);
    expect(name).toBeInTheDocument();
  });
});
