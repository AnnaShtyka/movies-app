import axios from "axios";

export const saveMovieDescription = id => dispatch => {
  axios.get(`https://www.omdbapi.com/?apikey=5cb241a4&s=${id}`).then(response =>
    dispatch({
      type: "SAVE_MOVIE_DESCRIPTION",
      payload: response.data
    })
  )
  .catch(err => console.log(err));
};
