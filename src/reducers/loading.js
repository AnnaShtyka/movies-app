import { LOADING } from "../actions/types";

const initialState = {
  loading: false
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default loading;
