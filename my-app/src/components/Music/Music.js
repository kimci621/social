import styles from "./Music.module.css";
import { Link } from "react-router-dom";

const Music = (props) => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="music"></Link>
      </nav>

      <h2 className={styles.title}>MUSIC:</h2>
    </div>
  );
};

export default Music;
