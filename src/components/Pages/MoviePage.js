import React from 'react';
import Details from '../Details/Details';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MoviesService from '../../service/MoviesService';

const MoviePage = () => {
  const { getMovieDetails, loading, error, getMovieCredits, getMovieVideos } =
    MoviesService();
  return (
    <ErrorBoundary>
      <Details
        request={getMovieDetails}
        getCredits={getMovieCredits}
        getVideos={getMovieVideos}
        {...{ loading, error }}
      />
    </ErrorBoundary>
  );
};

export default MoviePage;
