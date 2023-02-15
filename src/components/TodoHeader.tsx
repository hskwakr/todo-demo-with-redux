import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ColorFilter from './ColorFilter';
import NewTodo from './NewTodo';
import StatusFilter from './StatusFilter';

const Item = styled(Box)(() => ({}));

const TodoHeader = () => (
  <Stack
    direction="column"
    spacing={1}
    alignItems="center"
    data-testid="todo-header"
  >
    <Item mb={3}>
      <NewTodo />
    </Item>

    <Item>
      <ColorFilter />
    </Item>

    <Item>
      <StatusFilter />
    </Item>
  </Stack>
);

export default TodoHeader;
