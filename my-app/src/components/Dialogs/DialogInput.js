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
const DialogInput = (props) => {
  const ref = useRef(null);
  const showInput = (e) => {
    e.preventDefault();
    props.dialogsComponent.sendMesage(ref.current.value);
    ref.current.value = "";
  };

  return (
    <form className={styles.wrapper}>
      <input
        placeholder="me: "
        className={styles.input}
        type="text"
        ref={ref}
      />
      <button className={styles.btn} type="submit" onClick={showInput}>
        send
      </button>
    </form>
  );
};

export { AddMyDialog };
export default DialogInput;
