import { useHttp } from '../hooks/http.hook';

const MoviesService = () => {
  const api_base = 'https://api.themoviedb.org/3/';
  const api_key = 'd6fd31b61d892763d74d0a89b55fa731';

  const { loading, error, request } = useHttp();

  const getMoviesNowPlaying = async (page = 1) => {
    const response = await request(
      `${api_base}movie/now_playing?page=${page}api_key=${api_key}`
    );
    return response.results;
  };

  const getMoviesPopular = async (page = 1) => {
    const response = await request(
      `${api_base}movie/popular?page=${page}api_key=${api_key}`
    );
    return response.results;
  };

  const getMoviesTopRated = async (page = 1) => {
    const response = await request(
      `${api_base}movie/top_rated?page=${page}api_key=${api_key}`
    );
    return response.results;
  };

  const getMoviesUpcoming = async (page = 1) => {
    const response = await request(
      `${api_base}movie/upcoming?page=${page}api_key=${api_key}`
    );
    return response.results;
  };

  const getDetails = async (id) => {
    const response = await request(`${api_base}movie/${id}`);
    return response;
  };

  return {
    loading,
    error,
    getMoviesNowPlaying,
    getMoviesPopular,
    getMoviesTopRated,
    getDetails,
    getMoviesUpcoming,
  };
};

export default MoviesService;
