import MainContent from "./MainContent";
import { connect } from "react-redux";
import { addPostType, PostType } from "../../reducers/reducers";

const mapStateToProps = (state) => {
  return {
    myPosts: state.profileComponent.myPosts,
    textFromState: state.textFromState,
    myProfile: state.profileComponent.myProfile,
    backgroundImage: state.profileComponent.profileBG.src,
  };
};


export default connect(mapStateToProps, { 
  //mapDispatchToProps
  addPostType, PostType 
})(MainContent);
