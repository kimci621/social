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
        <button className="content--main--posts--btn" type="submit">
          Send
        </button>
      </form>
      <div className="content--main--posts--old">
        <div className="content--main--posts--old--item">
          <img
            className="content--main--user--avatar"
            src="https://preview.redd.it/z394307odi741.png?width=960&crop=smart&auto=webp&s=cf3cf47ed51432893f33227fb3865fee75d4b721"
            alt="user-img"
          ></img>
          <div class="old-post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, expedita eius laborum obcaecati quidem vero?
          </div>
        </div>
        <div className="content--main--posts--old--item">
          <img
            className="content--main--user--avatar"
            src="https://preview.redd.it/z394307odi741.png?width=960&crop=smart&auto=webp&s=cf3cf47ed51432893f33227fb3865fee75d4b721"
            alt="user-img"
          ></img>
          <div class="old-post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui
            atque iure optio culpa officiis odit illum quasi laudantium officia.
          </div>
        </div>
      </div>
    </div>
  );
};


export default InputApp;