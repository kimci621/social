import Profile from "./Profile";
import hoc from "../../hoc/hoc";
import { connect } from "react-redux";
import { addPostType } from "../../reducers/posts";
import {
  updateBgImg,
  thunkProfile,
  setStatusThunk,
  setStatus,
  updateStatusOnPage,
  setUserIdInProfilePage,
  thunkAvatarUpdate
} from "../../reducers/updateProfile";
import {
  bgImageReSelect,
  myPostsReSelect,
  githubReSelect,
  statusReSelect,
  getLoginTextReSelect,
  getProfileReSelect,
  getAvatarReSelect,
  userIdReSelect
} from "../../selectors/selectors";

const mapStateToProps = (state) => {
  return {
    myPosts: myPostsReSelect(state),
    backgroundImage: bgImageReSelect(state),
    state: state,
    myProfile: getProfileReSelect(state),
    avatar: getAvatarReSelect(state),
    github: githubReSelect(state),
    login: getLoginTextReSelect(state),
    status: statusReSelect(state),
    userId: userIdReSelect(state),
    savedOwnId: state.profileUpdateReducer.savedOwnId
  };
};

const hocProfile = hoc(Profile);

export default connect(mapStateToProps, {
  thunkProfile,
  setStatusThunk,
  updateStatusOnPage,
  addPostType,
  updateBgImg,
  setStatus,
  setUserIdInProfilePage,
  thunkAvatarUpdate
})(hocProfile);
