import React from 'react';
import { useState, useEffect } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import PropTypes from 'prop-types';
import RatingCircle from '../RatingCircle/RatingCircle';
import Button from '../Button/Button';
import 'swiper/swiper-bundle.min.css';
import './MoviesList.scss';

const MoviesList = (props) => {
  const [moviesList, setMoviesList] = useState([]);
  const { error, request, loading } = props;

  console.log(moviesList);

  useEffect(() => {
    request().then((moviesList) => setMoviesList(moviesList));
  }, []);

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content =
    loading || error ? null : (
      <View moviesList={moviesList} title={props.children} />
    );

  return (
    <>
      {spinner}
      {errorMessage}
      {content}
    </>
  );
};

const View = ({ moviesList, title }) => {
  const posterImage = 'https://media.themoviedb.org/t/p/w200';
  return (
    <div className="movies">
      <h2>{title}</h2>
      <Swiper grabCursor={true} spaceBetween={16} slidesPerView={'auto'}>
        {moviesList.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="movies__card">
              <img
                className="movies__card__poster"
                src={`${posterImage}${
                  movie.poster_path || movie.backdrop_path
                }`}
              />
              <RatingCircle rating={movie.vote_average} />
              <div className="movies__card__descr">
                <p>{movie.title || movie.name}</p>
                <p>
                  <span>{movie.release_date || movie.first_air_date}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button href="#">View More</Button>
    </div>
  );
};

MoviesList.propTypes = {
  request: PropTypes.func.isRequired,
  error: PropTypes.any,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

View.propTypes = {
  moviesList: PropTypes.array.isRequired,
  title: PropTypes.any,
};

export default MoviesList;
