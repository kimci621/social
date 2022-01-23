import DialogsFunc from "./DialogsFunc";
import React, { memo, useEffect } from "react";
const Dialogs = memo((props) => {
  useEffect(() => props.thunkProfile(), []); //eslint-disable-line

  return (
    <DialogsFunc
      textFromState={props.textFromState}
      addMessageToState={props.addMessageToState}
      myProfile={props.myProfile}
      dialogs={props.dialogs}
      MyAvatar={props.MyAvatar}
      allFriends={props.allFriends}
    />
  );
});

export default Dialogs;
