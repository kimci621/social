import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addMessageToState, toStateThisInput } from "../../reducers/dialogs";
import { thunkProfile } from "../../reducers/updateProfile";
import hoc from "../../hoc/hoc"

const mapStateToProps = (state) => {
  return {
    textFromState: state.dialogsReducer.textFromStateDialogs,
    myProfile: state.profileUpdateReducer.myProfile,
    MyAvatar: state.profileUpdateReducer.avatar,
    dialogs: state.dialogsReducer.dialogData,
    allFriends: state.usersReducer.friendsData,
    login: state.loginReducer.login,
  };
};

const dialogsHoc = hoc(Dialogs);

export default connect(mapStateToProps, {
  //mapDispatchToProps
  addMessageToState,
  toStateThisInput,
  thunkProfile,
})(dialogsHoc);
