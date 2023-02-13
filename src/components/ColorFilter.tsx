import { Checkbox, Grid } from '@mui/material';
import { colors } from '../utils/color';

const ColorFilter = () => {
  const renderedItems = colors.map(c => (
    <Grid item key={c}>
      <Checkbox
        inputProps={{ 'aria-label': 'color-filter' }}
        sx={{
          color: c,
          '&.Mui-checked': {
            color: c,
          },
        }}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {renderedItems}
    </Grid>
  );
};

export default ColorFilter;
