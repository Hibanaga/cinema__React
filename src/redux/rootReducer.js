import { combineReducers } from "redux";
import actionsReducer from "./actionsReducer";
import filmsReducer from "./filmsReducer";
import genreReducer from "./genreReducer";

const rootReducer = combineReducers({
  genres: genreReducer,
  films: filmsReducer,
  actions: actionsReducer,
});

export default rootReducer;
