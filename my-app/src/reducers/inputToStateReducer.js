const inputToStateReducer = (state, action) => {
  if (action.type === "INPUT-TO-STATE") {
    state.onTypeTextDialogs.text = action.input;
  } else if (action.type === "INPUT-TO-STATE-ADDPOST") {
    state.onTypeText.text = action.input;
  } else {
    return state;
  }
};
export default inputToStateReducer;
