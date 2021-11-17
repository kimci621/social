import styles from "./News.module.css";
import { Link } from "react-router-dom";

const News = (props) => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="news"></Link>
      </nav>

      <h2 className={styles.title}>NEWS:</h2>
    </div>
  );
};

export default News;
