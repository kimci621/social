import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addMessageToState, toStateThisInput } from "../../reducers/reducers";

const mapStateToProps = (state) => {
  return {
    textFromState: state.textFromStateDialogs,
    myProfile: state.profileComponent.myProfile,
    dialogs: state.dialogComponent.dialogData,
    allFriends: state.asideComponent.friendsData,
  };
};

export default connect(mapStateToProps, {
  //mapDispatchToProps
  addMessageToState,
  toStateThisInput,
})(Dialogs);
