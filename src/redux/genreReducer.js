import { ADD_GENRES } from "../key/namesDispatch";
export default function genreReducer(state = [], { type, payload }) {
  switch (type) {
    case ADD_GENRES:
      return payload;
    default:
      return state;
  }
}
