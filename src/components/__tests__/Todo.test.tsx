import { render, screen } from '@testing-library/react';
import Todo from '../Todo';

const todoName = 'Make a test for todo component';

describe('Todo Component Appearance', () => {
  test('It has a name text specified by props', () => {
    render(
      <Todo
        todo={{
          name: todoName,
          color: 'red',
          completed: false,
        }}
      />
    );

    const name = screen.getByText(todoName);
    expect(name).toBeInTheDocument();
  });

  test('It has a button to delete', () => {
    render(
      <Todo
        todo={{
          name: todoName,
          color: 'red',
          completed: false,
        }}
      />
    );

    const deleteButton = screen.getByTestId('todo-delete');
    expect(deleteButton).toBeInTheDocument();
  });

  test('It has a checkbox', () => {
    render(
      <Todo
        todo={{
          name: todoName,
          color: 'red',
          completed: false,
        }}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('The checkbox is not checked when the completed is false', () => {
    render(
      <Todo
        todo={{
          name: todoName,
          color: 'red',
          completed: false,
        }}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('The checkbox is checked when the completed is true', () => {
    render(
      <Todo
        todo={{
          name: todoName,
          color: 'red',
          completed: true,
        }}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});
