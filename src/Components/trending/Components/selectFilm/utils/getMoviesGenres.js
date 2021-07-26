import { API_KEY } from "../../../../../key/keys";

function getMoviesGenres() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  )
    .then((res) => res.json())
    .then((data) => data.genres);
}

export default getMoviesGenres;
