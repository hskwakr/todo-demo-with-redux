import reducer, {
  manyTodosDeleted,
  manyTodosToggled,
  selectAllTodos,
  selectFilteredTodos,
  selectFilteredTodoIds,
  selectTodoById,
  todoAdded,
  todoColorChanged,
  todoDeleted,
  todoToggled,
} from '../todosSlice';

describe('todosSlice reducer', () => {
  test('It returns the initial state', () => {
    const want = {
      entities: {},
      ids: [],
    };

    const got = reducer(undefined, { type: undefined });
    expect(got).toEqual(want);
  });

  test('It returns the state with previous state', () => {
    const want = {
      entities: {
        '1': {
          id: '1',
          name: 'Test reducer',
          color: 'red',
          completed: false,
        },
      },
      ids: ['1'],
    };

    const got = reducer(
      {
        entities: {
          '1': {
            id: '1',
            name: 'Test reducer',
            color: 'red',
            completed: false,
          },
        },
        ids: ['1'],
      },
      { type: undefined }
    );
    expect(got).toEqual(want);
  });
});

describe('todosSlice action', () => {
  test('todoAdded add a todo to empty list', () => {
    const want = {
      entities: {
        '0': {
          id: '0',
          name: 'Test something',
          color: 'gray',
          completed: false,
        },
      },
      ids: ['0'],
    };

    const got = reducer(undefined, todoAdded('Test something', 'gray'));
    expect(got).toEqual(want);
  });

  test('todoAdded add a todo to existing list', () => {
    const want = {
      entities: {
        '0': {
          id: '0',
          name: 'Do something',
          color: 'gray',
          completed: false,
        },
        '1': {
          id: '1',
          name: 'Test something',
          color: 'red',
          completed: false,
        },
      },
      ids: ['0', '1'],
    };

    const got = reducer(
      {
        entities: {
          '0': {
            id: '0',
            name: 'Do something',
            color: 'gray',
            completed: false,
          },
        },
        ids: ['0'],
      },
      todoAdded('Test something', 'red')
    );

    expect(got).toEqual(want);
  });

  test('todoDeleted remove a last todo from existing list', () => {
    const want = {
      entities: {
        '0': {
          id: '0',
          name: 'Test something 0',
          color: 'gray',
          completed: false,
        },
        '1': {
          id: '1',
          name: 'Do something 1',
          color: 'red',
          completed: false,
        },
      },
      ids: ['0', '1'],
    };

    const got = reducer(
      {
        entities: {
          '0': {
            id: '0',
            name: 'Test something 0',
            color: 'gray',
            completed: false,
          },
          '1': {
            id: '1',
            name: 'Do something 1',
            color: 'red',
            completed: false,
          },
          '2': {
            id: '2',
            name: 'Do something 2',
            color: 'red',
            completed: false,
          },
        },
        ids: ['0', '1', '2'],
      },
      todoDeleted('2')
    );

    expect(got).toEqual(want);
  });

  test('todoDeleted remove a first todo from existing list', () => {
    const want = {
      entities: {
        '1': {
          id: '1',
          name: 'Do something 1',
          color: 'red',
          completed: false,
        },
        '2': {
          id: '2',
          name: 'Do something 2',
          color: 'red',
          completed: false,
        },
      },
      ids: ['1', '2'],
    };

    const got = reducer(
      {
        entities: {
          '0': {
            id: '0',
            name: 'Test something 0',
            color: 'gray',
            completed: false,
          },
          '1': {
            id: '1',
            name: 'Do something 1',
            color: 'red',
            completed: false,
          },
          '2': {
            id: '2',
            name: 'Do something 2',
            color: 'red',
            completed: false,
          },
        },
        ids: ['0', '1', '2'],
      },
      todoDeleted('0')
    );

    expect(got).toEqual(want);
  });

  test('todoDeleted remove a middle todo from existing list', () => {
    const want = {
      entities: {
        '0': {
          id: '0',
          name: 'Test something 0',
          color: 'gray',
          completed: false,
        },
        '2': {
          id: '2',
          name: 'Do something 2',
          color: 'red',
          completed: false,
        },
      },
      ids: ['0', '2'],
    };

    const got = reducer(
      {
        entities: {
          '0': {
            id: '0',
            name: 'Test something 0',
            color: 'gray',
            completed: false,
          },
          '1': {
            id: '1',
            name: 'Do something 1',
            color: 'red',
            completed: false,
          },
          '2': {
            id: '2',
            name: 'Do something 2',
            color: 'red',
            completed: false,
          },
        },
        ids: ['0', '1', '2'],
      },
      todoDeleted('1')
    );

    expect(got).toEqual(want);
  });

  test('todoToggled toggle completed prop from false to true', () => {
    const want = {
      entities: {
        '0': {
          id: '0',
          name: 'Test something',
          color: 'gray',
          completed: true,
        },
      },
      ids: ['0'],
    };

    const got = reducer(
      {
        entities: {
          '0': {
            id: '0',
            name: 'Test something',
            color: 'gray',
            completed: false,
          },
        },
        ids: ['0'],
      },
      todoToggled('0')
    );

    expect(got).toEqual(want);
  });

  test('todoToggled toggle completed prop from true to false', () => {
    const want = {
      entities: {
        '0': {
          id: '0',
          name: 'Test something',
          color: 'gray',
          completed: false,
        },
      },
      ids: ['0'],
    };

    const got = reducer(
      {
        entities: {
          '0': {
            id: '0',
            name: 'Test something',
            color: 'gray',
            completed: true,
          },
        },
        ids: ['0'],
      },
      todoToggled('0')
    );

    expect(got).toEqual(want);
  });

  test('todoColorChanged change color prop', () => {
    const want = {
      entities: {
        '0': {
          id: '0',
          name: 'Test something',
          color: 'red',
          completed: false,
        },
      },
      ids: ['0'],
    };

    const got = reducer(
      {
        entities: {
          '0': {
            id: '0',
            name: 'Test something',
            color: 'gray',
            completed: false,
          },
        },
        ids: ['0'],
      },
      todoColorChanged('0', 'red')
    );

    expect(got).toEqual(want);
  });

  test('manyTodosDeleted deletes last two todos from list', () => {
    const want = {
      entities: {
        '0': {
          id: '0',
          name: 'Test something 0',
          color: 'gray',
          completed: false,
        },
      },
      ids: ['0'],
    };

    const got = reducer(
      {
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
            completed: false,
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
      manyTodosDeleted(['1', '2'])
    );

    expect(got).toEqual(want);
  });

  test('manyTodosDeleted deletes first two todos from list', () => {
    const want = {
      entities: {
        '2': {
          id: '2',
          name: 'Test something 2',
          color: 'gray',
          completed: false,
        },
      },
      ids: ['2'],
    };

    const got = reducer(
      {
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
            completed: false,
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
      manyTodosDeleted(['0', '1'])
    );

    expect(got).toEqual(want);
  });

  test('manyTodosToggled toggles first two todos to true in the list', () => {
    const want = {
      entities: {
        '0': {
          id: '0',
          name: 'Test something 0',
          color: 'gray',
          completed: true,
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
    };

    const got = reducer(
      {
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
      manyTodosToggled(['0', '1'], true)
    );

    expect(got).toEqual(want);
  });

  test('manyTodosToggled toggles last two todos to false in the list', () => {
    const want = {
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
          completed: false,
        },
        '2': {
          id: '2',
          name: 'Test something 2',
          color: 'gray',
          completed: false,
        },
      },
      ids: ['0', '1', '2'],
    };

    const got = reducer(
      {
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
      manyTodosToggled(['1', '2'], false)
    );

    expect(got).toEqual(want);
  });
});

describe('todosSlice selector', () => {
  test('selectAllTodos returns all todos in the state', () => {
    const want = [
      {
        id: '0',
        name: 'Test something 0',
        color: 'gray',
        completed: false,
      },
      {
        id: '1',
        name: 'Test something 1',
        color: 'gray',
        completed: true,
      },
      {
        id: '2',
        name: 'Test something 2',
        color: 'gray',
        completed: false,
      },
    ];

    const got = selectAllTodos({
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
      filters: { colors: [], status: 'all' },
    });
    expect(got).toEqual(want);
  });

  test('selectTodoById returns a todo specified by id', () => {
    const want = {
      id: '1',
      name: 'Test something 1',
      color: 'gray',
      completed: true,
    };

    const got = selectTodoById(
      {
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
        filters: { colors: [], status: 'all' },
      },
      '1'
    );

    expect(got).toEqual(want);
  });

  test('selectFilteredTodos returns all todo with all status', () => {
    const want = [
      {
        id: '0',
        name: 'Test something 0',
        color: 'red',
        completed: false,
      },
      {
        id: '1',
        name: 'Test something 1',
        color: 'gray',
        completed: true,
      },
      {
        id: '2',
        name: 'Test something 2',
        color: 'green',
        completed: false,
      },
    ];

    const got = selectFilteredTodos({
      filters: { colors: [], status: 'all' },
      todos: {
        entities: {
          '0': {
            id: '0',
            name: 'Test something 0',
            color: 'red',
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
            color: 'green',
            completed: false,
          },
        },
        ids: ['0', '1', '2'],
      },
    });

    expect(got).toEqual(want);
  });

  test('selectFilteredTodos returns uncompleted todos with active status', () => {
    const want = [
      {
        id: '0',
        name: 'Test something 0',
        color: 'red',
        completed: false,
      },
      {
        id: '2',
        name: 'Test something 2',
        color: 'green',
        completed: false,
      },
    ];

    const got = selectFilteredTodos({
      filters: { colors: [], status: 'active' },
      todos: {
        entities: {
          '0': {
            id: '0',
            name: 'Test something 0',
            color: 'red',
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
            color: 'green',
            completed: false,
          },
        },
        ids: ['0', '1', '2'],
      },
    });

    expect(got).toEqual(want);
  });

  test('selectFilteredTodos returns completed todos with completed status', () => {
    const want = [
      {
        id: '1',
        name: 'Test something 1',
        color: 'gray',
        completed: true,
      },
    ];

    const got = selectFilteredTodos({
      filters: { colors: [], status: 'completed' },
      todos: {
        entities: {
          '0': {
            id: '0',
            name: 'Test something 0',
            color: 'red',
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
            color: 'green',
            completed: false,
          },
        },
        ids: ['0', '1', '2'],
      },
    });

    expect(got).toEqual(want);
  });

  test('selectFilteredTodos returns red colored todos with color filter', () => {
    const want = [
      {
        id: '0',
        name: 'Test something 0',
        color: 'red',
        completed: false,
      },
    ];

    const got = selectFilteredTodos({
      filters: { colors: ['red'], status: 'all' },
      todos: {
        entities: {
          '0': {
            id: '0',
            name: 'Test something 0',
            color: 'red',
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
            color: 'green',
            completed: false,
          },
        },
        ids: ['0', '1', '2'],
      },
    });

    expect(got).toEqual(want);
  });

  test('selectFilteredTodos returns red colored todos and completed with filters', () => {
    const want = [
      {
        id: '0',
        name: 'Test something 0',
        color: 'red',
        completed: true,
      },
    ];

    const got = selectFilteredTodos({
      filters: { colors: ['red'], status: 'completed' },
      todos: {
        entities: {
          '0': {
            id: '0',
            name: 'Test something 0',
            color: 'red',
            completed: true,
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
            color: 'green',
            completed: false,
          },
          '3': {
            id: '3',
            name: 'Test something 3',
            color: 'red',
            completed: false,
          },
        },
        ids: ['0', '1', '2', '3'],
      },
    });

    expect(got).toEqual(want);
  });

  test('selectFilteredTodosById returns id of filtered todos', () => {
    const want = ['0'];

    const got = selectFilteredTodoIds({
      filters: { colors: ['red'], status: 'completed' },
      todos: {
        entities: {
          '0': {
            id: '0',
            name: 'Test something 0',
            color: 'red',
            completed: true,
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
            color: 'green',
            completed: false,
          },
          '3': {
            id: '3',
            name: 'Test something 3',
            color: 'red',
            completed: false,
          },
        },
        ids: ['0', '1', '2', '3'],
      },
    });

    expect(got).toEqual(want);
  });
});
