export const Status = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
} as const;

export type StatusType = (typeof Status)[keyof typeof Status];

export const createRenderedItems = (
  fn: (key: string, value: StatusType) => JSX.Element
) =>
  Object.keys(Status).map(key => {
    const value = Object.values(Status).find(v => {
      const keyword = v[0].toUpperCase() + v.slice(1);
      return keyword === key;
    });

    if (value == null) {
      throw new Error('failed to find value in status}');
    }

    return fn(key, value);
  });
