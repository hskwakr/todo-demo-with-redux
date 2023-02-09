import { ColorType } from './color';

export type TodoType = {
  id: string;
  name: string;
  completed: boolean;
  color: ColorType;
};
