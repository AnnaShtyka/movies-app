import {combineReducers}  from "redux";

import movies from "./movies";
import searchText from "./searchText";
import movie from "./movie";
import favoriteMovies from "./favoriteMovies";
import loading from "./loading";

export default combineReducers({
  searchText,
  movies,
  movie,
  favoriteMovies,
  loading
});