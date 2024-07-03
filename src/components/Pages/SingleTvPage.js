import React from 'react';
import Details from '../Details/Details';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MoviesService from '../../service/MoviesService';

const MoviePage = () => {
  const { getTvDetails, loading, error, getTvCredits, getTvVideos } =
    MoviesService();
  return (
    <ErrorBoundary>
      <Details
        request={getTvDetails}
        getCredits={getTvCredits}
        getVideos={getTvVideos}
        {...{ loading, error }}
      />
    </ErrorBoundary>
  );
};

export default MoviePage;
