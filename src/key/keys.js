const API_KEY = `a0954edce1669bd21c76fe63f43c7ba1`;

const GENRE_LISTREQUEST = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

const NEWEST__REQUEST = `
https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=`;

const POPULAR_REQUEST = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`;

const TOPRATED_REQUEST = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`;

const SEARCH_BY_ID = `https://api.themoviedb.org/3/movie/show?api_key=${API_KEY}&language=en-US`;

const SEARCH_BY_NAME = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=SearchMovie&page=currPage&include_adult=false`;

module.exports = {
  API_KEY,
  GENRE_LISTREQUEST,
  NEWEST__REQUEST,
  POPULAR_REQUEST,
  TOPRATED_REQUEST,
  SEARCH_BY_ID,
  SEARCH_BY_NAME,
};
