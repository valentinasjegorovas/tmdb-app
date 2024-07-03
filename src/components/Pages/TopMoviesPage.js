import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import MoviesService from '../../service/MoviesService';

const TopMoviesPage = () => {
  const { getMoviesTopRated, loading, error, searchMovie } = MoviesService();
  return (
    <>
      <ErrorBoundary>
        <MoviesGrid
          type="movies"
          request={getMoviesTopRated}
          search={searchMovie}
          {...{ loading, error }}
        />
      </ErrorBoundary>
    </>
  );
};

export default TopMoviesPage;
