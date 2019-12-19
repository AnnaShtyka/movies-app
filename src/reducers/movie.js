import { GET_MOVIE_DESCRIPTION} from "../actions/types";

const initialState = {
  loading: false,
  movie: []
};

const searchMovies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DESCRIPTION:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default searchMovies;
