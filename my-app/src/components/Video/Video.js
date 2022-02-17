import styles from "./Video.module.css";
import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

const VideoPage = memo((props) => {
  let [disablePopupStatus, setDisablePopupStatus] = useState(false);
  let [popupContent, setPopupContent] = useState("");

  const VideoPlayer = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${popupContent}`}
        frameborder="0"
        allowfullscreen={true}
        title="title"
      ></iframe>
    );
  };

  const MovieItem = (videoSrc) => {
    return (
      <img
        key={videoSrc.videoSrc}
        className={styles.videoItem}
        onClick={(e) => {
          e.preventDefault();
          setPopupContent(videoSrc.videoSrc);
          setDisablePopupStatus(true);
        }}
        src={videoSrc.imgSrc}
        alt="asd"
      ></img>
    );
  };

  const AllMovies = () => {
    return props.movies.map((item) => {
      if (item) {
        return <MovieItem videoSrc={item.video} imgSrc={item.image} />;
      } else {
        return <></>;
      }
    });
  };
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="video"></Link>
      </nav>
      <div className={disablePopupStatus ? styles.popupVideo : styles.disabled}>
        <div
          className={styles.closeBtn}
          onClick={(e) => {
            e.preventDefault();
            setDisablePopupStatus(false);
          }}
        ></div>
        <VideoPlayer url={popupContent ? popupContent : ""} />
      </div>
      <div className={styles.videoTeka}>
        <AllMovies />
      </div>
    </div>
  );
});
export { VideoPage };
