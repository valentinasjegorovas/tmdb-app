import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RatingCircle from '../RatingCircle/RatingCircle';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './MoviesGrid.scss';

const MoviesGrid = (props) => {
  const [moviesList, setMoviesList] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [pages, setPages] = useState(1);

  const { request, error, loading } = props;
  const posterImage = 'https://media.themoviedb.org/t/p/w300';

  useEffect(() => {
    onRequest(pages, true);
  }, []);

  const moviesLoaded = (newMovies) => {
    setMoviesList((moviesList) => [...moviesList, ...newMovies]);
    setNewItemsLoading(false);
    setPages((pages) => pages + 1);
  };

  const onRequest = (pages, initial) => {
    initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
    request(pages).then(moviesLoaded);
  };

  const renderMovies = () => {
    const movies = moviesList.map((movie, index) => (
      <div key={index} className="movies-grid__wrapper__card">
        <a href="#">
          <img
            className="movies-grid__wrapper__card__poster"
            src={`${posterImage}${movie.poster_path || movie.backdrop_path}`}
            alt=""
          />
        </a>
        <RatingCircle rating={movie.vote_average} />
        <div className="movies-grid__wrapper__card__descr">
          <p>{movie.title || movie.name}</p>
          <p>
            <span>{movie.release_date || movie.first_air_date}</span>
          </p>
        </div>
      </div>
    ));
    return <div className="movies-grid__wrapper">{movies}</div>;
  };

  const content = renderMovies();
  const spinner = loading && !newItemsLoading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;

  return (
    <>
      <div className="movies-grid">
        {content}
        {spinner}
        {errorMessage}
        <div className="movies-grid__wrapper__btns">
          <Button onClick={() => onRequest(pages)}>Load More</Button>
        </div>
      </div>
    </>
  );
};

MoviesGrid.propTypes = {
  request: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any,
};

export default MoviesGrid;
