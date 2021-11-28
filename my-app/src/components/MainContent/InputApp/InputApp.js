import { React, useRef } from "react";
const Post = ({ avatarSrc, input, count }) => {
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

const InputApp = (props) => {
  //All posts from state
  let posts = props.myPosts.map((post) => {
    return (
      <Post
        avatarSrc={post.avatar}
        input={post.postText}
        count={post.likesCount}
      />
    );
  });
  //Add new post on submit
  let addNewPost = (e) => {
    e.preventDefault();
    let text = ref.current.value;
    let addpost = props.addPost;

    if (text) {
      addpost(text);
      props.onPostChange.logic("");
    } else {
      alert("Nothing to post!");
    }
  };
  //
  let ref = useRef();
  let changeState = () => {
    props.onPostChange.logic(ref.current.value);
  };

  return (
    <div className="content--main--posts">
      <div className="content--main--posts--tittle">My Posts</div>
      <form className="content--main--posts--add">
        <input
          ref={ref}
          className="content--main--posts--input"
          placeholder="your news..."
          type="text"
          value={props.onPostChange.text}
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

export default InputApp;
