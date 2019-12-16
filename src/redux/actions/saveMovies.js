import axios from "axios";

export const saveMovies = (data) => ({
  type: "SAVE_MOVIES",
  payload: data
})
export const fetchMovies = text => dispatch => {
axios
.get(`https://www.omdbapi.com/?apikey=5cb241a4&s=${text}`)
.then(response =>
dispatch(saveMovies(response.data))
)
.catch(err => console.log(err));
};