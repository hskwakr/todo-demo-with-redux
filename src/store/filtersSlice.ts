import { createSlice } from '@reduxjs/toolkit';
import { ColorType } from '../utils/color';
import { StatusType, status } from '../utils/status';

type FiltersType = {
  status: StatusType;
  colors: ColorType[];
};

const initialState: FiltersType = {
  status: status.All,
  colors: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
});

export default filtersSlice.reducer;
