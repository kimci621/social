import React, { useState, useEffect } from "react";
import ProfileFunc from "./ProfileFunc";
import loader from "../../assets/loader.svg";
import { useLocation } from "react-router-dom";
const Profile = (props) => {
  const [localStatus, setLocalStatus] = useState("");
  const [bgImage] = useState(
    "https://cs9.pikabu.ru/post_img/big/2019/11/22/6/1574415727149657456.jpg"
  );
  const location = useLocation();
  useEffect(() => {
    props.updateBgImg(bgImage);
    props.thunkProfile(props.userId); // edit profile  with id
    props.updateStatusOnPage(props.userId); //edit profile status with id
    // in this thunks chose user id to see another profile
  }, [location.pathname]); //eslint-disable-line
  const clearLocalStatus = () => {
    setLocalStatus("");
  };
  const setLocalState = (payload) => {
    setLocalStatus(payload);
  };
  const onSubmitInputImgInForm = (
    e,
    imageFromInput,
    savedOwnId,
    pendingStatusSwitcher,
    thunkAvatarUpdate,
    setInputImageActive
  ) => {
    // puting image from input to api
    e.preventDefault();
    const promise = () => {
      return new Promise((resolve) => {
        if (imageFromInput) {
          pendingStatusSwitcher(true);
          thunkAvatarUpdate(imageFromInput, savedOwnId);
        }
        resolve();
      });
    };

    promise().then(() => {
      setTimeout(() => {
        pendingStatusSwitcher(false);
        setInputImageActive(false);
      }, 3000);
    });
  };


  if (!props.myProfile) {
    return <img src={loader} alt="spinner" className="loader"></img>;
  }
  return (
    <ProfileFunc
      onSubmitInputImgInForm={onSubmitInputImgInForm}
      //status start
      // local
      statusLocal={localStatus}
      setLocalState={setLocalState}
      clearLocalStatus={clearLocalStatus}
      // local end
      statusOnChange={props.setStatus}
      statusState={props.status} //editible
      setStatusToApi={props.setStatusThunk}
      //status end
      avatar={props.avatar} //editible
      myPosts={props.myPosts}
      textFromState={props.textFromState}
      myProfile={props.myProfile} //editible
      backgroundImage={props.backgroundImage}
      github={props.github} //editible
      addPostType={props.addPostType}
      //put avatar
      thunkAvatarUpdate={props.thunkAvatarUpdate}
      savedOwnId={props.savedOwnId}
    />
  );
};

export default Profile;
