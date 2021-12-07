import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const addMessageToState = () => {
  return { type: "SEND-MESSAGE" };
};

const toStateThisInput = (input) => {
  return { type: "INPUT-TO-STATE", input: input };
};

const mapStateToProps = (state) => {
  return {
    textFromState: state.textFromStateDialogs,
    myProfile: state.profileComponent.myProfile,
    dialogs: state.dialogComponent.dialogData,
    allFriends: state.asideComponent.friendsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessageToState: () => {
      dispatch(addMessageToState());
    },
    toStateThisInput: (input) => {
      dispatch(toStateThisInput(input));
    },
    showState: () => {
      dispatch({ type: "SHOW-STATE" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
