import { SEARCH_MOVIES, GET_MOVIES, GET_MOVIE_DESCRIPTION, GET_FAVORITE_MOVIES, LOADING } from "./types";

import axios from "axios";

export const searchMovies = text => ({
  type: SEARCH_MOVIES,
  payload: text
});

export const getMovies = text => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=5cb241a4&s=${text}`)
    .then(response =>
      dispatch({
        type: GET_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const getMovieDescription = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=5cb241a4&i=${id}`)
    .then(response =>
      dispatch({
        type: GET_MOVIE_DESCRIPTION,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const getFavoriteMovies = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=5cb241a4&i=${id}&plot=full`)
    .then(response =>
      dispatch({
        type: GET_FAVORITE_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};