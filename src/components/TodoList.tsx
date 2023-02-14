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
      <Todo
        todo={{
          id: '1',
          name: 'Do something 1',
          color: 'gray',
          completed: false,
        }}
      />

      <Todo
        todo={{
          id: '2',
          name: 'Do something 2',
          color: 'red',
          completed: false,
        }}
      />

      <Todo
        todo={{
          id: '3',
          name: 'Do something 3',
          color: 'green',
          completed: false,
        }}
      />
    </Box>
  </Box>
);

export default TodoList;
