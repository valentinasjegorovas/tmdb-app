import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import MoviesService from '../../service/MoviesService';

const MoviesPage = () => {
  const { getMoviesNowPlaying, loading, error, searchMovie } = MoviesService();
  return (
    <>
      <ErrorBoundary>
        <MoviesGrid
          type="movies"
          request={getMoviesNowPlaying}
          search={searchMovie}
          {...{ loading, error }}
        />
      </ErrorBoundary>
    </>
  );
};

export default MoviesPage;
