import Profile from "./Profile";
import { connect } from "react-redux";
import { addPostType, PostType } from "../../reducers/posts";
import { updateBgImg, thunkProfile } from "../../reducers/updateProfile";

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

export default connect(mapStateToProps, {
  thunkProfile,
  addPostType,
  PostType,
  updateBgImg,
})(Profile);
