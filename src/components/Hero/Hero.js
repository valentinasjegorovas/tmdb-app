import React, { useEffect, useState } from 'react';
import Rating from '../Rating/Rating';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import PropTypes from 'prop-types';
import './Hero.scss';

const Hero = ({ loading, error, getMoviesNowPlaying }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMoviesNowPlaying().then((movies) => {
      const randomMovieIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomMovieIndex]);
    });
  }, []);

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content =
    !loading && !error && Object.keys(movie).length > 0 ? (
      <View movie={movie} />
    ) : null;

  return (
    <>
      {spinner}
      {errorMessage}
      {content}
    </>
  );
};

const View = ({ movie }) => {
  const { backdrop_path, poster_path, title, overview, vote_average } = movie;
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

View.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Hero;
