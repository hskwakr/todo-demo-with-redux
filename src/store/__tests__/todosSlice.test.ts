import reducer from '../todosSlice';

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
