import { NavLink } from "react-router-dom";

const Aside = ({ friendsData }) => {
  //jsx for "friend" in aside bar
  const AddFriend = ({ avatar, name }) => {
    return (
      <NavLink to={name} className="content--aside--friends-item">
        <img src={avatar} alt="friend img"></img>
        <div className="friends-name">{name}</div>
      </NavLink>
    );
  };
  //AddFriend jsx for every "friend" from state
  const FriendsAside = () => {
    let allFriendsJSX = friendsData.map((f) => {
      return <AddFriend avatar={f.avatar} name={f.name} />;
    });

    return (
      <div className="content--aside--friends">
        <div className="content--aside--friends-tittle">Friends: </div>
        <div className="content--aside--friends-allItem">{allFriendsJSX}</div>
      </div>
    );
  };
  //aside nav bar with "FRIENDS" in bottom
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

      <FriendsAside />
    </div>
  );
};

export default Aside;
