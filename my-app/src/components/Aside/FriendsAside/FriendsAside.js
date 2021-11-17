const AddFriend = ({ avatarSrc, name }) => {
  return (
    <div className="content--aside--friends-item">
      <img src={avatarSrc} alt="friend img"></img>
      <div className="friends-name">{name}</div>
    </div>
  );
};

const FriendsAside = () => {
  return (
    <div className="content--aside--friends">
      <div className="content--aside--friends-tittle">Friends: </div>
      <div className="content--aside--friends-allItem">
        <AddFriend
          avatarSrc="https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg"
          name="Andrew"
        />
        <AddFriend
          avatarSrc="https://cdn.dribbble.com/users/588874/screenshots/2289762/media/dec5e3b1de8bc1017e1234c8df25f3b5.png?compress=1&resize=800x600"
          name="Sasha"
        />
        <AddFriend
          avatarSrc="https://www.freepnglogos.com/uploads/darth-vader-png/vector-profile-darth-vader-frames-illustrations-32.png"
          name="Maria"
        />
        <AddFriend
          avatarSrc="https://www.freepnglogos.com/uploads/darth-vader-png/vector-profile-darth-vader-frames-illustrations-32.png"
          name="Maria"
        />
        <AddFriend
          avatarSrc="https://www.freepnglogos.com/uploads/darth-vader-png/vector-profile-darth-vader-frames-illustrations-32.png"
          name="Maria"
        />
        <AddFriend
          avatarSrc="https://www.freepnglogos.com/uploads/darth-vader-png/vector-profile-darth-vader-frames-illustrations-32.png"
          name="Maria"
        />
        <AddFriend
          avatarSrc="https://www.freepnglogos.com/uploads/darth-vader-png/vector-profile-darth-vader-frames-illustrations-32.png"
          name="Maria"
        />
        <AddFriend
          avatarSrc="https://www.freepnglogos.com/uploads/darth-vader-png/vector-profile-darth-vader-frames-illustrations-32.png"
          name="Maria"
        />
      </div>
    </div>
  );
};

export default FriendsAside;
