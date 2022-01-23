import styles from "./News.module.css";
import { Link } from "react-router-dom";
import hoc from "../../hoc/hoc";
import React, { memo } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer.login,
  };
};
const NewsPage = memo(() => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="news"></Link>
      </nav>

      <h2 className={styles.title}>NEWS:</h2>
    </div>
  );
});

const News = hoc(NewsPage);

export default connect(mapStateToProps)(News);
