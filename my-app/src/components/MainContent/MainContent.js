import InputApp from "./InputApp/InputApp";
import { Link } from "react-router-dom";

const MainContent = (props) => {
  const myProfile = props.myProfile;
  const bDay = `${myProfile.bDay.day} ${myProfile.bDay.month} ${myProfile.bDay.year}`;
  const ProfileeInfo = props.myProfileLogic;
  const ProfileBgApp = props.profileBG.jsx;


  return (
    <div className="content--main">
      <nav>
        <Link to="profile"></Link>
      </nav>
      <ProfileBgApp />
      <ProfileeInfo
        avatar={myProfile.avatar}
        name={myProfile.name}
        bDay={bDay}
        city={myProfile.city}
        about={myProfile.about}
      />
      <InputApp
        myPosts={props.myPosts}
        addPost={props.addPost}
        onPostChange={props.onPostChange}
      />
    </div>
  );
};

export default MainContent;
