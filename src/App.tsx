import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import FilterSearch from './pages/FilterSearch';
import { Reset } from 'styled-reset';
import theme from './theme';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <Reset />
          <Route exact path="/" component={Home} />
          <Route path="/drama" component={FilterSearch} />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
