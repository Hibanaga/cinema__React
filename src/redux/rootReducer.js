import { combineReducers } from "redux";
import filmsReducer from "./filmsReducer";
import genreReducer from "./genreReducer";

const rootReducer = combineReducers({
  genres: genreReducer,
  films: filmsReducer,
});

export default rootReducer;
