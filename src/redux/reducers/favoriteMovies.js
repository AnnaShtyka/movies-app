import {GET_FAVORITE_MOVIES} from '../actions/types';

const initialState = {
  movies: []
};

const favoriteMovies = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default favoriteMovies;