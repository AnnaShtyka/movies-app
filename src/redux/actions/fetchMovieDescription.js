export const fetchMovieDescription = () => {
  dispatch({
    type: "FETCH_MOVIE_DESCRIPTION",
    payload: movie
  });
};
