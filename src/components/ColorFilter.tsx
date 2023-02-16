import { Checkbox, Grid } from '@mui/material';
import { colors } from '../utils/color';

const ColorFilter = () => {
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
