import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../utils/test-utils';
import App from '../App';

const text = 'Test user path';

describe('Happy path', () => {
  test('Adding a todo and update a todo', async () => {
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

  test('Toggle todos and delete todos at once', async () => {
    const user = userEvent.setup();

    renderWithProviders(<App />, {
      preloadedState: {
        todos: {
          entities: {
            '0': {
              id: '0',
              name: 'Test something 0',
              color: 'gray',
              completed: false,
            },
            '1': {
              id: '1',
              name: 'Test something 1',
              color: 'gray',
              completed: true,
            },
            '2': {
              id: '2',
              name: 'Test something 2',
              color: 'gray',
              completed: false,
            },
          },
          ids: ['0', '1', '2'],
        },
      },
    });

    const listTitle = screen.getByTestId('list-title');

    // Toggle checkbox
    const titleCheckbox = within(listTitle).getByRole('checkbox');

    expect(titleCheckbox).not.toBeChecked();
    await user.click(titleCheckbox);
    expect(titleCheckbox).toBeChecked();

    // Check todos toggled into true
    const todos = await screen.findAllByTestId('a-todo');
    todos.forEach(todo => {
      const checkbox = within(todo).getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });
  });
});
