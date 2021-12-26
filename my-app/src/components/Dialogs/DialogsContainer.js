import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addMessageToState, toStateThisInput } from "../../reducers/dialogs";
import { updateProfile, updateAvatar } from "../../reducers/updateProfile";
import { setUsers } from "../../reducers/users";

const mapStateToProps = (state) => {
  return {
    textFromState: state.dialogsReducer.textFromStateDialogs,
    myProfile: state.profileUpdateReducer.myProfile,
    MyAvatar: state.profileUpdateReducer.avatar,
    dialogs: state.dialogsReducer.dialogData,
    allFriends: state.usersReducer.friendsData,
  };
};

export default connect(mapStateToProps, {
  //mapDispatchToProps
  setUsers,
  addMessageToState,
  toStateThisInput,
  updateProfile,
  updateAvatar,
})(Dialogs);
