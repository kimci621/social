import usersApi from "../api/api";
let initialState = {
  newFriends: [],
  friendsData: [],
  usersPerPage: 10,
  allUsersPerPage: 100,
  isDisabled: false,
};

const usersReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET-USERS":
      if (action.payload) {
        newState.newFriends = [...action.payload].map((user) => {
          return user;
        });
        newState.friendsData = [...action.payload].map((user) => { // eslint-disable-line
          if (user.followed === true) {
            return {
              ...user,
              photo:
                "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
            };
          }
        });
      } else {
        newState.newFriends = [...state.newFriends].map((user) => {
          return user;
        });
        newState.friendsData = [...state.friendsData].map((user) => {
          return user;
        });
      }
      return newState;
    case "GET-USERS":
      usersApi.getActivePage(action.payload).then((res) => {
        newState.newFriends = [...res.items].map((user) => {
          return user;
        });
      });
      return newState;
    case "FOLLOW":
      newState.isDisabled = true;
      newState.friendsData = [...state.friendsData];
      newState.newFriends = newState.newFriends.map((user) => {
        if (user.id === action.payload) {
          //unfollow
          if (user.followed === true) {
            return { ...user, followed: false };
          }
          //follow
          else if (!user.followed) {
            newState.friendsData.push({
              ...user,
              photo: user.photos.large
                ? user.photos.large
                : "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
            });
            return { ...user, followed: true };
          } else {
            return { ...user };
          }
        }
        return user;
      });
      let newFriendsData = newState.friendsData.filter(
        (user) => user !== undefined
      );
      newState.friendsData = [...newFriendsData].map((user) => { // eslint-disable-line
        if (user.followed === true) {
          return user;
        }
      });
      newState.isDisabled = false;
      return newState;
    default:
      return { ...state };
  }
};

const setUsers = (payload) => {
  return { type: "SET-USERS", payload: payload };
};

const getUsers = (payload) => {
  return { type: "GET-USERS", payload: payload };
};
const follow = (payload) => {
  return { type: "FOLLOW", payload: payload };
};
const thunkUsersUpdate = () => {
  return (dispatch) => {
    usersApi.getUsers().then((res) => {
      dispatch(setUsers(res.items));
    });
  };
};

export { setUsers, getUsers, follow, thunkUsersUpdate };
export default usersReducer;
