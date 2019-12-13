import axios from "axios";

export const saveMovieDescription = data => ({
  type: "SAVE_MOVIE_DESCRIPTION",
  payload: data
});
export const fetchMovieDescription = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=5cb241a4&i=${id}`)
    .then(response => dispatch(saveMovieDescription(response.data)))
    .catch(err => console.log(err));
};
