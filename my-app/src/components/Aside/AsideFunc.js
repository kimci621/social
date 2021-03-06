import { NavLink } from "react-router-dom";

const AsideFunc = (props) => {
  //jsx for "friend" in aside bar
  const AddFriend = ({ avatar, name, id }) => {
    return (
      <NavLink
        to={"/profile/" + name}
        className="content--aside--friends-item"
        onClick={() => {
          props.setUserIdInProfilePage(id);
        }}
      >
        <img src={avatar} alt="friend img"></img>
        <div className="friends-name">{name}</div>
      </NavLink>
    );
  };
  //AddFriend jsx for every "friend" from state
  const FriendsAside = () => {
    let allFriendsJSX = props.friendsData.map((f) => {// eslint-disable-line
      if (f) {
        return <AddFriend avatar={f.photo} name={f.name} id={f.id} />;
      }
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
          <NavLink
            onClick={() => {
              props.setUserIdInProfilePage(props.savedOwnId);
            }}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className="content--nav--item">
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li className="content--nav--item">
          <NavLink to="/video">Video</NavLink>
        </li>
        <li className="content--nav--item">
          <NavLink to="/music">Music</NavLink>
        </li>
        <li className="content--nav--item">
          <NavLink to="/users">Users</NavLink>
        </li>
        <li className="content--nav--item">
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>

      {props.login ? <FriendsAside /> : null}
    </div>
  );
};

export default AsideFunc;
