import { Button, Grid, Typography } from '@mui/material';
import { TodoType } from '../utils/todo';
import ColorSwitch from './ColorSwitch';

interface TodoProps {
  todo: TodoType;
}

const Todo = ({ todo }: TodoProps) => {
  const { name, color, completed } = todo;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button>{completed}</Button>
      </Grid>

      <Grid item>
        <Typography>{name}</Typography>
      </Grid>

      <Grid item>
        <Button>
          <ColorSwitch initColor={color} onColorUpdated={() => {}} />
        </Button>
      </Grid>

      <Grid item>
        <Button>Delete</Button>
      </Grid>
    </Grid>
  );
};

export default Todo;
