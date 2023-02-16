import { Button, Checkbox, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import ColorSwitch from './ColorSwitch';
import {
  selectTodoById,
  todoColorChanged,
  todoDeleted,
  todoToggled,
} from '../store/todosSlice';

interface TodoProps {
  id: string;
}

const Todo = ({ id }: TodoProps) => {
  const dispatch = useAppDispatch();
  const todo = useAppSelector(state => selectTodoById(state, id), shallowEqual);
  if (!todo) {
    return null;
  }

  const { name, color, completed } = todo;

  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      alignItems="center"
      data-testid="a-todo"
    >
      <Grid item xs={2}>
        <Checkbox
          checked={completed}
          onChange={() => dispatch(todoToggled(id))}
        />
      </Grid>

      <Grid item xs={6}>
        <Typography width="160px" overflow="hidden">
          {name}
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <ColorSwitch
          initColor={color}
          onColorUpdated={c => dispatch(todoColorChanged(id, c))}
        />
      </Grid>

      <Grid item xs={2}>
        <Button
          data-testid="todo-delete"
          onClick={() => dispatch(todoDeleted(id))}
        >
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Todo;
