import styles from "./Dialogs.module.css";
import stylesW from "./DialogWindow.module.css";
import { Link, NavLink } from "react-router-dom";

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

const AddDialog = ({ name, avatar, message, empty = "false" }) => {
  switch (empty) {
    case "false":
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
    case "true":
      return <h1>no dialog...</h1>;
    default:
      return;
  }
};

const Dialogs = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.UserListWrapper}>
        <h2 className={styles.title}>Dialogs:</h2>
        <ul className={styles.userList}>
          <AddUser
            name="Andrew"
            avatar="https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg"
          />
          <AddUser
            name="Andrew"
            avatar="https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg"
          />
          <AddUser
            name="Andrew"
            avatar="https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg"
          />
        </ul>
        {/* for rout */}
        <nav>
          <Link to="messages"></Link>
        </nav>
        {/* out */}
      </div>
      <div className={stylesW.wrapperWindow}>
        <AddDialog
          name="Andrew"
          avatar="https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium ad nostrum ratione!Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium ad nostrum ratione!"
          empty="false"
        />
      </div>
    </div>
  );
};

export default Dialogs;
