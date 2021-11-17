import styles from "./Settings.module.css";
import { Link } from "react-router-dom";

const Settings = (props) => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="settings"></Link>
      </nav>

      <h2 className={styles.title}>SETTINGS:</h2>
    </div>
  );
};

export default Settings;
