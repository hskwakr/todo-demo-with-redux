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
    let todos = await screen.findAllByTestId('a-todo');
    todos.forEach(todo => {
      const checkbox = within(todo).getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });

    // Click delete button
    expect(todos.length).toEqual(3);
    const deleteButton = within(listTitle).getByRole('button');

    await user.click(deleteButton);

    todos = screen.queryAllByTestId('a-todo');
    expect(todos.length).toEqual(0);
  });

  test('Filter todo list', async () => {
    const user = userEvent.setup();

    renderWithProviders(<App />, {
      preloadedState: {
        todos: {
          entities: {
            '0': {
              id: '0',
              name: 'Test red 0',
              color: 'red',
              completed: false,
            },
            '1': {
              id: '1',
              name: 'Test red 1',
              color: 'red',
              completed: true,
            },
            '2': {
              id: '2',
              name: 'Test gray 2',
              color: 'gray',
              completed: false,
            },
            '3': {
              id: '3',
              name: 'Test green 3',
              color: 'green',
              completed: false,
            },
          },
          ids: ['0', '1', '2', '3'],
        },
      },
    });

    // Function to get all expected todo elements in the list
    const getTodos = () => {
      const todoList = screen.getByTestId('todo-list');

      const textList = [
        'Test red 0',
        'Test red 1',
        'Test gray 2',
        'Test green 3',
      ];
      const todos = textList.map(t => within(todoList).queryByText(t));
      const RED_0 = todos[0];
      const RED_1 = todos[1];
      const GRAY_2 = todos[2];
      const GREEN_3 = todos[3];

      return { RED_0, RED_1, GRAY_2, GREEN_3 };
    };

    // Check initial state
    {
      const { RED_0, RED_1, GRAY_2, GREEN_3 } = getTodos();
      expect(RED_0).toBeInTheDocument();
      expect(RED_1).toBeInTheDocument();
      expect(GRAY_2).toBeInTheDocument();
      expect(GREEN_3).toBeInTheDocument();
    }

    // Filter by color
    const colorFilter = screen.getByTestId('color-filter');
    const redCheckbox = within(colorFilter).getByRole('checkbox', {
      name: 'color-filter-item-red',
    });
    const grayCheckbox = within(colorFilter).getByRole('checkbox', {
      name: 'color-filter-item-gray',
    });

    // Check after click red checkbox
    await user.click(redCheckbox);
    {
      const { RED_0, RED_1, GRAY_2, GREEN_3 } = getTodos();
      expect(RED_0).toBeInTheDocument();
      expect(RED_1).toBeInTheDocument();
      expect(GRAY_2).not.toBeInTheDocument();
      expect(GREEN_3).not.toBeInTheDocument();
    }

    // Check after click gray checkbox
    await user.click(grayCheckbox);
    {
      const { RED_0, RED_1, GRAY_2, GREEN_3 } = getTodos();
      expect(RED_0).toBeInTheDocument();
      expect(RED_1).toBeInTheDocument();
      expect(GRAY_2).toBeInTheDocument();
      expect(GREEN_3).not.toBeInTheDocument();
    }

    // Check after click red checkbox again
    await user.click(redCheckbox);
    {
      const { RED_0, RED_1, GRAY_2, GREEN_3 } = getTodos();
      expect(RED_0).not.toBeInTheDocument();
      expect(RED_1).not.toBeInTheDocument();
      expect(GRAY_2).toBeInTheDocument();
      expect(GREEN_3).not.toBeInTheDocument();
    }

    // Check after click gray checkbox again
    await user.click(grayCheckbox);
    {
      const { RED_0, RED_1, GRAY_2, GREEN_3 } = getTodos();
      expect(RED_0).toBeInTheDocument();
      expect(RED_1).toBeInTheDocument();
      expect(GRAY_2).toBeInTheDocument();
      expect(GREEN_3).toBeInTheDocument();
    }

    // Filter by status
    const statusFilter = screen.getByTestId('status-filter');

    const activeWrapper = within(statusFilter).getByTestId(
      'status-filter-item-active'
    );
    const completedWrapper = within(statusFilter).getByTestId(
      'status-filter-item-completed'
    );
    const allWrapper = within(statusFilter).getByTestId(
      'status-filter-item-all'
    );

    const activeButton = within(activeWrapper).getByRole('button');
    const completedButton = within(completedWrapper).getByRole('button');
    const allButton = within(allWrapper).getByRole('button');

    // Check after click active button
    await user.click(activeButton);
    {
      const { RED_0, RED_1, GRAY_2, GREEN_3 } = getTodos();
      expect(RED_0).toBeInTheDocument();
      expect(RED_1).not.toBeInTheDocument();
      expect(GRAY_2).toBeInTheDocument();
      expect(GREEN_3).toBeInTheDocument();
    }

    // Check after click completed button
    await user.click(completedButton);
    {
      const { RED_0, RED_1, GRAY_2, GREEN_3 } = getTodos();
      expect(RED_0).not.toBeInTheDocument();
      expect(RED_1).toBeInTheDocument();
      expect(GRAY_2).not.toBeInTheDocument();
      expect(GREEN_3).not.toBeInTheDocument();
    }

    // Check after click completed button
    await user.click(allButton);
    {
      const { RED_0, RED_1, GRAY_2, GREEN_3 } = getTodos();
      expect(RED_0).toBeInTheDocument();
      expect(RED_1).toBeInTheDocument();
      expect(GRAY_2).toBeInTheDocument();
      expect(GREEN_3).toBeInTheDocument();
    }
  });
});
