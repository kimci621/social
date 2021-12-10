import styles from "./FindUsers.module.css";
import { React } from "react";
const FindUsers = ({ users, follow, unFollow, showMore }) => {
  let UserWrapper = ({ avatar, name, status, city, key, id, btnStatus }) => {
    return (
      <div className={styles.userWrapper} key={key}>
        <div className={styles.leftUser}>
          <img className={styles.userAvatar} src={avatar} alt="userImage"></img>
          <button
            className={styles.followTrigger}
            type="button"
            onClick={() => {
              follow(id);
            }}
          >
            {btnStatus}
          </button>
        </div>
        <div className={styles.rightUser}>
          <div className={styles.mainInfo}>
            <h3 className={styles.name}>{name}</h3>
            <h4 className={styles.status}>{status}</h4>
          </div>
          <div className={styles.city}>{city}</div>
        </div>
      </div>
    );
  };
  let AddNewUsersToPage = () => {
    return users.map((user) => {
      return (
        <UserWrapper
          avatar={user.avatar}
          name={user.name}
          status={user.status}
          city={user.city}
          key={user.id}
          btnStatus={user.folowed ? "unfollow" : "follow"}
          id={user.id}
        />
      );
    });
  };
  return (
    <div className={styles.wrapper}>
      <h2>New Users</h2>
      <AddNewUsersToPage />
      <button
        className={styles.moreBtn}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          showMore();
        }}
      >
        more users
      </button>
      <h2>End</h2>
    </div>
  );
};

export default FindUsers;
