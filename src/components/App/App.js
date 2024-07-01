import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import MoviesPage from '../Pages/MoviesPage';
import TopMoviesPage from '../Pages/TopMoviesPage';
import TvPage from '../Pages/TvPage';
import TvPageTop from '../Pages/TvPageTop';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route exact path="/movies/top">
            <TopMoviesPage />
          </Route>
          <Route exact path="/tv">
            <TvPage />
          </Route>
          <Route exact path="/tv/top">
            <TvPageTop />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
