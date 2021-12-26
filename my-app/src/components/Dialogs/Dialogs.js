import DialogsFunc from "./DialogsFunc";
import React from "react";
import usersApi from "../../api/api";

class Dialogs extends React.Component {
  componentDidMount() {
    usersApi.getSelfAccount().then((res) => {
      this.props.updateProfile(res);
      this.props.updateAvatar(res.photos.large);
    });
  }
  render() {
    return (
      <DialogsFunc
        textFromState={this.props.textFromState}
        addMessageToState={this.props.addMessageToState}
        toStateThisInput={this.props.toStateThisInput}
        myProfile={this.props.myProfile}
        dialogs={this.props.dialogs}
        MyAvatar={this.props.MyAvatar}
        allFriends={this.props.allFriends}
      />
    );
  }
}

export default Dialogs;
