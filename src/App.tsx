import { Grid, Container } from '@mui/material';
import TodoHeader from './components/TodoHeader';
import './App.css';

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
      <Grid item>
        <TodoHeader />
      </Grid>
    </Grid>
  </Container>
);

export default App;
