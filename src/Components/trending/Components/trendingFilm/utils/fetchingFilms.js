import {
  NEWEST__REQUEST,
  POPULAR_REQUEST,
  TOPRATED_REQUEST,
} from "../../../../../key/keys";

function getNewestMovieDB(currPage) {
  return fetch(NEWEST__REQUEST + currPage).then((res) => res.json());
}

function getPopularMovieDB(currPage) {
  return fetch(POPULAR_REQUEST + currPage).then((res) => res.json());
}

function getTopRatedMovieDB(currPage) {
  // console.log("currPage", currPage);

  return fetch(TOPRATED_REQUEST + currPage).then((res) => res.json());
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getNewestMovieDB, getPopularMovieDB, getTopRatedMovieDB };
