import { SEARCH_BY_ID } from "../../../key/keys";

function fetchingCurrFilm(showID) {
  const replacedSearchQuery = SEARCH_BY_ID.replace("show", showID);
  return fetch(replacedSearchQuery)
    .then((res) => res.json())
    .then((data) => data);
}

export default fetchingCurrFilm;
