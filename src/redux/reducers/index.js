import {combineReducers}  from "redux";

import fetchMovies from "./fetchMovies";
import searchMovies from "./searchMovies";
import fetchMovieDescription from "./fetchMovieDescription";

export default combineReducers({
  fetchMovies,
  searchMovies,
  fetchMovieDescription
});
