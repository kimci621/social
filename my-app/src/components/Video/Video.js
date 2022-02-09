import styles from "./Video.module.css";
import { Link } from "react-router-dom";
import hoc from "../../hoc/hoc";
import React, { memo, useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer.login,
  };
};
const VideoPage = memo(() => {
  let [disablePopupStatus, setDisablePopupStatus] = useState(false);
  let [popupContent, setPopupContent] = useState("");
  const url = "https://cloud.cdnland.in/movies/eb8e1596c558641550568c18c99c7f45a260f082/c9012bdd92cf2c50fdb85798d3120e3e:2022020119/720.mp4";

  const sendKey = (e) => {
    setPopupContent(e.target.id);
  };

  const VideoPlayer = (src) => {
    return (
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/g221Hvhv4Uo" frameborder="0" allowfullscreen title="title"></iframe>
    );
  };
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="video"></Link>
      </nav>
      <div className={disablePopupStatus ? styles.popupVideo : styles.disabled}>
        <div
          className={styles.closeBtn}
          onClick={() => {
            setDisablePopupStatus(false);
          }}
        ></div>
        <VideoPlayer src={url}/>
        {popupContent ? popupContent : <></>}
      </div>
      <div className={styles.videoTeka}>
        <div
          className={styles.videoItem}
          id="firstEpisode"
          onClick={(e) => {
            setDisablePopupStatus(true);
            sendKey(e);
          }}
        ></div>
        <div
          className={styles.videoItem}
          id="secondEpisode"
          onClick={(e) => {
            setDisablePopupStatus(true);
            sendKey(e);
          }}
        ></div>
        <div
          className={styles.videoItem}
          id="ThirdEpisode"
          onClick={(e) => {
            setDisablePopupStatus(true);
            sendKey(e);
          }}
        ></div>
      </div>
    </div>
  );
});

const Video = hoc(VideoPage);

export default connect(mapStateToProps)(Video);
