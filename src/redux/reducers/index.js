import {combineReducers}  from "redux";

import movies from "./movies";
import searchText from "./searchText";
import movie from "./movie";
import favoriteMovies from "./favoriteMovies";

export default combineReducers({
  searchText,
  movies,
  movie,
  favoriteMovies
});