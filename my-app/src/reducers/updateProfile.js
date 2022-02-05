import usersApi from "../api/api";
import { putImageApi, putMainInfoInProfile } from "../api/api";

let initialState = {
  myProfile: {},
  avatar: null,
  bgImg: null,
  github: null,
  status: "",
  userId: null,
  savedOwnId: null,
};
const profileUpdateReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "UPDATE-PROFILE":
      newState.myProfile = {
        ...state.myProfile,
      };
      newState.myProfile = { ...action.payload };
      return newState;
    case "UPDATE-AVATAR":
      newState.avatar = {
        ...state.avatar,
      };
      newState.avatar = action.payload;
      return newState;
    case "UPDATE-BACKGROUNDIMAGE":
      newState.bgImg = {
        ...state.bgImg,
      };
      newState.bgImg = action.payload;
      return newState;
    case "UPDATE-GITHUB":
      newState.github = {
        ...state.github,
      };
      newState.github = action.payload;
      return newState;
    case "SET_STATUS":
      newState.status = {
        ...state.status,
      };
      newState.status = action.payload;
      return newState;
    case "SET-USERID-IN-PROFILEPAGE":
      newState.userId = {
        ...state.userId,
      };
      newState.userId = action.payload;
      return newState;
    case "SAVE-OWN-ID":
      newState.savedOwnId = {
        ...state.savedOwnId,
      };
      newState.savedOwnId = action.payload;
      return newState;
    default:
      return { ...state };
  }
};

export const saveOwnId = (payload) => {
  return { type: "SAVE-OWN-ID", payload: payload };
};

export const updateProfile = (payload) => {
  return { type: "UPDATE-PROFILE", payload: payload };
};

export const setUserIdInProfilePage = (payload) => {
  return { type: "SET-USERID-IN-PROFILEPAGE", payload: payload };
};

export const updateAvatar = (payload) => {
  return { type: "UPDATE-AVATAR", payload: payload };
};
export const updateBgImg = (payload) => {
  return { type: "UPDATE-BACKGROUNDIMAGE", payload: payload };
};
export const updateGithub = (payload) => {
  return { type: "UPDATE-GITHUB", payload: payload };
};
export const setStatus = (payload) => {
  return { type: "SET_STATUS", payload: payload };
};
//redux-thunks, api from api.js
export const thunkProfile = (userId) => {
  return (dispatch) => {
    usersApi.getSelfAccount(userId).then((res) => {
      dispatch(updateProfile(res));
      res.photos.large
        ? dispatch(updateAvatar(res.photos.large))
        : dispatch(
            updateAvatar(
              "https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh.jpg"
            )
          );
      dispatch(updateGithub(res.contacts.github));
    });
  };
};
export const updateStatusOnPage = (userId) => {
  return (dispatch) => {
    usersApi.getStatus(userId).then((res) => {
      dispatch(setStatus(res.data));
    });
  };
};
export const setStatusThunk = (payload) => {
  return (dispatch) => {
    usersApi.updateStatus(payload).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setStatus(payload));
      }
    });
  };
};
export const thunkAvatarUpdate = (payload, userId) => {
  return (dispatch) => {
    putImageApi.putNewImage(payload).then(() => {
      usersApi.getSelfAccount(userId).then((res) => {
        dispatch(updateAvatar(res.photos.large));
      });
    });
  };
};
export const profileInfoMoveToApi = (payload, userId) => {
  return (dispatch) => {
    putMainInfoInProfile.putPayloadToApi(payload).then((res) => {
      if (res.data.resultCode === 0) {
        usersApi.getSelfAccount(userId).then((res) => {
          dispatch(updateProfile(res));
        });
      }
    });
  };
};

export default profileUpdateReducer;
