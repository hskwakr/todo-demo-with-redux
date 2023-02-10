import reducer, { todoAdded, todoDeleted } from '../todosSlice';

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

  test('todoDeleted remove a todo from existing list', () => {
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
            completed: false,
          },
          '1': {
            id: '1',
            name: 'Do something',
            color: 'red',
            completed: false,
          },
        },
        ids: ['0', '1'],
      },
      todoDeleted('1')
    );

    expect(got).toEqual(want);
  });

  test('todoDeleted remove a todo from empty list', () => {
    const want = {
      entities: {},
      ids: [],
    };

    const got = reducer(undefined, todoDeleted('0'));

    expect(got).toEqual(want);
  });
});
