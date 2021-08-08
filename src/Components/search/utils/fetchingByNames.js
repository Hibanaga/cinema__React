import { SEARCH_BY_NAME, GENRE_LISTREQUEST } from "../../../key/keys";

function fetchingByNames(queryToSearch, currPage) {
  const replacedQuery = SEARCH_BY_NAME.replace("SearchMovie", queryToSearch);
  const replacedPage = replacedQuery.replace("currPage", currPage);

  return fetch(replacedPage).then((res) => res.json());
}

function fetchingGenres() {
  return fetch(GENRE_LISTREQUEST).then((res) => res.json());
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchingByNames,
  fetchingGenres,
};
