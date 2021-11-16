const Aside = () => {
  return (
    <div className="content--aside">
      <ul className="content--aside--nav">
        <li className="content--nav--item">Profile</li>
        <li className="content--nav--item">Messages</li>
        <li className="content--nav--item">News</li>
        <li className="content--nav--item">Music</li>
        <li className="content--nav--item">Settings</li>
      </ul>
      <div className="content--aside--friends">
        <div className="content--aside--friends-tittle">Friends: </div>
        <div className="content--aside--friends-allItem">
          <div className="content--aside--friends-item">
            <img
              src="https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg"
              alt="friend img"
            ></img>
            <div className="friends-name">Andrew</div>
          </div>
          <div className="content--aside--friends-item">
            <img
              src="https://cdn.dribbble.com/users/588874/screenshots/2289762/media/dec5e3b1de8bc1017e1234c8df25f3b5.png?compress=1&resize=800x600"
              alt="friend img"
            ></img>
            <div className="friends-name">Sasha</div>
          </div>
          <div className="content--aside--friends-item">
            <img
              src="http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Darth-Vader.png"
              alt="friend img"
            ></img>
            <div className="friends-name">Maria</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Aside;