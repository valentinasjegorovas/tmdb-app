import MoviesService from '../../service/MoviesService';
import Header from '../Header/Header';
import MoviesList from '../MoviesList/MoviesList';
import Hero from '../Hero/Hero';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Footer from '../Footer/Footer';
import './App.scss';

function App() {
  const {
    getMoviesNowPlaying,
    getMoviesTopRated,
    getTvOnTheAir,
    getTvTopRated,
    loading,
    error,
  } = MoviesService();
  return (
    <div className="app">
      <Header />
      <ErrorBoundary>
        <Hero {...{ getMoviesNowPlaying, loading, error }} />
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList request={getMoviesNowPlaying} {...{ loading, error }}>
          Movies In Theaters (2024)
        </MoviesList>
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList request={getMoviesTopRated} {...{ loading, error }}>
          Top Rated Movies
        </MoviesList>
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList request={getTvOnTheAir} {...{ loading, error }}>
          TV Series On The Air
        </MoviesList>
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList request={getTvTopRated} {...{ loading, error }}>
          Top Rated TV Series
        </MoviesList>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
