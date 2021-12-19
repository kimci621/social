import Aside from "./Aside";
import { connect } from "react-redux";
import { setUsers } from "../../reducers/reducers";

const mapStateToProps = (state) => {
  return {
    friendsData: state.asideComponent.friendsData,
    currentPage: state.pagination.activePage,
  };
};

export default connect(mapStateToProps, {
  //mapDispatchToProps
  setUsers,
})(Aside);
