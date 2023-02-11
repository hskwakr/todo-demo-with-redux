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

    filterColorsModified: {
      reducer(
        state,
        action: PayloadAction<{
          color: ColorType;
          changeType: 'added' | 'removed';
        }>
      ) {
        const { color, changeType } = action.payload;

        switch (changeType) {
          case 'added':
            if (state.colors.includes(color)) break;

            state.colors.push(color);
            break;

          case 'removed':
            state.colors = state.colors.filter(c => c !== color);
            break;

          default:
            break;
        }
      },
      prepare(color: ColorType, changeType: 'added' | 'removed') {
        return {
          payload: {
            color,
            changeType,
          },
        };
      },
    },
  },
});

export default filtersSlice.reducer;

export const { filterStatusUpdated, filterColorsModified } =
  filtersSlice.actions;
