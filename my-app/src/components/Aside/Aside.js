import AsideFunc from "./AsideFunc";
import React from "react";
import usersApi from "../../api/api";
class Aside extends React.Component {
  componentDidMount() {
    this.props.setUsers();
    usersApi.getUsers().then((res) => {
      this.props.updateUsers(res.items);
    });
  }

  render() {
    return (
      <AsideFunc
        friendsData={this.props.friendsData}
        setUsers={this.props.setUsers}
      />
    );
  }
}

export default Aside;
