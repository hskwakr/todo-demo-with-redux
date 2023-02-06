import { Input } from '@mui/material';

const NewTodo = () => (
  <Input
    placeholder="Enter TODO..."
    slotProps={{
      input: {
        'aria-label': 'new todo',
      },
    }}
  />
);

export default NewTodo;
