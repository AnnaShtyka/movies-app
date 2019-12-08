export const fetchMovies = () => {
  dispatch({
    type: "FETCH_MOVIES",
    payload: movies
  });
};
