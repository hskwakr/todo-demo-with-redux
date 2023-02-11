import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ColorType } from '../utils/color';
import { StatusType, Status } from '../utils/status';

type FiltersType = {
  status: StatusType;
  colors: ColorType[];
};

const initialState: FiltersType = {
  status: Status.All,
  colors: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterStatusUpdated: {
      reducer(state, action: PayloadAction<StatusType>) {
        const status = action.payload;
        state.status = status;
      },
      prepare(status: StatusType) {
        return {
          payload: status,
        };
      },
    },
  },
});

export default filtersSlice.reducer;

export const { filterStatusUpdated } = filtersSlice.actions;
