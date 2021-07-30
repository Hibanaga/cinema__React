import { GENRE_LISTREQUEST } from "../../../../../key/keys";

function getMoviesGenres() {
  return fetch(GENRE_LISTREQUEST)
    .then((res) => res.json())
    .then((data) => data.genres);
}

export default getMoviesGenres;
