import Aside from "./Aside";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    friendsData: state.asideComponent.friendsData,
  };
};

export default connect(mapStateToProps)(Aside);
