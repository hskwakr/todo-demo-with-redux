export const colors = ['gray', 'red', 'blue', 'green'] as const;

export type Color = (typeof colors)[number];
