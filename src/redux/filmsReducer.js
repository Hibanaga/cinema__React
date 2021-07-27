import { ADD_FILM, ADD_LOADMORE } from "../key/namesDispatch";

export default function filmsReducer(state = [], { payload, type }) {
  switch (type) {
    case ADD_FILM:
      return payload;
    case ADD_LOADMORE:
      return [...state, ...payload];
    default:
      return state;
  }
}
