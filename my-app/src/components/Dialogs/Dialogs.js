import DialogsFunc from "./DialogsFunc";
import React from "react";
class Dialogs extends React.Component {
  componentDidMount() {
    this.props.thunkProfile();
  }
  render() {
    return (
      <DialogsFunc
        textFromState={this.props.textFromState}
        addMessageToState={this.props.addMessageToState}
        myProfile={this.props.myProfile}
        dialogs={this.props.dialogs}
        MyAvatar={this.props.MyAvatar}
        allFriends={this.props.allFriends}
      />
    );
  }
}

export default Dialogs;
