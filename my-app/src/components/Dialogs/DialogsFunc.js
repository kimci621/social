import styles from "./css/Dialogs.module.css";
import stylesW from "./css/DialogWindow.module.css";
import stylesI from "./css/DialogInput.module.css";
import { Link } from "react-router-dom";
import { AddUser, AddDialog } from "./AddElems";
import { useForm } from "react-hook-form";

const DialogsFunc = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    props.addMessageToState({
            name: props.myProfile.fullName,
            avatar: props.MyAvatar,
            message: data.message
          });
    reset({ message: "" });
  };
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
    return (
      <form className={stylesI.wrapper} onSubmit={handleSubmit(onSubmit)}>
        <input
          autoFocus={false}
          placeholder="me: "
          className={stylesI.input}
          type="text"
          {...register("message")}
        />
        <button className={stylesI.btn} type="submit">
          send
        </button>
      </form>
    );
  };
  //input end

  //dialog window from friends
  let dialogsJSX = props.dialogs.map((item) => {
    if (item.name === props.myProfile.fullName) {
      return (
        <AddMyDialog
          name={item.name}
          avatar={props.MyAvatar}
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
  let messagesJSX = props.allFriends.map((m) => { // eslint-disable-line
    if (m) {
      return (
        <AddUser
          name={m.name}
          avatar={
            m.avatar
              ? m.avatar
              : "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg"
          }
          link={m.name}
        />
      );
    }
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

export default DialogsFunc;
