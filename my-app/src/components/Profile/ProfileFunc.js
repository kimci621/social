import { Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
class ProfileFunc extends React.Component {
  state = {
    btnStatus: true,
  };
  btnActivityOn = () => {
    setTimeout(() => {
      this.setState({ btnStatus: true });
    }, 1000);
  };
  btnActivityOff = () => {
    this.setState({ btnStatus: false });
  };
  Form = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      this.props.addPostType({
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
  Post = ({ avatarSrc, input, count }) => {
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

  InputApp = () => {
    //All posts from state for export to Profile
    let posts;
    if (!this.props.myPosts) {
      return null;
    } else {
      posts = this.props.myPosts.map((post) => {
        return (
          <this.Post
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
        <this.Form />
        <div className="content--main--posts--old">{posts ? posts : null}</div>
      </div>
    );
  };
  //inputApp end

  //background-image
  ProfileBgApp = ({ imgSrc }) => {
    return (
      <img className="content--main--img" src={imgSrc} alt="react-img"></img>
    );
  };
  //profile info-s
  ProfileeInfo = ({ avatar, name, github, status, job }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      this.props.setStatusToApi(data.status);
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
                  this.btnActivityOn();
                }}
                onFocus={() => {
                  this.btnActivityOff();
                }}
                className="profileStatusEditArea"
                placeholder="Type your new status"
                {...register("status")}
                maxLength="300"
              ></textarea>
              <button
                className="profileStatusEditBtn"
                type="submit"
                disabled={this.state.btnStatus}
              >
                edit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="content--main">
        <nav>
          <Link to="profile"></Link>
        </nav>
        <this.ProfileBgApp imgSrc={this.props.backgroundImage} />

        <this.ProfileeInfo
          name={this.props.myProfile.fullName}
          job={this.props.myProfile.lookingForAJob}
          status={this.props.statusState}
          avatar={this.props.avatar}
          github={this.props.github}
        />
        <this.InputApp />
      </div>
    );
  }
}

export default ProfileFunc;
