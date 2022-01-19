export const getFriendsData = (state) => {
  return state.usersReducer.friendsData;
};
export const getLoginText = (state) => {
  return state.loginReducer.login;
};
export const getProfile = (state) => {
  return state.profileUpdateReducer.myProfile;
};
export const getAvatar = (state) => {
  return state.profileUpdateReducer.avatar;
};
export const getDialogData = (state) => {
  return state.dialogsReducer.dialogData;
};
export const getNewFriends = (state) => {
  return state.usersReducer.newFriends;
};
export const getActivePage = (state) => {
  return state.paginationReducer.activePage;
};
export const getAllPages = (state) => {
  return state.paginationReducer.allPages;
};
export const getIsFetchingStatus = (state) => {
  return state.isFetchingReducer.isFetching;
};
export const getUsersPerPage = (state) => {
  return state.usersReducer.usersPerPage;
};
export const getAllUsersPerPage = (state) => {
  return state.usersReducer.allUsersPerPage;
};
export const getIsDisabledStatus = (state) => {
  return state.usersReducer.isDisabled;
};

// export const get = (state)=>{
//   return state.
// }
