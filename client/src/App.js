import Todo from './components/todo';
import { Container } from './components/Container.styled';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#585be3',
    secondary: '#fb6f70',
    gray: '#fbfbff',
    white: '#ffffff',
    muted: '#bbbed6',
    semimuted: '#8c8fa5',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Todo></Todo>
      </Container>
    </ThemeProvider>
  );
}

export default App;
