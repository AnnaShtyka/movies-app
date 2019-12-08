const initialState = {
  text: "",
  completed: false
};

 const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      return {
        ...state,
        text: action.payload,
        completed: false
      };
    default:
      return state;
  }
};

export default searchReducer;
