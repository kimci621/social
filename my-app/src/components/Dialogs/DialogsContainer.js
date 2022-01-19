import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addMessageToState } from "../../reducers/dialogs";
import { thunkProfile } from "../../reducers/updateProfile";
import hoc from "../../hoc/hoc";
import { getFriendsData, getLoginText, getProfile, getAvatar, getDialogData} from "../../selectors/selectors";

const mapStateToProps = (state) => {
  return {
    myProfile: getProfile(state),
    MyAvatar: getAvatar(state),
    dialogs: getDialogData(state),
    allFriends: getFriendsData(state),
    login: getLoginText(state),
  };
};

const dialogsHoc = hoc(Dialogs);

export default connect(mapStateToProps, {
  //mapDispatchToProps
  addMessageToState,
  thunkProfile,
})(dialogsHoc);
