import { Box } from '@mui/material';
import ListTitle from './ListTitle';
import Todo from './Todo';

const TodoList = () => (
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

    <Box minWidth="300px">
      <Todo id="1" />
    </Box>
  </Box>
);

export default TodoList;
