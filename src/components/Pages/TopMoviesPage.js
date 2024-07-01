import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import MoviesService from '../../service/MoviesService';

const TopMoviesPage = () => {
  const { getMoviesTopRated, loading, error } = MoviesService();
  return (
    <>
      <ErrorBoundary>
        <MoviesGrid request={getMoviesTopRated} {...{ loading, error }} />
      </ErrorBoundary>
    </>
  );
};

export default TopMoviesPage;
