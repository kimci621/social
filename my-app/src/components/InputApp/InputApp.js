let myPosts = [{
  postText: "lorem ipsum dolor sor dolor sit amet consectetur!",
  avatar: "https://preview.redd.it/z394307odi741.png?width=960&crop=smart&auto=webp&s=cf3cf47ed51432893f33227fb3865fee75d4b721",
  likesCount: 1
}]

const Post = ({ avatarSrc, input, count }) => {
  return (
    <div className="content--main--posts--old--item">
      <img src={avatarSrc} alt="user-img"></img>
      <div className="old-post">{input}</div>
      <div className="likes"
          onClick={(e) => {
          e.preventDefault();
          document.querySelector(".heart").classList.toggle("active");
        }}>
        <svg className="heart" viewBox="0 0 75 75">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
        <div className='count'>{count}</div>
      </div>
    </div>
  );
};

const InputApp = () => {
  return (
    <div className="content--main--posts">
      <div className="content--main--posts--tittle">My Posts</div>
      <form className="content--main--posts--add">
        <input
          className="content--main--posts--input"
          placeholder="your news..."
          type="text"
        ></input>
        <button
          className="content--main--posts--btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            alert(document.querySelector(".content--main--posts--input").value);
          }}
        >
          Send
        </button>
      </form>
      <div className="content--main--posts--old">
        <Post
          avatarSrc={myPosts[0].avatar}
          input={myPosts[0].postText}
          count={myPosts[0].likesCount}
        />
      </div>
    </div>
  );
};

export default InputApp;
