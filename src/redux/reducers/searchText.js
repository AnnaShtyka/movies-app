import {SEARCH_MOVIES} from '../actions/types';

const initialState = {
  text: ""
};

const searchText = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        text: action.payload
      };
    default:
      return state;
  }
};

export default searchText;
