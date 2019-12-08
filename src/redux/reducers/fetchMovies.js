const initialState = {
  movies: [],
  completed: false
};

const fetchMovies = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        movies: action.payload,
        completed: false
      };
    default:
      return state;
  }
};

export default fetchMovies;
