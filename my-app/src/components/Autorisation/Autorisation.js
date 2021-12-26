import styles from "./Autorisation.module.css";
import { Link } from "react-router-dom";

const Autorisation = (props) => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="/login/*"></Link>
      </nav>

      <h2 className={styles.title}>login:</h2>
    </div>
  );
};

export default Autorisation;
