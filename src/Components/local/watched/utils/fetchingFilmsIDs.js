import { SEARCH_BY_ID } from "../../../../key/keys";
import axios from "axios";

function getFilmsByIDs(arrIDs) {
  let query = "";
  let arr_request = [];
  let fetchingItem = null;
  for (let el of arrIDs) {
    query = SEARCH_BY_ID.replace("show", el);
    fetchingItem = axios(query);
    arr_request.push(fetchingItem);
  }

  return Promise.all(arr_request)
    .then((data) => data)
    .then((promiseArr) => promiseArr.map((data) => data.data));
}

export default getFilmsByIDs;
