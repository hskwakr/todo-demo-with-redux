import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { TodoType } from '../utils/todo';

const todosAdapter = createEntityAdapter<TodoType>();
const initialState = todosAdapter.getInitialState();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
