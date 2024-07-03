import React, { useState, useEffect } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Rating from '../Rating/Rating';
import PropTypes from 'prop-types';
import './Details.scss';
import 'swiper/swiper-bundle.min.css';
import picture from '../../assets/profile.svg';

const Details = ({ request, error, loading, getCredits, getVideos }) => {
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [videos, setVideos] = useState([]);
  const { movieId } = useParams();

  console.log(movie);

  useEffect(() => {
    if (!movieId) return;
    request(movieId).then((movie) => setMovie(movie));
    getCredits(movieId).then((credits) => setCredits(credits));
    getVideos(movieId).then((videos) => setVideos(videos));
  }, []);

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content =
    !loading && !error ? (
      <View movie={movie} credits={credits} videos={videos} />
    ) : null;

  return (
    <>
      {spinner}
      {errorMessage}
      {content}
    </>
  );
};

const View = ({ movie, credits, videos }) => {
  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    vote_average,
    genres = [],
    production_countries = [],
    tagline,
    name,
  } = movie;
  const bgImage = 'https://media.themoviedb.org/t/p/original';
  const posterImage = 'https://media.themoviedb.org/t/p/w500';
  const profileImage = 'https://media.themoviedb.org/t/p/w200';

  return (
    <>
      <section
        style={{ backgroundImage: `url(${bgImage}${backdrop_path})` }}
        className="details"
      >
        <div className="details__content">
          <img
            className="details__content__poster"
            src={poster_path ? `${posterImage}${poster_path}` : picture}
            alt={title}
          />
          <div className="details__content__descr">
            <h1>{title || name}</h1>
            <p>
              <i>{tagline}</i>
            </p>
            <p>{overview || 'There is no description'}</p>
            <h2>Countries:</h2>
            <div className="details__content__descr__countries">
              {production_countries.length > 0 ? (
                production_countries.map((item, index) => (
                  <p key={index}>{item.name}</p>
                ))
              ) : (
                <p>No countries available</p>
              )}
            </div>
            <h2>Genres:</h2>
            <div className="details__content__descr__genres">
              {genres.length > 0 ? (
                genres.map((item, index) => <p key={index}>{item.name}</p>)
              ) : (
                <p>No genres available</p>
              )}
            </div>
            <h2>Rating:</h2>
            <p>
              <span>{vote_average}</span>
            </p>
            <Rating rating={vote_average} />
          </div>
        </div>
      </section>
      <div className="credits">
        <h2>Cast</h2>
        <Swiper grabCursor={true} spaceBetween={16} slidesPerView={'auto'}>
          {credits && credits.length > 0 ? null : 'No cast available'}
          {credits.slice(0, 8).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="credits__card">
                <img
                  alt={item.name}
                  className="credits__card__poster"
                  src={
                    item.profile_path
                      ? `${profileImage}${item.profile_path}`
                      : picture
                  }
                />
                <div className="credits__card__descr">
                  <p>{item.name}</p>
                  <p>
                    <span>{item.character}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="videos">
        <h2>Video</h2>
        {videos && videos.length > 0 ? null : 'No videos available'}
        <div className="videos__wrapper">
          {videos.slice(0, 1).map((item, index) => (
            <iframe
              key={index}
              className="videos__wrapper__preview"
              src={`https://www.youtube.com/embed/${item.key}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

Details.propTypes = {
  request: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any,
  getCredits: PropTypes.func.isRequired,
};

View.propTypes = {
  movie: PropTypes.object.isRequired,
  credits: PropTypes.array.isRequired,
};

export default Details;
