import styles from "./css/Dialogs.module.css";
import stylesW from "./css/DialogWindow.module.css";
import stylesI from "./css/DialogInput.module.css";
import { Link } from "react-router-dom";
import { AddUser, AddDialog } from "./AddElems";
import { useRef } from "react";

const Dialogs = ({textFromState, myProfile, dialogs, allFriends, addMessageToState, toStateThisInput}) => {
  //input start
  const AddMyDialog = ({ name, avatar, message }) => {
    return (
      <div className={stylesI.window}>
        <div className={stylesI.dialogWindow}>{message}</div>
        <div className={stylesI.dialogInfoWindow}>
          <img className={stylesI.userAvatarWindow} src={avatar} alt="avatar" />
          <div className={stylesI.userNameWindow}>{name}</div>
        </div>
      </div>
    );
  };
  const DialogInput = () => {
    const ref = useRef(null);

    const sendMesage = (e) => {
      e.preventDefault();
      if (textFromState) {
        addMessageToState();
        textFromState = "";
      } else {
        alert("type the message!");
      }
    };

    let onTypeText = () => {
      toStateThisInput(ref.current.value);
    };
    return (
      <form className={stylesI.wrapper}>
        <input
          autoFocus={true}
          placeholder="me: "
          className={stylesI.input}
          type="text"
          ref={ref}
          value={textFromState}
          onChange={onTypeText}
        />
        <button className={stylesI.btn} type="submit" onClick={sendMesage}>
          send
        </button>
      </form>
    );
  };
  //input end

  let name = myProfile.name;
  //dialog window from friends
  let dialogsJSX = dialogs.map((item) => {
    if (item.name === name) {
      return (
        <AddMyDialog
          name={item.name}
          avatar={item.avatar}
          message={item.message}
        />
      );
    } else {
      return (
        <AddDialog
          name={item.name}
          avatar={item.avatar}
          message={item.message}
          empty={item.empty}
          link={item.name}
        />
      );
    }
  });
  let messagesJSX = allFriends.map((m) => {
    return <AddUser name={m.name} avatar={m.avatar} link={m.name} />;
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.UserListWrapper}>
        <h2 className={styles.title}>Dialog:</h2>
        <ul className={styles.userList}>{messagesJSX}</ul>
        {/* for rout */}
        <nav>
          <Link to="/messages/"></Link>
        </nav>
        {/* out */}
      </div>
      {/* dialog window */}
      <div className={stylesW.wrapperDuo}>
        <div className={stylesW.wrapperWindow}>
          <div>{dialogsJSX}</div>
        </div>
        <DialogInput />
      </div>
      {/* dialog window  */}
    </div>
  );
};

export default Dialogs;
