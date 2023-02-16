import { Box, Fade, List, ListItem } from '@mui/material';
import ListTitle from './ListTitle';
import Todo from './Todo';
import { useAppSelector } from '../store/hooks';
import { selectFilteredTodoIds } from '../store/todosSlice';

const TodoList = () => {
  const todoIds = useAppSelector(selectFilteredTodoIds);

  const Items = todoIds.map(id => (
    <ListItem key={id} data-testid="todo-list-item">
      <Todo id={id} />
    </ListItem>
  ));

  return (
    <Fade in={todoIds.length > 0}>
      <Box
        px="200px"
        py="50px"
        my="20px"
        minWidth="350px"
        sx={{
          border: 'solid gray',
          borderRadius: '10px',
        }}
        data-testid="todo-list"
      >
        <Box>
          <ListTitle ids={todoIds} />
          <hr />
        </Box>

        <List sx={{ overflow: 'auto' }}>{Items}</List>
      </Box>
    </Fade>
  );
};

export default TodoList;
