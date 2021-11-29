import styles from "./css/Dialogs.module.css";
import stylesW from "./css/DialogWindow.module.css";
import { Link } from "react-router-dom";
import DialogInput from "./DialogInput";
import { AddDialog } from "./AddElems";
import { AddUser } from "./AddElems";
import { AddMyDialog } from "./DialogInput";

const Dialogs = (props) => {
  let name = props.state.profileComponent.myProfile.name;
  //dialog window from friends
  let dialogsJSX = props.dialogData.map((item) => {
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
  let messagesJSX = props.state.asideComponent.friendsData.map((m) => {
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
      <div className={stylesW.wrapperWindow}>
        {dialogsJSX}
        <DialogInput
          dialogsComponent={props.dialogsComponent}
          state={props.state}
        />
      </div>
      {/* dialog window  */}
    </div>
  );
};

export default Dialogs;
