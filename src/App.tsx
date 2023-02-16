import { Box, Container, Stack, styled } from '@mui/material';
import TodoHeader from './components/TodoHeader';
import './App.css';
import TodoList from './components/TodoList';

const Item = styled(Box)(() => ({}));

const App = () => (
  <Container fixed>
    <Stack
      height="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={1}
    >
      <Item>
        <TodoHeader />
      </Item>

      <Item>
        <TodoList />
      </Item>
    </Stack>
  </Container>
);

export default App;
