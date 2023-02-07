export const colors = ['gray', 'red', 'blue', 'green'] as const;

export type ColorType = (typeof colors)[number];
