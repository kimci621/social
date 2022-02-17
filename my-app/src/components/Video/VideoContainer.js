import { VideoPage } from "./Video.js";
import hoc from "../../hoc/hoc";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer.login,
    movies: state.videoReducer.movies.urls,
  };
};
const VideoPageContainer = (props) => {
  return <VideoPage {...props} />;
};

const Video = hoc(VideoPageContainer);

export default connect(mapStateToProps)(Video);
