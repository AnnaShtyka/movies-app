import {GET_MOVIES, SEARCH_MOVIES} from '../actions/types';

const initialState = {
  movies: [],
  loading: false,
  text: ''
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default movies;
