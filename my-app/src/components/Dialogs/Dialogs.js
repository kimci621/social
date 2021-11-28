import styles from "./css/Dialogs.module.css";
import stylesW from "./css/DialogWindow.module.css";
import { Link } from "react-router-dom";
import DialogInput from "./DialogInput";
import { AddDialog } from "./AddElems";
import { AddUser } from "./AddElems";
import { AddMyDialog } from "./DialogInput";

const Dialogs = (props) => {
  let dialogsJSX = props.dialogData.map((d) => {
    return (
      <AddDialog
        name={d.name}
        avatar={d.avatar}
        message={d.message}
        empty={d.empty}
      />
    );
  });

  let messagesJSX = props.messagesData.map((m) => {
    return <AddUser name={m.name} avatar={m.avatar} />;
  });

  let MyMesagesJSX = props.dialogsComponent.myMesages.map((item) => {
    return (
      <AddMyDialog
        name={item.name}
        avatar={item.avatar}
        message={item.message}
      />
    );
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.UserListWrapper}>
        <h2 className={styles.title}>Dialogs:</h2>
        <ul className={styles.userList}>{messagesJSX}</ul>
        {/* for rout */}
        <nav>
          <Link to="messages"></Link>
        </nav>
        {/* out */}
      </div>
      <div className={stylesW.wrapperWindow}>
        {MyMesagesJSX}
        {dialogsJSX}
        <DialogInput dialogsComponent={props.dialogsComponent} />
      </div>
    </div>
  );
};

export default Dialogs;
