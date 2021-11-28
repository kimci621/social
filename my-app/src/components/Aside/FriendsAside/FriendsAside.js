import { NavLink } from "react-router-dom";

const AddFriend = ({ avatarSrc, name }) => {
  return (
    <NavLink to={name} className="content--aside--friends-item">
      <img src={avatarSrc} alt="friend img"></img>
      <div className="friends-name">{name}</div>
    </NavLink>
  );
};

const FriendsAside = (props) => {
  let allFriendsJSX = props.friendsData.map((f) => {
    return <AddFriend avatarSrc={f.avatarSrc} name={f.name} />;
  });

  return (
    <div className="content--aside--friends">
      <div className="content--aside--friends-tittle">Friends: </div>
      <div className="content--aside--friends-allItem">{allFriendsJSX}</div>
    </div>
  );
};

export default FriendsAside;
