import { Button, Checkbox, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoType } from '../utils/todo';
import ColorSwitch from './ColorSwitch';

interface TodoProps {
  todo: TodoType;
}

const Todo = ({ todo }: TodoProps) => {
  const { name, color, completed } = todo;

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      <Grid item xs={1}>
        <Checkbox checked={completed} />
      </Grid>

      <Grid item xs={2}>
        <Typography>{name}</Typography>
      </Grid>

      <Grid item xs={1}>
        <ColorSwitch initColor={color} onColorUpdated={() => {}} />
      </Grid>

      <Grid item xs={1}>
        <Button data-testid="todo-delete">
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Todo;
