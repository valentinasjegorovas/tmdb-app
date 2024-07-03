import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RatingCircle from '../RatingCircle/RatingCircle';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './MoviesGrid.scss';
import picture from '../../assets/profile.svg';

const MoviesGrid = (props) => {
  const [moviesList, setMoviesList] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [pages, setPages] = useState(1);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const { request, error, loading, type, search } = props;
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

  const onSearch = () => {
    if (!query.trim()) return;
    setMoviesList([]);
    setIsSearchActive(true);
    search(query, 1).then((moviesList) => {
      setMoviesList(moviesList);
      setPages(2);
    });
  };

  const onLoadMore = () => {
    if (isSearchActive) {
      search(query, pages).then(moviesLoaded);
      setNewItemsLoading(true);
    } else {
      onRequest(pages, false);
    }
  };

  const renderMovies = () => {
    const movies = moviesList.map((movie, index) => (
      <div key={index} className="movies-grid__wrapper__card">
        <Link to={`/${type}/${movie.id}`}>
          <img
            className="movies-grid__wrapper__card__poster"
            src={
              movie.poster_path || movie.backdrop_path
                ? `${posterImage}${movie.poster_path || movie.backdrop_path}`
                : picture
            }
            alt=""
          />
        </Link>
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
      <div className="search">
        <input
          className="search__input"
          placeholder="search movie or tv show"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="search__btn" onClick={onSearch}>
          Search
        </button>
      </div>
      <div className="movies-grid">
        {content}
        {spinner}
        {errorMessage}
        <div className="movies-grid__wrapper__btns">
          <Button onClick={onLoadMore}>Load More</Button>
        </div>
      </div>
    </>
  );
};

MoviesGrid.propTypes = {
  request: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.any,
};

export default MoviesGrid;
