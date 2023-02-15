import { Button, Checkbox, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../store/hooks';
import { manyTodosDeleted, manyTodosToggled } from '../store/todosSlice';

interface ListTitleProps {
  ids: string[];
}

const ListTitle = ({ ids }: ListTitleProps) => {
  const dispatch = useAppDispatch();

  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      alignItems="center"
      data-testid="list-title"
    >
      <Grid item xs={2}>
        <Checkbox
          onChange={e => dispatch(manyTodosToggled(ids, e.target.checked))}
        />
      </Grid>

      <Grid item xs={8} />

      <Grid item xs={2}>
        <Button
          data-testid="list-title-delete"
          onClick={() => dispatch(manyTodosDeleted(ids))}
        >
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default ListTitle;
