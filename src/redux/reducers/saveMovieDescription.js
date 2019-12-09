const initialState = {
    movie: [],
    completed: false
  };
  
  const saveMovieDescription = (state = initialState, action) => {
    switch (action.type) {
      case "SAVE_MOVIE_DESCRIPTION":
        return {
          ...state,
          movie: action.payload, 
          completed: false
        };
      default:
        return state;
    }
  };

  export default saveMovieDescription;
