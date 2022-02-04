import { createSelector } from "reselect";
///---------------------------------------///
export const getFriendsData = (state) => {
  return state.usersReducer.friendsData;
};
export const getFriendsDataReSelect = createSelector(
  getFriendsData,
  (friendsData) => {
    return friendsData;
  }
);
///---------------------------------------///
export const getLoginText = (state) => {
  return state.loginReducer.login;
};
export const getLoginTextReSelect = createSelector(getLoginText, (login) => {
  return login;
});
///---------------------------------------///
export const getProfile = (state) => {
  return state.profileUpdateReducer.myProfile;
};
export const getProfileReSelect = createSelector(getProfile, (myProfile) => {
  return myProfile;
});
///---------------------------------------///
export const getAvatar = (state) => {
  return state.profileUpdateReducer.avatar;
};
export const getAvatarReSelect = createSelector(getAvatar, (avatar) => {
  return avatar;
});
///---------------------------------------///
export const getDialogData = (state) => {
  return state.dialogsReducer.dialogData;
};
export const getDialogDataReSelect = createSelector(
  getDialogData,
  (dialogData) => {
    return dialogData;
  }
);
///---------------------------------------///
export const getNewFriends = (state) => {
  return state.usersReducer.newFriends;
};
export const getNewFriendsReSelect = createSelector(
  getNewFriends,
  (newFriends) => {
    return newFriends;
  }
);
///---------------------------------------///
export const getActivePage = (state) => {
  return state.paginationReducer.activePage;
};
export const getActivePageReSelect = createSelector(
  getActivePage,
  (activePage) => {
    return activePage;
  }
);
///---------------------------------------///
export const getAllPages = (state) => {
  return state.paginationReducer.allPages;
};
export const getAllPagesReSelect = createSelector(getAllPages, (allPages) => {
  return allPages;
});
///---------------------------------------///
export const getIsFetchingStatus = (state) => {
  return state.isFetchingReducer.isFetching;
};
export const getIsFetchingStatusReSelect = createSelector(
  getIsFetchingStatus,
  (isFetching) => {
    return isFetching;
  }
);
///---------------------------------------///
export const getUsersPerPage = (state) => {
  return state.usersReducer.usersPerPage;
};
export const getUsersPerPageReSelect = createSelector(
  getUsersPerPage,
  (usersPerPage) => {
    return usersPerPage;
  }
);
///---------------------------------------///
export const getAllUsersPerPage = (state) => {
  return state.usersReducer.allUsersPerPage;
};
export const getAllUsersPerPageReSelect = createSelector(
  getAllUsersPerPage,
  (allUsersPerPage) => {
    return allUsersPerPage;
  }
);
///---------------------------------------///
export const getIsDisabledStatus = (state) => {
  return state.usersReducer.isDisabled;
};
export const getIsDisabledStatusReSelect = createSelector(
  getIsDisabledStatus,
  (isDisabled) => {
    return isDisabled;
  }
);
///---------------------------------------///
export const bgImage = (state) => {
  return state.profileUpdateReducer.bgImg;
};
export const bgImageReSelect = createSelector(bgImage, (bgImg) => {
  return bgImg;
});
///---------------------------------------///
export const myPosts = (state) => {
  return state.postsReducer.myPosts;
};
export const myPostsReSelect = createSelector(myPosts, (myPosts) => {
  return myPosts;
});
///---------------------------------------///
export const github = (state) => {
  return state.profileUpdateReducer.github;
};
export const githubReSelect = createSelector(github, (github) => {
  return github;
});
///---------------------------------------///
export const status = (state) => {
  return state.profileUpdateReducer.status;
};
export const statusReSelect = createSelector(status, (status) => {
  return status;
});

///---------------------------------------///
export const userId = (state) => {
  return state.profileUpdateReducer.userId;
};
export const userIdReSelect = createSelector(userId, (userId) => {
  return userId;
});
