import AsideFunc from "./AsideFunc";
import React from "react";
class Aside extends React.Component {
  componentDidMount() {
    this.props.thunkUsersUpdate();
  }

  render() {
    return (
      <AsideFunc
        friendsData={this.props.friendsData}
      />
    );
  }
}

export default Aside;
