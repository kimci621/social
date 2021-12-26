import Profile from "./Profile";
import { connect } from "react-redux";
import { addPostType, PostType } from "../../reducers/posts";
import {
  updateProfile,
  updateAvatar,
  updateBgImg,
  updateGithub,
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPostType: (payload) => {
      dispatch(addPostType(payload));
    },
    PostType: (input) => {
      dispatch(PostType(input));
    },
    updateProfile: (payload) => {
      dispatch(updateProfile(payload));
    },
    updateAvatar: (payload) => {
      dispatch(updateAvatar(payload));
    },
    updateBgImg: (payload) => {
      dispatch(updateBgImg(payload));
    },
    updateGithub: (payload) => {
      dispatch(updateGithub(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
