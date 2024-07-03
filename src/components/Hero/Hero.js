import React, { useEffect, useState } from 'react';
import Rating from '../Rating/Rating';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import PropTypes from 'prop-types';
import './Hero.scss';

const Hero = (props) => {
  const [movie, setMovie] = useState([]);
  const { loading, error, getMoviesNowPlaying } = props;

  useEffect(() => {
    const moviesIds = Math.floor(Math.random() * 20);
    if (!moviesIds) return;
    getMoviesNowPlaying().then((movie) => setMovie(movie[moviesIds]));
  }, []);

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = loading || error ? null : <View movie={movie} />;

  return (
    <>
      {spinner}
      {errorMessage}
      {content}
    </>
  );
};

const View = (props) => {
  const { backdrop_path, poster_path, title, overview, vote_average } =
    props.movie;
  const bgImage = 'https://media.themoviedb.org/t/p/original';
  const posterImage = 'https://media.themoviedb.org/t/p/w500';

  return (
    <section
      style={{ backgroundImage: `url(${bgImage}${backdrop_path})` }}
      className="hero"
    >
      <div className="hero__content">
        <img
          className="hero__content__poster"
          src={`${posterImage}${poster_path}`}
        />
        <div className="hero__content__descr">
          <h1>{title}</h1>
          <p>{overview}</p>
          <h2>Rating:</h2>
          <p>
            <span>{vote_average}</span>
          </p>
          <Rating rating={vote_average} />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  getMoviesNowPlaying: PropTypes.func.isRequired,
  error: PropTypes.any,
  loading: PropTypes.bool.isRequired,
};

export default Hero;
