import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ListContextProvider } from './context/List';
import Navbar from './components/NavBar/index';
import Home from './pages/Home/index';
import FilterSearch from './pages/FilterSearch/index';
import Genres from './pages/Genres/index';
import Favorites from './pages/Favorites/index';
import theme from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ListContextProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/search" component={FilterSearch} />
            <Route path="/favoritos" component={Favorites} />
            <Route path="/generos" component={Genres} />
            <Route path="*">
              <Link to="/" />
            </Route>
          </ThemeProvider>
        </ListContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
