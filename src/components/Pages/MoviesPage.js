import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import MoviesService from '../../service/MoviesService';

const MoviesPage = () => {
  const { getMoviesNowPlaying, loading, error } = MoviesService();
  return (
    <>
      <ErrorBoundary>
        <MoviesGrid
          type="movies"
          request={getMoviesNowPlaying}
          {...{ loading, error }}
        />
      </ErrorBoundary>
    </>
  );
};

export default MoviesPage;
