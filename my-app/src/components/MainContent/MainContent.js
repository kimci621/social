import { Link } from "react-router-dom";
import { React, useRef } from "react";

const MainContent = ({
  myPosts,
  textFromState,
  myProfile,
  backgroundImage,
  addPost,
  postTyping,
}) => {
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
    //All posts from state for export to MainContent
    let posts = myPosts.map((post) => {
      return (
        <Post
          avatarSrc={post.avatar}
          input={post.postText}
          count={post.likesCount}
        />
      );
    });
    //input value of posts
    let ref = useRef();
    //Add new post on submit button press
    let addNewPost = (e) => {
      e.preventDefault();
      if (ref.current.value) {
        //dispatch
        addPost();
        textFromState = "";
      } else {
        alert("Nothing to post!");
      }
    };
    //dispatch
    let changeState = () => {
      postTyping(ref.current.value);
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
            value={textFromState}
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
        <div className="content--main--posts--old">{posts}</div>
      </div>
    );
  };
  //inputApp end

  const bDay = `${myProfile.bDay.day} ${myProfile.bDay.month} ${myProfile.bDay.year}`;
  //background-image
  const ProfileBgApp = ({ imgSrc }) => {
    return (
      <img className="content--main--img" src={imgSrc} alt="react-img"></img>
    );
  };
  //profile info-s
  const ProfileeInfo = ({ avatar, name, bDay, city, about }) => {
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
            Date of Birth: {bDay}
          </div>
          <div className="content--main--user--info--about">City: {city}</div>
          <div className="content--main--user--info--about">
            About: <p>{about}</p>
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
      <ProfileBgApp imgSrc={backgroundImage} />
      <ProfileeInfo
        avatar={myProfile.avatar}
        name={myProfile.name}
        bDay={bDay}
        city={myProfile.city}
        about={myProfile.about}
      />
      <InputApp />
    </div>
  );
};

export default MainContent;
