import Profile from "./Profile";
import hoc from "../../hoc/hoc";
import { connect } from "react-redux";
import { addPostType, PostType } from "../../reducers/posts";
import {
  updateBgImg,
  thunkProfile,
  setStatusThunk,
  setStatus,
  updateStatusOnPage,
} from "../../reducers/updateProfile";

const mapStateToProps = (state) => {
  return {
    myPosts: state.postsReducer.myPosts,
    textFromState: state.postsReducer.textFromState,
    backgroundImage: state.profileUpdateReducer.bgImg,
    state: state,
    myProfile: state.profileUpdateReducer.myProfile,
    avatar: state.profileUpdateReducer.avatar,
    github: state.profileUpdateReducer.github,
    login: state.loginReducer.login,
    status: state.profileUpdateReducer.status,
  };
};

const hocProfile = hoc(Profile);

export default connect(mapStateToProps, {
  thunkProfile,
  setStatusThunk,
  updateStatusOnPage,
  addPostType,
  PostType,
  updateBgImg,
  setStatus,
})(hocProfile);
