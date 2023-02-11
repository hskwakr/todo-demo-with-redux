import reducer, { filterStatusUpdated } from '../filtersSlice';

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
});
