export const status = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
} as const;

export type StatusType = (typeof status)[keyof typeof status];
