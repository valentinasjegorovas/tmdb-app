import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import MoviesService from '../../service/MoviesService';

const TvPageTop = () => {
  const { getTvTopRated, loading, error } = MoviesService();
  return (
    <>
      <ErrorBoundary>
        <MoviesGrid request={getTvTopRated} {...{ loading, error }} />
      </ErrorBoundary>
    </>
  );
};

export default TvPageTop;
