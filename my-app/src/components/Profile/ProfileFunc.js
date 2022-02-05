import { Link } from "react-router-dom";
import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../../assets/spinner";

const ProfileFunc = memo((props) => {
  let [inputImageActive, setInputImageActive] = useState(false);
  let [eventTarget, setEventTarget] = useState({});
  let [pendingStatus, setPendingStatus] = useState(false);
  let [avatarBtnStatus, setAvatarBtnStatus] = useState(true);
  const StatusForm = () => {
    // const { register, handleSubmit, reset } = useForm();
    // const onSubmit = (data) => {
    //   props.addPostType({
    //     text: data.post,
    //     avatar:
    //       "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
    //   });
    //   reset({ post: "" });
    // };
    // in form onSubmit={handleSubmit(onSubmit)}
    return (
      <form
        className="content--main--posts--add"
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
        }}
      >
        <input
          autoFocus={false}
          key="addPost"
          name="addPost"
          // {...register("post", { required: true, pattern: /^[A-Za-z0-9]+$/i })}
          className="content--main--posts--input"
          placeholder="your news..."
          type="text"
        ></input>
        <button className="content--main--posts--btn" type="submit">
          Send
        </button>
      </form>
    );
  };
  const Post = ({ avatarSrc, input, count }) => {
    //refactor !!
    let likeCounter = (e) => {
      e.preventDefault();
      alert(count);
    };

    return (
      <div className="content--main--posts--old--item">
        <img src={avatarSrc} alt="user-img"></img>
        <div className="old-post">{input}</div>
        <div className="likes" onClick={likeCounter}>
          <svg className="heart" viewBox="0 0 75 75">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
          <div className="count">{count}</div>
        </div>
      </div>
    );
  };
  const InputApp = () => {
    //All posts from state for export to Profile
    let posts;
    if (!props.myPosts) {
      return null;
    } else {
      posts = props.myPosts.map((post) => {
        return (
          <Post
            avatarSrc={post.avatar}
            input={post.postText}
            count={post.likesCount}
          />
        );
      });
    }
    return (
      <div className="content--main--posts">
        <div className="content--main--posts--tittle">My Posts</div>
        <StatusForm />
        <div className="content--main--posts--old">{posts ? posts : null}</div>
      </div>
    );
  };
  //background-image
  const ProfileBgApp = ({ imgSrc }) => {
    // background-image jsx
    return (
      <img className="content--main--img" src={imgSrc} alt="react-img"></img>
    );
  };
  const onChangeInputImg = (e) => {
    // saving input image to local state
    e.preventDefault();
    setEventTarget((eventTarget.image = { image: e.target.files[0] }));
    setAvatarBtnStatus(false);
  };
  const InputFileForm = () => {
    //file input for new avatar
    if (inputImageActive) {
      return (
        <form
          className="profileAvatarinput"
          onSubmit={(e) => {
            props.onSubmitInputImgInForm(
              e,
              eventTarget.image,
              props.savedOwnId,
              setPendingStatus,
              props.thunkAvatarUpdate,
              setInputImageActive
            );
          }}
        >
          {/* custom file input */}
          <label className="profileAvatarinputBtn">
            <input type="file" onChange={onChangeInputImg} id={"fileImg"} />
            {eventTarget.image
              ? `${eventTarget.image.name}`
              : "Press and select new image"}
          </label>
          <div>
            <button type="submit" disabled={avatarBtnStatus}>
              update
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setInputImageActive(false);
              }}
            >
              back
            </button>
          </div>
        </form>
      );
    } else {
      return (
        <button
          type="button"
          onClick={() => {
            setInputImageActive(true);
          }}
        >
          Update profile
        </button>
      );
    }
  };
  const PendingStatusAvatarHere = ({ avatar }) => {
    // avatar jsx with editing and pending spinner
    if (pendingStatus) {
      return <Spinner />;
    } else {
      return (
        <div className="profileAvatarinput">
          <img
            className="content--main--user--avatar"
            src={avatar}
            alt="user-img"
          ></img>
          <InputFileForm />
        </div>
      );
    }
  };
  const MainInfoInProfileWindow = ({
    name,
    job,
    github,
    newDataFromProfileWindowToApi,
    userId,
  }) => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isDirty, isValid },
    } = useForm({ mode: "onBlur" });
    const onSubmit = (data) => {
      newDataFromProfileWindowToApi(data, userId);
      reset({ fullName: "", github: "", lookingForAJob: null });
      setTimeout(() => {
        setInputImageActive(false);
      }, 1000);
    };
    if (inputImageActive === false) {
      return (
        <>
          <div className="content--main--user--info--name">Name: {name}</div>
          <div className="content--main--user--info--about">
            Looking for a Job: {job ? "yes" : "no"}
          </div>
          <div className="content--main--user--info--about">
            github: {github ? github : "no link :c"}
          </div>
        </>
      );
    } else {
      return (
        <form
          className="content--main--user--info--form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="hidden"
            name="id"
            value={userId}
            {...register("userId")}
          ></input>
          {errors.fullName && (
            <span className="errorSpan">
              Type more than 2 symbols! Field is required.
            </span>
          )}
          <input
            maxLength="30"
            className="content--main--user--info--form--item"
            placeholder={`name: ${name}`}
            name="fullName"
            {...register("fullName", {
              required: true,
              minLength: 2,
              maxLength: 30,
            })}
          ></input>
          {errors.github && (
            <span className="errorSpan">
              Type more than 3 symbols! Field is required.
            </span>
          )}
          <input
            className="content--main--user--info--form--item"
            placeholder={`github: ${github ? github : "no link :c"}`}
            name="github"
            {...register("github", {
              required: true,
              minLength: 3,
            })}
          ></input>
          <div className="jobNeedEditMode">
            need job?
            <select
              name="selectEditMode"
              className="content--main--user--info--form--item"
              {...register("lookingForAJob", { required: true })}
            >
              <option value={true}>yes</option>
              <option value={false}>no</option>
            </select>
            {errors.lookingForAJob && (
              <span className="errorSpan">Field is required.</span>
            )}
          </div>
          <button type="submit" disabled={!isDirty || !isValid}>
            update
          </button>
        </form>
      );
    }
  };
  const StatusTexteditArea = ({ register, errors, isDirty, isValid }) => {
    if (inputImageActive === true) {
      return (
        <>
          <textarea
            className="profileStatusEditArea"
            placeholder="Type your new status"
            {...register("status", { required: true, minLength: 1 })}
            maxLength="300"
          ></textarea>
          <button
            className="profileStatusEditBtn"
            type="submit"
            disabled={!isDirty || !isValid}
          >
            edit
          </button>
          {errors.status && (
            <span className="errorSpan">Type something to update status!</span>
          )}
        </>
      );
    } else {
      return <></>;
    }
  };
  //profile info-s
  const ProfileeInfo = ({ avatar, name, github, status, job }) => {
    // profile box jsx
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isDirty, isValid },
    } = useForm({ mode: "onBlur" });
    const onSubmit = (data) => {
      props.setStatusToApi(data.status);
      reset({ status: "" });
    };
    return (
      <div className="content--main--user">
        <PendingStatusAvatarHere avatar={avatar} />
        <div className="content--main--user--info">
          <MainInfoInProfileWindow
            name={name}
            job={job}
            github={github}
            newDataFromProfileWindowToApi={props.profileInfoMoveToApi}
            userId={props.userId}
          />
          <div className="content--main--user--info--about">
            Status: <p>{status}</p>
            <form
              className="profileStatusEdit"
              onSubmit={handleSubmit(onSubmit)}
            >
              <StatusTexteditArea
                register={register}
                errors={errors}
                isDirty={isDirty}
                isValid={isValid}
              />
            </form>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="content--main">
      <nav>
        <Link to="profile"></Link>
      </nav>
      <ProfileBgApp imgSrc={props.backgroundImage} />

      <ProfileeInfo
        name={props.myProfile.fullName}
        job={props.myProfile.lookingForAJob}
        status={props.statusState}
        avatar={props.avatar}
        github={props.github}
      />
      <InputApp />
    </div>
  );
});

export default ProfileFunc;
