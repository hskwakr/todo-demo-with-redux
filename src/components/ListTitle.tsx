import { Button, Checkbox, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ListTitle = () => (
  <Grid container spacing={1} justifyContent="center" alignItems="center">
    <Grid item xs={1}>
      <Checkbox />
    </Grid>

    <Grid item xs={3} />

    <Grid item xs={1}>
      <Button data-testid="list-title-delete">
        <DeleteIcon />
      </Button>
    </Grid>
  </Grid>
);

export default ListTitle;
