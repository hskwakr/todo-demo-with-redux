import {
  PayloadAction,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { TodoType } from '../utils/todo';
import { ColorType } from '../utils/color';
import { selectFilters } from './filtersSlice';
import { Status } from '../utils/status';

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
        const id = action.payload;
        todosAdapter.removeOne(state, id);
      },
      prepare(id: string) {
        return {
          payload: id,
        };
      },
    },

    todoToggled: {
      reducer(state, action: PayloadAction<string>) {
        const id = action.payload;
        const todo = state.entities[id];

        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      prepare(id: string) {
        return {
          payload: id,
        };
      },
    },

    todoColorChanged: {
      reducer(state, action: PayloadAction<{ id: string; color: ColorType }>) {
        const { id, color } = action.payload;
        const todo = state.entities[id];

        if (todo) {
          todo.color = color;
        }
      },
      prepare(id: string, color: ColorType) {
        return {
          payload: {
            id,
            color,
          },
        };
      },
    },

    manyTodosDeleted: {
      reducer(state, action: PayloadAction<string[]>) {
        const ids = action.payload;
        todosAdapter.removeMany(state, ids);
      },
      prepare(ids: string[]) {
        return {
          payload: ids,
        };
      },
    },

    manyTodosToggled: {
      reducer(
        state,
        action: PayloadAction<{ ids: string[]; completed: boolean }>
      ) {
        const { ids, completed } = action.payload;
        const updates = ids.map(id => ({
          id,
          changes: { completed },
        }));

        todosAdapter.updateMany(state, updates);
      },
      prepare(ids: string[], completed: boolean) {
        return {
          payload: { ids, completed },
        };
      },
    },
  },
});

export default todosSlice.reducer;

export const {
  todoAdded,
  todoDeleted,
  todoToggled,
  todoColorChanged,
  manyTodosDeleted,
  manyTodosToggled,
} = todosSlice.actions;

export const { selectAll: selectAllTodos, selectById: selectTodoById } =
  todosAdapter.getSelectors();

export const selectFilteredTodos = createSelector(
  selectAllTodos,
  selectFilters,
  (todos, filters) => {
    const { status, colors } = filters;

    const isAll = status === Status.All;
    const isCompleted = status === Status.Completed;
    const colorsNoMatch = colors.length === 0;

    if (isAll && colorsNoMatch) return todos;

    return todos.filter(todo => {
      const statusMatch = isAll || todo.completed === isCompleted;
      const colorsMatch = colorsNoMatch || colors.includes(todo.color);

      return statusMatch && colorsMatch;
    });
  }
);

export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  todos => todos.map(todo => todo.id)
);
