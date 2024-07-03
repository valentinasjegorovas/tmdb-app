import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import MoviesService from '../../service/MoviesService';

const TvPage = () => {
  const { getTvOnTheAir, loading, error, searchTv } = MoviesService();
  return (
    <>
      <ErrorBoundary>
        <MoviesGrid
          search={searchTv}
          type="tv"
          request={getTvOnTheAir}
          {...{ loading, error }}
        />
      </ErrorBoundary>
    </>
  );
};

export default TvPage;
