const initialState = {
    movie: [],
    completed: false
  };
  
  const fetchMovieDescription = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_MOVIE_DESCRIPTION":
        return {
          ...state,
          movie: action.payload, 
          completed: false
        };
      default:
        return state;
    }
  };

  export default fetchMovieDescription;