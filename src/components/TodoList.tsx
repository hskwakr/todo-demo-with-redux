import { Box } from '@mui/material';
import ListTitle from './ListTitle';
import Todo from './Todo';
import { useAppSelector } from '../store/hooks';
import { selectFilteredTodoIds } from '../store/todosSlice';

const TodoList = () => {
  const todoIds = useAppSelector(selectFilteredTodoIds);

  const Items = todoIds.map(id => <Todo key={id} id={id} />);

  return (
    <Box
      px="200px"
      py="50px"
      my="20px"
      sx={{
        border: 'solid gray',
        borderRadius: '10px',
      }}
    >
      <Box minWidth="300px">
        <ListTitle />
        <hr />
      </Box>

      <Box minWidth="300px">{Items}</Box>
    </Box>
  );
};

export default TodoList;
