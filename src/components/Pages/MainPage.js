import React from 'react';
import MoviesService from '../../service/MoviesService';
import MoviesList from '../MoviesList/MoviesList';
import Hero from '../Hero/Hero';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const MainPage = () => {
  const {
    getMoviesNowPlaying,
    getMoviesTopRated,
    getTvOnTheAir,
    getTvTopRated,
    loading,
    error,
  } = MoviesService();
  return (
    <>
      <ErrorBoundary>
        <Hero {...{ getMoviesNowPlaying, loading, error }} />
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList
          request={getMoviesNowPlaying}
          {...{ loading, error }}
          link="/movies"
        >
          Movies In Theaters (2024)
        </MoviesList>
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList
          request={getMoviesTopRated}
          {...{ loading, error }}
          link="/movies/top"
        >
          Top Rated Movies
        </MoviesList>
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList request={getTvOnTheAir} {...{ loading, error }} link="/tv">
          TV Series On The Air
        </MoviesList>
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList
          request={getTvTopRated}
          {...{ loading, error }}
          link="/tv/top"
        >
          Top Rated TV Series
        </MoviesList>
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
