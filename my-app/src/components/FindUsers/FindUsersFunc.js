import { React } from "react";
import styles from "./FindUsers.module.css";
import { NavLink } from "react-router-dom";
const FindUserJsx = (props) => {
  const UserWrapper = ({
    avatar,
    name,
    status,
    city,
    key,
    id,
    btnStatus,
    isDisabled,
  }) => {
    return (
      <div className={styles.userWrapper} key={key}>
        <div className={styles.leftUser}>
          <NavLink to={"/profile/" + id}>
            <img
              className={styles.userAvatar}
              src={avatar}
              alt="userImage"
            ></img>
          </NavLink>
          <button
            className={styles.followTrigger}
            type="button"
            disabled={isDisabled}
            onClick={() => {
              if (btnStatus === "follow") {
                props.addUser(id);
                props.follow(id);
              } else {
                props.deleteUser(id);
                props.follow(id);
              }
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

  const AddNewUsersToPage = () => {
    return props.users.map((user) => {
      return (
        <UserWrapper
          avatar={
            user.photos.small
              ? user.photos.small
              : "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg"
          }
          name={user.name}
          status={user.status ? user.status : "no status..."}
          city={user.city ? user.city : "unknow city..."}
          key={user.id}
          btnStatus={user.followed ? "unfollow" : "follow"}
          id={user.id}
          isDisabled={props.isDisabled}
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
        onClick={() => {
          props.moreUsers(props.activePage);
        }}
      >
        more users
      </button>
      <ul className={styles.allPages}>
        {props.li.map((li) => {
          if (li === props.activePage) {
            return (
              <li
                className={styles.activePage}
                onClick={() => {
                  props.onPageChange(li);
                }}
              >
                {li}
              </li>
            );
          } else {
            return (
              <li
                onClick={() => {
                  props.onPageChange(li);
                }}
              >
                {li}
              </li>
            );
          }
        })}
      </ul>
      <div
        className={styles.refreshBtn}
        onClick={() => {
          props.onPageChange(1);
        }}
      >
        <img src="./refresh-button.png" alt="refresh-button" />
      </div>
      <h2>End</h2>
    </div>
  );
};

export default FindUserJsx;
