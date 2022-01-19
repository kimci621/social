import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addMessageToState } from "../../reducers/dialogs";
import { thunkProfile } from "../../reducers/updateProfile";
import hoc from "../../hoc/hoc";
import {
  getFriendsDataReSelect,
  getLoginTextReSelect,
  getProfileReSelect,
  getAvatarReSelect,
  getDialogDataReSelect,
} from "../../selectors/selectors";

const mapStateToProps = (state) => {
  return {
    myProfile: getProfileReSelect(state),
    MyAvatar: getAvatarReSelect(state),
    dialogs: getDialogDataReSelect(state),
    allFriends: getFriendsDataReSelect(state),
    login: getLoginTextReSelect(state),
  };
};

const dialogsHoc = hoc(Dialogs);

export default connect(mapStateToProps, {
  //mapDispatchToProps
  addMessageToState,
  thunkProfile,
})(dialogsHoc);
