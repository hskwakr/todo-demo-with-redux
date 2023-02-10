import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { TodoType } from '../utils/todo';
import { ColorType } from '../utils/color';

const todosAdapter = createEntityAdapter<TodoType>();
const initialState = todosAdapter.getInitialState();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer(
        state,
        action: PayloadAction<{ name: string; color: ColorType }>
      ) {
        const { name, color } = action.payload;

        const todo: TodoType = {
          id: state.ids.length.toString(),
          name,
          color,
          completed: false,
        };

        todosAdapter.addOne(state, todo);
      },
      prepare(name: string, color: ColorType) {
        return {
          payload: { name, color },
        };
      },
    },

    todoDeleted: {
      reducer(state, action: PayloadAction<string>) {
        todosAdapter.removeOne(state, action.payload);
      },
      prepare(id: string) {
        return {
          payload: id,
        };
      },
    },
  },
});

export default todosSlice.reducer;

export const { todoAdded, todoDeleted } = todosSlice.actions;
