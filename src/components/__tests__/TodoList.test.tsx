import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import TodoList from '../TodoList';

describe('TodoList Component Appearance', () => {
  test('It shows todos in the state', async () => {
    renderWithProviders(<TodoList />, {
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
              color: 'blue',
              completed: false,
            },
            '2': {
              id: '2',
              name: 'Test something 2',
              color: 'green',
              completed: false,
            },
          },
          ids: ['0', '1', '2'],
        },
      },
    });

    const items = await screen.findAllByTestId('todo-list-item');

    items.forEach(i => expect(i).toBeInTheDocument());
  });
});
