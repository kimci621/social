import styles from "./News.module.css";
import { Link } from "react-router-dom";
import hoc from "../../hoc/hoc";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer.login,
  };
};
class NewsPage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <nav>
          <Link to="news"></Link>
        </nav>

        <h2 className={styles.title}>NEWS:</h2>
      </div>
    );
  }
}

const News = hoc(NewsPage);

export default connect(mapStateToProps)(News);
