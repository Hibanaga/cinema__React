const API_KEY = `a0954edce1669bd21c76fe63f43c7ba1`;

const NEWEST__REQUEST = `
https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=`;

const POPULAR_REQUEST = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`;

const TOPRATED_REQUEST = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`;

module.exports = {
  API_KEY,
  NEWEST__REQUEST,
  POPULAR_REQUEST,
  TOPRATED_REQUEST,
};
