import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { SearchContextProvider } from './context/Search';
import Navbar from './components/NavBar/index';
import Home from './pages/Home/index';
import FilterSearch from './pages/FilterSearch/index';
import Favorites from './pages/Favorites/index';
import theme from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <SearchContextProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/search" component={FilterSearch} />
            <Route path="/favoritos" component={Favorites} />
            <Route path="*">
              <Link to="/" />
            </Route>
          </ThemeProvider>
        </SearchContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
