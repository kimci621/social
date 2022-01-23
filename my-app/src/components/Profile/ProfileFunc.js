import { Link } from "react-router-dom";
import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
const ProfileFunc = memo((props) => {
  let [btnStatus, setBtnStatus] = useState(false);
  const btnActivityOn = () => {
    setTimeout(() => {
      setBtnStatus(true);
    }, 1000);
  };
  const btnActivityOff = () => {
    setBtnStatus(false);
  };
  const Form = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      props.addPostType({
        text: data.post,
        avatar:
          "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
      });
      reset({ post: "" });
    };
    return (
      <form
        className="content--main--posts--add"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          autoFocus={false}
          key="addPost"
          name="addPost"
          {...register("post", { required: true, pattern: /^[A-Za-z0-9]+$/i })}
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
  //inputApp start
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
        <Form />
        <div className="content--main--posts--old">{posts ? posts : null}</div>
      </div>
    );
  };
  //inputApp end

  //background-image
  const ProfileBgApp = ({ imgSrc }) => {
    return (
      <img className="content--main--img" src={imgSrc} alt="react-img"></img>
    );
  };
  //profile info-s
  const ProfileeInfo = ({ avatar, name, github, status, job }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      props.setStatusToApi(data.status);
      reset({ status: "" });
    };
    return (
      <div className="content--main--user">
        <img
          className="content--main--user--avatar"
          src={avatar}
          alt="user-img"
        ></img>
        <div className="content--main--user--info">
          <div className="content--main--user--info--name">Name: {name}</div>
          <div className="content--main--user--info--about">
            Looking for a Job: {job ? "yes" : "no"}
          </div>
          <div className="content--main--user--info--about">
            github: {github ? github : "no link :c"}
          </div>
          <div className="content--main--user--info--about">
            Status: <p>{status}</p>
            <form
              className="profileStatusEdit"
              onSubmit={handleSubmit(onSubmit)}
            >
              <textarea
                onBlur={() => {
                  btnActivityOn();
                }}
                onFocus={() => {
                  btnActivityOff();
                }}
                className="profileStatusEditArea"
                placeholder="Type your new status"
                {...register("status")}
                maxLength="300"
              ></textarea>
              <button
                className="profileStatusEditBtn"
                type="submit"
                disabled={btnStatus}
              >
                edit
              </button>
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
