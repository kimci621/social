import InputApp from "../InputApp/InputApp";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const ProfilInfo = ({ avatar, name, bDay, city, about }) => {
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

const BackgroundImg = ({ backgroundImg }) => {
  return (
    <img
      className="content--main--img"
      src={backgroundImg}
      alt="react-img"
    ></img>
  );
};

const MainContent = () => {
  return (
    <div className="content--main">
      <nav>
        <Link to="profile"></Link>
      </nav>
      <BackgroundImg backgroundImg="https://w.wallhaven.cc/full/3z/wallhaven-3z9vpd.jpg" />
      <ProfilInfo
        avatar="https://preview.redd.it/z394307odi741.png?width=960&crop=smart&auto=webp&s=cf3cf47ed51432893f33227fb3865fee75d4b721"
        name="Kim"
        bDay="22.08.1998"
        city="Voronezh"
        about="some awesome dev"
      />
      <InputApp />
    </div>
  );
};

export default MainContent;
