import axios from "axios";

export const saveMovies = text => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=5cb241a4&s=${text}`)
    .then(response =>
      dispatch({
        type: "SAVE_MOVIES",
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};
