let initialState = {
  isFetching: false,
};

const isFetchingReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "IS-FETCHING":
      newState.isFetching = { ...state.isFetching };
      newState.isFetching = action.payload;
      return newState;
    default:
      return { ...state };
  }
};

export const isFetching = (payload) => {
  return { type: "IS-FETCHING", payload: payload };
};

export default isFetchingReducer;
