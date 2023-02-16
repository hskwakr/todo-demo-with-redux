import { Container, Grid } from '@mui/material';
import TodoHeader from './components/TodoHeader';
import './App.css';
import TodoList from './components/TodoList';

const App = () => (
  <Container fixed>
    <Grid
      container
      height="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={1}
    >
      <Grid item height="30%">
        <TodoHeader />
      </Grid>

      <Grid item height="50%">
        <TodoList />
      </Grid>
    </Grid>
  </Container>
);

export default App;
