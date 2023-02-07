export const status = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
} as const;

export type StatusType = (typeof status)[keyof typeof status];

export const createRenderedItems = (
  fn: (key: string, value: StatusType) => JSX.Element
) =>
  Object.keys(status).map(key => {
    const value = Object.values(status).find(v => {
      const keyword = v[0].toUpperCase() + v.slice(1);
      return keyword === key;
    });

    if (value == null) {
      throw new Error('failed to find value in status}');
    }

    return fn(key, value);
  });
