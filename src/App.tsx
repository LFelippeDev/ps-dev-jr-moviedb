import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home/index';
import FilterSearch from './pages/FilterSearch/index';
import Favorites from './pages/Favorites/index';
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
          <Route path="/favoritos" component={Favorites} />
          <Route path="*">
            <Link to="/" />
          </Route>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
