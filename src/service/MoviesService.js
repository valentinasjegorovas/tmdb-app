import { useHttp } from '../hooks/http.hook';

const MoviesService = () => {
  const api_base = 'https://api.themoviedb.org/3/';
  const api_key = 'd6fd31b61d892763d74d0a89b55fa731';

  const { loading, error, request } = useHttp();

  const getMoviesNowPlaying = async (page = 1) => {
    const response = await request(
      `${api_base}movie/now_playing?page=${page}&api_key=${api_key}`
    );
    return response.results;
  };

  const getMoviesTopRated = async (page = 1) => {
    const response = await request(
      `${api_base}movie/top_rated?page=${page}&api_key=${api_key}`
    );
    return response.results;
  };

  const getTvOnTheAir = async (page = 1) => {
    const response = await request(
      `${api_base}tv/on_the_air?page=${page}&api_key=${api_key}`
    );
    return response.results;
  };

  const getTvTopRated = async (page = 1) => {
    const response = await request(
      `${api_base}tv/top_rated?page=${page}&api_key=${api_key}`
    );
    return response.results;
  };

  const getMovieDetails = async (id) => {
    const response = await request(`${api_base}movie/${id}?api_key=${api_key}`);
    return response;
  };

  const getMovieCredits = async (id) => {
    const response = await request(
      `${api_base}movie/${id}/credits?api_key=${api_key}`
    );
    return response.cast;
  };

  const getMovieVideos = async (id) => {
    const response = await request(
      `${api_base}movie/${id}/videos?api_key=${api_key}`
    );
    return response.results;
  };

  const getTvDetails = async (id) => {
    const response = await request(`${api_base}tv/${id}?api_key=${api_key}`);
    return response;
  };

  const getTvCredits = async (id) => {
    const response = await request(
      `${api_base}tv/${id}/credits?api_key=${api_key}`
    );
    return response.cast;
  };

  const getTvVideos = async (id) => {
    const response = await request(
      `${api_base}tv/${id}/videos?api_key=${api_key}`
    );
    return response.results;
  };

  const searchMovie = async (query, page = 1) => {
    const response = await request(
      `${api_base}search/movie?query=${query}&page=${page}&api_key=${api_key}`
    );
    return response.results;
  };

  const searchTv = async (query, page = 1) => {
    const response = await request(
      `${api_base}search/tv?query=${query}&page=${page}&api_key=${api_key}`
    );
    return response.results;
  };

  return {
    loading,
    error,
    getMoviesNowPlaying,
    getMoviesTopRated,
    getTvOnTheAir,
    getTvTopRated,
    getMovieDetails,
    getMovieCredits,
    getMovieVideos,
    getTvDetails,
    getTvCredits,
    getTvVideos,
    searchMovie,
    searchTv,
  };
};

export default MoviesService;
