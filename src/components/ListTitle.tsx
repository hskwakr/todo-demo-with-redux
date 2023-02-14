import { Button, Checkbox, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ListTitle = () => (
  <Grid container spacing={0} justifyContent="center" alignItems="center">
    <Grid item xs={2}>
      <Checkbox />
    </Grid>

    <Grid item xs={8} />

    <Grid item xs={2}>
      <Button data-testid="list-title-delete">
        <DeleteIcon />
      </Button>
    </Grid>
  </Grid>
);

export default ListTitle;
