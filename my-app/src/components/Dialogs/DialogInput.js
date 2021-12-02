import styles from "./css/DialogInput.module.css";
import { useRef } from "react";

const AddMyDialog = ({ name, avatar, message }) => {
  return (
    <div className={styles.window}>
      <div className={styles.dialogWindow}>{message}</div>
      <div className={styles.dialogInfoWindow}>
        <img className={styles.userAvatarWindow} src={avatar} alt="avatar" />
        <div className={styles.userNameWindow}>{name}</div>
      </div>
    </div>
  );
};

// inputToStateReducer({type: "INPUT-TO-STATE"})
const DialogInput = (props) => {
  const ref = useRef(null);

  const sendMesage = (e) => {
    e.preventDefault();
    if (props.state.onTypeTextDialogs.text) {
      props.dispatch({ type: "SEND-MESSAGE" });
      props.state.onTypeTextDialogs.text = "";
    } else {
      alert("type the message!");
    }
  };

  let onTypeText = () => {
    props.dispatch({ type: "INPUT-TO-STATE", input: ref.current.value });
  };

  return (
    <form className={styles.wrapper}>
      <input
        placeholder="me: "
        className={styles.input}
        type="text"
        ref={ref}
        value={props.state.onTypeTextDialogs.text}
        onChange={onTypeText}
      />
      <button className={styles.btn} type="submit" onClick={sendMesage}>
        send
      </button>
    </form>
  );
};

export { AddMyDialog };
export default DialogInput;
