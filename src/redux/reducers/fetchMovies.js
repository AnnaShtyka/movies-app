const initialState = {
  movies: [],
  completed: false
};

const saveMovies = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_MOVIES":
      return {
        ...state,
        movies: action.payload,
        completed: false
      };
    default:
      return state;
  }
};

export default saveMovies;
