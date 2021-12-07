import MainContent from "./MainContent";
import { connect } from "react-redux";

const addPostType = () => {
  return { type: "ADD-POST" };
};

const PostType = (input) => {
  return { type: "INPUT-TO-STATE-ADDPOST", input: input };
};

const mapStateToProps = (state) => {
  return {
    myPosts: state.profileComponent.myPosts,
    textFromState: state.textFromState,
    myProfile: state.profileComponent.myProfile,
    backgroundImage: state.profileComponent.profileBG.src,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostType());
    },
    postTyping: (input) => {
      dispatch(PostType(input));
    },
    showState: () => {
      dispatch({ type: "SHOW-STATE" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
