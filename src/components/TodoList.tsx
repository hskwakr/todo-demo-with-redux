import { Box, Fade } from '@mui/material';
import ListTitle from './ListTitle';
import Todo from './Todo';
import { useAppSelector } from '../store/hooks';
import { selectFilteredTodoIds } from '../store/todosSlice';

const TodoList = () => {
  const todoIds = useAppSelector(selectFilteredTodoIds);

  const Items = todoIds.map(id => (
    <div key={id} data-testid="todo-list-item">
      <Todo id={id} />
    </div>
  ));

  return (
    <Fade in={todoIds.length > 0}>
      <Box
        px="200px"
        py="50px"
        my="20px"
        sx={{
          border: 'solid gray',
          borderRadius: '10px',
        }}
        data-testid="todo-list"
      >
        <Box minWidth="300px">
          <ListTitle />
          <hr />
        </Box>

        <Box minWidth="300px">{Items}</Box>
      </Box>
    </Fade>
  );
};

export default TodoList;
