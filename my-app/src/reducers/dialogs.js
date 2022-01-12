let initialState = {
  textFromStateDialogs: "",
  name: "",
  avatar: "",
  dialogData: [
  ],
};

const dialogsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "INPUT-TO-STATE":
      newState.textFromStateDialogs = { ...state.textFromStateDialogs };
      newState.textFromStateDialogs = action.input;
      return newState;
    case "SEND-MESSAGE":
      let newMessage = {
        name: action.payload.name,
        avatar:  action.payload.avatar,
        message: action.payload.message,
      };
      newState.dialogData = [...state.dialogData];
      newState.dialogData.push(newMessage);
      newState.textFromStateDialogs = "";
      return newState;
    default:
      return { ...state };
  }
};

const addMessageToState = (payload) => {
  return { type: "SEND-MESSAGE", payload: payload };
};

export { addMessageToState };

export default dialogsReducer;
