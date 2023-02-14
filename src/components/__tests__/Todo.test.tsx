import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Todo from '../Todo';

const todoName = 'Make a test for todo component';

describe('Todo Component Appearance', () => {
  test('It has a name text specified by props', () => {
    renderWithProviders(<Todo id="1" />, {
      preloadedState: {
        todos: {
          ids: ['1'],
          entities: {
            '1': {
              id: '1',
              name: todoName,
              color: 'gray',
              completed: false,
            },
          },
        },
      },
    });

    const name = screen.getByText(todoName);
    expect(name).toBeInTheDocument();
  });

  test('It has a button to delete', () => {
    renderWithProviders(<Todo id="1" />, {
      preloadedState: {
        todos: {
          ids: ['1'],
          entities: {
            '1': {
              id: '1',
              name: todoName,
              color: 'gray',
              completed: false,
            },
          },
        },
      },
    });

    const deleteButton = screen.getByTestId('todo-delete');
    expect(deleteButton).toBeInTheDocument();
  });

  test('It has a checkbox', () => {
    renderWithProviders(<Todo id="1" />, {
      preloadedState: {
        todos: {
          ids: ['1'],
          entities: {
            '1': {
              id: '1',
              name: todoName,
              color: 'gray',
              completed: false,
            },
          },
        },
      },
    });

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('The checkbox is not checked when the completed is false', () => {
    renderWithProviders(<Todo id="1" />, {
      preloadedState: {
        todos: {
          ids: ['1'],
          entities: {
            '1': {
              id: '1',
              name: todoName,
              color: 'gray',
              completed: false,
            },
          },
        },
      },
    });

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('The checkbox is checked when the completed is true', () => {
    renderWithProviders(<Todo id="1" />, {
      preloadedState: {
        todos: {
          ids: ['1'],
          entities: {
            '1': {
              id: '1',
              name: todoName,
              color: 'gray',
              completed: true,
            },
          },
        },
      },
    });

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});
