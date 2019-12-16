import axios from "axios";

import { SAVE_MOVIE_DESCRIPTION } from "../actions/types";

const saveMovieDescription = data => ({
  type: SAVE_MOVIE_DESCRIPTION,
  payload: data
});
export const fetchMovieDescription = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=5cb241a4&i=${id}`)
    .then(response => dispatch(saveMovieDescription(response.data)))
    .catch(err => console.log(err));
};

