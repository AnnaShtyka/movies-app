import { LOADING } from "../actions/types";

const initialState = {
  loading: false
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default loading;
