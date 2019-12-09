import {combineReducers}  from "redux";

import saveMovies from "./saveMovies";
import searchMovies from "./searchMovies";
import saveMovieDescription from "./saveMovieDescription";

export default combineReducers({
  saveMovies,
  searchMovies,
  saveMovieDescription
});
