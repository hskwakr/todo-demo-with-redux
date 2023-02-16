import { Checkbox, Grid } from '@mui/material';
import { colors } from '../utils/color';
import { useAppDispatch } from '../store/hooks';
import { filterColorsModified } from '../store/filtersSlice';

const ColorFilter = () => {
  const dispatch = useAppDispatch();

  const renderedItems = colors.map(c => {
    const id = `color-filter-item-${c}`;

    return (
      <Grid item key={c}>
        <Checkbox
          inputProps={{ 'aria-label': id }}
          sx={{
            color: c,
            '&.Mui-checked': {
              color: c,
            },
          }}
          onChange={e => {
            const type = e.target.checked ? 'added' : 'removed';
            dispatch(filterColorsModified(c, type));
          }}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={2} data-testid="color-filter">
      {renderedItems}
    </Grid>
  );
};

export default ColorFilter;
