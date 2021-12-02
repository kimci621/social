const sendMesageReducer = (state, action) => {
  if (action.type === "SEND-MESSAGE") {
    state.dialogComponent.dialogData.push({
      name: state.profileComponent.myProfile.name,
      avatar: state.profileComponent.myProfile.avatar,
      message: state.onTypeTextDialogs.text,
    });
  } else {
    return state;
  }
};
export default sendMesageReducer;
