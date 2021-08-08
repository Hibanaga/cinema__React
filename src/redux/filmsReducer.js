import {
  ADD_FILM,
  ADD_LOADMORE,
  CLEAR_FILMS,
  ADD_LOCALFILM,
  REMOVE_SELECTED,
} from "../key/namesDispatch";

export default function filmsReducer(state = [], { payload, type }) {
  switch (type) {
    case ADD_FILM:
      return payload;
    case ADD_LOADMORE:
      return [...state, ...payload];
    case REMOVE_SELECTED:
      return state.filter((item) => item.id !== payload);
    case ADD_LOCALFILM:
      return [...state, payload];
    case CLEAR_FILMS:
      return payload;
    default:
      return state;
  }
}
