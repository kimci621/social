import styles from "./Video.module.css";
import { Link } from "react-router-dom";
import hoc from "../../hoc/hoc";
import React, { memo } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer.login,
  };
};
const VideoPage = memo(() => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="video"></Link>
      </nav>

      <video style={styles.c} poster={'https://static-sesure.cdn.megafon.tv/images/Film/2a/14/96ee4475306fc00a4473d5db475fce6b53ab/secondary_poster__web-wp.webp'} autoPlay={false} controls={true} height="100%" width="100%" src="https://cloud.cdnland.in/movies/eb8e1596c558641550568c18c99c7f45a260f082/c9012bdd92cf2c50fdb85798d3120e3e:2022020119/720.mp4"></video>
    </div>
  );
});

const Video = hoc(VideoPage);

export default connect(mapStateToProps)(Video);
