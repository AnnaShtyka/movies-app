import  {SEARCH_MOVIES} from '../actions/types';

export const searchMovies = text => ({
  type: SEARCH_MOVIES,
  payload: text
});

