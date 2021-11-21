import {NavLink} from 'react-router-dom';

let allFrinds = [
  {
    avatarSrc:
      "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
    name: "Andrew",
  },
  {
    avatarSrc:
      "https://cdn.dribbble.com/users/588874/screenshots/2289762/media/dec5e3b1de8bc1017e1234c8df25f3b5.png?compress=1&resize=800x600",
    name: "Caesar",
  },
  {
    avatarSrc:
      "https://www.freepnglogos.com/uploads/darth-vader-png/vector-profile-darth-vader-frames-illustrations-32.png",
    name: "Collman",
  },
];

const AddFriend = ({ avatarSrc, name }) => {
  return (
    <NavLink to={name} className="content--aside--friends-item">
      <img src={avatarSrc} alt="friend img"></img>
      <div className="friends-name">{name}</div>
    </NavLink>
  );
};

let allFrindsJSX = allFrinds.map((f) => {
  return <AddFriend avatarSrc={f.avatarSrc} name={f.name} />;
});

const FriendsAside = () => {
  return (
    <div className="content--aside--friends">
      <div className="content--aside--friends-tittle">Friends: </div>
      <div className="content--aside--friends-allItem">{allFrindsJSX}</div>
    </div>
  );
};

export default FriendsAside;
