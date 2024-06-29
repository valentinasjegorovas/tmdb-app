import MoviesService from '../../service/MoviesService';
import Header from '../Header/Header';
import MoviesList from '../MoviesList/MoviesList';
import Hero from '../Hero/Hero';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './App.scss';

function App() {
  const { getMoviesNowPlaying, getMoviesTopRated, loading, error } =
    MoviesService();
  return (
    <div className="app">
      <Header />
      <ErrorBoundary>
        <Hero {...{ getMoviesNowPlaying, loading, error }} />
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList request={getMoviesNowPlaying} {...{ loading, error }}>
          Movies in Theaters (2024)
        </MoviesList>
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList request={getMoviesTopRated} {...{ loading, error }}>
          Top Rated Movies
        </MoviesList>
      </ErrorBoundary>
    </div>
  );
}

export default App;
