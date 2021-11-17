import styles from "./Dialogs.module.css";
import { Link } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={styles.dialogWrapper}>
      <nav>
        <Link to="messages"></Link>
      </nav>

      <h2 className={styles.title}>DIALOGS:</h2>
    </div>
  );
};

export default Dialogs;
