export const searchMovies = text => dispatch => {
  dispatch({
    type: "SEARCH_MOVIES",
    payload: text
  });
};

