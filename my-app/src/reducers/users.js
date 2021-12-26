import usersApi from "../api/api";

let initialState = {
  newFriends: [],
  friendsData: [],
  usersPerPage: 100,
};

const usersReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET-USERS":
      newState.newFriends = [...state.newFriends].map((user) => {
        return user;
      });
      newState.friendsData = [...state.friendsData];
      if (action.payload) {
        newState.newFriends = [...action.payload].map((user) => {
          console.log(user);
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
      newState.friendsData = [...state.friendsData];
      newState.newFriends = newState.newFriends.map((user) => {
        if (user.id === action.payload) {
          newState.friendsData.push({
            ...user,
            photo: user.photos.large
              ? user.photos.large
              : "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
          });
          return { ...user, followed: !user.followed };
        }
        return user;
      });
      return newState;
    case "UPDATE-ASIDE-FRIENDS":
      newState.friendsData = [...state.friendsData];
      newState.friendsData = [...action.payload].map((user) => {
        // eslint-disable-line
        if (user.followed === true) {
          console.log(user);
          return {
            ...user,
            photo:
              "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg",
          };
        }
      });
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
const updateUsers = (payload) => {
  return { type: "UPDATE-ASIDE-FRIENDS", payload: payload };
};

export { setUsers, getUsers, follow, updateUsers };
export default usersReducer;
