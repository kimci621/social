import InputApp from "./InputApp/InputApp";
import { Link } from "react-router-dom";

const MainContent = (props) => {
  const myProfile = props.myProfile;
  const bDay = `${myProfile.bDay.day} ${myProfile.bDay.month} ${myProfile.bDay.year}`;
  const imgSrc = props.profileBG.src;
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
      <ProfileBgApp imgSrc={imgSrc} />
      <ProfileeInfo
        avatar={myProfile.avatar}
        name={myProfile.name}
        bDay={bDay}
        city={myProfile.city}
        about={myProfile.about}
      />
      <InputApp
        myPosts={props.myPosts}
        dispatch={props.dispatch}
        onTypeText={props.onTypeText}
      />
    </div>
  );
};

export default MainContent;
