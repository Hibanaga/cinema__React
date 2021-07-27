import { ADD_CURRGENRE, ADD_SELECTEDCATEGORY } from "../key/namesDispatch";

export default function actionsReducer(
  state = {
    currGenre: "Featured",
    selectedCategory: "All Genres",
  },
  { payload, type }
) {
  switch (type) {
    case ADD_CURRGENRE:
      return { ...state, currGenre: payload };
    case ADD_SELECTEDCATEGORY:
      return { ...state, selectedCategory: payload };
    default:
      return state;
  }
}
