import styles from "./Settings.module.css";
import { Link } from "react-router-dom";
import hoc from "../../hoc/hoc";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer.login,
  };
};


const SettingsPage = (props) => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="settings"></Link>
      </nav>

      <h2 className={styles.title}>SETTINGS:</h2>
    </div>
  );
};

const Settings = hoc(SettingsPage);

export default connect(mapStateToProps)(Settings);


