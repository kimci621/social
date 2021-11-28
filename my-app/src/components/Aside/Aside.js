import FriendsAside from "./FriendsAside/FriendsAside";
import { NavLink } from "react-router-dom";

const Aside = (props) => {
  return (
    <div className="content--aside">
      <ul className="content--aside--nav">
        <li className="content--nav--item">
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="content--nav--item">
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li className="content--nav--item">
          <NavLink to="/news">News</NavLink>
        </li>
        <li className="content--nav--item">
          <NavLink to="/music">Music</NavLink>
        </li>
        <li className="content--nav--item">
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>

      <FriendsAside friendsData={props.friendsData}/>
    </div>
  );
};

export default Aside;
