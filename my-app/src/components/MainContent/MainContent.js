import InputApp from "../InputApp/InputApp";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="content--main">
      <nav>
        <Link to="profile"></Link>
      </nav>

      <img
        className="content--main--img"
        src="https://w.wallhaven.cc/full/3z/wallhaven-3z9vpd.jpg"
        alt="react-img"
      ></img>
      <div className="content--main--user">
        <img
          className="content--main--user--avatar"
          src="https://preview.redd.it/z394307odi741.png?width=960&crop=smart&auto=webp&s=cf3cf47ed51432893f33227fb3865fee75d4b721"
          alt="user-img"
        ></img>
        <div className="content--main--user--info">
          <div className="content--main--user--info--name">Name: Aaron Kim</div>
          <div className="content--main--user--info--about">
            Date of Birth: 22 august
          </div>
          <div className="content--main--user--info--about">City: Voronezh</div>
          <div className="content--main--user--info--about">
            About: <p>some awesome developer</p>
          </div>
        </div>
      </div>
      <InputApp />
    </div>
  );
};

export default MainContent;
