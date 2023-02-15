import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../utils/test-utils';
import App from '../App';

const text = 'Test user path';

describe('Happy path', () => {
  test('Intentional user path', async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    // Add a new todo with text
    const todoHeader = screen.getByTestId('todo-header');
    const textbox = within(todoHeader).getByRole('textbox');

    // Type name of text
    await user.type(textbox, text);
    await user.keyboard('{enter}');

    // Check there is a todo in the list
    let todos = await screen.findAllByTestId('a-todo');
    expect(todos.length).toEqual(1);

    const todo = todos[0];

    // Toggle the todo
    const toggleTodo = within(todo).getByRole('checkbox');

    expect(toggleTodo).not.toBeChecked();
    await user.click(toggleTodo);
    expect(toggleTodo).toBeChecked();

    // Delete the todo
    const deleteTodoButton = within(todo).getByTestId('todo-delete');
    await user.click(deleteTodoButton);

    todos = screen.queryAllByTestId('a-todo');
    expect(todos.length).toEqual(0);
  });
});
