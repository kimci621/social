import styles from "./css/Dialogs.module.css";
import stylesW from "./css/DialogWindow.module.css";
import { NavLink } from "react-router-dom";
const AddUser = ({ name, avatar }) => {
  return (
    <li>
      <NavLink to={name} className={styles.user}>
        <img className={styles.userAvatar} src={avatar} alt="avatar" />
        <div className={styles.userName}>{name}</div>
      </NavLink>
    </li>
  );
};

const AddDialog = ({ name, avatar, message, empty = false }) => {
  switch (empty) {
    case false:
      return (
        <div className={stylesW.window}>
          <div className={stylesW.dialogInfoWindow}>
            <img
              className={stylesW.userAvatarWindow}
              src={avatar}
              alt="avatar"
            />
            <div className={stylesW.userNameWindow}>{name}</div>
          </div>
          <div className={stylesW.dialogWindow}>{message}</div>
        </div>
      );
    case true:
      return <h1>no dialog...</h1>;
    default:
      return;
  }
};

export { AddUser };
export { AddDialog };
