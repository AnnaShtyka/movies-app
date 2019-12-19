import {combineReducers}  from "redux";

import movies from "./movies";
import movie from "./movie";
import favoriteMovies from "./favoriteMovies";
import loading from "./loading";

export default combineReducers({
  movies,
  movie,
  favoriteMovies,
  loading
});