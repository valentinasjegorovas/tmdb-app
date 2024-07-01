import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import {
  MainPage,
  MoviesPage,
  Page404,
  TopMoviesPage,
  TvPage,
  TvPageTop,
} from '../Pages';
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
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
