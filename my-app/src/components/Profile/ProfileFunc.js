import { Link } from "react-router-dom";
import React from "react";

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
    //input value of posts
    let ref = React.createRef(null);
    //Add new post on submit button press
    let addNewPost = (e) => {
      e.preventDefault();
      if (ref.current.value) {
        //dispatch
        this.props.addPostType(this.props.avatar);
      } else {
        alert("Nothing to post!");
      }
    };
    //dispatch
    let changeState = () => {
      this.props.PostType(ref.current.value);
    };
    return (
      <div className="content--main--posts">
        <div className="content--main--posts--tittle">My Posts</div>
        <form className="content--main--posts--add">
          <input
            autoFocus={true}
            key="addPost"
            name="addPost"
            ref={ref}
            className="content--main--posts--input"
            placeholder="your news..."
            type="text"
            value={this.props.textFromState}
            onChange={changeState}
          ></input>
          <button
            className="content--main--posts--btn"
            type="submit"
            onClick={addNewPost}
          >
            Send
          </button>
        </form>
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
  ProfileeInfo = ({ avatar, name, github, status, job, statusValue }) => {
//         statusState={this.props.status}- redux
    let ref = React.createRef(null);
    const toLocalStateOnChange = (value) => {
      this.props.setLocalState(value);
    };
    const pushStatus = (payload) => {
      this.props.setStatusToApi(payload);
      this.props.clearLocalStatus();
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
            <form className="profileStatusEdit">
              <textarea
                onBlur={() => {
                  this.btnActivityOn();
                }}
                onFocus={() => {
                  this.btnActivityOff();
                }}
                className="profileStatusEditArea"
                placeholder="Type your new status"
                value={statusValue}
                ref={ref}
                onChange={() => {
                  toLocalStateOnChange(ref.current.value);
                }}
                maxLength="300"
              ></textarea>
              <button
                className="profileStatusEditBtn"
                type="submit"
                disabled={this.state.btnStatus}
                onClick={() => {
                  pushStatus(this.props.statusLocal);
                }}
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
          statusValue={this.props.statusLocal}
        />
        <this.InputApp />
      </div>
    );
  }
}

export default ProfileFunc;
