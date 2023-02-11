import reducer, {
  filterColorsModified,
  filterStatusUpdated,
  filtersSelector,
} from '../filtersSlice';

describe('filtersSlice reducer', () => {
  test('It returns the initial state', () => {
    const want = {
      colors: [],
      status: 'all',
    };

    const got = reducer(undefined, { type: undefined });
    expect(got).toEqual(want);
  });

  test('It returns the state with previous state', () => {
    const want = { colors: ['gray'], status: 'active' };

    const got = reducer(
      { colors: ['gray'], status: 'active' },
      { type: undefined }
    );
    expect(got).toEqual(want);
  });
});

describe('filtersSlice action', () => {
  test('filterStatusUpdated changes status prop in the state', () => {
    const want = {
      colors: [],
      status: 'active',
    };

    const got = reducer(undefined, filterStatusUpdated('active'));
    expect(got).toEqual(want);
  });

  test('filterColorsModified adds a color to the list', () => {
    const want = {
      colors: ['red'],
      status: 'all',
    };

    const got = reducer(undefined, filterColorsModified('red', 'added'));
    expect(got).toEqual(want);
  });

  test('filterColorsModified does not add same color to the list', () => {
    const want = {
      colors: ['green'],
      status: 'all',
    };

    const got = reducer(
      {
        colors: ['green'],
        status: 'all',
      },
      filterColorsModified('green', 'added')
    );
    expect(got).toEqual(want);
  });

  test('filterColorsModified removes a color from the list', () => {
    const want = {
      colors: ['gray', 'blue'],
      status: 'all',
    };

    const got = reducer(
      {
        colors: ['gray', 'red', 'blue'],
        status: 'all',
      },
      filterColorsModified('red', 'removed')
    );
    expect(got).toEqual(want);
  });
});

describe('filtersSlice selector', () => {
  test('filtersSelector returns state of filters', () => {
    const want = {
      colors: [],
      status: 'all',
    };

    const got = filtersSelector({
      todos: {
        entities: {},
        ids: [],
      },
      filters: {
        colors: [],
        status: 'all',
      },
    });
    expect(got).toEqual(want);
  });
});
