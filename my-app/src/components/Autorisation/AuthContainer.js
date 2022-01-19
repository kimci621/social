import { loginPostThunk, thunkLogin } from "../../reducers/login";
import { connect } from "react-redux";
import React from "react";
import Autorisation from "./Autorisation";
import { getLoginTextReSelect } from "../../selectors/selectors";
const mapStateToProps = (state) => {
  return {
    login: getLoginTextReSelect(state),
  };
};

class AuthContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <Autorisation {...this.props} />;
  }
}

export default connect(mapStateToProps, { loginPostThunk, thunkLogin })(
  AuthContainer
);
